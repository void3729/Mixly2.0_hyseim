'use strict';

goog.provide('Blockly.Python.iot');
goog.require('Blockly.Python');


Blockly.Python.IOT_EMQX_INIT_AND_CONNECT_BY_MIXLY_CODE = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var server = '"mixio.mixly.org"';
  var port = '1883';
  var username = '"MixIO_public"';
  var password = '"MixIO_public"';
  var mixly_code = this.getFieldValue('code');
  // var is_ssl = Blockly.Python.valueToCode(this, 'IS_SSL', Blockly.Python.ORDER_ATOMIC);
  // var socket_pool = Blockly.Python.valueToCode(this, 'SOCKET_POOL', Blockly.Python.ORDER_ATOMIC);
  // var ssl_context = Blockly.Python.valueToCode(this, 'SSL_CONTEXT', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  Blockly.Python.definitions_['import_wifi'] = "import wifi";
  Blockly.Python.definitions_['import_binascii'] = "import binascii";
  Blockly.Python.definitions_['import ssl'] = "import ssl"; 
  Blockly.Python.definitions_['import socketpool'] = "import socketpool"; 
  Blockly.Python.definitions_['import_mixgoce_ADDITIONAL_TOPIC'] = "from mixgoce import ADDITIONAL_TOPIC";
  Blockly.Python.definitions_['import_mixgoce_WILL_TOPIC'] = "from mixgoce import WILL_TOPIC";
  var a = '"MixIO/' + mixly_code + '/default/"'
  var mac_address = 'str(binascii.hexlify(wifi.radio.mac_address))[2:14]'
  var socket_pool = 'socketpool.SocketPool(wifi.radio)'
  var ssl_context = 'ssl.create_default_context()'
  var code = 'MQTT_USR_PRJ = '+ a +'\n'+
             'mqtt_client = adafruit_minimqtt.MQTT(broker='+ server +', port='+ port +', username='+ username +', password='+ password +', client_id='+ mac_address +', socket_pool='+ socket_pool +', ssl_context='+ ssl_context+')\n'+
             "mqtt_client.will_set(topic=MQTT_USR_PRJ+WILL_TOPIC, payload=mqtt_client.client_id, qos=2)\n"+
             "if mqtt_client.connect(keep_alive=60)==0:\n"+
             "    mqtt_client.publish(MQTT_USR_PRJ+ADDITIONAL_TOPIC, mqtt_client.client_id, qos=1)\n";  
  return code;
};

Blockly.Python.IOT_EMQX_INIT_AND_CONNECT = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var server = Blockly.Python.valueToCode(this, 'SERVER', Blockly.Python.ORDER_ATOMIC);
  var port = Blockly.Python.valueToCode(this, 'PORT', Blockly.Python.ORDER_ATOMIC);
  var username = Blockly.Python.valueToCode(this, 'USERNAME', Blockly.Python.ORDER_ATOMIC);
  var password = Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC);
  var project = Blockly.Python.valueToCode(this, 'PROJECT', Blockly.Python.ORDER_ATOMIC);
  // var is_ssl = Blockly.Python.valueToCode(this, 'IS_SSL', Blockly.Python.ORDER_ATOMIC);
  // var socket_pool = Blockly.Python.valueToCode(this, 'SOCKET_POOL', Blockly.Python.ORDER_ATOMIC);
  // var ssl_context = Blockly.Python.valueToCode(this, 'SSL_CONTEXT', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  Blockly.Python.definitions_['import_wifi'] = "import wifi";
  Blockly.Python.definitions_['import_binascii'] = "import binascii";
  Blockly.Python.definitions_['import ssl'] = "import ssl"; 
  Blockly.Python.definitions_['import socketpool'] = "import socketpool"; 
  Blockly.Python.definitions_['import_mixgoce_ADDITIONAL_TOPIC'] = "from mixgoce import ADDITIONAL_TOPIC";
  Blockly.Python.definitions_['import_mixgoce_WILL_TOPIC'] = "from mixgoce import WILL_TOPIC";
  project = project.replace("'","").replace("'","")
  var a = "'" + username.replace("'","").replace("'","") + "/'+(str('" + project + "'.encode('utf-8'))[2:-1]).replace('\\\\x','').lower()+'/'"
  var mac_address = 'str(binascii.hexlify(wifi.radio.mac_address))[2:14]'
  var socket_pool = 'socketpool.SocketPool(wifi.radio)'
  var ssl_context = 'ssl.create_default_context()'
  var code = 'MQTT_USR_PRJ = '+ a +'\n'+
             'mqtt_client = adafruit_minimqtt.MQTT(broker='+ server +', port='+ port +', username='+ username +', password='+ password +', client_id='+ mac_address +', socket_pool='+ socket_pool +', ssl_context='+ ssl_context+')\n'+
             "mqtt_client.will_set(topic=MQTT_USR_PRJ+WILL_TOPIC, payload=mqtt_client.client_id, qos=2)\n"+
             "if mqtt_client.connect(keep_alive=60)==0:\n"+
             "    mqtt_client.publish(MQTT_USR_PRJ+ADDITIONAL_TOPIC, mqtt_client.client_id, qos=1)\n";  

  return code;
};

Blockly.Python.IOT_EMQX_INIT = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var server = Blockly.Python.valueToCode(this, 'SERVER', Blockly.Python.ORDER_ATOMIC);
  var port = Blockly.Python.valueToCode(this, 'PORT', Blockly.Python.ORDER_ATOMIC);
  var username = Blockly.Python.valueToCode(this, 'USERNAME', Blockly.Python.ORDER_ATOMIC);
  var password = Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC);
  var project = Blockly.Python.valueToCode(this, 'PROJECT', Blockly.Python.ORDER_ATOMIC);
  // var is_ssl = Blockly.Python.valueToCode(this, 'IS_SSL', Blockly.Python.ORDER_ATOMIC);
  var socket_pool = Blockly.Python.valueToCode(this, 'SOCKET_POOL', Blockly.Python.ORDER_ATOMIC);
  var ssl_context = Blockly.Python.valueToCode(this, 'SSL_CONTEXT', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  Blockly.Python.definitions_['import_wifi'] = "import wifi";
  Blockly.Python.definitions_['import_binascii'] = "import binascii";
  var a = "'" + username.replace("'","").replace("'","") + "/" + project.replace("'","").replace("'","") + "/'"
  var mac_address = 'str(binascii.hexlify(wifi.radio.mac_address))[2:14]'
  var code = 'MQTT_USR_PRJ = '+ a +'\nmqtt_client = adafruit_minimqtt.MQTT(broker='+ server +', port='+ port +', username='+ username +', password='+ password +', client_id='+ mac_address +', socket_pool='+ socket_pool +', ssl_context='+ ssl_context+')\n';  
  return code;
};

Blockly.Python.IOT_EMQX_PUBLISH = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
  var msg = Blockly.Python.valueToCode(this, 'MSG', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  var code = 'mqtt_client.publish(MQTT_USR_PRJ + '+ topic +', '+ msg +')\n';  
  return code;
};

Blockly.Python.IOT_EMQX_PUBLISH_MORE = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
  var msg = Blockly.Python.valueToCode(this, 'MSG', Blockly.Python.ORDER_ATOMIC);
  var retain = Blockly.Python.valueToCode(this, 'RETAIN', Blockly.Python.ORDER_ATOMIC);
  var qos = this.getFieldValue('qos'); 
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  var code = 'mqtt_client.publish(MQTT_USR_PRJ + '+ topic +', '+ msg +', '+ retain +', '+ qos +')\n';  
  return code;
};

Blockly.Python.IOT_EMQX_DEINIT = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  var code = 'mqtt_client.deinit()\n';  
  return code;
};

Blockly.Python.IOT_EMQX_ADD_TOPIC_CALLBACK = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
  var method = Blockly.Python.valueToCode(this, 'METHOD', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  var code = 'mqtt_client.add_topic_callback(MQTT_USR_PRJ + '+topic +', '+ method+')\n';  
  return code;
};

Blockly.Python.IOT_EMQX_REMOVE_TOPIC_CALLBACK = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  var code = 'mqtt_client.remove_topic_callback(MQTT_USR_PRJ + '+topic +')\n';  
  return code;
};

Blockly.Python.IOT_EMQX_USERNAME_PW_SET = function(block){
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var username = Blockly.Python.valueToCode(this, 'USERNAME', Blockly.Python.ORDER_ATOMIC);
  var password = Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  var code = 'mqtt_client.username_pw_set('+ username +','+ password+ ')\n';
  return code;
};

Blockly.Python.IOT_EMQX_RECONNECT = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  Blockly.Python.definitions_['import_mixgoce_ADDITIONAL_TOPIC'] = "from mixgoce import ADDITIONAL_TOPIC";
  Blockly.Python.definitions_['import_mixgoce_WILL_TOPIC'] = "from mixgoce import WILL_TOPIC";
  var code = "mqtt_client.will_set(topic=MQTT_USR_PRJ+WILL_TOPIC, payload=mqtt_client.client_id, qos=2)\n"+
             "if mqtt_client.reconnect(keep_alive=60)==0:\n"+
             "    mqtt_client.publish(MQTT_USR_PRJ+ADDITIONAL_TOPIC, mqtt_client.client_id, qos=1)\n"; 
  return code;
};

Blockly.Python.IOT_EMQX_CONNECT = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  Blockly.Python.definitions_['import_mixgoce_ADDITIONAL_TOPIC'] = "from mixgoce import ADDITIONAL_TOPIC";
  Blockly.Python.definitions_['import_mixgoce_WILL_TOPIC'] = "from mixgoce import WILL_TOPIC";
  var code = "mqtt_client.will_set(topic=MQTT_USR_PRJ+WILL_TOPIC, payload=mqtt_client.client_id, qos=2)\n"+
             "if mqtt_client.connect(keep_alive=60)==0:\n"+
             "    mqtt_client.publish(MQTT_USR_PRJ+ADDITIONAL_TOPIC, mqtt_client.client_id, qos=1)\n";   
  return code;
};

Blockly.Python.IOT_EMQX_DISCONNECT = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  Blockly.Python.definitions_['import_mixgoce_WILL_TOPIC'] = "from mixgoce import WILL_TOPIC";
  var code = "mqtt_client.publish(MQTT_USR_PRJ+WILL_TOPIC, mqtt_client.client_id, qos=1)\n"+
             "mqtt_client.disconnect()\n";
  return code;
};

Blockly.Python.IOT_EMQX_IS_CONNECT = function (block) {
    // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var topic = Blockly.Python.valueToCode(this, 'IS_CON', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt";
    var code = 'mqtt_client.is_connect()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.IOT_EMQX_PING = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt"; 
  var code = 'mqtt_client.ping()\n';  
  return code;
};

Blockly.Python.CREATE_DEFAULT_CONTEXT = function(block) {
  Blockly.Python.definitions_['import ssl'] = "import ssl"; 
  var code = 'ssl.create_default_context()';  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.CREATE_SOCKETPOOL = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var r = Blockly.Python.valueToCode(this, 'RADIO', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import socketpool'] = "import socketpool"; 
  var code = 'socketpool.SocketPool(wifi.radio)';  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.IOT_EMQX_SUBSCRIBE = function (block) {
    // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt";
    var code = 'mqtt_client.subscribe(MQTT_USR_PRJ + ' + topic + ')\n';
    return code;
};

Blockly.Python.IOT_EMQX_SUBSCRIBE_MORE = function (block) {
    // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC); 
    var qos = Blockly.Python.valueToCode(this, 'QOS', Blockly.Python.ORDER_ATOMIC); 
    Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt";
    var code = 'mqtt_client.subscribe(MQTT_USR_PRJ + ' + topic + ','+ qos +')\n';
    return code;
};

Blockly.Python.IOT_EMQX_UNSUBSCRIBE = function (block) {
    // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt";
    var code = 'mqtt_client.unsubscribe(MQTT_USR_PRJ + ' + topic + ')\n';
    return code;
};

Blockly.Python.IOT_EMQX_LOOP = function (block) {
    // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var timeout = Blockly.Python.valueToCode(this, 'TIMEOUT', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt";
    var code = 'mqtt_client.loop(' + timeout + ')\n';
    return code;
};

Blockly.Python.IOT_EMQX_ENABLE_LOGGER = function (block) {
    // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var topic = Blockly.Python.valueToCode(this, 'LEVEL', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt";
    var code = 'mqtt_client.enable_logger(MQTT_USR_PRJ + ' + topic + ')\n';
    return code;
};

Blockly.Python.WIFI_RADIO_CONNECT = function(block){
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var username = Blockly.Python.valueToCode(this, 'USERNAME', Blockly.Python.ORDER_ATOMIC);
  var password = Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_wifi'] = "import wifi"; 
  var code = 'wifi.radio.connect('+ username +','+ password+ ')\n';
  return code;
};

Blockly.Python.WIFI_RESET = function(block) {
  // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_wifi'] = "import wifi"; 
  var code = 'wifi.reset()\n';  
  return code;
};

Blockly.Python.IOT_FORMATTING = function(block) {
  Blockly.Python.definitions_['import_mixpy'] = "import mixpy"; 
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var code = 'mixpy.format_content('+ v +', mqtt_client.client_id)';  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.IOT_FORMAT_STRING = function(block) {
  Blockly.Python.definitions_['import_mixpy'] = "import mixpy"; 
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var code = 'mixpy.format_str('+ v +')';  
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.IOT_EMQX_SUBSCRIBE_AND_ADD_TOPIC_CALLBACK = function (block) {
    // var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var topic = Blockly.Python.valueToCode(this, 'TOPIC', Blockly.Python.ORDER_ATOMIC); 
    var qos = this.getFieldValue('qos'); 
    var method = Blockly.Python.valueToCode(this, 'METHOD', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_adafruit_minimqtt'] = "import adafruit_minimqtt";
    var code = 'mqtt_client.subscribe(MQTT_USR_PRJ + ' + topic + ','+ qos +')\n';
    code += 'mqtt_client.add_topic_callback(MQTT_USR_PRJ + '+topic +', '+ method+')\n';  
    return code;
};