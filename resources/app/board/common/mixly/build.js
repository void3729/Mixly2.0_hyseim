const fs = require('fs');
const path = require('path');

const config = {
    "electron": {
        "dirName": "electron"
    },
    "web": {
        "dirName": "web"
    },
    "web-socket": {
        "dirName": "web-socket"
    },
    "web-compiler": {
        "dirName": "web-compiler"
    },
    "common": {
        "dirName": "common"
    },
    "workPath": __dirname,
    "fileIgnore": [
        /*"./common/serial-charts.js"*/
        "./common/env.js",
        "./common/deps.js"
    ]
};

let outputConfig = {
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

const scan = (dir) => {
    let googList = [];
    let dirName = path.basename(dir);
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
        let childNames = fs.readdirSync(dir);
        for (let i = 0; i < childNames.length; i++) {
            let childPath = path.join(dir, childNames[i]);
            if (fs.existsSync(childPath) && fs.statSync(childPath).isFile()) {
                if (typeof config.fileIgnore === 'object'
                    && config.fileIgnore.includes(childPath))
                    continue;
                let jsStr = fs.readFileSync(childPath, 'utf8');
                let googObj = {};
                googObj.path = '/' + dirName + '/' + childNames[i];
                googObj.require = match('goog.require', jsStr);
                googObj.provide = match("goog.provide", jsStr);
                let Mixly = {};
                Mixly.require = match("Mixly.require", jsStr);
                if (googObj.require || googObj.provide || Mixly.require) {
                    if (!googObj.require)
                        googObj.require = [];
                    if (!googObj.provide)
                        googObj.provide = [];
                    if (Mixly.require.length > 0) {
                        let obj = {};
                        let defaultObj = {
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
                        for (let j = 0; j < Mixly.require.length; j++) {
                            let nowGoogObj = {};
                            let nowGoogRequireObj = {
                                ...defaultObj,
                                ...Mixly.require[j]
                            };
                            nowGoogObj.path = googObj.path;
                            nowGoogObj.provide = googObj.provide;
                            nowGoogRequireObj.common = [...googObj.require, ...nowGoogRequireObj.common];
                            nowGoogObj.require = nowGoogRequireObj;
                            addDeps(nowGoogObj);
                        }
                        continue;
                    } else {
                        googList.push(googObj);
                    }
                }
            } else {
                googList = [...googList, ...scan(childPath)];
            }
        }
    }

    return googList;
}

const addDeps = (obj) => {
    let electronObj = {
        'path': obj['path'],
        'provide': obj['provide'],
        'require': [...obj['require']['common'], ...obj['require']['electron']]
    };
    electronObj.require = unique(electronObj.require);
    let webObj = {
        'path': obj['path'],
        'provide': obj['provide'],
        'require': [...obj['require']['common'], ...obj['require']['web']]
    };
    webObj.require = unique(webObj.require);
    let websocketElectronObj = {
        'path': obj['path'],
        'provide': obj['provide'],
        'require': [...obj['require']['common'], ...obj['require']['web-socket']['common'], ...obj['require']['web-socket']['electron']]
    };
    websocketElectronObj.require = unique(websocketElectronObj.require);
    let websocketWebObj = {
        'path': obj['path'],
        'provide': obj['provide'],
        'require': [...obj['require']['common'], ...obj['require']['web-socket']['common'], ...obj['require']['web-socket']['web']]
    };
    websocketWebObj.require = unique(websocketWebObj.require);
    let webcompilerElectronObj = {
        'path': obj['path'],
        'provide': obj['provide'],
        'require': [...obj['require']['common'], ...obj['require']['web-compiler']['common'], ...obj['require']['web-compiler']['electron']]
    };
    webcompilerElectronObj.require = unique(webcompilerElectronObj.require);
    let webcompilerWebObj = {
        'path': obj['path'],
        'provide': obj['provide'],
        'require': [...obj['require']['common'], ...obj['require']['web-compiler']['common'], ...obj['require']['web-compiler']['web']]
    };
    webcompilerWebObj.require = unique(webcompilerWebObj.require);
    outputConfig['electron'].push(electronObj);
    outputConfig['web'].push(webObj);
    outputConfig['web-socket']['electron'].push(websocketElectronObj);
    outputConfig['web-socket']['web'].push(websocketWebObj);
    outputConfig['web-compiler']['electron'].push(webcompilerElectronObj);
    outputConfig['web-compiler']['web'].push(webcompilerWebObj);
}

const match = (type, jsStr) => {
    let list = [];
    if (type === 'goog.require') {
        list = jsStr.match(/(?<=goog.require[\s]*\(["|'])[\w-.]+(?=["|'][\s]*\))/g);
    } else if (type === 'goog.provide') {
        list = jsStr.match(/(?<=goog.provide[\s]*\(["|'])[\w-.]+(?=["|'][\s]*\))/g);
    } else if (type === 'Mixly.require') {
        let strList = jsStr.match(/(?<=Mixly.require[\s]*\()[^)]+(?=\))/g);
        if (strList) {
            for (let i = 0; i < strList.length; i++) {
                if (!strList[i]) continue;
                try {
                    list.push(JSON.parse(strList[i]));
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
    if (list)
        list = unique(list);
    return list;
}

// 数组去重
const unique = (list) => {
    return Array.from(new Set(list));
}

const formatJson = (json, options) => {
    var reg = null,
        formatted = '',
        pad = 0,
        PADDING = '    ';
    options = options || {};
    options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
    options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;
    if (typeof json !== 'string') {
        json = JSON.stringify(json);
    } else {
        json = JSON.parse(json);
        json = JSON.stringify(json);
    }
    reg = /([\{\}])/g;
    json = json.replace(reg, '\r\n$1\r\n');
    reg = /([\[\]])/g;
    json = json.replace(reg, '\r\n$1\r\n');
    reg = /(\,)/g;
    json = json.replace(reg, '$1\r\n');
    reg = /(\r\n\r\n)/g;
    json = json.replace(reg, '\r\n');
    reg = /\r\n\,/g;
    json = json.replace(reg, ',');
    if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
        reg = /\:\r\n\{/g;
        json = json.replace(reg, ':{');
        reg = /\:\r\n\[/g;
        json = json.replace(reg, ':[');
    }
    if (options.spaceAfterColon) {
        reg = /\:/g;
        json = json.replace(reg, ':');
    }
    (json.split('\r\n')).forEach(function (node, index) {
        var i = 0,
            indent = 0,
            padding = '';

        if (node.match(/\{$/) || node.match(/\[$/)) {
            indent = 1;
        } else if (node.match(/\}/) || node.match(/\]/)) {
            if (pad !== 0) {
                pad -= 1;
            }
        } else {
            indent = 0;
        }

        for (i = 0; i < pad; i++) {
            padding += PADDING;
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    }
    );
    return formatted;
};

const generateDeps = () => {
    if (typeof config.fileIgnore === 'object') {
        for (let i = 0; i < config.fileIgnore.length; i++) {
            config.fileIgnore[i] = path.resolve(__dirname, config.fileIgnore[i]);
        }
    }
    console.log('deps.json生成中...');
    outputConfig['electron'] = [
        ...outputConfig['electron'],
        ...scan(path.join(__dirname, config['electron'].dirName))
    ];
    outputConfig['web'] = [
        ...outputConfig['web'],
        ...scan(path.join(__dirname, config['web'].dirName))
    ];
    outputConfig['web-socket'].common = [
        ...outputConfig['web-socket'].common,
        ...scan(path.join(__dirname, config['web-socket'].dirName))
    ];
    outputConfig['web-compiler'].common = [
        ...outputConfig['web-compiler'].common,
        ...scan(path.join(__dirname, config['web-compiler'].dirName))
    ];
    outputConfig['common'] = [
        ...outputConfig['common'],
        ...scan(path.join(__dirname, config['common'].dirName))
    ];
    fs.writeFileSync(path.join(__dirname, 'deps.json'), formatJson(JSON.stringify(outputConfig)));
    console.log('deps.json生成成功');
}

generateDeps();