class MixlyNavGenerator {
    constructor(navId, type, navConfig, thirdPartyBoard) {
        this._navId = navId;
        this._type = type; //检测是否是在electron环境下运行，如果是则type为1，反之为0
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
        let navDom = document.getElementById(this._navId);
        let {
            burn,
            compile,
            upload,
            simulate,
            save,
            run,
            cancel,
            setting
        } = this._config;

        if (!Mixly.Env.isClient 
            && Mixly.Config.BOARD?.boardName == "MixGo AI" 
            && Mixly.Env.hasSocketServer !== 'true') {
            burn = false;
        }

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

        let _leftBtnArr = [
            { //【撤销】按钮
                class: 'icon-ccw',
                id: 'undo_btn',
                title: 'undo(ctrl+z)',
                href: '#',
                onclick: 'UndoClick()'
            },
            { //【重复】按钮
                class: 'icon-cw',
                id: 'redo_btn',
                title: 'redo(ctrl+y)',
                href: '#',
                onclick: 'RedoClick()'
            }
        ]

        if (!this._type && Mixly.Env.hasSocketServer !== 'true')
            _leftBtnArr.push({
                // 网页版的【连接】按钮
                class: 'icon-link',
                id: 'connect_btn',
                title: '',
                href: '#',
                onclick: 'Mixly.Web.BU.clickConnect()'
            })

        /*
        if (Mixly.Env.hasSocketServer === 'true')
            _leftBtnArr.push({
                // WebSocket版的【连接】按钮
                class: 'icon-link',
                id: 'connect_btn',
                title: '',
                href: '#',
                onclick: 'Mixly.WebSocket.Socket.clickConnect()'
            })
        */

        if (burn) {
            let _btnObj = {
                //【初始化固件】按钮
                class: 'icon-upload-1',
                id: 'burn_btn',
                title: '',
                href: '#',
                onclick: 'Mixly.Electron.BU.initBurn()'
            }
            if (!this._type) //网页端【初始化固件】按钮
                _btnObj.onclick = 'Mixly.Web.BU.burn()';

            if (Mixly.Env.hasSocketServer === 'true') //使用node服务器烧录
                _btnObj.onclick = 'Mixly.WebSocket.BU.burn()';

            _leftBtnArr.push(_btnObj);
        }

        if (compile) {
            let _btnObj = {
                //【编译】按钮
                class: 'icon-check',
                id: 'compile_btn',
                title: '',
                href: '#',
                onclick: 'Mixly.Electron.ArduShell.initCompile()'
            }
            if (!this._type) //网页端【编译】按钮
                _btnObj.onclick = 'Mixly.Electron.ArduShell.initCompile()';

            if (Mixly.Env.hasSocketServer === 'true') //使用node服务器编译上传
                _btnObj.onclick = 'Mixly.WebSocket.ArduShell.compile()';

            if (Mixly.Env.hasCompiler === 'true') //使用node服务器编译
                _btnObj.onclick = 'MixlyWebCompiler.compile()';
            
            _leftBtnArr.push(_btnObj);
        }

        if (upload) {
            let _btnObj = {
                //【上传】按钮
                class: 'icon-upload',
                id: 'upload_btn',
                title: '',
                href: '#'
            }
            if (compile) {
                if (this._type)
                    _btnObj.onclick = 'Mixly.Electron.ArduShell.initUpload()';
                else
                    _btnObj.onclick = 'Mixly.Electron.ArduShell.initUpload()';

                if (Mixly.Env.hasSocketServer === 'true')
                    _btnObj.onclick = 'Mixly.WebSocket.ArduShell.upload()';
            } else {
                if (this._type)
                    _btnObj.onclick = 'Mixly.Electron.BU.initUpload()';
                else
                    _btnObj.onclick = 'Mixly.Web.BU.upload()';

                if (Mixly.Env.hasSocketServer === 'true')
                    _btnObj.onclick = 'Mixly.WebSocket.BU.upload()';
            }
            _leftBtnArr.push(_btnObj);
        }

        if (simulate && compile && this._type) {
            let _btnObj = {
                //【仿真】按钮
                class: 'icon-play-circled',
                id: 'simulate_btn',
                title: '',
                href: '#',
                onclick: 'Mixly.AvrSimulate.initSimulate()'
            }
            _leftBtnArr.push(_btnObj);
        }

        if (run || cancel) {
            let _btnObjArr = [
                {
                    //【运行】按钮
                    class: 'icon-play-circled',
                    id: 'run_btn',
                    title: '',
                    href: '#',
                    onclick: 'Mixly.Electron.PythonShell.run()'
                },
                {
                    //【停止】按钮
                    class: 'icon-cancel',
                    id: 'stop_btn',
                    title: '',
                    href: '#',
                    onclick: 'Mixly.Electron.PythonShell.stop()'
                }
            ]
            _leftBtnArr = [..._leftBtnArr, ..._btnObjArr];
        } else {
            let _btnObj = {
                //【串口】按钮
                class: 'icon-usb',
                id: 'serial_btn',
                title: '',
                href: '#',
                onclick: 'Mixly.Electron.Serial.openTool()'
            }
            if (!this._type)
               _btnObj.onclick = 'Mixly.Web.Serial.openTool()';

           if (Mixly.Env.hasSocketServer === 'true')
                _btnObj.onclick = 'Mixly.WebSocket.Serial.openTool()';

            _leftBtnArr.push(_btnObj);
        }

        _leftBtnArr.push({
            //【状态栏】按钮
            class: 'icon-window',
            id: 'statusbar_btn',
            title: '',
            href: '#',
            onclick: 'Mixly.StatusBar.show(0)'
        });

        // 第一列储存界面缩小后折叠后的按钮dom，第二列储存未折叠的按钮dom
        let _leftNavBtn = ['', ''];
        // 默认的按钮配置样式
        let _defaultLeftBtn = {
            class: '',
            id: 'id',
            title: '',
            href: '#',
            onclick: ''
        }
        for (let i = 0; i < _leftBtnArr.length; i++) {
            if (typeof _leftBtnArr[i] !== 'object') {
                continue;
            }
            let _config = {};
            for (let key in _defaultLeftBtn) {
                _config[key] = _leftBtnArr[i][key] ?? _defaultLeftBtn[key];
            }
            _leftNavBtn[0] += '<dd lay-unselect>'
                + `<a href="${_config.href}" class="${_config.class}" id="operate_${_config.id}" onclick="${_config.onclick}"></a>`
                + '</dd>';
            _leftNavBtn[1] += `<li class="layui-nav-item" id="li_${_config.id}" lay-unselect>
                                    <a href="${_config.href}" class="${_config.class}" id="${_config.id}" title="${_config.title}" onclick="${_config.onclick}"></a>
                                </li>`
        }

        let _rightNavBtn = '';
        let _rightBtnArr = [];

        //【设置】下拉菜单
        _rightBtnArr.push({
            class: '',
            id: 'setting_btn',
            title: '',
            href: 'javascript:;',
            onclick: '',
            children: [
                {
                    //【语言】按钮
                    class: 'icon-language',
                    id: 'language_btn',
                    title: '',
                    href: '#',
                    onclick: 'Mixly.NavEvents.onclickChangeLang()'
                },
                {
                    //【主题】按钮
                    class: 'icon-art-gallery',
                    id: 'theme_btn',
                    title: '',
                    href: '#',
                    onclick: 'Mixly.NavEvents.onclickChangeTheme()'
                },
                {
                    //【代码】按钮
                    class: 'icon-code',
                    id: 'changemod_btn',
                    title: '',
                    href: '#',
                    onclick: 'changeMod()'
                }
            ]
        });

        if (this._type) {
            if (thirdPartyLibrary) {
                _rightBtnArr[0].children = [
                    ..._rightBtnArr[0].children,
                    ...[
                        {
                            //【导入库】按钮
                            class: 'icon-download',
                            id: 'import_libraries_btn',
                            title: '',
                            href: '#',
                            onclick: 'open_lib()'
                        },
                        {
                            //【管理库】按钮
                            class: 'icon-menu',
                            id: 'manage_libraries_btn',
                            title: '',
                            href: '#',
                            onclick: 'manageLibraries()'
                        }
                    ]
                ];
            }
            _rightBtnArr[0].children.push({
                //【窗口尺寸】按钮
                class: 'icon-popup',
                id: 'windows_size_btn',
                title: '',
                href: '#',
                onclick: 'Mixly.NavEvents.onclickChangeWinSize()'
            });

            if (burn && typeof Mixly.Config.BOARD?.burn?.special === 'object')
                _rightBtnArr[0].children.push({
                    //【其它固件】按钮
                    class: 'icon-upload-1',
                    id: 'other_burn_btn',
                    title: '',
                    href: '#',
                    onclick: 'Mixly.Electron.BU.burnWithSpecialBin()'
                });
        }

        if (Mixly.Env.hasSocketServer === 'true') {
            _rightBtnArr[0].children.push({
                // WebSocket版的【连接】按钮
                class: 'icon-link',
                id: 'socket_connect_btn',
                title: '',
                href: '#',
                onclick: 'Mixly.WebSocket.Socket.clickConnect()'
            });
        }

        //【文件】下拉菜单
        _rightBtnArr.push({
            class: '',
            id: 'file_btn',
            title: '',
            href: 'javascript:;',
            onclick: '',
            children: []
        });

        if (Mixly.Env.isClient) {
            _rightBtnArr[1].children = [
                ..._rightBtnArr[1].children,
                ...[
                    {
                        //【新建】按钮
                        class: 'icon-doc-new',
                        id: 'new_btn',
                        title: '',
                        href: '#',
                        onclick: 'Mixly.Electron.File.newFile()'
                    },
                    {
                        //【打开】按钮
                        class: 'icon-folder-open-empty',
                        id: 'open_btn',
                        title: '',
                        href: '#',
                        onclick: 'Mixly.Electron.File.loadFile()'
                    },
                    {
                        //【保存】按钮
                        class: 'icon-floppy',
                        id: 'save_btn',
                        title: '',
                        href: '#',
                        onclick: 'Mixly.Electron.File.saveFile()'
                    },
                    {
                        //【另存为】按钮
                        class: 'icon-floppy',
                        id: 'save_as_btn',
                        title: '',
                        href: '#',
                        onclick: 'Mixly.Electron.File.saveAs(null, indexText["另存为"], "")'
                    }
                ]

            ]
        } else {
            _rightBtnArr[1].children = [
                ..._rightBtnArr[1].children,
                ...[
                    {
                        //【新建】按钮
                        class: 'icon-doc-new',
                        id: 'new_btn',
                        title: '',
                        href: '#',
                        onclick: 'Mixly.NavEvents.onclickNewFile()'
                    },
                    {
                        //【打开】按钮
                        class: 'icon-folder-open-empty',
                        id: 'open_btn',
                        title: '',
                        href: '#',
                        onclick: 'loadFile()'
                    },
                    {//【保存xml】按钮
                        class: 'icon-floppy',
                        id: 'save_xml_btn',
                        title: '',
                        href: '#',
                        onclick: 'save()'
                    }
                ]
            ];

            if (py) {
                _rightBtnArr[1].children.push({
                    //【保存py】按钮
                    class: 'icon-file-code',
                    id: 'save_py_btn',
                    title: '',
                    href: '#',
                    onclick: 'mixlyjs.savePyFileAs()'
                });
            }

            if (ino) {
                _rightBtnArr[1].children.push({
                    //【保存ino】按钮
                    class: 'icon-file-code',
                    id: 'save_ino_btn',
                    title: '',
                    href: '#',
                    onclick: 'mixlyjs.saveInoFileAs()'
                });
            }

            if (!compile && hex) {
                _rightBtnArr[1].children.push({
                    //【保存hex】按钮
                    class: 'icon-file-code',
                    id: 'save_hex_btn',
                    title: '',
                    href: '#',
                    onclick: 'mixlyjs.compileMicrobitPy()'
                });
            }

            if (img) {
                _rightBtnArr[1].children.push({
                    //【保存img】按钮
                    class: 'icon-floppy',
                    id: 'save_img_btn',
                    title: '',
                    href: '#',
                    onclick: 'mixlyjs.saveBlockImg()'
                });
            }
        }

        let _defaultRightBtn = {
            class: '',
            id: 'id',
            title: '',
            href: '',
            onclick: '',
            children: []
        };

        for (let i = 0; i < _rightBtnArr.length; i++) {
            let _config = {};
            for (let key in _defaultRightBtn) {
                if (typeof _defaultRightBtn[key] === "object") {
                    if (_rightBtnArr[i][key] === undefined) {
                        _config[key] = _defaultRightBtn[key];
                    } else {
                        _config[key] = {};
                        for (let childKey in _defaultRightBtn[key]) {
                            _config[key][childKey] = _rightBtnArr[i][key][childKey] ?? _defaultRightBtn[key][childKey];
                        }
                    }
                } else {
                    _config[key] = _rightBtnArr[i][key] ?? _defaultRightBtn[key];
                }
            }
            _rightNavBtn += `<li class="layui-nav-item" style="float:right" lay-unselect>
                            <a href="javascript:;" id="${_rightBtnArr[i].id}"></a>
                            <dl class="layui-nav-child">`;
            for (let j = 0; j < _rightBtnArr[i].children.length; j++) {
                let {
                    id,
                    title,
                    href,
                    onclick
                } = _rightBtnArr[i].children[j];
                let labelClass = _rightBtnArr[i].children[j].class;
                _rightNavBtn += `<dd lay-unselect>
                                    <a href='${href}' id='${id}' class='${labelClass}' title='${title}' onclick='${onclick}'></a>
                                </dd>`;
            }
            _rightNavBtn += '</dl></li>';
        }

        let _navStr = `
        <li class="layui-nav-item" lay-unselect>
            <a id="mixly-path" style="cursor:pointer;" onclick="onbeforeunload()">Mixly</a>
        </li>
        <li style="display:none" id="tab_blocks" lay-unselect></li>
        <li style="display:none" id="tab_arduino" lay-unselect></li>
        <li style="display:none" id="tab_xml"></li>
        <li class="layui-nav-item" id="li_operate" style="display:none;" lay-unselect>
            <a href="javascript:;" id="operate_btn">
                <span class="layui-nav-more"></span>
            </a>
            <dl class="layui-nav-child">
                <!-- 二级菜单 -->
                ${_leftNavBtn[0]}
            </dl>
        </li>
        ${_leftNavBtn[1]}
        <a id="copyright"></a>
        ${_rightNavBtn}
        <li class="layui-nav-item" lay-unselect>
            <select id="languageMenu" style="display:none">
            </select>
        </li>
        `;

        navDom.innerHTML = _navStr;
        return {
            leftBtn: _leftBtnArr,
            rightBtn: _rightBtnArr
        };
    }
}

Mixly.Nav = {};

function navInit() {
    let isClient = Mixly.Env.isClient;
    let navConfig = Mixly.Config.BOARD?.nav ?? {};
    let thirdPartyBoard = Mixly.Config.BOARD?.thirdPartyBoard ?? false;
    let navObj = new MixlyNavGenerator("nav", isClient, navConfig, thirdPartyBoard);
    Mixly.Nav.navBtnConfig = navObj.init();
}

navInit();

Mixly.Nav.MsgById = {
    undo_btn: 'undo',
    redo_btn: 'redo',
    connect_btn: 'connect',
    burn_btn: 'burn',
    compile_btn: 'compile',
    upload_btn: 'upload',
    run_btn: 'run',
    stop_btn: 'stop',
    serial_btn: 'catSerialPort',
    statusbar_btn: 'statusbar',
    file_btn: 'file',
    new_btn: 'new',
    open_btn: 'open',
    save_btn: 'save',
    save_xml_btn: 'save_blocks',
    save_ino_btn: 'save_ino',
    save_img_btn: 'save_img',
    save_py_btn: 'save_py',
    save_hex_btn: 'save_hex',
    save_as_btn: 'save_as',
    setting_btn: 'setting',
    language_btn: 'language',
    theme_btn: 'theme',
    import_libraries_btn: 'import_libraries',
    manage_libraries_btn: 'manage_libraries',
    windows_size_btn: 'windowSize',
    socket_connect_btn: 'connect',
    other_burn_btn: 'other_firmware'
}

layui.use('form', function () {
    var form = layui.form;
    var boardNames = $('#boards-type');
    if (boardNames) {
        boardNames.empty();
        if (Mixly.Config.BOARD?.board != undefined) {
            for (let key in Mixly.Config.BOARD.board) {
                if (typeof Mixly.Config.BOARD.board[key] == 'object') {
                    let boardStr = `<optgroup label="${key}">`;
                    for (let childKey in Mixly.Config.BOARD.board[key]) {
                        boardStr += `<option value="${Mixly.Config.BOARD.board[key][childKey]}">${childKey}</option>`;
                    }
                    boardStr += `</optgroup>`;
                    boardNames.append(boardStr);
                } else {
                    boardNames.append(`<option value="${Mixly.Config.BOARD.board[key]}">${key}</option>`);
                }
            }
        } else {
            boardNames.append(`<option value="${Mixly.Config.BOARD.boardName}">${Mixly.Config.BOARD.boardName}</option>`);
        }
        form.render();
    }
});

showTag();

function showTag() {
    tagSelect('tab_blocks', 'tab_blocks');
    tagSelect('tab_arduino', 'tab_arduino');
    if (document.getElementById('changemod_btn')
        && document.getElementById('changemod_btn').value == 0) {
        tagSelect('changemod_btn', 'tab_blocks');
    } else {
        tagSelect('changemod_btn', 'tab_arduino');
    }
    if (document.getElementById('boardSelector'))
        document.getElementById('boardSelector').placeholder = MSG['fn'];
    tagSelect('operate_btn', 'operate');
    tagSelect('operate_save_ser_btn', 'save_ser');
    tagSelect('change_board_btn', 'change_board');
    tagSelect('view_btn', 'view_btn');
    tagSelect('save_ser_btn', 'save_ser');
    tagSelect('view_file', 'view_file');

    if (typeof Mixly.Nav.navBtnConfig.leftBtn === "object") {
        let len = Mixly.Nav.navBtnConfig.leftBtn.length;
        for (let i = 0; i < len; i++) {
            let id = Mixly.Nav.navBtnConfig.leftBtn[i].id;
            let msg = Mixly.Nav.MsgById[id];
            if (msg) {
                tagSelect(id, msg);
                tagSelect('operate_' + id, msg);
            }
        }
    }

    if (typeof Mixly.Nav.navBtnConfig.rightBtn === "object") {
        let { rightBtn } = Mixly.Nav.navBtnConfig;
        let len = rightBtn.length;
        for (let i = 0; i < len; i++) {
            let parentId = rightBtn[i].id;
            let parentMsg = Mixly.Nav.MsgById[parentId];
            if (parentMsg)
                tagSelect(parentId, parentMsg);
            let { children } = Mixly.Nav.navBtnConfig.rightBtn[i];
            if (typeof children !== "object") continue;
            let childrenLen = children.length;
            for (let j = 0; j < childrenLen; j++) {
                let childId = children[j].id;
                let childMsg = Mixly.Nav.MsgById[childId];
                if (childMsg)
                    tagSelect(childId, childMsg);
            }
        }
    }
}

function tagSelect(id, msg) {
    var tagObject = document.getElementById(id);
    if (tagObject) {
        if (tagObject.tagName == "A" && tagObject.parentNode.innerHTML.indexOf("<dl") != -1) {
            tagObject.innerHTML = MSG[msg] + "<span class=\"layui-nav-more\"></span>";
        } else {
            document.getElementById(id).innerHTML = MSG[msg];
        }
    }
}
