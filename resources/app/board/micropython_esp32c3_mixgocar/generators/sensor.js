'use strict';

goog.provide('Blockly.Python.sensor');

goog.require('Blockly.Python');


Blockly.Python.sensor_mixgocar_pin_near_line = function(){
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_mixgocar_info'] = 'from mixgocar import info';
    var code = 'info.patrol()['+key+']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgocar_pin_near = function(){
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_mixgocar_info'] = 'from mixgocar import info';
    var code = 'info.obstacle()['+key+']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgocar_pin_near_state_change = function(){
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_mixgocar_info'] = 'from mixgocar import info';
    if (key == '-1'){
        var code = 'info.set_mod(1)\n';
    }
    else{
        var code = 'info.set_mod(0)\n'+'info.switch('+key+')\n';    
    }
    return code;
};

Blockly.Python.sensor_mixgocar_battery_left = function(){
    Blockly.Python.definitions_['import_mixgocar_info'] = 'from mixgocar import info';
    var code =  'info.read_bat()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
//not used
Blockly.Python.sensor_mixgocar_button_is_pressed = function(){
    Blockly.Python.definitions_['import_mixgocar_button'] = 'from mixgocar import button';
    var btn = Blockly.Python.valueToCode(this, 'btn', Blockly.Python.ORDER_ATOMIC);
    var code =  'button.is_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgocar_button_was_pressed = function(){
    Blockly.Python.definitions_['import_mixgocar_button'] = 'from mixgocar import button';
    var btn = Blockly.Python.valueToCode(this, 'btn', Blockly.Python.ORDER_ATOMIC);
    var code =  'button.was_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//not used
Blockly.Python.sensor_mixgocar_button_get_presses = function(){
    Blockly.Python.definitions_['import_mixgocar_button'] = 'from mixgocar import button';
    var btn = Blockly.Python.valueToCode(this, 'btn', Blockly.Python.ORDER_ATOMIC);
    var argument = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ASSIGNMENT) || '0';
    var code =  'button.get_presses(' + argument + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//////////////////////////////////////////////////////////////////////////////////////////

Blockly.Python.sensor_mixgoce_light= function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    return ['mixgocar.get_brightness()', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_sound= function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    return ['mixgocar.get_soundlevel()', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_temperature = function() {
  Blockly.Python.definitions_['import_mixgocar_acc'] = 'from mixgocar import acc';
  return ['acc.getdata()[6]', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.number1 = function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var code = this.getFieldValue('op');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_pin_pressed = function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var pin = Blockly.Python.valueToCode(this, 'button', Blockly.Python.ORDER_ATOMIC);
    var code = 'mixgocar.'+pin+'.is_touched()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_pin_near_line = function(){
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_mixgocar_lineSensor_'+key] = 'from mixgocar import lineSensor_'+key;
    var code = 'lineSensor_'+key+'.state';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_pin_near = function(){
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_mixgocar_near'+key] = 'from mixgocar import near_'+key;
    var code = 'near_'+key+'.value';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_pin_near_more = function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
    var dc = Blockly.Python.valueToCode(this, 'dc', Blockly.Python.ORDER_ATOMIC);
    var code = 'mixgocar.infrared_near(f=' + freq + ', h=' + dc + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_MSA301_get_acceleration = function(){
    Blockly.Python.definitions_['import_mixgocar_acc'] = 'from mixgocar import acc';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    var key = this.getFieldValue('key');
    var code;
    if (key=='-1') {
        code = 'acc.getdata()';
    }else {
        code = 'acc.getdata()['+key+']';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.sensor_mixgoce_extern_button_is_pressed = function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var code =  'mixgocar.Button(board.IO'+pin + ').is_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
//ok
Blockly.Python.sensor_mixgoce_extern_button_was_pressed = function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var code =  'mixgocar.Button(board.IO'+pin + ').was_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_extern_button_get_presses = function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var argument = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ASSIGNMENT) || '0';
    var code =  'mixgocar.Button(board.IO'+pin + ').get_presses(' + argument + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_extern_dimmer = function(){
    Blockly.Python.definitions_['import_analogio_AnalogIn'] = 'from analogio import AnalogIn';
    Blockly.Python.definitions_['import_board'] = 'import board';
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var code =  'AnalogIn(board.IO'+ pin + ').value';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_extern_pin_near = function(){
    Blockly.Python.definitions_['import_analogio_AnalogIn'] = 'from analogio import AnalogIn';
    Blockly.Python.definitions_['import_board'] = 'import board';
    var pina = Blockly.Python.valueToCode(this, 'PINA', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var pinb = Blockly.Python.valueToCode(this, 'PINB', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var code =  '(AnalogIn(board.IO'+ pina + ').value, AnalogIn(board.IO'+ pinb + ').value)';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_use_i2c_init=function(){
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var iv = Blockly.Python.valueToCode(this, 'I2CSUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    var code;
    if (key=='LTR308') {
      Blockly.Python.definitions_['import_ltr308al'] = 'import ltr308al';
       code = v + ' = ltr308al.LTR_308ALS('+ iv+ ')\n';
    }else if (key=='HP203B') {
      Blockly.Python.definitions_['import_hp203x'] = 'import hp203x';
      code = v + ' = hp203x.HP203X('+ iv+ ')\n';
    }else if (key=='SHTC3') {
      Blockly.Python.definitions_['import_adafruit_shtc3'] = 'import adafruit_shtc3';
      code = v + ' = adafruit_shtc3.' + key + "("+ iv+ ')\n';
    }else if (key=='VL53L0X') {
      Blockly.Python.definitions_['import_adafruit_vl53l0x'] = 'import adafruit_vl53l0x';
      code = v + ' = adafruit_vl53l0x.' + key + "("+ iv+ ')\n';
    }
    return code;
};

Blockly.Python.sensor_LTR308 = function(){
    Blockly.Python.definitions_['import_ltr308al'] = 'import ltr308al';
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var code = sub + '.getdata()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_hp203=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_hp203x'] = 'import hp203x';
    var code = sub + '.' + key;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_shtc3=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_adafruit_shtc3'] = 'import adafruit_shtc3';
    if (key == 'ALL'){
        var code = sub + '.measurements';
    }
    else{
        var code = sub + '.measurements[' + key + ']';   
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_VL530LX=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_adafruit_vl53l0x'] = 'import adafruit_vl53l0x';
    var code = sub + '.range';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.rfid_use_spi_init=function(){
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var sv = Blockly.Python.valueToCode(this, 'SPISUB', Blockly.Python.ORDER_ATOMIC);
    var pv = Blockly.Python.valueToCode(this, 'PINSUB', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_rc522'] = 'import rc522';
    Blockly.Python.definitions_['import_digitalio'] = 'import digitalio';
    Blockly.Python.definitions_['import_board_*'] = 'from board import *';
    var code = v + ' = rc522.RC522('+ sv + ',digitalio.DigitalInOut('+ pv + '))\n';
    return code;
};

Blockly.Python.rfid_read=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_rc522'] = 'import rc522';
    var code = sub + '.read_card()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.rfid_write=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var cnt = Blockly.Python.valueToCode(this, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_rc522'] = 'import rc522';
    var code = sub + '.write_card('+cnt+')\n';
    return code;
};

Blockly.Python.PS2_init = function() {
  Blockly.Python.definitions_['import_ps2'] = 'import ps2';   
  //Blockly.Python.definitions_['import_board'] = 'import board';  
  var PS2_CLK = this.getFieldValue('PS2_CLK');
  var PS2_DOU = this.getFieldValue('PS2_DOU');
  var PS2_DIN = this.getFieldValue('PS2_DIN');
  var PS2_CS = this.getFieldValue('PS2_CS');
   
  var code = 'mixgope_ps = ps2.PS2Controller('+PS2_CLK+','+PS2_DOU+','+PS2_DIN+','+PS2_CS+')\n';  
  return code;
};

Blockly.Python.PS2_vibration = function() {
  Blockly.Python.definitions_['import_ps2'] = 'import ps2'; 
  var ss=this.getFieldValue('smotorstate');  
  var amp = Blockly.Python.valueToCode(this, 'AMP', Blockly.Python.ORDER_ATOMIC);
  var code= "mixgope_ps.PS2_vibration(" + ss + ',' + amp +")\n";
  return code;
};

Blockly.Python.PS2_Button = function() {
  Blockly.Python.definitions_['import_ps2'] = 'import ps2';     
  var bt=this.getFieldValue('psbt');
  var code= "mixgope_ps.PS2_keydata()[0] & (ps2."+bt+")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.PS2_Buttons = function() {
  Blockly.Python.definitions_['import_ps2'] = 'import ps2';     
  var bt=this.getFieldValue('psbt');
  var code= "ps2."+bt;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.PS2_State = function() {
  Blockly.Python.definitions_['import_ps2'] = 'import ps2';     
  var bt=this.getFieldValue('btstate');
  var code= "mixgope_ps.PS2_keydata()["+bt+"]";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.PS2_stk = function() {
  Blockly.Python.definitions_['import_ps2'] = 'import ps2';     
  var stk=this.getFieldValue('psstk');
  var code= "mixgope_ps.PS2_keydata()[1]["+stk+"]";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

