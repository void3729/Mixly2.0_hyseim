'use strict';

goog.provide('Blockly.Python.actuator');
goog.require('Blockly.Python');

Blockly.Python.esp32_s2_onboard_music_pitch = function(block) {
  Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var code = 'mixgocar.buzzer.play(' + number_pitch + ')\n';
  return code;
};

Blockly.Python.esp32_s2_onboard_music_pitch_with_time = function(block) {
  Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var number_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var code = 'mixgocar.buzzer.play(' + number_pitch + ', ' + number_time + ')\n';
  return code;
};

Blockly.Python.esp32_s2_onboard_music_stop = function(block) {
  Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
  var code = 'mixgocar.buzzer.stop()\n';
  return code;
};

Blockly.Python.esp32_s2_onboard_music_play_list=function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var lst = Blockly.Python.valueToCode(this, 'LIST', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "mixgocar.buzzer.play_demo("+ lst +")\n";
    return code;
};

Blockly.Python.esp32_s2_music_set_tempo=function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var bpm = Blockly.Python.valueToCode(this, 'BPM', Blockly.Python.ORDER_ASSIGNMENT);
    var ticks = Blockly.Python.valueToCode(this, 'TICKS', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "mixgocar.buzzer.set_duration_tempo("+ ticks +", "+ bpm +")\n";
    return code;
};

Blockly.Python.esp32_s2_music_get_tempo=function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var code =  "mixgocar.buzzer.get_tempo()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.esp32_s2_music_reset=function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    return "mixgocar.buzzer.reset()\n";
};

Blockly.Python.esp32_mixgo_music_play_list_show=function(){
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    Blockly.Python.definitions_['import_matrix'] = 'import matrix';
    var lst = Blockly.Python.valueToCode(this, 'LIST', Blockly.Python.ORDER_ASSIGNMENT);
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ASSIGNMENT);
    // var display = Blockly.Python.valueToCode(this, 'DISPLAY', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "mixgocar.play_show("+ lst +", "+ pin +")\n";
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
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    var bright = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    // var bright = this.getFieldValue('bright');
    var code = "mixgocar." + op + ".setonoff("+bright+")\n";
    return code;
};

Blockly.Python.actuator_get_led_bright = function() {
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    var code = "mixgocar." + op + ".getonoff("+")";
    return [code, Blockly.Python.ORDER_ATOMIC];;
};

Blockly.Python.actuator_led_brightness = function() {
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    var flag = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    var code = 'mixgocar.'+op+'.setbrightness('+flag+')\n';
    return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_change_mod = function(){
    Blockly.Python.definitions_['import_mixgocar_rgb'] = 'from mixgocar import rgb';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    var key = this.getFieldValue('key');
    var code = 'rgb.change_mod("'+key+'")\n';
    return code;
};

Blockly.Python.actuator_onboard_neopixel_write = function(){
  Blockly.Python.definitions_['import_mixgocar_rgb'] = 'from mixgocar import rgb';
  var code= 'rgb.write()\n';   
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_show_one = function(){
  Blockly.Python.definitions_['import_mixgocar_rgb'] = 'from mixgocar import rgb';
  var value_led = Blockly.Python.valueToCode(this, '_LED_', Blockly.Python.ORDER_ATOMIC);
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= 'rgb.show_one('+value_led+', '+value_rvalue+', '+value_gvalue+', '+value_bvalue+')\n';
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_show_all = function(){
  Blockly.Python.definitions_['import_mixgocar_rgb'] = 'from mixgocar import rgb';
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= 'rgb.show_all('+value_rvalue+', '+value_gvalue+', '+value_bvalue+')\n';
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_show_all_chase = function(){
  Blockly.Python.definitions_['import_mixgocar_rgb'] = 'from mixgocar import rgb';
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var number_time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ATOMIC);
  var code= 'rgb.color_chase('+value_rvalue+', '+value_gvalue+', '+value_bvalue+', '+number_time+')\n';
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_show_all_rainbow = function(){
  Blockly.Python.definitions_['import_mixgocar_rgb'] = 'from mixgocar import rgb';
  var number_time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ATOMIC);
  var code= 'rgb.rainbow_cycle('+number_time+')\n';
  return code;
};

Blockly.Python.actuator_extern_led_bright = function() {
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var pin = Blockly.Python.valueToCode(this,'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var bright = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    // var bright = this.getFieldValue('bright');
    var code = "mixgocar.Led(board.IO" + pin + ").setonoff("+bright+")\n";
    return code;
};

Blockly.Python.actuator_extern_get_led_bright = function() {
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var pin = Blockly.Python.valueToCode(this,'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var code = "mixgocar.Led(board.IO" + pin + ").getonoff("+")";
    return [code, Blockly.Python.ORDER_ATOMIC];;
};

Blockly.Python.actuator_extern_led_brightness = function() {
    Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
    var pin = Blockly.Python.valueToCode(this,'PIN', Blockly.Python.ORDER_ATOMIC).replace("IO", "");
    var flag = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    var code = 'mixgocar.Led(board.IO'+pin+').setbrightness('+flag+')\n';
    return code;
};

Blockly.Python.actuator_stepper_keep=function(){
    var v = this.getFieldValue('VAR');
    Blockly.Python.definitions_['import_mixgocar_'+ v] = 'from mixgocar import '+ v;
    var speed = Blockly.Python.valueToCode(this, 'speed', Blockly.Python.ORDER_ASSIGNMENT);
    var code = v+"("+ speed +")\n";
    return code;
};

Blockly.Python.actuator_stepper=function(){
    var v = this.getFieldValue('VAR');
    Blockly.Python.definitions_['import_mixgocar_'+ v] = 'from mixgocar import '+ v;
    var speed = Blockly.Python.valueToCode(this, 'speed', Blockly.Python.ORDER_ASSIGNMENT);
    var steps = Blockly.Python.valueToCode(this, 'steps', Blockly.Python.ORDER_ASSIGNMENT);
    var code = v+"("+ speed +", "+ steps +")\n";
    return code;
};

Blockly.Python.actuator_stepper_stop=function(){
    Blockly.Python.definitions_['import_mixgocar_stop'] = 'from mixgocar import stop';
    var code = "stop()\n";
    return code;
};

Blockly.Python.actuator_stepper_readbusy=function(){
    Blockly.Python.definitions_['import_mixgocar_readbusy'] = 'from mixgocar import readbusy';
    var code = "readwork()";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.actuator_stepper_wheel=function(){
    var wheel = this.getFieldValue('wheel');
    Blockly.Python.definitions_['import_mixgocar_step'+ wheel.slice(0,2)] = 'from mixgocar import step'+ wheel.slice(0,2);
    Blockly.Python.definitions_['import_ms32006'] = 'import ms32006';
    var direction = this.getFieldValue('direction');
    var speed = Blockly.Python.valueToCode(this, 'speed', Blockly.Python.ORDER_ASSIGNMENT);
    var steps = Blockly.Python.valueToCode(this, 'steps', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "step" + wheel.slice(0,2) + ".move(ms32006.MOT"+ wheel.slice(-2) +", "+ direction +", "+ speed +", "+ steps +")\n";
    return code;
};

Blockly.Python.actuator_stepper_wheel_stop=function(){
    var wheel = this.getFieldValue('wheel');
    Blockly.Python.definitions_['import_mixgocar_step'+ wheel.slice(0,2)] = 'from mixgocar import step'+ wheel.slice(0,2);
    Blockly.Python.definitions_['import_ms32006'] = 'import ms32006';
    var code = "step" + wheel.slice(0,2) + ".stop(ms32006.MOT"+ wheel.slice(-2) +")\n";
    return code;
};

Blockly.Python.actuator_stepper_wheel_readbusy=function(){
    var wheel = this.getFieldValue('wheel');
    Blockly.Python.definitions_['import_mixgocar_step'+ wheel.slice(0,2)] = 'from mixgocar import step'+ wheel.slice(0,2);
    Blockly.Python.definitions_['import_ms32006'] = 'import ms32006';
    var code = "step" + wheel.slice(0,2) + ".readwork(ms32006.MOT"+ wheel.slice(-2) +")";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.esp32_s2_mixgo_car_audio_init= function() {
    Blockly.Python.definitions_['import_audiobusio'] = 'import audiobusio';   
    Blockly.Python.definitions_['import_board'] = 'import board';   
    return "audio = audiobusio.I2SOut(board.IO34, board.IO35, board.IO33)\n";
};

Blockly.Python.esp32_s2_mixgo_car_audio_wave_play=function(){
    Blockly.Python.definitions_['import_audiocore'] = 'import audiocore';
    var wav = Blockly.Python.valueToCode(this, 'wav', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "audio.play(audiocore.WaveFile(" + wav +"))\n";
    return code;
};

Blockly.Python.esp32_s2_mixgo_car_audio_wave_is_playing=function(){
    var code = "audio.playing";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

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

Blockly.Python.actuator_dc_motor=function(){
    Blockly.Python.definitions_['import_mixgocar_dc_motor'] = 'from mixgocar import dc_motor';
    Blockly.Python.definitions_['import_ms32006'] = 'import ms32006';
    var wheel = this.getFieldValue('wheel');
    Blockly.Python.definitions_['import_mixgocar_step'+ wheel] = 'from mixgocar import step'+ wheel;
    var v = this.getFieldValue('direction');
    var speed = Blockly.Python.valueToCode(this, 'speed', Blockly.Python.ORDER_ATOMIC);
    var code = "step"+wheel+".dc_motor(ms32006."+v+","+speed+")\n";
    return code;
};