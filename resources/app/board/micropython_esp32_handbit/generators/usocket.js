//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');


// socket 从socket中读取size字节。返回一个字节对象
Blockly.Python['mpython_usocket_read'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var size = Blockly.Python.valueToCode(block, 'size', Blockly.Python.ORDER_ATOMIC);

    var code = socket_name + '.read(' + size + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// socket 为阻塞模式
Blockly.Python['mpython_usocket_setblocking'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var mode = block.getFieldValue('mode');

    var code = socket_name + '.setblocking(' + mode + ')\n';
    return code;
};

// socket 设置超时时间，单位：秒。
Blockly.Python['mpython_usocket_settimeout'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var _nums = Blockly.Python.valueToCode(block, '_nums', Blockly.Python.ORDER_ATOMIC);

    var code = socket_name + '.settimeout(' + _nums + ')\n';
    return code;
};

// socket 接收数据，返回接收到的数据对象。
Blockly.Python['mpython_usocket_recv'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var _nums = Blockly.Python.valueToCode(block, '_nums', Blockly.Python.ORDER_ATOMIC);
    var code = socket_name + '.recv(' + _nums + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 转义字符
Blockly.Python['mpython_text_ESC'] = function (block) {
    //Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var mode = block.getFieldValue('mode');
    var code ='"' + mode + '"';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// socket 接收数据，返回接收到的数据对象元组，格式：(bytes, address)
Blockly.Python['mpython_usocket_recvfrom'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var _nums = Blockly.Python.valueToCode(block, '_nums', Blockly.Python.ORDER_ATOMIC);
    var code = socket_name + '.recvfrom(' + _nums + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 与 send()不同，sendall()此方法将尝试通过连续发送数据块来发送所有数据。
Blockly.Python['mpython_usocket_sendall'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var _bytes = Blockly.Python.valueToCode(block, '_bytes', Blockly.Python.ORDER_ATOMIC);
    var code = socket_name + '.sendall(' + _bytes + ')\n';
    return code;
};

// socket 发送数据，并返回发送的字节数2
Blockly.Python['mpython_usocket_sends'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var _bytes = Blockly.Python.valueToCode(block, '_bytes', Blockly.Python.ORDER_ATOMIC);
    var code = socket_name + '.send(' + _bytes + ')\n';
    return code;
};

// socket 发送数据，并返回发送的字节数
Blockly.Python['mpython_usocket_send'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var _bytes = Blockly.Python.valueToCode(block, '_bytes', Blockly.Python.ORDER_ATOMIC);
    var code = socket_name + '.send(bytes(' + _bytes + ', \'utf-8\'))';

    return [code, Blockly.Python.ORDER_ATOMIC];
};

// socket 发送数据到指定地址，并返回发送的字节数
Blockly.Python['mpython_usocket_sendto'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var _bytes = Blockly.Python.valueToCode(block, '_bytes', Blockly.Python.ORDER_ATOMIC);
    var _address = Blockly.Python.valueToCode(block, '_address', Blockly.Python.ORDER_ATOMIC);
    var code = socket_name + '.sendto(bytes(' + _bytes + ', \'utf-8\'), ' + _address + ')\n';

    return code;
};

// socket 连接到指定地址的服务器
Blockly.Python['mpython_usocket_connect'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
    var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);

    var code = socket_name + '.connect((' + host + ', ' + port + '))\n';
    return code;
};

// socket 解析 host 并返回 host
Blockly.Python['mpython_usocket_getaddrinfo'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var host = Blockly.Python.valueToCode(block, 'host', Blockly.Python.ORDER_ATOMIC);
    var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);

    var code = '(usocket.getaddrinfo(' + host + ', ' + port + ')[0][-1])[0]';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// socket 接收连接请求并返回socket元组
Blockly.Python['mpython_usocket_accept'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');

    var code = socket_name + '.accept()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// socket监听
Blockly.Python['mpython_usocket_listen'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var backlog = Blockly.Python.valueToCode(block, 'backlog', Blockly.Python.ORDER_ATOMIC);
    var code = socket_name + '.listen(' + backlog + ')\n';
    return code;
};

// socket綁定
Blockly.Python['mpython_usocket_bind'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
    var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
    var code = socket_name + '.bind((' + address + ', ' + port + '))\n';
    return code;
};

// usocket实例化
Blockly.Python['mpython_usocket_init'] = function (block) {
    // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var af = block.getFieldValue('af');
    var _type = block.getFieldValue('_type');
    // var IO = Blockly.Python.valueToCode(block, 'IO', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.functions_['init_usocket'] = socket_name + ' = usocket.socket(usocket.' + af + ', usocket.' + _type + ')';
    var code = '';
    return code;
};

// setsockopt实例化
Blockly.Python['mpython_usocket_setsockopt'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var _type = block.getFieldValue('_type');
    Blockly.Python.functions_['init_setsockopt'] = socket_name + '.setsockopt(usocket.SOL_SOCKET, usocket.' + _type + ', ' + value + ')';
    var code = '';
    return code;
};

// socket关闭
Blockly.Python['mpython_usocket_close'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    var socket_name = block.getFieldValue('socket_name');
    var code = socket_name + '.close()\n';
    return code;
};

// get/post请求
Blockly.Python['mpython_get_post'] = function (block) {
    Blockly.Python.definitions_['import_urequests'] = 'import urequests';
    Blockly.Python.definitions_['import_json'] = 'import json';
    var get_post = block.getFieldValue('get_post');
    var url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
    // var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC) || 'None';
    var json = Blockly.Python.valueToCode(block, 'json', Blockly.Python.ORDER_ATOMIC) || 'None';
    // var headers = Blockly.Python.valueToCode(block, 'headers', Blockly.Python.ORDER_ATOMIC) || '{}';
    if (json == 'None') {
        //var code = '_response = urequests.' + get_post + '(' + url +', data=None, json=' +  json +  ', headers={})\n';
        //var code = '_response = urequests.' + get_post + '(' + url + ', data=None, json=' + json + ')\n';
		return '_response = urequests.' + get_post + '(' + url + ')\n';
    } else {
        //code = 'to_json = json.dumps(' + json + ')\n' + '_response = urequests.' + get_post + '(' + url +', data=None, json=to_json' + ', headers={})\n';
        //code = '_response = urequests.' + get_post + '(' + url + ', data=None, json=json.dumps(' + json + '))\n';
		return '_response = urequests.' + get_post + '(' + url + ', headers={"Content-Type":"application/json"}, params=' + json + ')\n';
    }
    //return code;
};

Blockly.Python['mpython_urequests_get_post'] = function (block) {
    Blockly.Python.definitions_['import_urequests'] = 'import urequests';
    Blockly.Python.definitions_['import_json'] = 'import json';
    var url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
    var method = block.getFieldValue('method');
    var json = Blockly.Python.valueToCode(block, 'json', Blockly.Python.ORDER_ATOMIC) || 'None';
    if (json == 'None') {
		return '_response = urequests.' + method + '(' + url + ')\n';
    } else {
		return '_response = urequests.' + method + '(' + url + ', headers={"Content-Type":"application/json"}, data=json.dumps(' + json + '))\n';
    }
};

Blockly.Python['mpython_urequests_post_file'] = function (block) {
    Blockly.Python.definitions_['import_urequests'] = 'import urequests';
    Blockly.Python.definitions_['import_json'] = 'import json';
    var url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
    var file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
    var file_type = Blockly.Python.valueToCode(block, 'file_type', Blockly.Python.ORDER_ATOMIC);
	var file = '{"file":(' + file_name + ', ' + file_type + ')}';
    var json = Blockly.Python.valueToCode(block, 'json', Blockly.Python.ORDER_ATOMIC) || 'None';
	if (json == 'None') {
		return '_response = urequests.post(' + url + ', files=' + file + ')\n';
	} else {
		return '_response = urequests.post(' + url + ', files=' + file + ', params=' + json + ')\n';
	}
};

// 响应内容
Blockly.Python['mpython_response'] = function (block) {
    Blockly.Python.definitions_['import_urequests'] = 'import urequests';
    var response = block.getFieldValue('response');
    var code = '_response.' + response;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 响应属性
Blockly.Python['mpython_response_attribute'] = function (block) {
    Blockly.Python.definitions_['import_urequests'] = 'import urequests';
    var response_attribute = block.getFieldValue('response_attribute');
    var code = '_response.' + response_attribute;
    return [code, Blockly.Python.ORDER_ATOMIC];
};