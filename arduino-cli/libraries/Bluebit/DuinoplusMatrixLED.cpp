// 
// 
// 

#include "DuinoplusMatrixLED.h"

MatrixLED::MatrixLED(uint16_t pinCs, uint16_t pinData, uint16_t pinClk, uint16_t w, uint16_t h) : GFXcanvas1(w, h), Max7219(pinCs, pinData, pinClk, (w*h)/64)
{
	CS = pinCs;
	DI = pinData;
	CLK = pinClk;
	pinMode(CS, OUTPUT);
	pinMode(DI, OUTPUT);
	pinMode(CLK, OUTPUT);
}

void MatrixLED::begin(uint8_t brightness){
	setScanLimit(7);
	shutdown(false);  
	setIntensity(brightness); //����
	clear();
}

void MatrixLED::DrawLine(int line, int data)
{
	uint8_t dat;

	dat = (uint8_t)data;

	for (int i = 0; i < 8; i++)
	{
		if ((dat >> i) & 0x01)
			drawPixel(7 - i, line, 1);
		else
			drawPixel(7 - i, line, 0);
	}
//	writeDisplay();
}

void MatrixLED::DrawColumn(int column, int data)
{
	uint8_t dat;

	dat = (uint8_t)data;

	for (int i = 0; i < 8; i++)
	{
		if ((dat >> i) & 0x01)
			drawPixel(column, i, 1);
		else
			drawPixel(column, i, 0);
	}
}

void MatrixLED::clear(void){
	int j;
	uint8_t *buf;
	buf = getBuffer();
	for (int j = 0; j < maxDevices * 8; j++){
		*(buf + j) = 0;
	}
	clearDisplay();
}

void MatrixLED::writeDisplay(void){
	uint8_t *buf;
	buf = getBuffer();
	update(buf);
}



//MatrixLED MatrixLED;

