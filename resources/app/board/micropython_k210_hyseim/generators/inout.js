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
    Blockly.Python.definitions_['import_GPIO'] = 'from Maix import GPIO';
    Blockly.Python.definitions_['import_fm'] = 'from fpioa_manager import fm';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_mode = this.getFieldValue('MODE');
   
    var code = 'fm.register('+dropdown_pin+', fm.fpioa.GPIOHS'+dropdown_pin+')\n'
             + 'pin' + dropdown_pin + ' = GPIO(GPIO.GPIOHS'+dropdown_pin+', '+ dropdown_mode +')\n';
   
    return code;
};

Blockly.Python.inout_digital_write = function () {
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_stat = Blockly.Python.valueToCode(this, 'STAT', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code ='pin'+dropdown_pin +'.value('+ dropdown_stat +')\n'
    return code;
};

Blockly.Python.inout_digital_read = function () {
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code = 'pin'+dropdown_pin +'.value()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.inout_pwm_init = function () {
	Blockly.Python.definitions_['import_PWM'] = 'from machine import PWM';
	Blockly.Python.definitions_['import_Timer'] = 'from machine import Timer';
    var pin_obj = this.getFieldValue('PIN_OBJ') || 'pin#';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var varName = (pin_obj == 'pin#') ? 'pin'+dropdown_pin : Blockly.Python.variableDB_.getName(pin_obj, Blockly.Variables.NAME_TYPE);
	var freq = Blockly.Python.valueToCode(this, 'freq', Blockly.Python.ORDER_ATOMIC);
	var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
	var Timer=sub%3
	var CHANNEL=parseInt(sub/3)
	var code1 = 'tim' + sub + ' = Timer(Timer.TIMER' + Timer + ', Timer.CHANNEL' + CHANNEL + ', mode=Timer.MODE_PWM)\n';
    var code2 = varName + ' = PWM(tim' + sub + ', freq=' + freq + ', duty=0, pin='+ dropdown_pin +')\n';

    return code1+code2;
};

Blockly.Python.inout_pwm_write = function () {
    Blockly.Python.definitions_['import_PWM'] = 'from machine import PWM';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_stat = Blockly.Python.valueToCode(this, 'pwm', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code ='pin'+dropdown_pin +'.duty('+ dropdown_stat +')\n'
    return code;
};

Blockly.Python.inout_adc_init = function () {
	Blockly.Python.definitions_['import mixno'] = 'import mixno';
	var key =Blockly.Python.valueToCode(this, 'key',Blockly.Python.ORDER_ATOMIC);
	var code1 = 'ad1=mixno.adc_init(0x48,'+ key +')\n';
	var code2 = 'ad2=mixno.adc_init(0x49,'+ key +')\n';
    return code1+code2;
};


Blockly.Python.inout_adc_read = function () {
	Blockly.Python.definitions_['import mixno'] = 'import mixno';
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var code = "";
	var pin1=pin-4;
	if(pin < 4)
	{
		code = 'mixno.adc_read(ad1,'+ pin +')';
	}
	else
	{
		
		code = 'mixno.adc_read(ad2,'+ pin1 +')';
	}
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.inout_adc_Vread = function () {
	Blockly.Python.definitions_['import mixno'] = 'import mixno';
    var pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var code = "";
	var pin1=pin-4;
	if(pin < 4)
	{
		code = 'mixno.adc_vread(ad1,'+ pin +')';
	}
	else
	{
		
		code = 'mixno.adc_vread(ad2,'+ pin1 +')';
	}
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.inout_pin_attachInterrupt = function () {
	Blockly.Python.definitions_['import_GPIO'] = 'from Maix import GPIO';
    Blockly.Python.definitions_['import_fm'] = 'from fpioa_manager import fm';
    var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_mode = this.getFieldValue('mode');
    var atta = Blockly.Python.valueToCode(this, 'DO', Blockly.Python.ORDER_ATOMIC);
    var code2 = 'pin' + dropdown_pin + '.irq(' + atta + ', ' + dropdown_mode + ', GPIO.WAKEUP_NOT_SUPPORT, 7)\n';

    return code2;
};

Blockly.Python.inout_pin_disirq = function () {
	var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var code= 'key' + dropdown_pin + '.disirq()\n'
    return code;
};
/////////////////////////////////////////////

