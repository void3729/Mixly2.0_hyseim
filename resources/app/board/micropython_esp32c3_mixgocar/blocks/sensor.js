'use strict';

goog.provide('Blockly.Blocks.sensor');

goog.require('Blockly.Blocks');

Blockly.Blocks.sensor.HUE = 40//'#9e77c9'//40;



Blockly.Blocks['sensor_mixgocar_pin_near_line'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.TEXT_TRIM_LEFT, "0"], 
                [Blockly.MIXGO_LEFT_MID, "1"],
                [Blockly.MIXGO_RIGHT_MID, "2"],
                [Blockly.Msg.TEXT_TRIM_RIGHT, "3"]
                ]), "key")
            .appendField(Blockly.MIXGO_LINE_SENSOR_VAL);
        this.setOutput(true,Number);
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode0 = Blockly.MIXLY_ESP32_SENSOR_MIXGO_PIN_NEAR_TOOLTIP;
            var mode1 = Blockly.MIXLY_ESP32_NEAR;
            return mode0 + mode1
        });
    }
};

Blockly.Blocks['sensor_mixgocar_pin_near'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXGO_LEFT_FRONT, "0"], 
                [Blockly.MIXGO_RIGHT_FRONT, "1"],
                [Blockly.MIXGO_LEFT_BACK, "3"],
                [Blockly.MIXGO_RIGHT_BACK, "2"]
                ]), "key")
            .appendField(Blockly.MIXGO_PROXIMITY_SENSOR);
        this.setOutput(true,Number);
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode0 = Blockly.MIXLY_ESP32_SENSOR_MIXGO_PIN_NEAR_TOOLTIP;
            var mode1 = Blockly.MIXLY_ESP32_NEAR;
            return mode0 + mode1
        });
    }
};

Blockly.Blocks['sensor_mixgocar_pin_near_state_change'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MIXGO_CAR_SENSOR_ONBOARD_CHANGE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_MIXGO_CAR_SENSOR_ONBOARD_AUTO_CHANGE, "-1"],
                [Blockly.MIXLY_MIXGO_CAR_USE_LINE_ONLY, "0"], 
                [Blockly.MIXLY_MIXGO_CAR_USE_PROXIMITY_ONLY, "1"]
                ]), "key");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};


Blockly.Blocks['sensor_mixgocar_battery_left'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_MIXGO_CAR_BATTERY_LEFT);
        this.setOutput(true);
        this.setInputsInline(true);
    }
};


//not used
Blockly.Blocks['sensor_mixgocar_button_is_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        // this.appendValueInput('btn')
        // .appendField(Blockly.MIXLY_BUTTON)
        // .setCheck(Number);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_BUTTON+Blockly.MIXLY_IS_PRESSED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_SENOR_IS_PRESSED);
    }
};

Blockly.Blocks['sensor_mixgocar_button_was_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        // this.appendValueInput('btn')
        // .appendField(Blockly.MIXLY_BUTTON)
        // .setCheck(Number);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_BUTTON+Blockly.MIXLY_WAS_PRESSED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_SENOR_WAS_PRESSED);
    }
};

//not used
Blockly.Blocks['sensor_mixgocar_button_get_presses'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        // this.appendValueInput('btn')
        // .appendField(Blockly.MIXLY_BUTTON)
        // .setCheck(Number);        
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_BUTTON+Blockly.MIXLY_GET_PRESSES);
        this.appendValueInput('VAR')
            .setCheck(Number)    
            .appendField(Blockly.MIXLY_GET_PRESSES_TIME);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN+Blockly.MIXLY_BUTTON+Blockly.MIXLY_GET_PRESSES);
    }
};

////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['sensor_mixgoce_light'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_LIGHT);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.ESP32_SENSOR_NIXGO_LIGHT_TOOLTIP);
    }
};

Blockly.Blocks['sensor_mixgoce_sound'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_SOUND);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.ESP32_SENSOR_NIXGO_SOUND_TOOLTIP);
    }
};

Blockly.Blocks['sensor_mixgoce_temperature'] = {
  	init: function() {
	    this.setColour(Blockly.Blocks.sensor.HUE);
	    this.appendDummyInput("")
	    .appendField(Blockly.MIXLY_GETTEMPERATUE);
	    this.setInputsInline(true);
	    this.setOutput(true, Number);
  	}
};

Blockly.Blocks['number1'] = {
   	init: function() {
	    this.setColour(Blockly.Blocks.sensor.HUE);
	    this.appendDummyInput("")
	    .appendField(new Blockly.FieldDropdown([["T1", "touch_T1"], ["T2", "touch_T2"],["T3", "touch_T3"],["T4", "touch_T4"]]), 'op')
	    this.setOutput(true);
	    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
	}
};

Blockly.Blocks['sensor_mixgoce_pin_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("button")
            .appendField(Blockly.MIXLY_ESP32_TOUCH_SENSOR)
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_IS_TOUCHED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_sensor_pin_pressed);
    }
};




Blockly.Blocks['sensor_mixgoce_pin_near_more'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET+Blockly.MIXLY_ESP32_NEAR);
        this.appendValueInput('freq')
            .appendField(Blockly.MIXLY_FREQUENCY)
            .setCheck(Number);  
        this.appendValueInput('dc')
            .appendField(Blockly.MIXLY_ESP32_THRESHOLD)
            .setCheck(Number);              
        this.setOutput(true,Number);
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode0 = Blockly.MIXLY_ESP32_SENSOR_MIXGO_PIN_NEAR_TOOLTIP;
            var mode1 = Blockly.MIXLY_ESP32_NEAR;
            return mode0 + mode1
        });
    }
};

Blockly.Blocks['sensor_MSA301_get_acceleration'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
        .appendField(Blockly.MIXGO_ACC_8658_SENSOR)
        .appendField(new Blockly.FieldDropdown([
            [Blockly.MixGo_MPU9250_AX, "0"],
            [Blockly.MixGo_MPU9250_AY, "1"],
            [Blockly.MixGo_MPU9250_AZ, "2"],
            [Blockly.MixGo_MPU9250_GX, "3"],
            [Blockly.MixGo_MPU9250_GY, "4"],
            [Blockly.MixGo_MPU9250_GZ, "5"],
            [Blockly.MIXLY_DATA, "-1"]
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_ACCELERATION);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('key');
            var mode0 = Blockly.MIXLY_MICROBIT_PY_STORAGE_GET;
            var mode1 = Blockly.MIXLY_MICROBIT_Direction;
            var mode2 = Blockly.MIXLY_MICROBIT_JS_ACCELERATION1;
            var TOOLTIPS = {
                'x': 'x',
                'y': 'y',
                'z': 'z',
                '(x,y,z)':Blockly.MIXLY_MICROBIT_Shiliang_Direction,
            };
            return mode0 +TOOLTIPS[mode]+mode1+mode2;
        });
    }
};

Blockly.Blocks['sensor_mixgoce_extern_button_is_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_BUTTON)
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_IS_PRESSED);   
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_SENOR_IS_PRESSED);
    }
};

Blockly.Blocks['sensor_mixgoce_extern_button_was_pressed'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_BUTTON)
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_WAS_PRESSED);
        this.setOutput(true, Boolean);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_SENOR_WAS_PRESSED);
    }
};

Blockly.Blocks['sensor_mixgoce_extern_button_get_presses'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_BUTTON)
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_GET_PRESSES);
        this.appendValueInput('VAR')
            .setCheck(Number)    
            .appendField(Blockly.MIXLY_GET_PRESSES_TIME);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN+Blockly.MIXLY_BUTTON+Blockly.MIXLY_GET_PRESSES);
    }
};

Blockly.Blocks['sensor_mixgoce_extern_dimmer'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_DISPLAY_MATRIX_ROTATE+Blockly.MIXLY_POTENTIOMETER);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);   
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_EXTERN_VALUE);     
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_mixgoce_extern_pin_near'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_IR_RANGE);
        this.appendValueInput("PINA", Number)
            .appendField(Blockly.MIXLY_PIN+"A")
            .setCheck(Number);   
        this.appendValueInput("PINB", Number)
            .appendField(Blockly.MIXLY_PIN+"B")
            .setCheck(Number);  
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_EXTERN_VALUE);     
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_ESP32_SENSOR_MIXGO_PIN_NEAR_TOOLTIP+Blockly.MIXLY_ESP32_NEAR);
    }
};

Blockly.Blocks.sensor_use_i2c_init = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('I2CSUB')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH+"I2C")
            .setCheck("var");
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_MAKE)
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_SETUP + Blockly.Msg.LISTS_SET_INDEX_INPUT_TO)
            .appendField(new Blockly.FieldDropdown([
                ["LTR308", "LTR308"],
                ["HP203B", "HP203B"],
                ["SHTC3", "SHTC3"],
                ["VL53L0X","VL53L0X"]
                ]), "key");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setFieldValue("LTR308","key");
    }
};


Blockly.Blocks['sensor_LTR308'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_ESP32_EXTERN_LIGHT+" LTR308");
        this.appendValueInput('SUB')
            //.appendField("BMP280")
            .setCheck("var");  
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_GET_LIGHT_INTENSITY);     
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_VL530LX'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_LASER_RANGE+" VL53L0X");
        this.appendValueInput('SUB')
            //.appendField("BMP280")
            .setCheck("var");  
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_GET_DISTANCE+'(mm)');     
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['sensor_shtc3'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_TEM_HUM+" SHTC3")
            .setCheck("var");
        this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([
            [Blockly.MIXLY_GETTEMPERATUE, "0"],
            [Blockly.MIXLY_GETHUMIDITY, "1"],
            [Blockly.MIXLY_DHT11_T_H, "ALL"]
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('key');
            var TOOLTIPS = {
                "0":Blockly.MIXLY_MICROBIT_SENSOR_SHT_temperature_TOOLTIP,
                "1":Blockly.MIXLY_MICROBIT_SENSOR_SHT_HUM_TOOLTIP,
                "ALL":Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM_HUM
            };
            return TOOLTIPS[mode]
        });
    }
};

Blockly.Blocks['sensor_hp203'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_Altitude+MSG.catSensor+" HP203B")
            .setCheck("var");
        this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([
            [Blockly.MIXLY_GETPRESSURE, "p_data()"],
            [Blockly.MIXLY_GETTEMPERATUE, "t_data()"],
            [Blockly.MIXLY_GET_ALTITUDE, "h_data()"],
            ]), "key");
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};


Blockly.Blocks.rfid_use_spi_init = {
    init: function () {
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendValueInput('SPISUB')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH+"SPI")
            .setCheck("var");
        this.appendValueInput('PINSUB')
            .appendField("CS")
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_MAKE + "RFID")
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_SETUP);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['rfid_read'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_COMMUNICATION_RFID_READ);
        this.appendValueInput('SUB')
            .setCheck("var");       
        this.setOutput(true, Number);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['rfid_write'] = {
    init: function(){
        this.setColour(Blockly.Blocks.sensor.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_COMMUNICATION_RFID_WRITE);
        this.appendValueInput('SUB')
            .setCheck("var")
        this.appendValueInput('CONTENT')
            .appendField(Blockly.MIXLY_COMMUNICATION_WRITE_NUM)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.PS2_init={
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.MIXLY_SETUP+Blockly.PS2);
   this.appendDummyInput("")  
   .appendField('CLK#')
   .appendField(new Blockly.FieldDropdown(profile.default.spi_A_pin), "PS2_CLK")
   .appendField('DOU#')
   .appendField(new Blockly.FieldDropdown(profile.default.spi_B_pin), "PS2_DOU")
   .appendField('DIN#')
   .appendField(new Blockly.FieldDropdown(profile.default.spi_C_pin), "PS2_DIN")
   .appendField('CS#')
   .appendField(new Blockly.FieldDropdown(profile.default.spi_D_pin), "PS2_CS");
   // this.appendDummyInput("")
   // .appendField(Blockly.PS2_setRumble)
   // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON,"true"],[Blockly.MIXLY_OFF,"false"]]), "rumble");
   this.setInputsInline(true);
   this.setPreviousStatement(true);
   this.setNextStatement(true);
   this.setTooltip('');
   this.setFieldValue("IO1","PS2_CLK");
   this.setFieldValue("IO2","PS2_DOU");
   this.setFieldValue("IO4","PS2_DIN");
   this.setFieldValue("IO5","PS2_CS");
 }
};


var PSBUTTON =[
[Blockly.PS2_TRIANGLE,"PSB_GREEN"],
[Blockly.PS2_CIRCLE,"PSB_RED"],
[Blockly.PS2_CROSS,"PSB_BLUE"],
[Blockly.PS2_SQUARE,"PSB_PINK"],
[Blockly.PS2_L1,"PSB_L1"],
[Blockly.PS2_L2,"PSB_L2"],
// ["PSB_L3","PSB_L3"],
[Blockly.PS2_R1,"PSB_R1"],
[Blockly.PS2_R2,"PSB_R2"],
// ["PSB_R3","PSB_R3"],
[Blockly.PS2_UP,"PSB_PAD_UP"],
[Blockly.PS2_RIGHT,"PSB_PAD_RIGHT"],
[Blockly.PS2_DOWN,"PSB_PAD_DOWN"],
[Blockly.PS2_LEFT,"PSB_PAD_LEFT"],
[Blockly.PS2_SELECT,"PSB_SELECT"],
[Blockly.PS2_START,"PSB_START"]
];

//
Blockly.Blocks.PS2_vibration={
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.PS2+Blockly.PS2_setRumble)
   .appendField(Blockly.MIXLY_STM32_OLED_SMALL+MSG.catActuator_motor)
   .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_MICROBIT_PY_COMMUNICATE_OFF, "0"],
                [Blockly.MIXLY_MICROBIT_PY_COMMUNICATE_ON, "1"],   
                ]), "smotorstate")            
   .appendField(Blockly.MIXLY_STM32_OLED_BIG+MSG.catActuator_motor+Blockly.MIXLY_MIXGOPE_AMPLITUDE)
   this.appendValueInput("AMP", Number)   
   this.setTooltip(Blockly.MIXLY_STM32_OLED_BIG+MSG.catActuator_motor+Blockly.MIXLY_MIXGOPE_AMPLITUDE+"0-100");
   this.setInputsInline(true);
   this.setPreviousStatement(true);
   this.setNextStatement(true);
 }
};

//
Blockly.Blocks.PS2_Button={
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.PS2_BUTTON)
   .appendField(new Blockly.FieldDropdown(PSBUTTON), "psbt")
   .appendField(Blockly.MIXLY_PULSEIN_STAT)
   .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_BUTTON_HOLD ,"Button"]
    // ,[Blockly.MIXLY_BUTTON_PRESSED, "ButtonPressed"]
    // ,[Blockly.MIXLY_BUTTON_RELEASED,"ButtonReleased"]
    // ,[Blockly.MIXLY_CHANGE,"NewButtonState"]
    ]), "btstate");
   this.setOutput(true, Boolean);
   this.setTooltip('');
 }
};

//
Blockly.Blocks.PS2_State={
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.MIXLY_GET+Blockly.PS2_BUTTON)
   .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_PULSEIN_STAT ,"0"]
    ,[Blockly.MIXLY_MICROBIT_JS_I2C_VALUE, "1"]
    // ,[Blockly.MIXLY_BUTTON_RELEASED,"ButtonReleased"]
    // ,[Blockly.MIXLY_CHANGE,"NewButtonState"]
    ]), "btstate");
   this.setOutput(true, Boolean);
   this.setTooltip('');
 }
};

Blockly.Blocks.PS2_Buttons={
  init: function() {
   this.setColour(Blockly.Blocks.sensor.HUE);
   this.appendDummyInput("")
   .appendField(Blockly.PS2_BUTTON)
   .appendField(new Blockly.FieldDropdown(PSBUTTON), "psbt")
   this.setOutput(true, Boolean);
   this.setTooltip('');
 }
};

Blockly.Blocks.PS2_stk={
  init: function() {
    this.setColour(Blockly.Blocks.sensor.HUE);
    var PSSTK =[
    [Blockly.PS2_RX,"0"],
    [Blockly.PS2_RY,"1"],
    [Blockly.PS2_LX,"2"],
    [Blockly.PS2_LY,"3"],
    ];
    this.appendDummyInput("")
    .appendField(Blockly.PS2_stick)
    .appendField(new Blockly.FieldDropdown(PSSTK), "psstk");
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

