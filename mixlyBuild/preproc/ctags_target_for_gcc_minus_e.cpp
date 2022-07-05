# 1 "E:\\DYH\\Mixly2.0\\testArduino\\testArduino.ino"

# 3 "E:\\DYH\\Mixly2.0\\testArduino\\testArduino.ino" 2

Servo servo_2;

void setup(){
  servo_2.attach(2);
}

void loop(){
  servo_2.write(90);
  delay(1000);

}
