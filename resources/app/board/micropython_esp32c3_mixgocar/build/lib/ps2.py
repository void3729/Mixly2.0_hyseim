"""
PS2Controller

MicroPython library for the PS2Controller
=======================================================

#Preliminary composition           				20211210
#Output data result judgment        			20211211
#Changed from circuitpython to micropython      20220225

dahanzimin From the Mixly Team
"""

import time
from machine import Pin

PSB_SELECT	   = 0x0001
PSB_L3		   = 0x0002
PSB_R3		   = 0x0004
PSB_START	   = 0x0008
PSB_PAD_UP	   = 0x0010
PSB_PAD_RIGHT  = 0x0020
PSB_PAD_DOWN   = 0x0040
PSB_PAD_LEFT   = 0x0080
PSB_L2		   = 0x0100
PSB_R2		   = 0x0200
PSB_L1		   = 0x0400
PSB_R1		   = 0x0800
PSB_GREEN	   = 0x1000
PSB_RED		   = 0x2000
PSB_BLUE	   = 0x4000
PSB_PINK	   = 0x8000
PSB_TRIANGLE   = 0x1000
PSB_CIRCLE	   = 0x2000
PSB_CROSS	   = 0x4000
PSB_SQUARE	   = 0x8000

PSS_RX = 0				
PSS_RY = 1
PSS_LX = 2
PSS_LY = 3

class PS2Controller:

	def __init__(self,clk_pin,do_pin,di_pin,cs_pin,mode=1,timeout=500):  #mode: 0 red; 1 green
		self.di =Pin(di_pin,Pin.IN)
		self.do =Pin(do_pin,Pin.OUT)
		self.cs =Pin(cs_pin,Pin.OUT)
		self.clk=Pin(clk_pin,Pin.OUT)
	
		self.data=[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]
		self.buttons=0
		self.rods=(128,128,128,128)
		self.motor1=0
		self.motor2=0

		timestamp = time.ticks_ms()
		while not (self.PS2_cmds([0x01,0x42])[1] in [0x41,0x73,0x79]):
			if time.ticks_diff(time.ticks_ms(), timestamp) > timeout:
				raise AttributeError("Cannot find a PS2Controller")

		self.PS2_cmds([0x01,0x43,0x00,0x01,0x00])                            # 进入配置模式
		self.PS2_cmds([0x01,0x44,0x00,mode,0x03,0x00,0x00,0x00,0x00])        # “红绿灯”配置模式
		self.PS2_cmds([0x01,0x4D,0x00,0x00,0x01])                            # 开启震动模式
		self.PS2_cmds([0x01,0x43,0x00,0x5A,0x5A,0x5A,0x5A,0x5A,0x5A])        # 完成并保存配置

	#单字节命令发送与接收
	def PS2_cmd(self,cmd):
		ret = 0
		for i in range(8):
			if cmd & 1 << i:
				self.do.value(1)
			else:
				self.do.value(0)
			self.clk.value(0)
			time.sleep(0.00001)
			if self.di.value():
				ret |= 1 << i
			self.clk.value(1)
		self.do.value(1)
		time.sleep(0.00001)
		return ret

	#多字节命令发送与接收
	def PS2_cmds(self,cmds):
		self.cs.value(0)
		time.sleep(0.00001)
		for i, cmd  in enumerate(cmds):
			self.data[i]=self.PS2_cmd(cmd)
		self.cs.value(1)
		time.sleep(0.02)
		return self.data

	#读取按键的值
	def PS2_keydata(self):
		self.PS2_cmds([0X01, 0X42, 0X00, self.motor1, self.motor2, 0X00, 0X00, 0X00, 0X00])
		if self.data[2]==0x5A:
			handkey=(self.data[4]<<8)| self.data[3]
			self.buttons=-handkey-1 & 0xffff
			self.rods=(self.data[5],self.data[6],self.data[7],self.data[8])
		return self.buttons,self.rods

	#振动设置
	def PS2_vibration(self,motor1=0,motor2=0):
		self.motor1=motor1                                          #motor1：小电机，只有震和不振
		self.motor2=0 if motor2<1 else motor2*0xBF//100+0X40        #motor2：大电机，范围0x40-0xff，映射0-100
		self.PS2_cmds([0X01, 0X42, 0X00, self.motor1, self.motor2, 0X00, 0X00, 0X00, 0X00])