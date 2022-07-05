(() => {
    goog.provide('Mixly.StatusBarPort');
    goog.require('Mixly.StatusBar');

    let { StatusBarPort, StatusBar } = Mixly;
    StatusBarPort.portAce = {};

    StatusBarPort.portNames = [];

    let { portAce, portNames } = StatusBarPort;

    StatusBarPort.tabAdd = (port, doFunc = () => {}) => {
        if (!portNames.includes(port)) {
            layui.use('element', function () {
                let element = layui.element;
                let contentData = `<pre class="tab-ace" id="tab-${port}-ace" align="center"></pre>`;
                element.tabAdd('status-bar-ace', {
                    title: port + `<span id="tab-ace-${port}-span" class="layui-badge-dot layui-bg-orange"></span>`,
                    content: contentData,
                    id: `tab-ace-${port}`
                });
                portNames.push(port);
                portAce[port] = ace.edit(`tab-${port}-ace`);
                if (window?.localStorage?.Theme === "Dark") {
                    portAce[port].setOption("theme", "ace/theme/terminal");
                } else {
                    portAce[port].setOption("theme", "ace/theme/xcode");
                }
                portAce[port].getSession().setMode("ace/mode/python");
                portAce[port].setFontSize(document.body.clientWidth / 95);
                portAce[port].setReadOnly(false);
                portAce[port].setScrollSpeed(0.3);
                portAce[port].setShowPrintMargin(false);
                portAce[port].renderer.setShowGutter(false);
                portAce[port].commands.addCommands([
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
                        name: "Empty",
                        bindKey: "Ctrl-E",
                        exec: (editor) => {
                            StatusBarPort.setValue(port, "");
                        }
                    }
                ]);

                element.on('tabDelete(status-bar-ace)', (data) => {
                    let portName = portNames[data.index - 1];
                    portAce[portName].destroy();
                    portAce[portName].container.remove();
                    portNames.splice(data.index - 1, 1);
                    delete portAce[portName];
                    doFunc(portName);
                });

                element.on('tab(status-bar-ace)', (data) => {
                    if (data.index == 0) {
                        StatusBar.scrollToTheBottom();
                    } else {
                        StatusBarPort.scrollToTheBottom(portNames[data.index - 1]);
                    }
                });
            });
        } else {
            StatusBarPort.open(port);
        }
    }

    StatusBarPort.tabChange = (id) => {
        layui.use('element', () => {
            let element = layui.element;
            element.tabChange("status-bar-ace", `tab-ace-${id}`);
        });
    }

    /**
    * @function 状态栏显示数据
    * @description 显示数据到状态栏内
    * @param data {String} 需要显示的字符串
    * @param scroll {Boolean} 是否将滚动条移到底部，true - 移动到底部，false - 保持当前位置不变
    * @return void
    */
    StatusBarPort.setValue = (portName, data, scroll = false) => {
        if (!portAce[portName]) return;
        if (StatusBarPort.getValue(portName) == data) return;
        portAce[portName].setValue(data);
        if (scroll)
            portAce[portName].gotoLine(portAce[portName].session.getLength());
    }

    /**
    * @function 获取状态栏数据
    * @description 获取当前状态栏显示的数据
    * @return String
    */
    StatusBarPort.getValue = (portName) => {
        if (!portAce[portName]) return "";
        return portAce[portName].getValue();
    }

    /**
    * @function 状态栏追加数据
    * @description 显示数据到状态栏内
    * @param data {String} 需要追加的字符串
    * @param scroll {Boolean} 是否将滚动条移到底部，true - 移动到底部，false - 保持当前位置不变
    * @return void
    */
    StatusBarPort.addValue = (portName, data, scroll = false) => {
        if (!portAce[portName]) return;
        StatusBarPort.setValue(portName, StatusBarPort.getValue(portName) + data, scroll);
    }

    /**
    * @function 移动滚动条到底部
    * @description 移动状态栏的滚动条到最底部
    * @return void
    */
    StatusBarPort.scrollToTheBottom = (portName) => {
        if (!portAce[portName]) return;
        portAce[portName].gotoLine(portAce[portName].session.getLength());
    }

    /**
    * @function 移动滚动条到顶部
    * @description 移动状态栏的滚动条到最顶部
    * @return void
    */
    StatusBarPort.scrollToTheTop = (portName) => {
        if (!portAce[portName]) return;
        portAce[portName].gotoLine(0);
    }

    StatusBarPort.open = (portName) => {
        let aceSpan = $(`#tab-ace-${portName}-span`);
        if (aceSpan && aceSpan[0]) {
            aceSpan[0].className = "layui-badge-dot layui-bg-orange";
        }
    }

    StatusBarPort.close = (portName) => {
        let aceSpan = $(`#tab-ace-${portName}-span`);
        if (aceSpan && aceSpan[0]) {
            aceSpan[0].className = "layui-badge-dot layui-bg-blue";
        }
    }
})();