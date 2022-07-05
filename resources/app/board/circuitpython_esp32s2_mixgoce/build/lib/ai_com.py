"""
MxiGo CE to MxiGo AI  COM

CircuitPython library for the MxiGo CE
=======================================================
20211213
mixly 
"""
import busio
data_a=None

def uart_receive(uart):
	data = uart.readline()
	if data:
		data_str = data.decode()
		data_str = data_str.strip()
		try:
			data_dict=eval(data_str)
			return data_dict
		except:
			return data_str
            
def uart_transport(uart,data,repeat=True):
	global data_a	
	data_b = data
	if data_b != data_a:
		uart.write((str(data)+'\n').encode())
		#print(data)
		if not repeat:
			data_a=data_b