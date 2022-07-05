'use strict';

goog.provide('Blockly.Python.updata');

goog.require('Blockly.Python');

function RGB_RGB565(colour){
  colour=colour.substr(1);
  var R,G,B;
  R=colour.substr(0,2);
  G=colour.substr(2,2);
  B=colour.substr(4,2);
  colour=R+G+B;
  colour="0x"+colour;
  var RGB565_red= (colour & 0xf80000)>>19;
  var RGB565_green= (colour & 0xfc00)>>10;
  var RGB565_green1=(RGB565_green &0x38)>>3;
  var RGB565_green2=(RGB565_green &0x07);
  var RGB565_blue= (colour & 0xf8)>>3;
  var n565Color = (RGB565_blue<<8)+(RGB565_green2 <<13) +(RGB565_red<<3)+(RGB565_green1 <<0);
//  return ''+colour+','+RGB565_green+','+RGB565_green1+','+RGB565_green2+'==='+n565Color+'';
	return n565Color;
}

Blockly.Python.lists_create_with_text1 = function() {
  var text=this.getFieldValue('TEXT');
  var code ='[' + text + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.tuple_create_with_text3 = function() {
  var text=this.getFieldValue('TEXT');
  var code = '(' + text + ')';
  return [code,Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.LCD_color_seclet1 = function() {
  var colour = this.getFieldValue('COLOR');
  colour=colour.substr(1);
  var R,G,B;
  R="0x"+colour.substr(0,2);
  G="0x"+colour.substr(2,2);
  B="0x"+colour.substr(4,2); 
  var code = '(' + R + ',' + G + ',' + B + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.LCD_color_seclet = function() {
  var colour = this.getFieldValue('COLOR');
  colour=RGB_RGB565(colour);
  return [colour, Blockly.Python.ORDER_ATOMIC];
};