'use strict';

goog.provide('Blockly.Arduino.serial');

goog.require('Blockly.Arduino');

Blockly.Arduino.serial_HardwareSerial = function () {
	var serial_select = this.getFieldValue('serial_select');
	var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
	//var serial_no=serial_select.charAt(serial_select.length – 1);
	Blockly.Arduino.definitions_['include_HardwareSerial'] = '#include <HardwareSerial.h>';
	var RX = Blockly.Arduino.valueToCode(this, 'RX', Blockly.Arduino.ORDER_ATOMIC);
	var TX = Blockly.Arduino.valueToCode(this, 'TX', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_serial_' + serial_select] =  ''+serial_select + '.begin(' +content+',SERIAL_8N1,'+ RX + ',' + TX + ');';
	return '';
};

//USB串口打印
Blockly.Arduino.ESPS2_USB_Serial = function() {
	var mode= this.getFieldValue('mode');
	var data= Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['include_ESPS2_USB_Serial'] = '#include "USB.h"\n'
                                                              +'USBCDC USBSerial;\n'
                                                              +'String ESPS2_USB_read_String() {\n'
                                                              +'  String data = "";\n'
                                                              +'  while (USBSerial.available() > 0) {\n'
                                                              +'   data = String(data) + String(char(USBSerial.read()));\n'
                                                              +'   delay(2);\n'
                                                              +'  }\n'
                                                              +'  return data;\n'
                                                              +'}';
	Blockly.Arduino.setups_['setup_serial_Serial'] = 'USB.begin();\n'
                                                    +'USBSerial.begin(9600);';
	if(mode==1)
  {
    var code=code = 'USBSerial.println('+data+');\n';
  }
    if(mode==2)
  {
    var code=code = 'USBSerial.print('+data+');\n';
  }
	return code;
};

//USB串口有数据可读
Blockly.Arduino.ESPS2_USB_read = function() {
   Blockly.Arduino.definitions_['include_ESPS2_USB_Serial'] = '#include "USB.h"\n'
                                                              +'USBCDC USBSerial;\n'
                                                              +'String ESPS2_USB_read_String() {\n'
                                                              +'  String data = "";\n'
                                                              +'  while (USBSerial.available() > 0) {\n'
                                                              +'   data = String(data) + String(char(USBSerial.read()));\n'
                                                              +'   delay(2);\n'
                                                              +'  }\n'
                                                              +'  return data;\n'
                                                              +'}';
  Blockly.Arduino.setups_['setup_serial_Serial'] = 'USB.begin();\n'
                                                    +'USBSerial.begin(9600);';
    var code = 'USBSerial.available() > 0';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//USB串口读取字符串
Blockly.Arduino.ESPS2_USB_read_String = function() {
    var code = 'ESPS2_USB_read_String()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};