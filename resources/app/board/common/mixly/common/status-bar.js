(() => {
    goog.provide('Mixly.StatusBar');

    let { StatusBar } = Mixly;
    StatusBar.selected = false;

    let { Ace } = StatusBar;

    /**
    * @function 初始化状态栏
    * @description 初始化状态栏
    * @return void
    */
    StatusBar.init = () => {
        Ace = ace.edit("div_inout_middle");
        StatusBar.Ace = Ace;
        Ace.setOption("theme", "ace/theme/xcode");
        Ace.getSession().setMode("ace/mode/python");
        Ace.setFontSize(document.body.clientWidth / 95);
        Ace.setReadOnly(false);
        Ace.setScrollSpeed(0.3);
        Ace.setShowPrintMargin(false);
        Ace.renderer.setShowGutter(false);
        Ace.commands.addCommands([
            {
                name: "increaseFontSize",
                bindKey: "Ctrl-=|Ctrl-+",
                exec: (editor) => {
                    var size = parseInt(editor.getFontSize(), 10) || 12;
                    editor.setFontSize(size + 1);
                }
            }, {
                name: "decreaseFontSize",
                bindKey: "Ctrl+-|Ctrl-_",
                exec: (editor) => {
                    var size = parseInt(editor.getFontSize(), 10) || 12;
                    editor.setFontSize(Math.max(size - 1 || 1));
                }
            }, {
                name: "resetFontSize",
                bindKey: "Ctrl+0|Ctrl-Numpad0",
                exec: (editor) => {
                    editor.setFontSize(12);
                }
            }, {
                name: "sendCtrlC",
                bindKey: "Ctrl-Shift-C",
                exec: (editor) => {
                    if (Mixly.Env.isClient) {
                        Mixly.Electron.Serial.writeCtrlC();
                    } else {
                        Mixly.Web.Serial.writeCtrlC();
                    }
                }
            }, {
                name: "sendCtrlD",
                bindKey: "Ctrl-Shift-D",
                exec: (editor) => {
                    if (Mixly.Env.isClient) {
                        Mixly.Electron.Serial.writeCtrlD();
                    } else {
                        Mixly.Web.Serial.writeCtrlD();
                    }
                }
            }, {
                name: "Empty",
                bindKey: "Ctrl-E",
                exec: (editor) => {
                    StatusBar.setValue("");
                }
            }
        ]);
    }

    /**
    * @function 显示、隐藏或反转状态栏
    * @description 显示、隐藏或反转状态栏
    * @param type {number} 0 - 反转状态栏，1 - 打开状态栏，2 - 关闭状态栏
    * @return void
    */
    StatusBar.show = (type) => {
        var oBox = getid("table_whole");
        var content_blocks = getid("content_blocks");
        var content_arduino = getid("content_arduino");
        var content_xml = getid("content_xml");
        var content_area = getid("content_area");
        var side_code_parent = getid("side_code_parent");
        var td_top = getid("td_top");
        var td_middle = getid("td_middle");
        if (type != 2 && type != 0 && StatusBar.selected) return;
        if (StatusBar.selected || type == 2) {
            //td_top.style.display = 'none';
            td_middle.style.display = 'none';
            //td_top.style.height = '0px';
            td_middle.style.height = '0px';
            content_blocks.style.height = "100%";
            content_arduino.style.height = "100%";
            content_xml.style.height = "100%";
            content_area.style.height = "100%";
            side_code_parent.style.height = "100%";
            StatusBar.selected = false;
        } else {
            td_top.style.display = '';
            td_middle.style.display = '';
            td_top.style.height = '3px';
            td_middle.style.height = 'auto';
            var iT = 0.8;
            var percent = oBox.clientHeight * iT;
            content_blocks.style.height = percent + "px";
            content_arduino.style.height = percent + "px";
            content_area.style.height = percent + "px";
            side_code_parent.style.height = percent + "px";
            mid_td.style.height = percent + "px";
            td_middle.style.height = "auto";
            StatusBar.selected = true;
        }
        editor.resize();
        Blockly.fireUiEvent(window, 'resize');
    }

    /**
    * @function 状态栏显示数据
    * @description 显示数据到状态栏内
    * @param data {String} 需要显示的字符串
    * @param scroll {Boolean} 是否将滚动条移到底部，true - 移动到底部，false - 保持当前位置不变
    * @return void
    */
    StatusBar.setValue = (data, scroll = false) => {
        if (!Ace) return;
        if (StatusBar.getValue() == data) return;
        Ace.setValue(data);
        if (scroll)
            Ace.gotoLine(Ace.session.getLength());
    }

    /**
    * @function 获取状态栏数据
    * @description 获取当前状态栏显示的数据
    * @return String
    */
    StatusBar.getValue = function () {
        if (!Ace) return "";
        return Ace.getValue();
    }

    /**
    * @function 状态栏追加数据
    * @description 显示数据到状态栏内
    * @param data {String} 需要追加的字符串
    * @param scroll {Boolean} 是否将滚动条移到底部，true - 移动到底部，false - 保持当前位置不变
    * @return void
    */
    StatusBar.addValue = (data, scroll = false) => {
        if (!Ace) return;
        StatusBar.setValue(StatusBar.getValue() + data, scroll);
        Ace.resize();
    }

    /**
    * @function 移动滚动条到底部
    * @description 移动状态栏的滚动条到最底部
    * @return void
    */
    StatusBar.scrollToTheBottom = () => {
        if (!Ace) return;
        Ace.gotoLine(Ace.session.getLength());
    }

    /**
    * @function 移动滚动条到顶部
    * @description 移动状态栏的滚动条到最顶部
    * @return void
    */
    StatusBar.scrollToTheTop = () => {
        if (!Ace) return;
        Ace.gotoLine(0);
    }
})();