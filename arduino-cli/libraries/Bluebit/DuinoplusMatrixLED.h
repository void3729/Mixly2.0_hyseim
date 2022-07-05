// DuinoplusMatrixLED.h
#ifndef _DUINOPLUSMATRIXLED_H_
#define _DUINOPLUSMATRIXLED_H_

#include "BluebitAdafruitGFX.h"
#include "DuinoplusMax7219.h"

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

class MatrixLED :public GFXcanvas1, public Max7219
{
 protected:

 public:
	 MatrixLED(uint16_t pinCs, uint16_t pinData, uint16_t pinClk, uint16_t w, uint16_t h);

	 void begin(uint8_t brightness);
	 void clear(void);
	 void DrawLine(int line, int data);
	 void DrawColumn(int column, int data);
	 void writeDisplay(void);
private:
	int CS;
	int DI;
	int CLK;
};

//extern Adafruit_Max7219Class MatrixLED;

#endif

