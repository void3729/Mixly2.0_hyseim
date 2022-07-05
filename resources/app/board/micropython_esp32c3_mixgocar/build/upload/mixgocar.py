from machine import Pin
from machine import PWM
from machine import I2C
from neopixel import NeoPixel
import ms32006
import time
import irtube

 
# Button
class Button:
    def __init__(self, pin):
        from machine import Pin
        self.pin = Pin(pin, Pin.IN)

    def get_presses(self, delay = 1):
        last_time, last_state, presses = time.time(), 0, 0
        while time.time() < last_time + delay:
            time.sleep_ms(50)
            if last_state == 0 and self.pin.value() == 1:
                last_state = 1
            if last_state == 1 and self.pin.value() == 0:
                last_state, presses = 0, presses + 1
        return presses

    def is_pressed(self, flag = 0):
        return self.pin.value() == flag

    def was_pressed(self, flag = 0):
        last_state = self.pin.value()
        if flag:
            if not last_state:
                return False
            else:
                while self.pin.value():
                    time.sleep_ms(10)
                return True
        else:
            if last_state:
                return False
            else:
                while not self.pin.value():
                    time.sleep_ms(10)
                return True

    def irq(self, handler, trigger):
        self.pin.irq(handler = handler, trigger = trigger)


# Stepper          
i2c = I2C(scl = Pin(7), sda = Pin(6), freq = 400000)
step_A = ms32006.MS32006(i2c,addr=ms32006.ADDRESS_A)
step_B = ms32006.MS32006(i2c,addr=ms32006.ADDRESS_B)

def forward(speed=100):
    step_A.dc_motor(ms32006.MOT_CCW,speed) #正转
    step_B.dc_motor(ms32006.MOT_CW,speed) #正转

def back(speed=100):
    step_A.dc_motor(ms32006.MOT_CW,speed) #正转
    step_B.dc_motor(ms32006.MOT_CCW,speed) #正转

def left(speed=100):
    step_A.dc_motor(ms32006.MOT_CCW,speed) #正转
    step_B.dc_motor(ms32006.MOT_CCW,speed) #正转

def right(speed=100):
    step_A.dc_motor(ms32006.MOT_CW,speed) #正转
    step_B.dc_motor(ms32006.MOT_CW,speed) #正转

def stop(speed=100):
    step_A.dc_motor(ms32006.MOT_N,speed)    #空挡
    step_B.dc_motor(ms32006.MOT_N,speed)    #空挡

def brake(speed=100):
    step_A.dc_motor(ms32006.MOT_P,speed)     #刹车
    step_B.dc_motor(ms32006.MOT_P,speed)     #刹车

info = irtube.IRtube()
rgb = NeoPixel(Pin(8), 4)
