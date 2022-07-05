//goog.provide('Blockly.Python.ble');
//goog.require('Blockly.Python');


// Common
Blockly.Python['ble_uuid'] = function(block) {
  Blockly.Python.definitions_['import_ble_uuid'] = 'from mpython_ble import UUID';
  var value = block.getFieldValue('VALUE');
  var code = "UUID(" + value + ")";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};


// Peripheral
Blockly.Python['ble_setup_peripheral'] = function(block) {
  Blockly.Python.definitions_['import_ble_profile'] = 'from mpython_ble.gatts import Profile';
  Blockly.Python.definitions_['import_ble_service'] = 'from mpython_ble.services import Service';
  //Blockly.Python.definitions_['import_ble_characteristics'] = 'from mpython_ble.characteristics import Characteristic';
  Blockly.Python.definitions_['import_ble_peripheral'] = 'from mpython_ble.application import Peripheral';
  //Blockly.Python.definitions_['import_struct'] = 'import struct';
  Blockly.Python.definitions_['def_ble_peripheral_callback'] = 
  'def _ble_peripheral_connection_callback(_1, _2, _3):pass\ndef _ble_peripheral_write_callback(_1, _2, _3):pass';
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  var uuid = Blockly.Python.valueToCode(block, 'UUID', Blockly.Python.ORDER_NONE);
  uuid = uuid.replace(/\"/g, '');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  //branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  var code = '_ble_service = Service(' + uuid + ')\nif True:\n' + branch +
  '\n_ble_profile = Profile()\n' +
  '_ble_profile.add_services(_ble_service)\n\n' +
  "_ble_peripheral = Peripheral(name=bytes(" + name + ", 'utf-8')" +
  ", profile=_ble_profile)\n" + //, adv_services=_ble_profile.services_uuid
  '_ble_peripheral.connection_callback(_ble_peripheral_connection_callback)\n' +
  '_ble_peripheral.write_callback(_ble_peripheral_write_callback)\n';
  return code;
};

Blockly.Python['ble_add_characteristic'] = function(block) {
  Blockly.Python.definitions_['import_ble_characteristics'] = 'from mpython_ble.characteristics import Characteristic';
  var name = block.getFieldValue('NAME');
  var uuid = Blockly.Python.valueToCode(block, 'UUID', Blockly.Python.ORDER_NONE);
  uuid = uuid.replace(/\"/g, '');
  var properties_r = block.getFieldValue('properties_r');
  properties_r = (properties_r == 'TRUE') ? 'r' : '';
  var properties_w = block.getFieldValue('properties_w');
  properties_w = (properties_w == 'TRUE') ? 'w' : '';
  var properties_n = block.getFieldValue('properties_n');
  properties_n = (properties_n == 'TRUE') ? 'n' : '';
  var code = name + " = Characteristic(" + uuid + ", properties='" +
  properties_r + properties_w + properties_n + "')\n" +
  '_ble_service.add_characteristics(' + name + ')\n';
  return code;
};

Blockly.Python['ble_peripheral_advertise'] = function(block) {
  Blockly.Python.definitions_['import_ble_peripheral'] = 'from mpython_ble.application import Peripheral';
  var toggle = block.getFieldValue('toggle');
  var code = "_ble_peripheral.advertise(" + toggle + ")\n";
  return code;
};

Blockly.Python['ble_peripheral_attrubute_read'] = function(block) {
  Blockly.Python.definitions_['import_ble_peripheral'] = 'from mpython_ble.application import Peripheral';
  var name = block.getFieldValue('NAME');
  var code = "_ble_peripheral.attrubute_read(" + name + ".value_handle)";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ble_peripheral_attrubute_write'] = function(block) {
  Blockly.Python.definitions_['import_ble_peripheral'] = 'from mpython_ble.application import Peripheral';
  var name = block.getFieldValue('NAME');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var notify = Blockly.Python.valueToCode(block, 'NOTIFY', Blockly.Python.ORDER_NONE);
  var code = "_ble_peripheral.attrubute_write(" + name + ".value_handle, " + value + ", notify=" + notify + ")\n";
  return code;
};

Blockly.Python['ble_peripheral_disconnect'] = function(block) {
  Blockly.Python.definitions_['import_ble_peripheral'] = 'from mpython_ble.application import Peripheral';
  var code = "_ble_peripheral.disconnect()\n";
  return code;
};

Blockly.Python['ble_peripheral_mac'] = function(block) {
  Blockly.Python.definitions_['import_ble_peripheral'] = 'from mpython_ble.application import Peripheral';
  Blockly.Python.definitions_['import_binascii'] = 'import binascii';
  var code = "binascii.hexlify(_ble_peripheral.mac).decode('UTF-8','ignore')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ble_peripheral_connection_callback'] = function(block) {
  Blockly.Python.definitions_['import_binascii'] = 'import binascii';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.functions_['def_ble_peripheral_connection_callback'] =
  'def _ble_peripheral_connection_callback(_conn_handle, _addr_type, _addr):\n' +
  "    _addr = binascii.hexlify(_addr).decode('UTF-8','ignore')\n" + branch;
  return '';
}

Blockly.Python['ble_peripheral_write_callback'] = function(block) {
  Blockly.Python.definitions_['import_binascii'] = 'import binascii';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.functions_['def_ble_peripheral_write_callback'] =
  'def _ble_peripheral_write_callback(_conn_handle, _attr_handle, _data):\n' +
   + '    _data = binascii.hexlify(_data)\n' + branch;
  return '';
}


// Centeral
Blockly.Python['ble_setup_centeral'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  Blockly.Python.definitions_['def_ble_centeral_notify_callback'] = 
  'def _ble_centeral_notify_callback(_1, _2):pass';
  var code = "_ble_centeral = Centeral(bytes(" + name + ", 'utf-8'))\n";
  return code;
};

Blockly.Python['ble_centeral_connect'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  Blockly.Python.definitions_['import_time'] = 'import time';
  /*
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  var addr = Blockly.Python.valueToCode(block, 'ADDR', Blockly.Python.ORDER_NONE);
  var param = '';
  if ( ('""' != name) && ("''" != name) ) {
    param = "name=bytes(" + name + ", 'utf-8')";
  } else if ( ('""' != addr) && ("''" != addr) ) {
    param = "addr=bytes(" + addr + ", 'utf-8')";
  } else {
    return '';
  }*/
  var type = block.getFieldValue('TYPE');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var param = "";
  if (type == "addr") {
    Blockly.Python.definitions_['import_binascii'] = 'import binascii';
    param = type + "=binascii.unhexlify(" + value + ".lower())";
  } else {
    param = type + "=bytes(" + value + ", 'utf-8')";
  }
  var code = "while True:\n    _ble_profile = _ble_centeral.connect(" + param +
  ")\n    if _ble_centeral:\n" +
  "        _ble_centeral.notify_callback(_ble_centeral_notify_callback)\n" +
  "        break\n    time.sleep(2)\n";
  return code;
};

Blockly.Python['ble_centeral_is_connected'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  var code = "_ble_centeral.is_connected()";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ble_centeral_def_characteristic'] = function(block) {
  Blockly.Python.functions_['def_ble_get_characteristic'] = "def _ble_get_characteristic(_sid, _cid):\n" +
  "    if _ble_profile is None: return None\n" +
  "    for service in _ble_profile:\n" +
  "        if service.uuid == _sid:\n" +
  "            for characteristics in service:\n" +
  "                if characteristics.uuid == _cid:\n" +
  "                    return characteristics\n" +
  "    return None";
  var name = block.getFieldValue('NAME');
  var service = Blockly.Python.valueToCode(block, 'Service', Blockly.Python.ORDER_NONE);
  var characteristic = Blockly.Python.valueToCode(block, 'Characteristic', Blockly.Python.ORDER_NONE);
  var code = name + " = _ble_get_characteristic(" + service + ", " + characteristic + ")\n";
  return code;
};

Blockly.Python['ble_centeral_characteristic_read'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  var name = block.getFieldValue('NAME');
  var code = "_ble_centeral.characteristic_read(" + name + ".value_handle)";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ble_centeral_characteristic_write'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  var name = block.getFieldValue('NAME');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = "_ble_centeral.characteristic_write(" + name + ".value_handle, " + value + ")\n";
  return code;
};

Blockly.Python['ble_centeral_notify_callback'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.functions_['def_ble_centeral_notify_callback'] =
  'def _ble_centeral_notify_callback(_value_handle, _notify_data):\n' + branch;
  return '';
}

Blockly.Python['ble_centeral_connected_info'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  var code = "";
  var info = block.getFieldValue('INFO');  // (0, b'\xb4\xe6-\xf9\x80\x97', b'mpy_ble', 0, -56) 
  switch (info) {
    case "name":
      code = "_ble_centeral.connected_info()[2].decode('UTF-8','ignore')";
      break;
    case "mac":
      Blockly.Python.definitions_['import_binascii'] = 'import binascii';
      code = "binascii.hexlify(_ble_centeral.connected_info()[1]).decode('UTF-8','ignore')";
      break;
    case "rssi":
      code = "_ble_centeral.connected_info()[4]";
      break;
    case "addrType":
      code = "_ble_centeral.connected_info()[0]";
      break;
    case "advType":
      code = "_ble_centeral.connected_info()[3]";
      break;
    default:
      code = "_ble_centeral.connected_info()";
      break;
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ble_centeral_close'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  var code = "_ble_centeral.disconnect()\n";
  return code;
};



// UART
Blockly.Python['ble_setup_uart'] = function(block) {
  Blockly.Python.definitions_['import_ble_uart'] = 'from mpython_ble.application import BLEUART';
  Blockly.Python.definitions_['def_ble_uart_irq'] = '_ble_uart = None\ndef _ble_uart_irq():pass';
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  //var rxbuf = Blockly.Python.valueToCode(block, 'RXBUF', Blockly.Python.ORDER_NONE);
  var code = "_ble_uart = BLEUART(name=bytes(" + name + ", 'utf-8'))\n_ble_uart.irq(handler=_ble_uart_irq)\n";
  return code;
};

Blockly.Python['ble_setup_uart_master'] = function(block) {
  Blockly.Python.definitions_['import_ble_uart'] = 'from mpython_ble.application import BLEUART';
  Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
  Blockly.Python.definitions_['def_ble_uart_irq'] = '_ble_uart = None\ndef _ble_uart_irq():pass';
  var type = block.getFieldValue('TYPE');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var code = "";
  if (type == "addr") {
    code = "_ble_uart = BLEUART(role=BLEUART.MASTER, slave_mac=ubinascii.unhexlify(" + value + ".lower()))\n_ble_uart.irq(handler=_ble_uart_irq)\n";
  } else {
    code = "_ble_uart = BLEUART(name=bytes(" + value + ", 'utf-8'), role=BLEUART.MASTER)\n_ble_uart.irq(handler=_ble_uart_irq)\n";
  }
  return code;
};

Blockly.Python['ble_uart_is_connected'] = function(block) {
  Blockly.Python.definitions_['import_ble_uart'] = 'from mpython_ble.application import BLEUART';
  var code = "_ble_uart and _ble_uart.is_connected()";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ble_uart_any'] = function(block) {
  Blockly.Python.definitions_['import_ble_uart'] = 'from mpython_ble.application import BLEUART';
  var code = "_ble_uart.any()";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ble_uart_read'] = function(block) {
  /*
  Blockly.Python.definitions_['import_ble_uart'] = 'from mpython_ble.application import BLEUART';
  var size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_NONE);
  if (size == "None") size = "";
  var code = "bytes(_ble_uart.read(" + size + "))";*/
  var code = "_received_data";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ble_uart_write'] = function(block) {
  Blockly.Python.definitions_['import_ble_uart'] = 'from mpython_ble.application import BLEUART';
  var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE);
  var code = "_ble_uart.write(" + data + ")\n";
  return code;
};

Blockly.Python['ble_uart_irq'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.functions_['def_ble_uart_irq'] =
  '_ble_uart = None\ndef _ble_uart_irq():\n' + '    _received_data = bytes(_ble_uart.read())\n' + branch;
  return '';
};

Blockly.Python['ble_uart_received'] = function(block) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var doFunc = Blockly.Python.statementToCode(this, 'DO');
  Blockly.Python.functions_['def_ble_uart_irq'] =
  '_ble_uart = None\ndef _ble_uart_irq():\n' + '    _received_data = bytes(_ble_uart.read())\n' + doFunc;
  return null;
};

Blockly.Python['ble_uart_close'] = function(block) {
  Blockly.Python.definitions_['import_ble_uart'] = 'from mpython_ble.application import BLEUART';
  var code = "_ble_uart.close()\n";
  return code;
};

/*
Blockly.Python['ble_setup_uart_master'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  Blockly.Python.definitions_['def_ble_centeral_notify_callback'] = 
  'def _ble_centeral_notify_callback(_1, _2):pass';
  var code = "_ble_centeral = Centeral(bytes('mpy_centeral', 'utf-8'))\n";
  return code;
}

Blockly.Python['ble_uart_master_connect'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  Blockly.Python.definitions_['import_ble_uuid'] = 'from mpython_ble import UUID';
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.functions_['def_uart_rx'] = "_uart_rx = None";
  Blockly.Python.functions_['def_ble_profile'] = "_ble_profile = None";
  Blockly.Python.functions_['def_ble_get_characteristic'] = "def _ble_get_characteristic(_sid, _cid):\n" +
  "    if _ble_profile is None: return None\n" +
  "    for service in _ble_profile:\n" +
  "        if service.uuid == _sid:\n" +
  "            for characteristics in service:\n" +
  "                if characteristics.uuid == _cid:\n" +
  "                    return characteristics\n" +
  "    return None";
  var type = block.getFieldValue('TYPE');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);
  var param = type + "=bytes(" + value + ", 'utf-8')";
  var code = "while True:\n    _ble_profile = _ble_centeral.connect(" + param +
  ")\n    if _ble_centeral:\n" +
  "        _ble_centeral.notify_callback(_ble_centeral_notify_callback)\n" +
  "        break\n    time.sleep(2)\n" +
  "_uart_rx = _ble_get_characteristic(UUID('6E400001-B5A3-F393-E0A9-E50E24DCCA9E'), UUID('6E400002-B5A3-F393-E0A9-E50E24DCCA9E'))\n";
  return code;
}

Blockly.Python['ble_uart_master_is_connected'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  var code = "_ble_centeral.is_connected()";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
}

Blockly.Python['ble_uart_master_irq'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.functions_['def_ble_centeral_notify_callback'] =
  'def _ble_centeral_notify_callback(_value_handle, _notify_data):\n' + branch;
  return '';
}

Blockly.Python['ble_uart_master_read'] = function(block) {
  var code = "_notify_data";
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['ble_uart_master_write'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  Blockly.Python.functions_['def_uart_rx'] = "_uart_rx = None";
  var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE);
  var code = "_ble_centeral.characteristic_write(_uart_rx.value_handle, " + data + ")\n";
  return code;
}

Blockly.Python['ble_uart_master_close'] = function(block) {
  Blockly.Python.definitions_['import_ble_centeral'] = 'from mpython_ble.application import Centeral';
  var code = "_ble_centeral.disconnect()\n";
  return code;
}
*/

// HID
Blockly.Python['ble_setup_hid'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  var type = block.getFieldValue('TYPE');
  switch (type) {
    case "keyboard":
      Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import KeyboardCode';
      break;
    case "mouse":
      Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import Mouse';
      break;
    case "consumer":
      Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import ConsumerCode';
      break;
    default:
      return "";
  }
  Blockly.Python.definitions_['def_ble_hid_connect_callback'] = 'def _ble_hid_connect_callback(_1, _2, _3):pass';
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_NONE);
  var battery_level = Blockly.Python.valueToCode(block, 'battery_level', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid = HID(name=bytes(" + name + ", 'utf-8'), battery_level=" + battery_level + ")\n_ble_hid.hid_device.connection_callback(_ble_hid_connect_callback)\n";
  return code;
};

Blockly.Python['ble_hid_advertise'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  var toggle = block.getFieldValue('toggle');
  var code = "_ble_hid.advertise(" + toggle + ")\n";
  return code;
};

Blockly.Python['ble_hid_connect_event'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.functions_['def_ble_hid_connect_callback'] =
  'def _ble_hid_connect_callback(_1, _2, _3):\n' + branch;
  return '';
};

Blockly.Python['ble_hid_connect'] = function(block) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
  Blockly.Python.functions_['def_ble_hid_connect_callback'] =
  'def _ble_hid_connect_callback(_1, _2, _3):\n' + branch;
  return null;
};

Blockly.Python['ble_hid_disconnect'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  var code = "_ble_hid.disconnect()\n";
  return code;
};

Blockly.Python['ble_hid_battery_level'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  var code = "_ble_hid.battery_level";
  return [code, Blockly.Python.ORDER_NONE];
};


// HID 鼠标
Blockly.Python['ble_hid_mouse_buttons'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import Mouse';
  var code = block.getFieldValue('BUTTON');
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ble_hid_mouse_click'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import Mouse';
  var button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid.mouse_click(" + button + ")\n";
  return code;
};

Blockly.Python['ble_hid_mouse_press'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import Mouse';
  var button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid.mouse_press(" + button + ")\n";
  return code;
};

Blockly.Python['ble_hid_mouse_release'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import Mouse';
  var button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid.mouse_release(" + button + ")\n";
  return code;
};

Blockly.Python['ble_hid_mouse_release_all'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  var code = "_ble_hid.mouse_release_all()\n";
  return code;
};

Blockly.Python['ble_hid_mouse_move'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_NONE);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_NONE);
  var wheel = Blockly.Python.valueToCode(block, 'WHEEL', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid.mouse_move(x=" + x + ", y=" + y + ", wheel=" + wheel + ")\n";
  return code;
};


// HID 键盘
Blockly.Python['ble_hid_keyboard_buttons'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import KeyboardCode';
  var code = block.getFieldValue('BUTTON');
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ble_hid_keyboard_send'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import KeyboardCode';
  var button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid.keyboard_send(" + button + ")\n";
  return code;
};

Blockly.Python['ble_hid_keyboard_send_multi'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import KeyboardCode';
  var button1 = Blockly.Python.valueToCode(block, 'BUTTON1', Blockly.Python.ORDER_NONE);
  var button2 = Blockly.Python.valueToCode(block, 'BUTTON2', Blockly.Python.ORDER_NONE);
  var button3 = Blockly.Python.valueToCode(block, 'BUTTON3', Blockly.Python.ORDER_NONE);
  var buttons = [];
  if (button1 != "None") buttons.push(button1);
  if (button2 != "None") buttons.push(button2);
  if (button3 != "None") buttons.push(button3);
  var code = "_ble_hid.keyboard_send(" + buttons.join(", ") + ")\n";
  return code;
};

Blockly.Python['ble_hid_keyboard_press'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import KeyboardCode';
  var button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid.keyboard_press(" + button + ")\n";
  return code;
};

Blockly.Python['ble_hid_keyboard_release'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import KeyboardCode';
  var button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid.keyboard_release(" + button + ")\n";
  return code;
};

Blockly.Python['ble_hid_keyboard_release_all'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  var code = "_ble_hid.keyboard_release_all()\n";
  return code;
};


// HID 遥控器
Blockly.Python['ble_hid_consumer_buttons'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import ConsumerCode';
  var code = block.getFieldValue('BUTTON');
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ble_hid_consumer_send'] = function(block) {
  Blockly.Python.definitions_['import_ble_hid'] = 'from mpython_ble.application import HID';
  Blockly.Python.definitions_['import_ble_hidcode'] = 'from mpython_ble.hidcode import ConsumerCode';
  var button = Blockly.Python.valueToCode(block, 'BUTTON', Blockly.Python.ORDER_NONE);
  var code = "_ble_hid.consumer_send(" + button + ")\n";
  return code;
};

// iBeacon
Blockly.Python['ble_setup_ibeacon'] = function(block) {
  Blockly.Python.definitions_['import_ble_ibeacon'] = 'from mpython_ble.application.beacon import iBeacon';
  var uuid = Blockly.Python.valueToCode(block, 'UUID', Blockly.Python.ORDER_NONE);
  uuid = uuid.replace(/\"/g, '');
  var major = Blockly.Python.valueToCode(block, 'major', Blockly.Python.ORDER_NONE);
  var minor = Blockly.Python.valueToCode(block, 'minor', Blockly.Python.ORDER_NONE);
  var code = '_ble_beacon = iBeacon(' + uuid + ', major=' + major + ', minor=' + minor + ')\n';
  return code;
};

Blockly.Python['ble_ibeacon_advertise'] = function(block) {
  Blockly.Python.definitions_['import_ble_ibeacon'] = 'from mpython_ble.application.beacon import iBeacon';
  var toggle = block.getFieldValue('toggle');
  var code = "_ble_beacon.advertise(" + toggle + ")\n";
  return code;
};