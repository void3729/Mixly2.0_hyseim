//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');

//初始化 蓝牙名称
Blockly.Python['mpython_init_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    var init_bluetooth = Blockly.Python.valueToCode(block, 'init_bluetooth', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['bluetooth_define'] = 'ble.init(' + init_bluetooth + ')'; //实例化
    var code = '';
    return code;
};


// 开启或关闭蓝牙搜索，开启后,可被BLE主机设置搜索
Blockly.Python['mpython_OnOff_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    var OnOff_bluetooth = block.getFieldValue('OnOff_bluetooth');
    // var seg_num = Blockly.Python.valueToCode(block, 'seg_num', Blockly.Python.ORDER_ATOMIC);
    //Blockly.Python.functions_['init_encoderMotor'] = 'ble.bluetooth_' + OnOff_bluetooth + '_advertising()';
    var code = 'ble.' + OnOff_bluetooth + '_advertising()\n';
    return code;
};


// 模拟HID消费类设备的控制器，如蓝牙遥控器。
Blockly.Python['mpython_HID_consumer_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var status_bar = block.getFieldValue('status_bar');
    var type = block.getFieldValue('type');
    // var type = Blockly.Python.valueToCode(block, 'IO', Blockly.Python.ORDER_ATOMIC);
    var code = 'ble.hidd_send_consumer(' + type + ', ' + status_bar + ')\n';
    return code;
};


// 模拟HID键盘设备
Blockly.Python['mpython_HID_keyboard_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    var HID_keyboard_bluetooth = block.getFieldValue('HID_keyboard_bluetooth');
    // var seg_num = Blockly.Python.valueToCode(block, 'seg_num', Blockly.Python.ORDER_ATOMIC);
    //Blockly.Python.functions_['init_encoderMotor'] = 'ble.bluetooth_' + OnOff_bluetooth + '_advertising()';
    var code = 'ble.hidd_send_keyboard([' + HID_keyboard_bluetooth + '])\n';
    return code;
};


// 模拟HID键盘设备  释放按键
Blockly.Python['mpython_HID_release_keyboard_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    // var seg_num = Blockly.Python.valueToCode(block, 'seg_num', Blockly.Python.ORDER_ATOMIC);
    //Blockly.Python.functions_['init_encoderMotor'] = 'ble.bluetooth_' + OnOff_bluetooth + '_advertising()';
    var code = 'ble.hidd_send_keyboard([0])\n';
    return code;
};


// 模拟HID鼠标设备
Blockly.Python['mpython_HID_mouse_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    var HID_mouse = block.getFieldValue('HID_mouse');
    // var seg_num = Blockly.Python.valueToCode(block, 'seg_num', Blockly.Python.ORDER_ATOMIC);
    //Blockly.Python.functions_['init_encoderMotor'] = 'ble.bluetooth_' + OnOff_bluetooth + '_advertising()';
    var code = 'ble.hidd_send_mouse(' + HID_mouse + ')\n';
    return code;
};


// 模拟HID鼠标设备  释放按键
Blockly.Python['mpython_HID_release_mouse_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    // var seg_num = Blockly.Python.valueToCode(block, 'seg_num', Blockly.Python.ORDER_ATOMIC);
    //Blockly.Python.functions_['init_encoderMotor'] = 'ble.bluetooth_' + OnOff_bluetooth + '_advertising()';
    var code = 'ble.hidd_send_mouse([0])\n';
    return code;
};


// '鼠标指针 行 %2 列 %1'
Blockly.Python['mpython_HID_mouse_pointer_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    var row = Blockly.Python.valueToCode(block, 'row', Blockly.Python.ORDER_ATOMIC);
    var column = Blockly.Python.valueToCode(block, 'column', Blockly.Python.ORDER_ATOMIC);
    var code = "ble.hidd_send_mouse(" + column + ", " + row + ")\n";
    return code;
};


// 模拟HID键盘设备+组合按键
Blockly.Python['mpython_HID_keyboard_group_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    var group = Blockly.Python.valueToCode(block, 'group', Blockly.Python.ORDER_ATOMIC);
    var HID_keyboard_bluetooth = block.getFieldValue('HID_keyboard_bluetooth');
    // var seg_num = Blockly.Python.valueToCode(block, 'seg_num', Blockly.Python.ORDER_ATOMIC);
    //Blockly.Python.functions_['init_encoderMotor'] = 'ble.bluetooth_' + OnOff_bluetooth + '_advertising()';
    var code = 'ble.hidd_send_keyboard([' + HID_keyboard_bluetooth + '],' + group + ')\n';
    return code;
};


//按键组合使用的按键指令
Blockly.Python['mpython_HID_keyboard_part_bluetooth'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_bluetooth'] = 'from bluetooth import ble';
    var HID_keyboard_group = block.getFieldValue('HID_keyboard_group');
    var code = HID_keyboard_group;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
