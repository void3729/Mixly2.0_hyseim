'use strict';

goog.provide('Blockly.Blocks.actuator');
goog.require('Blockly.Blocks');

Blockly.Blocks.actuator.HUE = 100

Blockly.Blocks.actuator_Servo_init = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SETUP_SERVO);
    this.appendDummyInput()
	.appendField(Blockly.MIXLY_SERVO);
	this.appendValueInput("PIN", Number)
		.appendField(Blockly.MIXLY_PIN)
		.setCheck(Number);	
	this.appendValueInput('time')
		.appendField(Blockly.MIXLY_1611419883060652_5)
		.setCheck(Number);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
  }
};

Blockly.Blocks.actuator_Servo = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SETTING);
    this.appendDummyInput()
	.appendField(Blockly.MIXLY_SERVO);
	this.appendValueInput("PIN", Number)
		.appendField(Blockly.MIXLY_PIN)
		.setCheck(Number);	
	this.appendValueInput('range')
		.appendField("角度")
		.setCheck(Number);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
  }
};

Blockly.Blocks.actuator_PAC9685_init = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
		this.appendDummyInput()
			.appendField(Blockly.MIXLY_SETUP); 
		this.appendDummyInput()
			.appendField("16路舵机"); 			
		this.appendValueInput('address')
			.appendField("地址")
			.setCheck(Number);				
        this.appendValueInput('SUB')
            .setCheck("var")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("通信");  			
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
        this.setTooltip("使用PCA9685驱动16路舵机并备注IIC端口");
    }
};

Blockly.Blocks.actuator_PAC9685_Servo = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_SETTING);
    this.appendDummyInput()
	.appendField("16路舵机");
	this.appendValueInput("index")
		.appendField("编号")
		.setCheck(Number);	
	this.appendValueInput('range')
		.appendField("角度")
		.setCheck(Number);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip("使用PCA9685驱动16路舵机，输入编号机角度");
  }
};



Blockly.Blocks.actuator_rgb_init = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
	this.appendValueInput('SUB')
		.appendField(Blockly.MIXLY_SETUP)
		.setCheck("var");
	this.appendValueInput("PIN", Number)
		.appendField("管脚")
		.setCheck(Number);	
	this.appendValueInput('num')
		.appendField("灯数")
		.setCheck(Number);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
  }
};


Blockly.Blocks.actuator_rgb_set = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
	this.appendValueInput('SUB')
		.appendField("")
		.setCheck("var");
	this.appendValueInput('num')
		.appendField("灯号")
		.setCheck(Number);	
	this.appendValueInput('R')
		.appendField("R值")
		.setCheck(Number);	
	this.appendValueInput('G')
		.appendField("G值")
		.setCheck(Number);	
	this.appendValueInput('B')
		.appendField("B值")
		.setCheck(Number);	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
  }
};

Blockly.Blocks.actuator_rgb_display = {
  init: function() {
    this.setColour(Blockly.Blocks.actuator.HUE);
	this.appendValueInput('SUB')
		.appendField("")
		.setCheck("var");
    this.appendDummyInput()
    .appendField("生效");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
  }
};

Blockly.Blocks.actuator_led_init = {
	init: function() {
	  this.setColour(Blockly.Blocks.actuator.HUE);
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_SETUP);
	  this.appendDummyInput()
		  .appendField("LED")
		  .appendField(new Blockly.FieldDropdown([
				  [Blockly.MIXLY_1611419883060652_1, "LED_R"],
                  [Blockly.MIXLY_1611419883060652_2, "LED_G"],
                  [Blockly.MIXLY_1611419883060652_3, "LED_B"]
		  ]), "key");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setInputsInline(true);
	  this.setTooltip();
	}
  };
  
  
  Blockly.Blocks['ledswitch'] = {
	  init: function() {
		  this.setColour(Blockly.Blocks.actuator.HUE);
		  this.appendDummyInput("")
			  .appendField(new Blockly.FieldDropdown([
				  [Blockly.MIXLY_4DIGITDISPLAY_ON, "0"],
				  [Blockly.MIXLY_4DIGITDISPLAY_OFF, "1"]
			  ]), "flag");
		  this.setOutput(true);
		  this.setTooltip();
	  }
  };
  
  
  Blockly.Blocks.actuator_led_bright = {
	init: function() {
	  this.setColour(Blockly.Blocks.actuator.HUE);
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_SETTING);
	  this.appendDummyInput()
		  .appendField("LED")
		  .appendField(new Blockly.FieldDropdown([
				  [Blockly.MIXLY_1611419883060652_1, "LED_R"],
				  [Blockly.MIXLY_1611419883060652_2, "LED_G"],
				  [Blockly.MIXLY_1611419883060652_3, "LED_B"]
		  ]), "key");
	  this.appendValueInput('bright')
	  .appendField(Blockly.MIXLY_PULSEIN_STAT);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setInputsInline(true);
	  this.setTooltip();
	}
  };
  
  
  Blockly.Blocks.actuator_led_PWMinit = {
	init: function() {
	  this.setColour("#95bb53");
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_SETUP);
	  this.appendDummyInput()
		  .appendField("PWM")
		  .appendField(new Blockly.FieldDropdown([
				  [Blockly.MIXLY_1611419883060652_1, "LED_R"],
				  [Blockly.MIXLY_1611419883060652_2, "LED_G"],
				  [Blockly.MIXLY_1611419883060652_3, "LED_B"]
		  ]), "key");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setInputsInline(true);
	  this.setTooltip();
	}
  };
  
  Blockly.Blocks.actuator_led_PWM = {
	  init: function () {
	  this.setColour("#95bb53");
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_SETTING);
	  this.appendDummyInput()
		  .appendField("PWM")
		  .appendField(new Blockly.FieldDropdown([
				  [Blockly.MIXLY_1611419883060652_1, "LED_R"],
				  [Blockly.MIXLY_1611419883060652_2, "LED_G"],
				  [Blockly.MIXLY_1611419883060652_3, "LED_B"]
		  ]), "key");
	  this.appendValueInput('bright')
		  .appendField(Blockly.blynk_IOT_WidgetLED_VALUE)
		  .setCheck(Number);
	  this.appendDummyInput()
	  .appendField("%");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setTooltip();
	  }
  };
  
  
  Blockly.Blocks.actuator_Servo_init = {
	init: function() {
	  this.setColour(Blockly.Blocks.actuator.HUE);
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_SETUP);
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_QDP_servomotor21);
	  this.appendValueInput("PIN", Number)
		  .appendField(Blockly.MIXLY_1611419883060652_4)
		  .setCheck(Number);
	  this.appendValueInput('time')
		  .appendField(Blockly.MIXLY_1611419883060652_5)
		  .setCheck(Number);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setInputsInline(true);
	  this.setTooltip();
	}
  };
  
  Blockly.Blocks.actuator_Servo = {
	init: function() {
	  this.setColour(Blockly.Blocks.actuator.HUE);
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_SETTING);
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_QDP_servomotor21);
	  this.appendValueInput("PIN", Number)
		  .appendField(Blockly.MIXLY_1611419883060652_4)
		  .setCheck(Number);
	  this.appendValueInput('range')
		  .appendField(Blockly.MIXLY_QDP_servomotor23)
		  .setCheck(Number);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setInputsInline(true);
	  this.setTooltip();
	}
  };
  
  
  Blockly.Blocks.actuator_syn8266= {
	init: function() {
	 this.setColour(Blockly.Blocks.actuator.HUE);
	  this.appendDummyInput()
		  .appendField("SYN8266");
	  this.appendDummyInput()
	  .appendField(Blockly.MIXLY_1611419883060652_6);
	  this.appendDummyInput()
		.appendField(Blockly.MIXLY_1611419883060652_7)
		.appendField(new Blockly.FieldDropdown([['uart1', '1'], ['uart2', '2'], ['uart3', '3']]), 'mode');
	  this.appendValueInput('data')
		  .appendField(Blockly.MIXLY_QDP_OLED30)
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .setCheck(String);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	this.setInputsInline(true);
	this.setTooltip(Blockly.MIXLY_1611419883060652_8);
	}
  };
  
  //RGB
  Blockly.Blocks.actuator_ws2812_init = {
	  init: function () {
		  this.setColour(Blockly.Blocks.actuator.HUE);
		  this.appendDummyInput("")
			  .appendField(Blockly.MIXLY_RGB)
		  this.appendValueInput('SUB')
			  .appendField(Blockly.MIXLY_SETUP)
			  .setCheck("var");
		  this.appendValueInput("PIN", Number)
			 .setCheck(Number)
			 .setAlign(Blockly.ALIGN_RIGHT)
			 .appendField(Blockly.MIXLY_PIN);
		  this.appendValueInput("LEDCOUNT")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_COUNT);
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip(Blockly.MIXLY_RGB_PIN_COUNT);
	  }
  };
  
  Blockly.Blocks.actuator_ws2812_set_led = {
	  init: function () {
		  this.setColour(Blockly.Blocks.actuator.HUE);
		  this.appendDummyInput("")
			  .appendField(Blockly.MIXLY_RGB)
		  this.appendValueInput('SUB')
			  .setCheck("var");
		  this.appendValueInput("_LED_")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_NUM);
		  this.appendValueInput("RVALUE")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_R);
		  this.appendValueInput("GVALUE")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_G);
		  this.appendValueInput("BVALUE")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_B);
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip('');
		  this.setTooltip(Blockly.MIXLY_RGB_NUM_R_G_B);
	  }
  };
  
  Blockly.Blocks.actuator_ws2812_display = {
	  init: function () {
		  this.setColour(Blockly.Blocks.actuator.HUE);
		  this.appendDummyInput("")
			  .appendField(Blockly.MIXLY_RGB)
		  this.appendValueInput('SUB')
			  .setCheck("var");
		  this.appendDummyInput()
			  .appendField(Blockly.MIXLY_ESP32_RGB_WRITE)
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip('');
		  this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_WRI);
	  }
  };
  
  //RGB
  Blockly.Blocks.board_ws2812_init = {
	  init: function () {
		  this.setColour(Blockly.Blocks.actuator.HUE);
		  this.appendDummyInput("")
			  .appendField(Blockly.MIXLY_1611419901214320_1)
		  this.appendValueInput('SUB')
			  .appendField(Blockly.MIXLY_SETUP)
			  .setCheck("var");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip(Blockly.MIXLY_RGB_PIN_COUNT);
	  }
  };
  
  Blockly.Blocks.board_ws2812_set_led = {
	  init: function () {
		  this.setColour(Blockly.Blocks.actuator.HUE);
		  this.appendDummyInput("")
			  .appendField(Blockly.MIXLY_1611419901214320_1)
		  this.appendValueInput('SUB')
			  .setCheck("var");
		  this.appendValueInput("_LED_")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_NUM);
		  this.appendValueInput("RVALUE")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_R);
		  this.appendValueInput("GVALUE")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_G);
		  this.appendValueInput("BVALUE")
			  .setCheck(Number)
			  .setAlign(Blockly.ALIGN_RIGHT)
			  .appendField(Blockly.MIXLY_RGB_B);
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip('');
		  this.setTooltip(Blockly.MIXLY_RGB_NUM_R_G_B);
	  }
  };
  
  Blockly.Blocks.board_ws2812_display = {
	  init: function () {
		  this.setColour(Blockly.Blocks.actuator.HUE);
		  this.appendDummyInput("")
			  .appendField(Blockly.MIXLY_1611419901214320_1)
		  this.appendValueInput('SUB')
			  .setCheck("var");
		  this.appendDummyInput()
			  .appendField(Blockly.MIXLY_ESP32_RGB_WRITE)
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip('');
		  this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_WRI);
	  }
  };
