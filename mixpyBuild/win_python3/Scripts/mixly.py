from Maix import GPIO
from fpioa_manager import fm


fm.register(6, fm.fpioa.GPIOHS6)
pin6 = GPIO(GPIO.GPIOHS6, GPIO.OUT)
pin6.value(0)
