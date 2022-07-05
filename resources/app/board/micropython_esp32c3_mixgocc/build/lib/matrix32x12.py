"""
Matrix Displays

Micropython library for the TM1680 Matrix Displays
=======================================================

#Preliminary composition      					20211120
#Add Font_B & Font_S switching use 				20211127
#Add word positive and negative display  		20211216
#Repair and keep tm1680 consistent   			20220224
#Fix character display				   			20220307

dahanzimin From the Mixly Team

"""
from tm1680 import TM1680
import uincode_font
import time
import machine

_Font= uincode_font.Font_B()

class Matrix(TM1680):
	"""A single matrix."""

	_columns = 32
	_rows = 12
	

	def pixel(self, x, y, color=None):
		"""Get or set the color of a given pixel."""
		if not 0 <= x <= 31:
			return None
		if not 0 <= y <= 11:
			return None
		if color is None:
			return super().pixel(x, y)
		else:
			return super().pixel(x, y,color)			

	def __getitem__(self, key):
		x, y = key
		return self.pixel(x, y)

	def __setitem__(self, key, value):
		x, y = key
		self.pixel(x, y, value)
	# pylint: disable=too-many-branches
	def shift(self, x, y, rotate=False):
		"""
		Shift pixels by x and y

		:param rotate: (Optional) Rotate the shifted pixels to the left side (default=False)
		"""
		if x > 0:  # Shift Right
			for _ in range(x):
				for row in range(0, self.rows):
					last_pixel = self[self.columns - 1, row] if rotate else 0
					for col in range(self.columns - 1, 0, -1):
						self[col, row] = self[col - 1, row]
					self[0, row] = last_pixel
		elif x < 0:  # Shift Left
			for _ in range(-x):
				for row in range(0, self.rows):
					last_pixel = self[0, row] if rotate else 0
					for col in range(0, self.columns - 1):
						self[col, row] = self[col + 1, row]
					self[self.columns - 1, row] = last_pixel
		if y > 0:  # Shift Up
			for _ in range(y):
				for col in range(0, self.columns):
					last_pixel = self[col, self.rows - 1] if rotate else 0
					for row in range(self.rows - 1, 0, -1):
						self[col, row] = self[col, row - 1]
					self[col, 0] = last_pixel
		elif y < 0:  # Shift Down
			for _ in range(-y):
				for col in range(0, self.columns):
					last_pixel = self[col, 0] if rotate else 0
					for row in range(0, self.rows - 1):
						self[col, row] = self[col, row + 1]
					self[col, self.rows - 1] = last_pixel
		self.show()			
	# pylint: enable=too-many-branches

	def shift_right(self,num, rotate=False):
		"""
		Shift all pixels right

		:param rotate: (Optional) Rotate the shifted pixels to the left side (default=False)
		"""
		self.shift(num, 0, rotate)

	def shift_left(self,num, rotate=False):
		"""
		Shift all pixels left

		:param rotate: (Optional) Rotate the shifted pixels to the right side (default=False)
		"""
		self.shift(-num, 0, rotate)

	def shift_up(self,num, rotate=False):
		"""
		Shift all pixels up

		:param rotate: (Optional) Rotate the shifted pixels to bottom (default=False)
		"""
		self.shift(0, -num, rotate)

	def shift_down(self,num, rotate=False):
		"""
		Shift all pixels down

		:param rotate: (Optional) Rotate the shifted pixels to top (default=False)
		"""
		self.shift(0, num, rotate)

	def image(self, img):
		"""Set buffer to value of Python Imaging Library image.  The image should
		be in 1 bit mode and a size equal to the display size."""
		imwidth, imheight = img.size
		if imwidth != self.columns or imheight != self.rows:
			raise ValueError(
				"Image must be same dimensions as display ({0}x{1}).".format(
					self.columns, self.rows
				)
			)
		# Grab all the pixels from the image, faster than getpixel.
		pixels = img.convert("1").load()
		# Iterate through the pixels
		for x in range(self.columns):  # yes this double loop is slow,
			for y in range(self.rows):  #  but these displays are small!
				self.pixel(x, y, pixels[(x, y)])

	def bitmap(self,buffer, x=0, y=0):
		"""图模显示，图模点阵信息(逐行式，按满字节低位在前)及图模宽度,高度的元组(buffer,(width,height))"""	
		buffer_info,(width,height)=buffer					
		if -width < x < self.columns:		#显示区域合理限制
			width_Byte=width//8+1	
			for k in range(height):
				for j in range(width_Byte):
					for i in range(8):
						asc = buffer_info[k * width_Byte + j]
						if asc>>(7-i) & 0x01:
							self.pixel(i+j*8+x,k+y,1)

	def text(self,strs, x=0, y=0, space=-1,center=True):
		self.fill(0)
		"""ÏÔÊ¾uincode×ÖÂë"""
		font_buffer=[]
		len=0
		for c in strs:						#先取字符点阵信息
			buffer=_Font.CharData(c)
			font_buffer.append(buffer)
			len=len+buffer[1][0]+space
		if center:							#如居中显示，计算x值
			x= int((self.columns-len-space)/2)+x		
			
		for buffer in font_buffer:			#显示字符
			self.bitmap(buffer,x,y)
			x=buffer[1][0]+x+space
		self.show()	
				
	def scroll(self,strs,space=-1,speed=20):
		"""¹ö¶¯ÏÔÊ¾uincode×ÖÂë """
		font_buffer=[]
		len=0
		for c in strs:						#先取字符点阵信息
			buffer=_Font.CharData(c)
			font_buffer.append(buffer)
			len=len+buffer[1][0]+space

		for i in range(len-space+self.columns):	#滚动显示
			x=-i+self.columns
			self.fill(0)
			for buffer in font_buffer:
				self.bitmap(buffer,x)
				x=buffer[1][0]+x+space
			self.show() 
			time.sleep_ms(speed)

	@property
	def columns(self):
		"""Read-only property for number of columns"""
		return self._columns

	@property
	def rows(self):
		"""Read-only property for number of rows"""
		return self._rows


	HEART_SMALL=[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x20,0x02,0x00,0x00,0x70,0x07,0x00,0x00,0xf8,0x0f,0x00,0x00,0xf8,0x0f,0x00,0x00,0xf0,0x07,0x00,0x00,0xe0,0x03,0x00,0x00,0xc0,0x01,0x00,0x00,0x80,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]
	HEART=[0x00,0x00,0x00,0x00,0x00,0x20,0x02,0x00,0x00,0x70,0x07,0x00,0x00,0xf8,0x0f,0x00,0x00,0xfc,0x1f,0x00,0x00,0xfc,0x1f,0x00,0x00,0xf8,0x0f,0x00,0x00,0xf0,0x07,0x00,0x00,0xe0,0x03,0x00,0x00,0xc0,0x01,0x00,0x00,0x80,0x00,0x00,0x00,0x00,0x00,0x00]
	HAPPY=[0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X07,0XE0,0X00,0X00,0X07,0XE0,0X00,0X00,0X07,0XE0,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X10,0X08,0X00,0X00,0X20,0X04,0X00,0X00,0X40,0X02,0X00,0X00,0X80,0X01,0X00,0X00,0X00,0X00,0X00]
	SAD=[0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X1C,0X78,0X00,0X00,0X02,0X80,0X00,0X00,0X01,0X00,0X01,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X80,0X01,0X00,0X00,0X40,0X02,0X00,0X00,0X20,0X04,0X00,0X00,0X10,0X08,0X00,0X00,0X00,0X00,0X00]
	SMILE=[0X00,0X00,0X00,0X00,0XE0,0X03,0XC0,0X07,0X30,0X06,0X60,0X0C,0X98,0X0C,0X30,0X19,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X03,0XC0,0X00,0X00,0X0E,0X70,0X00,0X00,0X38,0X1C,0X00,0X00,0XE0,0X07,0X00,0X00,0X00,0X00,0X00]
	SILLY=[0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X06,0X60,0X00,0X00,0X09,0X90,0X00,0X00,0X06,0X60,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0XE0,0X07,0X00,0X00,0X20,0X04,0X00,0X00,0X40,0X02,0X00,0X00,0X80,0X01,0X00,0X00,0X00,0X00,0X00]
	FABULOUS=[0X00,0X00,0X00,0X00,0X80,0X07,0XE0,0X01,0X40,0X08,0X10,0X02,0XC0,0X0F,0XF0,0X03,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0XF8,0X1F,0X00,0X00,0X08,0X10,0X00,0X00,0X08,0X10,0X00,0X00,0X10,0X08,0X00,0X00,0XE0,0X07,0X00,0X00,0X00,0X00,0X00]
	SURPRISED=[0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X00,0X00,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X00,0X00,0X00]
	ASLEEP=[0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X80,0X0F,0XF0,0X01,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0XE0,0X07,0X00,0X00,0X10,0X08,0X00,0X00,0XE0,0X07,0X00,0X00,0X00,0X00,0X00]
	ANGRY=[0X00,0X00,0X00,0X00,0X80,0X20,0X04,0X01,0X00,0X11,0X88,0X00,0X00,0X0A,0X50,0X00,0X00,0X04,0X20,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X80,0X01,0X00,0X00,0X40,0X02,0X00,0X00,0X20,0X04,0X00,0X00,0X10,0X08,0X00,0X00,0X08,0X10,0X00]
	CONFUSED=[0X00,0XC0,0X03,0X00,0X00,0X60,0X06,0X00,0X00,0X30,0X0C,0X00,0X00,0X30,0X0C,0X00,0X00,0X00,0X0C,0X00,0X00,0X00,0X06,0X00,0X00,0X00,0X03,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X00,0X00,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00]
	NO=[0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X10,0X08,0X00,0X00,0X20,0X04,0X00,0X00,0X40,0X02,0X00,0X00,0X80,0X01,0X00,0X00,0X80,0X01,0X00,0X00,0X40,0X02,0X00,0X00,0X20,0X04,0X00,0X00,0X10,0X08,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00]
	YES=[0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0XC0,0X00,0X00,0X00,0X60,0X00,0X00,0X00,0X30,0X00,0X00,0X00,0X18,0X00,0X00,0X30,0X0C,0X00,0X00,0X60,0X06,0X00,0X00,0XC0,0X03,0X00,0X00,0X80,0X01,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00,0X00]


i2c = machine.SoftI2C(scl = machine.Pin(7), sda = machine.Pin(6),freq=400000)
onboard_matrix=Matrix(i2c)
onboard_matrix.fill(0)