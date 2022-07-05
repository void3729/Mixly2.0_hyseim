import servo
import board
import time


myservo = servo.Servo(board.IO9)
while True:
    for i in range(0, 181, 10):
        myservo.write_angle(i)
        time.sleep(0.1)
    for i in range(180, -1, -10):
        myservo.write_angle(i)
        time.sleep(0.1)
