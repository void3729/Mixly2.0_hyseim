import gyro
from machine import PWM
from machine import Timer
import time


gyro.init()
tim0 = Timer(Timer.TIMER0, Timer.CHANNEL0, mode=Timer.MODE_PWM)
pse19=PWM(tim0, freq=50, duty=2.5, pin=19)
while True:
    pse19.duty(gyro.getRawLvglx()/18.0+2.5)
    time.sleep_ms(10)
