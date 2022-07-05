#ifndef _QDPJoystick_H_
#define _QDPJoystick_H_

#include <Arduino.h>

#if defined ESP32
    #define analogReadMax 4095
    #define offset 100 
#elif defined __AVR__
    #define analogReadMax 1023
    #define offset 25 
#endif


class QDPJoystick
{
private:
    uint8_t Enter_X_PIN;
    uint8_t Enter_Y_PIN;

public:
    int Angle1();
    int Angle2();
    int Angle1_32();
    int Angle2_32();    
    void begin(int Enter_X, int Enter_Y);
};

#endif