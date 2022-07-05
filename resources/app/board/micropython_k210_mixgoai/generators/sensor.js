'use strict';

goog.provide('Blockly.Python.sensor');

goog.require('Blockly.Python');


Blockly.Python.KEY_SELET = function () {
    var code = this.getFieldValue('KEY');
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.sensor_button_init = function () {
    Blockly.Python.definitions_['import board'] = 'import board';
	var key =Blockly.Python.valueToCode(this, 'key',Blockly.Python.ORDER_ATOMIC);
	var code1 = 'button'+key+'=board.pin('+key+',board.GPIO.IN,board.GPIO.PULL_UP)\n';
	return code1;  
};

Blockly.Python.sensor_button_read = function () {
    Blockly.Python.definitions_['import board'] = 'import board';
	var key =Blockly.Python.valueToCode(this, 'key',Blockly.Python.ORDER_ATOMIC);
	var code = 'not button'+key+'.value()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python.sensor_dht11 = function () {
    Blockly.Python.definitions_['import dht11'] = 'import dht11';
    var TYPE = this.getFieldValue('TYPE');
    var PIN = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	if(TYPE=="2")
		var code ='dht11.read_data('+PIN+')';
	else
		var code ='dht11.read_data('+PIN+')['+TYPE+']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.HCSR04 = function () {
    Blockly.Python.definitions_['import_sonar'] = 'import hcr04';
    var dropdown_pin1 = Blockly.Python.valueToCode(this, "PIN1", Blockly.Python.ORDER_ASSIGNMENT);
    var dropdown_pin2 = Blockly.Python.valueToCode(this, "PIN2", Blockly.Python.ORDER_ASSIGNMENT);
    var code = 'hcr04.Sonar(' + dropdown_pin1 + ', ' + dropdown_pin2 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
}


Blockly.Python.sensor_mpu9250_attachGestureInterrupt = function(){
    Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
    var gesture = this.getFieldValue('gesture');
    var branch = Blockly.Python.statementToCode(this, 'DO');
    var d=branch || Blockly.Python.PASS;
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    if (v == "mpu")
        Blockly.Python.definitions_['import_mixgo_mpu'] = 'from mixgo import mpu';
	var code = 'if '+v+'.mpu9250_is_gesture("' + gesture + '"):\n' + d;
    return code;
}

Blockly.Python.sensor_mpu9250_gesture = function(){
    Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
    var gesture = this.getFieldValue('gesture');
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    if (v == "mpu")
        Blockly.Python.definitions_['import_mixgo_mpu'] = 'from mixgo import mpu';    
    var code = v+'.mpu9250_is_gesture("' + gesture + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
}


Blockly.Python.sensor_mpu9250_get_acceleration = function(){
    Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
    var key = this.getFieldValue('key');
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    if (v == "mpu")
        Blockly.Python.definitions_['import_mixgo_mpu'] = 'from mixgo import mpu';    
    var code = v+'.mpu9250_get_' + key + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_adxl345_get_acceleration = function(){
    Blockly.Python.definitions_['import_adxl345'] = 'import adxl345';
    var key = this.getFieldValue('key');
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var code;
    if (key=='x') {
        code = v + '.readX()';
    }else if (key=='y') {
        code = v + '.readY()';
    }else if (key=='z') {
        code = v + '.readZ()';
    }else if (key=='values') {
        code = v + '.readXYZ()';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mpu9250_get_magnetic = function(){
    Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
    var key = this.getFieldValue('key');
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    if (v == "mpu")
        Blockly.Python.definitions_['import_mixgo_mpu'] = 'from mixgo import mpu';    
    var code = v+'.mpu9250_magnetic_' + key + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mpu9250_get_gyro = function(){
    Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
    var key = this.getFieldValue('key');
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    if (v == "mpu")
        Blockly.Python.definitions_['import_mixgo_mpu'] = 'from mixgo import mpu';    
    var code = v+'.mpu9250_gyro_' + key + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_mpu9250_calibrate_compass= function(){
    Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
    Blockly.Python.definitions_['import_mixgo_compass'] = 'from mixgo import compass';
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    return ''+v+'.calibrate()\n';
};

Blockly.Python.sensor_mpu9250_temperature = function(){
    Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    if (v == "mpu")
        Blockly.Python.definitions_['import_mixgo_mpu'] = 'from mixgo import mpu';    
    return [v+'.mpu9250_get_temperature()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensor_mpu9250_field_strength= function(){
    Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    if (v == "compass")
        Blockly.Python.definitions_['import_mixgo_compass'] = 'from mixgo import compass';    
    var compass = this.getFieldValue('compass');
    var a;
    if(compass =='strength'){
        a = v+'.get_field_strength()';
    }
    else if(compass =='heading'){
        a = v+'.heading()';
    }
    return [a, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.sensor_compass_reset = function(block) {
  Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
  Blockly.Python.definitions_['import_mixgo_compass'] = 'from mixgo import compass';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  return ''+v+'.reset_calibrate()\n';
};


Blockly.Python.sensor_use_i2c_init=function(){
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var iv = Blockly.Python.valueToCode(this, 'I2CSUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
	var code;
    if (key=='MPU9250') {
      Blockly.Python.definitions_['import_mpu9250'] = 'import mpu9250';
	   code = v + ' = mpu9250.' + key + "("+ iv+ ')\n';
    }else if (key=='BMP280') {
      Blockly.Python.definitions_['import_bmp280'] = 'import bmp280';
	  code = v + ' = bmp280.' + key + "("+ iv+ ')\n';
    }else if (key=='SHT20') {
      Blockly.Python.definitions_['import_sht20'] = 'import sht20';
	  code = v + ' = sht20.' + key + "("+ iv+ ')\n';
    }else if (key=='ADXL345') {
      Blockly.Python.definitions_['import_adxl345'] = 'import adxl345';
      code = v + ' = adxl345.' + key + "("+ iv+ ')\n';
    }
    return code;
};

Blockly.Python.sensor_bmp=function(){
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_bmp280'] = 'import bmp280';
	var code = v + '.' + key;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.sensor_sht=function(){
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue('key');
    Blockly.Python.definitions_['import_sht20'] = 'import sht20';
    var code = v + '.' + key;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
