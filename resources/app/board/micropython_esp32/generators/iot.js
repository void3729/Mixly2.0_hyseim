'use strict';

goog.provide('Blockly.Python.iot');
goog.require('Blockly.Python');

Blockly.Python.iot_wifi_connect = function(block) {
  Blockly.Python.definitions_['import_simple'] = "import simple";  
  Blockly.Python.definitions_['import_miot'] = "import miot";  
  var username =  Blockly.Python.valueToCode(this, 'WIFINAME', Blockly.Python.ORDER_ATOMIC) ;
  var password =  Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC) ; 
  var code='miot.do_connect(' + username + ','  + password + ')\n';
  return code;
};

Blockly.Python.iot_onenet_connect = function(block) {
  Blockly.Python.definitions_['import_simple'] = "import simple";
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;
  var client =  Blockly.Python.valueToCode(this, 'CLIENT', Blockly.Python.ORDER_ATOMIC) ;
  var server =  Blockly.Python.valueToCode(this, 'SERVER', Blockly.Python.ORDER_ATOMIC) ;
  var username =  Blockly.Python.valueToCode(this, 'USERNAME', Blockly.Python.ORDER_ATOMIC) ;
  var password =  Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC) ;
  var topic =  Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC) ;
  var subscribe = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ASSIGNMENT) || '0';
  var code= v + ' = miot.init_MQTT_client(' + client + ', ' + server + ', '+ username + ', ' + password +', ' + topic+', ' + subscribe + ')\n';
  return code;
};

Blockly.Python.iot_onenet_disconnect = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;
  Blockly.Python.definitions_['import_simple'] = "import simple"; 
  var code=v + '.do_disconnect()\n';  
  return code;
};

Blockly.Python.iot_onenet_publish_dict = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;
  var d = Blockly.Python.valueToCode(this, 'DICT', Blockly.Python.ORDER_ATOMIC) ;
  var check = this.getFieldValue("is_print") == 'TRUE' ? 'True' : 'False';
  Blockly.Python.definitions_['import_simple'] = "import simple"; 
  var code=v + '.publish('+d+', is_print = '+check+')\n';  
  return code;
};

Blockly.Python.iot_onenet_check = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ; 
  Blockly.Python.definitions_['import_simple'] = "import simple"; 
  var code=v + '.check_msg()\n';  
  return code;
};

Blockly.Python.iot_onenet_publish = function() {
  // Create a list with any number of elements of any type.
  
  //var size=window.parseFloat(this.getFieldValue('SIZE'));
 Blockly.Python.definitions_['import_miot'] = "import miot";  
  var ck = new Array(this.itemCount_);
  var cv = new Array(this.itemCount_);
  var ct = new Array(this.itemCount_);

  var default_value = '0';
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;

  for (var n = 0; n < this.itemCount_; n++) {
  var keyName = this.getFieldValue('KEY' + n);    
  ck[n] = keyName
  }
  for (var n = 0; n < this.itemCount_; n++) {     
  cv[n] = Blockly.Python.valueToCode(this, 'ADD' + n,
    Blockly.Python.ORDER_NONE) || default_value;
  }
  var code=v + ".publish({";
  for (var n = 0; n < this.itemCount_; n++) {
    ct[n] = ck[n]+': '+cv[n]
  }
  //var code = "c.publish('$dp', pubData("+ '{' + code.join(', ') + '})\n';
  //var code =''+varName+'['+size+"]"+'='+ '{' + code.join(', ') + '};\n';
  //Blockly.Python.setups_['setup_lists'+varName] = code;
  code=code+ct.join(', ')+"})\n";
  return code;
};

Blockly.Python.iot_mixio_connect = function(block) {
  Blockly.Python.definitions_['import_mixiot'] = "import mixiot";
  Blockly.Python.definitions_['import_machine'] = "import machine";
  Blockly.Python.definitions_['import_ubinascii_hexlify'] = "from ubinascii import hexlify";
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;
  var server =  Blockly.Python.valueToCode(this, 'SERVER', Blockly.Python.ORDER_ATOMIC) ;
  var username =  Blockly.Python.valueToCode(this, 'USERNAME', Blockly.Python.ORDER_ATOMIC) ;
  var password =  Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC) ;
  var project =  Blockly.Python.valueToCode(this, 'PROJECT', Blockly.Python.ORDER_ATOMIC) ;
  var subscribe = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ASSIGNMENT) || '0';
  var a = "'" + username.replace("'","").replace("'","") + "/" + project.replace("'","").replace("'","") + "/'"
  var code= 'MQTT_USR_PRJ = '+ a +'\n'+ v + ' = mixiot.init_MQTT_client(' + server + ', '+ username + ', ' + password +', ' + project+', ' + subscribe + ')\n';
  return code;
};

Blockly.Python.IOT_MIXIO_PUBLISH = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
  var msg = Blockly.Python.valueToCode(this, 'MSG', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_mixiot'] = "import mixiot"; 
  var code = v + '.publish(MQTT_USR_PRJ + ' + topic +', '+ msg +')\n';  
  return code;
};

Blockly.Python.IOT_MIXIO_SUBSCRIBE = function (block) {
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_mixiot'] = "import mixiot"; 
    var code = v + '.subscribe(MQTT_USR_PRJ + ' + topic + ')\n';
    return code;
};

Blockly.Python.iot_mixio_disconnect = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;
  Blockly.Python.definitions_['import_mixiot'] = "import mixiot"; 
  var code=v + '.disconnect()\n';  
  return code;
};

Blockly.Python.iot_mixio_connect_only = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;
  Blockly.Python.definitions_['import_mixiot'] = "import mixiot"; 
  var code=v + '.connect()\n';  
  return code;
};

Blockly.Python.iot_mixio_check = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ; 
  Blockly.Python.definitions_['import_mixiot'] = "import mixiot"; 
  var code=v + '.check_msg()\n';  
  return code;
};

Blockly.Python.iot_mixio_format_topic = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;  
  var code=v + '.decode("utf-8").split("/")[-1]';  
  return [code,Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.iot_mixio_format_msg = function(block) {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) ;  
  var code=v + '.decode("utf-8")';  
  return [code,Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['iot_wificonnect'] = Blockly.Blocks['iot_wifi_connect'];
Blockly.Blocks['iot_onenetconnect'] = Blockly.Blocks['iot_onenet_connect'];
Blockly.Blocks['iot_onenetdisconnect'] = Blockly.Blocks['iot_onenet_disconnect'];
Blockly.Blocks['iot_checkonenet'] = Blockly.Blocks['iot_onenet_check'];
Blockly.Blocks['iot_publish'] = Blockly.Blocks['iot_onenet_publish'];