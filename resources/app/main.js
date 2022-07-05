const {
    app,
    BrowserWindow,
    ipcMain,
    globalShortcut,
    dialog,
    Menu,
    MenuItem,
    shell
} = require('electron');
const electron = require('electron');
const electronLocalshortcut = require('electron-localshortcut');
const mainConsole = require('electron-dev-console').main;
const nodeFs = require('fs');
const nodePath = require('path');
const electron_remote = require('@electron/remote/main');
electron_remote.initialize();

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let cloudSoftwareJson = null;

const renderWindows = {};

//程序 ready 前禁用GPU加速，解决软件打开时的黑屏问题
app.disableHardwareAcceleration();

app.allowRendererProcessReuse = false;

function createWindow(filePath = null, indexUrl = null) {
    Menu.setApplicationMenu(null);
    // 可以创建多个渲染进程
    let win = new BrowserWindow({
        show: false,
        //resizable: false,
        minHeight: 400,
        minWidth: 650,
        width: 0,
        height: 0,
        icon: __dirname + '/files/mixly.ico',
        allowRunningInsecureContent: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    });

    renderWindows[win.id] = win;

    electron_remote.enable(win.webContents);
    //win.webContents.openDevTools();
    //win.maximize()
    //win.show()

    // 渲染进程中的web页面可以加载本地文件
    if (indexUrl)
        win.loadURL(indexUrl);
    else
        win.loadFile('index.html');

    //打开或关闭开发者工具
    electronLocalshortcut.register(win, 'CmdOrCtrl+Shift+I', () => {
        win.webContents.toggleDevTools();
    });

    //重载页面
    electronLocalshortcut.register(win, 'CmdOrCtrl+R', () => {
        win.reload();
    });

    //最小化窗口
    electronLocalshortcut.register(win, 'CmdOrCtrl+M', () => {
        win.minimize();
    });

    //关闭窗口
    electronLocalshortcut.register(win, 'CmdOrCtrl+W', () => {
        win.close();
    });

    //还原窗口
    electronLocalshortcut.register(win, 'CmdOrCtrl+0', () => {
        win.webContents.setZoomFactor(1);
    });

    //放大窗口
    electronLocalshortcut.register(win, 'CmdOrCtrl+Shift+=', () => {
        let actualZoom = win.webContents.getZoomFactor();
        if (actualZoom == null) {
            actualZoom = 1;
        }
        if (actualZoom < 1.5) {
            win.webContents.setZoomFactor(actualZoom + 0.1);
        }
    });

    //缩小窗口
    electronLocalshortcut.register(win, 'CmdOrCtrl+Shift+-', () => {
        let actualZoom = win.webContents.getZoomFactor();
        if (actualZoom == null) {
            actualZoom = 1;
        }
        if (actualZoom > 0.5) {
            win.webContents.setZoomFactor(actualZoom - 0.1);
        }
    });

    //重启
    electronLocalshortcut.register(win, 'CmdOrCtrl+Q', () => {
        app.relaunch();
        app.exit(0);
    });

    //打开帮助页面
    electronLocalshortcut.register(win, 'CmdOrCtrl+H', () => {
        var sendObj = {};
        sendObj.type = "help";
        var sendStr = JSON.stringify(sendObj);
        win.webContents.send('ping', sendStr);
        //win.webContents.executeJavaScript('alert("this is a test!");');
    });

    //创建一个新页面
    electronLocalshortcut.register(win, 'CmdOrCtrl+N', () => {
        createWindow(null);
    });

    win.once('ready-to-show', () => {
        win.maximize();
        win.show();
        if (filePath != null) {
            win.webContents.send('open-file', filePath);
        }
    });

    win.on('close', function () {
        delete renderWindows[win.id];
    });

    // 记得在页面被关闭后清除该变量，防止内存泄漏
    win.on('closed', function () {
        win = null;
    });
    mainConsole.init(win);

    getLibsJson(function (jsonData) {
        if (!jsonData?.version) return;
        mainConsole.success(jsonData);
        cloudSoftwareJson = JSON.stringify(jsonData);
        mainConsole.info(app.getVersion());
        //var updateSoftware = changeVersion(app.getVersion(), jsonData.version);
        var updateSoftware = (app.getVersion() != jsonData.version);
        mainConsole.info((app.getVersion() != jsonData.version));
        if (updateSoftware) {
            var sendObj = {};
            sendObj.type = "update";
            sendObj.oldVersion = app.getVersion();
            sendObj.newVersion = jsonData.version;
            var sendStr = JSON.stringify(sendObj);
            setTimeout(function () {
                win.webContents.send('ping', sendStr);
            }, 1000);
        }
    });

    ipcMain.on('ping', (event, arg) => {
        mainConsole.info(arg);
        if (arg == "update") {
            shell.openPath(nodePath.join(__dirname, '../../一键更新.bat'));
        }
        event.reply('ping', 'get');
    });

    win.on('unresponsive', async () => {
        const { response } = await dialog.showMessageBox({
            message: 'Mixly2.0无响应',
            title: '您想尝试强制重新加载应用程序吗？',
            buttons: ['确定', '取消'],
            cancelId: 1
        });
        if (response === 0) {
            win.forcefullyCrashRenderer();
            win.reload();
        }
    });
}

app.on('ready', function () {
    if (process.argv.length >= 2) {
        createWindow(process.argv[1]);
    } else {
        createWindow(null);
    }
});

// 页面全部关闭后关闭主进程,不同平台可能有不同的处理方式
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('render-process-gone', async (e, w, d) => {
    let title;
    if(d.reason == "crashed") {
        nodeFs.appendFileSync('./log.txt', `${new Date()}渲染进程崩溃${d.reason}\n`);
        title = '渲染进程崩溃';
    } else {
        nodeFs.appendFileSync('./log.txt', `${new Date()}渲染进程被杀死${d.reason}\n`);
        title = '渲染进程被杀死';
    }
    const { response } = await dialog.showMessageBox({
        title: title,
        message: '您想尝试强制重新加载此页面吗？',
        type: 'none',
        buttons: ['确定', '取消'],
        cancelId: 1
    });
    w.destroy();
    if (response === 0) {
        createWindow(null, w.getURL());
    }
});

const gotTheLock = app.requestSingleInstanceLock();
if (gotTheLock) {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        if (commandLine[0] != app.getPath("exe")) {

        } else {
            if (commandLine.length >= 3) {
                createWindow(commandLine[2]);
            } else {
                createWindow(null);
            }
        }
    })
} else {
    app.quit();
}

const https = require("https");

function getLibsJsonCallback(Src, doFunc) {
    var callback = function (res) {
        mainConsole.info("request: " + Src + " return status: " + res.statusCode);
        var contentType = res.headers['content-type'];
        var fileBuff = [];
        res.on('data', function (chunk) {
            var buffer = new Buffer(chunk);
            fileBuff.push(buffer);
        });
        res.on('end', function () {
            mainConsole.info("end downloading " + Src);

            var totalBuff = Buffer.concat(fileBuff);
            mainConsole.info("totalBuff.length = " + totalBuff.length + " " + "contentType = " + contentType);
            var receiveData = null;
            try {
                let dataStr = String(totalBuff);
                dataStr = dataStr.substring(dataStr.indexOf("{"));
                mainConsole.info(dataStr);
                receiveData = JSON.parse(dataStr);
                mainConsole.info(receiveData);
            } catch (e) {
                mainConsole.error(e);
            }
            mainConsole.info("finish! return 2");
            doFunc(receiveData);
        });
    };

    return callback;
}

var startGetLibsJsonTask = function (Src, startTime, doFunc) {
    mainConsole.info("start downloading " + Src);
    var req = https.request(Src, getLibsJsonCallback(Src, doFunc));
    req.on('error', function (e) {
        if ((Number(new Date()) - startTime) / 1000 < 5) {
            mainConsole.info("request " + Src + " error, try again");
            setTimeout(function () {
                startGetLibsJsonTask(Src, startTime, doFunc);
            }, 500);
        } else {
            mainConsole.info("reqeust " + Src + " timeout, about this reqeust");
            req.destroy();
            mainConsole.info("finish! return 0");
        }
    });
    req.setTimeout(5000, function () {
        mainConsole.info("reqeust " + Src + " timeout, about this reqeust");
        req.destroy();
        mainConsole.info("finish! return 0");
    })
    req.end();
}

function getLibsJson(doFunc) {
    startGetLibsJsonTask("https://gitee.com/mixly2/mixly2.0-win32-x64/raw/master/resources/app/package.json", Number(new Date()), doFunc);
}

// 获取数字
function toNumber(n) {
    var n = n.toString(),
        n_arr = n.split(/\D/); // 使用正则表达式，截取字符串为数组，字符串中包含非数值型，如字母，则数组元素中会出现空值
    if (n_arr[n_arr.length - 1] == '') {
        n_arr.pop();
    }

    var n_replace = ['', '0', '00', '000', '0000'],
        r_n_replace = n_replace.reverse();
    for (var i = 0; i < n_arr.length; i++) {
        var l = n_arr[i].length;
        n_arr[i] = r_n_replace[l] + n_arr[i];
    }
    var res = n_arr.join('');
    return res;
}

// 获取字母
function toString(s) {
    var s = s.toString(),
        reg = s.match(/[a-zA-Z]/g); // 截取字符串中的字母成为数组元素
    if (reg != null) {
        return reg;
    } else {
        return null;
    }
}

// 版本对比
function changeVersion(a, b) {
    var a1 = null,
        a2 = null,
        b1 = null,
        b2 = null;

    try {
        a1 = toNumber(a);
        b1 = toNumber(b);
    } catch (e) {
        mainConsole.error(e);
        a1 = 0;
        b1 = 0;
    }

    mainConsole.info('a1：' + a1);
    mainConsole.info('b1：' + b1);

    try {
        a2 = toString(a);
        b2 = toString(b);
    } catch (e) {
        mainConsole.error(e);
        a2 = a;
        b2 = b;
    }

    mainConsole.info('a2：' + a2);
    mainConsole.info('b2：' + b2);

    if (a1 < b1) {
        mainConsole.info('最新版本号为：' + b);
        return true;
    } else if (a1 > b1) {
        mainConsole.info('最新版本号为：' + a);
        return false;
    } else if (a2 && b2) {
        // 版本号相同时，对比字母，将其转为16进制数，进行比对
        var a2_str = a2[0].toString(16),
            b2_str = b2[0].toString(16);
        if (a2_str < b2_str) {
            mainConsole.info('最新版本号为：' + b);
            return true;
        } else if (a2_str > b2_str) {
            mainConsole.info('最新版本号为：' + a);
            return false;
        } else {
            mainConsole.info('两版本号相同！最新版本号为：' + a);
            return false;
        }
    } else {
        return false;
    }
}
