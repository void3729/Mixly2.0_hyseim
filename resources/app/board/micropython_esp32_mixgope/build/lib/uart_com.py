"""
UART Communication

MicroPython library for the UART_COM（Board to board communication）
=======================================================
#Preliminary composition           				20220227

dahanzimin From the Mixly Team 
"""
data_a=None

def send(uart,data,repeat=True):
	global data_a	
	data_b = data
	if data_b != data_a:
		uart.write((str(data)+'\n'))
		if not repeat:
			data_a=data_b
            
def recv(uart):
	data = uart.readline()
	if data:
		try:
			data_dict=eval(data.strip())
			return data_dict
		except:
			return None

