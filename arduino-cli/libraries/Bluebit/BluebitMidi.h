/*************************************
Build for midi, LEDONG module set.
Trimmed by Shanbin Zhou, 2017/01/04
*************************************/


#ifndef _BLUEBITMidi_h
#define _BLUEBITMidi_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

#include <SoftwareSerial.h>

class LdSetMidi {
public:
	LdSetMidi(uint8_t rxPin, uint8_t txPin);
	void begin();
	void noteOn(uint8_t cmd, uint8_t pitch, uint8_t velocity);
	//void noteOn(uint8_t cmd, uint8_t pitch, uint8_t velocity, uint16_t seconds);
	void noteOff();
	void MidiChangeProgram(byte channel, byte ins);
	void MidiChangeControl(byte channel, byte data1, byte data2);
private:
	int pinRx;
	int pinTx;	
	//uint16_t duringTime, currentTime;
	SoftwareSerial Sserial;
};

#endif