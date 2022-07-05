'use strict';

goog.provide('Blockly.Python.display');
goog.require('Blockly.Python');

Blockly.Python.display_matrix_use_i2c_init = function () {
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var iv = Blockly.Python.valueToCode(this, 'I2CSUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue("key");
    var code;
    if (key=='12x32 Matrix') {
      Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
      code = v + ' = matrix32x12.Matrix(' + iv+ ')\n';
    }else if (key=='TM1637') {
      Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
      code = v + ' = tm1637.' + key + "("+ iv+ ')\n';
    }
    return code;
};

Blockly.Python.display_show_image = function() {
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
    var code = v + ".set_buffer(" + data + ")\n";
    return code;
}

Blockly.Python.display_show_static_string = function() {
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
    var code = v + ".text(" + data + ")\n";
    return code;
}

Blockly.Python.display_scroll_string = function() {
     Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
     var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
     var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
     var code = v + ".scroll("+ data +")\n";
     return code;
}

Blockly.Python.display_show_static = function() {
     Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
     var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
     var code = "matrix.show_static("+ data +")\n";
     return code;
}

Blockly.Python.display_show_image_or_string_delay = function() {
    Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
    var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
    var time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ASSIGNMENT);
    var code = "matrix.show_dynamic(" + data + ','+ time + ")\n";
    return code;
}

Blockly.Python.display_scroll_string_delay = function() {
     Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
     var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
     var data = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ASSIGNMENT);
     var time = Blockly.Python.valueToCode(this, 'time', Blockly.Python.ORDER_ASSIGNMENT);
     var code = v + ".scroll("+ data + ',speed=' + time +")\n";
     return code;
}

Blockly.Python['display_image_create'] = function(block) {
  var colours = {
    "#000000": "0",
    //"#440000": "1",
    //"#660000": "2",
    //"#880000": "3",
    //"#aa0000": "4",
    //"#bb0000": "5",
    //"#cc0000": "6",
    //"#dd0000": "7",
    //"#ee0000": "8",
    "#ff0000": "1"
  }
  function pad(num) {
    let newNum = '';
    if(num.length % 2 === 1) {
      num = '0' + num;
    }
    if(num.length < 8) {
      let k=8-num.length
      for (let i = 1; i <= k; i++){
      num = '0' + num;
    }
    }
    
    for (let i = 1; i <= num.length; i++)
      if (i % 2 === 0 && i !== num.length)
        newNum = newNum + num[i - 1] + ',0x';
      else
        newNum += num[i - 1];
    return '0x' + newNum;
  }
  let colorList = [];
  for (let i = 0; i < 12; i++) {
    let colorRow = '';
    let colorNum = 0;  
    let correct=0;
    
    for (let j = 0; j < 32; j++) {
      if(j<8){
        correct = 7-j
      }
      else if(j<16){
        correct = 23-j
      }
      else if(j<24){
        correct = 39-j
      }
       else if(j<32){
        correct = 55-j
      }  
      colorNum += Number(colours[block.getFieldValue(i + '-' + j)]) * Math.pow(2, 31-correct);
      
    }
    colorRow += pad(colorNum.toString(16));
    colorList.unshift(colorRow);
  }
  let codelist = [];
  for (let i = 0; i < colorList.length; i++){
    codelist[i]=colorList[colorList.length-1-i];
  }
  //var code = "bytearray(b'" + colorList.join('') + "')";
  var code = '[' + codelist + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['display_image_builtins'] = function(block) {
  Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
  var dropdown_image = block.getFieldValue('image');
  var code = 'Image.' + dropdown_image;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['display_animate'] = function(block) {
  Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
  var dropdown_image = block.getFieldValue('ANIMATION');
  var code = 'Image.' + dropdown_image;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['display_get_pixel'] = function(block) {
  Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var code = v + '.pixel(int(' + value_x + '), int(' + value_y + '))';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.display_bright_point= function() {
    Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var x = Blockly.Python.valueToCode(this, 'x', Blockly.Python.ORDER_ASSIGNMENT);
    var y = Blockly.Python.valueToCode(this, 'y', Blockly.Python.ORDER_ASSIGNMENT);
    var dropdown_stat = Blockly.Python.valueToCode(this, 'STAT', Blockly.Python.ORDER_ATOMIC);
    var code = v + '.pixel(int(' + x + '), int(' + y + '), '+ dropdown_stat + ")\n"+v+'.show()\n';
    return code;
}

Blockly.Python['display_get_screen_pixel'] = function() {
  Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var code = v + '.get_brightness()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['display_get_screen_image'] = function() {
  Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
  var code = 'matrix.get_screenimage()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.display_bright_screen= function() {
    Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
    var x = Blockly.Python.valueToCode(this, 'x', Blockly.Python.ORDER_ASSIGNMENT);
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var code = v + '.set_brightness(' + x + ')\n';
    return code;
};


Blockly.Python.display_blink_rate= function() {
    Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
    var x = Blockly.Python.valueToCode(this, 'x', Blockly.Python.ORDER_ASSIGNMENT);
    var code = 'matrix.blink_rate(' + x + ')\n';
    return code;
}

Blockly.Python['display_clear'] = function(block) {
  Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var code = v + '.fill(0)\n'+v + '.show()\n';
  return code;
};


Blockly.Python['image_arithmetic'] = function(a) {
  Blockly.Python.definitions_['import_mixgoce'] = 'import mixgoce';
  var op = a.getFieldValue("OP");
  var imga = Blockly.Python.valueToCode(a, 'A', Blockly.Python.ORDER_ATOMIC);
  var imgb = Blockly.Python.valueToCode(a, 'B', Blockly.Python.ORDER_ATOMIC);
  if (op=='INTERSECTION') {
    var code = imga + '-(' + imga + '-' + imgb +')';
  }
  else{
    var code = imga + op + imgb;
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.display_onoff = function () {
    var code = (this.getFieldValue('ONOFF') == 'ON') ? '1' : '0';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['image_shift'] = function(a) {
  Blockly.Python.definitions_['import_mixgoce'] = 'import mixgoce';
  var op = a.getFieldValue("OP");
  var image = Blockly.Python.valueToCode(a, 'img', Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode(a, 'val', Blockly.Python.ORDER_ATOMIC);
  var code = image + '.shift_' + op + '(' + value + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['display_shift'] = function(a) {
  Blockly.Python.definitions_['import_matrix32x12'] = 'import matrix32x12';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
  var op = a.getFieldValue("OP");
  var value = Blockly.Python.valueToCode(a, 'val', Blockly.Python.ORDER_ATOMIC);
  var code = v + '.' + op + '(' + value + ')\n';
  return code;
};

Blockly.Python.display_tm_use_i2c_init = function () {
    var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC);
    var iv = Blockly.Python.valueToCode(this, 'I2CSUB', Blockly.Python.ORDER_ATOMIC);
    var key = this.getFieldValue("key");
    var code;
    if (key=='TM1650') {
      Blockly.Python.definitions_['import_tm1650'] = 'import tm1650';
      code = v + ' = tm1650.' + key + "("+ iv+ ')\n';
    }else if (key=='TM1637') {
      Blockly.Python.definitions_['import_tm1637'] = 'import tm1637';
      code = v + ' = tm1637.' + key + "("+ iv+ ')\n';
    }
    return code;
};

Blockly.Python.display_tm1650_power = function () {
    // var type = this.getFieldValue("TYPE");
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var stat = this.getFieldValue("STAT");
    var code = v + '.' + stat +"()\n";
    return code;
};

Blockly.Python.display_tm1650_show_num = function () {
    // var type = this.getFieldValue("TYPE");
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var val = Blockly.Python.valueToCode(this, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var code = v + ".shownum(" + val +")\n";
    return code;
};

Blockly.Python.display_tm1650_show_dot = function () {
    // var type = this.getFieldValue("TYPE");
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var n = Blockly.Python.valueToCode(this, 'NO', Blockly.Python.ORDER_ATOMIC);
    var stat = Blockly.Python.valueToCode(this, 'STAT', Blockly.Python.ORDER_ATOMIC);
    var code = v + '.showDP(' + n +", "+stat+")\n";
    return code;
};

Blockly.Python.display_tm1650_set_brightness = function () {
    // var type = this.getFieldValue("TYPE");
    var v = Blockly.Python.valueToCode(this, 'VAR', Blockly.Python.ORDER_ATOMIC);
    var val = Blockly.Python.valueToCode(this, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var code = v + ".intensity(" + val +")\n";
    return code;
};