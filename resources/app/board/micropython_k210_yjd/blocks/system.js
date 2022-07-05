'use strict';

goog.provide('Blockly.Blocks.system');

goog.require('Blockly.Blocks');


Blockly.Blocks.system.HUE = 120//'#EB8045';

Blockly.Blocks['TIM_SELET'] = {
    init: function() {
		this.setColour(Blockly.Blocks.variables.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                ["tim0", "0"],
                ["tim1", "1"],
                ["tim2", "2"],
                ["tim3", "3"],
                ["tim4", "4"],
                ["tim5", "5"],
                ["tim6", "6"],
                ["tim7", "7"],
                ["tim8", "8"],
                ["tim9", "9"],
                ["tim10", "10"],
                ["tim11", "11"]
            ]), "TIM");
        this.setOutput(true);
        this.setTooltip();
    }
};

Blockly.Blocks.controls_delay = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DELAY)
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_SECOND, "s"], [Blockly.MIXLY_mSecond, "ms"], [Blockly.MIXLY_uSecond, "us"]]), 'Time');
     this.appendValueInput("DELAY_TIME", Number)
         .setCheck(Number);
    this.setFieldValue('ms','Time')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_CONTROL_DELAY);
  }
};

Blockly.Blocks.Panic_with_status_code = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendValueInput("STATUS_CODE", Number)
        .appendField(Blockly.MIXLY_MICROBIT_Panic_with_status_code)
        .setCheck(Number);
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_MICROBIT_Panic_with_status_code);
  }
};



Blockly.Blocks.controls_millis = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendDummyInput()
	      .appendField(Blockly.MIXLY_RUNTIME);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_mSecond, "ms"], [Blockly.MIXLY_uSecond, "us"]]), 'Time');
    this.setOutput(true, Number);
    this.setInputsInline(true);
	  this.setTooltip(Blockly.MIXLY_ESP32_CONTROLS_MILLIS_TOOLTIP);
  }
};


Blockly.Blocks['raw_block'] = {
  // Container.
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
        .appendField('Code Block:');
    this.appendDummyInput()
        .appendField(new Blockly.FieldMultilineInput('12345'), 'TEXT');
  }
};

Blockly.Blocks.controls_uname = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_PY_CONTORL_UNAME);

    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN + Blockly.MIXLY_MICROBIT_PY_CONTORL_UNAME);
  }
};


//////-----------------------------/-------------

Blockly.Blocks.system_timer = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
	this.appendDummyInput("")
		.appendField("Timer")
	this.appendValueInput('SUB')
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField("初始化");
	this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.MIXLY_MODE)
		.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_PYTHON_ONE_SHOT, "ONE_SHOT"], [Blockly.MIXLY_PYTHON_PERIODIC, "PERIODIC"]]), "mode");		
	this.appendValueInput("period")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField("周期ms")
        .setCheck(Number);
    this.appendValueInput('callback')
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DO);
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_ESP32_SYSTEM_TIMER_TOOLTIP);
  }
};


Blockly.Blocks.system_reset = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
	this.appendDummyInput("")
		.appendField("机器复位");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setTooltip("硬件复位");
  }
};


Blockly.Blocks.system_gc_collect = {
  init: function() {
    this.setColour(Blockly.Blocks.system.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([
				["自动", "gc.enable()"],
				["运行", "gc.collect()"]
		]), "gc");
	this.appendDummyInput("")
		.appendField("垃圾回收");	
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.setTooltip("启用自动垃圾回收");
  }
};




Blockly.Blocks.system_ticks_diff = {
  init: function() {
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendValueInput('END')
        // .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_ESP32_TIME_TICKS_DIFF);
    this.appendValueInput('START')
        // .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_ESP32_TIME_MINUS);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.MIXLY_ESP32_SYSTEM_TICKS_DIFF_TOOLTIP);
  }
};

Blockly.Blocks.system_timer_init = {
    init: function () {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput("")
            .appendField("Timer")
        this.appendValueInput('SUB')
            .appendField("初始化");
		this.appendDummyInput()
            .appendField("模式")
            .appendField(new Blockly.FieldTextInput('PWM触发'), 'PIN_OBJ');			
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_ESP32_SYSTEM_TIMER_INIT_TOOLTIP);
    }
};

Blockly.Blocks.Timer_init=Blockly.Blocks.system_timer_init;
Blockly.Blocks.timer2=Blockly.Blocks.system_timer;
Blockly.Blocks.time_ticks_diff=Blockly.Blocks.system_ticks_diff;
Blockly.Blocks.base_delay=Blockly.Blocks.controls_delay;