#include <Wire.h>
#include <RL_AHT21.h>

AHT21Class AHT21;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Wire.begin();
  if(AHT21.begin())
    Serial.println("Init AHT21 Sucess.");
  else
    Serial.println("Init AHT21 Failure.");
}

void loop() {
  // put your main code here, to run repeatedly:
  
  Serial.println(String("")+"Humidity(%RH):\t\t"+AHT21.GetHumidity()+"%");
  Serial.println(String("")+"Temperature(℃):\t"+AHT21.GetTemperature()+"℃");
  Serial.println(String("")+"Dewpoint(℃):\t\t"+AHT21.GetDewPoint()+"℃");
  delay(500);
}
