'use strict';

goog.provide('Blockly.Python.serial');
goog.require('Blockly.Python');

Blockly.Python.UART_SELET = function () {
    var code = this.getFieldValue('UART');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_print = function() {
  Blockly.Python.definitions_['from machine import UART'] = 'from machine import UART';
  var dropdown_uart = this.getFieldValue('mode');
  var content = Blockly.Python.valueToCode(this, 'CONTENT', Blockly.Python.ORDER_ATOMIC) || '\"\"'
  var code = "uart"+dropdown_uart+".write(str("+content+"))\n";
  return code;
};

Blockly.Python.serial_println = function() {
  Blockly.Python.definitions_['from machine import UART'] = 'from machine import UART';
  var dropdown_uart = this.getFieldValue('mode');
  var content = Blockly.Python.valueToCode(this, 'CONTENT', Blockly.Python.ORDER_ATOMIC) || '\"\"'
  var code = "uart"+dropdown_uart+".write(str("+content+")+'\\r\\n')\n";
  return code;
};

Blockly.Python.serial_print_hex = function() {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var dropdown_uart = this.getFieldValue('mode');
  var dropdown_stat = this.getFieldValue('STAT');
  var content = Blockly.Python.valueToCode(this, 'CONTENT', Blockly.Python.ORDER_ATOMIC) || '0';
  var code = "uart"+dropdown_uart+".write(str("+dropdown_stat+"("+content+"))+'\\r\\n')\n";
  return code;
};
Blockly.Python.serial_any = function() {
  Blockly.Python.definitions_['from machine import UART'] = 'from machine import UART';
  var dropdown_uart = this.getFieldValue('mode');
  var code ="uart"+dropdown_uart+".any()";
  return [code,Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_readstr = function() {
  Blockly.Python.definitions_['from machine import UART'] = 'from machine import UART';
  var dropdown_uart = this.getFieldValue('mode');
  var code ="uart"+dropdown_uart+".read()";
  return [code,Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_readline = function() {
    Blockly.Python.definitions_['from machine import UART'] = 'from machine import UART';
  var dropdown_uart = this.getFieldValue('mode');
    var code ="uart"+dropdown_uart+".readline()";
    return [code,Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.serial_softserial1 = function () {
	Blockly.Python.definitions_['from machine import UART'] = 'from machine import UART';
    Blockly.Python.definitions_['import board'] = 'import board';
	var dropdown_uart = this.getFieldValue('mode');
	var baudrate = this.getFieldValue('baudrate');
	var TX = Blockly.Python.valueToCode(this, 'TX', Blockly.Python.ORDER_ATOMIC);
	var RX = Blockly.Python.valueToCode(this, 'RX', Blockly.Python.ORDER_ATOMIC);
	var code1="board.register("+TX+",board.FPIOA.UART"+dropdown_uart+"_TX)\n";
	var code2="board.register("+RX+",board.FPIOA.UART"+dropdown_uart+"_RX)\n";
	var code3 = "uart"+dropdown_uart+"=UART(UART.UART"+dropdown_uart+", "+baudrate+", timeout=1000, read_buf_len=4096)\n";
	var code =code1+code2+code3;
	return code;
};


Blockly.Python.system_input = function() {
  // Blockly.Python.definitions_['import machine'] = 'import machine';
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  return ['input(' + str+')', Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.system_print = function() {
  // Blockly.Python.definitions_['import machine'] = 'import machine';
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "print("+str+")\n";
  return code;
};

Blockly.Python.system_print_inline = function() {
  // Blockly.Python.definitions_['import machine'] = 'import machine';
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "print("+str+',end ="")\n';
  return code;
};

Blockly.Python.system_print_end = function() {
  // Blockly.Python.definitions_['import machine'] = 'import machine';	
  var str = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var end = Blockly.Python.valueToCode(this, 'END', Blockly.Python.ORDER_ATOMIC) || '\"\"';
  var code = "print("+str+',end =' + end + ')\n';
  return code;
};

Blockly.Python.system_print_many = function() {
  // Blockly.Python.definitions_['import machine'] = 'import machine';
  var dropdown_type = this.getFieldValue('TYPE');
  
  var code = new Array(this.itemCount_);
  var default_value = '0';


  for (var n = 0; n < this.itemCount_; n++) {

  code[n] = Blockly.Python.valueToCode(this, 'ADD' + n,
    Blockly.Python.ORDER_NONE) || default_value;
  }

  var code = 'print(' + code.join(', ') + ')\n';
  return code;
};

Blockly.Python.serial_send_to_mixgoce = function() {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ce_com'] = 'import ce_com';
  var dropdown_uart = this.getFieldValue('mode');
  var dropdown_stat = this.getFieldValue('STAT');
  var content = Blockly.Python.valueToCode(this, 'CONTENT', Blockly.Python.ORDER_ATOMIC) || '0';
  var code = "ce_com.uart_tx(uart"+dropdown_uart+", "+content+", repeat="+dropdown_stat+")\n";
  return code;
};

Blockly.Python.serial_read_from_mixgoce = function() {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ce_com'] = 'import ce_com';
  var dropdown_uart = this.getFieldValue('mode');
  var code ="ce_com.uart_rx(uart"+dropdown_uart+")";
  return [code,Blockly.Python.ORDER_ATOMIC];
};