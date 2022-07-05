"""
HP203X

Micropython library for the HP203X
=======================================================

#Changed from circuitpython to micropython		 20220211

dahanzimin From the Mixly Team 
"""
import time
import machine
from micropython import const

HP203X_ADDRESS		 = const(0x76)

HP203X_REG_RST		 = const(0x06)
HP203X_REG_RDY		 = const(0x0D)
HP20X_READ_P		 = const(0x30)	
HP20X_READ_H		 = const(0x31)	
HP20X_READ_T		 = const(0x32)
HP20X_READ_CAL		 = const(0x28)	
HP20X_WR_CONVERT_CMD = const(0x40)

#转换时间 越大时间越久
#HP20X_CONVERT_OSR4096  =0<<2
HP20X_CONVERT_OSR2048	=1<<2
#HP20X_CONVERT_OSR1024	=2<<2
#HP20X_CONVERT_OSR512	=3<<2
#HP20X_CONVERT_OSR256	=4<<2
#HP20X_CONVERT_OSR128	=5<<2

class HP203X:
    def __init__(self, i2c_bus,cal=False):
        self._device = i2c_bus
        self._address = HP203X_ADDRESS
        self.data_reg = bytearray(3)
        self._buffer = bytearray(1)
        self.osr = HP20X_CONVERT_OSR2048    #SET time
		
        if self._read_rdy()&0x40 ==0:
            raise AttributeError("Cannot find a HP203X")
			
        self._rst()	                       #Reset
        time.sleep(0.1)
        
        if cal:			                    #Calibration
            self._write_cmd(HP20X_WR_CONVERT_CMD|self.osr)
            time.sleep(0.1)
            self.calibration()	
            print("calibration")
		
    def _read_data(self, address):
        self._buffer[0] = address & 0xFF
        self._device.writeto(self._address,self._buffer)
        self._device.readfrom_into(self._address,self.data_reg)
        return self.data_reg

    def _write_cmd(self,command):
        self._buffer[0] = command & 0xFF
        self._device.writeto(self._address,self._buffer)

    def _read_rdy(self):
        return self._read_data(HP203X_REG_RDY)[0]

    def _rst(self): 
        self._write_cmd(HP203X_REG_RST)

    def u2s(self,n):
        return n if n < (1 << 23) else n - (1 << 24)	
		
    def get_data(self,flag):
        self._write_cmd(HP20X_WR_CONVERT_CMD|self.osr)
        time.sleep(0.1)
        self._read_data(flag)
        hp_data=(self.data_reg[0]<<16)|(self.data_reg[1]<<8)|self.data_reg[2]
        return self.u2s(hp_data)/100
		
    def p_data(self): 
        return self.get_data(HP20X_READ_P)
		
    def h_data(self): 
        return self.get_data(HP20X_READ_H)
		
    def t_data(self): 
        return self.get_data(HP20X_READ_T)
		
    def calibration(self): 
        self._write_cmd(HP20X_READ_CAL)
	
i2c = machine.SoftI2C(scl = machine.Pin(7), sda = machine.Pin(6),freq=400000)
onboard_hp203x = HP203X(i2c)