'use strict';

goog.provide('Blockly.Blocks.base');
goog.require('Blockly.Blocks');

Blockly.Blocks.base.HUE = 20//'#ae3838';//40;


Blockly.Blocks['inout_highlow'] = {
   init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), 'BOOL')
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_ESP32_INOUT_HIGHLOW_TOOLTIP);
  }
};


Blockly.Blocks['inout_digital_init'] = {
    init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendDummyInput()
		.appendField("初始化 ");	
	this.appendDummyInput("")
		//.appendField(Blockly.MIXLY_MICROPYTHON_AS)
		// .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_MODE+Blockly.Msg.LISTS_SET_INDEX_INPUT_TO)
		.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_Digital_PINMODEOUT, "GPIO.OUT"],
			[Blockly.MIXLY_Digital_PINMODEIN, "GPIO.IN"],
			[Blockly.MIXLY_PINMODEPULLUP, "GPIO.IN, board.GPIO.PULL_UP"],
			[Blockly.MIXLY_PINMODEPULLDOWN, "GPIO.IN, board.GPIO.PULL_DOWN"]
			]),"MODE")
	this.appendValueInput("PIN", Number)
		.appendField("管脚")
		.setCheck(Number);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setInputsInline(true);
	this.setTooltip(Blockly.MIXLY_ESP32_INOUT_DIGITAL_INIT_TOOLTIP);
      }
};

Blockly.Blocks.inout_digital_write = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN",Number)
        .appendField(Blockly.MIXLY_Digital_PINMODEOUT)
        .setCheck(Number);
    this.appendValueInput("STAT")
        .appendField(Blockly.MIXLY_STAT)
        .setCheck([Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_read = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
        .appendField(Blockly.MIXLY_Digital_PINMODEIN)
        .setCheck(Number);
    this.appendDummyInput()
        .appendField("值");
	this.setInputsInline(true);
    this.setOutput(true, [Boolean,Number]);
    this.setTooltip(Blockly.MIXLY_ESP32_INOUT_DIGITAL_READ_TOOLTIP);
  }
};


Blockly.Blocks.inout_pwm_init = {
	init: function() {
    this.setColour(Blockly.Blocks.base.HUE);	
    this.appendDummyInput()
		.appendField("初始化 PWM输出");			
	this.appendValueInput("PIN", Number)
		.appendField("管脚")
		.setCheck(Number);
	this.appendValueInput('freq')
		.appendField("频率")
		.setCheck(Number);	
	this.appendValueInput('VAR')
		.appendField("定时器")
		.setCheck("var");		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
   this.setTooltip("初始化PWM输出设置，需要调用定时器");
	}
};

Blockly.Blocks.inout_pwm_write = {
  init: function() {
    this.setColour(Blockly.Blocks.base.HUE);
    this.appendValueInput("PIN",Number)
        .appendField("PWM输出")
        .setCheck(Number);
	this.appendValueInput('pwm')
		.appendField("占空比")
		.setCheck(Number);
	this.appendDummyInput()
		.appendField("%");		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
   this.setTooltip("PWM输出,值范围为0-100%，可以为小数");
  }
};


Blockly.Blocks.inout_pin_attachInterrupt = {
  init: function() {
	this.setColour(Blockly.Blocks.base.HUE);
	this.appendDummyInput()
		.appendField("硬件中断");
    this.appendValueInput("PIN", Number)
        .appendField("管键")
        .setCheck(Number);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_MODE)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_RISING, "GPIO.IRQ_RISING"], [Blockly.MIXLY_FALLING, "GPIO.IRQ_FALLING"], [Blockly.MIXLY_CHANGE, "GPIO.IRQ_BOTH"]]), "mode");
    this.appendValueInput('DO')
        .appendField(Blockly.MIXLY_DO)
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_ESP32_INOUT_PIN_ATTACHINTERRUPT_TOOLTIP);
  }
};


Blockly.Blocks.inout_pin_disirq = {
  init: function() {
	this.setColour(Blockly.Blocks.base.HUE);
	this.appendDummyInput()
		.appendField("取消中断");
    this.appendValueInput("PIN", Number)
        .appendField("管键")
        .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
   this.setTooltip("取消中断");
  }
};









