(() => {
    goog.require('Mixly.Env');
    goog.require('Mixly.ScriptLoader');
    goog.require('Mixly.Modules');
    goog.require('Mixly.LayerExtend');
    goog.require('layui');
    goog.require('Mixly.Config');
    goog.provide('Mixly.NavEvents');
    let { element, slider, form } = layui;

    let { Env, ScriptLoader, Modules, LayerExtend, NavEvents, Config } = Mixly;

    let { BOARD } = Config;

    //nav二级菜单栏事件
    $(".layui-nav-third-child").hide();
    $(".third-class").hover(function () {
        $(".layui-nav-third-child").hide();
        $(this).next().css('left', $(this).parent().parent().width() + 1);
        $(this).next().toggle();
    }, function () {
        $(".layui-nav-third-child").hide();
    });
    $(".layui-nav-third-child").hover(function () {
        $(this).toggle();
    }, function () {
        $(".layui-nav-third-child").hide();
    });

    $(".layui-nav-item").hover(function () {
        if ($(this).find('dl').css('right') == "0px") {
            $(this).find('dl').css('left', parseInt(parseInt(($(this).width()) - parseInt($(this).find('dl').width())) / 2));
            $(this).find('dl').css('right', "auto");
        }
    }, function () {
    });

    //板卡选择事件
    $("#boardSelector").on("click", function () {
        let dlObj = $("#boardSelector > div.layui-form-select dl");
        if (dlObj) {
            dlObj.css('cssText', "left:" + parseInt(parseInt(($(this).width()) - parseInt(dlObj.width())) / 2) + " !important; right:auto !important;");
        }
        /*
        let ddObj = $("#boardSelector").find('dd');
        for (let i = 0; i < ddObj.length; i++) {
            let boardSettingBtn = `<button type="button" class="layui-btn  layui-btn-xs" style="margin-right: 5px;width: 23px;height: 21px;"><i class="layui-icon layui-icon-set-fill"></i></button>`;
            $(ddObj[i]).find('button').remove();
            ddObj[i].innerHTML = boardSettingBtn + ddObj[i].innerHTML;
            let settingObj = $(ddObj[i]).find('i');
            let tips;
            settingObj[0].onmouseenter = function() {
                layer.closeAll();
                tips = layer.tips("CDCOnBoot: Default 4MB with spiffs (1.2MB APP/1.5MB SPIFFS)<br/>PartitionScheme: default<br/>CPUFreq: 160<br/>FlashMode: qio<br/>FlashFreq: 80<br/>FlashSize: 4M<br/>UploadSpeed: 921600", ddObj[i], {
                    tips:[4, 'auto'],
                    time: 0,
                    area: 'auto',
                    maxWidth: 500,
                    tipsMore: true,
                    anim: 5,
                    isOutAnim: true
                });
            }
            settingObj[0].onmouseout = function() {
                layer.close(tips);
            }
        }
        */
    });

    NavEvents.onclickNewFile = () => {
        layer.confirm(MSG['confirm_newfile'], {
            title: false,
            shade: LayerExtend.shade,
            btn: [MSG['newfile_yes'], MSG['newfile_no']]
            , btn2: function (index, layero) {
                layer.close(index);
            }
        }, function (index, layero) {
            mixlyjs.createFn();
            layer.close(index);
        });
    }

    NavEvents.onclickChangeLang = () => {
        let updateWorkspace = () => {
            let nowCode = editor.getValue();
            showTag();
            Code.initLanguage(false);
            renderContent();
            let layerDom = getid("layer_btn");
            if (MixlyBlockly?.layerOffsetLeft && layerDom?.offsetParent) {
                MixlyBlockly.layerOffsetLeft = layerDom.offsetParent.offsetLeft
                                             + layerDom.offsetParent.offsetWidth;
            }
            Blockly.fireUiEvent(window, 'resize');
            if (document.getElementById('changemod_btn') 
                && document.getElementById('changemod_btn').value === 0) {
                editor.setValue(nowCode, -1);
            } else {
                try {
                    let xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
                    Blockly.mainWorkspace.clear();
                    Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);
                    Blockly.mainWorkspace.scrollCenter();
                } catch (e) {
                    //Blockly.mainWorkspace.clear();
                    console.log(e);
                }
            }

            if (typeof serialInit !== "undefined") {
                serialInit();
            }
            if (typeof updateIndexText !== "undefined") {
                updateIndexText();
            }
            Blockly.hideChaff();
        }
        layer.confirm(MSG['choose_language'], {
            title: false,
            shade: LayerExtend.shade,
            btn: ['简体中文', '繁体中文', 'English']
            , btn3: function (index, layero) {
                localStorage.Language = 'en';
                ScriptLoader.loadLangJs(Code.LANG, "en", function() {
                    updateWorkspace();
                });
                layer.closeAll();
            }
        }, function (index, layero) {
            localStorage.Language = 'zh-hans';
            ScriptLoader.loadLangJs(Code.LANG, "zh-hans", function() {
                updateWorkspace();
            });
            layer.closeAll();
        }, function (index) {
            localStorage.Language = 'zh-hant';
            ScriptLoader.loadLangJs(Code.LANG, "zh-hant", function() {
                updateWorkspace();
            });
            layer.closeAll();
        });
    }

    NavEvents.onclickChangeTheme = () => {
        layer.confirm(MSG['choose_theme'], {
            title: false,
            shade: LayerExtend.shade,
            btn: ['Dark', 'Light']
            , btn2: function (index, layero) {
                localStorage.Theme = 'Light';
                Env.theme = 'light';
                Code.changeEditorTheme_light();
                $("body").css("background-color","#fff");
                $(".content").css("background-color","#fff");
                if (Env.isClient) {
                    Modules.currentWindow.setBackgroundColor("#fff");
                }
                LayerExtend.updateShade();
            }
        }, function (index, layero) {
            localStorage.Theme = 'Dark';
            Env.theme = 'dark';
            Code.changeEditorTheme_dark();
            $("body").css("background-color","#181818");
            $(".content").css("background-color","#181818");
            if (Env.isClient) {
                Modules.currentWindow.setBackgroundColor("#181818");
            }
            LayerExtend.updateShade();
            layer.close(index);
        });
    }

    NavEvents.onclickChangeWinSize = () => {
        let winSize = Env.winSize;
        let ins1 = null;

        layer.open({
            type: 1,
            id: "winsize",
            title: MSG['windowSize'],
            area: ['350px', '180px'],
            content: `<div style="padding:50px 20px 20px 20px;"><div id="slider_winsize" class="slider"></div></div>`,
            shade: LayerExtend.shade,
            closeBtn: 1,
            btn: [indexText["复位"], indexText["应用"]],
            yes: function () {
                Modules.currentWebContents.setZoomFactor(Mixly.Env.winSize/100);
                Env.winSize = 100;
                localStorage.winSize = 100;
                winSize = 100;
                Modules.currentWebContents.setZoomFactor(1.0);
                ins1.setValue(50);
                console.log("屏幕缩放比例为1.0");
                return false;
            },
            btn2: function () {
                Env.winSize = winSize;
                localStorage.winSize = winSize;
                winSize = winSize / 100;
                Modules.currentWebContents.setZoomFactor(winSize);
                console.log("屏幕缩放比例为" + winSize);
                return false;
            },
            success: function (layero) {
                $(".layui-layer-page").css("z-index", "198910151");
                ins1 = slider.render({
                    elem: '#slider_winsize',
                    input: true, //输入框
                    min: 50, //最小值
                    max: 150, //最大值
                    value: winSize,
                    setTips: function(value){
                        return value + '%';
                    },
                    change: function (vals) {
                        vals = vals.replace("%", "");
                        winSize = vals - 0;
                    }
                });
            },
            end: function () {
                $(".layui-layer-shade").remove();
            }
        });
    }

    form.on('select(boards-type)', function (data) {
        try {
            if (profile[$("#boards-type").find("option:selected").text()]) {
                profile['default'] = profile[$("#boards-type").find("option:selected").text()];
            } else if (profile['Arduino/Genuino Uno'] != undefined) {
                profile['default'] = profile['Arduino/Genuino Uno'];
            }
        } catch (e) {
            console.log(e);
        }
        if (document.getElementById('changemod_btn').value != 0) {
            try {
                var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
                Blockly.mainWorkspace.clear();
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
                renderContent();
            } catch (e) {
                console.log(e);
            }
        }
    });
})();