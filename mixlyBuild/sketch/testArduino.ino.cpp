#include <Arduino.h>
#line 1 "E:\\DYH\\Mixly2.0\\testArduino\\testArduino.ino"

#include <Servo.h>

Servo servo_2;

#line 6 "E:\\DYH\\Mixly2.0\\testArduino\\testArduino.ino"
void setup();
#line 10 "E:\\DYH\\Mixly2.0\\testArduino\\testArduino.ino"
void loop();
#line 6 "E:\\DYH\\Mixly2.0\\testArduino\\testArduino.ino"
void setup(){
  servo_2.attach(2);
}

void loop(){
  servo_2.write(90);
  delay(1000);

}
