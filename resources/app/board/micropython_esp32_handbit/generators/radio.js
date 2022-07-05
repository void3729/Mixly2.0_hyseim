//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');


// 无线广播  接收消息
Blockly.Python['mpython_radio_rec'] = function (block) {
    Blockly.Python.definitions_['import_radio'] = 'import radio';
    // var rec = Blockly.Python.valueToCode(block, 'rec', Blockly.Python.ORDER_ATOMIC);

    var code = `radio.receive()`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 无线广播  发送 %1 
Blockly.Python['mpython_radio_send'] = function (block) {
    Blockly.Python.definitions_['import_radio'] = 'import radio';
    var send = Blockly.Python.valueToCode(block, 'send', Blockly.Python.ORDER_ATOMIC);
    var code = `radio.send(${send})` + '\n';

    return code;
};


// 设无线广播  频道为 %1 
Blockly.Python['mpython_radio_channel'] = function (block) {
    Blockly.Python.definitions_['import_radio'] = 'import radio';
    var channel = Blockly.Python.valueToCode(block, 'channel', Blockly.Python.ORDER_ATOMIC);
    var code = `radio.config(channel=${channel})` + '\n';

    return code;
};


// 无线广播 %1
Blockly.Python['mpython_radio_on_off'] = function (block) {
    Blockly.Python.definitions_['import_radio'] = 'import radio';
    var on_off = block.getFieldValue('on_off');
    var code = 'radio.' + on_off + '()\n';

    return code;
};

// 无线广播 收到任意消息
Blockly.Python['mpython_radio_recv'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    Blockly.Python.definitions_['import_radio'] = 'import radio';
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
    var doCode = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
    Blockly.Python.definitions_['def_radio_recv'] = 'def radio_recv(_msg):\n' + doCode;
    Blockly.Python.definitions_['def_radio_callback'] = '_radio_msg_list = []\n' +
        'def radio_callback(_msg):\n' +
        '    global _radio_msg_list\n' +
        '    try: radio_recv(_msg)\n' +
        '    except: pass\n' +
        '    if _msg in _radio_msg_list:\n' +
        '        eval(\'radio_recv_\' + bytes.decode(ubinascii.hexlify(_msg)) + \'()\')';
    Blockly.Python.definitions_['def_Timer13'] = 'tim13 = Timer(13)';
    Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
        '    _msg = radio.receive()\n' +
        '    if not _msg: return\n' +
        '    radio_callback(_msg)\n';
    Blockly.Python.definitions_['timer13_init'] = 'tim13.init(period=20, mode=Timer.PERIODIC, callback=timer13_tick)\n';
    return '';
}

Blockly.Python['mpython_radio_msg'] = function (block) {
    return ['_radio_msg', Blockly.Python.ORDER_FUNCTION_CALL];;
}

Blockly.Python['mpython3_radio_recv'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    Blockly.Python.definitions_['import_radio'] = 'import radio';
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
    var doFunc = Blockly.Python.statementToCode(this, 'DO');
    Blockly.Python.definitions_['def_radio_recv'] = 'def radio_recv(_radio_msg):\n' + doFunc;
    Blockly.Python.definitions_['def_radio_callback'] = '_radio_msg_list = []\n' +
        'def radio_callback(_msg):\n' +
        '    global _radio_msg_list\n' +
        '    try: radio_recv(_msg)\n' +
        '    except: pass\n' +
        '    if _msg in _radio_msg_list:\n' +
        '        eval(\'radio_recv_\' + bytes.decode(ubinascii.hexlify(_msg)) + \'()\')';
    Blockly.Python.definitions_['def_Timer13'] = 'tim13 = Timer(13)';
    Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
        '    _msg = radio.receive()\n' +
        '    if not _msg: return\n' +
        '    radio_callback(_msg)\n';
    Blockly.Python.definitions_['timer13_init'] = 'tim13.init(period=20, mode=Timer.PERIODIC, callback=timer13_tick)\n';
    return null;
}

// 无线广播 收到特定消息
Blockly.Python['mpython_radio_recv_msg'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    Blockly.Python.definitions_['import_radio'] = 'import radio';
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
    var doCode = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
    //Blockly.Python.definitions_['def_radio_recv'] = 'def radio_recv(_msg):\n' + globals + doCode;
    Blockly.Python.definitions_['def_radio_callback'] = '_radio_msg_list = []\n' +
        'def radio_callback(_msg):\n' +
        '    global _radio_msg_list\n' +
        '    try: radio_recv(_msg)\n' +
        '    except: pass\n' +
        '    if _msg in _radio_msg_list:\n' +
        '        eval(\'radio_recv_\' + bytes.decode(ubinascii.hexlify(_msg)) + \'()\')';
    Blockly.Python.definitions_['def_Timer13'] = 'tim13 = Timer(13)';
    Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
        '    _msg = radio.receive()\n' +
        '    if not _msg: return\n' +
        '    radio_callback(_msg)\n';
    Blockly.Python.definitions_['timer13_init'] = 'tim13.init(period=20, mode=Timer.PERIODIC, callback=timer13_tick)\n';
    var message = block.getFieldValue('message');
    var message_utf8 = toUTF8Hex(message);
    var doCode = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
    Blockly.Python.functions_['def_radio_recv_' + message_utf8] =
        '_radio_msg_list.append(\'' + message + '\')\n' +
        'def radio_recv_' + message_utf8 + '():\n' + doCode;
    return '';
}

Blockly.Python['mpython3_radio_recv_msg'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    Blockly.Python.definitions_['import_radio'] = 'import radio';
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
    Blockly.Python.definitions_['def_radio_callback'] = '_radio_msg_list = []\n' +
        'def radio_callback(_msg):\n' +
        '    global _radio_msg_list\n' +
        '    try: radio_recv(_msg)\n' +
        '    except: pass\n' +
        '    if _msg in _radio_msg_list:\n' +
        '        eval(\'radio_recv_\' + bytes.decode(ubinascii.hexlify(_msg)) + \'()\')';
    Blockly.Python.definitions_['def_Timer13'] = 'tim13 = Timer(13)';
    Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
        '    _msg = radio.receive()\n' +
        '    if not _msg: return\n' +
        '    radio_callback(_msg)\n';
    Blockly.Python.definitions_['timer13_init'] = 'tim13.init(period=20, mode=Timer.PERIODIC, callback=timer13_tick)\n';
    var message = block.getFieldValue('message');
    var message_utf8 = toUTF8Hex(message);
    var doFunc = Blockly.Python.statementToCode(this, 'DO');
    Blockly.Python.functions_['def_radio_recv_' + message_utf8] =
        '_radio_msg_list.append(\'' + message + '\')\n' +
        'def radio_recv_' + message_utf8 + '():\n' + doFunc;
    return null;
}