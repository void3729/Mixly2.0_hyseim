"""
RC522

Micropython library for the RC522
=======================================================
#Preliminary composition       20211008
#修复读卡速度，及间隔None      20211025
#增加其他扇区数据读写          20211025
#Changed from circuitpython to micropython       20220216

dahanzimin From the Mixly Team

"""

import time
import machine
from micropython import const

RC_OK          = 0
RC_NOTAGERR    = 1
RC_ERR         = 2

RC_REQIDL      = const(0x26)
RC_REQALL      = const(0x52)
RC_AUTHENT1A   = const(0x60)
RC_AUTHENT1B   = const(0x61)

class RC522:

	def __init__(self, spi,cs):
		self._spi= spi
		self._cs = machine.Pin(cs, machine.Pin.OUT)
		self.init()	
		self.add_list=[1,2,4,5,6,8,9,10,12,13,14,16,17,18,20,21,22,24,25,26,28,29,30,32,33,34,36,37,38,40,41,42,44,45,46,48,49,50,52,53,54,56,57,58,60,61,62]

		
	def _wreg(self, reg, val):
		self._cs.value(0)
		self._spi.write(b'%c' % int(0xff & ((reg << 1) & 0x7e)))
		self._spi.write(b'%c' % int(0xff & val))
		self._cs.value(1)

	def _rreg(self, reg):
		self._cs.value(0)
		self._spi.write(b'%c' % int(0xff & (((reg << 1) & 0x7e) | 0x80)))
		val = self._spi.read(1)
		self._cs.value(1)
		return val[0]

	def _sflags(self, reg, mask):
		self._wreg(reg, self._rreg(reg) | mask)


	def _cflags(self, reg, mask):
		self._wreg(reg, self._rreg(reg) & (~mask))


	def _tocard(self, cmd, send):
		recv = []
		bits = 0
		irq_en = 0
		wait_irq =0 
		n = 0
		stat = RC_ERR

		if cmd == 0x0E:
			irq_en = 0x12
			wait_irq = 0x10
		elif cmd == 0x0C:
			irq_en = 0x77
			wait_irq = 0x30

		self._wreg(0x02, irq_en | 0x80)
		self._cflags(0x04, 0x80)
		self._sflags(0x0A, 0x80)
		self._wreg(0x01, 0x00)

		for c in send:
			self._wreg(0x09, c)
		self._wreg(0x01, cmd)

		if cmd == 0x0C:
			self._sflags(0x0D, 0x80)

		i = 100
		while True:
			n = self._rreg(0x04)
			i -= 1
			if  ~((i != 0) and ~(n & 0x01) and ~(n & wait_irq)):
				break
				
		self._cflags(0x0D, 0x80)
		if i:
			if (self._rreg(0x06) & 0x1B) == 0x00:
				stat = RC_OK

				if n & irq_en & 0x01:
					stat = RC_NOTAGERR
				elif cmd == 0x0C:
					n = self._rreg(0x0A)
					lbits = self._rreg(0x0C) & 0x07
					if lbits != 0:
						bits = (n - 1) * 8 + lbits
					else:
						bits = n * 8

					if n == 0:
						n = 1
					elif n > 16:
						n = 16

					for _ in range(n):
						recv.append(self._rreg(0x09))
			else:
				stat = RC_ERR
		return stat, recv, bits


	def _crc(self, data):
		self._cflags(0x05, 0x04)
		self._sflags(0x0A, 0x80)

		for c in data:
			self._wreg(0x09, c)

		self._wreg(0x01, 0x03)

		i = 0xFF
		while True:
			n = self._rreg(0x05)
			i -= 1
			if not ((i != 0) and not (n & 0x04)):
				break
		return [self._rreg(0x22), self._rreg(0x21)]


	def init(self):
		self.reset()
		self._wreg(0x2A, 0x8D)
		self._wreg(0x2B, 0x3E)
		self._wreg(0x2D, 30)
		self._wreg(0x2C, 0)
		self._wreg(0x15, 0x40)
		self._wreg(0x11, 0x3D)
		self.antenna_on()


	def reset(self):
		self._wreg(0x01, 0x0F)


	def antenna_on(self, on=True):
		if on and ~(self._rreg(0x14) & 0x03):
			self._sflags(0x14, 0x03)
		else:
			self._cflags(0x14, 0x03)


	def request(self, mode):
		self._wreg(0x0D, 0x07)
		stat, recv, bits = self._tocard(0x0C, [mode])
		if (stat != RC_OK) | (bits != 0x10):
			stat = RC_ERR
		return stat, bits


	def anticoll(self):
		ser_chk = 0
		ser = [0x93, 0x20]
		self._wreg(0x0D, 0x00)
		(stat, recv, bits) = self._tocard(0x0C, ser)

		if stat == RC_OK:
			if len(recv) == 5:
				for i in range(4):
					ser_chk = ser_chk ^ recv[i]
				if ser_chk != recv[4]:
					stat = RC_ERR
			else:
				stat = RC_ERR
		return stat, recv


	def select_tag(self, ser):
		buf = [0x93, 0x70] + ser[:5]
		buf += self._crc(buf)
		(stat, recv, bits) = self._tocard(0x0C, buf)
		return RC_OK if (stat == RC_OK) and (bits == 0x18) else RC_ERR


	def auth(self, mode, addr, sect, ser):
		return self._tocard(0x0E, [mode, addr] + sect + ser[:4])[0]


	def stop_crypto1(self):
		self._cflags(0x08, 0x08)


	def read(self, addr):
		data = [0x30, addr]
		data += self._crc(data)
		(stat, recv, _) = self._tocard(0x0C, data)
		return recv if stat == RC_OK else None


	def write(self, addr, data):
		buf = [0xA0, addr]
		buf += self._crc(buf)
		(stat, recv, bits) = self._tocard(0x0C, buf)

		if not (stat == RC_OK) or not (bits == 4) or not ((recv[0] & 0x0F) == 0x0A):
			stat = RC_ERR
		else:
			buf = []
			for i in range(16):
				buf.append(data[i])
			buf += self._crc(buf)
			(stat, recv, bits) = self._tocard(0x0C, buf)
			if not (stat == RC_OK) or not (bits == 4) or not ((recv[0] & 0x0F) == 0x0A):
				stat = RC_ERR
		return stat

	def read_card(self,add):
		if add>=47:
			raise IndexError("Out of address range")
		stat, tag_type = self.request(RC_REQALL)
		if stat !=RC_OK:
			stat, tag_type = self.request(RC_REQALL)
		if stat == RC_OK:
			(stat, raw_uid) = self.anticoll()
			if stat == RC_OK:
				if self.select_tag(raw_uid) == RC_OK:
					key = [0xFF,0xFF,0xFF,0xFF,0xFF,0xFF]
					if self.auth(RC_AUTHENT1A, self.add_list[add], key, raw_uid) == RC_OK:
						card = self.read(self.add_list[add])
						self.stop_crypto1()
						return int('{}{}{}{}'.format(raw_uid[0], raw_uid[1], raw_uid[2], raw_uid[3])), card
			
	def write_card(self, data,add):
		if add>=47:
			raise IndexError("Out of address range")
		stat, tag_type = self.request(RC_REQALL)
		if stat !=RC_OK:
			stat, tag_type = self.request(RC_REQALL)
		if stat == RC_OK:
			(stat, raw_uid) = self.anticoll()
			if stat == RC_OK:
				if self.select_tag(raw_uid) == RC_OK:
					key = [0xFF,0xFF,0xFF,0xFF,0xFF,0xFF]
					if self.auth(RC_AUTHENT1A, self.add_list[add], key, raw_uid) == RC_OK:
						stat = self.write(self.add_list[add], data)
						self.stop_crypto1()
						if stat == RC_OK:
							print('Data written to card')
							return RC_OK
						else:
							print('Failed to write data to card')
							return RC_ERR
					else:
						print('Authentication error')
						return RC_ERR
				else:
					print('Failed to select tag')
					return RC_ERR
		else:
			return RC_ERR		
