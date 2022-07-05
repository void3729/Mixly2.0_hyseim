'use strict';

Blockly.Python.nes_joystick_init = function () {
  Blockly.Python.definitions_['import nes_no'] = 'import nes_no';
  var cs_pin = Blockly.Python.valueToCode(this, 'cs_pin', Blockly.Python.ORDER_ATOMIC);
  var clk_pin = Blockly.Python.valueToCode(this, 'clk_pin', Blockly.Python.ORDER_ATOMIC);
  var mosi_pin = Blockly.Python.valueToCode(this, 'mosi_pin', Blockly.Python.ORDER_ATOMIC);
  var miso_pin = Blockly.Python.valueToCode(this, 'miso_pin', Blockly.Python.ORDER_ATOMIC);  
  var vol = Blockly.Python.valueToCode(this, 'vol', Blockly.Python.ORDER_ATOMIC);
  var code = "nes_no.joystick_init("+cs_pin+","+clk_pin+","+mosi_pin+","+miso_pin+","+vol+")\n";
  return code;  
};

Blockly.Python.nes_keyboard_init = function () {
  Blockly.Python.definitions_['import nes_no'] = 'import nes_no';  
  var vol = Blockly.Python.valueToCode(this, 'vol', Blockly.Python.ORDER_ATOMIC);
  var code = "nes_no.keyboard_init("+vol+")\n";
  return code;  
};

Blockly.Python.nes_run = function () {
  Blockly.Python.definitions_['import nes_no'] = 'import nes_no';
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var code = "nes_no.run("+path+")\n";
  return code;  
};

