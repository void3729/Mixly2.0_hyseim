'use strict';

goog.provide('Blockly.Python.camera');
goog.require('Blockly.Python');

Blockly.Python.mode = function () {
    var code = this.getFieldValue('flag');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.size = function () {
    var code = this.getFieldValue('flag');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.camera_init = function () {	
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key1 = Blockly.Python.valueToCode(this,'key1', Blockly.Python.ORDER_ATOMIC);
  var key2 = Blockly.Python.valueToCode(this,'key2', Blockly.Python.ORDER_ATOMIC);
  var key3 = Blockly.Python.valueToCode(this,'key3', Blockly.Python.ORDER_ATOMIC);
  var key4 = Blockly.Python.valueToCode(this,'key4', Blockly.Python.ORDER_ATOMIC);
  var code1 = "sensor.reset()\n";
  var code2 = "sensor.set_pixformat("+key1+")\n";
  var code3 = "sensor.set_framesize("+key2+")\n";
  var code4 = "sensor.run("+key3+")\n";
  var code5 = "sensor.skip_frames("+key4+")\n";
  var code=code1+code2+code3+code4+code5;
  return code;  
};

Blockly.Python.camera_reset = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var code = "sensor.reset()\n";
  return code;  
};

Blockly.Python.camera_set_pixformat = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = Blockly.Python.valueToCode(this,'key', Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.set_pixformat("+key+")\n";
  return code;  
};

Blockly.Python.camera_set_framesize = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = Blockly.Python.valueToCode(this,'key', Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.set_framesize("+key+")\n";
  return code;  
};

Blockly.Python.camera_run = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = Blockly.Python.valueToCode(this,'key', Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.run("+key+")\n";
  return code;  
};

Blockly.Python.camera_skip_frames = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var frame =Blockly.Python.valueToCode(this, 'frame',Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.skip_frames(n="+frame+")\n";
  return code;  
};

Blockly.Python.camera_snapshot = function(){
    Blockly.Python.definitions_['import_sensor'] = 'import sensor';
    var code =  'sensor.snapshot()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.camera_shutdown = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = Blockly.Python.valueToCode(this,'key', Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.shutdown("+key+")\n";
  return code;  
};

Blockly.Python.camera_set_hmirror = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = Blockly.Python.valueToCode(this,'key', Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.set_hmirror("+key+")\n";
  return code;  
};

Blockly.Python.camera_set_vflip = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = Blockly.Python.valueToCode(this,'key', Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.set_vflip("+key+")\n";
  return code;  
};

Blockly.Python.camera_set_colorbar = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = Blockly.Python.valueToCode(this,'key', Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.set_colorbar("+key+")\n";
  return code;  
};



Blockly.Python.camera_getinfo = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = this.getFieldValue('key');
  var code = "sensor."+key+"()";
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.camera_setmun = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var key = this.getFieldValue('key');
  var num =Blockly.Python.valueToCode(this, 'num',Blockly.Python.ORDER_ATOMIC);
  var code = "sensor."+key+"("+num+")\n";
  return code;  
};

Blockly.Python.camera_set_windowing = function () {
  Blockly.Python.definitions_['import_sensor'] = 'import sensor';
  var numa =Blockly.Python.valueToCode(this, 'numa',Blockly.Python.ORDER_ATOMIC);
  var numb =Blockly.Python.valueToCode(this, 'numb',Blockly.Python.ORDER_ATOMIC);
  var code = "sensor.set_windowing(("+numa+","+numb+"))\n";
  return code;  
};





