'use strict';

goog.provide('Blockly.Python.actuator');
goog.require('Blockly.Python');

Blockly.Python.actuator_Servo_init = function () {
	Blockly.Python.definitions_['import board'] = 'import board';
	Blockly.Python.definitions_['from machine import PWM'] = 'from machine import PWM';
	Blockly.Python.definitions_['from machine import Timer'] = 'from machine import Timer';
	var key = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var time = Blockly.Python.valueToCode(this,'time', Blockly.Python.ORDER_ATOMIC);
	var Timer=time%3
	var CHANNEL=parseInt(time/3)
	var code1 = 'tim' + time + ' = Timer(Timer.TIMER' + Timer + ',Timer.CHANNEL' + CHANNEL + ', mode=Timer.MODE_PWM)\n';	
	var code2 = 'pse'+key+'=PWM(tim'+time+', freq=50, duty=2.5, pin='+key+')\n';
	return code1+code2;  
};


Blockly.Python.actuator_Servo = function () {
  Blockly.Python.definitions_['from machine import PWM'] = 'from machine import PWM';
  var key = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var range = Blockly.Python.valueToCode(this,'range', Blockly.Python.ORDER_ATOMIC);
  var code = "pse"+key+".duty("+range+"/18.0+2.5)\n";
  return code;  
};


Blockly.Python.actuator_PAC9685_init = function () {
	Blockly.Python.definitions_['from servo import Servos'] = 'from servo import Servos';
	var address =Blockly.Python.valueToCode(this, 'address',Blockly.Python.ORDER_ATOMIC);
	var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
	var code = 'servos=Servos('+ sub +',address='+ address +')\n';
    return code;
};

Blockly.Python.actuator_PAC9685_Servo = function () {
  Blockly.Python.definitions_['from servo import Servos'] = 'from servo import Servos';
  var index = Blockly.Python.valueToCode(this,'index', Blockly.Python.ORDER_ATOMIC);
  var range = Blockly.Python.valueToCode(this,'range', Blockly.Python.ORDER_ATOMIC);
  // var index=index-1;
  var code = "servos.position(("+index+"-1),"+range+")\n";
  return code;  
};


Blockly.Python.actuator_rgb_init = function () {
    Blockly.Python.definitions_['import board'] = 'import board';	
  Blockly.Python.definitions_['from modules import ws2812'] = 'from modules import ws2812'; 
  var SUB = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var key = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var num = Blockly.Python.valueToCode(this,'num', Blockly.Python.ORDER_ATOMIC);
  var code = ''+SUB+'=ws2812('+key+','+num+')\n';
  return code;  
};


Blockly.Python.actuator_rgb_set = function () {
  var SUB = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var R = Blockly.Python.valueToCode(this, 'R', Blockly.Python.ORDER_ATOMIC);
  var G = Blockly.Python.valueToCode(this, 'G', Blockly.Python.ORDER_ATOMIC);
  var B = Blockly.Python.valueToCode(this, 'B', Blockly.Python.ORDER_ATOMIC);
  var num = Blockly.Python.valueToCode(this,'num', Blockly.Python.ORDER_ATOMIC);
  var code = ''+SUB+'.set_led('+num+',('+G+','+R+','+B+'))\n';
  return code;  
};

Blockly.Python.actuator_rgb_display = function () {
  var SUB = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var code = ''+SUB+'.display()\n';
  return code;  
};


Blockly.Python.actuator_ms32006_init = function () {
	Blockly.Python.definitions_['import ms32006'] = 'import ms32006';
	var address =this.getFieldValue('mode')
	var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
	var sub1 =Blockly.Python.valueToCode(this, 'SUB1',Blockly.Python.ORDER_ATOMIC);
	var code = ''+sub+'=ms32006.MS32006('+ sub1+',addr='+ address +')\n';
    return code;
};

Blockly.Python.actuator_ms32006_dcmotor = function () {
	Blockly.Python.definitions_['import ms32006'] = 'import ms32006';
	var direction =this.getFieldValue('direction')
	var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
	var speed =Blockly.Python.valueToCode(this, 'speed',Blockly.Python.ORDER_ATOMIC);
	var code = ''+sub+'.dc_motor('+ direction+','+ speed +')\n';
    return code;
};

Blockly.Python.actuator_ms32006_stepper = function () {
	Blockly.Python.definitions_['import ms32006'] = 'import ms32006';
	var mode =this.getFieldValue('mode')
	var direction =this.getFieldValue('direction')
	var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
	var speed =Blockly.Python.valueToCode(this, 'speed',Blockly.Python.ORDER_ATOMIC);
	var steps =Blockly.Python.valueToCode(this, 'steps',Blockly.Python.ORDER_ATOMIC);
	var code = ''+sub+'.move('+ mode+','+ direction+','+ speed +','+ steps +')\n';
    return code;
};

//-新20211221------PID算法，暂时放此处------------------------------------------//
Blockly.Python.PID_init = function () {
    Blockly.Python.definitions_['import pid'] = 'import pid';	
    var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
	var P = Blockly.Python.valueToCode(this, 'P',Blockly.Python.ORDER_ATOMIC);
	var I = Blockly.Python.valueToCode(this, 'I',Blockly.Python.ORDER_ATOMIC);
	var D = Blockly.Python.valueToCode(this, 'D',Blockly.Python.ORDER_ATOMIC);	
	var code=""+sub+"=pid.PID("+P+","+I+","+D+")\n";
	return code;
  return code;  
};
//-新20211221------PID算法，暂时放此处------------------------------------------//
Blockly.Python.PID_get_pid= function() {
    Blockly.Python.definitions_['import pid'] = 'import pid';	
    var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
	var error = Blockly.Python.valueToCode(this, 'error',Blockly.Python.ORDER_ATOMIC);
	var scaler = Blockly.Python.valueToCode(this, 'scaler',Blockly.Python.ORDER_ATOMIC);
    var code=""+sub+".get_pid("+error+","+scaler+")";
    return [code, Blockly.Python.ORDER_ATOMIC];
}