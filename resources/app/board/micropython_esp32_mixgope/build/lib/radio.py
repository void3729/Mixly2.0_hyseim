"""
Radio-ESP-NOW

Micropython library for the Radio-ESP-NOW 
=======================================================
#Preliminary composition	       20220228

dahanzimin From the Mixly Team 
"""

from esp import espnow
from ubinascii import hexlify,unhexlify
import network

class ESPNow(espnow.ESPNow):
	def __init__(self):
		super().__init__()
		super().init()

		if not network.WLAN().active():
			network.WLAN().active(True)
			print("Make network active")
			
	def send(self,peer,msg):
		'''报错有效处理后发送数据'''	
		try:
			_peer=unhexlify(peer)
			return super().send(_peer,str(msg))
		except OSError as err:
			if len(err.args) < 2:
				raise err
			if err.args[1] == 'ESP_ERR_ESPNOW_NOT_INIT':
				super().init()
			elif err.args[1] == 'ESP_ERR_ESPNOW_IF':
				network.WLAN().active(True)
			elif err.args[1] == 'ESP_ERR_ESPNOW_NOT_FOUND':
				super().add_peer(_peer)
				return super().send(_peer, str(msg))
			elif err.args[1] == 'ESP_ERR_ESPNOW_NO_MEM':
				raise OSError("internal ESP-NOW buffers are full")    
			else:
				raise err  
				
	def recv(self):
		'''接收数据'''
		if super().poll():
			host, msg = super().recv()  
			return hexlify(host).decode(),msg.decode()
		else :
			return None,None

	def recv_cb(self,recv_cb):
		'''接受回调'''
		super().config(on_recv=recv_cb)
		
	@property
	def mac(self):
		'''MAC地址'''
		return hexlify(network.WLAN().config('mac')).decode()
		
	