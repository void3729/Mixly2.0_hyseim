goog.require('Mixly.Config');
goog.require('Mixly.Modules');
goog.require('Mixly.LayerExtend');
goog.provide('Mixly.Electron.CloudLibs');

const https = require("https");
const http = require("http");
const mixlyPath = require("path");
const AdmZip = require('adm-zip-iconv');

var defaultUrl = '';
if (Mixly.Config.BOARD?.lib?.url) {
    defaultUrl = Mixly.Config.BOARD.lib.url;
}

var cloudLibsNum = 0;

//数组去除重复元素
function unique(arr) {
    return Array.from(new Set(arr))
}

function jsonArray(data) {
    var len = data.length;
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr[i] = []; //js中二维数组必须进行重复的声明，否则会undefind
        arr[i] = data[i];
    }
    return arr;
}

function getUrl(val) {
    var urlArr = [];
    try {
        //urlArr = val.match(/http[s]?:\/\/([\w-]+.)+[\w-]+(\/[\w-\.\/\?%&=]*)?/g);//旧的匹配方法
        urlArr = val.match(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/g);
        urlArr = unique(urlArr);
        urlArr = urlArr.filter(item => item != defaultUrl);
    } catch (e) {
        console.log(e);
    }
    return urlArr;
}

function writeUrlArr(arr, path) {
    var urlJson = null;
    try {
        urlJson = JSON.stringify(unique(arr));
        Mixly.Modules.fs.writeFileSync(path, urlJson);
    } catch (e) {
        console.log(e);
    }
}

function readUrlArr(path) {
    var urlArr = [];
    var data = null;
    try {
        if (!Mixly.Modules.fs.existsSync(path)) {
            urlArr.push(defaultUrl);
            writeUrlArr(urlArr, path);
            return urlArr;
        }
        //data = Mixly.Modules.fs.readFileSync(path, "utf-8");

        if (!data) {
            urlArr.push(defaultUrl);
            writeUrlArr(urlArr, path);
            return urlArr;
        }
        urlArr = unique(jsonArray(JSON.parse(data)));
    } catch (e) {
        console.log(e);
    }
    return urlArr;
}

//var cloudLibsUrl = readUrlArr(Mixly.Env.indexPath + '/libraries/cloudLibsUrl.json');
var cloudLibsUrl = {};
cloudLibsUrl.mixly = Mixly.Config.BOARD?.lib?.mixly?.url;
cloudLibsUrl.arduino = Mixly.Config.BOARD?.lib?.arduino?.url;
cloudLibsUrl.python = Mixly.Config.BOARD?.lib?.python?.url;

function getLibsJsonCallback(Src, table, libsUrlArr, type) {
    var callback = function (res) {
        console.log("request: " + Src + " return status: " + res.statusCode);
        var contentType = res.headers['content-type'];
        var fileBuff = [];
        res.on('data', function (chunk) {
            var buffer = new Buffer(chunk);
            fileBuff.push(buffer);
        });
        res.on('end', function () {
            console.log("end downloading " + Src);

            var totalBuff = Buffer.concat(fileBuff);
            console.log("totalBuff.length = " + totalBuff.length + " " + "contentType = " + contentType);
            let cloudLibsArray = [];
            try {
                receiveData = JSON.parse(totalBuff);
                jsonData = jsonArray(receiveData);
                cloudLibsArray = cloudLibsArray.concat(jsonData);
            } catch (e) {
                console.log(e);
            }

            cloudLibsNum++;
            if (cloudLibsNum == libsUrlArr.length) {
                console.log("finish! return 2");
                libsJsonShow(table, cloudLibsArray, type);
            }
        });
    };

    return callback;
}

var startGetLibsJsonTask = function (Src, table, startTime, libsUrlArr, type) {
    console.log("start downloading " + Src);
    let nowHttp = null;
    if (Src.indexOf("http://") !== -1)
        nowHttp = http;
    else
        nowHttp = https;
    var req = nowHttp.request(Src, getLibsJsonCallback(Src, table, libsUrlArr, type));
    req.on('error', function (e) {
        if ((Number(new Date()) - startTime) / 1000 < 30) {
            console.log("request " + Src + " error, try again");
            startGetLibsJsonTask(Src, table, startTime, libsUrlArr, type);
        } else {
            console.log("reqeust " + Src + " timeout, abort this reqeust");
            req.destroy();
            cloudLibsNum++;
            if (cloudLibsNum == libsUrlArr.length) {
                console.log("finish! return 0");
                libsJsonShow(table, [], type);
            }
        }
    });
    req.setTimeout(5000, function () {
        console.log("reqeust " + Src + " timeout, abort this reqeust");
        req.destroy();
        cloudLibsNum++;
        if (cloudLibsNum == libsUrlArr.length) {
            console.log("finish! return 0");
            libsJsonShow(table, [], type);
        }
    })
    req.end();
}

function getLibsJson(table, libsUrlArr, type) {
    cloudLibsNum = 0;
    libsUrlArr.forEach(function (item, index, array) {
        if (item.toLowerCase().indexOf(".json") != -1) {
            startGetLibsJsonTask(item, table, Number(new Date()), libsUrlArr, type);
        } else {
            cloudLibsNum++;
            if (cloudLibsNum == libsUrlArr.length) {
                console.log("finish! return 3");
                libsJsonShow(table, [], type);
            }
        }
    })
}

function libsJsonShow(table, cloudLibsArray, type) {
    if (type !== "mixly") {
        type = "arduino";
    }
    table.render({
        id: 'cloud-libs-table',
        elem: '#' + type + '-lib-page',
        data: cloudLibsArray,
        toolbar: `<script type="text/html" id="import-library-toolbar">
                    <div class="layui-btn-container" style="text-align: center;">
                        <button id="cloud-import-btn" class="layui-btn layui-btn-sm" lay-event="cloud-import">${indexText["云端导入"]}</button>
                        <button id="local-import-btn" class="layui-btn layui-btn-sm" lay-event="local-import">${indexText["本地导入"]}</button>
                    </div>
                </script>`,
        /*
        defaultToolbar: [{
            title: indexText['设置'],
            layEvent: 'LAYTABLE_SET',
            icon: 'layui-icon-set'
        }],
        */
        defaultToolbar: [],
        title: indexText['云端库'],
        cols: [[
            { type: 'checkbox', width: "5%", unresize: false, align: "center" },
            { field: 'name', title: indexText['名称'], width: "30%", sort: true, unresize: false, align: "center" },
            { field: 'version', title: indexText['版本'], width: "20%", unresize: false, align: "center" },
            { field: 'desc', title: indexText['介绍'], width: "45%", unresize: false, align: "center" }
        ]],
        limit: 1000
    });
}

function refreshTable(table, element, cloudLibsArray, type) {
    importLib(table, element, type);
    if (typeof cloudLibsArray !== "object") return;
    cloudLibsNum = 0;
    getLibsJson(table, cloudLibsArray, type);
}

function open_lib() {
    layui.use(['layer', 'form', 'table', 'element'], function () {
        var layer = layui.layer;
        var element = layui.element;
        var table = layui.table;
        layer.open({
            type: 1,
            id: "lib_page",
            title: indexText['导入库'],
            area: ['90%', '80%'],
            content: $('#import-library'),
            shade: Mixly.LayerExtend.shade,
            closeBtn: 1,
            resize: true,
            fixed: true,
            offset: 'auto',
            success: function (layero, index) {
                try {
                    var nowPage = document.getElementById(layero.selector.replace("#", ""));
                    nowPage.style.maxWidth = "800px";
                    var nowHeight = document.documentElement.clientHeight;
                    var nowWidth = document.documentElement.clientWidth;
                    nowPage.style.minWidth = "500px";
                    nowPage.style.minHeight = "243px";
                    nowPage.style.maxWidth = "850px";
                    nowPage.style.maxHeight = "543px";
                    nowPage.style.left = (nowWidth - nowPage.clientWidth) / 2 + "px";
                    nowPage.style.top = (nowHeight - nowPage.clientHeight) / 2 + "px";
                    nowPage.style.borderRadius = "8px";
                    var nowPageTitle = nowPage.getElementsByClassName("layui-layer-title");
                    nowPageTitle[0].style.borderRadius = "8px 8px 0px 0px";
                } catch (e) {
                    console.log(e);
                }
                
                var libPage = document.getElementById("lib_page");
                libPage.style.maxWidth = "850px";
                libPage.style.maxHeight = "500px";
                libPage.style.minWidth = "500px";
                libPage.style.minHeight = "200px";
                
                element.tabChange('library', '1');
                refreshTable(table, element, cloudLibsUrl.mixly, "mixly");
                importLib(table, element, "mixly");
            },
            end: function () {
                document.getElementById('import-library').style.display = 'none';
            },
            resizing: function (layero) {
                var nowHeight = document.documentElement.clientHeight;
                var nowWidth = document.documentElement.clientWidth;
                layero[0].style.width = layero[0].clientWidth/nowWidth*100 + "%";
                layero[0].style.height = layero[0].clientHeight/nowHeight*100 + "%";
            }
        });

        element.on('tab(library)', function (elem) {
            if (elem.index == 0) {
                refreshTable(table, element, cloudLibsUrl.mixly, "mixly");
            } else {
                if (Mixly.Config.BOARD?.nav?.save?.ino === true) {
                    refreshTable(table, element, cloudLibsUrl.arduino, "arduino");
                } else {
                    refreshTable(table, element, cloudLibsUrl.python, "python");
                }
            }
        });
        
    });
}

function importLib(table, element, type) {
    let tableType = type;
    if (type !== "mixly") {
        type = "arduino";
    }
    table.render({
        id: 'cloud-libs-table',
        elem: '#' + type + '-lib-page',
        data: [],
        toolbar: `<script type="text/html" id="import-library-toolbar">
                    <div class="layui-btn-container" style="text-align: center;">
                        <button id="cloud-import-btn" class="layui-btn layui-btn-sm" lay-event="cloud-import">${indexText["云端导入"]}</button>
                        <button id="local-import-btn" class="layui-btn layui-btn-sm" lay-event="local-import">${indexText["本地导入"]}</button>
                    </div>
                </script>`,
        /*
        defaultToolbar: [{
            title: indexText['设置'],
            layEvent: 'LAYTABLE_SET',
            icon: 'layui-icon-set'
        }],
        */
        defaultToolbar: [],
        title: indexText['云端库'],
        cols: [[
            { type: 'checkbox', width: "5%", unresize: false, align: "center" },
            { field: 'name', title: indexText['名称'], width: "30%", sort: true, unresize: false, align: "center" },
            { field: 'version', title: indexText['版本'], width: "20%", unresize: false, align: "center" },
            { field: 'desc', title: indexText['介绍'], width: "45%", unresize: false, align: "center" }
        ]],
        limit: 1000
    });

    //头工具栏事件
    table.on('toolbar(' + type + '-lib-page)', function (obj) {
        var checkStatus = table.checkStatus(obj.config.id);
        let type = "mixly";
        let libDirPath = Mixly.Env.indexPath + '/libraries/ThirdParty/';
        if (obj.config.elem.selector === "#arduino-lib-page") {
            if (Mixly.Config.BOARD?.nav?.save?.ino === true) {
                type = "arduino";
                libDirPath = Mixly.Env.indexPath + '/libraries/myLib/';
            } else {
                type = "python";
                libDirPath = Mixly.Env.indexPath + '/build/lib/';
            }
        }
        switch (obj.event) {
            case 'cloud-import':
                var checkedJsonData = checkStatus.data;
                let libsUrlList = [];
                for (var i = 0; i < checkedJsonData.length; i++) {
                    libsUrlList.push(checkedJsonData[i].url);
                }
                console.log(libsUrlList);
                if (libsUrlList.length > 0) {
                    layer.open({
                        type: 1,
                        id: "cloud-libs-download-content",
                        title: indexText['进度'],
                        area: ['80%', '70%'],
                        content: $('#cloud-libs-download-form'),
                        shade: Mixly.LayerExtend.shade,
                        resize: false,
                        fixed: true,
                        //offset: 'auto',
                        success: function (layero) {
                            try {
                                document.getElementById("cloud-libs-download-content").style.position = "absolute";
                                document.getElementById("cloud-libs-download-content").style.left = "0";
                                document.getElementById("cloud-libs-download-content").style.top = "43px";
                                document.getElementById("cloud-libs-download-content").style.bottom = "0px";
                                document.getElementById("cloud-libs-download-content").style.width = "100%";
                                document.getElementById("cloud-libs-download-content").style.height = "auto";
                                var nowPage = document.getElementById(layero.selector.replace("#", ""));
                                nowPage.style.maxWidth = "700px";
                                nowPage.style.maxHeight = "400px";
                                var nowHeight = document.documentElement.clientHeight;
                                var nowWidth = document.documentElement.clientWidth;
                                nowPage.style.left = (nowWidth - nowPage.clientWidth) / 2 + "px";
                                nowPage.style.top = (nowHeight - nowPage.clientHeight) / 2 + "px";
                                document.getElementById('cloud-libs-download-message').value = "";
                                try {
                                    if (!Mixly.Modules.fs.existsSync(libDirPath))
                                        Mixly.Modules.fs.mkdirSync(libDirPath);
                                    cloudDownload(libDirPath, element, libsUrlList);
                                } catch (e) {
                                    console.log(e);
                                    cloudDownload(libDirPath, element, libsUrlList);
                                }
                            } catch (e) {
                                console.log(e);
                            }
                        },
                        cancel: function (index, layero) {

                        },
                        end: function () {
                            document.getElementById('cloud-libs-download-form').style.display = 'none';
                        }
                    });
                } else {
                    layer.msg(indexText['请选择至少一个云端库'] + '！', {
                        time: 2000
                    });
                }
                break;
            case 'local-import':
                importLocalLib(tableType);
                break;
        };
    });
}

function getHttpReqCallback(Src, dirName, index, element, libsUrlList) {
    var fileName = mixlyPath.basename(Src);
    var callback = function (res) {
        console.log("request: " + Src + " return status: " + res.statusCode);
        document.getElementById('cloud-libs-download-message').value += "request: " + Src + " return status: " + res.statusCode + "\n";
        document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
        //var contentLength = parseInt(res.headers['content-length']);
        var contentType = res.headers['content-type'];
        var fileBuff = [];
        res.on('data', function (chunk) {
            var buffer = new Buffer(chunk);
            fileBuff.push(buffer);
        });
        res.on('end', function () {
            console.log("end downloading " + Src);
            document.getElementById('cloud-libs-download-message').value += "end downloading " + Src + "\n";
            document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
            //if (isNaN(contentLength)) {
            //      console.log(Src + " content length error");
            //      return;
            //}
            var totalBuff = Buffer.concat(fileBuff);
            console.log("totalBuff.length = " + totalBuff.length + " " + "contentType = " + contentType);
            document.getElementById('cloud-libs-download-message').value += "totalBuff.length = " + totalBuff.length + " " + "contentType = " + contentType + "\n";
            document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
            //if (totalBuff.length < contentLength) {
            //      console.log(Src + " download error, try again");
            //      startDownloadTask(Src, dirName, index);
            //      return;
            //}
            if (contentType !== "application/zip") {
                if (contentType.indexOf("text/plain") !== -1) {
                    try {
                        Mixly.Modules.fs.appendFileSync(dirName + "/" + fileName, totalBuff);
                    } catch(e) {
                        console.log(e);
                    }
                } else {
                    console.log("This file is not zip or text");
                }
                cloudLibsNum++;
                element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
                if (cloudLibsNum == libsUrlList.length) {
                    console.log("finish! return 1");
                    if (document.getElementById('cloud-libs-download-form').style.display != "none") {
                        setTimeout(function () {
                            loadLibraries(function() {
                                layer.msg(indexText['导入成功'] + '！', {
                                    time: 1000
                                });
                            });
                        }, 1000);
                    }
                }
                return;
            }
            try {
                if (Mixly.Modules.fs.existsSync(dirName + "/" + fileName))
                    Mixly.Modules.fs.unlinkSync(dirName + "/" + fileName);
            } catch (e) {
                console.log(e);
            }
            Mixly.Modules.fs.appendFile(dirName + "/" + fileName, totalBuff, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    try {
                        const unzip = new AdmZip(dirName + "/" + fileName, 'GBK');
                        unzip.extractAllTo(dirName + "/", true);
                        Mixly.Modules.fs.unlinkSync(dirName + "/" + fileName);
                        if (dirName.indexOf('ThirdParty') !== -1) {
                            let mixPath = dirName + "/" + fileName.substring(0, fileName.lastIndexOf('.'));
                            if (Mixly.Modules.fs.existsSync(mixPath + "/libraries/")
                                && Mixly.Modules.fs.statSync(mixPath + "/libraries/").isDirectory()) {
                                let files = Mixly.Modules.fs.readdirSync(mixPath + "/libraries/");
                                for (let i = 0; i < files.length; i++) {
                                    if (Mixly.Modules.fs.statSync(mixPath + "/libraries/" + files[i]).isFile()) {
                                        files.splice(i, 1);
                                    }
                                }
                                copyFolderWithName(mixPath + "/libraries/", Mixly.Env.indexPath + "/libraries/myLib/", files, 0, function() {
                                });
                            }
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
                cloudLibsNum++;
                element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
                if (cloudLibsNum == libsUrlList.length) {
                    console.log("finish! return 2");
                    if (document.getElementById('cloud-libs-download-form').style.display != "none") {
                        setTimeout(function () {
                            loadLibraries(function() {
                                layer.msg(indexText['导入成功'] + '！', {
                                    time: 1000
                                });
                            });
                        }, 1000);
                    }
                }
            });
        });
    };

    return callback;
}

var startDownloadTask = function (Src, dirName, index, element, startTime, libsUrlList) {
    console.log("start downloading " + Src);
    let nowHttp = null;
    if (Src.indexOf("http://") !== -1)
        nowHttp = http;
    else
        nowHttp = https;
    var req = nowHttp.request(Src, getHttpReqCallback(Src, dirName, index, element, libsUrlList));
    req.on('error', function (e) {
        if ((Number(new Date()) - startTime) / 1000 < 30) {
            console.log("request " + Src + " error, try again");
            document.getElementById('cloud-libs-download-message').value += "request " + Src + " error, try again\n";
            document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
            startDownloadTask(Src, dirName, index, element, startTime, libsUrlList);
        } else {
            console.log("reqeust " + Src + " timeout, abort this reqeust");
            document.getElementById('cloud-libs-download-message').value += "reqeust " + Src + " timeout, abort this reqeust\n";
            document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
            //req.abort();
            req.destroy();
            cloudLibsNum++;
            element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
            if (cloudLibsNum == libsUrlList.length) {
                console.log("finish! return 0");
                document.getElementById('cloud-libs-download-message').value += "reqeust " + Src + " timeout, abort this reqeust" + "\n";
                document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
                if (document.getElementById('cloud-libs-download-form').style.display != "none") {
                    setTimeout(function () {
                        loadLibraries();
                    }, 1000);
                }
            }
        }
    });
    req.setTimeout(5000, function () {
        console.log("reqeust " + Src + " timeout, abort this reqeust");
        document.getElementById('cloud-libs-download-message').value += "reqeust " + Src + " timeout, abort this reqeust\n";
        document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
        //req.abort();
        req.destroy();
        cloudLibsNum++;
        element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
        if (cloudLibsNum == libsUrlList.length) {
            console.log("finish! return 0");
            document.getElementById('cloud-libs-download-message').value += "reqeust " + Src + " timeout, abort this reqeust" + "\n";
            document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
            if (document.getElementById('cloud-libs-download-form').style.display != "none") {
                setTimeout(function () {
                    loadLibraries();
                }, 1000);
            }
        }
    })
    req.end();
}

function cloudDownload(path, element, libsUrlList) {
    cloudLibsNum = 0;
    element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
    libsUrlList.forEach(function (item, index, array) {
        if (item.toLowerCase().indexOf(".zip") != -1 || item.toLowerCase().indexOf(".py") != -1) {
            startDownloadTask(item, path, index, element, Number(new Date()), libsUrlList);
        } else {
            cloudLibsNum++;
            element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
            if (cloudLibsNum == libsUrlList.length) {
                document.getElementById('cloud-libs-download-message').value += libsUrlList[index] + "无效" + "\n";
                document.getElementById('cloud-libs-download-message').scrollTop = document.getElementById('cloud-libs-download-message').scrollHeight;
                console.log("finish! return 3");
                if (document.getElementById('cloud-libs-download-form').style.display != "none") {
                    setTimeout(function () {
                        loadLibraries(function() {
                            layer.msg(indexText['导入成功'] + '！', {
                                time: 1000
                            });
                        });
                    }, 1000);
                }
            }
        }
    })
}

var copyFile = function (srcPath, tarPath, cb) {
    var rs = Mixly.Modules.fs.createReadStream(srcPath)
    rs.on('error', function (err) {
        if (err) {
            console.log('read error', srcPath)
        }
        cb && cb(err)
    })

    var ws = Mixly.Modules.fs.createWriteStream(tarPath)
    ws.on('error', function (err) {
        if (err) {
            console.log('write error', tarPath)
        }
        cb && cb(err)
    })
    ws.on('close', function (ex) {
        cb && cb(ex)
    })

    rs.pipe(ws)
}

var copyFolder = function (srcDir, tarDir, cb) {
    Mixly.Modules.fs.readdir(srcDir, function (err, files) {
        var count = 0
        var checkEnd = function () {
            ++count == files.length && cb && cb()
        }

        if (err) {
            checkEnd()
            return
        }

        files.forEach(function (file) {
            var srcPath = Mixly.Modules.path.join(srcDir, file)
            var tarPath = Mixly.Modules.path.join(tarDir, file)

            Mixly.Modules.fs.stat(srcPath, function (err, stats) {
                if (stats.isDirectory()) {
                    Mixly.Modules.fs.mkdir(tarPath, function (err) {
                        if (err) {
                            console.log(err)
                            return
                        }

                        copyFolder(srcPath, tarPath, checkEnd)
                    })
                } else {
                    copyFile(srcPath, tarPath, checkEnd)
                }
            })
        })

        //为空时直接回调
        files.length === 0 && cb && cb()
    })
}

function deleteFolder(path) {
    let files = [];
    if (Mixly.Modules.fs.existsSync(path)) {
        files = Mixly.Modules.fs.readdirSync(path);
        files.forEach(function (file, index) {
            let curPath = path + "/" + file;
            if (Mixly.Modules.fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                Mixly.Modules.fs.unlinkSync(curPath);
            }
        });
        Mixly.Modules.fs.rmdirSync(path);
    }
}

function copyLibrary(oldPath, newPath, foldersName, FilesName) {
    Mixly.Modules.fs.mkdir(newPath, function (err) {
        if (!err) {
            copyFolderWithName(oldPath, newPath, foldersName, 0, function () {
                copyFileWithName(oldPath, newPath, FilesName);
                if (Mixly.Modules.fs.existsSync(oldPath + "/libraries/")
                    && Mixly.Modules.fs.statSync(oldPath + "/libraries/").isDirectory()) {
                    let files = Mixly.Modules.fs.readdirSync(oldPath + "/libraries/");
                    for (let i = 0; i < files.length; i++) {
                        if (Mixly.Modules.fs.statSync(oldPath + "/libraries/" + files[i]).isFile()) {
                            files.splice(i, 1);
                        }
                    }
                    copyFolderWithName(oldPath + "/libraries/", Mixly.Env.indexPath + "/libraries/myLib/", files, 0, function() {
                        loadLibraries(function() {
                            layer.msg(indexText['导入成功'] + '！', {
                                time: 1000
                            });
                        });
                    });
                } else {
                    loadLibraries(function() {
                        layer.msg(indexText['导入成功'] + '！', {
                            time: 1000
                        });
                    });
                }
            });
        } else {
            //window.location.reload();
            layer.closeAll();
        }
    })
}

function copyFolderWithName(oldPath, newPath, foldersName, startIndex = 0, doFunc) {
    Mixly.Modules.fs.mkdir(newPath + "/" + foldersName[startIndex], function (err) {
        if (err || !Mixly.Modules.fs.existsSync(oldPath + "/" + foldersName[startIndex])) {
            startIndex++;
            if (startIndex < foldersName.length) {
                copyFolderWithName(oldPath, newPath, foldersName, startIndex, doFunc);
            } else {
                doFunc();
            }
        } else {
            copyFolder(oldPath + "/" + foldersName[startIndex], newPath + "/" + foldersName[startIndex], function (err) {
                if (err) {
                    console.log(err);
                }
                startIndex++;
                if (startIndex < foldersName.length) {
                    copyFolderWithName(oldPath, newPath, foldersName, startIndex, doFunc);
                } else {
                    doFunc();
                }
            })
        }
    })
}

function copyFileWithName(oldPath, newPath, filesName) {
    for (var i = 0; i < filesName.length; i++) {
        try {
            if (Mixly.Modules.fs.existsSync(oldPath + "/" + filesName[i])) {
                Mixly.Modules.fs.copyFileSync(oldPath + "/" + filesName[i], newPath + "/" + filesName[i]);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

function importLocalLib(type) {
    let loadIndex = layer.load(1, { 
        shade: [0.3, '#000']
    });
    let filefilters = [];
    let libDirPath = "";
    let foldersName = [];
    let filesName = [];
    if (type === "python") {
        filefilters = [
            { name: 'Python File', extensions: ['py'] },
            { name: 'MicroPython File', extensions: ['mpy'] }
        ];
        libDirPath = Mixly.Env.indexPath + "/build/lib/";
        foldersName = [];
        filesName = [];
    } else if (type === "arduino") {
        filefilters = [
            { name: 'Config File', extensions: ['properties', 'c', 'cpp', 'h', 'hpp'] }
        ];
        libDirPath = Mixly.Env.indexPath + "/libraries/myLib/";
        foldersName = ["examples", "src", "utility"];
        filesName = ["keywords.txt", "README.md", "LICENSE", "library.json", "platformio.ini"];
    } else {
        filefilters = [
            { name: 'XML File', extensions: ['xml'] }
        ];
        libDirPath = Mixly.Env.indexPath + "/libraries/ThirdParty/";
        foldersName = ["block", "generator", "converter", "css", "media", "language", "companypin", "examples", "document", "libraries"];
        filesName = ["CHANGELOG.md", "README.md"];
    }
    Mixly.Modules.currentWindow.focus();
    dialog.showOpenDialog(Mixly.Modules.currentWindow, {
        title: indexText['导入库'],
        // 默认打开的路径，比如这里默认打开下载文件夹
        defaultPath: Mixly.Env.clientPath,
        buttonLabel: indexText['确认'],
        // 限制能够选择的文件类型
        filters: filefilters,
        properties: ['openFile', 'showHiddenFiles'],
        message: indexText['导入库']
    }).then(result => {
        layer.close(loadIndex);
        let res = result.filePaths[0];
        console.log('res', res);

        if (!res) {
            return;
        }

        layui.use('layer', function () {
            var layer = layui.layer;
            layer.open({
                type: 1,
                title: indexText['导入中'] + '...',
                content: $('#webusb-flashing'),
                shade: Mixly.LayerExtend.shade,
                closeBtn: 0,
                end: function () {
                    document.getElementById('webusb-flashing').style.display = 'none';
                    $(".layui-layer-shade").remove();
                }
            });
        });

        var oldPath = '';
        try {
            oldPath = res.replace(/\\/g, "/");
        } catch (e) {
            console.log(e);
        }
        console.log(oldPath);
        if (type === "python") {
            let pyFileName = oldPath.substring(oldPath.lastIndexOf("/") + 1, oldPath.length);
            try {
                Mixly.Modules.fs.copyFileSync(oldPath, libDirPath + pyFileName);
            } catch (e) {
                console.log(e);
            }
            layer.closeAll();
            layer.msg(indexText['导入成功'] + '！', {
                time: 1000
            });
        } else {
            try {
                if (!Mixly.Modules.fs.existsSync(libDirPath)) {
                    Mixly.Modules.fs.mkdirSync(libDirPath);
                }
            } catch (e) {
                console.log(e);
            }
            let xmlFileName = oldPath.substring(oldPath.lastIndexOf("/") + 1, oldPath.length);
            oldPath = oldPath.substring(0, oldPath.lastIndexOf("/"));
            if (type === "arduino") {
                if (Mixly.Modules.fs.existsSync(oldPath)) {
                    let libDir = Mixly.Modules.fs.readdirSync(oldPath);
                    for (let i = 0; i < libDir.length; i++) {
                        if (Mixly.Electron.ArduShell.isCppOrHpp(libDir[i])) {
                            filesName.push(libDir[i]);
                        }
                    }
                }
            }
            let newPath = libDirPath + oldPath.substring(oldPath.lastIndexOf("/") + 1, oldPath.length);
            deleteFolder(newPath);
            filesName.push(xmlFileName);
            copyLibrary(oldPath, newPath, foldersName, filesName);
        }
    }).catch(err => {
        console.log(err);
        layer.close(loadIndex);
    });
}

function loadLibraries(doFunc = function(){}) {
    try {
        var rootPath = Mixly.Env.indexPath;
        if ((Mixly.Modules.fs.existsSync(rootPath + "/libraries/ThirdParty/")
            && Mixly.Modules.fs.statSync(rootPath + "/libraries/ThirdParty/").isDirectory())) {
            var libDir = Mixly.Modules.fs.readdirSync(rootPath + "/libraries/ThirdParty/");
            for (var i = 0; i < libDir.length; i++) {
                let libPath = Mixly.Env.indexPath + "/libraries/ThirdParty/" + libDir[i] + "/";
                if (Mixly.Modules.fs.existsSync(libPath)
                    && Mixly.Modules.fs.statSync(libPath).isDirectory()) {
                    //处理block
                    if (Mixly.Modules.fs.existsSync(libPath + "block/")
                        && Mixly.Modules.fs.statSync(libPath + "block/").isDirectory()) {
                        var blockDir = Mixly.Modules.fs.readdirSync(libPath + "block/");
                        for (var j = 0; j < blockDir.length; j++) {
                            var blockData = String(Mixly.Modules.fs.readFileSync(libPath + "block/" + blockDir[j]));
                            try {
                                blockData = blockData.replace(/\.\.\/\.\.\/media\//g, "./libraries/ThirdParty/" + libDir[i] + "/media/");
                                blockData = blockData.replace(/Blockly\.Block\.obtain\([\s]*workspace[\s]*\,/g, "workspace.newBlock(");
                                blockData = blockData.replace(/Blockly\.FieldTextArea/g, "Blockly.FieldMultilineInput");
                                Mixly.Modules.fs.writeFileSync(libPath + "block/" + blockDir[j], blockData);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    }

                    //处理xml
                    var xmlDir = Mixly.Modules.fs.readdirSync(libPath);
                    for (var j = 0; j < xmlDir.length; j++) {
                        if (xmlDir[j].toLowerCase().indexOf(".xml") != -1) {
                            var xmlData = String(Mixly.Modules.fs.readFileSync(libPath + xmlDir[j]));
                            try {
                                xmlData = xmlData.replace(/\.\.\/\.\.\/blocks\/company\//g, "libraries/ThirdParty/" + libDir[i] + "/block/");
                                xmlData = xmlData.replace(/\.\.\/\.\.\/generators\/arduino\/company\//g, "libraries/ThirdParty/" + libDir[i] + "/generator/");
                                Mixly.Modules.fs.writeFileSync(libPath + xmlDir[j], xmlData);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
    reloadThirdPartyLibs();
    if (typeof(layer) !== "undefined" && layer)
        layer.closeAll();
    $(".layui-layer-shade").remove();
    doFunc();
    //window.location.reload();
}

function refreshToolbox() {
    let toolboxDom = document.getElementById("toolbox");
    var categoriesDom = toolboxDom.getElementsByTagName("category");
    for (let i = 0; i < categoriesDom.length; i++) {
        if (categoriesDom[i].hasAttribute('toolboxitemid')) continue;
        categoriesDom[i].setAttribute('toolboxitemid', categoriesDom[i].id);
    }
}

function reloadThirdPartyLibs() {
    //console.log(Mixly.Env.thirdPartyJS);
    for (let i = 0; i < Mixly.Env.thirdPartyJS.length; i++) {
        Mixly.ScriptLoader.removeScript(Mixly.Env.thirdPartyJS[i]);
    }
    for (let i = 0; i < Mixly.Env.thirdPartyCSS.length; i++) {
        Mixly.CssLoader.removeCss(Mixly.Env.thirdPartyCSS[i]);
    }
    Mixly.Env.thirdPartyJS = [];
    Mixly.Env.thirdPartyCSS = [];
    loadThirdPartyLanJs();
    let toolboxDom = document.getElementById("toolbox");
    toolboxDom.innerHTML = Mixly.Env.defaultXML;
    loadLibsAndUpdateJsCssList(function() {
        refreshToolbox();
        Blockly.fireUiEvent(window, 'resize');
        try {
            Blockly.mainWorkspace.updateToolbox(toolboxDom);
            Code.initLanguage(false);
            Blockly.mainWorkspace.scrollCenter();
            Blockly.hideChaff();
        } catch(e) {

        }
    });
}

function manageLibraries() {
    layui.use(['layer', 'form', 'table', 'element'], function () {
        var layer = layui.layer;
        var element = layui.element;
        var table = layui.table;
        element.on('tab(library)', function (elem) {
            if (elem.index == 0) {
                loadLocalLibs(table, "mixly");
            } else {
                if (Mixly.Config.BOARD?.nav?.save?.ino === true) {
                    loadLocalLibs(table, "arduino");
                } else {
                    loadLocalLibs(table, "python");
                }
            }
        });
        layer.open({
            type: 1,
            id: "lib_page",
            title: indexText['管理库'],
            area: ['90%', '80%'],
            content: $('#import-library'),
            shade: Mixly.LayerExtend.shade,
            closeBtn: 1,
            resize: true,
            fixed: true,
            success: function (layero, index) {
                try {
                    var nowPage = document.getElementById(layero.selector.replace("#", ""));
                    nowPage.style.maxWidth = "800px";
                    var nowHeight = document.documentElement.clientHeight;
                    var nowWidth = document.documentElement.clientWidth;
                    nowPage.style.minWidth = "200px";
                    nowPage.style.minHeight = "243px";
                    nowPage.style.maxWidth = "850px";
                    nowPage.style.maxHeight = "543px";
                    nowPage.style.left = (nowWidth - nowPage.clientWidth) / 2 + "px";
                    nowPage.style.top = (nowHeight - nowPage.clientHeight) / 2 + "px";
                    nowPage.style.borderRadius = "8px";
                    var nowPageTitle = nowPage.getElementsByClassName("layui-layer-title");
                    nowPageTitle[0].style.borderRadius = "8px 8px 0px 0px";
                } catch (e) {
                    console.log(e);
                }
                
                var libPage = document.getElementById("lib_page");
                libPage.style.maxWidth = "850px";
                libPage.style.maxHeight = "500px";
                libPage.style.minWidth = "200px";
                libPage.style.minHeight = "200px";
                
                element.tabChange('library', '1');
                loadLocalLibs(table, "mixly");
            },
            end: function () {
                document.getElementById('import-library').style.display = 'none';
            },
            resizing: function (layero) {
                var nowHeight = document.documentElement.clientHeight;
                var nowWidth = document.documentElement.clientWidth;
                layero[0].style.width = layero[0].clientWidth/nowWidth*100 + "%";
                layero[0].style.height = layero[0].clientHeight/nowHeight*100 + "%";
            }
        });
    });
}

function loadLocalLibs(table, type) {
    var libArr = [];
    try {
        if (type === "arduino") {
            let arduinoLibPath = [
                Mixly.Env.indexPath + "/libraries/myLib/"/*,
                Mixly.Electron.ArduShell.arduinoCliPath + "/libraries/"
                */
            ];
            for (let nowIndex = 0; nowIndex < arduinoLibPath.length; nowIndex++) {
                if (Mixly.Modules.fs.existsSync(arduinoLibPath[nowIndex])) {
                    let libDir = Mixly.Modules.fs.readdirSync(arduinoLibPath[nowIndex]);
                    for (let i = 0; i < libDir.length; i++) {
                        if (Mixly.Modules.fs.existsSync(arduinoLibPath[nowIndex] + libDir[i] + "/")
                            && Mixly.Modules.fs.statSync(arduinoLibPath[nowIndex] + libDir[i] + "/").isDirectory()) {
                            let libObj = {};
                            libObj.path = arduinoLibPath[nowIndex] + libDir[i] + "/";
                            libArr.push(libObj);
                        }
                    }
                }
            }
        } else if (type === "python") {
            let pyLibPath = [
                Mixly.Env.indexPath + "/build/lib/"
            ];
            for (let nowIndex = 0; nowIndex < pyLibPath.length; nowIndex++) {
                if (Mixly.Modules.fs.existsSync(pyLibPath[nowIndex])) {
                    let libDir = Mixly.Modules.fs.readdirSync(pyLibPath[nowIndex]);
                    for (let i = 0; i < libDir.length; i++) {
                        if(libDir[i].toLowerCase().indexOf(".py") != -1) {
                            let libObj = {};
                            libObj.path = pyLibPath[nowIndex] + libDir[i];
                            libArr.push(libObj);
                        }
                    }
                }
            }
        } else {
            let libDir = Mixly.Modules.fs.readdirSync(Mixly.Env.indexPath + "/libraries/ThirdParty/");
            for (let i = 0; i < libDir.length; i++) {
                let libPath = Mixly.Env.indexPath + "/libraries/ThirdParty/" + libDir[i] + "/";
                if (Mixly.Modules.fs.existsSync(libPath)
                    && Mixly.Modules.fs.statSync(libPath).isDirectory()) {
                    //读取xml
                    let xmlDir = Mixly.Modules.fs.readdirSync(libPath);
                    for (let j = 0; j < xmlDir.length; j++) {
                        if (xmlDir[j].toLowerCase().indexOf(".xml") != -1) {
                            let libObj = {};
                            libObj.path = libPath;
                            libArr.push(libObj);
                            break;
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.log(e);
    }

    if (type !== "mixly") {
        type = "arduino";
    }

    table.render({
        id: 'cloud-libs-table',
        elem: '#' + type + '-lib-page',
        data: libArr,
        toolbar: `<script type="text/html" id="manage-library-toolbar">
                    <div class="layui-btn-container" style="text-align: center;">
                        <button id="del-lib-btn" class="layui-btn layui-btn-sm" lay-event="del">${indexText["删除"]}</button>
                    </div>
                </script>`,
        defaultToolbar: [],
        title: indexText['管理库'],
        cols: [[
            { type: 'checkbox', width: "10%", unresize: false, align: "center" },
            { field: 'path', title: indexText['路径'], width: "90%", unresize: false, align: "left" }
        ]],
        limit: 1000
    });
    //头工具栏事件
    table.on('toolbar(' + type + '-lib-page)', function (obj) {
        var checkStatus = table.checkStatus(obj.config.id);
        let type = "mixly";
        if (obj.config.elem.selector === "#arduino-lib-page") {
            if (Mixly.Config.BOARD?.nav?.save?.ino === true) {
                type = "arduino";
            } else {
                type = "python";
            }
        }
        switch (obj.event) {
            case 'del':
                var checkedJsonData = checkStatus.data;
                if (checkedJsonData.length == 0) {
                    layer.msg(indexText['请选择至少一个已导入的库'] + '！', {
                        time: 2000
                    });
                    break;
                }
                if (type === "python") {
                    try {
                        for (var i = 0; i < checkedJsonData.length; i++) {
                            Mixly.Modules.fs.unlinkSync(checkedJsonData[i].path);
                        }
                    } catch(e) {
                        console.log(e);
                    }
                } else {
                    for (var i = 0; i < checkedJsonData.length; i++) {
                        deleteFolder(checkedJsonData[i].path);
                    }
                }
                if (type === "mixly") {
                    loadLibraries(function() {
                        layer.msg(indexText['删除成功'] + '！', {
                            time: 1000
                        });
                    });
                } else {
                    loadLocalLibs(table, type);
                }
                break;
        };
    });
}