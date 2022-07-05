(() => {
    goog.require('Mixly');
    goog.require('Mixly.Env');
    goog.require('Mixly.Url');
    goog.require('Mixly.Config');
    goog.require('Mixly.Modules');

    goog.provide('Mixly.Deps');

    let { Env, Url, Modules, Config, Deps } = Mixly;
    let { BOARD, SOFTWARE } = Config;

    let { fs } = Modules;

    if (Env.isClinet && BOARD?.filePath && BOARD?.filePath != "None") {
        let mixStr = fs.readFileSync(BOARD.filePath, "utf8");
        if ('localStorage' in window && window['localStorage'] != null) {
            window.localStorage.setItem(BOARD.boardName, mixStr);
            window.localStorage.setItem(BOARD.boardName + ".filePath", BOARD.filePath);
        }
        history.replaceState({}, "", Url.changeURLArg(window.location.href, "filePath", "None"));
    }

    Env = {
        ...Env,
        hasSocketServer: SOFTWARE?.socketServer?.enabled ?? false,
        hasCompiler: SOFTWARE?.webCompiler?.enabled ?? false
    };

    Deps.DEPENDENCY = {
        "electron": [],
        "web": [
            {
                "path": '/web/highcharts.js',
                "provide": ['Highcharts'],
                "require": []
            }
        ],
        "web-socket": {
            "electron": [],
            "web": [
                {
                    "path": '/web/highcharts.js',
                    "provide": ['Highcharts'],
                    "require": []
                }
            ],
            "common": []
        },
        "web-compiler": {
            "electron": [],
            "web": [],
            "common": []
        },
        "node-modules": [],
        "common": [
            {
                "path": '/../ui/layui/layui.all.js',
                "provide": ['layui'],
                "require": []
            },{
                "path": '/../blockly-core/blockly_compressed.js',
                "provide": ['Blockly'],
                "require": []
            },{
                "path": '/common/lazyload.js',
                "provide": ['LazyLoad'],
                "require": []
            }
        ]
    };

    let depsJson = Mixly.Config.get(goog.normalizePath_(goog.basePath + '../mixly/deps.json'), {});

    Deps.DEPENDENCY["electron"] = [
        ...Deps.DEPENDENCY["electron"],
        ...depsJson["electron"]
    ];

    Deps.DEPENDENCY["web"] = [
        ...Deps.DEPENDENCY["web"],
        ...depsJson["web"]
    ];

    Deps.DEPENDENCY["common"] = [
        ...Deps.DEPENDENCY["common"],
        ...depsJson["common"]
    ];

    Deps.DEPENDENCY["web-socket"]["common"] = [
        ...Deps.DEPENDENCY["web-socket"]["common"],
        ...depsJson["web-socket"]["common"]
    ];

    Deps.DEPENDENCY["web-compiler"]["common"] = [
        ...Deps.DEPENDENCY["web-compiler"]["common"],
        ...depsJson["web-compiler"]["common"]
    ];

    Deps.addDependency = (dependencyList) => {
        if (typeof dependencyList !== 'object') return;
        for (let i = 0; i < dependencyList.length; i++) {
            googPath = dependencyList[i].path ?? null;
            googProvide = dependencyList[i].provide ?? [];
            googRequire = dependencyList[i].require ?? [];
            if (googPath && googProvide && googRequire)
                goog.addDependency(Mixly.MIXLY_DIR_PATH + googPath, googProvide, googRequire);
        }
    }

    Deps.initDependency = (dependency) => {
        if (typeof dependency !== 'object') return;
        let defaultDependency = {
            "electron": [],
            "web": [],
            "web-socket": {
                "electron": [],
                "web": [],
                "common": []
            },
            "web-compiler": {
                "electron": [],
                "web": [],
                "common": []
            },
            "common": []
        };

        let config = Object.assign(defaultDependency, dependency);

        //引入公共js文件
        Deps.addDependency(config["common"]);

        //判断当前是否在electron环境下
        if (Env.isClient) {
            if (Env.hasSocketServer === 'true') {
                Deps.addDependency(config["web-socket"]["common"]);
                Deps.addDependency(config["web-socket"]["electron"]);
            } else if (Mixly.Env.hasCompiler === 'true') {
                Deps.addDependency(config["web-compiler"]["common"]);
                Deps.addDependency(config["web-compiler"]["electron"]);
            } else {
                Deps.addDependency(config["electron"]);
            }
        } else {
            if (Env.hasSocketServer === 'true') {
                Deps.addDependency(config["web-socket"]["common"]);
                Deps.addDependency(config["web-socket"]["web"]);
            } else if (Env.hasCompiler === 'true') {
                Deps.addDependency(config["web"]);
                Deps.addDependency(config["web-compiler"]["common"]);
                Deps.addDependency(config["web-compiler"]["web"]);
            } else {
                Deps.addDependency(config["web"]);
            }
        }
    }

    Deps.initDependency(Deps.DEPENDENCY);

    goog.require('Mixly.Loading');
    goog.require('Mixly.Title');
    goog.require('Mixly.StatusBar');
    goog.require('Mixly.StatusBarPort');
    goog.require('Mixly.LayerExtend');
    goog.require('Mixly.DomOperator');
    goog.require('Mixly.Charts');
    goog.require('Mixly.JSFuncs');
    goog.require('Mixly.CssLoader');
    goog.require('Mixly.ScriptLoader');
    goog.require('Mixly.Tools');
    goog.require('layui');
    goog.require('Blockly');
    goog.require('LazyLoad');

    if (Env.isClient) {
        goog.require('Mixly.Electron.File');
        if (Env.hasSocketServer === 'true') {
            goog.require('Mixly.WebSocket.Socket');
        } else if (Env.hasCompiler === 'true') {
            goog.require('Mixly.WebCompiler.Compiler');
        } else {
            goog.require('Mixly.Electron.Serial');
            if (BOARD?.nav?.compile) {
                goog.require('Mixly.Electron.ArduShell');
            } else if (BOARD?.nav?.upload) {
                goog.require('Mixly.Electron.BU');
            } else {
                goog.require('Mixly.Electron.PythonShell');
            }
            goog.require('Mixly.Electron.CloudLibs');
        }
    } else {
        if (Env.hasSocketServer === 'true') {
            goog.require('Mixly.WebSocket.Socket');
        } else {
            if (Env.hasCompiler === 'true') {
                goog.require('Mixly.WebCompiler.Compiler');
            }
            goog.require('Mixly.Web.Highcharts');
            goog.require('Mixly.Web.Serial');
            if (BOARD?.nav?.compile) {

            } else if (BOARD?.nav?.upload) {
                goog.require('Mixly.Web.Utilities');
                goog.require('Mixly.Web.Esptool');
                goog.require('Mixly.Web.Ampy');
                goog.require('Mixly.Web.BU');
            }
        }   
    }
})();