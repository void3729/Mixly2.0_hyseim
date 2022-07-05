//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');


//彩灯初始化
Blockly.Python['mpython_neopixel_init'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var n = Blockly.Python.valueToCode(block, 'n', Blockly.Python.ORDER_ATOMIC);
    var analogP_IO = Blockly.Python.valueToCode(block, 'analogP_IO', Blockly.Python.ORDER_ATOMIC);
    // var analogP_IO = block.getFieldValue('analogP_IO');

    // Blockly.Python.definitions_['def_neopixel' + neopixel_name] = neopixel_name + ' = neopixel.NeoPixel(machine.Pin(' + analogP_IO + '), n=' + n + ', bpp=3, timing=1)';
    Blockly.Python.definitions_['def_neopixel' + neopixel_name] = neopixel_name + ' = neopixel.NeoPixel(Pin(Pin.P' + analogP_IO + '), n=' + n + ', bpp=3, timing=1)';
    var code = '';
    return code;
};

//彩虹灯效
Blockly.Python['mpython_neopixel_rainbow'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var n = Blockly.Python.valueToCode(block, 'n', Blockly.Python.ORDER_ATOMIC);
    var bright = Blockly.Python.valueToCode(block, 'bright', Blockly.Python.ORDER_ATOMIC);
    var offset = Blockly.Python.valueToCode(block, 'offset', Blockly.Python.ORDER_ATOMIC);
    /*
      Blockly.Python.definitions_['def_neopixel_rainbow' + neopixel_name] =
    'i = 0\n' +
    'def ' + neopixel_name +'_rainbow(' + neopixel_name +', num, bright, offset):\n' +
    '    rgb = ((255,0,0), (255,127,0), (255,255,0), (0,255,0), (0,255,255),(0,0,255),(136,0,255), (255,0,0))\n' +
    '    for i in range(num):\n' +
    '        t = 7*i/num\n' +
    '        t0 = int(t)\n' +
    '        r = round((rgb[t0][0] + (t-t0)*(rgb[t0+1][0]-rgb[t0][0]))*bright)>>8\n' +
    '        g = round((rgb[t0][1] + (t-t0)*(rgb[t0+1][1]-rgb[t0][1]))*bright)>>8\n' +
    '        b = round((rgb[t0][2] + (t-t0)*(rgb[t0+1][2]-rgb[t0][2]))*bright)>>8\n' +
    // '        np[(i+offset)%num] = (r, g, b)\n';
    '        ' + neopixel_name + '[(i+offset)%num] = (r, g, b)\n';
      var code = neopixel_name +'_rainbow(' + neopixel_name +', ' + n + ', ' + bright + ', ' + offset + ')\n';
    */
    Blockly.Python.definitions_['def_make_rainbow'] =
        'def make_rainbow(_neopixel, _num, _bright, _offset):\n' +
        '    _rgb = ((255,0,0), (255,127,0), (255,255,0), (0,255,0), (0,255,255), (0,0,255), (136,0,255), (255,0,0))\n' +
        '    for i in range(_num):\n' +
        '        t = 7 * i / _num\n' +
        '        t0 = int(t)\n' +
        '        r = round((_rgb[t0][0] + (t-t0)*(_rgb[t0+1][0]-_rgb[t0][0]))*_bright)>>8\n' +
        '        g = round((_rgb[t0][1] + (t-t0)*(_rgb[t0+1][1]-_rgb[t0][1]))*_bright)>>8\n' +
        '        b = round((_rgb[t0][2] + (t-t0)*(_rgb[t0+1][2]-_rgb[t0][2]))*_bright)>>8\n' +
        '        _neopixel[(i + _offset) % _num] = (r, g, b)\n';
    var code = 'make_rainbow(' + neopixel_name + ', ' + n + ', ' + bright + ', ' + offset + ')\n';
    return code;
};

//彩灯 单个颜色
Blockly.Python['mpython_neopixel_single'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var order = Blockly.Python.valueToCode(block, 'order', Blockly.Python.ORDER_ATOMIC);
    var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
    var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
    var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);

    var code = neopixel_name + '[' + order + '] = (' + r + ', ' + g + ', ' + b + ')\n';
    return code;
};
//彩灯 单个颜色
Blockly.Python['mpython_neopixel_single_gui'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var order = Blockly.Python.valueToCode(block, 'order', Blockly.Python.ORDER_ATOMIC);
    var color = block.getFieldValue('COLOUR');
    var r = 0;
    var g = 0;
    var b = 0;
    try {
        if (color.length == 7) {
            r = parseInt(color.substring(1, 3), 16);
            g = parseInt(color.substring(3, 5), 16);
            b = parseInt(color.substring(5, 7), 16);
        }
    } catch (e) { }

    var code = neopixel_name + '[' + order + '] = (' + r + ', ' + g + ', ' + b + ')\n';
    return code;
};

//彩灯 显示
Blockly.Python['mpython_neopixel_show'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var code = neopixel_name + '.write()\n';
    return code;
};

//彩灯 关闭
Blockly.Python['mpython_neopixel_off'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var code = neopixel_name + '.fill( (0, 0, 0) )\n' + neopixel_name + '.write()\n';
    return code;
};

//彩灯 统一颜色
Blockly.Python['mpython_neopixel_all'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
    var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
    var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);

    var code = neopixel_name + '.fill( (' + r + ', ' + g + ', ' + b + ') )\n';
    return code;
};
//彩灯 统一颜色
Blockly.Python['mpython_neopixel_all_gui'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var color = block.getFieldValue('COLOUR');
    var r = 0;
    var g = 0;
    var b = 0;
    try {
        if (color.length == 7) {
            r = parseInt(color.substring(1, 3), 16);
            g = parseInt(color.substring(3, 5), 16);
            b = parseInt(color.substring(5, 7), 16);
        }
    } catch (e) { }

    var code = neopixel_name + '.fill( (' + r + ', ' + g + ', ' + b + ') )\n';
    return code;
};

// 亮度调节
Blockly.Python['mpython_neopixel_brightness'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    var neopixel_name = block.getFieldValue('neopixel_name');
    var bright = Blockly.Python.valueToCode(block, 'bright', Blockly.Python.ORDER_ATOMIC);

    var code = neopixel_name + '.brightness(' + bright + ' / 100)\n';
    return code;
};