if (isMixlyWeb) throw false;

const https = require("https");
const http = require("http");
const mixlyPath = require("path");
const AdmZip = require('adm-zip-iconv');
const indexPath = mixlyPath.resolve(__dirname);

var defaultUrl = '';
if (MixlyConfig.softwareConfig.hasOwnProperty("board.url")) {
    defaultUrl = MixlyConfig.softwareConfig["board.url"];
}
var cloudLibsArray = [];

var libsUrlList = [];

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
        fs.writeFileSync(path, urlJson);
    } catch (e) {
        console.log(e);
    }
}

function readUrlArr(path) {
    var urlArr = [];
    var data = null;
    try {
        if (!fs.existsSync(path)) {
            urlArr.push(defaultUrl);
            writeUrlArr(urlArr, path);
            return urlArr;
        }
        data = fs.readFileSync(path, "utf-8");

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

//var cloudLibsUrl = readUrlArr(indexPath + '/board/ThirdParty/cloudBoardsUrl.json');
var cloudLibsUrl = [defaultUrl];

function getLibsJsonCallback(Src, table) {
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

            try {
                var receiveData = JSON.parse(totalBuff);
                var jsonData = jsonArray(receiveData);
                cloudLibsArray = cloudLibsArray.concat(jsonData);
            } catch (e) {
                console.log(e);
            }

            cloudLibsNum++;
            if (cloudLibsNum == cloudLibsUrl.length) {
                console.log("finish! return 2");
                libsJsonShow(table);
            }
        });
    };

    return callback;
}

var startGetLibsJsonTask = function (Src, table, startTime) {
    console.log("start downloading " + Src);
    let nowHttp = null;
    if (Src.indexOf("http://") !== -1)
        nowHttp = http;
    else
        nowHttp = https;
    var req = nowHttp.request(Src, getLibsJsonCallback(Src, table));
    req.on('error', function (e) {
        if ((Number(new Date()) - startTime) / 1000 < 30) {
            console.log("request " + Src + " error, try again");
            startGetLibsJsonTask(Src, table, startTime);
        } else {
            console.log("reqeust " + Src + " timeout, about this reqeust");
            req.destroy();
            cloudLibsNum++;
            if (cloudLibsNum == cloudLibsUrl.length) {
                console.log("finish! return 0");
                libsJsonShow(table);
            }
        }
    });
    req.setTimeout(5000, function () {
        console.log("reqeust " + Src + " timeout, about this reqeust");
        req.destroy();
        cloudLibsNum++;
        if (cloudLibsNum == cloudLibsUrl.length) {
            console.log("finish! return 0");
            libsJsonShow(table);
        }
    })
    req.end();
}

function getLibsJson(table) {
    cloudLibsNum = 0;
    cloudLibsUrl.forEach(function (item, index, array) {
        if (item.toLowerCase().indexOf(".json") != -1) {
            startGetLibsJsonTask(item, table, Number(new Date()));
        } else {
            cloudLibsNum++;
            if (cloudLibsNum == cloudLibsUrl.length) {
                console.log("finish! return 3");
                libsJsonShow(table);
            }
        }
    })
}

function libsJsonShow(table) {
    table.render({
        id: 'cloud-boards-table',
        elem: '#import-board-page',
        data: cloudLibsArray,
        toolbar: `<script type="text/html" id="import-board-toolbar">
                    <div class="layui-btn-container" style="text-align: center;">
                    <button class="layui-btn layui-btn-sm" lay-event="cloud-import">${indexText["云端导入"]}</button>
                    <button class="layui-btn layui-btn-sm" lay-event="local-import">${indexText["本地导入"]}</button>
                    </div>
                </script>`,
        /*
        defaultToolbar:[
            {
                title: indexText['设置'],
                layEvent: 'LAYTABLE_SET',
                icon: 'layui-icon-set'
            }
        ],
        */
        defaultToolbar: [],
        title: indexText['云端板卡'],
        cols: [[
            { type: 'radio', width: "5%", unresize: false, align: "center" },
            { field: 'name', title: indexText['名称'], width: "30%", sort: true, unresize: false, align: "center" },
            { field: 'version', title: indexText['版本'], width: "20%", unresize: false, align: "center" },
            { field: 'desc', title: indexText['介绍'], width: "45%", unresize: false, align: "center" }
        ]],
        limit: 1000
    });
}

function refreshTable(table) {
    cloudLibsNum = 0;
    cloudLibsArray = [];
    getLibsJson(table);
}

function open_board() {
    layui.use(['layer', 'form', 'table', 'element'], function () {
        var layer = layui.layer;
        var element = layui.element;
        layer.open({
            type: 1,
            id: "lib_page",
            title: indexText['导入板卡'],
            area: ['90%', '80%'],
            content: $('#import-board'),
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
                    if (localStorage.Theme == 'Dark') {
                        $(nowPage).addClass("dark");
                    } else if (localStorage.Theme == 'Light') {
                        $(nowPage).addClass("light");
                    }
                } catch (e) {
                    console.log(e);
                }
                var libPage = document.getElementById("lib_page");
                libPage.style.maxWidth = "850px";
                libPage.style.maxHeight = "500px";
                libPage.style.minWidth = "500px";
                libPage.style.minHeight = "200px";
                libPage.style.borderRadius = "0px 0px 8px 8px";
            },
            end: function () {
                document.getElementById('import-board').style.display = 'none';
            },
            resizing: function (layero) {
                var nowHeight = document.documentElement.clientHeight;
                var nowWidth = document.documentElement.clientWidth;
                layero[0].style.width = layero[0].clientWidth/nowWidth*100 + "%";
                layero[0].style.height = layero[0].clientHeight/nowHeight*100 + "%";
            }
        });
        var table = layui.table;

        table.render({
            id: 'cloud-boards-table',
            elem: '#import-board-page',
            data: [],
            toolbar: `<script type="text/html" id="import-board-toolbar">
                        <div class="layui-btn-container" style="text-align: center;">
                        <button class="layui-btn layui-btn-sm" lay-event="cloud-import">${indexText["云端导入"]}</button>
                        <button class="layui-btn layui-btn-sm" lay-event="local-import">${indexText["本地导入"]}</button>
                        </div>
                    </script>`,
            /*
            defaultToolbar:[
                {
                    title: indexText['设置'],
                    layEvent: 'LAYTABLE_SET',
                    icon: 'layui-icon-set'
                }
            ],
            */
            defaultToolbar: [],
            title: indexText['云端板卡'],
            cols: [[
                { type: 'radio', width: "5%", unresize: false, align: "center" },
                { field: 'name', title: indexText['名称'], width: "30%", sort: true, unresize: false, align: "center" },
                { field: 'version', title: indexText['版本'], width: "20%", unresize: false, align: "center" },
                { field: 'desc', title: indexText['介绍'], width: "45%", unresize: false, align: "center" }
            ]],
            limit: 1000
        });

        refreshTable(table);

        //头工具栏事件
        table.on('toolbar(import-board-page)', function (obj) {
            var checkStatus = table.checkStatus(obj.config.id);
            switch (obj.event) {
                case 'cloud-import':
                    var checkedJsonData = checkStatus.data;
                    libsUrlList = [];
                    for (var i = 0; i < checkedJsonData.length; i++) {
                        libsUrlList.push(checkedJsonData[i].url);
                    }
                    console.log(libsUrlList);
                    if (libsUrlList.length > 0) {
                        layer.open({
                            type: 1,
                            id: "cloud-boards-download-content",
                            title: indexText['进度'],
                            area: ['80%', '70%'],
                            content: $('#cloud-boards-download-form'),
                            resize: false,
                            fixed: true,
                            //offset: 'auto',
                            success: function (layero) {
                                try {
                                    document.getElementById("cloud-boards-download-content").style.position = "absolute";
                                    document.getElementById("cloud-boards-download-content").style.left = "0";
                                    document.getElementById("cloud-boards-download-content").style.top = "43px";
                                    document.getElementById("cloud-boards-download-content").style.bottom = "0px";
                                    document.getElementById("cloud-boards-download-content").style.width = "100%";
                                    document.getElementById("cloud-boards-download-content").style.height = "auto";
                                    var now_page = document.getElementById(layero.selector.replace("#", ""));
                                    now_page.style.maxWidth = "700px";
                                    now_page.style.maxHeight = "400px";
                                    var now_height = document.documentElement.clientHeight;
                                    var now_width = document.documentElement.clientWidth;
                                    now_page.style.left = (now_width - now_page.clientWidth) / 2 + "px";
                                    now_page.style.top = (now_height - now_page.clientHeight) / 2 + "px";
                                    document.getElementById('cloud-boards-download-message').value = "";
                                    if (localStorage.Theme == 'Dark') {
                                        $(now_page).addClass("dark");
                                    } else if (localStorage.Theme == 'Light') {
                                        $(now_page).addClass("light");
                                    }
                                    try {
                                        if (!fs.existsSync(indexPath + '/board/ThirdParty/'))
                                            fs.mkdirSync(indexPath + '/board/ThirdParty/');
                                        cloudDownload(indexPath + '/board/ThirdParty/', element);
                                    } catch (e) {
                                        console.log(e);
                                        cloudDownload(indexPath + '/board/ThirdParty/', element);
                                    }
                                } catch (e) {
                                    console.log(e);
                                }
                            },
                            cancel: function (index, layero) {

                            },
                            end: function () {
                                document.getElementById('cloud-boards-download-form').style.display = 'none';
                            }
                        });
                    } else {
                        layer.msg(indexText['请选择至少一块云端板卡'] + '!', {
                            time: 2000
                        });
                    }
                    break;
                case 'local-import':
                    get_index_File();
                    break;
                /*
                case 'LAYTABLE_SET':
                    layer.open({
                        type: 1,
                        id: "cloud-boards-url-content",
                        title: indexText['编辑url'],
                        area: ['80%', '70%'],
                        content: `<div id="cloud-boards-url-form" class="layui-form layui-form-pane" style="height: 100%;">
                                    <textarea id="cloud-boards-url-data" wrap="off" spellcheck="false" placeholder="${indexText["添加url"]}" class="layui-textarea"
                                    style="width:100%;height:100%;resize:none;"></textarea>
                                </div>`,
                        resize: false,
                        fixed: true,
                        //offset: 'auto',
                        success: function(layero){
                            try{
                                document.getElementById("cloud-boards-url-content").style.position = "absolute";
                                document.getElementById("cloud-boards-url-content").style.left = "0";
                                document.getElementById("cloud-boards-url-content").style.top = "43px";
                                document.getElementById("cloud-boards-url-content").style.bottom = "0px";
                                document.getElementById("cloud-boards-url-content").style.width = "100%";
                                document.getElementById("cloud-boards-url-content").style.height = "auto";
                                var now_page = document.getElementById(layero.selector.replace("#", ""));
                                now_page.style.maxWidth = "700px";
                                now_page.style.maxHeight = "300px";
                                var now_height = document.documentElement.clientHeight;
                                var now_width = document.documentElement.clientWidth;
                                now_page.style.left = (now_width - now_page.clientWidth)/2 + "px";
                                now_page.style.top = (now_height - now_page.clientHeight)/2 + "px";
                                document.getElementById('cloud-boards-url-data').value = "";
                                for (var i = 0; i < cloudLibsUrl.length; i++) {
                                    if (cloudLibsUrl[i] == defaultUrl) {
                                        continue;
                                    }
                                    document.getElementById('cloud-boards-url-data').value += cloudLibsUrl[i] + "\n";
                                }
                                //layer.setTop(layero);
                                //cloud_libs_url_text.resize();
                            } catch(e) {
                                console.log(e);
                            }
                        },
                        cancel: function(index, layero){ 
                            var urlText = document.getElementById('cloud-boards-url-data').value;
                            cloudLibsUrl = [];
                            cloudLibsUrl.push(defaultUrl);
                            var urlArr = getUrl(urlText);
                            if (urlArr)
                                cloudLibsUrl = cloudLibsUrl.concat(getUrl(urlText));
                            writeUrlArr(cloudLibsUrl, indexPath + '/board/ThirdParty/cloudBoardsUrl.json');
                            refreshTable(table);
                        }
                    });
                    break;
                */
            };
        });
    });
}

function getHttpReqCallback(Src, dirName, index, element) {
    var fileName = mixlyPath.basename(Src);
    var callback = function (res) {
        console.log("request: " + Src + " return status: " + res.statusCode);
        document.getElementById('cloud-boards-download-message').value += "request: " + Src + " return status: " + res.statusCode + "\n";
        document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
        //var contentLength = parseInt(res.headers['content-length']);
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

            //element.progress('download-percent', parseInt(cloudLibsNum/libsUrlList.length*100 + downloadedLen/contentTLen*1/libsUrlList.length*100) + '%');       
            nowPercent = parseInt(cloudLibsNum / libsUrlList.length * 100 + downloadedLen / contentTLen * 1 / libsUrlList.length * 100);
            if (nowPercent > oldPercent) {
                oldPercent = nowPercent;
                element.progress('download-percent', nowPercent + '%');
            }
            //console.log(parseInt(cloudLibsNum/libsUrlList.length*100 + downloadedLen/contentTLen*1/libsUrlList.length*100));
            //document.getElementById('cloud-boards-download-message').value += parseInt(cloudLibsNum/libsUrlList.length*100 + downloadedLen/contentTLen*1/libsUrlList.length*100) + "\n";
            //document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
        });
        res.on('end', function () {
            console.log("end downloading " + Src);
            document.getElementById('cloud-boards-download-message').value += "end downloading " + Src + "\n";
            document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;

            var totalBuff = Buffer.concat(fileBuff);
            console.log("totalBuff.length = " + totalBuff.length + " " + "contentType = " + contentType);
            document.getElementById('cloud-boards-download-message').value += "totalBuff.length = " + totalBuff.length + " " + "contentType = " + contentType + "\n";
            document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
            document.getElementById('cloud-boards-download-message').value += indexText["解压中"] + "...\n";
            document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
            setTimeout(function () {
                try {
                    fs.unlinkSync(dirName + "/" + fileName);
                } catch (e) {
                    console.log(e);
                }
                fs.appendFile(dirName + "/" + fileName, totalBuff, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        try {
                            const unzip = new AdmZip(dirName + "/" + fileName, 'GBK');
                            unzip.extractAllTo(dirName + "/", true);
                            fs.unlinkSync(dirName + "/" + fileName);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    cloudLibsNum++;
                    element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
                    if (cloudLibsNum == libsUrlList.length) {
                        console.log("finish! return 1");
                        if (document.getElementById('cloud-boards-download-form').style.display != "none") {
                            layer.closeAll();
                            mixly_board = [...defaultBoard];
                            screenWidthLevel = -1;
                            screenHeightLevel = -1;
                            load_board();
                            layer.msg(indexText['导入成功'] + '！', {
                                time: 1000
                            });
                        }
                    }
                });
            }, 1000);
        });
    };

    return callback;
}

var startDownloadTask = function (Src, dirName, index, element, startTime) {
    console.log("start downloading " + Src);
    if (Src.indexOf("http://") !== -1)
        nowHttp = http;
    else
        nowHttp = https;
    var req = nowHttp.request(Src, getHttpReqCallback(Src, dirName, index, element));
    req.on('error', function (e) {
        if ((Number(new Date()) - startTime) / 1000 < 30) {
            console.log("request " + Src + " error, try again");
            document.getElementById('cloud-boards-download-message').value += "request " + Src + " error, try again\n";
            document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
            startDownloadTask(Src, dirName, index, element, startTime);
        } else {
            console.log("reqeust " + Src + " timeout, abort this reqeust");
            document.getElementById('cloud-boards-download-message').value += "reqeust " + Src + " timeout, abort this reqeust\n";
            document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
            //req.abort();
            req.destroy();
            cloudLibsNum++;
            element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
            if (cloudLibsNum == libsUrlList.length) {
                console.log("finish! return 0");
                document.getElementById('cloud-boards-download-message').value += "reqeust " + Src + " timeout, abort this reqeust" + "\n";
                document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
                if (document.getElementById('cloud-boards-download-form').style.display != "none") {
                    layer.closeAll();
                    mixly_board = [...defaultBoard];
                    screenWidthLevel = -1;
                    screenHeightLevel = -1;
                    load_board();
                    layer.msg(indexText['导入失败，请检查网络'] + '！', {
                        time: 1000
                    });
                }
            }
        }
    });
    req.setTimeout(5000, function () {
        console.log("reqeust " + Src + " timeout, abort this reqeust");
        document.getElementById('cloud-boards-download-message').value += "reqeust " + Src + " timeout, abort this reqeust\n";
        document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
        //req.abort();
        req.destroy();
        cloudLibsNum++;
        element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
        if (cloudLibsNum == libsUrlList.length) {
            console.log("finish! return 0");
            document.getElementById('cloud-boards-download-message').value += "reqeust " + Src + " timeout, abort this reqeust" + "\n";
            document.getElementById('cloud-boards-download-message').scrollTop = document.getElementById('cloud-boards-download-message').scrollHeight;
            if (document.getElementById('cloud-boards-download-form').style.display != "none") {
                layer.closeAll();
                mixly_board = [...defaultBoard];
                screenWidthLevel = -1;
                screenHeightLevel = -1;
                load_board();
                layer.msg(indexText['导入失败，请检查网络'] + '！', {
                    time: 1000
                });
            }
        }
    })
    req.end();
}

function cloudDownload(path, element) {
    cloudLibsNum = 0;
    element.progress('download-percent', parseInt(cloudLibsNum / libsUrlList.length * 100) + '%');
    libsUrlList.forEach(function (item, index, array) {
        startDownloadTask(item, path, index, element, Number(new Date()));
    })
}