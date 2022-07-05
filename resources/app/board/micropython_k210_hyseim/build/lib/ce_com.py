"""
MxiGo CE to MxiGo AI  COM

MicroPython library for the MxiGo CE
=======================================================

dahanzimin
202100805
mixly 
"""
data_a=None

def uart_data(uart,data,repeat=True):
	global data_a	
	data_b = data
	if data_b != data_a:
		uart.write((str(data)+'\n'))
		print(data)
		if not repeat:
			data_a=data_b
			
		


