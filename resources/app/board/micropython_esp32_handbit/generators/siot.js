//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');

/******************* MQTT *****************/

// 连接 SIoT
Blockly.Python['mpython_siot_connect'] = function(block) {
	Blockly.Python.definitions_['import_siot'] = 'from siot import iot';
    const client_id = Blockly.Python.valueToCode(block, 'CLIENT_ID', Blockly.Python.ORDER_NONE) || '""';
    const server = Blockly.Python.valueToCode(block, 'SERVER', Blockly.Python.ORDER_NONE) || '""';
    const iot_user = Blockly.Python.valueToCode(block, 'IOT_USER', Blockly.Python.ORDER_NONE) || '""';
    const iot_pwd = Blockly.Python.valueToCode(block, 'IOT_PWD', Blockly.Python.ORDER_NONE) || '""';
    Blockly.Python.definitions_['siot_connected'] = '_siot_connected = False';
	Blockly.Python.definitions_['siot_callback'] = 'def _siot_callback(_siot_topic, _siot_msg):pass';
    const code = '_siot = iot(' + client_id + ', ' + server + ', user=' + iot_user + ', password=' + iot_pwd + ')\n_siot.set_callback(_siot_callback)\ntry:\n' +
    '    _siot.connect()\n    _siot_connected = True\nexcept OSError as err:\n' +
    '    print("\\nOSError: {}".format(err))\n';
	return code;
};

Blockly.Python['mpython_siot_isconnected'] = function(block) {
    Blockly.Python.definitions_['siot_connected'] = '_siot_connected = False';
    const code = '_siot_connected';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['mpython_siot_subscribe'] = function(block) {
    const topic1 = Blockly.Python.valueToCode(block, 'ADD0', Blockly.Python.ORDER_NONE) || '""';
    const topic2 = Blockly.Python.valueToCode(block, 'ADD1', Blockly.Python.ORDER_NONE) || '""';
    const topic3 = Blockly.Python.valueToCode(block, 'ADD2', Blockly.Python.ORDER_NONE) || '""';
    const topic4 = Blockly.Python.valueToCode(block, 'ADD3', Blockly.Python.ORDER_NONE) || '""';
    const topic5 = Blockly.Python.valueToCode(block, 'ADD4', Blockly.Python.ORDER_NONE) || '""';
    Blockly.Python.definitions_['define_topic'] = '_topic_1 = ' + topic1 + '\n_topic_2 = ' + topic2 + '\n_topic_3 = ' + topic3 + '\n_topic_4 = ' + topic4 + '\n_topic_5 = ' + topic5;
    let code = "";
    if ( '""' != topic1 ) code += '_siot.getsubscribe(' + topic1 + ')\n';
    if ( '""' != topic2 ) code += '_siot.getsubscribe(' + topic2 + ')\n';
    if ( '""' != topic3 ) code += '_siot.getsubscribe(' + topic3 + ')\n';
    if ( '""' != topic4 ) code += '_siot.getsubscribe(' + topic4 + ')\n';
    if ( '""' != topic5 ) code += '_siot.getsubscribe(' + topic5 + ')\n';
	return code + '_siot.loop()\n';
};

Blockly.Python['mpython_siot_disconnect'] = function(block) {
    const code = '_siot.stop()\n_siot_connected = False\n';
	return code;
};

Blockly.Python['mpython_siot_publish'] = function(block) {
    const message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_NONE) || '""';
    const topic = block.getFieldValue('TOPIC');
    const code = '_siot.publish(_topic_' + topic + ', str(' + message + '))\n';
	return code;
};

Blockly.Python['mpython_siot_publish_to'] = function(block) {
    const message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_NONE) || '""';
    const topic = Blockly.Python.valueToCode(block, 'TOPIC', Blockly.Python.ORDER_NONE) || '""';
    const code = '_siot.publish(str(' + topic + '), str(' + message + '))\n';
	return code;
};

Blockly.Python['mpython_siot_message'] = function(block) {
    const code = '_siot_msg';
	return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['mpython_siot_receive'] = function(block) {
    /*
	Blockly.Python.definitions_['siot_callback'] = 'def _siot_callback_1(_):pass\ndef _siot_callback_2(_):pass\ndef _siot_callback_3(_):pass\ndef _siot_callback_4(_):pass\ndef _siot_callback_5(_):pass\n' +
'def _siot_callback(_siot_topic, _siot_msg):\n' +
'    _siot_topic = str(_siot_topic, "utf-8")\n' +
'    _siot_msg = str(_siot_msg, "utf-8")\n' +
'    if _siot_topic == _topic_1: return _siot_callback_1(_siot_msg)\n' +
'    elif _siot_topic == _topic_2: return _siot_callback_2(_siot_msg)\n' +
'    elif _siot_topic == _topic_3: return _siot_callback_3(_siot_msg)\n' +
'    elif _siot_topic == _topic_4: return _siot_callback_4(_siot_msg)\n' +
'    elif _siot_topic == _topic_5: return _siot_callback_5(_siot_msg)\n';*/
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
	Blockly.Python.definitions_['siot_callback'] = '_siot_topic_list = []\ndef _siot_callback_1(_):pass\ndef _siot_callback_2(_):pass\ndef _siot_callback_3(_):pass\ndef _siot_callback_4(_):pass\ndef _siot_callback_5(_):pass\n' +
'def _siot_callback(_siot_topic, _siot_msg):\n' +
'    _siot_topic = str(_siot_topic, "utf-8")\n' +
'    _siot_msg = str(_siot_msg, "utf-8")\n' +
'    if _siot_topic in _siot_topic_list:\n' +
'        eval(\'_siot_recv_\' + bytes.decode(ubinascii.hexlify(_siot_topic)) + \'(_siot_msg)\')\n' +
'    if _siot_topic == _topic_1: return _siot_callback_1(_siot_msg)\n' +
'    elif _siot_topic == _topic_2: return _siot_callback_2(_siot_msg)\n' +
'    elif _siot_topic == _topic_3: return _siot_callback_3(_siot_msg)\n' +
'    elif _siot_topic == _topic_4: return _siot_callback_4(_siot_msg)\n' +
'    elif _siot_topic == _topic_5: return _siot_callback_5(_siot_msg)\n';
    const topic = block.getFieldValue('TOPIC');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    Blockly.Python.functions_['siot_callback_' + topic ] = 'def _siot_callback_' + topic + '(_siot_msg):\n' + branch + '\n';
	return '';
};

Blockly.Python['mpython3_siot_receive'] = function(block) {
	Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
	Blockly.Python.definitions_['siot_callback'] = '_siot_topic_list = []\ndef _siot_callback_1(_):pass\ndef _siot_callback_2(_):pass\ndef _siot_callback_3(_):pass\ndef _siot_callback_4(_):pass\ndef _siot_callback_5(_):pass\n' +
'def _siot_callback(_siot_topic, _siot_msg):\n' +
'    _siot_topic = str(_siot_topic, "utf-8")\n' +
'    _siot_msg = str(_siot_msg, "utf-8")\n' +
'    if _siot_topic in _siot_topic_list:\n' +
'        eval(\'_siot_recv_\' + bytes.decode(ubinascii.hexlify(_siot_topic)) + \'(_siot_msg)\')\n' +
'    if _siot_topic == _topic_1: return _siot_callback_1(_siot_msg)\n' +
'    elif _siot_topic == _topic_2: return _siot_callback_2(_siot_msg)\n' +
'    elif _siot_topic == _topic_3: return _siot_callback_3(_siot_msg)\n' +
'    elif _siot_topic == _topic_4: return _siot_callback_4(_siot_msg)\n' +
'    elif _siot_topic == _topic_5: return _siot_callback_5(_siot_msg)\n';
    const topic = block.getFieldValue('TOPIC');
    var doFunc = Blockly.Python.statementToCode(this, 'DO');
    Blockly.Python.functions_['siot_callback_' + topic ] = 'def _siot_callback_' + topic + '(_siot_msg):\n' + doFunc + '\n';
	return null;
};

Blockly.Python['mpython_siot_receive_from'] = function(block) {
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
	Blockly.Python.definitions_['siot_callback'] = '_siot_topic_list = []\ndef _siot_callback_1(_):pass\ndef _siot_callback_2(_):pass\ndef _siot_callback_3(_):pass\ndef _siot_callback_4(_):pass\ndef _siot_callback_5(_):pass\n' +
'def _siot_callback(_siot_topic, _siot_msg):\n' +
'    _siot_topic = str(_siot_topic, "utf-8")\n' +
'    _siot_msg = str(_siot_msg, "utf-8")\n' +
'    if _siot_topic in _siot_topic_list:\n' +
'        eval(\'_siot_recv_\' + bytes.decode(ubinascii.hexlify(_siot_topic)) + \'(_siot_msg)\')\n' +
'    if _siot_topic == _topic_1: return _siot_callback_1(_siot_msg)\n' +
'    elif _siot_topic == _topic_2: return _siot_callback_2(_siot_msg)\n' +
'    elif _siot_topic == _topic_3: return _siot_callback_3(_siot_msg)\n' +
'    elif _siot_topic == _topic_4: return _siot_callback_4(_siot_msg)\n' +
'    elif _siot_topic == _topic_5: return _siot_callback_5(_siot_msg)\n';
    const topic = block.getFieldValue('TOPIC');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    
    let topic_utf8 = toUTF8Hex(topic);
    Blockly.Python.functions_['siot_recv_' + topic_utf8 ] =
'_siot_topic_list.append(\'' + topic + '\')\n' +
'def _siot_recv_' + topic_utf8 + '(_siot_msg):\n' + branch + '\n';
	return '';
};

Blockly.Python['mpython3_siot_receive_from'] = function(block) {
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
	Blockly.Python.definitions_['siot_callback'] = '_siot_topic_list = []\ndef _siot_callback_1(_):pass\ndef _siot_callback_2(_):pass\ndef _siot_callback_3(_):pass\ndef _siot_callback_4(_):pass\ndef _siot_callback_5(_):pass\n' +
'def _siot_callback(_siot_topic, _siot_msg):\n' +
'    _siot_topic = str(_siot_topic, "utf-8")\n' +
'    _siot_msg = str(_siot_msg, "utf-8")\n' +
'    if _siot_topic in _siot_topic_list:\n' +
'        eval(\'_siot_recv_\' + bytes.decode(ubinascii.hexlify(_siot_topic)) + \'(_siot_msg)\')\n' +
'    if _siot_topic == _topic_1: return _siot_callback_1(_siot_msg)\n' +
'    elif _siot_topic == _topic_2: return _siot_callback_2(_siot_msg)\n' +
'    elif _siot_topic == _topic_3: return _siot_callback_3(_siot_msg)\n' +
'    elif _siot_topic == _topic_4: return _siot_callback_4(_siot_msg)\n' +
'    elif _siot_topic == _topic_5: return _siot_callback_5(_siot_msg)\n';
    const topic = block.getFieldValue('TOPIC');
    var doFunc = Blockly.Python.statementToCode(this, 'DO');
    
    let topic_utf8 = toUTF8Hex(topic);
    Blockly.Python.functions_['siot_recv_' + topic_utf8 ] =
'_siot_topic_list.append(\'' + topic + '\')\n' +
'def _siot_recv_' + topic_utf8 + '(_siot_msg):\n' + doFunc + '\n';
	return null;
};
