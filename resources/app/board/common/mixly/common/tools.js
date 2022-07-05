goog.provide('Mixly.Tools');
goog.require('Mixly.Config');

Mixly.Tools.getBoardType = () => {
    str = Mixly.Config.BOARD?.boardIndex;
    if (Mixly.Config.BOARD?.thirdPartyBoard === 'true') {
        return str.match(/(?<=\/board\/ThirdParty\/)[^?\/\\、*\"><|]+/g)[0];
    } else {
        return str.match(/(?<=\/board\/)[^?\/\\、*\"><|]+/g)[0];
    }
}

Mixly.Tools.getPy = () => {
    var code = "";
    if (document.getElementById('tab_arduino').className == 'tabon') {
        code = editor.getValue();
    } else {
        code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace) || '';
    }
    return code;
}

Mixly.Tools.getHex = () => {
    try {
        updateMain();
        var output = FS.getUniversalHex();
        return output;
    } catch (e) {
        alert(e.message);
        return "";
    }
}

Mixly.Tools.getIno = () => {
    var code = "";
    if (document.getElementById('tab_arduino').className == 'tabon') {
        code = editor.getValue();
    } else {
        code = Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace) || '';
    }
    return code;
}

Mixly.Tools.getMix = (xmlType) => {
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

Mixly.Tools.messageDecode = (s) => {
    if (s) {
        try {
            return decodeURIComponent(s.replace(/_([0-9a-fA-F]{2})/gm, '%$1'));
        } catch (e) {
        }
    }
    return s;
}

Mixly.Tools.strToByte = (str) => {
    var len, c;
    len = str.length;
    var bytes = [];
    for (var i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x010000 && c <= 0x10FFFF) {
            bytes.push(((c >> 18) & 0x07) | 0xF0);
            bytes.push(((c >> 12) & 0x3F) | 0x80);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000800 && c <= 0x00FFFF) {
            bytes.push(((c >> 12) & 0x0F) | 0xE0);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000080 && c <= 0x0007FF) {
            bytes.push(((c >> 6) & 0x1F) | 0xC0);
            bytes.push((c & 0x3F) | 0x80);
        } else {
            bytes.push(c & 0xFF);
        }
    }
    return new Int8Array(bytes);
}

Mixly.Tools.uint8ArrayToStr = (fileData) => {
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        var convert = (fileData[i]).toString(16);
        if (convert.length % 2 == 1)
            convert = "0" + convert;
        dataString = dataString + " " + convert.toUpperCase();
    }

    return dataString;

}