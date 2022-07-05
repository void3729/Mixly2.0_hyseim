"""
Infrared tube

Micropython  library for the Infrared tube 
Switch ADC through analog switch and select obstacle avoidance or line patrol function 
=======================================================
#Preliminary composition      					20220211

dahanzimin From the Mixly Team 
 
"""
import machine
import time

class IRtube:

	def __init__(self,auto=1):
		#auto：是否手动切换模拟开关转换
		self.adc0 = machine.ADC(machine.Pin(0))
		self.adc1 = machine.ADC(machine.Pin(1))
		self.adc2 = machine.ADC(machine.Pin(3))
		self.adc3 = machine.ADC(machine.Pin(4))
		
		self.adc0.atten(machine.ADC.ATTN_11DB)
		self.adc1.atten(machine.ADC.ATTN_11DB)
		self.adc2.atten(machine.ADC.ATTN_11DB)
		self.adc3.atten(machine.ADC.ATTN_11DB)
		
		self.convert=machine.Pin(2, machine.Pin.OUT)
		self.auto=auto

	def read_bat(self):
		#读电池电量，返回电压值
		self.convert = machine.ADC(machine.Pin(2))
		self.convert.atten(machine.ADC.ATTN_11DB)
		time.sleep_ms(5)
		bat_adc=self.convert.read()*0.0011
		time.sleep_ms(5)
		self.convert=machine.Pin(2, machine.Pin.OUT)
		return bat_adc
		
	def obstacle(self):
		#读避障传感器,返回前左、右，后左、右，ADC值
		if self.auto:
			self.convert.value(0)
			time.sleep_ms(2)
		return self.adc1.read(),self.adc2.read(),self.adc3.read(),self.adc0.read()
		
	def patrol(self):
		#读巡线传感器,返回左、中左、中右、右，ADC值
		if self.auto:
			self.convert.value(1)
			time.sleep_ms(2)
		return self.adc0.read(),self.adc1.read(),self.adc2.read(),self.adc3.read()		

	def set_mod(self,mode=1):
		#切换模式，mode=0手动，mode=1自动
		self.auto = mode
		return self.auto

	def switch(self,mode=1):
		#手动切换避障和巡线模式，mode=0避障，mode=1巡线
		self.auto = 0
		if self.auto:
			raise ValueError("Automatic mode, unable to switch")
		self.convert.value(mode)
		return self.auto

		
	
	