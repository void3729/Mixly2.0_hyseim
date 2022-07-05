goog.provide('Mixly.ScriptLoader');
goog.require('Mixly.Env');
goog.require('Mixly.Config');

/**
 * 加载 script 文件
 * @param src
 */
Mixly.ScriptLoader.loadScript = function (src) {
    var addSign = true;
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i].src && scripts[i].src.indexOf(src) != -1) {
            addSign = false;
        }
    }
    if (addSign) {
        var $script = document.createElement('script');
        $script.setAttribute("type", "text/javascript");
        $script.setAttribute("src", src);
        //$script.setAttribute("async", "");
        document.getElementsByTagName("head").item(0).appendChild($script);
    }
}

/**
 * 删除 script 文件
 * @param src
 */
Mixly.ScriptLoader.removeScript = function (src) {
    var scripts = document.getElementsByTagName("script");
    if (src.indexOf("../") !== -1) {
        src = src.substring(src.lastIndexOf("../") + 3, src.length);
    }
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i].src && scripts[i].src.indexOf(src) != -1) {
            scripts[i].parentNode.removeChild(scripts[i]);
        }
    }
}

Mixly.ScriptLoader.loadLangJs = function (oldLang, newLang, doFunc) {
    var scripts = document.querySelectorAll("script");
    let newLangPathArr = [];
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i] && scripts[i].src && scripts[i].src.indexOf(oldLang + ".js") != -1) {
            let oldLangPath = scripts[i].src;
            let newLangPath = oldLangPath.replace(oldLang + ".js", newLang + ".js");
            scripts[i].parentNode.removeChild(scripts[i]);
            newLangPathArr.push(newLangPath);
        }
    }
    for (let i = 0; i < Mixly.Env.thirdPartyJS.length; i++) {
        Mixly.Env.thirdPartyJS[i] = Mixly.Env.thirdPartyJS[i].replace(oldLang + ".js", newLang + ".js");
    }
    LazyLoad.js(newLangPathArr, function () {
        doFunc();
    });
}

/* 公共js */
/*
Mixly.ScriptLoader.commonJs = [
    //"common/js/drag.js",
    //"common/js/Blob.js",
    //"common/spin.js",
    //"common/js/FileSaver.min.js",
    //"common/dap.umd.js",
    //"common/modules/serial-highcharts.js",
    //"common/modules/title.js",
    //"common/js/blockly_helper.js",
    //"common/modules/dom-generator.js",
    //"common/nav-init.js",
    //"common/modules/Mixly.JSFuncs.js",
    //"common/modules/status-bar.js",
    //"common/modules/nav.js"
    //"common/serial-init.js"
];
*/

/* 客户端js */
Mixly.ScriptLoader.clientJs = [
    "common/modules/mixlyClient/serial.js",
    "common/modules/mixlyClient/file.js",
    "common/modules/mixlyClient/cloud-libs.js"
];

/* 网页端js */
Mixly.ScriptLoader.webJs = [
/*
    "common/modules/mixlyWeb/Highcharts/code/highcharts.js",
    "common/modules/mixlyWeb/web-serial-controller.js",
    "common/modules/mixlyWeb/web-serial.js",
    "common/modules/mixlyWeb/esptool.js",
    "common/modules/mixlyWeb/web-burn-upload.js"
*/
    "common/modules/mixlyClient/serial.js",
    "common/modules/mixlyClient/file.js"
];

Mixly.ScriptLoader.load = function () {
    var filePath = Mixly.Config.BOARD?.thirdPartyBoard ? "../../" : "../";

    function loadJsArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            Mixly.ScriptLoader.loadScript(filePath + arr[i]);
        }
    }

    if (Mixly.Env.isClient) {
        loadJsArr(Mixly.ScriptLoader.clientJs);
    } else {
        loadJsArr(Mixly.ScriptLoader.webJs);
    }
}

//Mixly.ScriptLoader.load();