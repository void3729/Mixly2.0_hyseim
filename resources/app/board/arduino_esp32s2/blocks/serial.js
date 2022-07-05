'use strict';

goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');
Blockly.Blocks.serial.HUE = 65;

Blockly.Blocks['serial_HardwareSerial'] = {
	init: function() {
		this.setColour(Blockly.Blocks.serial.HUE);
		this.appendDummyInput("")
		.appendField(Blockly.MIXLY_SETUP+Blockly.Hardware_Serial)
		.appendField(new Blockly.FieldDropdown(profile.default.serial_HardwareSelect), "serial_select");
		this.appendValueInput("RX", Number)
		.setCheck(Number)
		.appendField("RX#")
		.setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("TX", Number)
		.appendField("TX#")
		.setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT);
		this.appendValueInput("CONTENT", Number)
		.appendField(Blockly.MIXLY_SERIAL_BEGIN)
		.setCheck(Number);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setTooltip(Blockly.MIXLY_TOOLTIP_SOFTSERIAL.replace('%1',Blockly.Arduino.valueToCode(this, 'RX',Blockly.Arduino.ORDER_ATOMIC))
			.replace('%2',Blockly.Arduino.valueToCode(this, 'TX',Blockly.Arduino.ORDER_ATOMIC)));
	}
};

//USB串口打印
Blockly.Blocks['ESPS2_USB_Serial'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField("USB Serial")
        .appendField(Blockly.MIXLY_SERIAL_PRINT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TEXT_PRINT_Huanhang_TOOLTIP,"1"], [Blockly.MIXLY_PRINT_INLINE,"2"]]), "mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.serial.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//USB串口有数据可读
Blockly.Blocks['ESPS2_USB_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("USB Serial")
        .appendField(Blockly.MIXLY_AVAILABLE);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.serial.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//USB串口读取字符串
Blockly.Blocks['ESPS2_USB_read_String'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("USB Serial")
        .appendField(Blockly.MIXLY_SERIAL_READSTR);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.serial.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};