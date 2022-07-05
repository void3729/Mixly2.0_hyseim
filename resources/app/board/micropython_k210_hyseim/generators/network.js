'use strict';

goog.provide('Blockly.Python.network');
goog.require('Blockly.Python');

Blockly.Python.network_init= function() {
    Blockly.Python.definitions_['import network_no'] = "import network_no";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    var mode=this.getFieldValue('mode');
    return ""+varName+" = network_no.wifi_init"+mode+"()\n";
}


Blockly.Python.network_scan= function() {
    Blockly.Python.definitions_['import network_no'] = "import network_no";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    var code="network_no.scans("+varName+")";
    return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python.network_connect = function () {
	Blockly.Python.definitions_['import network_no'] = "import network_no";
	var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
	var account =Blockly.Python.valueToCode(this, 'account',Blockly.Python.ORDER_ATOMIC);
	var passwor =Blockly.Python.valueToCode(this, 'password',Blockly.Python.ORDER_ATOMIC);
	var code = ""+varName+".connect("+account+","+passwor+")\n";
	return code;  
};

Blockly.Python.network_ifconfig= function() {
    Blockly.Python.definitions_['import network_no'] = "import network_no";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
	var mode=this.getFieldValue('mode');
	if(mode == "1")
		var code = ""+varName+".ifconfig()";
	if(mode == "2")
		var code = ""+varName+".isconnected()";
    return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python.network_disconnect= function() {
    Blockly.Python.definitions_['import network_no'] = "import network_no";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
	var code = ""+varName+".disconnect()\n";
	return code;  
}

Blockly.Python.network_enable_ap = function () {
	Blockly.Python.definitions_['import network_no'] = "import network_no";
	var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
	var account =Blockly.Python.valueToCode(this, 'account',Blockly.Python.ORDER_ATOMIC);
	var passwor =Blockly.Python.valueToCode(this, 'password',Blockly.Python.ORDER_ATOMIC);
	var chl =Blockly.Python.valueToCode(this, 'chl',Blockly.Python.ORDER_ATOMIC);	
	var mode=this.getFieldValue('mode');
	var code = ""+varName+".enable_ap("+account+","+passwor+","+chl+","+varName+"."+mode+")\n";
	return code;  
};

Blockly.Python.network_disable_ap= function() {
    Blockly.Python.definitions_['import network_no'] = "import network_no";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
	var code = ""+varName+".disable_ap()\n";
	return code;  
}



Blockly.Python.network_server= function() {
    Blockly.Python.definitions_['import_server_*'] = 'from server import *';
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    // Blockly.Python.setups_['class_wlan'] ='SSID="ying"\n'+'PASSWORD="201411132040"\n';
    return 'if not '+varName+'.isconnected():\n'
    +'    connectWifi(SSID, PASSWORD)\n'
    +'ip='+varName+'.ifconfig()[0]\n'
    +'print(ip)\n'
    +'time.sleep(1)\n'
    +'DATA=listenData()\n'   
};

//ok
Blockly.Python.network_socket_init= function() {
    Blockly.Python.definitions_['import socket'] = "import socket";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    return ""+varName+" = socket.socket()\n";
}
//ok
Blockly.Python.network_socket_getaddrinfo= function() {
    Blockly.Python.definitions_['import socket'] = "import socket";
    var addr =Blockly.Python.valueToCode(this, 'addr',Blockly.Python.ORDER_ATOMIC);
	var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    var code="socket.getaddrinfo("+addr+",80)[0][-1]";
	return [code, Blockly.Python.ORDER_ATOMIC];
}

//ok
Blockly.Python.network_socket_connect= function() {
    Blockly.Python.definitions_['import socket'] = "import socket";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    var address = Blockly.Python.valueToCode(this, 'address', Blockly.Python.ORDER_ATOMIC);
    return ""+varName+".connect("+address+")\n";
}

//ok
Blockly.Python.network_socket_settimeout= function() {
    Blockly.Python.definitions_['import socket'] = "import socket";
    var time =Blockly.Python.valueToCode(this, 'time',Blockly.Python.ORDER_ATOMIC);
	var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    return ""+varName+".settimeout("+time+")\n";
}


Blockly.Python.network_socket_receive= function() {
    Blockly.Python.definitions_['import socket'] = "import socket";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    var size = Blockly.Python.valueToCode(this, 'size', Blockly.Python.ORDER_ATOMIC);
    var code =  ""+varName+".recv("+size+")";
    return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python.network_socket_send= function() {
    Blockly.Python.definitions_['import socket'] = "import socket";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    var content = Blockly.Python.valueToCode(this, 'content', Blockly.Python.ORDER_ATOMIC);
    var code =  ""+varName+".send("+content+")\n";
    return code;
}


Blockly.Python.network_socket_close= function() {
    Blockly.Python.definitions_['import socket'] = "import socket";
    var varName =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
    var code = ""+varName+".close()\n";
    return code;
}