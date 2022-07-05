"""
MixGo-CC-BASE

MicroPython library for the MixGo-CC-BASE
=======================================================

#Preliminary composition       20220401

dahanzimin From the Mixly Team
"""

from machine import Pin
from machine import PWM
from machine import ADC
from machine import Timer
import time
from neopixel import NeoPixel

'''MIC_Sensor'''
class MICSensor:
	def __init__(self):
		self.adc=ADC(Pin(3))
		self.adc.atten(ADC.ATTN_11DB) 
		self.original=self._original()
		
	def read(self):
		return abs(self.adc.read()-self.original)
		
	def _original(self):
		s_list=[]
		for _ in range(20):
			s_list.append(self.adc.read())
			time.sleep_us(100)
		original=int(sum(s_list)/len(s_list))
		if 2250<original<2450:
			return original
		else:
			return 2350

sound = MICSensor()

'''4KEY_Sensor'''
class KEYSensor:
	def __init__(self,range):
		self.adc=ADC(Pin(2))
		self.adc.atten(ADC.ATTN_11DB) 
		self.range=range
		self.flag = True
		
	def _value(self):
		return (self.range-200)< self.adc.read() < (self.range+200)
	
	def get_presses(self, delay = 1):
		last_time, last_state, presses = time.time(), 0, 0
		while time.time() < last_time + delay:
			time.sleep_ms(50)
			if last_state == 0 and self._value():
				last_state = 1
			if last_state == 1 and not self._value():
				last_state, presses = 0, presses + 1
		return presses

	def is_pressed(self):
		time.sleep(0.01)
		return self._value()

	def was_pressed(self):
		if(self._value() != self.flag):
			self.flag = self._value()
			time.sleep(0.01)
			if self.flag :
				return True
			else:
				return False

A1key = KEYSensor(20)
A2key = KEYSensor(1170)
A3key = KEYSensor(2400)
A4key = KEYSensor(3610)

'''2KEY_Button'''
class Button:
	def __init__(self, pin):
		self.pin = Pin(pin, Pin.IN)
		self.flag = True
		
	def get_presses(self, delay = 1):
		last_time, last_state, presses = time.time(), 0, 0
		while time.time() < last_time + delay:
			time.sleep_ms(50)
			if last_state == 0 and self.pin.value() == 1:
				last_state = 1
			if last_state == 1 and self.pin.value() == 0:
				last_state, presses = 0, presses + 1
		return presses

	def is_pressed(self):
		return not self.pin.value()

	def was_pressed(self, flag = 0):
		if(self.pin.value() != self.flag):
			self.flag = self.pin.value()
			time.sleep(0.01)
			if self.flag:
				return False
			else:
				return True

	def irq(self, handler, trigger):
		self.pin.irq(handler = handler, trigger = trigger)
		
B1key = Button(9)
B2key = Button(4)


'''2LED-Tristate'''
class LED:
	def __init__(self,timer=2):
		self.flag = True
		Timer(timer).init(period = 1, mode = Timer.PERIODIC, callback = self.tim_callback)
		self.pwm1=0 
		self.pwm2=0 
		self.pwm=-1 
		
	def setonoff(self,val):
		if val == 0:
			Pin(5, Pin.IN)
		elif val == 1:
			Pin(5, Pin.OUT).value(1)
		elif val == -1:
			Pin(5, Pin.OUT).value(0)
		
	def tim_callback(self,tim):
		self.pwm+=1
		if self.pwm>=10:
			self.pwm=0
		
		if self.flag:
			if self.pwm <self.pwm1: 
				self.setonoff(1)
			else:
				self.setonoff(0)
		else:
			if self.pwm <self.pwm2: 
				self.setonoff(-1)
			else:
				self.setonoff(0)
				
		self.flag=not self.flag
		
	#PWM范围0-10
	def L1_pwm(self,valw):
		if valw == -1:
			if self.pwm1 == 0:
				self.pwm1=5
			else:
				self.pwm1=0
		elif 0<= valw <=10:
			self.pwm1=valw
		else:
			print('Invalid brightness')	
		
	def L2_pwm(self,valw):
		if valw == -1:
			if self.pwm2 == 0:
				self.pwm2=5
			else:
				self.pwm2=0
		elif 0<= valw <=10:
			self.pwm2=valw
		else:
			print('Invalid brightness')	
	
	def L1_brightness(self):
		return self.pwm1

	def L2_brightness(self):
		return self.pwm2	

led=LED()
rgb = NeoPixel(Pin(8), 4)