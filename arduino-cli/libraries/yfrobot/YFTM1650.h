/*-------------------------------------------------------------------------------------

  YFTM1650.h - 
  		8-segment display driver of YFRobot 4-bit digital tube module based on YFTM1650 chip
  Created by yfrobot,Released into the public domain.
  Product: https://item.taobao.com/item.htm?id=561918482249
  Changelog:
	v1.0:
		2017/12/25 - Initial release 
	v1.1:
		2020/03/25 - 统一修改TM1650为YFTM1650（避免与其他库混淆）
					 新增显示float/double/int类型函数
					 新增显示滚动字符函数

----------------------------------------------------------------------------------------*/

#ifndef _TM1650_H_
#define _TM1650_H_

#include <Arduino.h>

#define TM1650_USE_PROGMEM

#ifdef TM1650_USE_PROGMEM
#include <avr/pgmspace.h>
#endif

/** Definitions **/

#define _8_SEGMENT_MODE	0x00	  // 8段显示模式
#define _7_SEGMENT_MODE	0x08	  // 7段显示模式

#define NORMAL_MODE		0x00	  // 正常工作模式
#define STANDBY_MODE	0x04	  // 待机工作模式

#define DISPLAY_ON		0x01	   
#define DISPLAY_OFF		0x00	  

#define CMD_SYSTEM_CONFIG	0x48   
// #define CMD_READ_KEYPAD		0x4F   

#define DIG1_ADDRESS	0x68	  
#define DIG2_ADDRESS    0x6A	   
#define DIG3_ADDRESS	0x6C	   
#define DIG4_ADDRESS    0x6E	

#define TM1650_NUM_DIGITS   16 // max number of digits  最大数字位数
#define TM1650_MAX_STRING   128 // number of digits 位数

const unsigned char Brightness[9] = {0x10, 0x20, 0x30, 0x40, 0x50, 0x60, 0x70, 0x00};
const unsigned char DisplayAddressArray[4] = {DIG1_ADDRESS,DIG2_ADDRESS,DIG3_ADDRESS,DIG4_ADDRESS};
const unsigned int iNumDigits = 4;
//number 0-9 code
//const unsigned char Number_arr[10] =   {0x3f, 0x06, 0x5b, 0x4f, 0x66, 0x6d, 0x7d, 0x07, 0x7f, 0x6f};

#ifndef TM1650_USE_PROGMEM
const byte TM1650_CDigits[128] {
#else
const PROGMEM byte TM1650_CDigits[128] {
#endif
//0x00  0x01  0x02  0x03  0x04  0x05  0x06  0x07  0x08  0x09  0x0A  0x0B  0x0C  0x0D  0x0E  0x0F
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 0x00
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 0x10
  0x00, 0x82, 0x21, 0x00, 0x00, 0x00, 0x00, 0x02, 0x39, 0x0F, 0x00, 0x00, 0x00, 0x40, 0x80, 0x00, // 0x20
  0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7f, 0x6f, 0x00, 0x00, 0x00, 0x48, 0x00, 0x53, // 0x30
  0x00, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71, 0x6F, 0x76, 0x06, 0x1E, 0x00, 0x38, 0x00, 0x54, 0x3F, // 0x40
  0x73, 0x67, 0x50, 0x6D, 0x78, 0x3E, 0x00, 0x00, 0x00, 0x6E, 0x00, 0x39, 0x00, 0x0F, 0x00, 0x08, // 0x50 
  0x63, 0x5F, 0x7C, 0x58, 0x5E, 0x7B, 0x71, 0x6F, 0x74, 0x02, 0x1E, 0x00, 0x06, 0x00, 0x54, 0x5C, // 0x60
  0x73, 0x67, 0x50, 0x6D, 0x78, 0x1C, 0x00, 0x00, 0x00, 0x6E, 0x00, 0x39, 0x30, 0x0F, 0x00, 0x00  // 0x70
};

class YFTM1650
{
	public:
		YFTM1650(int pin_SCK,int pin_DIO);
		void	init();
		void	clear();
		// void	clearDot();
		void	displayString(char *aString);
		void	displayString(String sString);
		void	displayString(float value);
		void	displayString(double value);// 与float完全相同,arduino中double和float精度完全相同
		void	displayString(int value);
		boolean displayOneDigi(unsigned char digi,unsigned char cha);
		void	displayOn();
		void	displayOff();
		boolean displayOff(unsigned char lightLevel,unsigned char SegmentMode,unsigned char WorkMode);
		boolean displayOn(unsigned char lightLevel,unsigned char SegmentMode,unsigned char WorkMode);
		void	setDot(unsigned int aPos, bool aState);
		void 	setBrightness(unsigned int iBrightness);
		int 	displayRunning(String aString);
		int 	displayRunning(char *aString);
		int 	displayRunningShift();
	
	private:
		int _pin_SCK;			//clock in pin
		int _pin_DIO;			//data in and out pin

		char	*iPosition;
		char	iString[TM1650_MAX_STRING+1];
		byte 	iBuffer_num[TM1650_NUM_DIGITS+1];   // 数字位
		byte 	iBuffer_dot[TM1650_NUM_DIGITS+1];	// 小数点位
		byte 	SegmentMode;
		byte 	WorkMode;
		byte 	DsplayONOFF;
		
		void FrameStart_1650(void);
		void FrameEnd_1650(void);
		boolean FrameAck_1650(void);
		boolean writeByte(unsigned char firstByte,unsigned char secondByte);
};	


/*==================================================*/

/**
*/	
YFTM1650::YFTM1650(int pin_SCK,int pin_DIO)
{
	pinMode(pin_SCK, OUTPUT);
	pinMode(pin_DIO, OUTPUT);
	
	_pin_SCK = pin_SCK;
	_pin_DIO = pin_DIO;
}

/** FrameStart_1650 
 */
void YFTM1650::FrameStart_1650(void)
{

	digitalWrite(_pin_DIO , HIGH);
	digitalWrite(_pin_SCK , HIGH);		  
	digitalWrite(_pin_DIO , LOW);
}

/** FrameEnd_1650 
 */
void YFTM1650::FrameEnd_1650(void)
{
	digitalWrite(_pin_DIO , LOW);
	digitalWrite(_pin_SCK , HIGH);		  
	digitalWrite(_pin_DIO , HIGH);
}

/** FrameAck_1650 
 */
boolean YFTM1650::FrameAck_1650(void)
{
	if(digitalRead(_pin_DIO) == LOW)
	{
		digitalWrite(_pin_SCK , HIGH);	
		digitalWrite(_pin_SCK , LOW);	
		return 0;
	}
	else
	{
		return 1;
	}
}

/** writeByte 
 */
boolean YFTM1650::writeByte(unsigned char firstByte,unsigned char secondByte)
{
	unsigned char tmp;
	unsigned char i=0;
	boolean err=0;		

	tmp=firstByte;

	FrameStart_1650();

	for(i=0;i<8;i++)
	{
		if(tmp&0x80)
		{
			digitalWrite(_pin_DIO , HIGH);
		}
		else
		{
			digitalWrite(_pin_DIO , LOW);
		}
	
		digitalWrite(_pin_SCK , LOW);
		digitalWrite(_pin_SCK , HIGH);
		digitalWrite(_pin_SCK , LOW);
		
		tmp=tmp<<1;
	}

	if(FrameAck_1650()==1)
	{
		err=1;
	}

	tmp=secondByte;
	for(i=0;i<8;i++)
	{
		if(tmp&0x80)
		{
			digitalWrite(_pin_DIO , HIGH);
		}
		else
		{
			digitalWrite(_pin_DIO , LOW);
		}
	
		digitalWrite(_pin_SCK , LOW);
		digitalWrite(_pin_SCK , HIGH);
		digitalWrite(_pin_SCK , LOW);
		
		tmp=tmp<<1;
	}

	if(FrameAck_1650()==1)
	{
		err=1;
	}

	FrameEnd_1650();

	return err;
}

/** init 初始化
 */
void YFTM1650::init()
{
	iPosition = NULL;
	for (int i=0; i<iNumDigits; i++) {
		// iCtrl[i] = 0;
		iBuffer_num[i] = 0;
		iBuffer_dot[i] = 0;
	}
	SegmentMode = _8_SEGMENT_MODE;
	WorkMode = NORMAL_MODE;
	DsplayONOFF = DISPLAY_ON;
	clear();
	displayOn();
}

/** display n  --  
 *  
 */
boolean YFTM1650::displayOneDigi(unsigned char digi,unsigned char cha)
{
	unsigned char tmp = 0;
	boolean err = 0;
	err = writeByte(DisplayAddressArray[digi-1],cha);
	return err;
}

/** displayString  --  显示字符串
 *  
 */
void YFTM1650::displayString(char *aString)
{
	for (int i=0; i<iNumDigits; i++) {
	  byte a = ((byte) aString[i]) & 0b01111111;
#ifndef TM1650_USE_PROGMEM	  
	  iBuffer_num[i] = TM1650_CDigits[a];
#else
	  iBuffer_num[i] = pgm_read_byte_near(TM1650_CDigits + a);
#endif
	  if (a) {
	  	writeByte(DisplayAddressArray[i],iBuffer_num[i] | iBuffer_dot[i]);
	  }
	  else    break;
	}
}

/** displayString  --  显示字符串
 *  
 */
void YFTM1650::displayString(String sString)
{
	for (int i=0; i<iNumDigits; i++) {
	  byte a = ((byte) sString.c_str()[i]) & 0b01111111;
#ifndef TM1650_USE_PROGMEM	  
	  iBuffer_num[i] = TM1650_CDigits[a];
#else
	  iBuffer_num[i] = pgm_read_byte_near(TM1650_CDigits + a);
#endif
	  if (a) {
	  	writeByte(DisplayAddressArray[i],iBuffer_num[i] | iBuffer_dot[i]);
	  }
	  else    break;
	}
}

/** displayString  --  显示float
 *    保留两位小数
 */
void YFTM1650::displayString(float value)
{
	int f_value = int(value*100);	// float值 放大100倍，并转换int类型
	if(f_value > 9999){				// 当数字大于9999（四位数）则只显示后四位
		f_value = f_value%10000;
	}
	if(f_value < -999){
		iBuffer_dot[1] = 0;  // 无法显示
	}else{
		iBuffer_dot[1] = 0b10000000;  // 保留两位小数
	}
	displayString(f_value);
	iBuffer_dot[1] = 0;  // 数码管小数点位清除
}

/** displayString  --  显示double
 *    保留两位小数
 *  与float完全相同,arduino中double和float精度完全相同
 */
void YFTM1650::displayString(double value)
{
	displayString(float(value));
}

/** displayString  --  显示int
 *  	value 范围：-999 ~ 9999
 *      超出显示范围，则不显示
 */
void YFTM1650::displayString(int value)
{
	if(value > 9999 || value < -999){
		// 超出显示范围，则不显示
	}else{
		String aString = String("") + value;
		unsigned int slen = aString.length();

		for (int i = 0; i < 4 - slen; i++)
			aString = " " + aString;
		for (int i = 0; i<iNumDigits; i++) {
			byte a = ((byte)aString.charAt(i)) & 0b01111111;
#ifndef TM1650_USE_PROGMEM	  
		  iBuffer_num[i] = TM1650_CDigits[a];
#else
		  iBuffer_num[i] = pgm_read_byte_near(TM1650_CDigits + a);
#endif
		  if (a) {
		  	writeByte(DisplayAddressArray[i],iBuffer_num[i] | iBuffer_dot[i]);
		  }
		  else    break;
		}
	}
}

/** display off  --  关闭显示
 *  	lightLevel 		亮度等级
 *		SegmentMode 	显示模式（7/8段显示）
 *		WorkMode		工作模式（待机/正常工作模式）
 */
boolean YFTM1650::displayOff(unsigned char lightLevel,unsigned char SegmentMode,unsigned char WorkMode)
{
	unsigned char tmp = 0;
	boolean err = 0;
	tmp = lightLevel | SegmentMode |  WorkMode | DISPLAY_OFF;
	err = writeByte(CMD_SYSTEM_CONFIG,tmp);

	if(err == 1)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}

/** display off  --  关闭显示
 */
void YFTM1650::displayOff(){
	displayOff(Brightness[7], SegmentMode, WorkMode);
}

/** display on  --  打开显示
 *  	lightLevel 		亮度等级
 *		SegmentMode 	显示模式（7/8段显示）
 *		WorkMode		工作模式（待机/正常工作模式）
 */
boolean YFTM1650::displayOn(unsigned char lightLevel,unsigned char SegmentMode,unsigned char WorkMode)
{
	unsigned char tmp = 0;
	boolean err = 0;
	tmp = lightLevel | SegmentMode |  WorkMode | DISPLAY_ON;
	err = writeByte(CMD_SYSTEM_CONFIG,tmp);

	if(err == 1)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}

/** display on  --  打开显示
 */
void YFTM1650::displayOn(){
	displayOn(Brightness[7], SegmentMode, WorkMode);
}

/** clear  --  清除显示
 */
void YFTM1650::clear(){
	for (int i=0; i<iNumDigits; i++) {
		iBuffer_num[i] = 0;
		iBuffer_dot[i] = 0;
		writeByte(DisplayAddressArray[i],iBuffer_num[i] | iBuffer_dot[i]);
	}
}

/** Directly set/clear a 'dot' next to a specific position  直接设置/清除特定位置旁边的“点”
 * aPos = position to set/clear the dot for  aPos =设置/清除点的位置
 * aState = display the dot if true, clear if false  aState =如果为真则显示点，否则清除
 *
 * Internal buffer is updated as well  内部缓冲区也被更新
 */
void YFTM1650::setDot(unsigned int aPos, bool aState) {
	iBuffer_dot[aPos] = aState ? 0b10000000 : 0;
	if (aPos < iNumDigits) {
	    writeByte(DisplayAddressArray[aPos] , iBuffer_num[aPos] | iBuffer_dot[aPos]);
	}
}

/** Set brightness of all digits equally  平均设置所有数字的亮度
 *  aValue - brightness value with 1 being the lowest, and 8 being the brightest   
 *		aValue - 亮度值1代表最低，8代表最亮(实际设置值0~7)
 */
void YFTM1650::setBrightness(unsigned int aValue) {
	unsigned int iBrightness = Brightness[((aValue > 8) ? 8 : (aValue < 1) ? 1 : aValue) - 1];
	writeByte(CMD_SYSTEM_CONFIG, iBrightness | SegmentMode | WorkMode | DsplayONOFF);
}

/** Display string on the display in a running fashion
 * aString = character array to be displayed
 *
 * Starts with first N positions of the string.
 * Subsequent characters are displayed with 1 char shift each time displayRunningShift() is called
 *
 * returns: number of iterations remaining to display the whole string
 */
int YFTM1650::displayRunning(String aString){
	strncpy(iString, aString.c_str(), TM1650_MAX_STRING+1);
	iPosition = iString;
	iString[TM1650_MAX_STRING] = '\0'; //just in case.
    	displayString(iPosition);

	int l = strlen(iPosition);
	if (l <= iNumDigits) return 0;
	return (l - iNumDigits);
}

int YFTM1650::displayRunning(char *aString){
	strncpy(iString, aString, TM1650_MAX_STRING+1);
	iPosition = iString;
	iString[TM1650_MAX_STRING] = '\0'; //just in case.
    	displayString(iPosition);

	int l = strlen(iPosition);
	if (l <= iNumDigits) return 0;
	return (l - iNumDigits);
}

/** Display next segment (shifting to the left) of the string set by displayRunning()
 * Starts with first N positions of the string.
 * Subsequent characters are displayed with 1 char shift each time displayRunningShift is called
 *
 * returns: number of iterations remaining to display the whole string
 */
int YFTM1650::displayRunningShift() {
    	if (strlen(iPosition) <= iNumDigits) return 0;
    	displayString(++iPosition);
	return (strlen(iPosition) - iNumDigits);
}

#endif