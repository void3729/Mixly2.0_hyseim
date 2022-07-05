// LabplusDigitalLED.h

#ifndef _DUINOPLUSDIGITALLED_H_
#define _DUINOPLUSDIGITALLED_H_

#include "DuinoplusMax7219.h"

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

class DigitalLED : public Max7219
{
 protected:

 public:
	DigitalLED(uint16_t pinCs, uint16_t pinData, uint16_t pinClk);
	void begin(uint8_t brightness);
	void displayDigital(int val);
	void displayDigital(uint8_t val);
	void displayDigital(uint32_t val);
	void displayDigital(long val);
	void displayDigital(double val);
	void displayDigital(float val);
	void displayDigital(int num, int data, boolean point=false);
private:
	int CS;
	int DI;
	int CLK;
};

#endif

