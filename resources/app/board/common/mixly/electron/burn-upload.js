goog.provide('Mixly.Electron.BU');
goog.require('Mixly.Config');
goog.require('Mixly.Electron.Serial');
goog.require('Mixly.StatusBar');
goog.require('Mixly.Modules');
goog.require('Mixly.LayerExtend');

var downloadShell = null;
Mixly.Modules.iconvLite = require('iconv-lite');

Mixly.Electron.BU.uploading = false;

Mixly.Electron.BU.burning = false;

Mixly.Electron.BU.uploadType = "";

Mixly.Electron.BU.uploadVolumeName = "";

Mixly.Electron.BU.uploadFileType = "";

Mixly.Electron.BU.uploadFilePath = "";

Mixly.Electron.BU.uploadCommand = "";

Mixly.Electron.BU.burnCommand = "";

Mixly.Electron.BU.uploadAndCopyLib = false;

function isExitsFunction(funcName) {
    try {
        if (typeof (eval(funcName)) == "function") {
            return true;
        }
    } catch (e) { }
    return false;
}

function replaceWithReg(str, newData, type) {
    if (str) {
        try {
            var re = new RegExp("{[\s]*" + type + "[\s]*}", "gim");
            return str.replace(re, newData);
        } catch (e) {
            return str;
        }
    }
    return str;
}

/**
* @function 读取json并获取相关数据
* @description 读取Mixly.Config.BOARD，从中获取uploadFilePath、uploadFileType、uploadVolumeName、burnCommand、uploadCommand
* @return void
*/
Mixly.Electron.BU.readConfigAndSet = function () {
    if (Mixly.Config.BOARD?.upload?.filePath) {
        Mixly.Electron.BU.uploadFilePath = Mixly.Config.BOARD.upload.filePath;
        try {
            Mixly.Electron.BU.uploadFilePath = Mixly.Electron.BU.uploadFilePath.replace(/\\/g, "/");
        } catch (e) {
            console.log(e);
        }
        Mixly.Electron.BU.uploadFilePath = replaceWithReg(Mixly.Electron.BU.uploadFilePath, Mixly.Env.clientPath, "path");
        Mixly.Electron.BU.uploadFilePath = replaceWithReg(Mixly.Electron.BU.uploadFilePath, Mixly.Env.indexPath, "indexPath");
        if (Mixly.Electron.BU.uploadFilePath.toLowerCase().indexOf(".py") != -1) {
            Mixly.Electron.BU.uploadFileType = "py";
        } else {
            Mixly.Electron.BU.uploadFileType = "hex";
        }
    } else {
        Mixly.Electron.BU.uploadFileType = "py";
        Mixly.Electron.BU.uploadFilePath = Mixly.Env.clientPath + "/" + "mpbuild/main.py";
    }
    if (Mixly.Config.BOARD?.upload?.type) {
        Mixly.Electron.BU.uploadType = Mixly.Config.BOARD.upload.type;
    } else {
        Mixly.Electron.BU.uploadType = "ampy";
    }
    if (Mixly.Electron.BU.uploadType == "volumeLabel") {
        if (Mixly.Env.currentPlatform == "darwin" || Mixly.Env.currentPlatform == "linux") {
            if (typeof Mixly.Config.BOARD.upload?.volumeName == "string") {
                Mixly.Electron.BU.uploadVolumeName = Mixly.Config.BOARD.upload.volumeName;
            } else if (typeof Mixly.Config.BOARD.upload?.volumeName == "object") {
                Mixly.Electron.BU.uploadVolumeName = Mixly.Config.BOARD.upload.volumeName[0];
                for (var i = 1; i < Mixly.Config.BOARD.upload.volumeName.length; i++) {
                    Mixly.Electron.BU.uploadVolumeName += "/" + Mixly.Config.BOARD.upload.volumeName[i];
                }
            } else {
                Mixly.Electron.BU.uploadVolumeName = "CIRCUITPY";
            }
        } else {
            if (typeof Mixly.Config.BOARD.upload?.volumeName == "string") {
                Mixly.Electron.BU.uploadVolumeName = "VolumeName='" + Mixly.Config.BOARD.upload.volumeName + "'";
            } else if (typeof Mixly.Config.BOARD.upload?.volumeName == "object") {
                Mixly.Electron.BU.uploadVolumeName = "VolumeName='" + Mixly.Config.BOARD.upload.volumeName[0] + "'";
                for (var i = 1; i < Mixly.Config.BOARD.upload.volumeName.length; i++) {
                    Mixly.Electron.BU.uploadVolumeName += " or VolumeName='" + Mixly.Config.BOARD.upload.volumeName[i] + "'";
                }
            } else {
                Mixly.Electron.BU.uploadVolumeName = "VolumeName='CIRCUITPY'";
            }
        }
    }
    if (Mixly.Config.BOARD?.burn?.command) {
        Mixly.Electron.BU.burnCommand = Mixly.Config.BOARD.burn.command;
        try {
            Mixly.Electron.BU.burnCommand = Mixly.Electron.BU.burnCommand.replace(/\\/g, "/");
        } catch (e) {
            console.log(e);
        }
        var pyToolName = ["esptool", "kflash", "stm32loader", "stm32bl"];
        var pyToolPath = "{path}/mixpyBuild/win_python3/Lib/site-packages/"
        if (Mixly.Env.currentPlatform == "darwin" || Mixly.Env.currentPlatform == "linux") {
            pyToolPath = "{path}/pyTools/";
        }
        for (var i = 0; i < pyToolName.length; i++) {
            if (Mixly.Electron.BU.burnCommand.indexOf("\"") != -1) {
                Mixly.Electron.BU.burnCommand = replaceWithReg(Mixly.Electron.BU.burnCommand, Mixly.Env.python3Path + "\" \"" + pyToolPath + pyToolName[i] + ".py", pyToolName[i]);
            } else {
                Mixly.Electron.BU.burnCommand = replaceWithReg(Mixly.Electron.BU.burnCommand, Mixly.Env.python3Path + " " + pyToolPath + pyToolName[i] + ".py", pyToolName[i]);
            }
        }
        Mixly.Electron.BU.burnCommand = replaceWithReg(Mixly.Electron.BU.burnCommand, Mixly.Env.clientPath, "path");
        Mixly.Electron.BU.burnCommand = replaceWithReg(Mixly.Electron.BU.burnCommand, Mixly.Env.indexPath, "indexPath");
    }
    if (Mixly.Config.BOARD?.upload?.command) {
        Mixly.Electron.BU.uploadCommand = Mixly.Config.BOARD.upload.command;
        try {
            Mixly.Electron.BU.uploadCommand = Mixly.Electron.BU.uploadCommand.replace(/\\/g, "/");
        } catch (e) {
            console.log(e);
        }
        if (Mixly.Env.currentPlatform == "darwin" || Mixly.Env.currentPlatform == "linux") {
            Mixly.Electron.BU.uploadCommand = replaceWithReg(Mixly.Electron.BU.uploadCommand, Mixly.Env.python3Path + "\" \"{path}/pyTools/ampy/cli.py", "ampy");
        } else {
            Mixly.Electron.BU.uploadCommand = replaceWithReg(Mixly.Electron.BU.uploadCommand, Mixly.Env.python3Path + "\" \"{path}/mixpyBuild/win_python3/Lib/site-packages/ampy/cli.py", "ampy");
        }
        console.log(Mixly.Electron.BU.uploadCommand);
        Mixly.Electron.BU.uploadCommand = replaceWithReg(Mixly.Electron.BU.uploadCommand, Mixly.Env.clientPath, "path");
        Mixly.Electron.BU.uploadCommand = replaceWithReg(Mixly.Electron.BU.uploadCommand, Mixly.Env.indexPath, "indexPath");

        if (Mixly.Config.BOARD?.upload?.reset) {
            let resetStr = '{}';
            try {
                resetStr = JSON.stringify(Mixly.Config.BOARD.upload.reset);
                resetStr = resetStr.replaceAll('\"', '\\\"')
            } catch (e) {
                console.log(e);
            }
            console.log(resetStr)
            Mixly.Electron.BU.uploadCommand = replaceWithReg(Mixly.Electron.BU.uploadCommand, resetStr, "reset");
        }
    }
    if (Mixly.Config.BOARD?.upload?.copyLib) {
        Mixly.Electron.BU.uploadAndCopyLib = Mixly.Config.BOARD.upload.copyLib;
    }
}

try {
    /*
    if (Mixly.Env.currentPlatform === "darwin" || Mixly.Env.currentPlatform === "linux") {
        Mixly.Modules.child_process.exec('which python3', function (error, stdout, stderr) {
            if (error || stdout == null) {
                Mixly.Env.python3Path = '/usr/local/bin/python3';
            } else {
                Mixly.Env.python3Path = stdout.replace("\n", "");
            }
            console.log(Mixly.Env.python3Path);
            Mixly.Electron.BU.readConfigAndSet();
        });
    } else {
        Mixly.Electron.BU.readConfigAndSet();
    }
    */
    if (Mixly.Env.currentPlatform !== "win32") {
        if (Mixly.Modules.fs.existsSync("/usr/local/bin/python3")) {
            Mixly.Env.python3Path = '/usr/local/bin/python3';
        }
        console.log(Mixly.Env.python3Path);
    }
} catch (e) {
    console.log(e);
}

Mixly.Electron.BU.readConfigAndSet();

/**
* @function 烧录或上传时判断是否有多个设备
* @description 判断是否有多个设备，如果存在，则弹出设备选择框，若不存在，则开始一个烧录或上传过程
* @param burn {Boolean} 烧录或上传，true - 烧录，false - 上传
* @param addAllOption {Boolean} 是否在串口下拉框内添加【全部】选项，true - 添加，false - 不添加
* @return void
*/
Mixly.Electron.BU.checkNumOfSerialPort = function (ports, burn, addAllOption, command) {
    var form = layui.form;
    const $devNames = $('#select_serial_device');
    var old_Device = $('#select_serial_device option:selected').val();
    $devNames.empty();
    Mixly.Modules.lodash_fp.map(v => {
        if (v != undefined && v != '') {
            if (`${v}` == old_Device) {
                $devNames.append($(`<option value="${v}" selected>${v}</option>`));
            } else {
                $devNames.append($(`<option value="${v}">${v}</option>`));
            }
        }
    }, ports);

    form.render();

    var device_num = document.getElementById("select_serial_device").length;

    if (device_num > 1 && addAllOption) {
        if (old_Device == 'all') {
            $devNames.append('<option value="all" selected>' + indexText['全部'] + '</option>');
        } else {
            $devNames.append('<option value="all">' + indexText['全部'] + '</option>');
        }
        device_num++;
    } else {
        addAllOption = false;
    }

    form.render();

    if (device_num > addAllOption) {
        if (burn)
            Mixly.Electron.BU.burning = true;
        else
            Mixly.Electron.BU.uploading = true;
    }
    if (device_num == addAllOption) {
        layer.msg(indexText['无可用设备'] + '!', {
            time: 1000
        });
        Mixly.Electron.BU.burning = false;
        Mixly.Electron.BU.uploading = false;
    } else if (device_num == 1 + addAllOption) {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: (burn ? indexText['烧录中'] + '...' : indexText['上传中'] + '...'),
                content: $('#webusb-flashing'),
                shade: Mixly.LayerExtend.shadeWithHeight,
                closeBtn: 0,
                success: function () {
                    $(".layui-layer-page").css("z-index","198910151");
                },
                end: function () {
                    document.getElementById('webusb-flashing').style.display = 'none';
                    $(".layui-layer-shade").remove();
                }
            });
            var com_data = $('#select_serial_device option:selected').val();
            if (burn) {
                Mixly.Electron.BU.burnByCmd(com_data, command);
            } else {
                Mixly.Electron.BU.uploadByCmd(com_data, command);
            }
        });
    } else {
        let initBtnClicked = false;
        layui.use(['layer', 'form'], function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                id: "serialSelect",
                title: indexText['检测到多个串口，请选择：'],
                area: ['350px', '150px'],
                content: $('#serial-device-form'),
                shade: Mixly.LayerExtend.shade,
                closeBtn: 0,
                success: function (layero) {
                    document.getElementById("serialSelect").style.height = "195px";
                    $(".layui-layer-page").css("z-index","198910151");
                    $("#cancel-btn").off("click").click(() => {
                        layer.closeAll();
                        Mixly.Electron.BU.cancel();
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
                        Mixly.Electron.BU.initWithDropdownBox();
                    }
                }
            });
        });
    }
}

Mixly.Electron.BU.checkNumOfDisks = function (stdout, path, pyCode, portSelect, addAllOption) {
    var wmicResult = stdout;
    wmicResult = wmicResult.replace(/\s+/g, "");
    wmicResult = wmicResult.replace("DeviceID", "");
    // wmicResult = 'G:K:F:';
    let result = wmicResult.split(':');
    console.log(result);
    var pathAdd = (Mixly.Env.currentPlatform == "win32") ? ':' : '';
    if (stdout.indexOf(":") != stdout.lastIndexOf(":")) {
        var form = layui.form;
        var device_Names = $('#select_serial_device');
        var old_Device = $('#select_serial_device option:selected').val();
        device_Names.empty();
        for (var i = 0; i < result.length; i++) {
            if (result[i]) {
                if (old_Device == result[i] + pathAdd) {
                    device_Names.append('<option value="' + result[i] + pathAdd + '" selected>' + result[i] + pathAdd + '</option>');
                } else {
                    device_Names.append('<option value="' + result[i] + pathAdd + '">' + result[i] + pathAdd + '</option>');
                }
            }
        }
        if (addAllOption) {
            if (old_Device == 'all') {
                device_Names.append('<option value="all" selected>' + indexText['全部'] + '</option>');
            } else {
                device_Names.append('<option value="all">' + indexText['全部'] + '</option>');
            }
        }
        form.render();

        layer.closeAll('page');
        document.getElementById('webusb-flashing').style.display = 'none';
        let initBtnClicked = false;
        layui.use(['layer', 'form'], function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                id: "serialSelect",
                title: indexText['检测到多个同类型设备，请选择：'],
                area: ['350px', '150px'],
                content: $('#serial-device-form'),
                shade: Mixly.LayerExtend.shade,
                closeBtn: 0,
                success: function (layero) {
                    document.getElementById("serialSelect").style.height = "195px";
                    $(".layui-layer-page").css("z-index","198910151");
                    $("#cancel-btn").off("click").click(() => {
                        layer.closeAll();
                        Mixly.Electron.BU.cancel();
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
                        Mixly.Electron.BU.initWithDropdownBox();
                    }
                }
            });
        });
    } else {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: indexText['上传中'] + '...',
                content: $('#webusb-flashing'),
                shade: Mixly.LayerExtend.shadeWithHeight,
                closeBtn: 0,
                success: function () {
                    Mixly.Electron.BU.writeAndCopyFile(path, result[0] + pathAdd + "/" + basename(path), pyCode, portSelect);
                },
                end: function () {
                    layer.closeAll('page');
                    document.getElementById('webusb-flashing').style.display = 'none';
                    $(".layui-layer-shade").remove();
                }
            });
        });
    }
    
}

Mixly.Electron.BU.writeAndCopyFile = function (writeFilePath, copyFilePath, pyCode, portSelect) {
    var code = "";
    if (pyCode) {
        code = Mixly.Electron.File.getPy();
    } else {
        code = Mixly.Electron.File.getHex();
    }

    if (Mixly.Electron.BU.uploadAndCopyLib) {
        let oldLibPath = Mixly.Electron.BU.uploadFilePath.substring(0, Mixly.Electron.BU.uploadFilePath.lastIndexOf('/'));
        let newLibPath = copyFilePath.substring(0, copyFilePath.lastIndexOf('/'));
        let pyFileArr = Mixly.Electron.BU.copyLib(code);
        console.log(oldLibPath);
        console.log(newLibPath);
        console.log(pyFileArr);
        copyFileWithName(oldLibPath, newLibPath, pyFileArr);
    }

    Mixly.Electron.BU.writeFile(writeFilePath, code, function (err) {
        //写入文件出错时执行
        Mixly.Electron.BU.writeFile(copyFilePath, code, Mixly.Electron.BU.errFunc, Mixly.Electron.BU.doFunc, portSelect)
    }, function () {
        Mixly.Electron.BU.copyFile(writeFilePath, copyFilePath, function () {
            //写入文件出错时执行
            Mixly.Electron.BU.writeFile(copyFilePath, code, Mixly.Electron.BU.errFunc, Mixly.Electron.BU.doFunc, portSelect)
        }, Mixly.Electron.BU.doFunc, portSelect);
    }, portSelect);
}

Mixly.Electron.BU.writeFile = function (path, data, errFunc, doFunc, portSelect) {
    Mixly.Modules.fs.writeFile(path, data, 'utf8', function (err) {
        //如果err=null，表示文件使用成功，否则，表示希尔文件失败
        if (err) {
            errFunc(err);
        } else if (!Mixly.Electron.BU.uploading) {
            layer.closeAll('page');
            document.getElementById('webusb-flashing').style.display = 'none';
            return;
        } else {
            doFunc(portSelect);
        }
    })
}

Mixly.Electron.BU.copyFile = function (oldPath, newPath, errFunc, doFunc, portSelect) {
    Mixly.Modules.fs.copyFile(oldPath, newPath, (err) => {
        if (err) {
            errFunc(err);
        } else if (!Mixly.Electron.BU.uploading) {
            layer.closeAll('page');
            document.getElementById('webusb-flashing').style.display = 'none';
            return;
        } else {
            doFunc(portSelect);
        }
        Mixly.Electron.BU.uploading = false;
    });
}

Mixly.Electron.BU.errFunc = function (err) {
    //写入文件出错时执行
    layer.closeAll('page');
    document.getElementById('webusb-flashing').style.display = 'none';
    layer.msg(indexText['写文件出错了，错误是：'] + err, {
        time: 1000
    });
    Mixly.StatusBar.setValue(indexText['写文件出错了，错误是：'] + err + '\n', true);
    Mixly.StatusBar.show(1);
    console.log(indexText['写文件出错了，错误是：'] + err);
    Mixly.Electron.BU.uploading = false;
}

Mixly.Electron.BU.doFunc = function (portSelect) {
    //写入文件成功时执行
    layer.closeAll('page');
    document.getElementById('webusb-flashing').style.display = 'none';
    layer.msg(indexText['上传成功'] + '!', {
        time: 1000
    });
    Mixly.StatusBar.show(1);
    Mixly.Electron.Serial.refreshPortList(portSelect, function () {
        Mixly.Electron.Serial.updateSelectBox(Mixly.Electron.Serial.portList);
        Mixly.Electron.Serial.connectPort();
        Mixly.Electron.Serial.writeCtrlD();
    });
    Mixly.Electron.BU.uploading = false;
}

/**
* @function 上传代码
* @description 通过盘符名称获取盘符号并拷贝某一文件（.hex | .py）到此盘符下
* @param VolumeName {String} 所要查找盘符的名称
* @param path {String} 所要拷贝文件的路径
* @param pyCode {Boolean} 上传文件为hex或py，true - 上传文件为py，false - 上传文件为hex
* @param portSelect {Array | String} 通过串口的VID和PID获取对应串口，当为all时，则获取全部串口
* @param addAllOption {Boolean} 是否在串口下拉框内添加【全部】选项，true - 添加，false - 不添加
* @return void
*/
Mixly.Electron.BU.uploadWithVolumeName = function (VolumeName, path, pyCode, portSelect, addAllOption) {
    let dirPath = path.substring(0, path.lastIndexOf('/'));
    if (!(Mixly.Modules.fs.existsSync(dirPath)
        && Mixly.Modules.fs.statSync(dirPath).isDirectory())) {
        try {
            Mixly.Modules.fs.mkdirSync(path.substring(0, path.lastIndexOf('/')));
        } catch(e) {
            console.log(e);
        }
    }
    if (Mixly.Env.currentPlatform == "darwin" || Mixly.Env.currentPlatform == "linux") {
        let diskPath = '/Volumes/';
        let addChar = ' ';
        if (Mixly.Env.currentPlatform == "linux") {
            diskPath = '/media/';
            addChar = '';
        }
        let stdout = '';
        let result = null;
        result = VolumeName.split('/');
        let deviceNum = 0;
        for (var i = 0; i < result.length; i++) {
            if (result[i] == '') continue;
            for (var j = 0; ; j++) {
                try {
                    if (Mixly.Modules.fs.existsSync(diskPath + result[i] + (j == 0 ? '' : (addChar + j)))
                        && Mixly.Modules.fs.statSync(diskPath + result[i] + (j == 0 ? '' : (addChar + j))).isDirectory()) {
                        stdout += diskPath + result[i] + (j == 0 ? '' : (addChar + j)) + ':';
                        deviceNum++;
                    } else if (Mixly.Modules.fs.existsSync(diskPath + Mixly.Modules.os.userInfo().username + '/' + result[i] + (j == 0 ? '' : (addChar + j)))
                        && Mixly.Modules.fs.statSync(diskPath + Mixly.Modules.os.userInfo().username + '/' + result[i] + (j == 0 ? '' : (addChar + j))).isDirectory()) {
                        stdout += diskPath + Mixly.Modules.os.userInfo().username + '/' + result[i] + (j == 0 ? '' : (addChar + j)) + ':';
                        deviceNum++;
                    }  else {
                        break;
                    }
                } catch (e) {
                    break;
                }
            }
        }
        if (deviceNum == 0) {
            layer.msg(indexText['无可用设备'] + '!', {
                time: 1000
            });
            Mixly.Electron.BU.uploading = false;
            return;
        }
        Mixly.Electron.BU.checkNumOfDisks(stdout, path, pyCode, portSelect, addAllOption);
    } else {
        Mixly.Modules.child_process.exec('wmic logicaldisk where "' + VolumeName + '" get DeviceID', function (err, stdout, stderr) {
            if (err || stderr) {
                layer.closeAll('page');
                document.getElementById('webusb-flashing').style.display = 'none';
                console.log("root path open failed" + err + stderr);
                layer.msg(indexText['无可用设备'] + '!', {
                    time: 1000
                });
                Mixly.Electron.BU.uploading = false;
                return;
            }
            Mixly.Electron.BU.checkNumOfDisks(stdout, path, pyCode, portSelect, addAllOption);
        });
    }
}

/**
* @function 上传代码
* @description 通过下拉列表获取盘符号并拷贝某一文件（.hex | .py）到此盘符下
* @param path {String} 所要拷贝文件的路径
* @param pyCode {Boolean} 上传文件为hex或py，true - 上传文件为py，false - 上传文件为hex
* @param portSelect {Array | String} 通过串口的VID和PID获取对应串口，当为all时，则获取全部串口
* @return void
*/
Mixly.Electron.BU.uploadWithDropdownBox = async function (path, pyCode, portSelect) {
    layer.closeAll('page');
    document.getElementById('serial-device-form').style.display = 'none';
    Mixly.Electron.BU.uploading = true;
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            type: 1,
            title: indexText['上传中'] + '...',
            content: $('#webusb-flashing'),
            shade: Mixly.LayerExtend.shadeWithHeight,
            closeBtn: 0,
            success: function () {
                $(".layui-layer-page").css("z-index","198910151");
            },
            end: function () {
                layer.closeAll('page');
                document.getElementById('webusb-flashing').style.display = 'none';
                $(".layui-layer-shade").remove();
            }
        });
    });

    if (Mixly.Electron.Serial.object && Mixly.Electron.Serial.object.isOpen) {
        await Mixly.Electron.Serial.reset();
    }

    var code = "";
    if (pyCode) {
        code = Mixly.Electron.File.getPy();
    } else {
        code = Mixly.Electron.File.getHex();
    }

    Mixly.Modules.fs.writeFile(path, code, 'utf8', function (err) {
        //如果err=null，表示文件使用成功，否则，表示希尔文件失败
        if (err) {
            layer.closeAll('page');
            document.getElementById('webusb-flashing').style.display = 'none';
            layer.msg(indexText['写文件出错了，错误是：'] + err, {
                time: 1000
            });
            Mixly.StatusBar.setValue(indexText['写文件出错了，错误是：'] + err + '\n', true);
            Mixly.StatusBar.show(1);
            Mixly.Electron.BU.uploading = false;
            return;
        } else if (!Mixly.Electron.BU.uploading) { //如果检测到用户取消上传，则隐藏上传框
            layer.closeAll('page');
            document.getElementById('webusb-flashing').style.display = 'none';
            Mixly.Electron.BU.uploading = false;
            return;
        } else {
            var device_values = $.map($('#select_serial_device option'), function (ele) {
                return ele.value;
            });
            var device_num = device_values.length;
            var device_select_name = $('#select_serial_device option:selected').val();
            if (device_select_name == "all") {
                var upload_finish_num = 0;
                for (var i = 0; i < device_num; i++) {
                    if (device_values[i] == "all") {
                        continue;
                    }
                    if (Mixly.Electron.BU.uploadAndCopyLib) {
                        let oldLibPath = Mixly.Electron.BU.uploadFilePath.substring(0, Mixly.Electron.BU.uploadFilePath.lastIndexOf('/'));
                        let newLibPath = device_values[i] + "/";
                        let pyFileArr = Mixly.Electron.BU.copyLib(code);
                        copyFileWithName(oldLibPath, newLibPath, pyFileArr);
                    }
                    Mixly.Modules.fs.copyFile(path, device_values[i] + "/" + basename(path), (err) => {
                        //layer.closeAll('page');
                        //document.getElementById('webusb-flashing').style.display = 'none';
                        upload_finish_num++;
                        if (err) {
                            layer.msg(indexText['写文件出错了，错误是：'] + err, {
                                time: 1000
                            });
                            Mixly.StatusBar.setValue(indexText['写文件出错了，错误是：'] + err + '\n', true);
                            Mixly.StatusBar.show(1);
                        } else if (Mixly.Electron.BU.uploading) {
                            if (upload_finish_num >= device_num - 1) {
                                layer.msg(indexText['上传成功'] + '!', {
                                    time: 1000
                                });
                                Mixly.StatusBar.show(1);
                                Mixly.Electron.Serial.refreshPortList(portSelect, function () {
                                    Mixly.Electron.Serial.updateSelectBox(Mixly.Electron.Serial.portList);
                                    Mixly.Electron.Serial.connectPort();
                                    Mixly.Electron.Serial.writeCtrlD();
                                });
                                Mixly.Electron.BU.uploading = false;
                            }
                        }
                        if (upload_finish_num >= device_num - 1) {
                            layer.closeAll('page');
                            document.getElementById('webusb-flashing').style.display = 'none';
                        }
                    });
                }
            } else {
                if (Mixly.Electron.BU.uploadVolumeName == "") {
                    Mixly.Electron.BU.runCmd(false, device_select_name, Mixly.Electron.Serial.uploadPortType);
                } else {
                    if (Mixly.Electron.BU.uploadAndCopyLib) {
                        let oldLibPath = Mixly.Electron.BU.uploadFilePath.substring(0, Mixly.Electron.BU.uploadFilePath.lastIndexOf('/'));
                        let newLibPath = device_select_name + "/";
                        let pyFileArr = Mixly.Electron.BU.copyLib(code);
                        copyFileWithName(oldLibPath, newLibPath, pyFileArr);
                    }
                    Mixly.Modules.fs.copyFile(path, device_select_name + "/" + basename(path), (err) => {
                        layer.closeAll('page');
                        document.getElementById('webusb-flashing').style.display = 'none';
                        if (err) {
                            layer.msg(indexText['写文件出错了，错误是：'] + err, {
                                time: 1000
                            });
                            Mixly.StatusBar.setValue(indexText['写文件出错了，错误是：'] + err + '\n', true);
                            Mixly.StatusBar.show(1);
                        } else if (Mixly.Electron.BU.uploading) {
                            layer.msg(indexText['上传成功'] + '!', {
                                time: 1000
                            });
                            Mixly.StatusBar.show(1);
                            Mixly.Electron.Serial.refreshPortList(portSelect, function () {
                                Mixly.Electron.Serial.updateSelectBox(Mixly.Electron.Serial.portList);
                                Mixly.Electron.Serial.connectPort();
                                Mixly.Electron.Serial.writeCtrlD();
                            });
                        }
                        Mixly.Electron.BU.uploading = false;
                    });
                }
            }

        }
    })
}

function basename(str) {
    var idx = 0;
    idx = str.lastIndexOf('/')
    idx = idx > -1 ? idx : str.lastIndexOf('/')
    if (idx < 0) {
        return str
    }
    return str.substring(idx + 1);
}

/**
* @function 取消烧录或上传
* @description 取消烧录或上传过程
* @return void
*/
Mixly.Electron.BU.cancel = function () {
    layer.closeAll('page');
    document.getElementById('serial-device-form').style.display = 'none';
    document.getElementById('webusb-flashing').style.display = 'none';
    if (downloadShell) {
        downloadShell.stdout.end();
        //downloadShell.stdin.end();
        downloadShell.kill("SIGTERM");
        downloadShell = null;
    }
    if (Mixly.Electron.BU.uploading) {
        Mixly.Electron.BU.uploading = false;
        layer.msg(indexText['已取消上传'], {
            time: 1000
        });
    } else if (Mixly.Electron.BU.burning) {
        Mixly.Electron.BU.burning = false;
        layer.msg(indexText['已取消烧录'], {
            time: 1000
        });
    }
}

/**
* @function 开始烧录
* @description 开始一个烧录过程
* @param portSelect {Array | String} 通过串口的VID和PID获取对应串口，当为all时，则获取全部串口
* @return void
*/
Mixly.Electron.BU.burn = function (portSelect) {
    Mixly.Electron.Serial.initPortList(portSelect, ports => {
        Mixly.Electron.BU.checkNumOfSerialPort(ports, true, true, Mixly.Electron.BU.burnCommand);
    });
}

/**
* @function 判断当前环境，以开始一个烧录过程
* @description 判断当前环境(当前界面处在Mixly2.0或浏览器中)，以开始一个烧录过程
* @return void
*/
Mixly.Electron.BU.initBurn = function () {
    if (Mixly.Electron.BU.burning) return;
    Mixly.StatusBar.setValue('', true);
    Mixly.StatusBarPort.tabChange("output");
    Mixly.Electron.BU.burning = true;
    Mixly.Electron.BU.burn(Mixly.Electron.Serial.burnPortType);
}

/**
* @function 判断当前环境，以开始一个上传过程
* @description 判断当前环境(当前界面处在Mixly2.0或浏览器中)，以开始一个上传过程
* @return void
*/
Mixly.Electron.BU.initUpload = function () {
    if (Mixly.Electron.BU.uploading) return;
    Mixly.StatusBar.setValue('', true);
    Mixly.StatusBarPort.tabChange("output");
    Mixly.Electron.BU.burning = false;
    if (Mixly.Electron.BU.uploadFileType == "hex") {
        Mixly.Electron.BU.uploading = true;
        Mixly.Electron.BU.uploadWithVolumeName(Mixly.Electron.BU.uploadVolumeName, Mixly.Electron.BU.uploadFilePath, false, Mixly.Electron.Serial.uploadPortType, true);
    } else {
        if (Mixly.Electron.BU.uploadType == "volumeLabel") {
            Mixly.Electron.BU.uploading = true;
            Mixly.Electron.BU.uploadWithVolumeName(Mixly.Electron.BU.uploadVolumeName, Mixly.Electron.BU.uploadFilePath, true, Mixly.Electron.Serial.uploadPortType, true);
        } else {
            Mixly.Electron.Serial.initPortList(Mixly.Electron.Serial.uploadPortType, ports => {
                Mixly.Electron.BU.checkNumOfSerialPort(ports, false, true, Mixly.Electron.BU.uploadCommand);
            });
        }
    }
}

/**
* @function 判断当前环境，以开始一个上传过程
* @description 判断当前环境(当前界面处在Mixly2.0或浏览器中)，以开始一个上传过程，并从下拉列表中获取所选择的串口
* @return void
*/
Mixly.Electron.BU.initWithDropdownBox = function () {
    layer.closeAll('page');
    document.getElementById('serial-device-form').style.display = 'none';
    if (Mixly.Electron.BU.burning) {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: indexText['烧录中'] + '...',
                content: $('#webusb-flashing'),
                shade: Mixly.LayerExtend.shadeWithHeight,
                closeBtn: 0,
                success: function () {
                    $(".layui-layer-page").css("z-index","198910151");
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
                Mixly.Electron.BU.burnByCmd(device_values[0], Mixly.Electron.BU.burnCommand, 0, device_values.length - 1);
            } else {
                //Mixly.Electron.BU.esptoolBurn(com_data, Mixly.Electron.BU.ESPTOOL_COMMAND[boardType]);
                Mixly.Electron.BU.burnByCmd(portData, Mixly.Electron.BU.burnCommand);
            }
        });
    } else {
        if (Mixly.Electron.BU.uploadFileType == "hex") {
            Mixly.Electron.BU.uploadWithDropdownBox(Mixly.Electron.BU.uploadFilePath, false, Mixly.Electron.Serial.uploadPortType);
        } else {
            if (Mixly.Electron.BU.uploadVolumeName == "") {
                layui.use('layer', function () {
                    var layer = layui.layer;
                    layer.open({
                        type: 1,
                        title: indexText['上传中'] + '...',
                        content: $('#webusb-flashing'),
                        shade: Mixly.LayerExtend.shadeWithHeight,
                        closeBtn: 0,
                        success: function () {
                            $(".layui-layer-page").css("z-index","198910151");
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
                        Mixly.Electron.BU.uploadByCmd(device_values[0], Mixly.Electron.BU.uploadCommand, 0, device_values.length - 1);
                    } else {
                        Mixly.Electron.BU.uploadByCmd(portData, Mixly.Electron.BU.uploadCommand);
                    }
                });
            } else {
                Mixly.Electron.BU.uploadWithDropdownBox(Mixly.Electron.BU.uploadFilePath, true, Mixly.Electron.Serial.uploadPortType);
            }
        }
    }
}

/**
* @function 运行cmd
* @description 通过所给串口运行用户提供的esptool的cmd指令
* @param com {Array | String} 所选择的串口
* @return void
*/
Mixly.Electron.BU.burnByCmd = function (com, command, currentTimes = 0, totalTimes = 1) {
    Mixly.StatusBar.show(1);
    Mixly.Electron.BU.burning = true;
    if (Mixly.Electron.Serial.object && Mixly.Electron.Serial.object.isOpen) {
        Mixly.Electron.Serial.object.close();
    }
    Mixly.Electron.BU.runCmd(true, com, Mixly.Electron.Serial.burnPortType, command, currentTimes, totalTimes);
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Mixly.Electron.BU.copyLib = function (code) {
    var uploadLibPath = Mixly.Electron.BU.uploadFilePath.substring(0, Mixly.Electron.BU.uploadFilePath.lastIndexOf('/'));
    var uploadFileName = Mixly.Electron.BU.uploadFilePath.substring(Mixly.Electron.BU.uploadFilePath.lastIndexOf('/') + 1, Mixly.Electron.BU.uploadFilePath.length);

    try {
        if (!Mixly.Modules.fs.existsSync(uploadLibPath)) {
            Mixly.Modules.fs.mkdirSync(uploadLibPath);
        }
        var libFiles = Mixly.Modules.fs.readdirSync(uploadLibPath);
        for (var i = 0; i < libFiles.length; i++) {
            if (libFiles[i] != uploadFileName) {
                try {
                    Mixly.Modules.fs.unlinkSync(uploadLibPath + '/' + libFiles[i]);
                } catch (e) {
                    console.log(e);
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
    var pyFileArr = [];
    pyFileArr = Mixly.Electron.BU.searchLibs(code, pyFileArr);
    return pyFileArr;
}

Mixly.Electron.BU.searchLibs = function (code, libArr) {
    var uploadLibPath = Mixly.Electron.BU.uploadFilePath.substring(0, Mixly.Electron.BU.uploadFilePath.lastIndexOf('/'));
    var arrayObj = new Array();
    code.trim().split("\n").forEach(function (v, i) {
        arrayObj.push(v);
    });
    var moduleName = "";
    var pyFileArr = [];
    for (var i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].indexOf("from") == 0) {
            moduleName = arrayObj[i].substring(4, arrayObj[i].indexOf("import"));
            moduleName = moduleName.replace(/(^\s*)|(\s*$)/g, "");
        } else if (arrayObj[i].indexOf("import") == 0) {
            moduleName = arrayObj[i].substring(6);
            moduleName = moduleName.replace(/(^\s*)|(\s*$)/g, "");
        } else {
            continue;
        }
        var moduleArr = moduleName.split(",");
        for (var j = 0; j < moduleArr.length; j++) {
            moduleArr[j] = moduleArr[j].replace(/(^\s*)|(\s*$)/g, "");
            if (!libArr.includes(moduleArr[j] + '.py')) {
                try {
                    var oldLibPath = Mixly.Env.indexPath + '/build/lib/' + moduleArr[j] + '.py';
                    if (Mixly.Modules.fs.existsSync(oldLibPath)) {
                        var stat = Mixly.Modules.fs.statSync(oldLibPath);
                        if (stat.isFile()) {
                            var newLibPath = uploadLibPath + '/' + moduleArr[j] + '.py';
                            Mixly.StatusBar.addValue(indexText['拷贝库'] + ' ' + moduleArr[j] + '\n', true);

                            Mixly.Modules.child_process.exec('cd '+Mixly.Env.indexPath+'/build/lib',function(err, stdout, stderr){
                                if (err || stderr) {
                                    console.log("拷贝失败" + error);
                                }
                                console.log("stdout:",stdout);

                            })
                           
                            Mixly.Modules.child_process.exec(Mixly.Env.indexPath+'\\..\\..\\..\\..\\mixpyBuild\\win_python3\\Scripts\\mpfs.exe --nohelp -n -c \"open {com};put '+moduleArr[j] + '.py',function(err, stdout, stderr){
                                if (err || stderr) {
                                    console.log("上传失败" + error);
                                }


                            })

                            Mixly.Modules.fs.copyFileSync(oldLibPath, newLibPath);
                            pyFileArr.push(moduleArr[j] + ".py");
                            libArr.push(moduleArr[j] + ".py");
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
    for (var i = 0; i < pyFileArr.length; i++) {
        try {
            code = String(Mixly.Modules.fs.readFileSync(Mixly.Env.indexPath + '/build/lib/' + pyFileArr[i]));
            libArr = Mixly.Electron.BU.searchLibs(code, libArr);
        } catch (e) {
            console.log(e);
        }
    }
    return libArr;
}

/**
* @function 运行cmd
* @description 通过所给串口运行用户提供的ampy的cmd指令
* @param com {Array | String} 所选择的串口
* @return void
*/
Mixly.Electron.BU.uploadByCmd = async function (com, command, currentTimes = 0, totalTimes = 1) {
    var code = Mixly.Electron.File.getPy();
    Mixly.StatusBar.show(1);
    Mixly.Electron.BU.uploading = true;

    if (Mixly.Electron.Serial.object && Mixly.Electron.Serial.object.isOpen) {
        await Mixly.Electron.Serial.reset();
    }

    if (Mixly.Electron.BU.uploadAndCopyLib) {
        Mixly.Electron.BU.copyLib(code);
    }

    if (Mixly.Electron.Serial.object && Mixly.Electron.Serial.object.isOpen) {
        Mixly.Electron.Serial.object.close();
    }
    await sleep(100);

    Mixly.Modules.fs.writeFile(Mixly.Electron.BU.uploadFilePath, code, 'utf8', function (err) {
        //如果err=null，表示文件使用成功，否则，表示希尔文件失败
        if (err) {
            layer.closeAll('page');
            document.getElementById('webusb-flashing').style.display = 'none';
            layer.msg(indexText['写文件出错了，错误是：'] + err, {
                time: 1000
            });
            Mixly.StatusBar.setValue(indexText['写文件出错了，错误是：'] + err + '\n', true);
            Mixly.StatusBar.show(1);
            console.log(indexText['写文件出错了，错误是：'] + err);
            Mixly.Electron.BU.uploading = false;
            return;
        } else {
            Mixly.StatusBar.addValue(indexText['上传中'] + '...\n', true);
            Mixly.Electron.BU.runCmd(false, com, Mixly.Electron.Serial.uploadPortType, command, currentTimes, totalTimes);
        }
    })
}

/**
* @function 运行cmd
* @description 通过所给信息运行用户提供的cmd指令
* @param burn {Boolean} 烧录或上传，true - 烧录，false - 上传
* @param com {Array | String} 所选择的串口
* @param portSelect {Array | String} 通过串口的VID和PID获取对应串口，当为all时，则获取全部串口
* @return void
*/
Mixly.Electron.BU.runCmd = function (burn, com, portSelect, command, currentTimes = 0, totalTimes = 1) {
    let iconv = Mixly.Modules.iconvLite;
    var now_command = "";
    try {
        if (burn)
            now_command = replaceWithReg(command, com, "com");
        else
            now_command = replaceWithReg(command, com, "com");
    } catch (e) {
        console.log(e);
    }
    console.log(now_command);
    downloadShell = Mixly.Modules.child_process.exec(now_command, function (error, stdout, stderr) {
        currentTimes++;
        if (error !== null) {
            try {
                error = decode(iconv.decode(iconv.encode(error, "iso-8859-1"), 'gbk'));
            } catch (e) {
                console.log(e);
            }
            console.log("exec error" + error);
            Mixly.StatusBar.addValue(error + "\n", true);
            layer.closeAll('page');
            document.getElementById('webusb-flashing').style.display = 'none';
            Mixly.Electron.BU.burning = false;
            Mixly.Electron.BU.uploading = false;
            return;
        } else {
            if (currentTimes >= totalTimes) {
                Mixly.Electron.BU.burning = false;
                Mixly.Electron.BU.uploading = false;
                layer.msg((burn ? indexText['烧录成功'] + '！' : indexText['上传成功'] + '！'), {
                    time: 1000
                });
                if (portSelect && !burn) {
                    Mixly.StatusBar.show(1);
                    Mixly.Electron.Serial.selectedPortName = com;
                    Mixly.Electron.Serial.refreshPortList(portSelect, function () {
                        Mixly.Electron.Serial.updateSelectBox(Mixly.Electron.Serial.portList);
                        Mixly.Electron.Serial.connectPort();
                        Mixly.Electron.Serial.writeCtrlD();
                    });
                }
            }
        }
        Mixly.StatusBar.scrollToTheBottom();
        if (currentTimes >= totalTimes) {
            layer.closeAll('page');
            document.getElementById('webusb-flashing').style.display = 'none';
        } else {
            if (Mixly.Electron.BU.uploading || Mixly.Electron.BU.burning) {
                var device_values = $.map($('#select_serial_device option'), function (ele) {
                    return ele.value;
                });
                Mixly.Electron.BU.runCmd(burn, device_values[currentTimes], portSelect, command, currentTimes, totalTimes);
            }
        }
    })

    downloadShell.stdout.on('data', function (data) {
        if (Mixly.Electron.BU.uploading || Mixly.Electron.BU.burning) {
            try {
                data = decode(iconv.decode(iconv.encode(data, "iso-8859-1"), 'gbk'));
            } catch (e) {
                console.log(e);
            }
            Mixly.StatusBar.addValue(data, true);
        }
    });
}


Mixly.Electron.BU.burnWithSpecialBin = () => {

    layui.use(['layer', 'form'], function () {
        let layer = layui.layer;
        let form = layui.form;

        const devNames = $('#select_serial_device');
        let oldDevice = $('#select_serial_device option:selected').val();
        devNames.empty();
        let firmwareList = Mixly.Config.BOARD.burn.special;
        let firmwareObj = {};
        for (let i = 0; i < firmwareList.length; i++)
            firmwareObj[firmwareList[i].name] = firmwareList[i].command;
        firmwareList.map(firmware => {
            if (!firmware?.name && !firmware?.command) return;

            if (`${firmware.name}` == oldDevice) {
                devNames.append($(`<option value="${firmware.name}" selected>${firmware.name}</option>`));
            } else {
                devNames.append($(`<option value="${firmware.name}">${firmware.name}</option>`));
            }
        });
        form.render();

        let initBtnClicked = false;

        layer.open({
            type: 1,
            id: "serialSelect",
            title: "请选择固件：",
            area: ['350px', '150px'],
            content: $('#serial-device-form'),
            shade: Mixly.LayerExtend.shade,
            closeBtn: 0,
            success: function (layero) {
                document.getElementById("serialSelect").style.height = "180px";
                document.getElementById("serialSelect").style.overflow = "inherit";
                $(".layui-layer-page").css("z-index", "198910151");
                $("#cancel-btn").off("click").click(() => {
                    layer.closeAll();
                });
                $("#init-btn").click(() => {
                    layer.closeAll();
                    initBtnClicked = true;
                });
            },
            end: function () {
                $("#cancel-btn").off("click").click(() => {
                });
                $("#init-btn").click(() => {
                });
                document.getElementById('serial-device-form').style.display = 'none';
                $(".layui-layer-shade").remove();
                if (initBtnClicked) {
                    let selectedFirmwareName = $('#select_serial_device option:selected').val();
                    try {
                        firmwareObj[selectedFirmwareName] = firmwareObj[selectedFirmwareName].replace(/\\/g, "/");
                    } catch (e) {
                        console.log(e);
                    }
                    let pyToolName = ["esptool", "kflash", "stm32loader", "stm32bl"];
                    let pyToolPath = "{path}/mixpyBuild/win_python3/Lib/site-packages/"
                    if (Mixly.Env.currentPlatform == "darwin" || Mixly.Env.currentPlatform == "linux") {
                        pyToolPath = "{path}/pyTools/";
                    }
                    for (let i = 0; i < pyToolName.length; i++) {
                        if (firmwareObj[selectedFirmwareName].indexOf("\"") != -1) {
                            firmwareObj[selectedFirmwareName] = replaceWithReg(firmwareObj[selectedFirmwareName], Mixly.Env.python3Path + "\" \"" + pyToolPath + pyToolName[i] + ".py", pyToolName[i]);
                        } else {
                            firmwareObj[selectedFirmwareName] = replaceWithReg(firmwareObj[selectedFirmwareName], Mixly.Env.python3Path + " " + pyToolPath + pyToolName[i] + ".py", pyToolName[i]);
                        }
                    }
                    firmwareObj[selectedFirmwareName] = replaceWithReg(firmwareObj[selectedFirmwareName], Mixly.Env.clientPath, "path");
                    firmwareObj[selectedFirmwareName] = replaceWithReg(firmwareObj[selectedFirmwareName], Mixly.Env.indexPath, "indexPath");
                    Mixly.Electron.Serial.initPortList(Mixly.Electron.Serial.burnPortType, ports => {
                        Mixly.Electron.BU.checkNumOfSerialPort(ports, true, true, firmwareObj[selectedFirmwareName]);
                    });
                } else {
                    layer.msg(indexText['已取消烧录'], { time: 1000 });
                }
            }
        });
    });
}