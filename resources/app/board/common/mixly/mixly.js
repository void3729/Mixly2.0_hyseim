goog.provide('Mixly');
goog.provide('Mixly.Electron');
goog.provide('Mixly.Web');
goog.provide('Mixly.WebSocket');
goog.provide('Mixly.WebCompiler');
goog.provide('Mixly.Url');
goog.provide('Mixly.Config');

Mixly.MIXLY_DIR_PATH = '../mixly';

goog.addDependency(Mixly.MIXLY_DIR_PATH + '/common/env.js', ['Mixly.Env'], ['Mixly']);
goog.addDependency(Mixly.MIXLY_DIR_PATH + '/common/deps.js', ['Mixly.Deps'], ['Mixly', 'Mixly.Env', 'Mixly.Url']);

//goog.addDependency('../ui/layui/layui.all.js', [], []);
//goog.require('layui');
/*
$.ajaxSettings.async = false;
let currentScript = document.currentScript.src;
document.currentScript.src = goog.basePath + '../ui/layui/layui.all.js';
$.getScript(goog.normalizePath_(goog.basePath + '../ui/layui/layui.all.js'), () => {
    console.log('layui.all.js loaded');
}).fail(() => {
    console.log('layui.all.js failed');
});
$.ajaxSettings.async = true;
document.currentScript.src = currentScript;
console.log('layui.all.js loaded done');
console.log(layui);
*/

/**
* @function url转json
* @description 输入url，返回json
* @param url {String} 输入的url字符串
* @return object
*/
Mixly.Url.urlToJson = (url) => {
    // 递归字符串生成json对象
    function strToObj(obj, str, value) {
        if(str.indexOf(".") !== -1) {
            let key = str.substring(0, str.indexOf("."));
            str = str.substring(str.indexOf(".") + 1, str.length);
            if (obj[key] === undefined) {
                obj[key] = {};
            }
            obj[key] = strToObj(obj[key], str, value);
            return obj;
        } else {
            obj[decodeURIComponent(str)] = decodeURIComponent(value);
            return obj;
        }
    }
    var hash;
    var myJson = {};
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        try {
            var hash0 = hash[0].replaceAll("@", "=");
            hash0 = hash0.replaceAll("$", "&");
            var hash1 = hash[1].replaceAll("@", "=");
            hash1 = hash1.replaceAll("$", "&");
            myJson = strToObj(myJson, hash0, hash1);
        } catch (e) {
            myJson = strToObj(myJson, hash[0], hash[1]);
        }
    }
    return myJson;
}

/**
* @function 获取主页面传递的配置信息
* @description 返回主页面传递的配置信息
* @return object
*/
Mixly.Url.getConfig = () => {
    var href = "";
    try {
        href = window.location.href.replaceAll("#", "");
    } catch (e) {
        //console.log(e);
        href = window.location.href;
    }
    href = href.substring(href.indexOf("?") + 1, href.length);
    var board_config = Mixly.Url.urlToJson(href);
    return board_config;
}

//json转url参数
Mixly.Url.jsonToUrl = (param, key) => {
    var paramStr = "";
    if (param instanceof String || param instanceof Number || param instanceof Boolean) {
        try {
            var newKey = key.toString().replaceAll("=", "@");
            newKey = newKey.replaceAll("&", "$");
            var newParam = param.toString().replaceAll("=", "@")
            newParam = newParam.replaceAll("&", "$");
            paramStr += "&" + newKey + "=" + encodeURIComponent(newParam);
        } catch (e) {
            //console.log(e);
            paramStr += "&" + key + "=" + encodeURIComponent(param);
        }
    } else {
        $.each(param, function (i) {
            var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
            paramStr += '&' + Mixly.Url.jsonToUrl(this, k);
        });
    }
    return paramStr.substr(1);
};

Mixly.Url.changeURLArg = (url, arg, argVal) => {
    var pattern = arg + '=([^&]*)';
    var replaceText = arg + '=' + argVal;
    if (url.match(pattern)) {
        var tmp = '/(' + arg + '=)([^&]*)/gi';
        tmp = url.replace(eval(tmp), replaceText);
        return tmp;
    } else {
        if (url.match('[\?]')) {
            return url + '&' + replaceText;
        } else {
            return url + '?' + replaceText;
        }
    }
}

Mixly.Url.CRC32 = (str, radix = 10) => {
    const Utf8Encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        let text = "";
        for (let n = 0; n < string.length; n++) {
            const c = string.charCodeAt(n);
            if (c < 128) {
                text += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                text += String.fromCharCode((c >> 6) | 192);
                text += String.fromCharCode((c & 63) | 128);
            } else {
                text += String.fromCharCode((c >> 12) | 224);
                text += String.fromCharCode(((c >> 6) & 63) | 128);
                text += String.fromCharCode((c & 63) | 128);
            }
        }
        return text;
    }

    const makeCRCTable = function () {
        let c;
        const crcTable = [];
        for (let n = 0; n < 256; n++) {
            c = n;
            for (let k = 0; k < 8; k++) {
                c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
            }
            crcTable[n] = c;
        }
        return crcTable;
    }

    const crcTable = makeCRCTable();
    const strUTF8 = Utf8Encode(str);
    let crc = 0 ^ (-1);
    for (let i = 0; i < strUTF8.length; i++) {
        crc = (crc >>> 8) ^ crcTable[(crc ^ strUTF8.charCodeAt(i)) & 0xFF];
    }
    crc = (crc ^ (-1)) >>> 0;
    return crc.toString(radix);
};

Mixly.Url.initFingerprintJS = () => {
    let { Config } = Mixly;
    // Initialize an agent at application startup.
    const fpPromise = FingerprintJS.load();

    // Get the visitor identifier when you need it.
    fpPromise
        .then(fp => fp.get())
        .then(result => {
            // This is the visitor identifier:
            let visitorId16 = result.visitorId;
            let VisitorIdNum = parseInt(visitorId16, 16);
            let visitorId32 = VisitorIdNum.toString(32);
            Config.BOARD.visitorId = {
                str16: visitorId16,
                str32: visitorId32,
                str16CRC32b: Mixly.Url.CRC32(visitorId16, 16),
                str32CRC32b: Mixly.Url.CRC32(visitorId32, 16)
            };
            console.log(Config.BOARD);
        })
        .catch(error => {
            console.error(error);
            console.log(Config.BOARD);
        });
}

Mixly.Config.get = (path, defaultConfig = {}) => {
    let finalConfig = null;
    $.ajaxSettings.async = false;
    $.get(path, (config) => {
        if (typeof config === 'object')
            finalConfig = Object.assign(defaultConfig, config);
        else if (typeof config === 'string')
            try {
                finalConfig = Object.assign(defaultConfig, JSON.parse(config));
            } catch (e) {
                console.log(e);
                finalConfig = defaultConfig;
            }
        else
            finalConfig = defaultConfig;
    }).fail(() => {
        finalConfig = defaultConfig;
    });
    $.ajaxSettings.async = true;
    return finalConfig;
}

Mixly.Config.init = () => {
    let { Config } = Mixly;
    let urlDefaultConfig = {
        "thirdPartyBoard": false
    }
    let urlConfig = Mixly.Url.getConfig();
    urlConfig = Object.assign(urlDefaultConfig, urlConfig);
    let boardDefaultConfig = {
        "burn": "None",
        "upload": "None",
        "nav": "None",
        "serial": "None"
    }
    let swDefaultConfig = {
        "version": "Mixly2.0"
    }
    Config.BOARD = Config.get('./config.json', boardDefaultConfig);
    if (typeof urlConfig === 'object')
        Config.BOARD = { ...Config.BOARD, ...urlConfig };

    console.log('Config.BOARD:', Config.BOARD);

    let pathPrefix = '../';
    if (Config.BOARD.thirdPartyBoard === "true")
        pathPrefix = '../../';

    Config.SOFTWARE = Config.get(pathPrefix + '../sw-config.json', swDefaultConfig);

    Mixly.Config.pathPrefix = pathPrefix;

    console.log('Config.SOFTWARE:', Config.SOFTWARE);

    //Mixly.Url.BOARD_CONFIG = { ...Config.BOARD, ...Config.SOFTWARE };

    $.getScript(pathPrefix + 'common/mixly/fp.min.js', () => {
        Mixly.Url.initFingerprintJS();
    }).fail(() => {
        finalConfig = defaultConfig;
    });
}

/*
window.addEventListener('load', () => {
    console.log('load1');
});

window.addEventListener('load', () => {
    console.log('load2');
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded1');
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded2');
});
*/

Mixly.Config.init();

Mixly.require = (requireObj) => {
    if (typeof requireObj !== 'object') return;

    let { SOFTWARE } = Mixly.Config;
    let defaultRequire = {
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

    let nowRequire = {
        ...defaultRequire,
        ...requireObj
    };

    Mixly.requireList(nowRequire['common']);

    if (window?.process?.versions?.electron)
        if (SOFTWARE?.nodeServer?.enabled)
            Mixly.requireList([
                ...nowRequire['web-socket']['common'],
                ...nowRequire['web-socket']['electron']
            ]);
        else if (SOFTWARE?.webCompiler?.enabled)
            Mixly.requireList([
                ...nowRequire['web-compiler']['common'],
                ...nowRequire['web-compiler']['electron']
            ]);
    else
        if (SOFTWARE?.nodeServer?.enabled)
            Mixly.requireList([
                ...nowRequire['web-socket']['common'],
                ...nowRequire['web-socket']['web']
            ]);
        else if (SOFTWARE?.webCompiler?.enabled)
            Mixly.requireList([
                ...nowRequire['web-compiler']['common'],
                ...nowRequire['web-compiler']['web']
            ]);
}

Mixly.requireList = (list) => {
    if (typeof list !== 'object') return;
    for (let i = 0; i < list.length; i++)
        goog.require(list[i]);
}

goog.require('Mixly.Env');
goog.require('Mixly.Url');
goog.require('Mixly.Deps');