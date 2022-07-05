(() => {
    goog.provide('Mixly.Electron.Serial');
    goog.require('Mixly.Modules');
    goog.require('Mixly.Charts');
    goog.require('Mixly.StatusBar');
    goog.require('Mixly.StatusBarPort');
    goog.require('Mixly.DomOperator');
    goog.require('Mixly.Config');
    goog.require('Mixly.Tools');
    goog.require('Mixly.Env');

    const { 
        Electron,
        Modules,
        Charts,
        StatusBar,
        StatusBarPort,
        DomOperator,
        Config,
        Tools,
        Env
    } = Mixly;

    const { Serial } = Electron;

    const { BOARD } = Config;
    
    Modules.serialport = require('serialport');

    const { serialport, lodash_fp } = Modules;

    /**
      * SerialPort对象
      * @type {Object}
      */
    Serial.object = null;
    Serial.parser = null;
    Serial.readLine = null;
    Serial.dom = null;

    /**
      * 储存串口最近一次接收到的数据
      * @type {string}
      */
    Serial.receiveStr = "";

    /**
      * 判断串口工具是否打开，若打开则为true
      * @type {Boolean}
      */
    Serial.toolOpened = false;

    /**
      * 储存烧录时所用串口的VID与PID值，用来做筛选用
      * @type {Array}
      */
    Serial.burnPortType = null;

    /**
      * 储存上传时所用串口的VID与PID值，用来做筛选用
      * @type {Array}
      */
    Serial.uploadPortType = null;

    /**
      * 储存筛选后的串口
      * @type {Array}
      */
    Serial.portList = [];

    /**
      * 储存上一次上传所使用的串口
      * @type {String}
      */
    Serial.selectedPortName = null;

    Serial.dtrValue = true;

    Serial.rtsValue = false;

    /**
    * @function 设置当前板卡串口的VID和PID
    * @description 读取此板卡的配置数据，设置此板卡烧录和上传时的串口PID和VID
    * @param type {String} "Burn" - 设置烧录时串口的PID和VID，"Upload" - 设置上传时串口的PID和VID
    * @return void
    */
    Serial.setPortSelect = function (type) {
        if (typeof BOARD[type]?.portSelect == "object"
            && BOARD[type].portSelect[0]?.productId
            && BOARD[type].portSelect[0]?.vendorId) {
            if (type == "burn")
                Serial.burnPortType = [];
            else
                Serial.uploadPortType = [];
            var i = 0;
            while (BOARD[type].portSelect[i]?.productId
                && BOARD[type].portSelect[i]?.vendorId) {
                var portSelect = [];
                portSelect.push(BOARD[type].portSelect[i].vendorId);
                portSelect.push(BOARD[type].portSelect[i].productId);
                if (type == "burn")
                    Serial.burnPortType.push(portSelect);
                else
                    Serial.uploadPortType.push(portSelect);
                i++;
            }
        } else {
            if (type == "burn")
                Serial.burnPortType = "all";
            else
                Serial.uploadPortType = "all";
        }
    }

    try {
        Serial.setPortSelect("burn");
        Serial.setPortSelect("upload");
    } catch (e) {
        console.log(e);
    }


    /**
    * @function 打开串口工具
    * @description 打开串口工具并打开串口列表中选中的串口
    * @return void
    */
    Serial.openTool = () => {
        let serialConfig = BOARD.serial ?? {};
        if (!Serial.dom)
            Serial.dom = new SerialDomGenerator(0, serialConfig, Code.LANG, Env.isClient);
        let serialDom = Serial.dom;
        if (serialDom.lang !== Code.LANG) {
            serialDom.lang = Code.LANG;
            serialDom.updateDom();
        }
        let { receiveId } = serialDom.id;
        let receiveDom = $('#' + receiveId);
        let successFunc = () => {
            serial_com_update = setInterval(Serial.refreshPortSelectBox, 1200);
            Serial.refreshPortList(Serial.uploadPortType, function () {
                Serial.updateSelectBox(Serial.portList);
                if (Serial.object && Serial.object.isOpen) {
                    if (StatusBarPort.portAce[Serial.object.path]) {
                        receiveDom.val("");
                        //在某些情况下读取状态栏数据到串口监视器可能会让串口监视器卡顿，因此暂时注释掉
                        //$("#serial_content").val(StatusBarPort.getValue(Serial.object.path));
                    }
                } else {
                    receiveDom.val("");
                }
                Serial.connectPort();
                StatusBar.show(1);
                Serial.toolOpened = true;
            });
        }

        let endFunc = () => {
            if (Serial.object && Serial.object.isOpen && receiveDom.val() != "") {
                if (StatusBarPort.portAce[Serial.object.path]) {
                    StatusBarPort.setValue(Serial.object.path, receiveDom.val(), true);
                }
            }
            try {
                Charts.chart && Charts.chart.destroy();
                Charts.chart = null;
            } catch (e) {
                console.log(e);
            }
            Charts.draw && clearInterval(Charts.draw);
            Charts.addData && clearInterval(Charts.addData);
            serial_com_update && clearInterval(serial_com_update);
            let { tabFilter } = Serial.dom.filter;
            layui.element.tabChange(tabFilter, '1');
            Serial.toolOpened = false;
        }

        serialDom.onClickSetDtr((data) => {
            Serial.updateDtrAndRts();
        });

        serialDom.onClickSetRts((data) => {
            Serial.updateDtrAndRts();
        });

        serialDom.onClickSendType((data) => {
            let { sendId } = serialDom.id;
            let sendDom = $('#' + sendId);
            if (data.elem.checked) {
                sendDom.attr("placeholder", indexText["请输入内容"]);
            } else {
                sendDom.attr("placeholder", indexText["请输入内容"] + "  " + indexText["例如"] + ":0x03 0x04");
            }
        });

        serialDom.onClickSelectPort((data) => {
            if (Serial.object && Serial.object.isOpen) {
                Serial.object.close();
                setTimeout(function () {
                    Serial.connectPort();
                    StatusBar.show(1);
                }, 500);
            }
        });

        serialDom.onClickSelectBaud((data) => {
            if (Serial.object && Serial.object.isOpen) {
                Serial.object.update({ baudRate: data.elem.value - 0 }, err => { });
            }
        });

        serialDom.onClickTab((data) => {
            if (data.index == 1) {
                Charts.init();
            } else {
                try {
                    Charts.chart && Charts.chart.destroy();
                    Charts.chart = null;
                } catch (e) {
                    console.log(e);
                }
                Charts.draw && clearInterval(Charts.draw);
                Charts.addData && clearInterval(Charts.addData);
            }
        });

        serialDom.onClickConnectBtn(() => {
            Serial.portOpenOrClose();
        });

        serialDom.onClickSendBtn(() => {
            Serial.write();
        });

        serialDom.onClickClearBtn(() => {
            Serial.clearContent();
        });

        serialDom.onClickChartSendBtn(() => {
            Serial.writeString();
        });

        serialDom.onClickCtrlCBtn(() => {
            Serial.writeCtrlC();
        });

        serialDom.onClickCtrlDBtn(() => {
            Serial.writeCtrlD();
        });

        serialDom.openSerialTool(successFunc, endFunc);
    }

    /**
    * @function 初始化串口列表
    * @description 通过传入的串口PID和VID初始化串口列表
    * @param select {Array | String} 通过串口的VID和PID获取对应串口，当为all时，则获取全部串口
    * @param cb {function} 
    * @return void
    */
    Serial.initPortList = function (select, cb) {
        serialport.SerialPort.list().then(ports => {
            const names = ports.map(p => {
                if (Env.currentPlatform == "linux" && p.path.indexOf('ttyS') != -1) {
                    return "";
                }
                if (select == "all")
                    return p.path;
                if (typeof (select) == "object") {
                    if (typeof (select[0]) == "object") {
                        for (var i = 0; i < select.length; i++) {
                            for (var j = 0; j < select[i].length; j++) {
                                if (select[i].length == 2
                                    && p.vendorId
                                    && p.productId
                                    && p.vendorId.toLowerCase() == select[i][0].toLowerCase()
                                    && p.productId.toLowerCase() == select[i][1].toLowerCase()) {
                                    return p.path;
                                }
                            }
                        }
                    } else {
                        if (select.length == 2
                            && p.vendorId
                            && p.productId
                            && p.vendorId.toLowerCase() == select[0].toLowerCase()
                            && p.productId.toLowerCase() == select[1].toLowerCase()) {
                            return p.path;
                        }
                    }
                }
            });
            if (typeof cb === 'function') {
                cb(names);
            }
        });
    }

    /**
    * @function 刷新串口列表
    * @description 刷新串口列表，更新数据到Serial.portList
    * @param portSelect {Array | String} 通过串口的VID和PID获取对应串口，当为all时，则获取全部串口
    * @param doFunc {function} 串口刷新结束后所要执行的操作
    * @return void
    */
    Serial.refreshPortList = function (portSelect, doFunc) {
        Serial.portList = [];
        var newPortList = [];
        Serial.initPortList(portSelect, ports => {
            lodash_fp.map(v => {
                if (v != undefined) {
                    Serial.portList.push(v);
                }
            }, ports);
            doFunc();
        });
    }

    /**
    * @function 获取最新的串口列表
    * @description 获取最新的串口列表
    * @param portSelect {Array | String} 通过串口的VID和PID获取对应串口，当为all时，则获取全部串口
    * @param doFunc {function} 串口刷新结束后所要执行的操作
    * @return void
    */
    Serial.getPortList = function (portSelect, doFunc) {
        var newPortList = [];
        Serial.initPortList(portSelect, ports => {
            lodash_fp.map(v => {
                if (v != undefined) {
                    newPortList.push(v);
                }
            }, ports);
            doFunc(newPortList);
        });
    }

    /**
    * @function 更新串口列表到串口选择框
    * @description 通过传入串口列表以更新串口选择框
    * @param portArr {Array} 串口列表
    * @return void
    */
    Serial.updateSelectBox = function (portArr) {
        var form = layui.form;
        let serialConfig = BOARD.serial ?? {};
        if (!Serial.dom)
            Serial.dom = new SerialDomGenerator(0, serialConfig, Code.LANG, Env.isClient);
        let { selectPortId } = Serial.dom.id;
        const devNames = $('#' + selectPortId);
        devNames.empty();
        lodash_fp.map(v => {
            if (Serial.selectedPortName == v) {
                devNames.append($(`<option value="${v}" selected>${v}</option>`));
            } else {
                devNames.append($(`<option value="${v}">${v}</option>`));
            }
        }, portArr);
        form.render();
    }

    /**
    * @function 连接串口
    * @description 读取串口下拉列表中选中的串口并连接
    * @param port {String} 串口号
    * @param baud {Number} 波特率
    * @return void
    */
    Serial.connectPort = function (port = null, baud = null) {
        let { selectPortId, selectBaudId, receiveId, connectBtnId } = Serial.dom.id;
        if (port == null)
            port = $('#' + selectPortId + ' option:selected').val();
        if (baud == null)
            baud = $('#' + selectBaudId + ' option:selected').val() - 0;
        if (!port)
            return;
        StatusBarPort.tabChange(port);
        if (Serial.object && (Serial.object.isOpen || Serial.object.opening)) {
            if (Serial.object.path == port) {
                return;
            } else {
                Serial.object.close();
                return;
            }
        }
        let receiveDom = $('#' + receiveId);
        let connectBtnDom = $('#' + connectBtnId);
        Serial.object = new serialport.SerialPort({
            path: port,
            baudRate: baud - 0,  //波特率
            dataBits: 8,    //数据位
            parity: 'none',  //奇偶校验
            stopBits: 1,  //停止位
            flowControl: false,
            autoOpen: false //不自动打开1
        }, false);
        Serial.selectedPortName = port;
        Serial.readLine = serialport.ReadlineParser;
        Serial.ByteLength = serialport.ByteLengthParser;
        Serial.receiveBuff = [];
        let chineseStr = "";
        Serial.buffLength = 0;
        Serial.parser = new Serial.readLine();
        Serial.parserBytes = Serial.object.pipe(new Serial.ByteLength({ length: 1 }))
        Serial.object.pipe(Serial.parser);
        var serialDataUpdate = null;
        Serial.object.open(function (error) {
            if (error) {
                console.log('failed to open: ' + error);
                StatusBarPort.setValue(port, error + '\n', true);
                receiveDom.val(receiveDom.val() + error + '\n');
                receiveDom.scrollTop(receiveDom[0].scrollHeight);
                Serial.object = null;
                connectBtnDom.text(indexText["打开"]);
                connectBtnDom.attr("class", "layui-btn layui-btn-normal");
                return;
            } else {
                StatusBarPort.tabAdd(port, (portName) => {
                    if (Serial.object && Serial.object.isOpen && Serial.object.path == portName) {
                        Serial.object.close();
                        StatusBarPort.tabChange("output");
                        if (StatusBar.getValue().lastIndexOf("\n") != StatusBar.getValue().length - 1) {
                            StatusBar.addValue('\n' + indexText['已关闭串口'] + portName + '\n', true);
                        } else {
                            StatusBar.addValue(indexText['已关闭串口'] + portName + '\n', true);
                        }
                    }
                });
                StatusBarPort.tabChange(port);

                connectBtnDom.text(indexText["关闭"]);
                connectBtnDom.attr("class", "layui-btn layui-btn-danger");
                StatusBarPort.setValue(port, indexText['已打开串口'] + ': ' + port + '\n', true);

                receiveDom.val(indexText['已打开串口'] + ': ' + port + '\n');
                receiveDom.scrollTop(receiveDom[0].scrollHeight);

                serialDataUpdate = setInterval(Serial.refreshOutputBox, 100);
            }
        });

        Serial.parserBytes.on('data', function (data) {
            /*  UTF-8编码方式
            *   ------------------------------------------------------------
            *   |1字节 0xxxxxxx                                             |
            *   |2字节 110xxxxx 10xxxxxx                                    |
            *   |3字节 1110xxxx 10xxxxxx 10xxxxxx                           |
            *   |4字节 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx                  |
            *   |5字节 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx         |
            *   |6字节 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx|
            *   ------------------------------------------------------------
            */
            if ((data[0] & 0x80) == 0x00) {
                if (chineseStr !== "") {
                    try {
                        let dataArr = String.fromCharCode(data[0]).match(/\w/g);
                        if (dataArr && dataArr.length > 0) {
                            chineseStr += data;
                        } else {
                            Serial.receiveStr += Tools.messageDecode(chineseStr);
                            Serial.receiveStr += data;
                            chineseStr = "";
                        }
                    } catch(e) {
                        console.log(e);
                        Serial.receiveStr += Tools.messageDecode(chineseStr);
                        Serial.receiveStr += data;
                        chineseStr = "";
                    }
                } else {
                    if (data[0] !== 95) {
                        Serial.receiveStr += data;
                    } else {
                        chineseStr = String.fromCharCode(data[0]);
                    }
                }
            } else if ((data[0] & 0xc0) == 0x80) {
                Serial.receiveBuff.push(data[0]);
                if (Serial.receiveBuff.length >= Serial.buffLength) {
                    Serial.receiveStr += Buffer.from(Serial.receiveBuff);
                    Serial.receiveBuff = [];
                }
            } else {
                let dataNum = data[0] & 0xe0;
                switch (dataNum) {
                    case 0xfc:
                        Serial.buffLength = 6;
                        break;
                    case 0xf8:
                        Serial.buffLength = 5;
                        break;
                    case 0xf0:
                        Serial.buffLength = 4;
                        break;
                    case 0xe0:
                        Serial.buffLength = 3;
                        break;
                    case 0xc0:
                    default:
                        Serial.buffLength = 2;
                }
                Serial.receiveBuff.push(data[0]);
            }
        });

        Serial.parser.on('data', function (data) {
            Charts.addData(data);
        });

        Serial.object.on('error', function (err) {
            serialDataUpdate && clearInterval(serialDataUpdate);
            StatusBarPort.tabChange("output");
            Serial.showErrorData(port, Serial.toolOpened, err);
        });

        Serial.object.on('open', async () => {
            await Serial.reset();
            Serial.updateDtrAndRts();
        })

        //串口结束使用时执行此函数
        Serial.object.on('close', () => {
            //StatusBarPort.tabChange("output");
            StatusBarPort.close(port);
            connectBtnDom.text(indexText["打开"]);
            connectBtnDom.attr("class", "layui-btn layui-btn-normal");
            serialDataUpdate && clearInterval(serialDataUpdate);
            if (receiveDom.val().lastIndexOf("\n") != receiveDom.val().length - 1) {
                receiveDom.val(receiveDom.val() + '\n' + indexText['已关闭串口'] + ': ' + port + '\n');
            } else {
                receiveDom.val(receiveDom.val() + indexText['已关闭串口'] + ': ' + port + '\n');
            }
            receiveDom.scrollTop(receiveDom[0].scrollHeight);

            if (StatusBarPort.getValue(port).lastIndexOf("\n") != StatusBarPort.getValue(port).length - 1) {
                StatusBarPort.addValue(port, '\n' + indexText['已关闭串口'] + ': ' + port + '\n', true);
            } else {
                StatusBarPort.addValue(port, indexText['已关闭串口'] + ': ' + port + '\n', true);
            }
            Serial.object = null;
        });
    }

    /**
    * @function 打开或关闭串口
    * @description 若串口已打开，则关闭它，反之则打开它
    * @return void
    */
    Serial.portOpenOrClose = function () {
        if (Serial.object && (Serial.object.isOpen || Serial.object.opening)) {
            Serial.object.close();
        } else {
            Serial.connectPort();
            StatusBar.show(1);
        }
    }

    /**
    * @function 显示串口报错信息到串口输出框或状态栏
    * @description 
    * @param select {Boolean} true - 显示报错信息到串口输出框，false - 显示报错信息到状态栏
    * @param data {String} 报错信息
    * @return void
    */
    Serial.showErrorData = function (port, select, data) {
        let { receiveId, receiveTypeId, scrollId } = Serial.dom.id;
        let receiveDom = $('#' + receiveId);
        let receiveTypeDom = $('#' + receiveTypeId);
        let scrollDom = $('#' + scrollId);
        if (receiveTypeDom[0].checked == false) {
            data = Tools.uint8ArrayToStr(Tools.strToByte(data));
            data = data.replace(/^\s*/, "");
            data += "\n";
        }
        if (select) {
            receiveDom.val(receiveDom.val() + data);
            scrollDom[0].checked == true && receiveDom.scrollTop(receiveDom[0].scrollHeight);
        } else {
            StatusBarPort.addValue(port, data, true);
        }
    }

    /**
    * @function 串口发送字节数组
    * @description 
    * @param sendDataStr {String} 要发送的数据
    * @param sendDataTail {String} 数据的尾部
    * @return void
    */
    Serial.writeByteArr = function (sendDataStr, sendDataTail) {
        var sendDataArr = sendDataStr.trim().split(/\s+/);
        var sendDataNum = [];
        for (var i = 0; i < sendDataArr.length; i++) {
            if (parseInt(sendDataArr[i], 16)) {
                sendDataNum.push(parseInt(sendDataArr[i], 16));
            }
        }
        Serial.object.write(sendDataNum);
        sendDataTail = sendDataTail.replace("\\r", "\r");
        sendDataTail = sendDataTail.replace("\\n", "\n");
        if (sendDataTail == "no") {
            sendDataTail = "";
        }
        if (sendDataTail) {
            let { sendId } = Serial.dom.id;
            let sendDom = $('#' + sendId);
            Serial.object.write(sendDataTail);
            sendDom.val("");
        }
    }

    /**
    * @function 串口发送字符串
    * @description 串口发送字符串
    * @return void
    */
    Serial.writeString = function () {
        let { chartSendId, chartSendWithId } = Serial.dom.id;
        let chartSendDom = $('#' + chartSendId);
        if (Serial.object) {
            var sendDataStr = chartSendDom.val();
            var sendDataTail = $('#' + chartSendWithId + ' option:selected').val();
            sendDataTail = sendDataTail.replace("\\r", "\r");
            sendDataTail = sendDataTail.replace("\\n", "\n");
            if (sendDataTail == "no") {
                sendDataTail = "";
            }
            if (sendDataStr) {
                Serial.object.write(sendDataStr + sendDataTail);
                chartSendDom.val("");
            }
        }
    }

    /**
    * @function 读取串口发送框数据并发送
    * @description 读取串口发送框数据并发送，然后清空串口发送框
    * @return void
    */
    Serial.write = function () {
        if (Serial.object) {
            let { sendId, sendWithId, sendTypeId } = Serial.dom.id;
            let sendDom = $('#' + sendId);
            var sendDataStr = sendDom.val();
            var sendDataTail = $('#' + sendWithId + ' option:selected').val();
            if ($('#' + sendTypeId)[0].checked == false) {
                Serial.writeByteArr(sendDataStr, sendDataTail);
            } else {
                sendDataTail = sendDataTail.replace("\\r", "\r");
                sendDataTail = sendDataTail.replace("\\n", "\n");
                if (sendDataTail == "no") {
                    sendDataTail = "";
                }
                if (sendDataStr) {
                    Serial.object.write(sendDataStr + sendDataTail);
                    sendDom.val("");
                }
            }
        }
    }

    /**
    * @function 串口发送
    * @description 串口发送Ctrl + C
    * @return void
    */
    Serial.writeCtrlC = function () {
        if (Serial.object) {
            Serial.object.write([3, 13, 10]);
        }
    }

    /**
    * @function 串口发送
    * @description 串口发送Ctrl + D
    * @return void
    */
    Serial.writeCtrlD = function () {
        if (Serial.object) {
            Serial.object.write([3, 4]);
        }
    }

    /**
    * @function 清空串口输出框
    * @description 清空当前串口输出框中的数据
    * @return void
    */
    Serial.clearContent = function () {
        let { receiveId } = Serial.dom.id;
        let receiveDom = $('#' + receiveId);
        receiveDom.val('');
    }

    /**
    * @function 刷新串口选择框
    * @description 获取最新的串口列表并刷新串口选择框
    * @return void
    */
    Serial.refreshPortSelectBox = function () {
        Serial.getPortList(Serial.uploadPortType, function (newPortList) {
            if (newPortList.toString() != Serial.portList.toString()) {
                Serial.updateSelectBox(newPortList);
                Serial.portList = newPortList;
            }
        })
    }

    /**
    * @function 更新串口输出框中数据
    * @description 更新串口数据到串口输出框
    * @return void
    */
    Serial.refreshOutputBox = function () {
        if (!Serial.object) {
            return;
        }
        if (!Serial.object.isOpen) {
            return;
        }
        var oldReceiveData = "";
        var disposeData = [];
        let { receiveId, scrollId, receiveTypeId } = Serial.dom.id;
        let receiveDom = $('#' +receiveId);
        let receiveTypeDom = $('#' + receiveTypeId);
        let scrollDom = $('#' + scrollId);
        if (Serial.toolOpened) {
            oldReceiveData = receiveDom.val();
        } else {
            oldReceiveData = StatusBarPort.getValue(Serial.object.path);
        }

        disposeData = oldReceiveData.split(/\n/);

        if (receiveTypeDom[0].checked == false) {
            Serial.receiveStr = Tools.uint8ArrayToStr(Tools.strToByte(Serial.receiveStr));
            Serial.receiveStr = Serial.receiveStr.replace(/^\s*/, "");
        }

        oldReceiveData = "";
        if (disposeData.length >= 1000) {
            for (var z = disposeData.length - 1000; z < disposeData.length - 1; z++) {
                oldReceiveData += disposeData[z] + "\n";
            }
        } else {
            for (var z = 0; z < disposeData.length - 1; z++) {
                oldReceiveData += disposeData[z] + "\n";
            }
        }
        oldReceiveData += disposeData[disposeData.length - 1];
        if (Serial.toolOpened) {
            receiveDom.val(oldReceiveData + Serial.receiveStr);
            scrollDom[0].checked == true && receiveDom.scrollTop(receiveDom[0].scrollHeight);
        } else {
            if (oldReceiveData + Serial.receiveStr == "\n") {
                StatusBarPort.setValue(Serial.object.path, '', true);
            } else {
                StatusBarPort.setValue(Serial.object.path, oldReceiveData + Serial.receiveStr, true);
            }
        }
        Serial.receiveStr = "";
    }

    Serial.updateDtrAndRts = function () {
        if (Serial.object && Serial.object.isOpen) {
            let { setDtrId, setRtsId } = Serial.dom.id;
            let setDtrDom = $('#' + setDtrId),
                setRtsDom = $('#' + setRtsId);
            Serial.object.set({ dtr: setDtrDom[0].checked ?? true, rts: setRtsDom[0].checked ?? true });
        }
    }

    Serial.reset = async function () {
        if (typeof BOARD.upload.reset !== 'object') return;
        let len = BOARD.upload.reset.length;
        for (var i = 0; i < len; i++) {
            if (BOARD.upload.reset[i].dtr !== undefined
                || BOARD.upload.reset[i].rts  !== undefined) {
                var dtrValue = false;
                var rtsValue = false;
                if (BOARD?.upload?.reset[i]?.dtr) {
                    dtrValue = true;
                }
                if (BOARD?.upload?.reset[i]?.rts) {
                    rtsValue = true;
                }
                await Serial.setDtrAndRts(dtrValue, rtsValue);
            } else if (BOARD?.upload?.reset[i]?.sleep) {
                var sleepValue = parseInt(BOARD.upload.reset[i].sleep) || 100;
                await Serial.sleep(sleepValue);
            }
        }
    }

    Serial.setDtrAndRts = function(dtr, rts) {
        return new Promise((resolve, reject) => {
            console.log('dtr:' + dtr, 'rts:' + rts);
            Serial.object.set({
                brk: false,
                cts: false,
                dsr: false,
                dtr: dtr,
                rts: rts
            }, error => {
                if (error && Serial.object && Serial.object.isOpen) {
                    Serial.object.close();
                }
                resolve();
            });
        })
    }

    Serial.sleep = async function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

})();