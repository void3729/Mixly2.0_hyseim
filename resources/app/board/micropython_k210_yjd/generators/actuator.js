'use strict';

goog.provide('Blockly.Python.actuator');
goog.require('Blockly.Python');

Blockly.Python.actuator_Servo_init = function () {
	//Blockly.Python.definitions_['import_GPIO'] = 'from Maix import GPIO';
	Blockly.Python.definitions_['import_PWM'] = 'from machine import PWM';
	Blockly.Python.definitions_['import_Timer'] = 'from machine import Timer';
	var key = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	var time = Blockly.Python.valueToCode(this,'time', Blockly.Python.ORDER_ATOMIC);
	var Timer=time%3
	var CHANNEL=parseInt(time/3)
	var code1 = 'tim' + time + ' = Timer(Timer.TIMER' + Timer + ', Timer.CHANNEL' + CHANNEL + ', mode=Timer.MODE_PWM)\n';	
	var code2 = 'pse'+key+'=PWM(tim'+time+', freq=50, duty=2.5, pin='+key+')\n';
	return code1+code2;  
};


Blockly.Python.actuator_Servo = function () {
  Blockly.Python.definitions_['import_PWM'] = 'from machine import PWM';
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

Blockly.Python.actuator_led_init = function () {
	Blockly.Python.definitions_['import_GPIO'] = 'from Maix import GPIO';
  Blockly.Python.definitions_['import_fm'] = 'from fpioa_manager import fm';
  
  var key = this.getFieldValue('key');
  var special_pin = [38, 37, 29, 44, 43];
  var now_pin = "";
  var i = 0;
  var dropdown_pin = 6;
  if(key=="LED_G")
     dropdown_pin = 6;
  if(key=="LED_R")
     dropdown_pin = 7;
  if(key=="LED_B")
     dropdown_pin = 8;
  for (i = 0; i < 5; i++) {
      if(dropdown_pin == special_pin[i])
      {
        now_pin = 'GPIOHS' + (31 - i);
      }
  }
  if(i == 5)
  {
      var remap = dropdown_pin%35;
      if(remap > 26)
      {
        remap = remap%27;
        now_pin = 'GPIO' + remap;
      }
      else
      {
        now_pin = 'GPIOHS' + remap;
      }
  }

	if(key=="LED_G")
		 var code = 'fm.register(7, fm.fpioa.'+now_pin+')\n'+key+' = GPIO(GPIO.'+now_pin+', GPIO.OUT)\n';
	if(key=="LED_R")
		 var code = 'fm.register(6, fm.fpioa.'+now_pin+')\n'+key+' = GPIO(GPIO.'+now_pin+', GPIO.OUT)\n';
	if(key=="LED_B")
		 var code = 'fm.register(8, fm.fpioa.'+now_pin+')\n'+key+' = GPIO(GPIO.'+now_pin+', GPIO.OUT)\n';
  return code;  
};

Blockly.Python.ledswitch = function () {
    var code = this.getFieldValue('flag');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.actuator_led_bright= function() {
	Blockly.Python.definitions_['import_GPIO'] = 'from Maix import GPIO';
    var key = this.getFieldValue('key');
    var bright = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    var code = ""+key+".value("+bright+")\n";
    return code;
};

Blockly.Python.actuator_fan_bright= function() {
	var code = this.getFieldValue('flag');
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.actuator_led_PWMinit = function () {
  //Blockly.Python.definitions_['import_GPIO'] = 'from Maix import GPIO';
  Blockly.Python.definitions_['import_Timer'] = 'from machine import Timer';
  Blockly.Python.definitions_['import_PWM'] = 'from machine import PWM'; 
  var key = this.getFieldValue('key');
  if (key == "LED_R") 
	 var code='tim_'+key+' = Timer(Timer.TIMER0, Timer.CHANNEL3, mode=Timer.MODE_PWM)\n'+key+'=PWM(tim_'+key+', freq=500000, duty=100, pin=7)\n';
   if (key == "LED_G") 
	 var code='tim_'+key+' = Timer(Timer.TIMER1, Timer.CHANNEL3, mode=Timer.MODE_PWM)\n'+key+'=PWM(tim_'+key+', freq=500000, duty=100, pin=6)\n';
   if (key == "LED_B") 
	 var code='tim_'+key+' = Timer(Timer.TIMER2, Timer.CHANNEL3, mode=Timer.MODE_PWM)\n'+key+'=PWM(tim_'+key+', freq=500000, duty=100, pin=8)\n';
  return code;  
};

Blockly.Python.actuator_led_PWM = function () {
  Blockly.Python.definitions_['import_Timer'] = 'from machine import Timer';
   Blockly.Python.definitions_['import_PWM'] = 'from machine import PWM'; 
  var key = this.getFieldValue('key');
  var bright = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
  var code = ""+key+".duty(100-"+bright+")\n";
  return code;  
};


Blockly.Python.actuator_syn8266 = function () {
	Blockly.Python.definitions_['import syn6288'] = 'import syn6288';
	var dropdown_uart = this.getFieldValue('mode');
	var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
	var code ='syn6288.sendspeak(uart'+dropdown_uart+','+data+')\n';
	return code;
};

Blockly.Python.actuator_ws2812_init=function(){
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var dropdown_rgbpin = Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var value_ledcount = Blockly.Python.valueToCode(this, 'LEDCOUNT', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_ws2812'] = 'from modules import ws2812';
    Blockly.Python.definitions_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var code = v + ' = ws2812(qdpk210_aistart.board_pins['+dropdown_rgbpin+'], '+value_ledcount+')\n';
    return code;
};

Blockly.Python.actuator_ws2812_display=function(){
  Blockly.Python.definitions_['import_ws2812'] = 'from modules import ws2812';
  Blockly.Python.definitions_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var code= v + '.display()\n';   
  return code;
};
Blockly.Python.actuator_ws2812_set_led=function(){
  Blockly.Python.definitions_['import_ws2812'] = 'from modules import ws2812';
  Blockly.Python.definitions_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var value_led = Blockly.Python.valueToCode(this, '_LED_', Blockly.Python.ORDER_ATOMIC);
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= v + '.set_led('+value_led+',('+value_rvalue+', '+value_gvalue+', '+value_bvalue+'))\n';
  return code;
};

Blockly.Python.board_ws2812_init=function(){
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_ws2812'] = 'from modules import ws2812';
    Blockly.Python.definitions_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
    var code = v + ' = ws2812(qdpk210_aistart.board_pins[10], 5)\n';
    return code;
};

Blockly.Python.board_ws2812_display=function(){
  Blockly.Python.definitions_['import_ws2812'] = 'from modules import ws2812';
  Blockly.Python.definitions_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var code= v + '.display()\n';   
  return code;
};
Blockly.Python.board_ws2812_set_led=function(){
  Blockly.Python.definitions_['import_ws2812'] = 'from modules import ws2812';
  Blockly.Python.definitions_['import_qdpk210_aistart'] = 'import qdpk210_aistart';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var value_led = Blockly.Python.valueToCode(this, '_LED_', Blockly.Python.ORDER_ATOMIC);
  var value_rvalue = Blockly.Python.valueToCode(this, 'RVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_gvalue = Blockly.Python.valueToCode(this, 'GVALUE', Blockly.Python.ORDER_ATOMIC);
  var value_bvalue = Blockly.Python.valueToCode(this, 'BVALUE', Blockly.Python.ORDER_ATOMIC);
  var code= v + '.set_led('+value_led+',('+value_rvalue+', '+value_gvalue+', '+value_bvalue+'))\n';
  return code;
};