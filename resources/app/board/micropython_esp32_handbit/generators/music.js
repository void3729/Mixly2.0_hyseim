//'use strict';

//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');

Blockly.Python.addReservedWords('music');

var _microbit_music_default_pin = 0;

Blockly.Python['mpython_music_play'] = function(block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var dropdown_melody = block.getFieldValue('melody');
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  // var pin = block.getFieldValue('pin')
  var code = '';
  if (pin == '6'){
    code = 'music.play(music.' + dropdown_melody + ', wait=False, loop=False)\n';
  }else{
    code = 'music.play(music.' + dropdown_melody + ', pin=Pin.P' + pin + ', wait=False, loop=False)\n';
  }  
  return code;
};

Blockly.Python['mpython_music_play_until_end'] = function(block) {
  //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var dropdown_melody = block.getFieldValue('melody');
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if (pin == '6'){
    code = 'music.play(music.' + dropdown_melody + ', wait=True, loop=False)\n';
  }else{
    code = 'music.play(music.' + dropdown_melody + ', pin=Pin.P' + pin + ', wait=True, loop=False)\n';
  }  
  return code;
};

Blockly.Python['microbit_music_play_built_in'] = function(block) {
  //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var dropdown_melody = block.getFieldValue('melody');
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE' ? 'True' : 'False';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE' ? 'True' : 'False';
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  // var pin = block.getFieldValue('pin')
  var code = '';
  if (pin == '6'){
    code = 'music.play(music.' + dropdown_melody + ', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  }else{
    code = 'music.play(music.' + dropdown_melody + ', pin=Pin.P' + pin + ', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  }
  
  return code;
};

Blockly.Python['microbit_music_pitch'] = function(block) {
  //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  var number_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if (pin == '6') {
    code = 'music.pitch(' + number_pitch + ', ' + number_duration + ')\n';
  } else {
    code = 'music.pitch(' + number_pitch + ', ' + number_duration + ', pin=Pin.P' + pin + ')\n';
  }
  // var code = 'music.pitch(' + number_pitch + ', ' + number_duration + ', pin=Pin.P' + pin + ')\n';
  return code;
};

Blockly.Python['microbit_music_play_list_of_notes'] = function(block) {
  //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var value_notes = Blockly.Python.valueToCode(block, 'notes', Blockly.Python.ORDER_ATOMIC);
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE' ? 'True' : 'False';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE' ? 'True' : 'False';
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if (pin == '6') {
    code = 'music.play(' + value_notes  + ', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  } else {
    code = 'music.play(' + value_notes + ', pin=Pin.P' + pin + ', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  }
  // var code = 'music.play(' + value_notes + ', pin=Pin.P' + pin + ', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  //var code = 'music.play(' + value_notes + ',pin' + _microbit_music_default_pin +', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  return code;
};

Blockly.Python['microbit_music_reset'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'music.reset()\n';
  return code;
};

Blockly.Python['microbit_music_stop'] = function(block) {
  //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if (pin == '6') {
    code = `music.stop()` + '\n';
  } else {
    code = `music.stop(Pin.P${pin})` + '\n';
  }
  
  return code;
};

Blockly.Python['microbit_music_set_tempo'] = function(block) { // 节拍
  Blockly.Python.definitions_['import_music'] = 'import music';
  var value_ticks = Blockly.Python.valueToCode(block, 'ticks', Blockly.Python.ORDER_ATOMIC);
  var value_bpm = Blockly.Python.valueToCode(block, 'bpm', Blockly.Python.ORDER_ATOMIC);
  var code = 'music.set_tempo(ticks=' + value_ticks + ', bpm=' + value_bpm +')\n';
  return code;
};

Blockly.Python['microbit_music_set_tempo_speed'] = function(block) { // 节拍 -播放速度
  Blockly.Python.definitions_['import_music'] = 'import music';
  //var value_ticks = Blockly.Python.valueToCode(block, 'ticks', Blockly.Python.ORDER_ATOMIC);
  var value_bpm = Blockly.Python.valueToCode(block, 'bpm', Blockly.Python.ORDER_ATOMIC);
  var code = 'music.set_tempo(ticks= 4, bpm=' + value_bpm*120 +')\n';
  return code;
};

Blockly.Python['microbit_music_get_tempo'] = function(block) { //获取节拍
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = 'music.get_tempo()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_set_music_pin'] = function(block) {
  //Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var pin =  Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  _microbit_music_default_pin = pin;  
  return '';
};
