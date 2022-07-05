'use strict';

goog.provide('Blockly.Python.actuator');
goog.require('Blockly.Python');

Blockly.Python.esp32_s2_onboard_music_pitch = function(block) {
  Blockly.Python.definitions_['import_music_buzzer'] = 'from music import buzzer';
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var code = 'buzzer.play(' + number_pitch + ')\n';
  return code;
};

Blockly.Python.esp32_s2_onboard_music_pitch_with_time = function(block) {
  Blockly.Python.definitions_['import_music_buzzer'] = 'from music import buzzer';
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var number_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = 'buzzer.play(' + number_pitch + ', ' + number_time + ')\n';
  return code;
};

Blockly.Python.esp32_s2_onboard_music_stop = function(block) {
  Blockly.Python.definitions_['import_music_buzzer'] = 'from music import buzzer';
  var code = 'buzzer.stop()\n';
  return code;
};

Blockly.Python.esp32_s2_onboard_music_play_list=function(){
    var lst = Blockly.Python.valueToCode(this, 'LIST', Blockly.Python.ORDER_ASSIGNMENT);
    Blockly.Python.definitions_['import_music_buzzer'] = 'from music import buzzer';
    Blockly.Python.definitions_['import_music_'+lst] = 'from music import '+lst;
    var code = "buzzer.play_demo("+ lst +")\n";
    return code;
};

Blockly.Python.esp32_s2_music_set_tempo=function(){
    Blockly.Python.definitions_['import_music_buzzer'] = 'from music import buzzer';
    var bpm = Blockly.Python.valueToCode(this, 'BPM', Blockly.Python.ORDER_ASSIGNMENT);
    var ticks = Blockly.Python.valueToCode(this, 'TICKS', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "buzzer.set_duration_tempo("+ ticks +", "+ bpm +")\n";
    return code;
};

Blockly.Python.esp32_s2_music_get_tempo=function(){
    Blockly.Python.definitions_['import_music_buzzer'] = 'from music import buzzer';
    var code =  "buzzer.get_tempo()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.esp32_s2_music_reset=function(){
    Blockly.Python.definitions_['import_music_buzzer'] = 'from music import buzzer';
    return "buzzer.reset()\n";
};

Blockly.Python.esp32_mixgo_music_play_list_show=function(){
    Blockly.Python.definitions_['import_music_buzzer'] = 'from music import buzzer';
    Blockly.Python.definitions_['import_matrix'] = 'import matrix';
    var lst = Blockly.Python.valueToCode(this, 'LIST', Blockly.Python.ORDER_ASSIGNMENT);
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ASSIGNMENT);
    // var display = Blockly.Python.valueToCode(this, 'DISPLAY', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "play_show("+ lst +", "+ pin +")\n";
    return code;
};


Blockly.Python.number = function () {
    var code = this.getFieldValue('op');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.ledswitch = function () {
    var code = this.getFieldValue('flag');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.actuator_led_bright = function() {
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_led'+op] = 'from led import '+op;
    var bright = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    // var bright = this.getFieldValue('bright');
    var code = op + ".setonoff("+bright+")\n";
    return code;
};

Blockly.Python.actuator_get_led_bright = function() {
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_led'+op] = 'from led import '+op;
    var code = op + ".getonoff("+")";
    return [code, Blockly.Python.ORDER_ATOMIC];;
};

Blockly.Python.actuator_led_brightness = function() {
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_led'+op] = 'from led import '+op;
    var flag = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    var code = op+'.setbrightness('+flag+')\n';
    return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_change_mod = function(){
    Blockly.Python.definitions_['import_pixels_rgb'] = 'from pixels import rgb';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    var key = this.getFieldValue('key');
    var code = 'rgb.change_mod("'+key+'")\n';
    return code;
};


Blockly.Python.actuator_onboard_neopixel_write = function(){
  Blockly.Python.definitions_['import_pixels_rgb'] = 'from pixels import rgb';
  var code= 'rgb.write()\n';   
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_show_one = function(){
  Blockly.Python.definitions_['import_pixels_rgb'] = 'from pixels import rgb';
  var value_led = Blockly.Python.valueToCode(this, '_LED_', Blockly.Python.ORDER_ATOMIC);
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= 'rgb.show_one('+value_led+', '+value_rvalue+', '+value_gvalue+', '+value_bvalue+')\n';
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_show_all = function(){
  Blockly.Python.definitions_['import_pixels_rgb'] = 'from pixels import rgb';
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= 'rgb.show_all('+value_rvalue+', '+value_gvalue+', '+value_bvalue+')\n';
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_show_all_chase = function(){
  Blockly.Python.definitions_['import_pixels_rgb'] = 'from pixels import rgb';
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var number_time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ATOMIC);
  var code= 'rgb.color_chase('+value_rvalue+', '+value_gvalue+', '+value_bvalue+', '+number_time+')\n';
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_show_all_rainbow = function(){
  Blockly.Python.definitions_['import_pixels_rgb'] = 'from pixels import rgb';
  var number_time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ATOMIC);
  var code= 'rgb.rainbow_cycle('+number_time+')\n';
  return code;
};

Blockly.Python.esp32_s2_audio_init= function(block) {
    Blockly.Python.definitions_['import_audiobusio'] = 'import audiobusio';   
    Blockly.Python.definitions_['import_board'] = 'import board'; 
    var name=Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var sclk = Blockly.Python.valueToCode(this, 'sclk', Blockly.Python.ORDER_ATOMIC);
    var ws = Blockly.Python.valueToCode(this, 'ws', Blockly.Python.ORDER_ATOMIC);
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    return name+" = audiobusio.I2SOut(board." + sclk + ", board." + ws + ", board." + data + ")\n";
};

Blockly.Python.esp32_s2_audio_wave_play=function(){
    Blockly.Python.definitions_['import_audiocore'] = 'import audiocore';
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ASSIGNMENT);
    var wav = Blockly.Python.valueToCode(this, 'wav', Blockly.Python.ORDER_ASSIGNMENT);
    var code = v+".play(audiocore.WaveFile(" + wav +"))\n";
    return code;
};

Blockly.Python.esp32_s2_audio_wave_is_playing=function(){
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ASSIGNMENT);
    var code = v+".playing";
    return [code, Blockly.Python.ORDER_ATOMIC];
};
/*
Blockly.Python.actuator_extern_led_bright = function() {
    Blockly.Python.definitions_['import_mixgoce'] = 'import mixgoce';
    var pin = Blockly.Python.valueToCode(this,'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var bright = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    // var bright = this.getFieldValue('bright');
    var code = "mixgoce.Led(board.IO" + pin + ").setonoff("+bright+")\n";
    return code;
};

Blockly.Python.actuator_extern_get_led_bright = function() {
    Blockly.Python.definitions_['import_mixgoce'] = 'import mixgoce';
    var pin = Blockly.Python.valueToCode(this,'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var code = "mixgoce.Led(board.IO" + pin + ").getonoff("+")";
    return [code, Blockly.Python.ORDER_ATOMIC];;
};

Blockly.Python.actuator_extern_led_brightness = function() {
    Blockly.Python.definitions_['import_mixgoce'] = 'import mixgoce';
    var pin = Blockly.Python.valueToCode(this,'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var flag = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    var code = 'mixgoce.Led(board.IO'+pin+').setbrightness('+flag+')\n';
    return code;
};
*/
Blockly.Python.servo_init = function() {
  Blockly.Python.definitions_['import_servo'] = 'import servo';
  Blockly.Python.definitions_['import_board'] = 'import board';
  var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN',Blockly.Python.ORDER_ATOMIC);
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var code = v+' = servo.Servo(board.'+dropdown_pin+')\n';
  return code;
};

Blockly.Python.servo_move = function() {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_degree = Blockly.Python.valueToCode(this, 'DEGREE', Blockly.Python.ORDER_ATOMIC);
  var code = v+'.write_angle('+value_degree+')\n';
  return code;
};

Blockly.Python.servo_speed_360 = function() {
  var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(this, 'SPEED', Blockly.Python.ORDER_ATOMIC);
  var code = v+'.set_speed('+speed+')\n';
  return code;
};