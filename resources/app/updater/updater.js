const ipc = require('electron').ipcRenderer;

const AdmZip = require('adm-zip-iconv');

const https = require("https");

let cloudSoftwareJson = null;
ipc.on('updater', (event, message) => {
    console.log(message);
    try {
        cloudSoftwareJson = JSON.parse(message);
        console.log(cloudSoftwareJson.win32.resources.url);
        getLibsJson(cloudSoftwareJson.win32.resources.url, function(fileName) {
            if (fileName) {
                try {
                    const unzip = new AdmZip(MixlyEnv.clientPath + "/update/" + fileName, 'GBK');
                    unzip.extractAllTo(MixlyEnv.clientPath + "/update/", true);
                    nodeFs.unlinkSync(MixlyEnv.clientPath + "/update/" + fileName);
                    ipc.send('updater', "finish");
                    $('h3').text('正在移动，请稍等...');
                    var folderName = fileName.substring(0, fileName.lastIndexOf("."));
                    copyFolder(MixlyEnv.clientPath + "/update/" + folderName, MixlyEnv.clientPath + "/resources/", function(err) {
                        if (err) {
                            console.log(err);
                            $('h3').text('覆盖失败，请尝试重启软件再试一次');
                        } else {
                            $('h3').text('更新完成！');
                        }
                    })
                    try {
                        deleteFolder(MixlyEnv.clientPath + "/update/" + folderName);
                    } catch(e) {
                        console.log(e);
                    }
                    $("#btn-reload").css('display','block');
                } catch(e) {
                    $('h3').text('解压失败，请尝试重启软件再试一次');
                    console.log(e);
                }
            }
        });
    } catch(e) {
        console.log(e);
    }
});

$(document).ready(function () {
    $("#btn-reload").bind("click", function(){
        console.log("reload");
        ipc.send('updater', "reload");
    });
    /*
    var percentage = 0;
    var interval = setInterval(function () {
        if (percentage < 10000) {
            percentage++;
            var widthTemp = (percentage / 100).toFixed(1) + '%';
            $('#progressBar').css('width', widthTemp);
            $('#progressBar').text(widthTemp);
        } else {
            clearInterval(interval);
            $('h3').text('更新完成！');
        }
    }, 10);
    */
});

var copyFile = function(srcPath, tarPath, cb) {
    var rs = nodeFs.createReadStream(srcPath)
    rs.on('error', function(err) {
        if (err) {
            console.log('read error', srcPath)
        }
        cb && cb(err)
    })

    var ws = nodeFs.createWriteStream(tarPath)
    ws.on('error', function(err) {
        if (err) {
            console.log('write error', tarPath)
        }
        cb && cb(err)
    })
    ws.on('close', function(ex) {
        cb && cb(ex)
    })

    rs.pipe(ws)
}

var copyFolder = function(srcDir, tarDir, cb) {
    nodeFs.readdir(srcDir, function(err, files) {
        var count = 0
        var checkEnd = function() {
            ++count == files.length && cb && cb()
        }

        if (err) {
            checkEnd()
            return
        }

        files.forEach(function(file) {
             var srcPath = path.join(srcDir, file)
             var tarPath = path.join(tarDir, file)

             nodeFs.stat(srcPath, function(err, stats) {
                if (stats.isDirectory()) {
                    console.log('mkdir', tarPath)
                    nodeFs.mkdir(tarPath, function(err) {
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
    if( nodeFs.existsSync(path) ) {
        files = nodeFs.readdirSync(path);
        files.forEach(function(file,index){
            let curPath = path + "/" + file;
            if(nodeFs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                nodeFs.unlinkSync(curPath);
            }
        });
        nodeFs.rmdirSync(path);
    }
}

function getLibsJsonCallback(Src, doFunc) {
    var fileName = path.basename(Src);
    var callback = function(res) {
        console.log("request: " + Src + " return status: " + res.statusCode);
        var contentType = res.headers['content-type'];
        var contentTLen = parseInt(res.headers['content-length']);
        var fileBuff = [];
        var downloadedLen = 0;
        var oldPercent = 0;
        var nowPercent = 0;
        res.on('data', function (chunk) {
            var buffer = new Buffer(chunk);
            fileBuff.push(buffer);
            downloadedLen += buffer.length;

            nowPercent = parseInt(downloadedLen/contentTLen*100);
            if (nowPercent > oldPercent) {
                oldPercent = nowPercent;
                $('#progressBar').css('width', nowPercent + '%');
                $('#progressBar').text(nowPercent + '%');
            }
        });
        res.on('end', function() {
            console.log("end downloading " + Src);
            
            var totalBuff = Buffer.concat(fileBuff);
            console.log("totalBuff.length = " + totalBuff.length + " " + "contentType = " + contentType);
            var receiveData = null;
            console.log("finish! return 2");
            
            if (!nodeFs.existsSync(MixlyEnv.clientPath + "/update/")) {
                nodeFs.mkdirSync(MixlyEnv.clientPath + "/update/");
            } else {
                try {
                    nodeFs.unlinkSync(MixlyEnv.clientPath + "/update/" + fileName);
                } catch(e) {
                    console.log(e);
                }
                try {
                    deleteFolder(MixlyEnv.clientPath + "/update/" + fileName.substring(0, fileName.lastIndexOf(".")));
                } catch(e) {
                    console.log(e);
                }
            }
            $('h3').text('正在解压，请稍等...');
            nodeFs.appendFile(MixlyEnv.clientPath + "/update/" + fileName, totalBuff, function(err){
                if (err) {
                    console.log(err);
                } else {
                    doFunc(fileName);
                }
            });
        });
    };

    return callback;
}

var startGetLibsJsonTask = function(Src, startTime, doFunc) {
    console.log("start downloading " + Src);
    var req = https.request(Src, getLibsJsonCallback(Src, doFunc));
    req.on('error', function(e){
        if ((Number(new Date()) - startTime)/1000 < 30) {
            console.log("request " + Src + " error, try again");
            startGetLibsJsonTask(Src, startTime, doFunc);
        } else {
            console.log("reqeust " + Src + " timeout, about this reqeust");
            req.destroy();
            console.log("finish! return 0");
            $('h3').text('下载更新包出错，请检查当前网络');
            doFunc(null);
        }
    });
    req.setTimeout(5000, function() {
        console.log("reqeust " + Src + " timeout, about this reqeust");
        req.destroy();
        $('h3').text('下载更新包出错，请检查当前网络');
        console.log("finish! return 0");
        doFunc(null);
    })
    req.end();
}

function getLibsJson(src, doFunc) {
    startGetLibsJsonTask(src, Number(new Date()), doFunc);  
}