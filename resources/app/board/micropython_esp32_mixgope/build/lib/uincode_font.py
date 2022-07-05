"""
Unicode-Font

Micropython library for the Unicode-Font
=======================================================

#Preliminary composition					20211115
#Need to use GuiTool to produce font file	20211126
#Add 3-segment code selection				20210211
#Change to flash address reading            20210211

dahanzimin From the Mixly Team
"""
import esp

class Font_B(object):
	'''标准uincode点阵字库(字库大，读取快)'''
	def __init__(self, start_address=0x700000):
		self.start_address = start_address
		buffer = bytearray(40)
		esp.flash_read(self.start_address, buffer)							 #读出字头与段信息
		
		if buffer[0] != 0x55:											#标识头，判断是否为Unicode 编码格式的字库文件
			raise ValueError("Using font file is not Unicode encoding")
			
		self.height=buffer[9]															#字体高度
		self.no1_char  =buffer[16] | buffer[17]<<8										#第一段首字符
		self.no1e_char =buffer[18] | buffer[19]<<8										#第一段尾字符
		self.no1_index =buffer[20] | buffer[21]<<8 | buffer[22]<<16 | buffer[23]<<24	#第一字符信息（即检索表）的起始地址
		
		self.no2_char  =buffer[24] | buffer[25]<<8										#第二段首字符
		self.no2e_char =buffer[26] | buffer[27]<<8										#第二段尾字符
		self.no2_index =buffer[28] | buffer[29]<<8 | buffer[30]<<16 | buffer[31]<<24	#第二字符信息（即检索表）的起始地址
		
		self.no3_char  =buffer[32] | buffer[33]<<8										#第三段首字符
		self.no3e_char =buffer[34] | buffer[35]<<8										#第三段尾字符
		self.no3_index =buffer[36] | buffer[37]<<8 | buffer[38]<<16 | buffer[39]<<24	#第三字符信息（即检索表）的起始地址

	def CharData(self, c):
		uni = ord(c)
		if self.no1_char <= uni <= self.no1e_char :							#判读字符是否在第一段字符区间内
			char_address = self.no1_index + (uni - self.no1_char) * 4		#计算当前字符点阵信息的起始地址
		elif self.no2_char <= uni <= self.no2e_char :							#判读字符是否在第二段字符区间内
			char_address = self.no2_index + (uni - self.no2_char) * 4		#计算当前字符点阵信息的起始地址
		elif self.no3_char <= uni <= self.no3e_char :							#判读字符是否在第三段字符区间内
			char_address = self.no3_index + (uni - self.no3_char) * 4		#计算当前字符点阵信息的起始地址
		else:
			return None,(0,self.height)
		
		buffer = bytearray(4)
		esp.flash_read(self.start_address+char_address, buffer) 
		
		font_info=buffer[3]<<24 | buffer[2]<<16 | buffer[1]<<8 | buffer[0]
		font_address=font_info & 0X3FFFFFF								 #低 26 位，表示当前字符点阵数据的偏移地址
		font_width=font_info>>26										 #高 6 位，表示当前字符的宽度
		
		buffer = bytearray(self.height*(font_width//8+1))				 #计算字符占的空间，并根据偏移地址读取
		esp.flash_read(self.start_address+font_address, buffer)				 

		return buffer,(font_width,self.height)							 #返回字符点阵数据，及字符宽度,高度(像素)

