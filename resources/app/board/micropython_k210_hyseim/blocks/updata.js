'use strict';

goog.provide('Blockly.Blocks.updata');
goog.require('Blockly.Blocks');


Blockly.Blocks.lists.HUE = 260//'#70b234'//260;
Blockly.Blocks.tuple.HUE = 195//'#5ec73d'//195;
Blockly.Blocks.math.HUE = 230//'#e49f16';


Blockly.FieldColour.COLOURS = ['#ffffff', '#cccccc', '#c0c0c0', '#999999', '#666666', '#333333', '#000000',
    '#ffcccc', '#ff6666', '#ff0000','#cc0000', '#990000', '#660000', '#330000',
    '#ffcc99', '#ff9966', '#ff9900','#ff6600', '#cc6600', '#993300', '#663300',
    '#ffff99', '#ffff66', '#ffcc66','#ffcc33', '#cc9933', '#996633', '#663333',
    '#ffffcc', '#ffff33', '#ffff00','#ffcc00', '#999900', '#666600', '#333300',
    '#99ff99', '#66ff99', '#33ff33','#00ff00', '#33cc00', '#009900', '#006600',
    '#99ffff', '#33ffff', '#66cccc','#00cccc', '#339999', '#336666', '#003333',
    '#ccffff', '#66ffff', '#33ccff','#3366ff', '#0000ff', '#000099', '#000066',
    '#ccccff', '#9999ff', '#6666cc','#6633ff', '#6600cc', '#333399', '#330099',
    '#ffccff', '#ff99ff', '#cc66cc','#cc33cc', '#993399', '#663366', '#330033'];
		
Blockly.FieldColour.COLUMNS = 7;

Blockly.Blocks['lists_create_with_text1'] = {
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
	this.appendDummyInput("")
        .appendField('[')
        .appendField(new Blockly.FieldTextInput('0,0,0'), 'TEXT')
        .appendField(']');
    this.setOutput(true);
	this.setInputsInline(true);
	this.setTooltip(Blockly.MIXLY_TOOLTIP_LISTS_CREATE_WITH_TEXT2);
  }
};

Blockly.Blocks['tuple_create_with_text3'] = {
  init: function() {
    this.setColour(Blockly.Blocks.tuple.HUE);
  this.appendDummyInput("")
        .appendField('(')
        .appendField(new Blockly.FieldTextInput('0,0,0'), 'TEXT')
        .appendField(')');
  this.setOutput(true);
  this.setInputsInline(true);
  this.setTooltip(Blockly.MIXPY_TOOLTIP_TUPLE_CREATE_WITH_TEXT);
  }
};

Blockly.Blocks.LCD_color_seclet = {
  init: function() {
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldColour("33ccff"), "COLOR");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip("颜色");
}
};