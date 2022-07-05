#ifndef QH_IOT_PRO_h
#define QH_IOT_PRO_h

//PWM引脚为ESP32引脚,DIR引脚为MCP23017引脚
#define M1PWM 13
#define M1DIR1 12
#define M1DIR2 13

#define M2PWM 33
#define M2DIR1 14
#define M2DIR2 15

#define M3PWM 32
#define M3DIR1 8
#define M3DIR2 9

#define M4PWM 15
#define M4DIR1 10
#define M4DIR2 11


#include <analogWrite.h>
#include <Wire.h>
#include "Adafruit_MCP23017.h"

class QH_IOT_PRO : public Adafruit_MCP23017
{
	public:
		QH_IOT_PRO();
		void motorRun(uint8_t No,int speed);
		void motorBrake(uint8_t No);
		void init();
		bool getLineSensorState(uint8_t data);
};

#endif