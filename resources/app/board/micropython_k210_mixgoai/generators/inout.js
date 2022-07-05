'use strict';

goog.provide('Blockly.Python.base');
goog.require('Blockly.Python');

Blockly.Python.PGA_SELET = function () {
    var code = this.getFieldValue('PGA');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.inout_highlow = function () {
    // Boolean values HIGH and LOW.
    var code = (this.getFieldValue('BOOL') == 'HIGH') ? '1' : '0';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// ok

Blockly.Python.inout_digital_init = function () {
    Blockly.Python.definitions_['import board'] = 'import board';
    var pin_obj = this.getFieldValue('PIN_OBJ') || 'pin#';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_mode = this.getFieldValue('MODE');
    var varName = (pin_obj == 'pin#') ? 'pin'+dropdown_pin : Blockly.Python.variableDB_.getName(pin_obj, Blockly.Variables.NAME_TYPE);
    var code =  varName + ' = board.pin(' + dropdown_pin + ', board.'+ dropdown_mode +')\n';
    return code;
};

Blockly.Python.inout_digital_write = function () {
    Blockly.Python.definitions_['import board'] = 'import board';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_stat = Blockly.Python.valueToCode(this, 'STAT', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code ='pin'+dropdown_pin +'.value('+ dropdown_stat +')\n'
    return code;
};

Blockly.Python.inout_digital_read = function () {
    Blockly.Python.definitions_['import board'] = 'import board';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code = 'pin'+dropdown_pin +'.value()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.inout_pwm_init = function () {
	Blockly.Python.definitions_['import board'] = 'import board';
    Blockly.Python.definitions_['from machine import PWM'] = 'from machine import PWM';
	Blockly.Python.definitions_['from machine import Timer'] = 'from machine import Timer';
    var pin_obj = this.getFieldValue('PIN_OBJ') || 'pin#';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var varName = (pin_obj == 'pin#') ? 'pin'+dropdown_pin : Blockly.Python.variableDB_.getName(pin_obj, Blockly.Variables.NAME_TYPE);
	var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
	var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
	var Timer=sub%3
	var CHANNEL=parseInt(sub/3)
	var code1 = 'tim' + sub + ' = Timer(Timer.TIMER' + Timer + ',Timer.CHANNEL' + CHANNEL + ', mode=Timer.MODE_PWM)\n';
    var code2 = varName + ' = PWM(tim' + sub + ',freq=' + freq + ',duty=0, pin='+ dropdown_pin +')\n';

    return code1+code2;
};

Blockly.Python.inout_pwm_write = function () {
    Blockly.Python.definitions_['from machine import PWM'] = 'from machine import PWM';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_stat = Blockly.Python.valueToCode(this, 'pwm', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code ='pin'+dropdown_pin +'.duty('+ dropdown_stat +')\n'
    return code;
};

Blockly.Python.inout_adc_init = function () {
	Blockly.Python.definitions_['import board'] = 'import board';
	var key =Blockly.Python.valueToCode(this, 'key',Blockly.Python.ORDER_ATOMIC);
	var code = 'board.adc_init('+ key +')\n';
    return code;
};


Blockly.Python.inout_adc_read = function () {
	Blockly.Python.definitions_['import board'] = 'import board';
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var code = 'board.adc_read('+ pin +')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.inout_adc_Vread = function () {
	Blockly.Python.definitions_['import board'] = 'import board';
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var code = 'board.adc_vread('+ pin +')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.inout_pin_attachInterrupt = function () {
	Blockly.Python.definitions_['import board'] = 'import board';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_mode = this.getFieldValue('mode');
    var atta = Blockly.Python.valueToCode(this, 'DO', Blockly.Python.ORDER_ATOMIC);
	var code1= 'key' + dropdown_pin + '=board.pin('+ dropdown_pin +', board.GPIO.IN, board.GPIO.PULL_NONE)\n'
    var code2 = 'key' + dropdown_pin + '.irq(' + atta + ',board.' + dropdown_mode + ',board.GPIO.WAKEUP_NOT_SUPPORT, 7)\n'

    return code1+code2;
};

Blockly.Python.inout_pin_disirq = function () {
	Blockly.Python.definitions_['import board'] = 'import board';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var code= 'key' + dropdown_pin + '.disirq()\n'
    return code;
};
/////////////////////////////////////////////

