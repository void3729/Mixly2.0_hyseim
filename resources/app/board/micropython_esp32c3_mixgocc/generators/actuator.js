'use strict';

goog.provide('Blockly.Python.actuator');
goog.require('Blockly.Python');

Blockly.Python.esp32_music_set_tempo=function(){
    Blockly.Python.definitions_['import_music'] = 'import music';
    var bpm = Blockly.Python.valueToCode(this, 'BPM', Blockly.Python.ORDER_ASSIGNMENT);
    var ticks = Blockly.Python.valueToCode(this, 'TICKS', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "music.set_tempo("+ ticks +", "+ bpm +")\n";
    return code;
};

Blockly.Python.esp32_music_get_tempo=function(){
    Blockly.Python.definitions_['import_music'] = 'import music';
    var code =  "music.get_tempo()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.esp32_onboard_music_pitch = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var code = 'music.pitch(' + number_pitch + ')\n';
  return code;
};

Blockly.Python.esp32_onboard_music_pitch_with_time = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var number_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = 'music.pitch_time(' + number_pitch + ', ' + number_time + ')\n';
  return code;
};

Blockly.Python.esp32_onboard_music_stop = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = 'music.stop('+')\n';
  return code;
};

Blockly.Python.esp32_onboard_music_play_list=function(){
    Blockly.Python.definitions_['import_music'] = 'import music';
    var lst = Blockly.Python.valueToCode(this, 'LIST', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "music.play("+ lst +")\n";
    return code;
};

Blockly.Python.esp32_music_play_list=function(){
    Blockly.Python.definitions_['import_music'] = 'import music';
    var lst = Blockly.Python.valueToCode(this, 'LIST', Blockly.Python.ORDER_ASSIGNMENT);
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "music.play("+ lst +", "+ pin +")\n";
    return code;
};

Blockly.Python.esp32_music_reset=function(){
    Blockly.Python.definitions_['import_music'] = 'import music';
    return "music.reset()\n";
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
    Blockly.Python.definitions_['import_mixgo_cc'] = 'import mixgo_cc';
    var bright = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    // var bright = this.getFieldValue('bright');
    var code = "mixgo_cc." + op + "_pwm("+bright+")\n";
    return code;
};

Blockly.Python.actuator_get_led_bright = function() {
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_mixgo_cc'] = 'import mixgo_cc';
    var code = "mixgo_cc." +op + "_brightness("+")";
    return [code, Blockly.Python.ORDER_ATOMIC];;
};

Blockly.Python.actuator_led_brightness = function() {
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_mixgo_cc'] = 'import mixgo_cc';
    var flag = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    var code = "mixgo_cc." + op + '_pwm('+flag+')\n';
    return code;
};

Blockly.Python.actuator_onboard_neopixel_write=function(){
  Blockly.Python.definitions_['import_mixgo_cc'] = 'import mixgo_cc';
  var code= 'mixgo_cc.rgb.write()\n';   
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb=function(){
  Blockly.Python.definitions_['import_mixgo_cc'] = 'import mixgo_cc';
  var value_led = Blockly.Python.valueToCode(this, '_LED_', Blockly.Python.ORDER_ATOMIC);
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= 'mixgo_cc.rgb['+value_led+'] = ('+value_gvalue+', '+value_rvalue+', '+value_bvalue+')\n';
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_all=function(){
  Blockly.Python.definitions_['import_mixgo_cc'] = 'import mixgo_cc';
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= 'mixgo_cc.rgb.fill(('+value_gvalue+', '+value_rvalue+', '+value_bvalue+'))\n';
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

Blockly.Python.actuator_ms32006_init = function () {
  Blockly.Python.definitions_['import ms32006'] = 'import ms32006';
  var address =this.getFieldValue('mode')
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var sub1 =Blockly.Python.valueToCode(this, 'SUB1',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'=ms32006.MS32006('+ sub1+',addr='+ address +')\n';
    return code;
};

Blockly.Python.actuator_ms32006_dcmotor = function () {
  Blockly.Python.definitions_['import ms32006'] = 'import ms32006';
  var direction =this.getFieldValue('direction')
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var speed =Blockly.Python.valueToCode(this, 'speed',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.dc_motor('+ direction+','+ speed +')\n';
    return code;
};

Blockly.Python.actuator_ms32006_stepper = function () {
  Blockly.Python.definitions_['import ms32006'] = 'import ms32006';
  var mode =this.getFieldValue('mode')
  var direction =this.getFieldValue('direction')
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var speed =Blockly.Python.valueToCode(this, 'speed',Blockly.Python.ORDER_ATOMIC);
  var steps =Blockly.Python.valueToCode(this, 'steps',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.move('+ mode+','+ direction+','+ speed +','+ steps +')\n';
    return code;
};