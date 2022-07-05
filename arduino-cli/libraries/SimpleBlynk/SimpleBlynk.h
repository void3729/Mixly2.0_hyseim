#ifndef SIMPLEBLYNK_H
#define SIMPLEBLYNK_H

#include "Arduino.h"
#include <ArduinoJson.h>


const char CHAR_RETURN = '\r';
const char CHAR_NEW_LINE = '\n';

const String CommandList[] = {"NO CONNECTION", "NO SERVER CONNECTION", "WIFI Connected", "Blynk"};

typedef void (*StateCallBack)(bool state);
typedef void (*BlynkWriteCallBack)(int Pin, String PinValue);


class SimpleBlynk
{
  public:
    void init(Stream* stream = NULL);
    void Recieve();
    void ProcessByte(byte data);
    void finishRecieve();
    void attachStateCallBack(StateCallBack StateCallBack, int num);
    void attachBlynkWriteCallBack(BlynkWriteCallBack BlynkWriteCallBack);
    void ProcessWriteData();
    void SendConfigWIFI(String arg1,String arg2);
    void SendConfigAuth(String arg1,String arg2);
    void SendVoice(String arg);
    void SendDigitalPlay(String arg);
    void SendBlynkWrite(int arg1, String t);
    void BlynkReset();
    String ReadDataString(String input ,int pos);
    int ReadDataInt(String input ,int pos);
    float ReadDataFloat(String input ,int pos);
  protected:

    Stream* _stream;
    String Recievedata;
    StateCallBack WIFIStateCallBack, ServerStateCallBack;
    BlynkWriteCallBack _BlynkWriteCallBack;
};

#endif
