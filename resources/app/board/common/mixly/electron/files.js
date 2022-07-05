goog.provide('Mixly.Electron.File');
goog.require('Mixly.Modules');
goog.require('Mixly.LayerExtend');
goog.require('Mixly.Config');
Mixly.Electron.File.defaultPath = Mixly.Env.clientPath + "/sample/";
Mixly.Electron.File.nowPath = Mixly.Env.clientPath + "/sample/";
Mixly.Electron.File.imgPath = "";
Mixly.Electron.File.mixPath = "";
Mixly.Electron.File.codePath = "";
Mixly.Electron.File.hexPath = "";

Mixly.Electron.File.filters = [];

try {
    var obj1 = { name: 'Mixly File', extensions: ['mix'] };
    Mixly.Electron.File.filters.push(obj1);
    if (Mixly.Config.BOARD?.nav?.save?.py) {
        var obj = { name: 'Python File', extensions: ['py'] };
        Mixly.Electron.File.filters.push(obj);
    }
    if (Mixly.Config.BOARD?.nav?.save?.ino) {
        var obj = { name: 'Arduino File', extensions: ['ino'] };
        Mixly.Electron.File.filters.push(obj);
    }
    if (Mixly.Config.BOARD?.nav?.save?.hex) {
        var obj = { name: 'Hexadecimal File', extensions: ['hex'] };
        Mixly.Electron.File.filters.push(obj);
    }
    if (Mixly.Config.BOARD?.nav?.save?.bin) {
        var obj = { name: 'Binary File', extensions: ['bin'] };
        Mixly.Electron.File.filters.push(obj);
    }
    if (Mixly.Config.BOARD?.nav?.save?.img) {
        var obj = { name: 'Image File', extensions: ['png'] };
        Mixly.Electron.File.filters.push(obj);
    }
} catch (e) {
    console.log(e);
}

const dialog = Mixly.Env.isClient && require('@electron/remote').dialog;

Mixly.Electron.File.saveAs = function (extension, boxTitle, data) {
    //let mainWindow = new BrowserWindow();
    var limit = [];
    var fileType = "All Files";
    var savePath = "";
    if (Mixly.Modules.fs.existsSync(Mixly.Electron.File.nowPath)) {
        savePath = Mixly.Electron.File.nowPath;
    } else {
        savePath = Mixly.Electron.File.defaultPath;
    }
    if (Mixly.Env.currentPlatform == "win32") {
        try {
            savePath = savePath.replace(/\//g, "\\");
        } catch (e) {
            console.log(e);
        }
    }
    if (extension) {
        switch (extension) {
            case "py":
                fileType = "Python File";
                break;
            case "ino":
                fileType = "Arduino File";
                break;
            case "hex":
                fileType = "Hexadecimal File";
                break;
            case "png":
                fileType = "Image File";
                break;
            default:
                fileType = "Mixly File";
        }
        extension = extension.toLowerCase();
        limit.push(extension);
    }
    /*
    let loadIndex = layer.load(1, { 
        shade: [0.3, '#000']
    });
    */
    if (extension) {
        Mixly.Modules.currentWindow.focus();
        dialog.showSaveDialog(Mixly.Modules.currentWindow, {
            title: boxTitle,
            defaultPath: savePath, // 打开文件选择器的哪个路径 需要输入一个有效路径
            //buttonLabel: indexText['确定'],
            // 限制能够选择的文件为某些类型
            filters: [
                { name: fileType, extensions: limit }
            ],
            nameFieldLabel: indexText['替换文件'], // “文件名”文本字段前面显示的文本自定义标签
            showsTagField: true, // 显示标签输入框，默认值为true
            properties: ['showHiddenFiles'],
            message: boxTitle
        }).then(result => {
            //layer.close(loadIndex);
            let res = result.filePath;
            console.log('res', res);
            if (res) {
                try {
                    Mixly.Electron.File.nowPath = res.substring(0, res.lastIndexOf("\\") + 1);
                } catch (e) {
                    console.log(e);
                }
                if (extension == "png") {
                    Mixly.Electron.File.saveBlockPng(res, true);
                    return;
                }
                try {
                    Mixly.Modules.fs.writeFileSync(res, data);
                    Mixly.Electron.File.updatePath(extension, res);
                    Mixly.Title.updeteFilePath(res);
                } catch (e) {
                    layer.msg(indexText['写文件出错了，错误是：'] + e, {
                        time: 1000
                    });
                }
            }
        }).catch(err => {
            console.log(err);
            //layer.close(loadIndex);
        });
    } else {
        console.log(Mixly.Electron.File.filters);
        Mixly.Modules.currentWindow.focus();
        dialog.showSaveDialog(Mixly.Modules.currentWindow, {
            title: boxTitle,
            defaultPath: savePath, // 打开文件选择器的哪个路径 需要输入一个有效路径
            //buttonLabel: indexText['确定'],
            // 限制能够选择的文件为某些类型
            filters: Mixly.Electron.File.filters,
            nameFieldLabel: indexText['替换文件'], // “文件名”文本字段前面显示的文本自定义标签
            showsTagField: true, // 显示标签输入框，默认值为true
            properties: ['showHiddenFiles'],
            message: boxTitle
        }).then(result => {
            //layer.close(loadIndex);
            let res = result.filePath;
            console.log('res', res);

            if (res) {
                try {
                    Mixly.Electron.File.nowPath = res.substring(0, res.lastIndexOf("\\") + 1);
                } catch (e) {
                    console.log(e);
                }
                if (res.indexOf(".py") != -1) {
                    data = Mixly.Electron.File.getPy();
                    extension = "py";
                } else if (res.indexOf(".ino") != -1) {
                    data = Mixly.Electron.File.getIno();
                    extension = "ino";
                } else if (res.indexOf(".hex") != -1) {
                    if (Mixly.Config.BOARD?.nav?.compile) {
                        Mixly.Electron.ArduShell.saveBinOrHex(res);
                        return;
                    }
                    data = Mixly.Electron.File.getHex();
                    extension = "hex";
                } else if (res.indexOf(".png") != -1) {
                    Mixly.Electron.File.saveBlockPng(res, true);
                    return;
                } else if (res.indexOf(".bin") != -1) {
                    Mixly.Electron.ArduShell.saveBinOrHex(res);
                    return;
                } else {
                    data = Mixly.Electron.File.getMix("project");
                    extension = "mix";
                }
                try {
                    Mixly.Modules.fs.writeFileSync(res, data);
                    Mixly.Electron.File.imgPath = "";
                    Mixly.Electron.File.hexPath = "";
                    Mixly.Electron.File.codePath = "";
                    Mixly.Electron.File.mixPath = "";
                    Mixly.Electron.File.updatePath(extension, res);
                    Mixly.Title.updeteFilePath(res);
                } catch (e) {
                    layer.msg(indexText['写文件出错了，错误是：'] + err, {
                        time: 1000
                    });
                }
            }
        }).catch(err => {
            console.log(err);
            //layer.close(loadIndex);
        });
    }
}

Mixly.Electron.File.save = function (extension) {
    extension = extension.toLowerCase();
    if (Mixly.Electron.File.havePath(extension)) {
        var nowPath = Mixly.Electron.File.getPath(extension);
        if (extension == "png") {
            Mixly.Electron.File.saveBlockPng(nowPath, true);
            return;
        }
        try {
            let data = Mixly.Electron.File.getData(extension);
            Mixly.Modules.fs.writeFileSync(nowPath, data);
            Mixly.Title.updeteFilePath(nowPath);
            layer.msg(indexText['保存成功'] + '！', {
                time: 1000
            });
        } catch (e) {
            layer.msg(indexText['写文件出错了，错误是：'] + e, {
                time: 1000
            });
        }

    } else {
        Mixly.Electron.File.saveAs(extension, indexText["保存"], Mixly.Electron.File.getData(extension));
    }
}

Mixly.Electron.File.setPath = function (path) {
    pathStr = path.toLowerCase();
    if (pathStr.indexOf(".png") != -1) {
        Mixly.Electron.File.imgPath = path;
    } else if (pathStr.indexOf(".hex") != -1) {
        Mixly.Electron.File.hexPath = path;
    } else if (pathStr.indexOf(".ino") != -1 || pathStr.indexOf(".py") != -1) {
        Mixly.Electron.File.codePath = path;
    } else if (pathStr.indexOf(".mix") != -1 || pathStr.indexOf(".xml") != -1) {
        Mixly.Electron.File.mixPath = path;
    }
}

Mixly.Electron.File.updatePath = function (extension, newPath) {
    extension = extension.toLowerCase();
    switch (extension) {
        case "png":
            Mixly.Electron.File.imgPath = newPath;
            break;
        case "hex":
            Mixly.Electron.File.hexPath = newPath;
            break;
        case "ino":
            Mixly.Electron.File.codePath = newPath;
            break;
        case "py":
            Mixly.Electron.File.codePath = newPath;
            break;
        case "mix":
            Mixly.Electron.File.mixPath = newPath;
            break;
        case "xml":
            Mixly.Electron.File.mixPath = newPath;
            break;
    }
}

Mixly.Electron.File.havePath = function (extension) {
    extension = extension.toLowerCase();
    switch (extension) {
        case "png":
            if (Mixly.Electron.File.imgPath != "") {
                return true;
            } else {
                return false;
            }
        case "hex":
            if (Mixly.Electron.File.hexPath != "") {
                return true;
            } else {
                return false;
            }
        case "ino":
            if (Mixly.Electron.File.codePath.indexOf(".ino") != -1) {
                return true;
            } else {
                return false;
            }
        case "py":
            if (Mixly.Electron.File.codePath.indexOf(".py") != -1) {
                return true;
            } else {
                return false;
            }
        default:
            if (Mixly.Electron.File.mixPath != "") {
                return true;
            } else {
                return false;
            }
    }
}

Mixly.Electron.File.getPath = function (extension) {
    extension = extension.toLowerCase();
    switch (extension) {
        case "png":
            return Mixly.Electron.File.imgPath;
        case "hex":
            return Mixly.Electron.File.hexPath;
        case "ino":
            return Mixly.Electron.File.codePath;
        case "py":
            return Mixly.Electron.File.codePath;
        default:
            return Mixly.Electron.File.mixPath;
    }
}

Mixly.Electron.File.getData = function (extension) {
    extension = extension.toLowerCase();
    switch (extension) {
        case "hex":
            return Mixly.Electron.File.getHex();
        case "ino":
            return Mixly.Electron.File.getIno();
        case "py":
            return Mixly.Electron.File.getPy();
        default:
            return Mixly.Electron.File.getMix("project");
    }
}

const map = { "0": 52, "1": 53, "2": 54, "3": 55, "4": 56, "5": 57, "6": 58, "7": 59, "8": 60, "9": 61, "A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6, "H": 7, "I": 8, "J": 9, "K": 10, "L": 11, "M": 12, "N": 13, "O": 14, "P": 15, "Q": 16, "R": 17, "S": 18, "T": 19, "U": 20, "V": 21, "W": 22, "X": 23, "Y": 24, "Z": 25, "a": 26, "b": 27, "c": 28, "d": 29, "e": 30, "f": 31, "g": 32, "h": 33, "i": 34, "j": 35, "k": 36, "l": 37, "m": 38, "n": 39, "o": 40, "p": 41, "q": 42, "r": 43, "s": 44, "t": 45, "u": 46, "v": 47, "w": 48, "x": 49, "y": 50, "z": 51, "+": 62, "/": 63 }
function base64to2(base64) {
    let len = base64.length * .75 // 转换为int8array所需长度
    base64 = base64.replace(/=*$/, '') // 去掉=号(占位的)

    const int8 = new Int8Array(len) //设置int8array视图

    let arr1, arr2, arr3, arr4, p = 0

    for (let i = 0; i < base64.length; i += 4) {
        arr1 = map[base64[i]] // 每次循环 都将base644个字节转换为3个int8array直接
        arr2 = map[base64[i + 1]]
        arr3 = map[base64[i + 2]]
        arr4 = map[base64[i + 3]]

        // 假设数据arr 数据 00101011 00101111 00110011 00110001
        int8[p++] = arr1 << 2 | arr2 >> 4
        // 上面的操作 arr1向左边移动2位 变为10101100
        // arr2 向右移动4位：00000010
        // | 为'与'操作: 10101110
        int8[p++] = arr2 << 4 | arr3 >> 2
        int8[p++] = arr3 << 6 | arr4
    }

    return int8
}

Mixly.Electron.File.saveBlockPng = function (path, saveAs) {
    //this value you can render a much higher resolution image, which looks better on high density displays
    var scaleFactor = 2;

    //Any modifications are executed on a deep copy of the element
    var cp = Blockly.mainWorkspace.svgBlockCanvas_.cloneNode(true);
    cp.removeAttribute("width");
    cp.removeAttribute("height");
    cp.removeAttribute("transform");
    console.log(cp)

    //It is important to create this element in the SVG namespace rather than the XHTML namespace
    var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
    //I've manually pasted codethemicrobit.com's CSS for blocks in here, but that can be removed as necessary
    //styleElem.textContent = Blockly.Css.CONTENT.join('') + ".blocklyToolboxDiv {background: rgba(0, 0, 0, 0.05);}.blocklyMainBackground {stroke:none !important;}.blocklyTreeLabel, .blocklyText, .blocklyHtmlInput {font-family:'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace !important;}.blocklyText { font-size:1rem !important;}.rtl .blocklyText {text-align:right;} .blocklyTreeLabel { font-size:1.25rem !important;} .blocklyCheckbox {fill: #ff3030 !important;text-shadow: 0px 0px 6px #f00;font-size: 17pt !important;}";
    Blockly.Css.CONTENT = [
        ".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "}", ".blocklyNonSelectable {", "user-select: none;", "-moz-user-select: none;", "-webkit-user-select: none;", "-ms-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;",
        "overflow: visible;", "top: 0;", "left: 0;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: PingFang SC, sans-serif;", "font-size: 9pt;", "opacity: 0.9;", "padding: 2px;", "position: absolute;", "z-index: 100000;", "}", ".blocklyResizeSE {",
        "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #888;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;',
        "cursor: grab;", "cursor: -webkit-grab;", "cursor: -moz-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "cursor: -moz-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "cursor: -moz-grabbing;", "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
        "cursor: -moz-grabbing;", "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyToolboxDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,",
        ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: PingFang SC, sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;",
        "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklyFlyoutButton {", "fill: #888;", "cursor: default;", "}", ".blocklyFlyoutButtonShadow {", "fill: #666;", "}", ".blocklyFlyoutButton:hover {", "fill: #aaa;", "}", ".blocklyFlyoutLabel {", "cursor: default;", "}", ".blocklyFlyoutLabelBackground {", "opacity: 0;", "}", ".blocklyFlyoutLabelText {", "fill: #000;", "}", ".blocklySvg text, .blocklyBlockDragSurface text {", "user-select: none;", "-moz-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;",
        "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;", "}", ".blocklyCommentTextarea {", "background-color: #ffc;", "border: 0;", "margin: 0;", "padding: 2px;",
        "resize: none;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: PingFang SC, sans-serif;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #666;", "fill-opacity: .8;", "}", ".blocklyMainWorkspaceScrollbar {", "z-index: 20;", "}", ".blocklyFlyoutScrollbar {", "z-index: 30;",
        "}", ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;", "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;",
        "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;", "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;", "stroke-width: 2;", "stroke-linecap: round;", "pointer-events: none;",
        "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #272727;", "overflow-x: visible;", "overflow-y: auto;", "position: absolute;", "z-index: 70;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {",
        "outline: none;", "}", ".blocklyTreeRow {", "height: 36px;", "line-height: 32px;", "margin-bottom: 6px;", "padding-right: 8px;", "border-radius: 4px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {", "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;", "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #ccc;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;",
        "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {",
        "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: PingFang SC, sans-serif;", "font-size: 16px;", "padding: 0 8px;", "vertical-align: middle;", "}", ".blocklyTreeSelected .blocklyTreeLabel {",
        "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "border: 1px solid #666;", "border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;", "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;",
        "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;", "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;",
        "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {",
        "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {", "opacity: 0.3;", "-moz-opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {",
        "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {",
        "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;", "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;",
        "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""];
    styleElem.textContent = Blockly.Css.CONTENT.join('');
    // console.log(Blockly.Css.CONTENT);
    cp.insertBefore(styleElem, cp.firstChild);

    //Creates a complete SVG document with the correct bounds (it is necessary to get the viewbox right, in the case of negative offsets)
    var bbox = Blockly.mainWorkspace.svgBlockCanvas_.getBBox();
    var xml = new XMLSerializer().serializeToString(cp);
    xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + bbox.width + '" height="' + bbox.height + '" viewBox="' + bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" style="fill-opacity:0"></rect>' + xml + '</svg>';
    //If you just want the SVG then do console.log(xml)
    //Otherwise we render as an image and export to PNG
    var svgBase64 = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(xml)));
    //var img = document.createElement('img');
    var img = new Image();
    img.src = svgBase64;

    var canvas = document.createElement("canvas");
    canvas.width = Math.ceil(bbox.width) * scaleFactor;
    canvas.height = Math.ceil(bbox.height) * scaleFactor;
    var ctx = canvas.getContext('2d');
    ctx.scale(scaleFactor, scaleFactor);
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        var getData = base64to2(canvas.toDataURL("image/png").replace("data:image/png;base64,", ""));
        try {
            Mixly.Modules.fs.writeFileSync(path, getData);
            if (saveAs) {
            } else {
                layer.msg(indexText['保存成功'] + '！', {
                    time: 1000
                });
            }
        } catch (e) {
            layer.msg(indexText['写文件出错了，错误是：'] + e, {
                time: 1000
            });
        }
    }
}

Mixly.Electron.File.getPy = function () {
    var code = "";
    if (document.getElementById('tab_arduino').className == 'tabon') {
        code = editor.getValue();
    } else {
        code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace) || '';
    }
    return code;
}

Mixly.Electron.File.getHex = function () {
    try {
        updateMain();
        var output = FS.getUniversalHex();
        return output;
    } catch (e) {
        alert(e.message);
        return "";
    }
}

Mixly.Electron.File.getIno = function () {
    var code = "";
    if (document.getElementById('tab_arduino').className == 'tabon') {
        code = editor.getValue();
    } else {
        code = Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace) || '';
    }
    return code;
}

Mixly.Electron.File.getMix = function (xmlType) {
    var xmlCodes = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
    var mixlyVersion = "Mixly 2.0";
    if (Mixly.Config.SOFTWARE?.version) {
        mixlyVersion = Mixly.Config.SOFTWARE.version;
    }
    if (xmlType === "project") {
        //var boardName = $("#cb_cf_boards").val();
        var boardName = '';
        boardName = Mixly.Config.BOARD.boardName;
        if (document.getElementById("boards-type")) {
            let boardType = $('#boards-type').find("option:selected").text();
            boardName += (boardType !== boardName)? ('@' + boardType):"";
            xmlCodes = xmlCodes.replace("<xml xmlns=\"https://developers.google.com/blockly/xml\"", "<xml version=\"" + mixlyVersion + "\" board=\"" + boardName + "\" xmlns=\"http://www.w3.org/1999/xhtml\"");
        } else {
            xmlCodes = xmlCodes.replace("<xml xmlns=\"https://developers.google.com/blockly/xml\"", "<xml version=\"" + mixlyVersion + "\" board=\"" + boardName + "\" xmlns=\"http://www.w3.org/1999/xhtml\"");
        }
    } else if (xmlType === "lib")
        xmlCodes = xmlCodes.replace("<xml xmlns=\"https://developers.google.com/blockly/xml\"", "<xml version=\"" + mixlyVersion + "\" board=\"" + "mylib" + "\" xmlns=\"http://www.w3.org/1999/xhtml\"");
    return xmlCodes;
}

Mixly.Electron.File.saveImg = function () {
    //Mixly.Electron.File.save("png");
    Mixly.Electron.File.saveAs("png", indexText["保存"], Mixly.Electron.File.getData("png"));
}

Mixly.Electron.File.saveAsImg = function () {
    Mixly.Electron.File.saveAs("png", indexText["另存为"], Mixly.Electron.File.getData("png"));
}

Mixly.Electron.File.saveHex = function () {
    Mixly.Electron.File.save("hex");
}

Mixly.Electron.File.saveAsHex = function () {
    Mixly.Electron.File.saveAs("hex", indexText["另存为"], Mixly.Electron.File.getData("hex"));
}

Mixly.Electron.File.saveIno = function () {
    Mixly.Electron.File.save("ino");
}

Mixly.Electron.File.saveAsIno = function () {
    Mixly.Electron.File.saveAs("ino", indexText["另存为"], Mixly.Electron.File.getData("ino"));
}

Mixly.Electron.File.savePy = function () {
    Mixly.Electron.File.save("py");
}

Mixly.Electron.File.saveAsPy = function () {
    Mixly.Electron.File.saveAs("py", indexText["另存为"], Mixly.Electron.File.getData("py"));
}

Mixly.Electron.File.saveMix = function () {
    Mixly.Electron.File.save("mix");
}

Mixly.Electron.File.saveAsMix = function () {
    Mixly.Electron.File.saveAs("mix", indexText["另存为"], Mixly.Electron.File.getData("mix"));
}

Mixly.Electron.File.newFile = function () {
    layer.confirm(MSG['confirm_newfile'], {
        title: false,
        shade: Mixly.LayerExtend.shade,
        btn: [MSG['newfile_yes'], MSG['newfile_no']]
        , btn2: function (index, layero) {
            layer.close(index);
        }
    }, function (index, layero) {
        mixlyjs.createFn();
        layer.close(index);

        Mixly.Electron.File.imgPath = "";
        Mixly.Electron.File.mixPath = "";
        Mixly.Electron.File.codePath = "";
        Mixly.Electron.File.hexPath = "";
        Mixly.Title.updateTitle(Mixly.Title.title);
    });
    console.log(layui);
    console.log(layer);
    console.log(layui.element);
}

Mixly.Electron.File.loadFile = function () {
    var fileType = [];
    for (var i = 0; i < Mixly.Electron.File.filters.length; i++) {
        fileType.push(Mixly.Electron.File.filters[i]["extensions"][0]);
    }
    fileType.push("xml");
    //console.log(fileType);
    for (var i = fileType.length - 1; i > -1; i--) {
        if (fileType[i] == "png") {
            fileType.splice(i, 1);
        }
    }
    //console.log(fileType);
    var savePath = "";
    if (Mixly.Modules.fs.existsSync(Mixly.Electron.File.nowPath)) {
        savePath = Mixly.Electron.File.nowPath;
    } else {
        savePath = Mixly.Electron.File.defaultPath;
    }
    if (Mixly.Env.currentPlatform == "win32") {
        try {
            savePath = savePath.replace(/\//g, "\\");
        } catch (e) {
            console.log(e);
        }
    }
    /*
    let loadIndex = layer.load(1, { 
        shade: [0.3, '#000']
    });
    */
    Mixly.Modules.currentWindow.focus();
    dialog.showOpenDialog(Mixly.Modules.currentWindow, {
        title: indexText['打开'],
        // 默认打开的路径，比如这里默认打开下载文件夹
        defaultPath: savePath,
        //buttonLabel: indexText['确定'],
        // 限制能够选择的文件类型
        filters: [
            { name: 'Mixly File', extensions: fileType }
        ],
        properties: ['openFile', 'showHiddenFiles'],
        message: indexText['打开']
    }).then(result => {
        let res = result.filePaths[0];
        console.log('res', res);
        if (res) {
            try {
                Mixly.Electron.File.nowPath = res.replace(/\\/g, "/");
                Mixly.Electron.File.nowPath = res.substring(0, Mixly.Electron.File.nowPath.lastIndexOf("/") + 1);
            } catch (e) {
                console.log(e);
            }
            try {
                var pathShow = true;
                var text = Mixly.Modules.fs.readFileSync(res, 'utf-8');
                text = mixlyjs.translateQuote(text, true);
                var extension = "";
                if (res.indexOf(".py") != -1) {
                    extension = "py";
                    mixlyjs.renderIno(text);
                } else if (res.indexOf(".ino") != -1) {
                    extension = "ino";
                    mixlyjs.renderIno(text);
                } else if (res.indexOf(".hex") != -1) {
                    if (Mixly.Config.BOARD?.nav?.compile) {
                        Mixly.Electron.ArduShell.showUploadBox(res);
                        return;
                    } else {
                        extension = "hex";
                        loadHex("main.py", text);
                    }
                } else if (res.indexOf(".mix") != -1) {
                    extension = "mix";
                    var newboard = mixlyjs.getBoardFromXml(text);
                    if (newboard !== undefined) {
                        if (!mixlyjs.renderXml(decode(text))) {
                            pathShow = false;
                        }
                    } else {
                        alert(indexText["错误：无法从 mix 中读取板卡信息！！"]);
                    }
                } else if (res.indexOf(".xml") != -1) {
                    var newboard = mixlyjs.getBoardFromXml(text);
                    if (newboard !== undefined) {
                        if (!mixlyjs.renderXml(decode(text))) {
                            pathShow = false;
                        }
                    } else {
                        alert(indexText["错误：无法从 mix 中读取板卡信息！！"]);
                    }
                } else if (res.indexOf(".bin") != -1) {
                    Mixly.Electron.ArduShell.showUploadBox(res);
                    return;
                } else {
                    alert(indexText["无效的文件类型！(支持.ino|.xml|.mix|.py|.hex文件)"]);
                    return;
                }
                if (pathShow) {
                    Mixly.Electron.File.imgPath = "";
                    Mixly.Electron.File.mixPath = "";
                    Mixly.Electron.File.codePath = "";
                    Mixly.Electron.File.hexPath = "";
                    Mixly.Title.updateTitle(Mixly.Title.title);
                    Mixly.Electron.File.updatePath(extension, res);
                    Mixly.Title.updeteFilePath(res);
                }
            } catch (e) {
                console.log(e);
                Blockly.mainWorkspace.clear();
                alert(indexText["无效的mix文件"] + "!");
                Mixly.Electron.File.imgPath = "";
                Mixly.Electron.File.mixPath = "";
                Mixly.Electron.File.codePath = "";
                Mixly.Electron.File.hexPath = "";
                Mixly.Title.updateTitle(Mixly.Title.title);
            }
        }
        //layer.close(loadIndex);
    }).catch(err => {
        console.log(err);
        //layer.close(loadIndex);
    });
    
}

Mixly.Electron.File.saveFile = function () {
    if (Mixly.Env.isClient) {
        if (Mixly.Electron.File.havePath("png")) {
            Mixly.Electron.File.saveImg();
        } else if (Mixly.Electron.File.havePath("py")) {
            Mixly.Electron.File.savePy();
        } else if (Mixly.Electron.File.havePath("ino")) {
            Mixly.Electron.File.saveIno();
        } else if (Mixly.Electron.File.havePath("hex")) {
            Mixly.Electron.File.saveHex();
        } else if (Mixly.Electron.File.havePath("mix")) {
            Mixly.Electron.File.saveMix();
        } else {
            Mixly.Electron.File.saveAs(null, indexText["保存"], "");
        }
    } else {
        if (Mixly.Electron.File.havePath("png")) {
            mixlyjs.saveBlockImg();
        } else if (Mixly.Electron.File.havePath("py")) {
            mixlyjs.savePyFileAs();
        } else if (Mixly.Electron.File.havePath("ino")) {
        } else if (Mixly.Electron.File.havePath("hex")) {
            Mixly.Electron.File.saveHex();
        } else if (Mixly.Electron.File.havePath("mix")) {
            save();
        } else {
            Mixly.Electron.File.saveAs(null, indexText["保存"], "");
        }
    }
}