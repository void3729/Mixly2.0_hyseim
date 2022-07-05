//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');


/* 显示开始 */
Blockly.Python['mpython_display_Show'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_DispChar'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  var TEXTMODE = block.getFieldValue('TEXTMODE');
  var AUTORETURN = block.getFieldValue('AUTORETURN');
  var code = '';
  if ("True" != AUTORETURN) {
    code = 'oled.DispChar(str(' + value_message + '), ' + value_x + ', ' + value_y + ', ' + TEXTMODE + ')\n';
  } else {
    code = 'oled.DispChar(str(' + value_message + '), ' + value_x + ', ' + value_y + ', ' + TEXTMODE + ', True)\n';
  }
  return code;
};

//5行显示字符串
Blockly.Python['mpython_display_DispChar_5lines'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  // var DispChar_5lines = block.getFieldValue('DispChar_5lines');
  var DispChar_5lines = Blockly.Python.valueToCode(block, 'DispChar_5lines', Blockly.Python.ORDER_ATOMIC);
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  if (isNaN(DispChar_5lines)) {
	  DispChar_5lines = '('+ DispChar_5lines + '-1)*16';
  } else {
	  if (DispChar_5lines % 16 != 0) DispChar_5lines = (parseInt(DispChar_5lines) - 1) * 16;
  }
  var TEXTMODE = block.getFieldValue('TEXTMODE');
  var AUTORETURN = block.getFieldValue('AUTORETURN');
  var code = '';
  if ("True" != AUTORETURN) {
    code = 'oled.DispChar(str(' + value_message + '), 0, ' + DispChar_5lines + ', ' + TEXTMODE + ')\n';
  } else {
    code = 'oled.DispChar(str(' + value_message + '), 0, ' + DispChar_5lines + ', ' + TEXTMODE + ', True)\n';
  }
  return code;
};

//清除单行显示
Blockly.Python['mpython_clear_dispchar_5lines'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  // var DispChar_5lines = block.getFieldValue('DispChar_5lines');
  var DispChar_5lines = Blockly.Python.valueToCode(block, 'DispChar_5lines', Blockly.Python.ORDER_ATOMIC);
  //var start_y = DispChar_5lines;
  if (isNaN(DispChar_5lines)) {
	  DispChar_5lines = '('+ DispChar_5lines + '-1)*16';
  } else {
	  if (DispChar_5lines % 16 != 0) DispChar_5lines = (parseInt(DispChar_5lines) - 1) * 16;
  }
  var code = 'oled.fill_rect(0, ' + DispChar_5lines + ', 128, 16, 0)\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_fill'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var oled_fill = block.getFieldValue('display_fill');
  var code = 'oled.' + oled_fill + '\n';
  // + 'oled.show()\n';

  return code;
};

Blockly.Python['mpython_oled_pixel_option'] = function (block) {
  var code = block.getFieldValue('VALUE');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_display_pixel'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var oled_pixel = Blockly.Python.valueToCode(block, 'display_pixel', Blockly.Python.ORDER_ATOMIC);
  var code = 'oled.pixel(' + value_x + ', ' + value_y + ', ' + oled_pixel + ')\n'; //+  'oled.show()\n';

  return code;
};

Blockly.Python['mpython_display_hvline'] = function (block) { //水平线
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var var_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var hv = block.getFieldValue('dir_h_v');
  var code = 'oled.' + (('0' == hv) ? 'v': 'h') + 'line(' + x + ', ' + y + ', ' + var_length + ', ' + state + ')\n'; //+ 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_hline'] = function (block) { //水平线
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var var_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.hline(' + x + ', ' + y + ', ' + var_length + ', ' + state + ')\n'; //+ 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_ProgressBar'] = function (block) { //进度条
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.functions_['define_UI'] = 'myUI = UI(oled)';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  var height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  var progress = Blockly.Python.valueToCode(block, 'progress', Blockly.Python.ORDER_ATOMIC);

  var code = 'myUI.ProgressBar(' + x + ', ' + y + ', ' + width + ', ' + height + ', ' + progress + ')\n';
  return code;
};

Blockly.Python['mpython_stripBar'] = function (block) { //柱状条
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.functions_['define_UI'] = 'myUI = UI(oled)';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  var height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  var progress = Blockly.Python.valueToCode(block, 'progress', Blockly.Python.ORDER_ATOMIC);
  var dir_h_v = block.getFieldValue('dir_h_v');

  var code = 'myUI.stripBar(' + x + ', ' + y + ', ' + width + ', ' + height + ', ' + progress + ', ' + dir_h_v + ', ' + '1)\n';
  return code;
};

Blockly.Python['mpython_qr_code'] = function (block) { //二维码
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.functions_['define_UI'] = 'myUI = UI(oled)';
  var str = Blockly.Python.valueToCode(block, 'str', Blockly.Python.ORDER_ATOMIC);
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var scale = block.getFieldValue('scale');
  var code = 'myUI.qr_code(' + str + ', ' + x + ', ' + y + ', scale=' + scale +')\n';
  return code;
};

Blockly.Python['mpython_display_vline'] = function (block) { //垂直线
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var var_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.vline(' + x + ', ' + y + ', ' + var_length + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};
Blockly.Python['mpython_display_line'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.line(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_shape_rect'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var shape = block.getFieldValue('shape');
  var code = 'oled.' + shape + '(' + x + ', ' + y + ', ' + w + ', ' + h + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_rect'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.rect(' + x + ', ' + y + ', ' + w + ', ' + h + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};
// 绘制弧角矩形
Blockly.Python['mpython_display_RoundRect'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
  var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.RoundRect(' + x + ', ' + y + ', ' + w + ', ' + h + ', ' + r + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};
Blockly.Python['mpython_display_fill_rect'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.fill_rect(' + x + ', ' + y + ', ' + w + ', ' + h + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_shape_circle'] = function (block) { //空心圆
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var shape = block.getFieldValue('shape');
  var code = 'oled.' + shape + '(' + x + ', ' + y + ', ' + radius + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_fill_circle'] = function (block) { //实心圆
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.fill_circle(' + x + ', ' + y + ', ' + radius + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_circle'] = function (block) { //空心圆
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.circle(' + x + ', ' + y + ', ' + radius + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_shape_triangle'] = function (block) { //空心三角
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var x3 = Blockly.Python.valueToCode(block, 'x3', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
  var y3 = Blockly.Python.valueToCode(block, 'y3', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var shape = block.getFieldValue('shape');
  var code = 'oled.' + shape + '(' + x + ', ' + y + ', ' + x2 + ', ' + y2 + ', ' + x3 + ', ' + y3 + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_triangle'] = function (block) { //空心三角
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var x3 = Blockly.Python.valueToCode(block, 'x3', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
  var y3 = Blockly.Python.valueToCode(block, 'y3', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.triangle(' + x + ', ' + y + ', ' + x2 + ', ' + y2 + ', ' + x3 + ', ' + y3 + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

Blockly.Python['mpython_display_fill_triangle'] = function (block) { //实心三角
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  var x3 = Blockly.Python.valueToCode(block, 'x3', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
  var y3 = Blockly.Python.valueToCode(block, 'y3', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.fill_triangle(' + x + ', ' + y + ', ' + x2 + ', ' + y2 + ', ' + x3 + ', ' + y3 + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

// 绘制 bitmap 图案
Blockly.Python['mpython_display_Bitmap'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
  var Bitmap = Blockly.Python.valueToCode(block, 'Bitmap', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  var code = 'oled.Bitmap(' + x + ', ' + y + ', bytearray(' + Bitmap + '), ' + w + ', ' + h + ', ' + state + ')\n';// + 'oled.show()\n';
  return code;
};

// 取得 pbm 文件数据
Blockly.Python['mpython_get_pbm_data'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  //Blockly.Python.definitions_['import_Image'] = 'from gui import Image';
  Blockly.Python.functions_['define_Image'] = 'image_picture = Image()';
  var select = block.getFieldValue('select');
  var file_path = Blockly.Python.valueToCode(block, 'file_path', Blockly.Python.ORDER_ATOMIC);
  var code = 'image_picture.load(' + file_path + ', ' + select + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
}

// 取得 pbm 文件数据
Blockly.Python['mpython_get_pbm_data_custom'] = Blockly.Python['mpython_get_pbm_data'];

// 绘制 pbm 图案  -- 来自 pbm 文件
Blockly.Python['mpython_display_pbm_data'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  //Blockly.Python.definitions_['import_Image'] = 'from gui import Image';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var pbm_data = Blockly.Python.valueToCode(block, 'pbm_data', Blockly.Python.ORDER_ATOMIC);
  return 'oled.blit(' + pbm_data + ', ' + x + ', ' + y + ')\n';
};

// 绘制 pbm 图案  -- 来自 pbm 文件
Blockly.Python['mpython_bitmap_from_file'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
  var pbm_data = Blockly.Python.valueToCode(block, 'pbm_data', Blockly.Python.ORDER_ATOMIC);
  return 'oled.blit(framebuf.FrameBuffer(' + pbm_data + '[2], ' + w + ', ' + h + ', framebuf.MONO_HLSB), ' + x + ', ' + y + ')\n';
};

// 显示数码管字体文字
/*
Blockly.Python['mpython_display_digiface'] = function(block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';
  var size = block.getFieldValue('size');
  Blockly.Python.definitions_['import_digiface_' + size] = 'import font.digiface_' + size;
  Blockly.Python.functions_['display_digiface_' + size] =
'def display_digiface_' + size + '(_str, _x, _y):\n' +
'    for _c in _str:\n' +
'        if not _c in \'01234567890:. \': continue\n' +
'        _d = (font.digiface_' + size + '.get_ch(_c))\n' +
'        oled.blit(framebuf.FrameBuffer(bytearray(_d[0]), _d[2], _d[1], framebuf.MONO_HLSB), _x, _y)\n' +
'        _x += _d[2]';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  return 'display_digiface_' + size + '(' + message + ', ' + x + ', ' + y + ')\n';
};
*/

// 内置图片下拉框
Blockly.Python['mpython_pbm_image'] = function (block) {
  var code = "'" + block.getFieldValue('path') + "'";
  return [code, Blockly.Python.ORDER_ATOMIC];
}

// 字体下拉框
Blockly.Python['mpython_font'] = function (block) {
  var code = block.getFieldValue('font');
  return [code, Blockly.Python.ORDER_ATOMIC];
}

// 显示字体文字
Blockly.Python['mpython_display_font'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';
  //var font = Blockly.Python.valueToCode(block, 'font', Blockly.Python.ORDER_ATOMIC);
  var font = block.getFieldValue('font');
  Blockly.Python.definitions_['import_' + font] = 'import ' + font;
  Blockly.Python.functions_['display_font'] =
    'def display_font(_font, _str, _x, _y, _wrap, _z=0):\n' +
    '    _start = _x\n' +
    '    for _c in _str:\n' +
    '        _d = _font.get_ch(_c)\n' +
    '        if _wrap and _x > 128 - _d[2]: _x = _start; _y += _d[1]\n' +
    '        if _c == \'1\' and _z > 0: oled.fill_rect(_x, _y, _d[2], _d[1], 0)\n' +
    '        oled.blit(framebuf.FrameBuffer(bytearray(_d[0]), _d[2], _d[1],\n' +
    '        framebuf.MONO_HLSB), (_x+int(_d[2]/_z)) if _c==\'1\' and _z>0 else _x, _y)\n' +
    '        _x += _d[2]';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  var wrap = block.getFieldValue('wrap');
  if (font.startsWith('font.digiface_')) {
    return 'display_font(' + font + ', ' + message + ', ' + x + ', ' + y + ', ' + wrap + ', 2)\n';
  } else {
    return 'display_font(' + font + ', ' + message + ', ' + x + ', ' + y + ', ' + wrap + ')\n';
  }
};

// 显示自定义字体文字
Blockly.Python['mpython_display_custom_font'] = Blockly.Python['mpython_display_font'];

Blockly.Python['mpython_display_FrameBuffer'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';
    var bmp = Blockly.Python.valueToCode(block, 'bmp', Blockly.Python.ORDER_ATOMIC);
    var w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
    var h = Blockly.Python.valueToCode(block, 'h', Blockly.Python.ORDER_ATOMIC);
    var scan_mode = block.getFieldValue('scan_mode');
    var code = 'fb1 = framebuf.FrameBuffer(' + bmp + ', ' + w + ', ' + h + ', ' + 'framebuf.MONO_' + scan_mode + ')\n';

    return code;
};
Blockly.Python['mpython_display_blit'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    //var front_reverse = block.getFieldValue('front_reverse');
    var code =
        //'oled.invert(' + front_reverse + ')\n' +
        'oled.blit(fb1,' + value_x + ', ' + value_y + ')\n';// + 'oled.show()\n';
    return code;
};
Blockly.Python['mpython_front_reverse'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var front_reverse = block.getFieldValue('front_reverse');
    var code =
        'oled.invert(' + front_reverse + ')\n';
    return code;
};
Blockly.Python['mpython_images_append'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_framebuf'] = 'import framebuf';
    Blockly.Python.definitions_['import_time'] = 'import time';
    var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
    var Length = Blockly.Python.valueToCode(block, 'Length', Blockly.Python.ORDER_ATOMIC);
    var Width = Blockly.Python.valueToCode(block, 'Width', Blockly.Python.ORDER_ATOMIC);
    var period = Blockly.Python.valueToCode(block, 'period', Blockly.Python.ORDER_ATOMIC);
    var code =
        'images = []\n' +
        'for n in range(1,' + num + '):\n' +
        "    with open('IMAGE.%s.pbm' % n, 'rb') as f:\n" +
        "        f.readline() # Magic number\n" +
        "        f.readline() # Creator comment\n" +
        "        f.readline() # Dimensions\n" +
        "        data = bytearray(f.read())\n" +
        "    fbuf = framebuf.FrameBuffer(data, " + Length + "," + Width + ", framebuf.MONO_HLSB)\n" +
        "    images.append(fbuf)\n" +
        "\n" +
        "for i in images:\n" +
        "    oled.blit(i, 0, 0)\n" +
        // "    oled.show()\n" +
        "    time.sleep(" + period + ")\n";
    return code;
};
/* 显示结束 */