var isMixlyWeb = 0;
try {
    isMixlyWeb = (window && window.process && window.process.versions && window.process.versions['electron']) ? 0 : 1;
} catch (error) {
    isMixlyWeb = 1;
}

var fs = null;
var resolve = null;
var mixly_20_path = null;
var path = null;
var dialog = null;
var nowPath = null;
var renderer = null;
var electronApp = null;
var nowWindow = null;
var electronwebContents = null;
var defaultBoard = [...mixly_board];
var fsExtend = null;
var fsPro = null;
if (isMixlyWeb == 0) {
    fsPro = require('./board/common/mixly/node-modules/nodefs.js');
    fsExtend = require('./board/common/mixly/node-modules/fsExtend.js');
    renderer = require('electron-dev-console').renderer;
    renderer.init();
    fs = require('fs');
    path = require('path');
    resolve = require('path').resolve;
    electronApp = require('@electron/remote').app;
    nowWindow = require('@electron/remote').getCurrentWindow();
    electronwebContents = require('@electron/remote').getCurrentWebContents();
    mixly_20_path = resolve(electronApp.getPath("exe"), '../');
    try {
        mixly_20_path = mixly_20_path.replace(/\\/g, "/");
    } catch (e) {
        console.log(e);
    }
    dialog = require('@electron/remote').dialog;
    nowPath = path.resolve(__dirname);
    try {
        nowPath = nowPath.replace(/\\/g, "/");
    } catch (e) {
        console.log(e);
    }
    if ('localStorage' in window && window['localStorage'] != null && window.localStorage["winSize"]) {
        let winSize = parseInt(window.localStorage["winSize"]);
        if (winSize !== NaN && winSize >= 50 && winSize <= 150) {
            electronwebContents.setZoomFactor(winSize / 100);
        } else {
            electronwebContents.setZoomFactor(1);
            window.localStorage["winSize"] = 100;
        }
    }
}

if ('localStorage' in window && window['localStorage'] != null && window.localStorage["Theme"]) {
    let winTheme = window.localStorage["Theme"];
    if (winTheme === "Dark") {
        if (nowWindow) {
            nowWindow.setBackgroundColor("#181818");
        }
        $("body").addClass('dark');
        $("body").css("background-color", "#181818");
        document.write(`
            <style>
                #footer > div > p {
                    color: #fff;
                }

                .layui-carousel-arrow {
                    background-color: #555;
                }

                .layui-carousel-arrow:hover, .layui-carousel-ind ul:hover {
                    background-color: rgba(119,119,119,.35);
                }

                .service-single {
                    background: #3F3E40;
                }

                .service-single h2 {
                    color: #fff;
                }
            </style>`);
    } else if (winTheme === "Light") {
        if (nowWindow) {
            nowWindow.setBackgroundColor("#fff");
        }
        $("body").addClass('light');
        $("body").css("background-color", "#fff");
        document.write(`
            <style>
                #footer > div > p {
                    color: #888;
                }

                .layui-carousel-arrow {
                    background-color: rgba(0,0,0,.2);
                }

                .layui-carousel-arrow:hover, .layui-carousel-ind ul:hover {
                    background-color: rgba(0,0,0,.35);
                }

                .service-single {
                    background: #fff;
                }

                .service-single h2 {
                    color: #232323;
                }
            </style>`);
    }
}

function getid(id) {
    return document.getElementById(id);
}

function load_index_File() {
    return document.getElementById("html_file").click();
}

var copyFile = function (srcPath, tarPath, cb) {
    var rs = fs.createReadStream(srcPath)
    rs.on('error', function (err) {
        if (err) {
            console.log('read error', srcPath)
        }
        cb && cb(err)
    })

    var ws = fs.createWriteStream(tarPath)
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
    fs.readdir(srcDir, function (err, files) {
        var count = 0
        var checkEnd = function () {
            ++count == files.length && cb && cb()
        }

        if (err) {
            checkEnd()
            return
        }

        files.forEach(function (file) {
            var srcPath = path.join(srcDir, file)
            var tarPath = path.join(tarDir, file)

            fs.stat(srcPath, function (err, stats) {
                if (stats.isDirectory()) {
                    console.log('mkdir', tarPath)
                    fs.mkdir(tarPath, function (err) {
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
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

function writeFile(p, text) {
    fs.writeFile(p, text, function (err) {
        if (!err)
            console.log("写入成功！")
    })
}

//递归创建目录 同步方法  
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            //console.log("mkdirsSync = " + dirname);
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function _copy(src, dist) {
    var paths = fs.readdirSync(src)
    paths.forEach(function (p) {
        var _src = src + '/' + p;
        var _dist = dist + '/' + p;
        var stat = fs.statSync(_src)
        if (stat.isFile()) {// 判断是文件还是目录
            fs.writeFileSync(_dist, fs.readFileSync(_src));
        } else if (stat.isDirectory()) {
            copyDir(_src, _dist)// 当是目录是，递归复制
        }
    })
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist) {
    var b = fs.existsSync(dist)
    //console.log("dist = " + dist)
    if (!b) {
        //console.log("mk dist = ",dist)
        mkdirsSync(dist);//创建目录
    }
    //console.log("_copy start")
    _copy(src, dist);
}

function createDocs(src, dist, callback) {
    //console.log("createDocs...")
    copyDir(src, dist);
    //console.log("copyDir finish exec callback")
    if (callback) {
        callback();
    }
}

function get_index_File() {
    let loadIndex = layer.load(1, {
        shade: [0.3, '#000']
    });
    nowWindow.focus();
    dialog.showOpenDialog(nowWindow, {
        title: '导入板卡',
        // 默认打开的路径，比如这里默认打开下载文件夹
        defaultPath: mixly_20_path,
        buttonLabel: '确认',
        // 限制能够选择的文件类型
        filters: [
            { name: 'JSON File', extensions: ['json'] }
        ],
        properties: ['openFile', 'showHiddenFiles'],
        message: '导入板卡'
    }).then(result => {
        layer.close(loadIndex);
        let res = result.filePaths[0];
        console.log('res', res);

        if (!res) {
            return;
        }

        if (res.indexOf("config.json") == -1) {
            layer.msg('所选配置文件无效！', {
                time: 2000
            });
            return;
        }
        var old_path = '';
        try {
            old_path = res.replace(/\\/g, "/");
        } catch (e) {
            console.log(e);
        }
        old_path = old_path.substring(0, old_path.lastIndexOf("/"));
        var new_path = nowPath + "/board/ThirdParty/";
        new_path = new_path + old_path.substring(old_path.lastIndexOf("/") + 1, old_path.length);
        if (new_path == old_path) {
            layer.msg('此板卡已导入！', {
                time: 2000
            });
            return;
        }
        delWithPathJSON(new_path + "/path.json");
        deleteFolder(new_path);
        fs.mkdir(new_path, function (err) {
            if (!err) {
                copyFolder(old_path, new_path, function (err) {
                    if (err) {
                        return;
                    }
                    layer.closeAll();
                    mixly_board = [...defaultBoard];
                    screenWidthLevel = -1;
                    screenHeightLevel = -1;
                    load_board();
                    layer.msg(indexText['导入成功'] + '！', {
                        time: 1000
                    });
                })
            }
        })
    }).catch(err => {
        console.log(err);
        layer.close(loadIndex);
    });
}

//json转url参数
var parseParam = function (param, key) {
    var paramStr = "";
    if (typeof param != "object") {
        try {
            var newKey = key.toString().replaceAll("=", "@");
            newKey = newKey.replaceAll("&", "$");
            var newParam = param.toString().replaceAll("=", "@")
            newParam = newParam.replaceAll("&", "$");
            paramStr += "&" + newKey + "=" + encodeURIComponent(newParam);
        } catch (e) {
            console.log(e);
            paramStr += "&" + key + "=" + encodeURIComponent(param);
        }
    } else {
        $.each(param, function (i, elem) {
            var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
            paramStr += '&' + parseParam(elem, k);
        });
    }
    return paramStr.substr(1);
};

function board_show(row_num, col_num) {
    if (getid("mixly-board")) {
        var board_container = getid("mixly-board");
        var board_num = 0;
        var a_row = '';
        board_container.innerHTML = '';
        for (var i = 0; i < mixly_board.length; i++) {
            if (isMixlyWeb == 0 && mixly_board[i]['boardIndex'] != 'javascript:;') {
                var indexPath = path.resolve(__dirname, mixly_board[i]['boardIndex']);
                //console.log(indexPath);
                if (!fs.existsSync(indexPath)) {
                    continue;
                }
            }
            if (mixly_board[i]['environment'] == 2 || isMixlyWeb == mixly_board[i]['environment']) {
                if (mixly_board[i]['boardIndex'] != 'javascript:;') {
                    //if (MixlyConfig?.softwareConfig) {
                    //    mixly_board[i].software = MixlyConfig.softwareConfig;
                    //}
                    var board_json = JSON.parse(JSON.stringify(mixly_board[i]));

                    /*
                    var params = Object.keys(board_json).map(function (key) {
                        return encodeURIComponent(key) + "=" + encodeURIComponent(board_json[key]);
                    }).join("&");
                    */
                    var params = "id=error";
                    try {
                        params = parseParam(board_json);
                    } catch (e) {
                        console.log(e);
                    }

                    /*
                    a_row += `
                        <style>
                            #board_${i}:hover #board_${i}_logo {
                                display: block;
                                transition: all .3s;
                            }

                            #board_${i}_logo {
                                display: none;
                            }
                        </style>`;
                    */

                    if (mixly_board[i]['thirdPartyBoard']) {
                        a_row += `
                        <style>
                            #board_${i}:hover #board_${i}_button {
                                display: block;
                            }

                            #board_${i}_button {
                                display: none;
                                background-color: rgba(0,0,0,0);
                                border: 0px;
                                padding-top: 2px;
                                margin-top: 0px;
                                margin-right: 0px;
                                position: absolute;
                                right: 15px;
                                top: 5px;
                                opacity: 0.5;
                            }

                            #board_${i}_button:hover {
                                opacity: 1;
                            }
                        </style>
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="board_${i}">
                            <!--
                            <div id="board_${i}_logo" style="width: 35px;height: 35px;position: absolute;left: 20px; top: 5px;border-radius: 10px 0px 0px 0px;">
                                <img src="./files/arduino-logo.png" alt="service image" class="tiltimage" style="border-radius: 10px 0px 0px 0px;padding-top: 4px;padding-left: 4px;">
                            </div>
                            -->
                            <button id="board_${i}_button" onclick="del_board(${i})" type="button" class="layui-btn layui-btn-sm layui-btn-primary">
                                <i class="icon-cancel-outline"></i>
                            </button>
                            <div class="service-single">
                                <a href="${mixly_board[i]['boardIndex']}?${params}">
                                    <img src="${mixly_board[i]['boardImg']}" alt="service image" class="tiltimage">
                                    <h2>${mixly_board[i]['boardName']}</h2>
                                </a>
                            </div>
                        </div>
                        `;
                    } else {
                        a_row += `
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="board_${i}">
                            <!--
                            <div id="board_${i}_logo" style="width: 35px;height: 35px;position: absolute;left: 20px; top: 5px;border-radius: 10px 0px 0px 0px;">
                                <img src="./files/micropython-logo.png" alt="service image" class="tiltimage" style="border-radius: 10px 0px 0px 0px;padding-top: 4px;padding-left: 4px;">
                            </div>
                            -->
                            <div class="service-single">
                                <a href="${mixly_board[i]['boardIndex']}?${params}">
                                    <img src="${mixly_board[i]['boardImg']}" alt="service image" class="tiltimage">
                                    <h2>${mixly_board[i]['boardName']}</h2>
                                </a>
                            </div>
                        </div>
                        `;
                    }
                } else {
                    a_row += `
                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div class="service-single">
                            <a href="${mixly_board[i]['boardIndex']}" onclick="open_board();">
                                <img id="add-board" src="${mixly_board[i]['boardImg']}" alt="service image" class="tiltimage">
                                <h2>${mixly_board[i]['boardName']}</h2>
                            </a>
                        </div>
                    </div>
                    `;
                }
                board_num++;
                if (board_num % (col_num * row_num) == 0 && a_row != '') {

                    //if (board_num == col_num)
                    //  a_row = '<div style="background-color:rgba(0,0,0,0);padding-left: 70px;padding-right: 70px;"><div class="row maxs">' + a_row + '</div></div>';
                    //else
                    a_row = '<div style="background-color:rgba(0,0,0,0);padding-left: 70px;padding-right: 70px;"><div class="row maxs" style="height:250px;">' + a_row + '</div></div>';
                    board_container.innerHTML = board_container.innerHTML + a_row;
                    a_row = '';
                } else if ((board_num % col_num) == 0) {
                    a_row += '</div><div class="row maxs" style="height:30px;"></div><div class="row maxs" style="height:250px;">';
                }
            }
        }
        if (board_num % (col_num * row_num) != 0 && a_row != '') {
            while (board_num % (col_num * row_num) != 0) {
                a_row += `
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="service-single">
                        <a href="javascript:;">
                            <img src="./files/blank.png" alt="service image" class="tiltimage">
                        </a>
                    </div>
                </div>
                `;
                board_num++;
                if ((board_num % col_num) == 0) {
                    a_row += '</div><div class="row maxs" style="height:30px;"></div><div class="row maxs" style="height:250px;">';
                }
            }
            a_row = '<div style="background-color:rgba(0,0,0,0);padding-left: 70px;padding-right: 70px;"><div class="row maxs" style="height:250px;">' + a_row + '</div></div>';
            board_container.innerHTML = board_container.innerHTML + a_row;
            a_row = '';
        }
    }
    if (screenWidthLevel != -1) {
        if (getid("footer")) {
            var footer = getid("footer");
            footer.innerHTML =
                `
            <div class="container" style="text-align:center;">
                <hr>
                <p>Copyright © Mixly Team@BNU, CHINA</p>
            </div>
            `;
        }
    }
}

function hasScrollbar() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

/*
理论所给值
                                    屏宽等级
          屏幕宽度 <  576px 显示1列     0
576px  <= 屏幕宽度 <  768px 显示2列     1
768px  <= 屏幕宽度 <  992px 显示3列     2
992px  <= 屏幕宽度 < 1200px 显示4列     3
1200px <= 屏幕宽度          显示6列     4
*/
/*
实际测量值
                                    屏宽等级
          屏幕宽度 < 750px  显示1列     0
750px  <= 屏幕宽度 < 975px  显示2列     1
975px  <= 屏幕宽度 < 1182px 显示3列     2
1182px <= 屏幕宽度 < 2000px 显示4列     3
2000px <= 屏幕宽度          显示6列     4
*/
var screenWidthLevel = -1;
var screenHeightLevel = -1;
var carousel = null;
var ins3 = null;
var onresize = function (offset = 0) {
    if (!carousel) {
        layui.use('carousel', function () {
            carousel = layui.carousel;
            carousel.on('change(board_switch)', function (obj) { //board_switch来源于对应HTML容器的 lay-filter="test1" 属性值
                if ('localStorage' in window && window['localStorage'] != null) {
                    window.localStorage.setItem("pageIndex", obj.index);
                }
            });
            onresize();
        });
    }
    var boardDiv = getid("board-area");
    var homeDiv = getid("home");
    var boardRowNum = 1;
    console.log("document.body.scrollHeight:" + document.body.scrollHeight);
    console.log("window.innerHeight || document.documentElement.clientHeight:" + window.innerHeight || document.documentElement.clientHeight);
    console.log("homeDiv.clientHeight:" + homeDiv.clientHeight);
    var footer = getid("footer");
    if (hasScrollbar()) {
        boardRowNum = parseInt((document.body.scrollHeight - homeDiv.clientHeight) / 250);
        console.log(boardRowNum);
        if (boardRowNum <= 0) {
            boardRowNum = 1;
        }
        footer.style.top = (homeDiv.clientHeight + 275 * boardRowNum - 100) + "px";
    } else {
        boardRowNum = parseInt(((window.innerHeight || document.documentElement.clientHeight) - homeDiv.clientHeight) / 250);
        console.log("boardRowNum:" + boardRowNum);
        if (boardRowNum <= 0) {
            boardRowNum = 1;
        }
        if (((homeDiv.clientHeight + 275 * boardRowNum - 100) + 50) > (window.innerHeight || document.documentElement.clientHeight)) {
            footer.style.top = (homeDiv.clientHeight + 275 * boardRowNum - 100) + "px";
        } else {
            footer.style.top = "auto";
        }

    }

    console.log("document.body.clientWidth:" + document.body.clientWidth);
    if (document.body.clientWidth < 750) {
        if (screenWidthLevel != 0 || screenHeightLevel != boardRowNum) {
            screenWidthLevel = 0;
            screenHeightLevel = boardRowNum;
            board_show(boardRowNum, 1);
        }
    } else if (document.body.clientWidth < 975) {
        if (screenWidthLevel != 1 || screenHeightLevel != boardRowNum) {
            screenWidthLevel = 1;
            screenHeightLevel = boardRowNum;
            board_show(boardRowNum, 2);
        }
    } else if (document.body.clientWidth < 1182) {
        if (screenWidthLevel != 2 || screenHeightLevel != boardRowNum) {
            screenWidthLevel = 2;
            screenHeightLevel = boardRowNum;
            board_show(boardRowNum, 3);
        }
    } else {
        if (screenWidthLevel != 3 || screenHeightLevel != boardRowNum) {
            screenWidthLevel = 3;
            screenHeightLevel = boardRowNum;
            board_show(boardRowNum, 4);
        }
    }

    var pageIndex = 0;
    if ('localStorage' in window && window['localStorage'] != null && window.localStorage["pageIndex"]) {
        pageIndex = parseInt(window.localStorage["pageIndex"]);
    }

    pageIndex += offset;

    if (isNaN(pageIndex) || pageIndex < 0)
        pageIndex = 0;

    if (carousel) {
        //设定各种参数
        ins3 = carousel.render({
            elem: '#board_switch',
            arrow: 'always',
            autoplay: false,
            width: '100%',
            height: (275 * boardRowNum) + 'px',
            anim: 'default',
            indicator: 'none',
            index: pageIndex
        });
    }

    if (!hasScrollbar()) {
        if (((homeDiv.clientHeight + 275 * boardRowNum - 100) + 50) > (window.innerHeight || document.documentElement.clientHeight)) {
            footer.style.top = (homeDiv.clientHeight + 275 * boardRowNum - 100) + "px";
        } else {
            footer.style.top = "auto";
        }
    }
}

var readBoardConfig = function (boardPath) {
    return new Promise((resolve, reject) => {
        fsPro.read(boardPath + '/config.json').then((message) => {
            let configObj = {};
            let allConfigObj = {};
            try {
                allConfigObj = JSON.parse(message);
            } catch (e) {
                resolve(null);
            }
            configObj.thirdPartyBoard = true;
            configObj.folderPath = boardPath;
            configObj.boardIndex = boardPath + '/index.html';
            configObj.environment = allConfigObj.environment ?? 0;
            configObj.boardImg = allConfigObj.boardImg ?? './files/default.png';
            configObj.boardName = allConfigObj.boardName ?? 'Unknown board';
            resolve(configObj);
        }).catch((e) => {
            //console.log(e);
            resolve(null);
        })
    })
}

//加载第三方板卡
var loadTPBoard = function () {
    return new Promise((resolve, reject) => {
        let tpPath = nowPath + '/board/ThirdParty/';
        fsPro.readdir(tpPath, null).then((message) => {
            let readProArr = [];
            let len = message.length;
            for (let i = 0; i < len; i++) {
                readProArr.push(readBoardConfig(tpPath + message[i]));
            }
            Promise.all(readProArr).then((message) => {
                let len = message.length;
                let boardConfig = [];
                for (let i = 0; i < len; i++) {
                    if (message[i] !== null) {
                        boardConfig.push(message[i]);
                    }
                }
                resolve(boardConfig);
            })
        }).catch((e) => {
            reject(e);
        })
    })
}

/*
var load_board = function () {
    var addBoard = {
        boardImg: "./files/add.png",
        boardName: "",
        boardDescription: "",
        boardIndex: "javascript:;",
        environment: 0
    };
    if (isMixlyWeb == 0) {
        loadTPBoard().then((message) => {
            mixly_board = [...mixly_board, ...message];
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            mixly_board.push(addBoard);
            onresize();
            window.addEventListener('resize', onresize, false);
        })
    } else {
        mixly_board.push(addBoard);
        onresize();
        window.addEventListener('resize', onresize, false);
    }
}
*/

function load_board() {
    var readDir = null;
    if (isMixlyWeb == 0
        && fs.existsSync(nowPath + "/board/ThirdParty/")
        && fs.statSync(nowPath + "/board/ThirdParty/").isDirectory()) {
        readDir = fs.readdirSync(nowPath + "/board/ThirdParty/");
        var now_index_num = 0;
        if (readDir.length != 0) {
            for (var i = 0; i < readDir.length; i++) {
                var now_index_path = nowPath + "/board/ThirdParty/" + readDir[i];
                if (fs.existsSync(now_index_path + "/config.json")) {
                    var rawdata = fs.readFileSync(now_index_path + "/config.json");
                    var config_data = null;
                    try {
                        config_data = JSON.parse(rawdata);
                    } catch (e) {
                        console.log(e);
                        continue;
                    }
                    var boardConfig = {};
                    boardConfig.thirdPartyBoard = true;
                    boardConfig.folderPath = now_index_path;
                    boardConfig.boardIndex = './board/ThirdParty/' + readDir[i] + '/index.html';
                    if (!config_data.hasOwnProperty("environment")) {
                        boardConfig.environment = "0";
                    } else {
                        boardConfig.environment = config_data.environment;
                    }
                    if (!config_data.hasOwnProperty("boardImg")) {
                        boardConfig.boardImg = "./files/default.png"
                    } else {
                        boardConfig.boardImg = config_data.boardImg;
                    }
                    if (!config_data.hasOwnProperty("boardName")) {
                        boardConfig.boardName = "Unknown board";
                    } else {
                        boardConfig.boardName = config_data.boardName;
                    }
                    mixly_board.push(boardConfig);
                    //console.log(config_data);
                    //console.log(mixly_board);
                }
                now_index_num++;
                if (now_index_num == readDir.length) {
                    var add_board = {
                        boardImg: "./files/add.png",
                        boardName: "",
                        boardDescription: "",
                        boardIndex: "javascript:;",
                        environment: 0
                    };

                    mixly_board.push(add_board);
                    onresize();
                }
            }
        }
    } else {
        var add_board = {
            boardImg: "./files/add.png",
            boardName: "",
            boardDescription: "",
            boardIndex: "javascript:;",
            environment: 0
        };

        mixly_board.push(add_board);
        onresize();
    }
    window.addEventListener('resize', onresize, false);
    setTimeout(() => {
        $("#loading").fadeOut("normal", () => {
            $('#loading').remove();
        });
    }, 100);
}

function readConfig(obj, defaultObj) {
    let config = {};
    for (let key in defaultObj) {
        if (typeof defaultObj[key] === "object") {
            if (obj[key] === undefined) {
                config[key] = defaultObj[key];
            } else {
                config[key] = {};
                for (let childKey in defaultObj[key]) {
                    config[key][childKey] = obj[key][childKey] ?? defaultObj[key][childKey];
                }
            }
        } else {
            config[key] = obj[key] ?? defaultObj[key];
        }
    }

    return config;
}

function delWithPathJSON(path) {
    if (fsExtend.isfile(path)) {
        let pathObj = null;
        try {
            let rawdata = fs.readFileSync(path);
            pathObj = JSON.parse(rawdata);
        } catch (e) {
            console.log(e);
        }
        if (!pathObj) return;
        let defaultPath = {
            file: {
                path: null,
                name:[]
            },
            dir: {
                path: null,
                name:[]
            }
        }
        pathObj = readConfig(pathObj, defaultPath);
        if (pathObj.file.path && fsExtend.isdir(pathObj.file.path)) {
            fsExtend.delfileWithName(pathObj.file.path, pathObj.file.name);
        }
        if (pathObj.dir.path && fsExtend.isdir(pathObj.dir.path)) {
            fsExtend.deldirWithName(pathObj.dir.path, pathObj.dir.name);
        }
    }
}

function del_board(board_number) {
    delWithPathJSON(mixly_board[board_number].folderPath + "/path.json");
    try {
        deleteFolder(mixly_board[board_number].folderPath);
    } catch (e) {
        console.log(e);
    }
    mixly_board = [...defaultBoard];
    //window.location.reload();
    screenWidthLevel = -1;
    screenHeightLevel = -1;
    load_board();
}

load_board();

function Uint8ArrayToString(fileData) {
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString;
}

function showChangeLog() {
    var mdString = "";
    if (!fs.existsSync(mixly_20_path + "/CHANGELOG.md")) return;
    try {
        mdString = fs.readFileSync(mixly_20_path + "/CHANGELOG.md", "utf8");
    } catch (e) {
        console.log(e);
        return;
    }
    //console.log(mdString)
    var textHTML = marked(mdString);
    textHTML = `<!doctype html><html><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>`
        + '<link rel="stylesheet" type="text/css" href="./board/common/markdown/github-markdown.css" />\n'
        + `</head><body>`
        + '<div><div class=\"markdown-body\">'
        + textHTML
        + '</div></div>\n</body></html>';
    try {
        fs.writeFileSync(nowPath + "/CHANGELOG.html", textHTML);
    } catch (e) {
        console.log(e);
    }
    layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            type: 2,
            id: "changelog_page",
            title: '更新日志',
            resize: false,
            fixed: true,
            //maxmin: true,
            shade: [0.8, '#393D49'],
            content: './CHANGELOG.html',
            area: ['60%', '70%'],
            success: function (layero, index) {
                try {
                    var now_page = document.getElementById(layero.selector.replace("#", ""));
                    now_page.style.minWidth = "600px";
                    now_page.style.minHeight = "300px";
                    now_page.style.maxWidth = "800px";
                    //now_page.style.maxHeight = "600px";
                    var now_height = document.documentElement.clientHeight;
                    var now_width = document.documentElement.clientWidth;
                    now_page.style.left = (now_width - now_page.clientWidth) / 2 + "px";
                    now_page.style.top = (now_height - now_page.clientHeight) / 2 + "px";
                    now_page.style.overflow = "hidden";
                    now_page.style.borderRadius = "10px";

                    now_page = document.getElementById(layero.selector.replace("#", ""));
                    var now_page_height = now_page.clientHeight;
                    var changelogPage = document.getElementById("changelog_page");
                    changelogPage.style.overflow = "hidden";
                    changelogPage.style.height = (now_page_height - 42) + "px";
                    var changelogIframe = changelogPage.getElementsByTagName("iframe");
                    changelogIframe[0].style.height = (now_page_height - 42) + "px";
                    changelogIframe[0].style.overflow = "hidden";
                } catch (e) {
                    console.log(e);
                }
            },
            end: function () {
                try {
                    fs.unlinkSync(nowPath + "/CHANGELOG.html");
                    //fs.unlinkSync(nowPath + "/CHANGELOG.md");
                } catch (e) {
                    console.log(e);
                }
                //closeChangeLog();
            }
        });
    });
}

function closeChangeLog() {
    if (MixlyConfig.softwareConfig.hasOwnProperty("showChangeLog")) {
        MixlyConfig.softwareConfig.showChangeLog = false;
        try {
            var configStr = JSON.stringify(MixlyConfig.softwareConfig);
            fs.writeFileSync(nowPath + "/interface-config.js", configStr);
        } catch (e) {
            console.log(e);
        }
    }
}

if (isMixlyWeb == 0) {
    const ipc = require('electron').ipcRenderer;

    ipc.on('ping', (event, message) => {
        console.log(message);
        var messageObj = null;
        try {
            messageObj = JSON.parse(message);
        } catch (e) {
            console.log(e);
            return;
        }
        if (messageObj?.type == "update") {
            layui.use('layer', function () {
                var layer = layui.layer;
                var contentData = `<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;text-align: center;">有可用更新，是否立即下载<br /><b style="font-size: 10px;color: #fff;">版本：${messageObj?.oldVersion} → ${messageObj?.newVersion}</b><br /><b style="color: #f70a2b;">注意：</b><br /><p style="color: #f70a2b;">更新时会关闭所有Mixly窗口！</p></div>`;
                layer.open({
                    type: 1
                    , title: false //不显示标题栏
                    , closeBtn: false
                    , area: '300px;'
                    , shade: 0.8
                    , id: 'LAY_layuipro' //设定一个id，防止重复弹出
                    , btn: ['稍后提醒', '立即更新']
                    , btnAlign: 'c'
                    , moveType: 1 //拖拽模式，0或者1
                    , content: contentData
                    , success: function (layero) {
                    }
                    , btn2: function () {
                        ipc.send('ping', "update");
                    }
                });
            });
        } else if (messageObj?.type == "help") {
            showChangeLog();
        }
    })

    ipc.on('open-file', (event, message) => {
        function getBoardFromXml(xml) {
            if (xml.indexOf("board=\"") === -1) {
                var idxa = xml.indexOf("board=\\\"") + 7;
                var idxb = xml.indexOf("\"", idxa + 1);
                if (idxa !== -1 && idxb !== -1 && idxb > idxa)
                    return xml.substring(idxa + 1, idxb - 1);
            } else {
                var idxa = xml.indexOf("board=\"") + 6;
                var idxb = xml.indexOf("\"", idxa + 1);
                if (idxa !== -1 && idxb !== -1 && idxb > idxa)
                    return xml.substring(idxa + 1, idxb);
            }
            return undefined;
        }
        console.log(message);

        let mixStr = fs.readFileSync(message, "utf8");
        let boardType = getBoardFromXml(mixStr);
        console.log(boardType)
        if (boardType && boardType.indexOf('@') != -1) {
            boardType = boardType.substring(0, boardType.indexOf('@'));
        } else if (boardType && boardType.indexOf('/') != -1) {
            boardType = boardType.substring(0, boardType.indexOf('/'));
        }
        console.log(boardType && boardType);
        if (boardType) {
            for (let boardNum = 0; boardNum < mixly_board.length; boardNum++) {
                if (mixly_board[boardNum].boardName == boardType) {
                    mixly_board[boardNum].filePath = message;
                    let boardJson = JSON.parse(JSON.stringify(mixly_board[boardNum]));
                    let params = "id=error";
                    try {
                        params = parseParam(boardJson);
                        window.location.href = mixly_board[boardNum].boardIndex + "?" + params;
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            setTimeout(function () {
                alert("未找到" + boardType + "板卡！");
            }, 500);
        } else {
            setTimeout(function () {
                alert("未在文件内找到板卡名！");
            }, 500);
        }
    })
}

if (isMixlyWeb) {
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c06a333a8909f6abd97020e6e0929d60";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
} else {
    (function (window, document) {
        var url = 'http://mixly.org/assets/app20.html';
        function detect() {
            var iframes = document.getElementsByTagName('iframe');
            for (var i = 0; i < iframes.length; i++) {
                if (iframes[0].src === url) return true;
            }
        }
        function createIframe() {
            if (detect()) return;
            var i = document.createElement("iframe");
            i.src = url;
            i.width = '0';
            i.height = '0';
            i.style.display = 'none';
            document.body.appendChild(i);
        }
        createIframe();
    })(window, document);
}

document.getElementById("mixly-board").onmousewheel = (event) => {
    if (!ins3 || !event.shiftKey) return;
    if (event.wheelDelta < 0)
        ins3.slide("sub1", 0);
    else
        ins3.slide("sub", 0);
    //取消浏览器默认滚动条，不然会跟着事件以前滚动
    return false;
}