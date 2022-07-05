from mpython_ble.application import Centeral
def _ble_centeral_notify_callback(_1, _2):pass
import time
from mpython_ble import UUID
import machine

def _ble_get_characteristic(_sid, _cid):
    if _ble_profile is None: return None
    for service in _ble_profile:
        if service.uuid == _sid:
            for characteristics in service:
                if characteristics.uuid == _cid:
                    return characteristics
    return None
def _ble_centeral_notify_callback(_value_handle, _notify_data):
    print(_notify_data)



_ble_centeral = Centeral(bytes('mpy_centeral', 'utf-8'))
while True:
    _ble_profile = _ble_centeral.connect(name=bytes('', 'utf-8'))
    if _ble_centeral:
        _ble_centeral.notify_callback(_ble_centeral_notify_callback)
        break
    time.sleep(2)

_ble_centeral.is_connected()

_c1 = _ble_get_characteristic(UUID(0x181A), UUID(0x2A6E))

_ble_centeral.characteristic_read(_c1.value_handle)

_ble_centeral.characteristic_write(_c1.value_handle, bytes('abc', 'utf-8'))

_ble_centeral.connected_info()[2].decode('UTF-8','ignore')

_ble_centeral.disconnect()
