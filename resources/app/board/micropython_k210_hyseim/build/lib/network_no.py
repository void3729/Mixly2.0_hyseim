import network,time,board
from machine import UART

wifi_en=board.pin(19,board.GPIO.OUT)
board.register(18,board.FPIOA.UART2_TX)
board.register(17,board.FPIOA.UART2_RX)

def wifi_enable(en):
    wifi_en.value(en)

def wifi_init1():
    wifi_enable(0)
    time.sleep_ms(200)
    wifi_enable(1)
    time.sleep(2)
    uart = UART(UART.UART2,115200,timeout=1000, read_buf_len=4096)
    tmp = uart.read()
    uart.write("AT+UART_CUR=921600,8,1,0,0\r\n")
    print(uart.read())
    uart = UART(UART.UART2,921600,timeout=1000, read_buf_len=10240) # important! baudrate too low or read_buf_len too small will loose data
    uart.write("AT\r\n")
    tmp = uart.read()
    print(tmp)
    if not tmp.endswith("OK\r\n"):
        print("reset fail")
        return None
    try:
        nic = network.ESP8285(uart)
    except Exception:
        return None
    return nic

def wifi_init2():
    wifi_enable(0)
    time.sleep_ms(200)
    wifi_enable(1)
    time.sleep(2)
    uart = UART(UART.UART2,115200,timeout=1000, read_buf_len=4096)
    try:
		nic = network.ESP8285(uart)
		print(nic)
    except Exception:
        return None
    return nic

def wifi_deal_ap_info(info):
    res = []
    for ap_str in info:
        ap_str = ap_str.split(",")
        info_one = []
        for node in ap_str:
            if node.startswith('"'):
                info_one.append(node[1:-1])
            else:
                info_one.append(int(node))
        res.append(info_one)
    return res

def scans(nic):	
	ap_info = nic.scan()
	ap_info = wifi_deal_ap_info(ap_info)
	ap_info.sort(key=lambda x:x[2], reverse=True)
	return ap_info

