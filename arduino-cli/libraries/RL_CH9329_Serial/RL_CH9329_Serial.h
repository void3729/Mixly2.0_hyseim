#ifndef _RL_CH9329_Serial_H_
#define _RL_CH9329_Serial_H_
#include <Arduino.h>
#if defined __AVR__ || defined(ESP8266) 
#include <SoftwareSerial.h>
#elif defined (ESP32)
#include <ESP32SoftwareSerial.h>
#endif
#if defined __AVR__ || defined(ESP8266) 
class RL_CH9329_Serial : public SoftwareSerial
{  
    public:
       
       RL_CH9329_Serial(short rxPin, short txPin) : SoftwareSerial(rxPin,txPin) { };
       void SendData(uint8_t cmd,uint8_t len,uint8_t* data);
       size_t Keyboard_press(uint8_t k) ;
       size_t Keyboard_release(uint8_t k);
       size_t Keyboard_release_all();
       size_t Mouse_press(uint8_t k) ;
       size_t Mouse_release(uint8_t k);
       size_t Mouse_release_all();
       
        
    private:
       uint8_t keys[8];
       uint8_t ms_rel[5];
       uint8_t ms_button;
  
};
#elif defined ESP32
class RL_CH9329_Serial : public ESP32SoftwareSerial
{  
    public:
       
       RL_CH9329_Serial(short rxPin, short txPin) : ESP32SoftwareSerial(rxPin,txPin) { };
       void SendData(uint8_t cmd,uint8_t len,uint8_t* data);
       size_t Keyboard_press(uint8_t k) ;
       size_t Keyboard_release(uint8_t k);
       size_t Keyboard_release_all();
       size_t Mouse_press(uint8_t k) ;
       size_t Mouse_release(uint8_t k);
       size_t Mouse_release_all();
       
        
    private:
       uint8_t keys[8];
       uint8_t ms_rel[5];
       uint8_t ms_button;
  
};

#endif



#endif
