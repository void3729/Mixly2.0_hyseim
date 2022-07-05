(() => {
    goog.provide('Mixly.Env');
    goog.provide('Mixly.Modules');

    let { Env, Modules } = Mixly;

    /**
      * 检测当前环境
      * @type {Boolean}，true - mixly Client; false - mixly Web
      */
    Env.isClient = true;

    /**
      * 检测是否启用node服务器
      * @type {Boolean}
      */
    Env.hasSocketServer = 'false';

    /**
      * 检测是否启用node编译服务器
      * @type {Boolean}
      */
    Env.hasCompiler = 'false';

    /**
      * 获取当前mixly2.0的路径
      * @type {String}
      */
    Env.clientPath = null;

    /**
      * 检测当前系统
      * @type {String} win、darwin、linux
      */
    Env.currentPlatform = null;

    /**
      * 对于win系统，获取免安装python3的路径，对于mac与linux，则此变量值为python3
      * @type {String} 
      */
    Env.python3Path = null;

    /**
      * 获取mixly.py的路径
      * @type {String} 
      */
    Env.pyFilePath = null;

    /**
      * 获取板卡index或主页面index的路径
      * @type {String} 
      */
    Env.indexPath = null;

    /**
      * 获取板卡index或主页面index的缩放比例
      * @type {String} 
      */
    Env.winSize = null;

    /**
      * 获取板卡index默认xml
      * @type {String} 
      */
    Env.defaultXML = null;

    /**
      * 获取第三方库所用css
      * @type {Array} 
      */
    Env.thirdPartyCSS = [];

    /**
      * 获取第三方库所用js
      * @type {Array} 
      */
    Env.thirdPartyJS = [];

    /**
      * 获取系统主题
      * @type {string}
      */
    Env.theme = '';

    try {
        Env.isClient = (window && window.process && window.process.versions && window.process.versions['electron']) ? true : false;
    } catch (error) {
        Env.isClient = false;
    }

    if (Env.isClient) {
        Modules.path = require('path');
        Modules.child_process = require("child_process");
        Modules.fs = require('fs');
        Modules.electron = require('electron');
        Modules.clipboard = Modules.electron.clipboard;
        Modules.os = require('os');
        Modules.electron_remote = require('@electron/remote');
        Modules.app = Modules.electron_remote.app;
        Modules.currentWebContents = Modules.electron_remote.getCurrentWebContents();
        Modules.currentWindow = Modules.electron_remote.getCurrentWindow();
        Modules.lodash_fp = require('lodash/fp');
        Mixly.Env.currentPlatform = Modules.os.platform();
        console.log(Env.currentPlatform);
        if (Env.currentPlatform == "darwin") {
            Env.clientPath = Modules.path.resolve(Modules.app.getPath("exe"), '../../../../');
        } else {
            Env.clientPath = Modules.path.resolve(Modules.app.getPath("exe"), '../');
        }
        try {
            Env.clientPath = Env.clientPath.replace(/\\/g, "/");
        } catch (e) {
            console.log(e);
        }
        Env.pyFilePath = Env.clientPath + '/mixpyBuild/mixly.py';
        if (Env.currentPlatform == "darwin" || Env.currentPlatform == "linux") {
            Env.python3Path = '/usr/bin/python3';
        } else {
            Env.python3Path = Env.clientPath + '/mixpyBuild/win_python3/python3.exe';
        }
        Env.indexPath = Modules.path.resolve(__dirname);
        if (Env.currentPlatform == "win32") {
            try {
                Env.indexPath = Env.indexPath.replace(/\\/g, "/");
            } catch (e) {
                console.log(e);
            }
        }

        if ('localStorage' in window && window['localStorage'] != null && window.localStorage["winSize"]) {
            Mixly.Env.winSize = window.localStorage["winSize"];
            let winSize = parseInt(Env.winSize);
            if (winSize !== NaN && winSize >= 50 && winSize <= 150) {
                Modules.currentWebContents.setZoomFactor(winSize / 100);
            } else {
                Env.winSize = 100;
                Modules.currentWebContents.setZoomFactor(1);
                window.localStorage["winSize"] = 100;
            }
        }
        console.log(Modules.currentWindow.getBackgroundColor());
        if ('localStorage' in window && window['localStorage'] != null && window.localStorage["Theme"]) {
            let winTheme = window.localStorage["Theme"];
            if (winTheme === "Dark") {
                Modules.currentWindow.setBackgroundColor("#181818");
                Mixly.Env.theme = 'dark';
            } else if (winTheme === "Light") {
                Modules.currentWindow.setBackgroundColor("#fff");
                Mixly.Env.theme = 'light';
            }
        }
    }
})();