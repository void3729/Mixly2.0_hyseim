#include "SimpleBlynk.h"


void SimpleBlynk::attachStateCallBack(StateCallBack StateCallBack, int num) {
  switch (num) {
    case 0:
      WIFIStateCallBack = StateCallBack;
      break;
    case 1:
      ServerStateCallBack = StateCallBack;
      break;

  }
}

void SimpleBlynk::attachBlynkWriteCallBack(BlynkWriteCallBack BlynkWriteCallBack) {
  _BlynkWriteCallBack = BlynkWriteCallBack;
}

void SimpleBlynk::init(Stream* stream) {
  _stream = stream;
}

void SimpleBlynk::Recieve() {

  while (_stream->available())
  {
    byte newData = _stream->read();

    ProcessByte(newData);
  }
}

void SimpleBlynk::ProcessByte(byte data)
{
  if (data == (byte)CHAR_RETURN)
    finishRecieve();
  else if (data == (byte)CHAR_NEW_LINE)
    Recievedata = "";
  else
    Recievedata += (char)data;
}

void SimpleBlynk::finishRecieve() {
  if (!Recievedata)
    return;
  int i;
  for (i = 0; i < 4; i++) {
    if (Recievedata.indexOf(CommandList[i]) != -1)
      break;
  }
  switch (i) {
    case 0:
      WIFIStateCallBack(false);
      break;
    case 1:
      ServerStateCallBack(false);
      break;
    case 2:
      WIFIStateCallBack(true);
      break;
    case 3:
      ProcessWriteData();
      break;
  }
}

void SimpleBlynk::ProcessWriteData() {
  Recievedata.replace("Blynk", "");
  StaticJsonDocument<90> doc;
  DeserializationError error = deserializeJson(doc, Recievedata);

  if (error) {
    Serial.print(F("deserializeJson() failed: "));
    Serial.println(error.c_str());
    return;
  }

  const char* root_0 = doc[0]; // "V0"
  const char* root_1 = doc[1]; // "1"
  char temp[5];
  strcpy(temp, root_0 + 1);
  int pin = atoi(temp);


  _BlynkWriteCallBack(pin, root_1);

}

void SimpleBlynk::SendConfigWIFI(String arg1, String arg2) {
  //网络配置 例子AT+WIFI=["QDP","www.qdprobot.com"]
  String msg = "AT+WIFI=[\"" + arg1 + "\",\"" + arg2 + "\"]";
  _stream->print(msg);
}

void SimpleBlynk::SendConfigAuth(String arg1, String arg2) {
  //Blynk配置 例子AT+CONFIGURATION=["getwTFQ55KJLQ4ZVbvCYDQdiAJ4hTBMM","182,61,28,31"]
  String msg = "AT+CONFIGURATION=[\"" + arg1 + "\",\"" + arg2 + "\"]";
  _stream->print(msg);
}

void SimpleBlynk::SendVoice(String arg){
  _stream->print("AT+VOICE=["+String(arg)+"]");
}

void SimpleBlynk::SendDigitalPlay(String arg){
  _stream->print("AT+DIGITAL_PLAY=["+String(arg)+"]");
}

void SimpleBlynk::SendBlynkWrite(int arg1, String t) {
  String msg = "AT+BLYNK_WRITE=[\"" + String(arg1) + "\",\"" + String(t) + "\"]";
  _stream->print(msg);
}

void SimpleBlynk::BlynkReset() {
  String msg = "AT+RESET";
  _stream->print(msg);
}

String SimpleBlynk::ReadDataString(String input ,int pos){
  uint8_t count = 0;
  for(int i=0;i<input.length();i++){
    if(input[i]=='-')
      count++;
  }

  if(pos>count+1)
    return "";
String subStr;
  uint8_t countPos=0;
  for(int i=0;i<input.length();i++){

    if(input[i]=='-'){
      countPos++;
      continue;
    }
    if(countPos+1 == pos)
      subStr+=input[i];
  }
return subStr;

}

int SimpleBlynk::ReadDataInt(String input ,int pos){
  uint8_t count = 0;
  for(int i=0;i<input.length();i++){
    if(input[i]=='-')
      count++;
  }

  if(pos>count+1)
    return 0;
String subStr;
  uint8_t countPos=0;
  for(int i=0;i<input.length();i++){

    if(input[i]=='-'){
      countPos++;
      continue;
    }
    if(countPos+1 == pos)
      subStr+=input[i];
  }
return subStr.toInt();

}

float SimpleBlynk::ReadDataFloat(String input ,int pos){
  uint8_t count = 0;
  for(int i=0;i<input.length();i++){
    if(input[i]=='-')
      count++;
  }

  if(pos>count+1)
    return 0;
String subStr;
  uint8_t countPos=0;
  for(int i=0;i<input.length();i++){

    if(input[i]=='-'){
      countPos++;
      continue;
    }
    if(countPos+1 == pos)
      subStr+=input[i];
  }
return subStr.toFloat();
}