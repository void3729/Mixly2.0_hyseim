from machine import PWM
from machine import Timer
import time
from Maix import GPIO
from fpioa_manager import fm
import _thread

def testThread():
    tim0 = Timer(Timer.TIMER0, Timer.CHANNEL0, mode=Timer.MODE_PWM)
    pin2 = PWM(tim0, freq=1000, duty=0, pin=2)
    while True:
        for i in range(0, 100, 1):
            pin2.duty(i)
            time.sleep_ms(10)
        for i in range(100, 0, -1):
            pin2.duty(i)
            time.sleep_ms(10)

def testThread1():
    tim0 = Timer(Timer.TIMER0, Timer.CHANNEL0, mode=Timer.MODE_PWM)
    pin21 = PWM(tim0, freq=1000, duty=0, pin=21)
    while True:
        for i in range(0, 100, 1):
            pin21.duty(i)
            time.sleep_ms(100)
        for i in range(100, 0, -1):
            pin21.duty(i)
            time.sleep_ms(100)

def testThread2():
    while True:
        pin22.value(0)
        pin23.value(1)



fm.register(0, fm.fpioa.GPIOHS0)
pin0 = GPIO(GPIO.GPIOHS0, GPIO.OUT)
pin0.value(1)
fm.register(3, fm.fpioa.GPIOHS3)
pin3 = GPIO(GPIO.GPIOHS3, GPIO.OUT)
pin3.value(1)
fm.register(22, fm.fpioa.GPIOHS22)
pin22 = GPIO(GPIO.GPIOHS22, GPIO.OUT)
fm.register(23, fm.fpioa.GPIOHS23)
pin23 = GPIO(GPIO.GPIOHS23, GPIO.OUT)
tim2 = Timer(Timer.TIMER2, Timer.CHANNEL0, mode=Timer.MODE_PWM)
pin20 = PWM(tim2, freq=1000, duty=0, pin=20)
pin20.duty(60)
_thread.start_new_thread(testThread, ())
_thread.start_new_thread(testThread1, ())
_thread.start_new_thread(testThread2, ())
