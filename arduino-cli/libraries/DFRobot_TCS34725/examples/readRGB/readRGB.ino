#include <DFRobot_TCS34725.h>

DFRobot_TCS34725 tcs = DFRobot_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_4X) ;

void setup()
{
  Serial.begin(9600);
  Serial.println("Color View Test!");
  if (tcs.begin()) {
    Serial.println("Found sensor");
  } else {
    Serial.println("No TCS34725 found ... check your connections");
    while (1);
  }
}

void loop()
{
  Serial.print("R: "); Serial.print(tcs.getRed());Serial.print(",     ");
  Serial.print("G: "); Serial.print(tcs.getGreen());Serial.print(",     ");
  Serial.print("B: "); Serial.println(tcs.getBlue());
  delay(10);
}