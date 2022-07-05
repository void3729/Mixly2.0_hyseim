/*
 * Bluebit.h
 *
 */

#ifndef bluebit_h
#define bluebit_h
/* #ifndef _bluebit_h
#define _bluebit_h */


#if defined(ARDUINO) && (ARDUINO >= 100)
#include <Arduino.h>
#else
#include <WProgram.h>
#endif

int get_ntcTemp(int pin);
int get_lm35Temp(int pin);
uint16_t getAmbientLight(void);
uint8_t Distance(void);
// char get_joy_button(int pin);
bool get_joy_button(int index, int pin);
void extIOInit(byte pin, byte mode);
void writeExtendedIO(byte pin, byte value);
uint16_t readExtendedIO(byte pin);
float readCodesI2C(int address);
double readPhotoelectricGate(int address);
//void MotorSetSpeed(int address,int speedH,int speedL);
void MotorSetSpeed(int address,int value);
#endif
