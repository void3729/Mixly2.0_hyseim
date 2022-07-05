/*Max7219_digitalLED
	数码管驱动
	驱动使用
		引脚连接： 数据线 DI:  时钟线 CLK: 片选线 CS:
		1、调用begin(brightness)初始化，参数brightness为亮度值：0-15
		2、调用displayDigital(int val)可显示一个整数。
		   调用displayDigital(float val)可显示浮点数（带小数点）。
		   调用displayDigital(long val)可显示长整型数。
		   调用displayDigital(int val, int digital)。可显示单个数位
		3、调用clearDisplay()可清除数码管。
*/

#include "DuinoplusDigitalLED.h"

DigitalLED::DigitalLED(uint16_t pinCs, uint16_t pinData, uint16_t pinClk) : Max7219(pinCs, pinData, pinClk, 1)
{
	CS = pinCs;
	DI = pinData;
	CLK = pinClk;
	pinMode(CS, OUTPUT);
	pinMode(DI, OUTPUT);
	pinMode(CLK, OUTPUT);
}

void DigitalLED::begin(uint8_t brightness)
{
	shutdown(false);
	setIntensity(brightness); //亮度
	clearDisplay();
}
void DigitalLED::displayDigital(int val)
{
	int ones, tens, hundreds, thousands;
	int tmp;

	tmp = val;
	ones = tmp % 10;
	tens = (tmp / 10) % 10;
	hundreds = (tmp / 100) % 10;
	thousands = tmp / 1000;

	clearDisplay();
	setDigit(0, 0, ones, 0);
	if (val >= 10)
	{
		setDigit(0, 1, tens, 0);
		if (val >= 100)
		{
			setDigit(0, 2, hundreds, 0);
			if (val >= 1000)
				setDigit(0, 3, thousands, 0);
		}
	}
}
void DigitalLED::displayDigital(uint8_t val)
{
	int temp;
	temp = (int)val;
	displayDigital(temp);
}
void DigitalLED::displayDigital(uint32_t val)
{
	int temp;
	temp = (int)val;
	displayDigital(temp);
}
void DigitalLED::displayDigital(long val)
{
	int temp;
	temp = (int)val;
	displayDigital(temp);
}
void DigitalLED::displayDigital(float val)
{
	int ones, tens, hundreds, thousands;
	int tmp;
	boolean tensPoint = 0;

	if (val > 0)
		tensPoint = 1;
	tmp = (int)(val * 10);
	ones = tmp % 10;
	tens = (tmp / 10) % 10;
	hundreds = (tmp / 100) % 10;
	thousands = tmp / 1000;

	clearDisplay();
	setDigit(0, 0, ones, 0);
	setDigit(0, 1, tens, tensPoint);
	if (val >= 10)
	{
		setDigit(0, 2, hundreds, 0);
		if (val >= 100)
			setDigit(0, 3, thousands, 0);
	}
}

void DigitalLED::displayDigital(double val)
{
	float temp;
	temp = (float)val;
	displayDigital(temp);
}

void DigitalLED::displayDigital(int num, int data, boolean point)
{
	if (!(data < 0) || !(data > 9))
	{
		setDigit(0, num - 1, data, point);
	}
}


