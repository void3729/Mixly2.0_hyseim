//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');



/*wifi开始*/
Blockly.Python['mpython_init_wifi'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    var ssid = Blockly.Python.valueToCode(block, 'ssid', Blockly.Python.ORDER_ATOMIC);
    var password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['wifi_define'] = 'my_wifi = wifi()';
    Blockly.Python.definitions_['my_wifi'] = 'my_wifi.connectWiFi(' + ssid + ', ' + password + ')\n';
    //var code = 'my_wifi.connectWiFi(' + ssid + ', ' + password + ')\n';
    return '';
};

Blockly.Python['mpython3_init_wifi'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    var ssid = block.getFieldValue('ssid');
    var password = block.getFieldValue('password');
    Blockly.Python.definitions_['wifi_define'] = 'my_wifi = wifi()';
    Blockly.Python.definitions_['my_wifi'] = 'my_wifi.connectWiFi("' + ssid + '", "' + password + '")\n';
    //var code = 'my_wifi.connectWiFi(' + ssid + ', ' + password + ')\n';
    return '';
};

Blockly.Python['mpython_dis_WiFi'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    Blockly.Python.functions_['wifi_define'] = 'my_wifi = wifi()'; //实例化
    var code = 'my_wifi.disconnectWiFi()\n';
    return code;
};

// 以元组形式返回所有wifi配置信息
Blockly.Python['mpython_wifi_all_config'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    // Blockly.Python.functions_['init_AmbientLight'] = 'ambientLight = AmbientLight()';
    var code = 'my_wifi.sta.ifconfig()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 是否连接
Blockly.Python['mpython_wifi_isconnected'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    // Blockly.Python.functions_['init_AmbientLight'] = 'ambientLight = AmbientLight()';
    var code = 'my_wifi.sta.isconnected()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// wifi 配置 ，IP address, netmask等
Blockly.Python['mpython_WiFi_config'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    var WiFi_config = block.getFieldValue('WiFi_config');
    var code = 'my_wifi.sta.ifconfig()[' + WiFi_config + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Wi-Fi 设置静态IP
Blockly.Python['mpython_wifi_ifconfig'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    var address = Blockly.Python.valueToCode(block, 'ADDRESS', Blockly.Python.ORDER_ATOMIC);
    var netmask = Blockly.Python.valueToCode(block, 'NETMASK', Blockly.Python.ORDER_ATOMIC);
    var gateway = Blockly.Python.valueToCode(block, 'GATEWAY', Blockly.Python.ORDER_ATOMIC);
    var dns = Blockly.Python.valueToCode(block, 'DNS', Blockly.Python.ORDER_ATOMIC);
    var code = 'my_wifi.sta.ifconfig((' + address + ',' + netmask + ', ' + gateway + ', ' + dns + '))\n';
    return code;
};

Blockly.Python['mpython_wifi_channel'] = function (block) {
    var code = block.getFieldValue('channel');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_enable_APWiFi'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    var essid = Blockly.Python.valueToCode(block, 'essid', Blockly.Python.ORDER_ATOMIC);
    var password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);
	if (password == '') password = '""';
    var channel = Blockly.Python.valueToCode(block, 'channel', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.functions_['wifi_define'] = 'my_wifi = wifi()'; //实例化
    var code = 'my_wifi.enable_APWiFi(' + essid + ', ' + password + ', channel=' + channel + ')\n';
    return code;
};

Blockly.Python['mpython_disable_APWiFi'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    Blockly.Python.functions_['wifi_define'] = 'my_wifi = wifi()'; //实例化
    var code = 'my_wifi.disable_APWiFi()\n';
    return code;
};

// NTP时间同步
Blockly.Python['mpython_ntptime_settime'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    Blockly.Python.definitions_['import_ntptime'] = 'import ntptime';
    var timezone = block.getFieldValue('timezone');
    var server = block.getFieldValue('server');
    return 'ntptime.settime(' + timezone + ', "' + server + '")\n';
};

Blockly.Python['mpython_ntp_server'] = function (block) {
    let server = block.getFieldValue('SERVER');
    return [server, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython3_ntptime_settime'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    Blockly.Python.definitions_['import_ntptime'] = 'import ntptime';
    var timezone = block.getFieldValue('timezone');
    var server = Blockly.Python.valueToCode(block, 'server', Blockly.Python.ORDER_ATOMIC);
    return 'ntptime.settime(' + timezone + ', ' + server + ')\n';
};

// 心知天气 获取城市天气
Blockly.Python['mpython_seniverse_city_weather'] = function (block) {
    Blockly.Python.definitions_['import_json'] = 'import json';
    Blockly.Python.definitions_['import_urequests'] = 'import urequests';
	var _location = Blockly.Python.valueToCode(block, 'location', Blockly.Python.ORDER_ATOMIC);
	//_location = _location.replace(/"/g, '').replace(/'/g, '').replace(/ /g, '%20');
	if ('' == _location) _location = 'ip';
	var _api = block.getFieldValue('api');
	var _type = block.getFieldValue('type');
	var _key = block.getFieldValue('key');
	var _language = block.getFieldValue('language');
	var _unit = block.getFieldValue('unit');
	var _url = 'https://api.seniverse.com/v3/weather/now.json';
	switch(_api) {
		case 'api_2':
			_url = 'https://api.seniverse.com/v3/weather/daily.json';
			break;
		case 'api_3':
			_url = 'https://api.seniverse.com/v3/life/suggestion.json';
			break;
	}
	Blockly.Python.functions_['get_seni_weather'] = 'def get_seni_weather(_url, _location):\n' +
	'    _url = _url + "&location=" + _location.replace(" ", "%20")\n' +
	'    response = urequests.get(_url)\n' +
    '    json = response.json()\n' + 
    '    response.close()\n' +
    '    return json\n';
	_url += '?key=' + _key;// + '&location=' + _location;
	if ('zh-Hant' == _language) _url += '&language=zh-Hant';
	if (('f' == _unit) && ('api_3' != _api)) _url += '&unit=f';
	var code = 'get_seni_weather("' + _url + '", ' + _location + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_define_seniverse_weather'] = function (block) {
	var _var_name = block.getFieldValue('var_name');
	var _info = Blockly.Python.valueToCode(block, 'info', Blockly.Python.ORDER_ATOMIC);
	var code = _var_name + ' = ' + _info + '\n';
    return code;
};

Blockly.Python['mpython_get_seniverse_weather_info'] = function (block) {
	var _var_name = block.getFieldValue('var_name');
	var _type = block.getFieldValue('type');
	var code;
	switch(_type) {
		case 'object':
			code = _var_name;
			break;
		case 'last_update':
			code = _var_name + '["results"][0]["last_update"]';
			break;
		case 'last_update_date':
			code = _var_name + '["results"][0]["last_update"][:10]';
			break;
		default:
			code = _var_name + '["results"][0]["location"]["' + _type + '"]';
			break;			
	}
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_get_seniverse_weather_info1'] = function (block) {
	var _var_name = block.getFieldValue('var_name');
	var _type = block.getFieldValue('type');
	var code = _var_name + '["results"][0]["now"]["' + _type + '"]';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_get_seniverse_weather_info2'] = function (block) {
	var _var_name = block.getFieldValue('var_name');
	var _date = block.getFieldValue('date');
	var _type = block.getFieldValue('type');
	var code = _var_name + '["results"][0]["daily"][' + _date + ']["' + _type + '"]';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_get_seniverse_weather_info3'] = function (block) {
	var _var_name = block.getFieldValue('var_name');
	var _type = block.getFieldValue('type');
	var code = _var_name + '["results"][0]["suggestion"]["' + _type + '"]["brief"]';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


//wifi 模拟时钟
Blockly.Python['mpython_wifi_clock'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_network'] = 'import network';
    Blockly.Python.definitions_['import_ntptime'] = 'import ntptime';
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    // Blockly.Python.definitions_['import_handbitLib'] = '#@import handbitLib';
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.functions_['def_wifi_clock'] =
        'def wifi_clock(x, y, radius):\n' +
        '    try:\n' +
        '        ntptime.settime()\n' +
        '    except OSError :\n' +
        '        oled.DispChar("ntp链接超时,请重启!",0,20)\n' +
        '        oled.show()\n' +
        '    else:\n' +
        '        clock=Clock(oled, x, y, radius)\n' +
        '\n' +
        '        def Refresh(_):\n' +
        '            clock.settime()\n' +
        '            clock.drawClock()\n' +
        '            oled.show()\n' +
        '            clock.clear()\n' +
        '\n' +
        '        tim1 = Timer(1)\n' +
        '        tim1.init(period=1000, mode=Timer.PERIODIC, callback=Refresh)\n';

    var code = 'wifi_clock(' + x + ', ' + y + ', ' + radius + ')\n';
    return code;
};
/*wifi结束*/

/*
UDP 收发
mpython_udp_init
mpython_udp_send
mpython_udp_recv
mpython_udp_recv_msg
mpython_udp_recv_event
*/

// 建立 UDP 连接
Blockly.Python['mpython_udp_init'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    Blockly.Python.definitions_['define_socket_udp'] = 'socket_udp = usocket.socket(usocket.AF_INET, usocket.SOCK_DGRAM)\nsocket_udp.bind(("0.0.0.0", 100))';
    var code = '';
    return code;
};

// UDP 发送消息 %1 
Blockly.Python['mpython_udp_send'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    //Blockly.Python.definitions_['import_time'] = 'import time';
    //Blockly.Python.definitions_['define_socket_udp'] = 'socket_udp = usocket.socket(usocket.AF_INET, usocket.SOCK_DGRAM)\nsocket_udp.bind(("0.0.0.0", 100))';
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var code = 'try: socket_udp.sendto(bytes(' + value + ', "utf-8"), ("255.255.255.255", 100))\nexcept: pass\n';
    return code;
};

// UDP 发送消息 %1 到 %2  
Blockly.Python['mpython_udp_sendto'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    //Blockly.Python.definitions_['import_time'] = 'import time';
    //Blockly.Python.definitions_['define_socket_udp'] = 'socket_udp = usocket.socket(usocket.AF_INET, usocket.SOCK_DGRAM)\nsocket_udp.bind(("0.0.0.0", 100))';
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var ip = Blockly.Python.valueToCode(block, 'IP', Blockly.Python.ORDER_ATOMIC);
    var port = Blockly.Python.valueToCode(block, 'PORT', Blockly.Python.ORDER_ATOMIC);
    var code = 'try: socket_udp.sendto(bytes(' + value + ', "utf-8"), (' + ip + ', ' + port + '))\nexcept: pass\n';
    return code;
};

// UDP 收到消息（全局变量）
Blockly.Python['mpython_udp_recv'] = function (block) {
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    //Blockly.Python.definitions_['define_socket_udp'] = 'socket_udp = usocket.socket(usocket.AF_INET, usocket.SOCK_DGRAM)\nsocket_udp.bind(("0.0.0.0", 100))';
    var code = 'socket_udp.recv(1024)';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// UDP 收到消息（局部变量）
Blockly.Python['mpython_udp_recv_msg'] = function (block) {
    var code = '_udp_msg';
    return [code, Blockly.Python.ORDER_ATOMIC];
}

// UDP 收到消息事件
Blockly.Python['mpython_udp_recv_event'] = function (block) {
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    //Blockly.Python.definitions_['define_socket_udp'] = 'socket_udp = usocket.socket(usocket.AF_INET, usocket.SOCK_DGRAM)\nsocket_udp.bind(("0.0.0.0", 100))';
    var doCode = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
    Blockly.Python.definitions_['def_udp_recv'] = 'def udp_recv(_udp_msg):\n' + doCode;
    Blockly.Python.definitions_['def_thread_udp'] = 'def thread_udp():\n' +
        '    while True:\n' +
        '        try:\n' +
        '            _msg = socket_udp.recv(1024)\n' +
        '            if _msg: udp_recv(_msg.decode("UTF-8", "ignore"))\n' +
        '        except: pass\n\n' +
        '_thread.start_new_thread(thread_udp, ())\n';
    return '';
};

Blockly.Python['mpython3_udp_recv_event'] = function (block) {
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    Blockly.Python.definitions_['import_usocket'] = 'import usocket';
    //Blockly.Python.definitions_['define_socket_udp'] = 'socket_udp = usocket.socket(usocket.AF_INET, usocket.SOCK_DGRAM)\nsocket_udp.bind(("0.0.0.0", 100))';
    var doFunc = Blockly.Python.statementToCode(this, 'DO');
    Blockly.Python.definitions_['def_udp_recv'] = 'def udp_recv(_udp_msg):\n' + doFunc;
    Blockly.Python.definitions_['def_thread_udp'] = 'def thread_udp():\n' +
        '    while True:\n' +
        '        try:\n' +
        '            _msg = socket_udp.recv(1024)\n' +
        '            if _msg: udp_recv(_msg.decode("UTF-8", "ignore"))\n' +
        '        except: pass\n\n' +
        '_thread.start_new_thread(thread_udp, ())\n';
    return null;
};

// 返回当前日期字符串
Blockly.Python['mpython_wifi_get_date'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';
    Blockly.Python.definitions_['RTC_date'] = 
    'def RTCdate(flag):\n'+
    '   rtc = RTC()\n'+
    '   dt = rtc.datetime()\n'+
    '   date_str = "{}年{}月{}日".format(dt[0], dt[1], dt[2])\n'+
    '   time_str = "{}时:{}分:{}秒".format(dt[4], dt[5], dt[6])\n'+
    '   if flag == 0:\n'+
    '       return date_str\n'+
    '   else:\n'+
    '       return time_str\n';
    var code = 'RTCdate(0)';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 返回当前时间字符串
Blockly.Python['mpython_wifi_get_time'] = function () {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['from_machine_import_RTC'] = 'from machine import RTC';
    Blockly.Python.definitions_['RTC_date'] = 
    'def RTCdate(flag):\n'+
    '   rtc = RTC()\n'+
    '   dt = rtc.datetime()\n'+
    '   date_str = "{}年{}月{}日".format(dt[0], dt[1], dt[2])\n'+
    '   time_str = "{}时:{}分:{}秒".format(dt[4], dt[5], dt[6])\n'+
    '   if flag == 0:\n'+
    '       return date_str\n'+
    '   else:\n'+
    '       return time_str\n';
    var code = 'RTCdate(1)';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
