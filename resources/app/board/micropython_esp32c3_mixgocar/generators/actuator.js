'use strict';

goog.provide('Blockly.Python.actuator');
goog.require('Blockly.Python');


Blockly.Python.actuator_onboard_neopixel_write=function(){
  Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
  var code= 'mixgocar.rgb.write()\n';   
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb=function(){
  Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
  var value_led = Blockly.Python.valueToCode(this, '_LED_', Blockly.Python.ORDER_ATOMIC);
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= 'mixgocar.rgb['+value_led+'] = ('+value_gvalue+', '+value_rvalue+', '+value_bvalue+')\n';
  return code;
};

Blockly.Python.actuator_onboard_neopixel_rgb_all=function(){
  Blockly.Python.definitions_['import_mixgocar'] = 'import mixgocar';
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= 'mixgocar.rgb.fill(('+value_gvalue+', '+value_rvalue+', '+value_bvalue+'))\n';
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
    var v = this.getFieldValue('VAR');
    Blockly.Python.definitions_['import_mixgocar_'+ v] = 'from mixgocar import '+ v;
    var code = v+"()\n";
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

Blockly.Python.actuator_dc_motor=function(){
    Blockly.Python.definitions_['import_ms32006'] = 'import ms32006';
    var wheel = this.getFieldValue('wheel');
    Blockly.Python.definitions_['import_mixgocar_step'+ wheel] = 'from mixgocar import step'+ wheel;
    var v = this.getFieldValue('direction');
    var speed = Blockly.Python.valueToCode(this, 'speed', Blockly.Python.ORDER_ATOMIC);
    var code = "step"+wheel+".dc_motor(ms32006."+v+","+speed+")\n";
    return code;
};

Blockly.Python.actuator_dc_motor_stop=function(){
    Blockly.Python.definitions_['import_ms32006'] = 'import ms32006';
    var wheel = this.getFieldValue('wheel');
    Blockly.Python.definitions_['import_mixgocar_step'+ wheel] = 'from mixgocar import step'+ wheel;
    var v = this.getFieldValue('direction');
    var code = "step"+wheel+".dc_motor(ms32006."+v+")\n";
    return code;
};