(() => {
    goog.require('Mixly.Modules');
    goog.require('Mixly.Env');
    goog.require('Mixly.Electron.Serial');
    goog.require('Mixly.LayerExtend');
    goog.require('Mixly.Config');
    goog.provide('Mixly.Electron.ArduShell');
    goog.require('layui');

    const { Modules, Env, Electron, LayerExtend, Config } = Mixly;

    const { BOARD } = Config;

    Modules.fsExtend = require((BOARD?.thirdPartyBoard ? '../../' : '../') + '/common/mixly/node-modules/fsExtend.js');
    
    const { fs, fsExtend, path, lodash_fp, child_process } = Modules;

    const { ArduShell } = Electron;
    let arduinoShell = null;

    ArduShell.compiling = false;
    ArduShell.uploading = false;

    ArduShell.binFilePath = "";

    ArduShell.arduinoCliPath = Mixly.Env.clientPath + "/arduino-cli";

    // 检测默认路径下是否有arduino-cli可执行文件，如果没有，则使用配置文件中所提供的arduino-cli路径
    try {
        if (Mixly.Env.currentPlatform == "win32") {
            fs.statSync(ArduShell.arduinoCliPath + "/arduino-cli.exe").isFile();
        } else {
            fs.statSync(ArduShell.arduinoCliPath + "/arduino-cli").isFile();
        }
    } catch (e) {
        try {
            let defaultPath = Mixly.Config.SOFTWARE?.defaultPath[Mixly.Env.currentPlatform] ?? undefined;
            // 判断配置文件中是否具有arduino-cli路径
            if (defaultPath?.arduinoCli) {
                ArduShell.arduinoCliPath = path.resolve(Mixly.Env.clientPath, defaultPath.arduinoCli);
            }
        } catch (e) {
            console.log(e);
        }

        if (ArduShell.arduinoCliPath != Mixly.Env.clientPath + "/arduino-cli") {
            try {
                ArduShell.arduinoCliPath = path.resolve(ArduShell.arduinoCliPath, "../").replace(/\\/g, "/");
            } catch (e) {
                ArduShell.arduinoCliPath = path.resolve(ArduShell.arduinoCliPath, "../");
            }
        }
    }

    var handleHWDir = function (path) {
        let jsonPath = ArduShell.arduinoCliPath + "/Arduino15/";
        let packagePath = jsonPath + "/packages/";
        let hardwarePath = path + "/hardware/";
        if (fsExtend.isdir(hardwarePath)) {
            let nameArr = fsExtend.getDirAndFileName(hardwarePath);
            if (!nameArr) return;
            let newDelPath = {};
            newDelPath.file = {};
            newDelPath.dir = {};
            newDelPath.file.path = jsonPath;
            newDelPath.dir.path = packagePath;
            newDelPath.file.name = nameArr[0];
            newDelPath.dir.name = nameArr[1];
            try {
                let newDelPathStr = JSON.stringify(newDelPath);
                fs.writeFileSync(path + "/path.json", newDelPathStr);
            } catch(e) {
                console.log(e);
            }
            fsExtend.deldirWithName(packagePath, nameArr[1]);
            fsExtend.cpfileWithName(hardwarePath, jsonPath, nameArr[0]);
            fsExtend.cpdirWithName(hardwarePath, packagePath, nameArr[1], function () {
                fsExtend.deldir(hardwarePath);
            });
        }
    }

    ArduShell.init = () => {
        ArduShell.configFileData = `
    board_manager:
      additional_urls: [
        https://arduino.esp8266.com/stable/package_esp8266com_index.json,
        https://dl.espressif.com/dl/package_esp32_index.json
      ]
    daemon:
      port: "50051"
    directories:
      data: ${ArduShell.arduinoCliPath}/Arduino15
      downloads: ${ArduShell.arduinoCliPath}/staging
      user: ${ArduShell.arduinoCliPath}/Arduino
    library:
      enable_unsafe_install: false
    logging:
      file: ""
      format: text
      level: info
    metrics:
      addr: :9090
      enabled: true
    sketch:
      always_export_binaries: false
    `;

        fs.writeFile(ArduShell.arduinoCliPath + "/arduino-cli.yaml", ArduShell.configFileData, 'utf8', function (err) {
            if (err) {
                Mixly.StatusBar.setValue(indexText["无法更新"] + ArduShell.arduinoCliPath + "/arduino-cli.yaml" + "\n" + err, true);
            } else {
                handleHWDir(Mixly.Config.BOARD?.folderPath);
            }
        });
    }

    ArduShell.initWithDropdownBox = function () {
        if (typeof (Mixly.Electron.BU) != "undefined" && Mixly.Electron.BU.burning) {
            ArduShell.burn();
        } else {
            ArduShell.upload();
        }
    }

    ArduShell.burn = function () {
        Mixly.StatusBarPort.tabChange("output");
        layer.closeAll('page');
        // 当出现串口选择框时，先关闭串口选择框再上传
        document.getElementById('serial-device-form').style.display = 'none';
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: indexText["烧录中"] + "...",
                content: $('#webusb-flashing'),
                shade: Mixly.LayerExtend.shadeWithHeight,
                closeBtn: 0,
                success: function () {
                    $(".layui-layer-page").css("z-index", "198910151");
                },
                end: function () {
                    document.getElementById('webusb-flashing').style.display = 'none';
                    $(".layui-layer-shade").remove();
                }
            });
            var portData = $('#select_serial_device option:selected').val();
            if (portData == 'all') {
                var device_values = $.map($('#select_serial_device option'), function (ele) {
                    return ele.value;
                });
                Mixly.Electron.BU.burnByCmd(device_values[0], 0, device_values.length - 1);
            } else {
                //Mixly.Electron.BU.esptoolBurn(com_data, Mixly.Electron.BU.ESPTOOL_COMMAND[boardType]);
                Mixly.Electron.BU.burnByCmd(portData);
            }
        });
    }

    /**
    * @function 编译
    * @description 开始一个编译过程
    * @return void
    */
    ArduShell.initCompile = function () {
        var boardType = $('#boards-type option:selected').val();
        if (Mixly.Electron.Serial.object && Mixly.Electron.Serial.object.isOpen) {
            Mixly.Electron.Serial.object.close();
        }
        ArduShell.compile(function () { });
    }

    /**
    * @function 编译
    * @description 开始一个编译过程
    * @return void
    */
    ArduShell.compile = function (doFunc = function () { }) {
        Mixly.StatusBarPort.tabChange("output");
        ArduShell.compiling = true;
        ArduShell.uploading = false;
        var boardType = $('#boards-type option:selected').val();
        Mixly.StatusBar.show(1);
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: indexText["编译中"] + "...",
                content: $('#webusb-flashing'),
                shade: Mixly.LayerExtend.shadeWithHeight,
                closeBtn: 0,
                success: function () {
                    $(".layui-layer-page").css("z-index", "198910151");
                },
                end: function () {
                    ArduShell.compiling = false;
                    ArduShell.uploading = false;
                    document.getElementById('webusb-flashing').style.display = 'none';
                    $(".layui-layer-shade").remove();
                }
            });
        });
        setTimeout(function () {
            Mixly.StatusBar.setValue(indexText["编译中"] + "...\n", true);

            var mainLibPath = "";
            try {
                if (fs.existsSync(Mixly.Env.indexPath + "/libraries/myLib/")
                    && fs.statSync(Mixly.Env.indexPath + "/libraries/myLib/").isDirectory()) {
                    mainLibPath = Mixly.Env.indexPath + "/libraries/myLib\",\"";
                }
            } catch (e) {
                console.log(e);
            }
            ArduShell.runCmd("\""
                + ArduShell.arduinoCliPath
                + "/arduino-cli\" compile -b "
                + boardType
                + " --config-file \""
                + ArduShell.arduinoCliPath
                + "/arduino-cli.yaml\" --verbose --libraries \""
                + mainLibPath
                + ArduShell.arduinoCliPath
                + "/libraries\" --build-path \""
                + Mixly.Env.clientPath
                + "/mixlyBuild\" \""
                + Mixly.Env.clientPath
                + "/testArduino/testArduino.ino\"",
                function () {
                    doFunc();
                }
            );
        }, 100);
    }

    /**
    * @function 初始化上传
    * @description 关闭已打开的串口，获取当前所连接的设备数，然后开始上传程序
    * @return void
    */
    ArduShell.initUpload = function () {
        var boardType = $('#boards-type option:selected').val();
        if (Mixly.Electron.Serial.object && Mixly.Electron.Serial.object.isOpen) {
            Mixly.Electron.Serial.object.close();
        }
        ArduShell.compiling = false;
        ArduShell.uploading = true;
        Mixly.Electron.Serial.initPortList("all", ports => {
            var form = layui.form;
            const $devNames = $('#select_serial_device');
            var oldDevice = $('#select_serial_device option:selected').val();
            $devNames.empty();
            lodash_fp.map(v => {
                if (`${v}` != "undefined") {
                    if (`${v}` == oldDevice) {
                        $devNames.append($(`<option value="${v}" selected>${v}</option>`));
                    } else {
                        $devNames.append($(`<option value="${v}">${v}</option>`));
                    }
                }
            }, ports);
            //$devNames.append('<option value="all">全部</option>');
            form.render();

            var device_num = document.getElementById("select_serial_device").length;
            if (device_num == 0) {
                var layer = layui.layer;
                layer.msg(indexText["无可用设备"] + "!", {
                    time: 1000
                });
            } else if (device_num == 1) {
                ArduShell.upload();
            } else {
                let initBtnClicked = false;
                layui.use(['layer', 'form'], function () {
                    var layer = layui.layer;
                    layer.open({
                        type: 1,
                        id: "serialSelect",
                        title: indexText["检测到多个串口，请选择："],
                        area: ['350px', '150px'],
                        content: $('#serial-device-form'),
                        shade: Mixly.LayerExtend.shade,
                        closeBtn: 0,
                        success: function (layero) {
                            document.getElementById("serialSelect").style.height = "180px";
                            $(".layui-layer-page").css("z-index", "198910151");
                            $("#cancel-btn").off("click").click(() => {
                                ArduShell.cancel();
                            });
                            $("#init-btn").off("click").click(() => {
                                layer.closeAll();
                                initBtnClicked = true;
                            });
                        },
                        end: function () {
                            document.getElementById('serial-device-form').style.display = 'none';
                            $(".layui-layer-shade").remove();
                            if (initBtnClicked) {
                                ArduShell.initWithDropdownBox();
                            }
                        }
                    });
                });
            }
        });
    }

    /**
    * @function 上传程序
    * @description 通过所选择串口号开始一个上传过程
    * @return void
    */
    ArduShell.upload = function () {
        Mixly.StatusBarPort.tabChange("output");
        var boardType = $('#boards-type option:selected').val();
        layer.closeAll('page');
        // 当出现串口选择框时，先关闭串口选择框再上传
        document.getElementById('serial-device-form').style.display = 'none';
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: indexText["上传中"] + "...",
                content: $('#webusb-flashing'),
                shade: Mixly.LayerExtend.shadeWithHeight,
                closeBtn: 0,
                success: function () {
                    $(".layui-layer-page").css("z-index", "198910151");
                },
                end: function () {
                    ArduShell.compiling = false;
                    ArduShell.uploading = false;
                    document.getElementById('webusb-flashing').style.display = 'none';
                    $(".layui-layer-shade").remove();
                }
            });
            Mixly.StatusBar.show(1);
            Mixly.StatusBar.setValue(indexText["上传中"] + "...\n", true);
            var device_select_name = $('#select_serial_device option:selected').val();
            Mixly.Electron.Serial.selectedPortName = device_select_name;

            var mainLibPath = "";
            try {
                if (fs.existsSync(Mixly.Env.indexPath + "/libraries/myLib/")
                    && fs.statSync(Mixly.Env.indexPath + "/libraries/myLib/").isDirectory()) {
                    mainLibPath = Mixly.Env.indexPath + "/libraries/myLib\",\"";
                }
            } catch (e) {
                console.log(e);
            }

            let cmdStr = "";
            if (ArduShell.binFilePath !== "") {
                cmdStr = "\""
                    + ArduShell.arduinoCliPath
                    + "/arduino-cli\" -b "
                    + boardType
                    + " upload -p "
                    + device_select_name
                    + " --config-file \""
                    + ArduShell.arduinoCliPath
                    + "/arduino-cli.yaml\" --verbose "
                    + "-i \"" + ArduShell.binFilePath + "\"";
                ArduShell.binFilePath = "";
            } else {
                cmdStr = "\""
                    + ArduShell.arduinoCliPath
                    + "/arduino-cli\" compile -b "
                    + boardType
                    + " --upload -p "
                    + device_select_name
                    + " --config-file \""
                    + ArduShell.arduinoCliPath
                    + "/arduino-cli.yaml\" --verbose --libraries \""
                    + mainLibPath
                    + ArduShell.arduinoCliPath
                    + "/libraries\" --build-path \""
                    + Mixly.Env.clientPath
                    + "/mixlyBuild\" \""
                    + Mixly.Env.clientPath
                    + "/testArduino/testArduino.ino\"";
            }
            ArduShell.runCmd(cmdStr,
                function () {
                    Mixly.StatusBar.show(1);
                    Mixly.Electron.Serial.refreshPortList("all", function () {
                        Mixly.Electron.Serial.updateSelectBox(Mixly.Electron.Serial.portList);
                        Mixly.Electron.Serial.connectPort();
                    });
                }
            );
        });
    }

    /**
    * @function 取消编译或上传
    * @description 取消正在执行的编译或上传过程
    * @return void
    */
    ArduShell.cancel = function () {
        if (arduinoShell) {
            try {
                arduinoShell.stdout.end();
                //download_shell.stdin.end();
                //var kill = spawn('kill', [arduinoShell.pid]);
                process.kill(arduinoShell.pid, 'SIGKILL');
                arduinoShell = null;
            } catch (e) {
                arduinoShell = null;
            }
        }
        layer.closeAll('page');
        document.getElementById('webusb-flashing').style.display = 'none';
        if (ArduShell.compiling) {
            layer.msg(indexText['已取消编译'], {
                time: 1000
            });
            Mixly.StatusBar.addValue("==" + indexText["已取消编译"] + "==\n", true);
        } else if (typeof (Mixly.Electron.BU) != "undefined" && Mixly.Electron.BU.burning) {
            layer.msg(indexText['已取消烧录'], {
                time: 1000
            });
            Mixly.StatusBar.addValue("==" + indexText["已取消烧录"] + "==\n", true);
            Mixly.Electron.BU.burning = false;
        } else {
            layer.msg(indexText['已取消上传'], {
                time: 1000
            });
            Mixly.StatusBar.addValue("==" + indexText["已取消上传"] + "==\n", true);
        }
        ArduShell.compiling = false;
        ArduShell.uploading = false;
        ArduShell.binFilePath = "";
        Mixly.StatusBar.scrollToTheBottom();
    }

    /**
    * @function 检测文件扩展名
    * @description 检测文件扩展名是否在扩展名列表内
    * @param fileName {String} 文件名
    * @param extensionList {Array} 扩展名列表
    * @return Boolean
    */
    ArduShell.checkFileNameExtension = function (fileName, extensionList) {
        if (!fileName) return false;
        let fileNameToLowerCase = fileName;
        let fileNameLen = fileNameToLowerCase.length;
        let fileType = fileNameToLowerCase.substring(fileNameToLowerCase.lastIndexOf("."), fileNameLen);
        if (extensionList.includes(fileType)) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * @function 检测文件扩展名
    * @description 检测文件扩展名是否为.c/.cpp或.h/.hpp
    * @param fileName {String} 文件名
    * @return Boolean
    */
    ArduShell.isCppOrHpp = function (fileName) {
        return ArduShell.checkFileNameExtension(fileName, [".c", ".cpp", ".h", ".hpp"])
    }

    /**
    * @function 检测文件扩展名
    * @description 检测文件扩展名是否为.mix/.xml或.ino
    * @param fileName {String} 文件名
    * @return Boolean
    */
    ArduShell.isMixOrIno = function (fileName) {
        return ArduShell.checkFileNameExtension(fileName, [".mix", ".xml", ".ino"]);
    }

    /**
    * @function 删除给定文件夹下文件
    * @description 删除给定文件夹下.c/.cpp和.h/.hpp文件
    * @param dir {String} 文件夹路径
    * @return void
    */
    ArduShell.clearDirCppAndHppFiles = function (dir) {
        if (fs.existsSync(dir)) {
            let libDir = fs.readdirSync(dir);
            for (let i = 0; i < libDir.length; i++) {
                if (ArduShell.isCppOrHpp(libDir[i])) {
                    fs.unlinkSync(dir + libDir[i]);
                }
            }
        }
    }

    /**
    * @function 拷贝文件
    * @description 拷贝给定文件夹下.c/.cpp和.h/.hpp文件到目标目录
    * @param oldDir {String} 起始文件夹路径
    * @param newDir {String} 目标文件夹路径
    * @return void
    */
    ArduShell.copyHppAndCppFiles = function (oldDir, newDir) {
        if (fs.existsSync(oldDir) && fs.existsSync(newDir)) {
            let oldLibDir = fs.readdirSync(oldDir);
            for (let i = 0; i < oldLibDir.length; i++) {
                if (ArduShell.isCppOrHpp(oldLibDir[i])) {
                    try {
                        fs.copyFileSync(oldDir + oldLibDir[i], newDir + oldLibDir[i]);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        }
    }

    /**
    * @function 运行一个cmd命令
    * @description 输入编译或上传的cmd命令
    * @param cmd {String} 输入的cmd命令
    * @return void
    */
    ArduShell.runCmd = function (cmd, sucFunc) {
        let fs = Modules.fs;
        var code = "";
        if (document.getElementById('tab_arduino').className == 'tabon') {
            code = editor.getValue();
        } else {
            code = Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace) || '';
        }
        if (Mixly.Env.currentPlatform == "win32") {
            try {
                cmd = cmd.replace(/\//g, "\\");
            } catch (e) {
                console.log(e);
            }
        }
        try {
            if (fs.existsSync(Mixly.Env.clientPath + "/testArduino/")) {
                if (fs.statSync(Mixly.Env.clientPath + "/testArduino/").isFile()) {
                    fs.mkdirSync(Mixly.Env.clientPath + "/testArduino/");
                }
            } else {
                fs.mkdirSync(Mixly.Env.clientPath + "/testArduino/");
            }
        } catch(e) {
            console.log(e);
        }
        ArduShell.clearDirCppAndHppFiles(Mixly.Env.clientPath + "/testArduino/");
        let nowFilePath = Mixly.Title.getFilePath();
        if (nowFilePath) {
            try {
                nowFilePath = nowFilePath.replace(/\\/g, "/");
            } catch (e) {
                console.log(e);
            }
            if (ArduShell.isMixOrIno(nowFilePath)) {
                let nowDirPath = nowFilePath.substring(0, nowFilePath.lastIndexOf("/") + 1);
                ArduShell.copyHppAndCppFiles(nowDirPath, Mixly.Env.clientPath + "/testArduino/");
            }
        }
        fs.writeFile(Mixly.Env.clientPath + "/testArduino/testArduino.ino", code, 'utf8', function (err) {
            //如果err=null，表示文件使用成功，否则，表示希尔文件失败
            if (err) {
                layer.closeAll('page');
                document.getElementById('webusb-flashing').style.display = 'none';
                layer.msg(indexText['写文件出错了，错误是：'] + err, {
                    time: 1000
                });
                Mixly.StatusBar.addValue(err, true);
            } else {
                var startTime = Number(new Date());
                arduinoShell = child_process.exec(cmd, { maxBuffer: 4096 * 1000000 }, function (error, stdout, stderr) {
                    if (error !== null) {
                        console.log("exec error" + error);
                        if (ArduShell.compiling || ArduShell.uploading) {
                            //Mixly.StatusBar.addValue(error + "\n", true);
                        }
                    }
                })

                arduinoShell.stdout.on('data', (data) => {
                    if (ArduShell.compiling || ArduShell.uploading) {
                        /*
                        try {
                            data = decode(iconv.decode(iconv.encode(data, "iso-8859-1"), 'gbk'));
                        } catch (e) {
                            console.log(e);
                        }
                        */
                        if (data.length < 20000) {
                            Mixly.StatusBar.addValue(data, true);
                        }
                        //console.log(data)
                        //console.log(data.length)
                    }
                });

                arduinoShell.stderr.on('data', (data) => {
                    if (ArduShell.compiling || ArduShell.uploading) {
                        /*
                        try {
                            data = decode(iconv.decode(iconv.encode(data, "iso-8859-1"), 'gbk'));
                        } catch (e) {
                            console.log(e);
                        }
                        */
                        Mixly.StatusBar.addValue(data, true);
                    }
                });

                arduinoShell.on('close', (code) => {
                    var timeCost = parseInt((Number(new Date()) - startTime) / 1000);
                    var timeCostSecond = timeCost % 60;
                    var timeCostMinute = parseInt(timeCost / 60);
                    var timeCostStr = (timeCostMinute ? timeCostMinute + "m" : "") + timeCostSecond + "s";
                    if (code == 0) {
                        if (ArduShell.compiling) {
                            Mixly.StatusBar.addValue("==" + indexText["编译成功"] + "(" + indexText["用时"] + " " + timeCostStr + ")==\n", true);
                            layer.msg(indexText['编译成功'] + '！', {
                                time: 1000
                            });
                        } else if (ArduShell.uploading) {
                            Mixly.StatusBar.addValue("==" + indexText["上传成功"] + "(" + indexText["用时"] + " " + timeCostStr + ")==\n", true);
                            layer.msg(indexText['上传成功'] + '！', {
                                time: 1000
                            });
                        }
                        sucFunc();
                    } else if (code == 1) {
                        //用户终止运行
                    } else if (ArduShell.uploading) {
                        if (ArduShell.compiling) {
                            Mixly.StatusBar.addValue("==" + indexText["编译失败"] + "==\n", true);
                        } else {
                            Mixly.StatusBar.addValue("==" + indexText["上传失败"] + "==\n", true);
                        }
                    }
                    ArduShell.compiling = false;
                    ArduShell.uploading = false;
                    layer.closeAll('page');
                    document.getElementById('webusb-flashing').style.display = 'none';
                    Mixly.StatusBar.scrollToTheBottom();
                });
            }
        });
    }

    ArduShell.saveBinOrHex = function (writePath) {
        ArduShell.writeFile(Mixly.Env.clientPath + "/mixlyBuild", writePath);
    }

    ArduShell.writeFile = function (readPath, writePath) {
        ArduShell.compile(function () {
            window.setTimeout(function () {
                layui.use('layer', function () {
                    var layer = layui.layer;
                    layer.open({
                        type: 1,
                        title: indexText['保存中'] + '...',
                        content: $('#webusb-flashing'),
                        shade: Mixly.LayerExtend.shade,
                        closeBtn: 0,
                        success: function () {
                            $(".layui-layer-page").css("z-index", "198910151");
                            window.setTimeout(function () {
                                try {
                                    readPath = readPath.replace(/\\/g, "/");
                                    writePath = writePath.replace(/\\/g, "/");
                                } catch (e) {
                                    console.log(e);
                                }
                                try {
                                    let writeDirPath = writePath.substring(0, writePath.lastIndexOf("."));
                                    let writeFileName = writePath.substring(writePath.lastIndexOf("/") + 1, writePath.lastIndexOf("."));
                                    let writeFileType = writePath.substring(writePath.lastIndexOf(".") + 1);
                                    if (!fs.existsSync(writeDirPath)) {
                                        fs.mkdirSync(writeDirPath);
                                    }
                                    if (fs.existsSync(writePath)) {
                                        fs.unlinkSync(writePath);
                                    }
                                    let readBinFilePath = readPath + "/testArduino.ino." + writeFileType;
                                    let binFileData = fs.readFileSync(readBinFilePath);
                                    fs.writeFileSync(writePath, binFileData);
                                    let binFileType = [
                                        ".eep",
                                        ".hex",
                                        ".with_bootloader.bin",
                                        ".with_bootloader.hex",
                                        ".bin",
                                        ".elf",
                                        ".map",
                                        ".partitions.bin",
                                        ".bootloader.bin"
                                    ]
                                    for (let i = 0; i < binFileType.length; i++) {
                                        let readFilePath = readPath + "/testArduino.ino" + binFileType[i];
                                        let writeFilePath = writeDirPath + "/" + writeFileName + binFileType[i];
                                        if (fs.existsSync(readFilePath)) {
                                            let binData = fs.readFileSync(readFilePath);
                                            fs.writeFileSync(writeFilePath, binData);
                                        }
                                    }
                                    layer.msg(indexText['保存成功'] + '！', {
                                        time: 1000
                                    });
                                } catch (e) {
                                    console.log(e);
                                    Mixly.StatusBar.addValue(e + "\n", true);
                                }
                                layer.closeAll('page');
                            }, 500);
                        },
                        end: function () {
                            document.getElementById('webusb-flashing').style.display = 'none';
                            $(".layui-layer-shade").remove();
                        }
                    });
                });
            }, 1000);
        });
    }

    ArduShell.showUploadBox = function (path) {
        try {
            path = path.replace(/\\/g, "/");
        } catch (e) {
            console.log(e);
        }
        let dirPath = path.substring(0, path.lastIndexOf("."));
        try {
            let stat = fs.lstatSync(dirPath);
            if (stat.isDirectory()) {
                path = dirPath + "/" + path.substring(path.lastIndexOf("/") + 1);
            }
        } catch (e) {
            console.log(e);
        }
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.msg(indexText['所打开文件可直接上传'], {
                time: 20000, //20s后自动关闭
                btn: [indexText['取消'], indexText['上传']],
                shade: Mixly.LayerExtend.shade,
                btnAlign: 'c',
                yes: function () {
                    layer.closeAll();
                    ArduShell.binFilePath = "";
                    layer.msg(indexText['已取消上传'], {
                        time: 1000
                    });
                },
                btn2: function () {
                    layer.closeAll();
                    ArduShell.uploadWithBinOrHex(path);
                },
                end: function () {
                    ArduShell.binFilePath = "";
                }
            });
        });

    }

    ArduShell.uploadWithBinOrHex = function (path) {
        layer.closeAll();
        ArduShell.binFilePath = path;
        ArduShell.initUpload();
    }
})();