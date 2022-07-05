from machine import Timer
from machine import RTC
import radio


rtc = RTC()
tim = Timer(-1)
myespnow = radio.ESPNow()