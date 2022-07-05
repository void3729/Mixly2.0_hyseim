'use strict';

goog.provide('Blockly.Python.sensor');

goog.require('Blockly.Python');

Blockly.Python.sensor_mixgoce_button_is_pressed = function(){
    var btn = Blockly.Python.valueToCode(this, 'btn', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_button_'+btn] = 'from button import '+btn;
    var code =  btn + '.is_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
//ok
Blockly.Python.sensor_mixgoce_button_was_pressed = function(){
    var btn = Blockly.Python.valueToCode(this, 'btn', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_button_'+btn] = 'from button import '+btn;
    var code = btn + '.was_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_button_get_presses = function(){
    var btn = Blockly.Python.valueToCode(this, 'btn', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_button_'+btn] = 'from button import '+btn;
    var argument = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ASSIGNMENT) || '0';
    var code = btn + '.get_presses(' + argument + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_light= function(){
    Blockly.Python.definitions_['import_sensor'] = 'import sensor';
    return ['sensor.get_brightness()', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_sound= function(){
    Blockly.Python.definitions_['import_sensor'] = 'import sensor';
    return ['sensor.get_soundlevel()', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_temperature = function() {
    var op = this.getFieldValue('op');
    if (op == 'board'){
        Blockly.Python.definitions_['import_sensor'] = 'import sensor';
        return ['sensor.get_temperature()', Blockly.Python.ORDER_ATOMIC];    
    }
    if (op == 'cpu'){
        Blockly.Python.definitions_['import_microcontroller_cpu'] = 'from microcontroller import cpu';
        return ['cpu.temperature', Blockly.Python.ORDER_ATOMIC];    
    }
};

Blockly.Python.sensor_mixgoce_temperature_lm35 = function() {
    Blockly.Python.definitions_['import_sensor'] = 'import sensor';
    return ['sensor.get_temperature()', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.number1 = function(){
    var code = this.getFieldValue('op');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_pin_pressed = function(){
    var pin = Blockly.Python.valueToCode(this, 'button', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_touchpad' + pin] = 'from touchpad import '+pin;
    var code = pin+'.is_touched()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_pin_near = function(){
    Blockly.Python.definitions_['import_infrared_near'] = 'from infrared import near';
    var key = this.getFieldValue('key');
    var code = 'near("'+key+'")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_pin_near_more = function(){
    Blockly.Python.definitions_['import_infrared_near'] = 'from infrared import near';
    var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
    var dc = Blockly.Python.valueToCode(this, 'dc', Blockly.Python.ORDER_ATOMIC);
    var code = 'near(f=' + freq + ', h=' + dc + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_MSA301_get_acceleration = function(){
    Blockly.Python.definitions_['import_mixgoce_acc'] = 'from mixgoce import acc';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    var key = this.getFieldValue('key');
    var code;
    if (key=='x') {
        code = '-acc.acceleration[1]';
    }else if (key=='y') {
        code = '-acc.acceleration[0]';
    }else if (key=='z') {
        code = 'acc.acceleration[2]';
    }else if (key=='values') {
        code = 'acc.acceleration';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.RTC_set_datetime= function () {
    Blockly.Python.definitions_['import_mixgoce_rtc'] = 'from mixgoce import rtc_clock';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var year = Blockly.Python.valueToCode(this, "year", Blockly.Python.ORDER_ASSIGNMENT);
    var month = Blockly.Python.valueToCode(this, "month",Blockly.Python.ORDER_ASSIGNMENT);
    var day = Blockly.Python.valueToCode(this, "day",Blockly.Python.ORDER_ASSIGNMENT);
    var hour = Blockly.Python.valueToCode(this, "hour", Blockly.Python.ORDER_ASSIGNMENT);
    var minute = Blockly.Python.valueToCode(this, "minute",Blockly.Python.ORDER_ASSIGNMENT);
    var second = Blockly.Python.valueToCode(this, "second",Blockly.Python.ORDER_ASSIGNMENT);
    var week = Blockly.Python.valueToCode(this, "weekday", Blockly.Python.ORDER_ASSIGNMENT);
    var yearday = Blockly.Python.valueToCode(this, "yearday",Blockly.Python.ORDER_ASSIGNMENT); 
    var isdist = Blockly.Python.valueToCode(this, "isdist",Blockly.Python.ORDER_ASSIGNMENT);
    var code = 'rtc_clock.datetime = time.struct_time(('+year+','+month+','+day+','+hour+','+minute+','+second+','+week+','+yearday+','+isdist+'))\n';
    return code;
};

Blockly.Python.RTC_get_time = function () {
    Blockly.Python.definitions_['import_mixgoce_rtc'] = 'from mixgoce import rtc_clock';
    var code = 'rtc_clock.datetime';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Blockly.Python.sensor_mixgoce_extern_button_is_pressed = function(){
//     Blockly.Python.definitions_['import_mixgoce'] = 'import mixgoce';
//     var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
//     var code =  'mixgoce.Button(board.IO'+pin + ').is_pressed()';
//     return [code, Blockly.Python.ORDER_ATOMIC];
// };
// //ok
// Blockly.Python.sensor_mixgoce_extern_button_was_pressed = function(){
//     Blockly.Python.definitions_['import_mixgoce'] = 'import mixgoce';
//     var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
//     var code =  'mixgoce.Button(board.IO'+pin + ').was_pressed()';
//     return [code, Blockly.Python.ORDER_ATOMIC];
// };

// Blockly.Python.sensor_mixgoce_extern_button_get_presses = function(){
//     Blockly.Python.definitions_['import_mixgoce'] = 'import mixgoce';
//     var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
//     var argument = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ASSIGNMENT) || '0';
//     var code =  'mixgoce.Button(board.IO'+pin + ').get_presses(' + argument + ')';
//     return [code, Blockly.Python.ORDER_ATOMIC];
// };

// Blockly.Python.sensor_mixgoce_extern_dimmer = function(){
//     Blockly.Python.definitions_['import_analogio_AnalogIn'] = 'from analogio import AnalogIn';
//     Blockly.Python.definitions_['import_board'] = 'import board';
//     var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
//     var code =  'AnalogIn(board.IO'+ pin + ').value';
//     return [code, Blockly.Python.ORDER_ATOMIC];
// };

// Blockly.Python.sensor_mixgoce_extern_pin_near = function(){
//     Blockly.Python.definitions_['import_analogio_AnalogIn'] = 'from analogio import AnalogIn';
//     Blockly.Python.definitions_['import_board'] = 'import board';
//     var pina = Blockly.Python.valueToCode(this, 'PINA', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
//     var pinb = Blockly.Python.valueToCode(this, 'PINB', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
//     var code =  '(AnalogIn(board.IO'+ pina + ').value, AnalogIn(board.IO'+ pinb + ').value)';
//     return [code, Blockly.Python.ORDER_ATOMIC];
// };

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
    }else if (key=='AHT21') {
      Blockly.Python.definitions_['import_adafruit_ahtx0'] = 'import adafruit_ahtx0';
      code = v + ' = adafruit_ahtx0.AHTx0('+ iv+ ')\n';
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

Blockly.Python.sensor_aht11=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_adafruit_ahtx0'] = 'import adafruit_ahtx0';
    var code = sub + '.' + key;
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
    var sector = Blockly.Python.valueToCode(this, 'SECTOR', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_rc522'] = 'import rc522';
    var code = sub + '.read_card('+sector+',"' + key +'")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.rfid_readid=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_rc522'] = 'import rc522';
    var code = sub + '.read_card(0, x="id")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.rfid_readcontent=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var sector = Blockly.Python.valueToCode(this, 'SECTOR', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_rc522'] = 'import rc522';
    var code = sub + '.read_card('+sector+', x="content")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.rfid_write=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var sector = Blockly.Python.valueToCode(this, 'SECTOR', Blockly.Python.ORDER_ATOMIC);
    var cnt = Blockly.Python.valueToCode(this, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_rc522'] = 'import rc522';
    var code = sub + '.write_card('+cnt+','+sector+')\n';
    return code;
};

Blockly.Python.rfid_status=function(){
    var sub = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_rc522'] = 'import rc522';
    var code = sub + '.scan_card()==' + key;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_hot_wheel_is_touched=function(){
    var key = this.getFieldValue('key');
    var stat = this.getFieldValue('stat');
    Blockly.Python.definitions_['import_tpwheel'] = 'import tpwheel';
    var code = 'tpwheel.TouchPadWheels('+ key +').' + stat;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mixgoce_hot_wheel_degrees=function(){
    Blockly.Python.definitions_['import_tpwheel'] = 'import tpwheel';
    var code = 'tpwheel.hot_wheels_degree()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.esp32_s2_weather_init= function(block) {
    Blockly.Python.definitions_['import_weather'] = 'import weather';   
    Blockly.Python.definitions_['import_board_*'] = 'from board import *';
    var wd = Blockly.Python.valueToCode(this, 'wd', Blockly.Python.ORDER_ATOMIC);
    var ws = Blockly.Python.valueToCode(this, 'ws', Blockly.Python.ORDER_ATOMIC);
    var rain = Blockly.Python.valueToCode(this, 'rain', Blockly.Python.ORDER_ATOMIC);
    var code = "wd = weather.Weather_wd(" + wd + ")\n"
    code += "ws = weather.Weather_ws(" + ws + ")\n"
    code += "rain = weather.Weather_rain(" + rain + ")\n"
    return code;
};

Blockly.Python.esp32_s2_weather_wd=function(){
    Blockly.Python.definitions_['import_weather'] = 'import weather'; 
    var code = 'wd.wind_direction()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.esp32_s2_weather_rain=function(){
    Blockly.Python.definitions_['import_weather'] = 'import weather';
    var rain = Blockly.Python.valueToCode(this, 'rain', Blockly.Python.ORDER_ATOMIC); 
    var code = 'rain.rain_count(time_Hour='+rain+')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.esp32_s2_weather_ws=function(){
    Blockly.Python.definitions_['import_weather'] = 'import weather'; 
    var key = this.getFieldValue('key');
    if (key == 'ALL'){
        var code = 'ws.wind_speed()';
    }
    else{
        var code = 'ws.wind_speed()[' + key + ']';   
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.HCSR04 = function () {
    Blockly.Python.definitions_['import_hcsr04'] = 'import hcsr04';
    Blockly.Python.definitions_['import_board_*'] = 'from board import *';
    var dropdown_pin1 = Blockly.Python.valueToCode(this, "PIN1", Blockly.Python.ORDER_ASSIGNMENT);
    var dropdown_pin2 = Blockly.Python.valueToCode(this, "PIN2", Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.setups_['import_hcsr04'] = 'sonar = hcsr04.HCSR04(trigger_pin='+ dropdown_pin1 +', echo_pin='+ dropdown_pin2 +')\n';
    var code = 'sonar.distance()';
    return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python.PS2_init = function() {
  Blockly.Python.definitions_['import_ps2'] = 'import ps2';   
  Blockly.Python.definitions_['import_board'] = 'import board';  
  var PS2_CLK = this.getFieldValue('PS2_CLK');
  var PS2_DOU = this.getFieldValue('PS2_DOU');
  var PS2_DIN = this.getFieldValue('PS2_DIN');
  var PS2_CS = this.getFieldValue('PS2_CS');
   
  var code = 'mixgoce_ps = ps2.PS2Controller(board.'+PS2_CLK+',board.'+PS2_DOU+',board.'+PS2_DIN+',board.'+PS2_CS+')\n';  
  return code;
};

Blockly.Python.PS2_Button = function() {
  var bt=this.getFieldValue('psbt');
  var code= "mixgoce_ps.PS2_keydata()[0] & (ps2."+bt+")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.PS2_Buttons = function() {
  var bt=this.getFieldValue('psbt');
  var code= "ps2."+bt;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.PS2_State = function() {
  var bt=this.getFieldValue('btstate');
  var code= "mixgoce_ps.PS2_keydata()["+bt+"]";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.PS2_stk = function() {
  var stk=this.getFieldValue('psstk');
  var code= "mixgoce_ps.PS2_keydata()[1]["+stk+"]";
  return [code, Blockly.Python.ORDER_ATOMIC];
};