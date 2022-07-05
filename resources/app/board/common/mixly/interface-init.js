class MixlyInterfaceDomGeneraror {
    constructor(type, navConfig, thirdPartyBoard) {
        this._type = type;
        this._config = this.getConfig(navConfig);
        this._thirdPartyBoard = thirdPartyBoard;
    }

    getConfig(navConfig) {
        let defaultSetting = {
            "thirdPartyLibrary": false
        }

        let defaultSave = {
            "ino": false,
            "bin": false,
            "hex": false,
            "py": false,
            "img": false
        }

        let defaultNav = {
            "burn": false,
            "upload": false,
            "compile": false,
            "simulate": false,
            "run": false,
            "cancel": false,
            "save": defaultSave,
            "setting": defaultSetting
        }

        let _config = {};

        for (let key in defaultNav) {
            if (typeof defaultNav[key] === "object") {
                if (navConfig[key] === undefined) {
                    _config[key] = defaultNav[key];
                } else {
                    _config[key] = {};
                    for (let childKey in defaultNav[key]) {
                        _config[key][childKey] = navConfig[key][childKey] ?? defaultNav[key][childKey];
                    }
                }
            } else {
                _config[key] = navConfig[key] ?? defaultNav[key];
            }
        }

        return _config;
    }

    init() {
        let {
            burn,
            compile,
            upload,
            simulate,
            run,
            cancel,
            save,
            setting
        } = this._config;

        let {
            ino,
            bin,
            hex,
            py,
            img
        } = save;

        let {
            thirdPartyLibrary
        } = setting;

        let fileAccept = null;
        if (ino) {
            fileAccept = ".mix,.ino,.xml";
        } else if (hex) {
            fileAccept = ".mix,.py,.xml,.hex";
        } else {
            fileAccept = ".mix,.py,.xml";
        }

        let jsFilesPath = "../";
        if (this._thirdPartyBoard) {
            jsFilesPath = "../../";
        }

        let style = (localStorage.Theme == 'Dark'?
                    `<style>
                        body {
                            background-color: #181818;
                        }
                    </style>` : 
                    `<style>
                        body {
                            background-color: #fff;
                        }
                    </style>`);

        let uploadFileType =    `<div tabindex="1">
                                    <input id="upload_file" type="file" name="upload_file" accept=${fileAccept} onchange="getFile(this);" style="display: none;" />
                                    <input id="library_file" type="file" name="library_file" accept=".xml" onchange="get_library_File(this);" style="display: none;" />
                                </div>`;

        let boardSelectorDiv = `<div id="boardSelector-div" class="layui-form">
                                    <div id="boardSelector" class="layui-input-inline" style="width: 100%;">
                                        <select id="boards-type" spellcheck="false" lay-filter="boards-type"></select>
                                        <div id="board-info-div" style="display: none;width: 50px; height: 50px; position: absolute;"></div>
                                    </div>
                                </div>`;

        let navDiv =    `<ul id="nav" class="layui-nav layui-bg-green" lay-filter="">
                        </ul>
                        <script>
                            try {
                                if (localStorage.Theme == 'Dark') {
                                    $("#nav").removeClass("layui-nav layui-bg-green");
                                    $("#nav").addClass("layui-nav layui-bg-cyan");
                                    Mixly.Env.theme = 'dark';
                                } else if (localStorage.Theme == 'Light') {
                                    $("#nav").removeClass("layui-nav layui-bg-cyan");
                                    $("#nav").addClass("layui-nav layui-bg-green");
                                    Mixly.Env.theme = 'light';
                                }
                                Mixly.LayerExtend.updateShade();
                            } catch (e) {
                                console.log(e);
                            }
                        </script>
                        <script type="text/javascript" src="${jsFilesPath}common/mixly/nav-init.js"></script>`

        let progressDiv = `<div id="webusb-flashing" style="display:none; margin:12px" align="center">
                                <progress id="webusb-flashing-progress"></progress>
                                ${compile ?
                                '<button id="webusb-cancel" onclick="Mixly.Electron.ArduShell.cancel();">取消</button>'
                                : 
                                `<button id="webusb-cancel" onclick="${this._type?'Mixly.Electron.BU.cancel();':'Mixly.Web.BU.cancel();'}">取消</button>`
                            }
                            </div>`;

        let portTypeDiv = `<div class="layui-form" id="serial-device-form" style="display: none;">
                            <div class="layui-form-item">
                                <div id="serial_device_type">
                                    <select id="select_serial_device">
                                    </select>
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <div style="text-align:center;">
                                    <button id="cancel-btn" class="layui-btn layui-btn-normal" onclick="">取消</button>
                                    <button id="init-btn" class="layui-btn layui-btn-normal" onclick="">确定</button>
                                </div>
                            </div>
                        </div>`;

        let simulateDiv = `<div class="layui-form layui-form-pane" id="simulate-form" style="display: none;">
                                <div class="app-container">
                                    <div class="leds">
                                    <wokwi-led color="green" label="13"></wokwi-led>
                                    <wokwi-led color="red" label="12"></wokwi-led>
                                    <wokwi-led color="blue" label="11"></wokwi-led>
                                    </div>
                                    <div class="toolbar">
                                        <button id="run-button">运行</button>
                                        <button id="stop-button" disabled>停止</button>
                                        <div class="spacer"></div>
                                        <div id="status-label"></div>
                                    </div>
                                    <div style="width:100%;height:5%;"></div>
                                    <div class="code-editor">
                                        <textarea readonly id="serial-output-text" spellcheck="false" placeholder="串口输出" class="layui-textarea" style="height:60%;width: 100%;"></textarea>
                                    </div>
                                    <div class="compiler-output">
                                        <pre id="compiler-output-text"></pre>
                                        <pre id="serial-output-text"></pre>
                                    </div>
                                </div>
                            </div>`;
        let thirdPartyLibraryDiv = `<div id="import-library" style="display: none;overflow: hidden;">
                                        <div class="layui-tab" lay-filter="library" style="width: 100%;height: 100%;margin-top: 0px;margin-bottom: 0px;position: relative;">
                                            <ul class="layui-tab-title" style="position: absolute;left: 0px;top: 0px;height: 40px;right: 0px;">
                                                <li class="layui-this" lay-id="1" id="mixly-lib">Mixly库</li>
                                                <li lay-id="2" id="arduino-lib">Arduino库</li>
                                            </ul>
                                            <div class="layui-tab-content" style="position: absolute;left: 0px;top: 40px;bottom: 0px;right: 0px;overflow: auto;">
                                                <div class="layui-tab-item layui-show">
                                                    <div class="layui-hide" id="mixly-lib-page" lay-filter="mixly-lib-page"></div>
                                                </div>
                                                <div class="layui-tab-item">
                                                    <div class="layui-hide" id="arduino-lib-page" lay-filter="arduino-lib-page"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="cloud-libs-download-form" class="layui-form layui-form-pane" style="display:none;position:relative;height:100%;">
                                        <div class="layui-form-item layui-form-text" style="position:absolute;margin-bottom:20px;margin-top: 20px;left:10px;right:10px;">
                                            <div class="layui-progress layui-progress-big" lay-showpercent="true" lay-filter="download-percent">
                                                <div class="layui-progress-bar" lay-percent="0%"></div>
                                            </div>
                                        </div>
                                        <div class="layui-form-item layui-form-text" style="position:absolute;top:58px;left:0px;bottom:0px;width:100%;margin-bottom:0px;">
                                            <label id="download-information" class="layui-form-label">${indexText["信息"]}</label>
                                            <div class="layui-input-block" style="position:absolute;top:38px;left:0px;bottom:0px;width:100%;">
                                                <textarea id="cloud-libs-download-message" wrap="off" spellcheck="false" class="layui-textarea" style="width:100%;height:100%;resize:none;"></textarea>
                                            </div>
                                        </div>
                                    </div>`;

        let blocklyDiv = `<table width="100%;" id="table_whole">
                                <tr>
                                    <td height="100%" width="100%" id="content_area"></td>
                                    <td style="display: none;height: 100%;width: 0.3%;background: #ddd;cursor: w-resize;" id="mid_td"></td>
                                    <td width="25%" style="background-color:#eee;display:none;padding-right:10px;" id="side_code_parent">
                                        <div id="side_code" wrap="off" style="padding-bottom: 0px;padding-top: 0px;" readonly></div>
                                    </td>
                                    <div id="sidebar" class="right-top" onclick="sidecodeClick()"></div>
                                </tr>

                                <tr id="tr_top">
                                    <td id="td_top" colspan="3" style="border: 0;height: 3px;">
                                        <div id="div_top" style=""></div>
                                    </td>
                                </tr>

                                <tr id="tr_middle">
                                    <td id="td_middle" valign="middle" colspan="3" style="display: none;height: 100px;width: 100%;"> 
                                        <div class="layui-tab layui-tab-card" lay-allowclose="true" lay-filter="status-bar-ace" style="height:100%;margin-top: 0px;margin-bottom: 0px;position: relative;">
                                            <ul class="layui-tab-title">
                                                <li id="tab-ace-output" class="layui-this" lay-id="tab-ace-output">${indexText["输出"]}</li>
                                            </ul>
                                            <div class="layui-tab-content" style="">
                                                <div class="layui-tab-item layui-show">
                                                    <pre class="tab-ace" id="div_inout_middle" align="center"></pre>
                                                </div>
                                            </div>
                                        </div> 
                                    </td>
                                </tr>
                            </table>
                            <div id="content_blocks" class="content"></div>
                            <div id="content_arduino" class="content" wrap="off"></div>
                            <textarea id="content_xml" class="content" wrap="off" readonly></textarea>
                            <script type="text/javascript" src="${jsFilesPath}common/mixly/common/nav-events.js"></script>
                            <script>
                                Mixly.StatusBar.init();
                                if (Mixly.Config.BOARD?.nav?.compile 
                                    && Mixly.Config.SOFTWARE?.socketServer?.enabled !== true
                                    && Mixly.Env.isClient)
                                    Mixly.Electron.ArduShell.init();
                                layui.use('element', function () {
                                    var element = layui.element;
                                    element.init();
                                });
                                updateIndexText();
                            </script>`;

        let interfaceHtmlStr = style
            + uploadFileType
            + boardSelectorDiv
            + navDiv
            + ((run || cancel) ? "" : progressDiv)
            + ((run || cancel) ? "" : portTypeDiv)
            + (simulate ? simulateDiv : "")
            + (thirdPartyLibrary ? thirdPartyLibraryDiv : "")
            + blocklyDiv;
        document.write(interfaceHtmlStr);
    }
}

function interfaceInit() {
    let isClient =  Mixly.Env.isClient;
    let navConfig = Mixly.Config.BOARD?.nav ?? {};
    let thirdPartyBoard = Mixly.Config.BOARD?.thirdPartyBoard ?? false;
    let interfaceObj = new MixlyInterfaceDomGeneraror(isClient, navConfig, thirdPartyBoard);
    interfaceObj.init();
}

interfaceInit();

function updateIndexText() {
    if (getid("tab-ace-output")) {
        getid("tab-ace-output").innerHTML = indexText["输出"];
    }
    if (getid("webusb-cancel")) {
        getid("webusb-cancel").innerHTML = indexText["取消"];
    }
    if (getid("download-information")) {
        getid("download-information").innerHTML = indexText["信息"];
    }
    if (getid("cancel-btn")) {
        getid("cancel-btn").innerHTML = indexText["取消"];
    }
    if (getid("init-btn")) {
        getid("init-btn").innerHTML = indexText["确定"];
    }
    if (getid("mixly-lib")) {
        getid("mixly-lib").innerHTML = indexText["Mixly库"];
    }
    if (getid("arduino-lib") && Mixly.Config.BOARD?.nav?.save?.ino === true) {
        getid("arduino-lib").innerHTML = indexText["Arduino库"];
    } else if (getid("arduino-lib")) {
        getid("arduino-lib").innerHTML = indexText["Python库"];
    }
}

window.onbeforeunload = function(event) {
    let serialObj = Mixly?.Electron?.Serial?.object ?? null;
    if (Mixly.Env.isClient && serialObj)
        if (serialObj.isOpen || serialObj.opening) {
            serialObj.close();
        }
};

let onbeforeunload = function() {
    const { BOARD } = Mixly.Config;
    let href = BOARD.thirdPartyBoard ? '../../../index.html' : '../../index.html';
    let serialObj = Mixly?.Electron?.Serial?.object ?? null;
    if (Mixly.Env.isClient && serialObj)
        if (serialObj.isOpen || serialObj.opening) {
            serialObj.close(() => {
                window.location.href = href;
                window.reload();
            });
            return;
        }
    window.location.href = href;
    window.reload();
};