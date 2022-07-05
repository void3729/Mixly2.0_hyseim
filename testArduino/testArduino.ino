
#include <Servo.h>

Servo servo_2;

void setup(){
  servo_2.attach(2);
}

void loop(){
  servo_2.write(90);
  delay(1000);

}