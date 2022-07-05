'use strict';

goog.provide('Blockly.Blocks.game');
goog.require('Blockly.Blocks');

Blockly.Blocks.game.HUE = '#2E9883'


Blockly.Blocks.nes_joystick_init = {
    init: function () {
        this.setColour(Blockly.Blocks.game.HUE);
		this.appendDummyInput()
            .appendField("NES 初始化");
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)		
            .appendField("PS2手柄");
		this.appendValueInput("miso_pin", Number)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("DAT#")
			.setCheck(Number);
		this.appendValueInput("mosi_pin", Number)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("CMD#")
			.setCheck(Number);				
		this.appendValueInput("cs_pin", Number)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("SEL#")
			.setCheck(Number);	
		this.appendValueInput("clk_pin", Number)
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("CLK#")
			.setCheck(Number);	
        this.appendValueInput('vol')
			.setAlign(Blockly.ALIGN_RIGHT)
            .appendField("音量")
            .setCheck(Number);		
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("初始化NES,使用PS2手柄控制");
    }
};

Blockly.Blocks.nes_keyboard_init = {
    init: function () {
        this.setColour(Blockly.Blocks.game.HUE);
		this.appendDummyInput()
            .appendField("NES 初始化");
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)		
            .appendField("UART键盘");							
        this.appendValueInput('vol')
			.setAlign(Blockly.ALIGN_RIGHT)
            .appendField("音量")
            .setCheck(Number);		
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("初始化NES,使用串口键盘控制");
    }
};

Blockly.Blocks.nes_run = {
    init: function () {
        this.setColour(Blockly.Blocks.game.HUE);
		this.appendDummyInput()
            .appendField("NES 运行游戏");
        this.appendValueInput('path')
            .appendField("路径")
            .setCheck(String);		
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("运行NES游戏ROM");
    }
};

