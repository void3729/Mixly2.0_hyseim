if (!Mixly.Env.isClient) throw false;

function getDefaultXML() {
    let toolboxDom = document.getElementById("toolbox");
    Mixly.Env.defaultXML = toolboxDom.innerHTML;
}
getDefaultXML();
//var companyBlockXml = "";
//var myBlockXml = "";

function loadThirdPartyLibs() {
    let loadJs = [];
    let loadCss = [];
    //加载公司库的xml并处理block/xxx.js
    try {
        var rootPath = Mixly.Env.indexPath;
        if (Mixly.Modules.fs.existsSync(rootPath + "/libraries/ThirdParty/")) {
            var libDir = Mixly.Modules.fs.readdirSync(rootPath + "/libraries/ThirdParty/");
            for (var i = 0; i < libDir.length; i++) {
                if (Mixly.Modules.fs.existsSync(rootPath + "/libraries/ThirdParty/" + libDir[i] + "/")
                    && Mixly.Modules.fs.statSync(rootPath + "/libraries/ThirdParty/" + libDir[i] + "/").isDirectory()) {
                    //读取xml
                    var xmlDir = Mixly.Modules.fs.readdirSync(rootPath + "/libraries/ThirdParty/" + libDir[i] + "/");
                    for (var j = 0; j < xmlDir.length; j++) {
                        if (xmlDir[j].toLowerCase().indexOf(".xml") != -1) {
                            var xmlData = String(Mixly.Modules.fs.readFileSync(rootPath + "/libraries/ThirdParty/" + libDir[i] + "/" + xmlDir[j]));
                            try {
                                var scriptArr = xmlData.match(/(<|<)script.*script(>|>)/g);
                                if (scriptArr) {
                                    xmlData = xmlData.replace(/(<|<)script.*script(>|>)/g, "");
                                    for (var k = 0; k < scriptArr.length; k++) {
                                        //document.write(scriptArr[k]);
                                        let jsSrc = scriptArr[k].match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i)[1];
                                        //Mixly.ScriptLoader.loadScript(jsSrc);
                                        loadJs.push(jsSrc);
                                    }
                                }
                                var linkArr = xmlData.match(/(<|<)link.*link(>|>)/g);
                                if (linkArr) {
                                    xmlData = xmlData.replace(/(<|<)link.*link(>|>)/g, "");
                                    for (var k = 0; k < linkArr.length; k++) {
                                        //document.write(linkArr[k]);
                                        let cssHref = linkArr[k].match(/href=[\'\"]?([^\'\"]*)[\'\"]?/i)[1];
                                        //Mixly.CssLoader.loadCss(cssHref);
                                        loadCss.push(cssHref);
                                    }
                                }
                            } catch (e) {
                                console.log(e);
                            }
                            try {
                                $('#toolbox').append(xmlData);
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
    return { js: loadJs, css: loadCss };
}

function loadLibsAndUpdateJsCssList(doFunc = function(){}) {
    let { js, css } = loadThirdPartyLibs();
    if (js.length > 0) {
        LazyLoad.js(js, function () {
            if (css.length > 0) {
                LazyLoad.css(css, function () {
                    doFunc();
                });
            } else {
                doFunc();
            }
        });
    } else {
        doFunc();
    }
    Mixly.Env.thirdPartyCSS = [...Mixly.Env.thirdPartyCSS, ...css];
    Mixly.Env.thirdPartyJS = [...Mixly.Env.thirdPartyJS, ...js];
}

loadLibraries();
/*
loadLibsAndUpdateJsCssList(function(){});
*/
