'use strict';

goog.provide('Blockly.Blocks.display');
goog.require('Blockly.Blocks');

Blockly.Blocks.display.HUE = 180;

Blockly.FieldColour.COLOURS = ['#f00', '#000'];
Blockly.FieldColour.COLUMNS = 2;

//var IMG = [["HEART", "HEART"],["HEART_SMALL", "HEART_SMALL"],["HAPPY", "HAPPY"],["SAD", "SAD"],["SMILE", "SMILE"],["SILLY", "SILLY"],["FABULOUS", "FABULOUS"],["SURPRISED", "SURPRISED"],["ASLEEP", "ASLEEP"],["ANGRY", "ANGRY"],["CONFUSED", "CONFUSED"],["NO", "NO"],["YES", "YES"],["LEFT_ARROW", "LEFT_ARROW"],["RIGHT_ARROW", "RIGHT_ARROW"],["DRESS", "DRESS"],["TRANSFORMERS", "TRANSFORMERS"],["SCISSORS", "SCISSORS"],["EXIT", "EXIT"],["TREE", "TREE"],["PACMAN", "PACMAN"],["TARGET", "TARGET"],["TSHIRT", "TSHIRT"],["ROLLERSKATE", "ROLLERSKATE"],["DUCK", "DUCK"],["HOUSE", "HOUSE"],["TORTOISE", "TORTOISE"],["BUTTERFLY", "BUTTERFLY"],["STICKFIGURE", "STICKFIGURE"],["GHOST", "GHOST"],["PITCHFORK", "PITCHFORK"],["MUSIC_QUAVERS", "MUSIC_QUAVERS"],["MUSIC_QUAVER", "MUSIC_QUAVER"],["MUSIC_CROTCHET", "MUSIC_CROTCHET"],["COW", "COW"],["RABBIT", "RABBIT"],["SQUARE_SMALL", "SQUARE_SMALL"],["SQUARE", "SQUARE"],["DIAMOND_SMALL", "DIAMOND_SMALL"],["DIAMOND", "DIAMOND"],["CHESSBOARD", "CHESSBOARD"],["TRIANGLE_LEFT", "TRIANGLE_LEFT"],["TRIANGLE", "TRIANGLE"],["SNAKE", "SNAKE"],["UMBRELLA", "UMBRELLA"],["SKULL", "SKULL"],["GIRAFFE", "GIRAFFE"],["SWORD", "SWORD"]];
var IMG = [["HEART", "HEART"],["HEART_SMALL", "HEART_SMALL"],["HAPPY", "HAPPY"],["SAD", "SAD"],["SMILE", "SMILE"],["SILLY", "SILLY"],["FABULOUS", "FABULOUS"],["SURPRISED", "SURPRISED"],["ASLEEP", "ASLEEP"],["ANGRY", "ANGRY"],["CONFUSED", "CONFUSED"],["NO", "NO"],["YES", "YES"]];

// Blockly.Blocks['display_clear'] = {
//   init : function () {
//     this.jsonInit({
//       "colour" : Blockly.Blocks.display.HUE,
//       "nextStatement" : null,
//       "previousStatement" : null,
//       "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.clear",
//       "message0" : Blockly.MIXLY_MICROBIT_Clear_display
//     });
//     this.setTooltip(Blockly.MIXLY_MICROBIT_Clear_display);
//   }
// };

Blockly.Blocks.display_matrix_use_i2c_init = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput('I2CSUB')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH+"I2C")
            .setCheck("var");
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_MAKE)
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_SETUP + Blockly.Msg.LISTS_SET_INDEX_INPUT_TO)
            .appendField(new Blockly.FieldDropdown([
                // ["MPU9250", "MPU9250"],
                // ["TM1637", "TM1637"],
                ["12x32 Matrix", "12x32 Matrix"]
                ]), "key");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        
     
    }
};

Blockly.Blocks.display_get_pixel = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('SUB')
	  this.appendValueInput('x')
        .setCheck(Number)
		    .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_GET_POINT_X);
	  this.appendValueInput('y')
          .setCheck(Number)
          .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_PLOT_POINT_Y);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_JS_MONITOR_GET_POINT);
    this.setInputsInline(true);
	  this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_ESP32_JS_MONITOR_BRIGHTNESS);
  }
};

Blockly.Blocks.display_bright_point = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('SUB')
  	this.appendValueInput('x')
        .setCheck(Number)
        .appendField(Blockly.MIXLY_ESP32_JS_MONITOR_SET_BRIGHTNESS)
  		  .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_GET_POINT_X);
  	this.appendValueInput('y')
        .setCheck(Number)
        .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_PLOT_POINT_Y);
    this.appendValueInput("STAT")        
        .setCheck([Number,Boolean]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  	this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_DISPLAY_SETPIXEL);
  }
};

Blockly.Blocks.monitor_show_string = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
	  this.appendValueInput('data')
        .setCheck(String)
        .appendField(new Blockly.FieldDropdown([[Blockly.OLED_DRAWSTR_ONE_BY_ONE,'show'],[Blockly.MIXLY_ESP32_MONITOR_SCROLL,'scroll']]),"MODE")
		    .appendField(Blockly.OLED_DRAWSTR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	  this.setInputsInline(true);
    var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('MODE');
        var mode0 = Blockly.OLED_DRAWSTR;
        var TOOLTIPS = {
        'show':Blockly.OLED_DRAWSTR_ONE_BY_ONE,
        'scroll':Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_STRING
      };
      return TOOLTIPS[mode]+mode0;
    });
  }
};

Blockly.Blocks.monitor_show_scroll_string = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('data')
        .setCheck(String)
        .appendField(new Blockly.FieldDropdown([[Blockly.OLED_DRAWSTR_ONE_BY_ONE,'show'],[Blockly.MIXLY_ESP32_MONITOR_SCROLL,'scroll']]),"MODE")
        .appendField(Blockly.OLED_DRAWSTR);
    this.appendValueInput("time")
        .setCheck(Number)
        // .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DELAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('MODE');
        var mode0 = Blockly.OLED_DRAWSTR;
        var TOOLTIPS = {
        'show':Blockly.OLED_DRAWSTR_ONE_BY_ONE,
        'scroll':Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_STRING
      };
      return TOOLTIPS[mode]+mode0;
    });
  }
};


Blockly.Blocks.display_show_static = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
  this.appendValueInput('data')
        .setCheck(String)
    .appendField(Blockly.MIXLY_ESP32_MONITOR_SHOW_STATIC);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  this.setInputsInline(true);
  this.setTooltip(Blockly.MIXLY_ESP32_MUSIC_SHOW_STATIC);
  }
};

Blockly.Blocks.microbit_display_show_image = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('SUB')
    this.appendValueInput('PIN',String)
        .setCheck("esp32_image")
        .appendField(Blockly.OLED_BITMAP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.OLED_BITMAP);
  }
};



Blockly.Blocks['esp32_display_show_default_image'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.display.HUE,
      "InputsInline": true,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show",
      "tooltip" : "Show the referenced image on the display.",
      "message0" : Blockly.OLED_BITMAP,
      "args0" : [{
          "name" : "image",
          "options" : [["HEART", "HEART"],["HEART_SMALL", "HEART_SMALL"],["HAPPY", "HAPPY"],["SAD", "SAD"],["SMILE", "SMILE"],["SILLY", "SILLY"],["FABULOUS", "FABULOUS"],["SURPRISED", "SURPRISED"],["ASLEEP", "ASLEEP"],["ANGRY", "ANGRY"],["CONFUSED", "CONFUSED"],["NO", "NO"],["YES", "YES"],["LEFT_ARROW", "LEFT_ARROW"],["RIGHT_ARROW", "RIGHT_ARROW"],["DRESS", "DRESS"],["TRANSFORMERS", "TRANSFORMERS"],["SCISSORS", "SCISSORS"],["EXIT", "EXIT"],["TREE", "TREE"],["PACMAN", "PACMAN"],["TARGET", "TARGET"],["TSHIRT", "TSHIRT"],["ROLLERSKATE", "ROLLERSKATE"],["DUCK", "DUCK"],["HOUSE", "HOUSE"],["TORTOISE", "TORTOISE"],["BUTTERFLY", "BUTTERFLY"],["STICKFIGURE", "STICKFIGURE"],["GHOST", "GHOST"],["PITCHFORK", "PITCHFORK"],["MUSIC_QUAVERS", "MUSIC_QUAVERS"],["MUSIC_QUAVER", "MUSIC_QUAVER"],["MUSIC_CROTCHET", "MUSIC_CROTCHET"],["COW", "COW"],["RABBIT", "RABBIT"],["SQUARE_SMALL", "SQUARE_SMALL"],["SQUARE", "SQUARE"],["DIAMOND_SMALL", "DIAMOND_SMALL"],["DIAMOND", "DIAMOND"],["CHESSBOARD", "CHESSBOARD"],["TRIANGLE_LEFT", "TRIANGLE_LEFT"],["TRIANGLE", "TRIANGLE"],["SNAKE", "SNAKE"],["UMBRELLA", "UMBRELLA"],["SKULL", "SKULL"],["GIRAFFE", "GIRAFFE"],["SWORD", "SWORD"]],
          "type" : "field_dropdown"
        }
      ]
    });
  }
};


Blockly.Blocks['esp32_display_show_animation'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.display.HUE,
      "inputsInline": true,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show",
      "message0" : Blockly.MIXLY_MICROBIT_Animate_images,
      "args0" : [{
          "check" : "List",
          "type" : "input_value",
          "name" : "images"
        }, {
          "type" : "input_value",
          "name" : "delay"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : true,
          "type" : "field_checkbox",
          "name" : "wait"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox",
          "name" : "loop"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox",
          "name" : "clear"
        }
      ]
    });
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_MICROBIT_JS_MONITOR_SHOW_delay+Blockly.MIXLY_MICROBIT_Animate_images1);
  }
};

Blockly.Blocks['esp32_display_scroll'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.display.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.scroll",
      "tooltip" : "Scroll the referenced text across the display.",
      "message0" : Blockly.MIXLY_MICROBIT_Scroll_message,
      "args0" : [{
          "check" : "String",
          "type" : "input_value",
          "name" : "message"
        }
      ]
    });
  }
};

Blockly.Blocks['esp32_display_on'] = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
  this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_Turn_on_display,'on'],[Blockly.MIXLY_MICROBIT_Turn_off_display,'off']]),'on_off')
      .appendField(Blockly.MIXLY_MICROBIT_monitor);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setInputsInline(true);
  this.setInputsInline(true);
    var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('on_off');
        var mode0 =Blockly.MIXLY_MICROBIT_monitor;
        var TOOLTIPS = {
        'on':Blockly.MIXLY_MICROBIT_Turn_on_display,
        'off':Blockly.MIXLY_MICROBIT_Turn_off_display
      };
      return TOOLTIPS[mode]+mode0;
    });
  }
};

Blockly.Blocks['esp32_display_off'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.display.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.off",
      "tooltip" : "Turn off the display.",
      "message0" : Blockly.MIXLY_MICROBIT_Turn_off_display
    });
  }
};

Blockly.Blocks['esp32_display_is_on'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.display.HUE,
      "output" : "Boolean",
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.is_on",
      "message0" : Blockly.MIXLY_MICROBIT_Display_is_on
    });
    this.setTooltip(Blockly.MIXLY_MICROBIT_Display_is_on1);
  }
};

Blockly.Blocks['display_image_builtins'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.display.HUE,
      "args0" : [{
          "name" : "image",
          "options" : [["HEART", "HEART"],["HEART_SMALL", "HEART_SMALL"],["HAPPY", "HAPPY"],["SAD", "SAD"],["SMILE", "SMILE"],["SILLY", "SILLY"],["FABULOUS", "FABULOUS"],["SURPRISED", "SURPRISED"],["ASLEEP", "ASLEEP"],["ANGRY", "ANGRY"],["CONFUSED", "CONFUSED"],["NO", "NO"],["YES", "YES"],["LEFT_ARROW", "LEFT_ARROW"],["RIGHT_ARROW", "RIGHT_ARROW"],["DRESS", "DRESS"],["TRANSFORMERS", "TRANSFORMERS"],["SCISSORS", "SCISSORS"],["EXIT", "EXIT"],["TREE", "TREE"],["PACMAN", "PACMAN"],["TARGET", "TARGET"],["TSHIRT", "TSHIRT"],["ROLLERSKATE", "ROLLERSKATE"],["DUCK", "DUCK"],["HOUSE", "HOUSE"],["TORTOISE", "TORTOISE"],["BUTTERFLY", "BUTTERFLY"],["STICKFIGURE", "STICKFIGURE"],["GHOST", "GHOST"],["PITCHFORK", "PITCHFORK"],["MUSIC_QUAVERS", "MUSIC_QUAVERS"],["MUSIC_QUAVER", "MUSIC_QUAVER"],["MUSIC_CROTCHET", "MUSIC_CROTCHET"],["COW", "COW"],["RABBIT", "RABBIT"],["SQUARE_SMALL", "SQUARE_SMALL"],["SQUARE", "SQUARE"],["DIAMOND_SMALL", "DIAMOND_SMALL"],["DIAMOND", "DIAMOND"],["CHESSBOARD", "CHESSBOARD"],["TRIANGLE_LEFT", "TRIANGLE_LEFT"],["TRIANGLE", "TRIANGLE"],["SNAKE", "SNAKE"],["UMBRELLA", "UMBRELLA"],["SKULL", "SKULL"],["GIRAFFE", "GIRAFFE"],["SWORD", "SWORD"]],
          "type" : "field_dropdown"
        }
      ],
      "output" : ["esp32_image", "List"],
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/image.html#attributes",
      "tooltip" : Blockly.MIXLY_MICROBIT_Built_in_image1,
      "message0" : Blockly.MIXLY_MICROBIT_Built_in_image
    });
  }
};

Blockly.Blocks['display_image_create']= {
  init: function() {
    for (let i = 0; i < 12; i++) {
      let dummyInputObj = this.appendDummyInput();
      for (let j = 0; j < 32; j++) {
        dummyInputObj.appendField(new Blockly.FieldColour("#000000"), i + '-' + j);
      }
    }
    this.setOutput(true);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setTooltip(Blockly.MIXLY_MICROBIT_Create_image1);
  }
};


Blockly.Blocks['display_shift'] = {
  init: function() {
    var OPERATORS =
        [[Blockly.MIXLY_UP, 'shift_up'],
         [Blockly.MIXLY_DOWN, 'shift_down'],
         [Blockly.MIXLY_LEFT, 'shift_left'],
         [Blockly.MIXLY_RIGHT, 'shift_right'],
        ];
    //this.setHelpUrl(Blockly.Msg.MATH_TRIG_HELPURL);
    this.appendValueInput('SUB')
    this.setColour(Blockly.Blocks.display.HUE);
    // this.setOutput(true);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.DISPLAY_IMAGE_LET2)
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.appendValueInput('val')
        .appendField(Blockly.Msg.DISPLAY_IMAGE_SHIFT)
        .setCheck(Number);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.DISPLAY_IMAGE_UNIT)
    var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('OP');
        var mode0 = Blockly.Msg.DISPLAY_IMAGE_LET;
        var mode1 = Blockly.Msg.DISPLAY_IMAGE_LET2;
        var mode2 = Blockly.Msg.DISPLAY_IMAGE_LET3;
        var TOOLTIPS = {
        'up': Blockly.MIXLY_UP,
        'down':Blockly.MIXLY_DOWN,
        'left':Blockly.MIXLY_LEFT,
        'right':Blockly.MIXLY_RIGHT
      };
      return mode0 + mode1 +TOOLTIPS[mode]+mode2;
    });
  }
};

Blockly.Blocks['image_shift'] = {
  init: function() {
    var OPERATORS =
        [[Blockly.MIXLY_UP, 'up'],
         [Blockly.MIXLY_DOWN, 'down'],
         [Blockly.MIXLY_LEFT, 'left'],
         [Blockly.MIXLY_RIGHT, 'right'],
        ];
    //this.setHelpUrl(Blockly.Msg.MATH_TRIG_HELPURL);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setOutput(true);
    this.setInputsInline(true);
    this.appendValueInput('img')
        .appendField(Blockly.Msg.DISPLAY_IMAGE_LET)
        .setCheck(["esp32_image","List",String]);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.DISPLAY_IMAGE_LET2)
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.appendValueInput('val')
        .appendField(Blockly.Msg.DISPLAY_IMAGE_SHIFT)
        .setCheck(Number);
    this.appendDummyInput('')
        .appendField(Blockly.Msg.DISPLAY_IMAGE_UNIT)
    var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('OP');
        var mode0 = Blockly.Msg.DISPLAY_IMAGE_LET;
        var mode1 = Blockly.Msg.DISPLAY_IMAGE_LET2;
        var mode2 = Blockly.Msg.DISPLAY_IMAGE_LET3;
        var TOOLTIPS = {
        'up': Blockly.MIXLY_UP,
        'down':Blockly.MIXLY_DOWN,
        'left':Blockly.MIXLY_LEFT,
        'right':Blockly.MIXLY_RIGHT
      };
      return mode0 + mode1 +TOOLTIPS[mode]+mode2;
    });
  }
};

Blockly.Blocks['image_arithmetic'] = {
  init: function() {
    var OPERATORS =
        [[Blockly.MICROBIT_DISPLAY_UNION, '+'],
         [Blockly.MICROBIT_DISPLAY_MINUS, '-']];
    //this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(Blockly.Blocks.display.HUE);
    this.setOutput(true, "esp32_image");
    this.appendValueInput('A')
        // .setCheck(["esp32_image", "List", String])
        .appendField(Blockly.MICROBIT_DISPLAY_MERGE_SHAPE);
    this.appendValueInput('B')
        // .setCheck(["esp32_image", "List", String])
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('OP');
        var TOOLTIPS = {
        '+':Blockly.MIXLY_MICROBIT_image_add,
        '-':Blockly.MIXLY_MICROBIT_image_reduce
      };
      return TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks['esp32_display_show_string'] = {
  init : function () {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.OLED_DRAWSTR_ONE_BY_ONE,'show'],[Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_STRING,'scroll']]),"MODE");
    this.jsonInit({
      "colour" : Blockly.Blocks.display.HUE,
      "inputsInline": true,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show",
      "tooltip" : "Display the list of images as an animation with a certain delay between each frame. Indicate if you need to wait before continuing, continuously loop the animation and clear the display when finished.",
      "message0" : Blockly.MIXLY_MICROBIT_SHOW_STRING,
      "args0" : [{
          "check" : String,
          "type" : "input_value",
          "name" : "images"
        }, {
          "type" : "input_value",
          "name" : "delay"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : true,
          "type" : "field_checkbox",
          "name" : "wait"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox",
          "name" : "loop"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox",
          "name" : "clear"
        }
      ]
    });
    this.setInputsInline(true);
    var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('MODE');
        var mode0 = Blockly.OLED_DRAWSTR;
        var mode1 = Blockly.MIXLY_MICROBIT_JS_MONITOR_SHOW_delay;
        var TOOLTIPS = {
        'show':Blockly.OLED_DRAWSTR_ONE_BY_ONE,
        'scroll':Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_STRING
      };
      return mode1+TOOLTIPS[mode]+mode0;
    });
  }
};


// Blockly.Blocks['esp32_display_scroll_string'] = {
//   init : function () {
//     this.jsonInit({
//       "colour" : Blockly.Blocks.display.HUE,
//       "inputsInline": true,
//       "nextStatement" : null,
//       "previousStatement" : null,
//       "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/display.html#microbit.display.show",
//       "tooltip" : "Display the list of images as an animation with a certain delay between each frame. Indicate if you need to wait before continuing, continuously loop the animation and clear the display when finished.",
//       "message0" : Blockly.MIXLY_MICROBIT_Scroll_string,
//       "args0" : [{
//           "check" : String,
//           "type" : "input_value",
//           "name" : "images"
//         }, {
//           "type" : "input_value",
//           "name" : "delay"
//         }, {
//           "type" : "input_dummy"
//         }, {
//           "checked" : true,
//           "type" : "field_checkbox",
//           "name" : "wait"
//         }, {
//           "type" : "input_dummy"
//         }, {
//           "checked" : false,
//           "type" : "field_checkbox",
//           "name" : "loop"
//         }, {
//           "type" : "input_dummy"
//         }, {
//           "checked" : false,
//           "type" : "field_checkbox",
//           "name" : "clear"
//         }
//       ]
//     });
//   }
// };

Blockly.Blocks.group_lcd_print = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField('mylcd')
        //.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2);
    /*
    this.appendValueInput("TEXT3", String)
          .setCheck([String,Number])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_LCD_PRINT3);
    this.appendValueInput("TEXT4", String)
          .setCheck([String,Number])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_LCD_PRINT4);
          */
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_LCD_PRINT4_TOOLTIP);
  }
};

Blockly.Blocks.group_lcd_init = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('device')
        .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_SETUP)
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField('1602')
    .appendField('mylcd')
    .appendField(Blockly.MIXLY_LCD_ADDRESS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_SETUP+Blockly.MIXLY_DF_LCD+Blockly.MIXLY_LCD_ADDRESS);
  }
};

Blockly.Blocks.group_lcd_print2 = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput("row", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField('mylcd')
        .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("column", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_LCD_PRINT3_TOOLTIP);
  }
};

Blockly.Blocks.group_lcd_power = {
  init: function() {
      this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_DF_LCD)
    .appendField('mylcd')
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "on()"], [Blockly.MIXLY_OFF, "off()"],  [Blockly.MIXLY_LCD_STAT_CLEAR, "clear()"], [Blockly.MIXLY_LCD_NOBACKLIGHT, "backlight(off)"], [Blockly.MIXLY_LCD_BACKLIGHT, "backlight(on)"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('STAT');
        var mode0 = Blockly.Msg.LISTS_SET_INDEX_SET;
        var mode1 = Blockly.MIXLY_DF_LCD;
        var TOOLTIPS = {
        'on()':Blockly.MIXLY_ON,
        'off()':Blockly.MIXLY_OFF,
        'clear()':Blockly.MIXLY_LCD_STAT_CLEAR,
        'backlight(off)':Blockly.MIXLY_LCD_NOBACKLIGHT,
        'backlight(on)':Blockly.MIXLY_LCD_BACKLIGHT
      };
      return mode0+mode1+TOOLTIPS[mode];
    });
  }
};

// Blockly.Blocks['oled_init'] = {
//   init: function() {
//    this.setColour(Blockly.Blocks.display.HUE);
//    this.appendValueInput('VAR')
//             .appendField(Blockly.OLED)
//             .setCheck("var");
//    this.appendValueInput("RX", Number)
//        //.appendField(Blockly.MIXLY_SETUP)
//        // .appendField(Blockly.OLED)
//        // .appendField(new Blockly.FieldTextInput('lcd'), 'VAR')  
//        .appendField(Blockly.MIXLY_SETUP)
//        .appendField("sda")
//        .setCheck(Number)
//        .setAlign(Blockly.ALIGN_RIGHT);
//    this.appendValueInput("TX", Number)
//        .appendField("scl")
//        .setCheck(Number)
//        .setAlign(Blockly.ALIGN_RIGHT);
//    this.appendValueInput('freq')
//        .setCheck(Number)
//        .appendField(Blockly.MIXLY_FREQUENCY)
//        .setAlign(Blockly.ALIGN_RIGHT);
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setInputsInline(true);
//    }
//   };

Blockly.Blocks.display_use_i2c_init = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput('I2CSUB')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH+"I2C")
            .setCheck("var");
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_MAKE)
            .setCheck("var");
        // this.appendDummyInput("")
        //     .appendField(Blockly.MIXLY_SETUP + Blockly.Msg.LISTS_SET_INDEX_INPUT_TO + "OLED")
        //     .appendField(new Blockly.FieldDropdown([
        //         ["OLED 128¡Á64", "OLED 128¡Á64"]
        //         ]), "key");
        this.appendValueInput('row')
            .appendField(Blockly.MIXLY_SETUP + Blockly.Msg.LISTS_SET_INDEX_INPUT_TO + "OLED")
            .setCheck(Number);
        this.appendValueInput('column')
            .appendField("X")
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip();
    }
};

Blockly.Blocks.display_draw_4strings = {
    init: function() {
        // this.appendDummyInput()
        //     .appendField(Blockly.OLED)
        // this.appendDummyInput("")        
            // .appendField(new Blockly.FieldTextInput('lcd'), 'VAR')  
            // .appendField(Blockly.Msg.OLEDDISPLAY);  
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        this.appendValueInput('VAR')
            .appendField(Blockly.OLED)
            .setCheck("var");
        this.appendValueInput("Text_line1" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.OLEDDISPLAY+Blockly.Msg.line1);    
        this.appendValueInput("Text_line2" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line2);      
        this.appendValueInput("Text_line3" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line3);      
        this.appendValueInput("Text_line4" , 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.line4);      
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.display.HUE);
        this.setTooltip(Blockly.MIXLY_DF_LCD+Blockly.Msg.OLEDDISPLAY+Blockly.MIXLY_MICROBIT_TYPE_STRING);
    }
};

Blockly.Blocks['display_image_size'] = {
  init: function() {
    var OPERATORS =
        [[Blockly.MIXLY_HEIGHT, 'height'],
         [Blockly.MIXLY_WIDTH, 'width']
        ];
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_GET+Blockly.MIXLY_MICROBIT_IMAGE);
    this.appendValueInput('VAR')
        .setCheck("esp32_image")
        // .appendField(Blockly.blockpy_USE_LIST);   
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    this.setOutput(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP');
      var mode0 = Blockly.MIXLY_MICROBIT_PY_STORAGE_GET;
      var mode1 =Blockly.MIXLY_MICROBIT_IMAGE
      var TOOLTIPS = {
        'height': Blockly.MIXLY_HEIGHT,
        'width': Blockly.MIXLY_WIDTH,
      };
      return mode0+mode1+TOOLTIPS[mode];
    });
  }
};

Blockly.Blocks.display_rect = {
    init: function () {
      var brightness_or_not =
        [[Blockly.MIXLY_4DIGITDISPLAY_ON, '1'],
         [Blockly.MIXLY_4DIGITDISPLAY_OFF, '0']
        ];
        this.setColour(Blockly.Blocks.display.HUE);
        // this.appendDummyInput()
        //     .appendField(Blockly.OLED)         
        //     .appendField(new Blockly.FieldTextInput('lcd'), 'VAR') 
         this.appendValueInput('VAR')
            .appendField(Blockly.OLED)
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RECT)   
            .appendField(new Blockly.FieldDropdown(brightness_or_not), 'OP')  
            
         // this.appendValueInput("PIN", Number)
         //    .setCheck(Number)
         //    .setAlign(Blockly.ALIGN_RIGHT)
         //    .appendField(Blockly.MIXLY_PIN);
        this.jsonInit({
      "message0" : Blockly.MIXLY_MICROBIT_SHOW_RECT,
      "args0" : [{
          "check" : Number,
          "type" : "input_value",
          "name" : "x"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "y"
        },{
          "check" : Number,
          "type" : "input_value",
          "name" : "width"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "height"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox", 
          "name" : "fill"
          }
        ]
      });
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_OLED_RECT);
    }
};

Blockly.Blocks.display_line = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        // this.appendDummyInput()
        //     .appendField(Blockly.OLED)         
        //     .appendField(new Blockly.FieldTextInput('lcd'), 'VAR') 
          this.appendValueInput('VAR')
            .appendField(Blockly.OLED)
            .setCheck("var");
         // this.appendValueInput("PIN", Number)
         //    .setCheck(Number)
         //    .setAlign(Blockly.ALIGN_RIGHT)
         //    .appendField(Blockly.MIXLY_PIN);
         this.appendDummyInput()
         .appendField(Blockly.MIXLY_DISPLAY_DRAW)
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_DISPLAY_RLINE, "hline"], [Blockly.MIXLY_DISPLAY_VLINE, "vline"]]), "direction");
        this.jsonInit({
      "message0" : Blockly.MIXLY_MICROBIT_SHOW_LINE,
      "args0" : [{
          "check" : Number,
          "type" : "input_value",
          "name" : "x"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "y"
        },{
          "check" : Number,
          "type" : "input_value",
          "name" : "length"
        }
        ]
      });
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_OLED_LINE);
    }
};

Blockly.Blocks.display_line_arbitrarily= {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        // this.appendDummyInput()
        //     .appendField(Blockly.OLED)         
        //     .appendField(new Blockly.FieldTextInput('lcd'), 'VAR') 
        this.appendValueInput('VAR')
            .appendField(Blockly.OLED)
            .setCheck("var");
         // this.appendValueInput("PIN", Number)
         //    .setCheck(Number)
         //    .setAlign(Blockly.ALIGN_RIGHT)
         //    .appendField(Blockly.MIXLY_PIN);
        this.jsonInit({
      "message0" : Blockly.MIXLY_MICROBIT_SHOW_LINE_ARBITRARILY,
      "args0" : [{
          "check" : Number,
          "type" : "input_value",
          "name" : "x1"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "y1"
        },{
          "check" : Number,
          "type" : "input_value",
          "name" : "x2"
        },{
          "check" : Number,
          "type" : "input_value",
          "name" : "y2"
        },
        ]
      });
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_OLED_LINE_ARBIT);
    }
}

Blockly.Blocks.display_get_screen_pixel = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('SUB')
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_JS_MONITOR_GET_SCREEN_BRIGHTNESS);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_ESP32_JS_MONITOR_GET_SCREEN_BRIGHTNESS);
  }
};

Blockly.Blocks.display_get_screen_image = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_MONITOR_GET_SCREEN_IMAGE);
    this.setInputsInline(true);
    this.setOutput(true, "esp32_image");
    this.setTooltip(Blockly.MIXLY_ESP32_MONITOR_GET_SCREEN_IMAGE_TOOLTIP);
  }
};

Blockly.Blocks.display_bright_screen = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('SUB')
  this.appendValueInput('x')
      .setCheck(Number)
      .appendField(Blockly.MIXLY_ESP32_JS_MONITOR_SET_SCREEN_BRIGHTNESS)
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setInputsInline(true);
  this.setTooltip(Blockly.MIXLY_ESP32_JS_MONITOR_SET_SCREEN_BRIGHTNESS + ' 0.0-1.0');
  }
};

Blockly.Blocks.display_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('SUB')
  this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_Clear_display);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setInputsInline(true);
  this.setTooltip(Blockly.MIXLY_MICROBIT_Clear_display);
  }
};

Blockly.Blocks.display_blink_rate = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
  this.appendValueInput('x')
      .setCheck(Number)
      .appendField(Blockly.MIXLY_ESP32_JS_MONITOR_SET_BLINK_RATE)
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setInputsInline(true);
  this.setTooltip(Blockly.MIXLY_ESP32_JS_MONITOR_SET_BLINK_RATE);
  }
};

Blockly.Blocks.display_rgb_color = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_RGB)
         // this.appendValueInput("PIN", Number)
         //    .setCheck(Number)
         //    .setAlign(Blockly.ALIGN_RIGHT)
         //    .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("_LED_")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_RGB_NUM);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.LISTS_SET_INDEX_SET+Blockly.MIXLY_MICROBIT_PY_STORAGE_AS)
            .appendField(new Blockly.FieldColour('#ff0000'), 'FIELDNAME');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_RGB_NUM_R_G_B);
    }
};

Blockly.Blocks.display_show_image = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('SUB')
  this.appendValueInput('data')
        .setCheck([String, "esp32_image","List",'Tuple'])
        .appendField(Blockly.OLED_BITMAP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.OLED_BITMAP_OR_STRING);
  }
};

Blockly.Blocks.display_show_static_string = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('SUB')
  this.appendValueInput('data')
        .setCheck(String)
        .appendField(Blockly.MIXLY_ESP32_MONITOR_SHOW_STATIC);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.OLED_BITMAP_OR_STRING);
  }
};


Blockly.Blocks.display_scroll_string = {
   init: function() {
     this.setColour(Blockly.Blocks.display.HUE);
     this.appendValueInput('SUB');
     this.appendValueInput('data')
         .setCheck(String)
         .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_STRING);
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setInputsInline(true);
   }
 };

 Blockly.Blocks.display_show_image_or_string_delay = {
  init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('data')
        .setCheck([String, "esp32_image","List",'Tuple'])
        .appendField(Blockly.MIXLY_ESP32_SHOW_IMAGE_OR_STRING_OR_ANIMATION);
    this.appendValueInput("time")
        .setCheck(Number)
        .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_INTERVAL);    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_SHOW_IMAGE_OR_STRING_DELAY);
  }
};

Blockly.Blocks.display_scroll_string_delay = {
   init: function() {
     this.setColour(Blockly.Blocks.display.HUE);
     this.appendValueInput('SUB') 
     this.appendValueInput('data')
         .setCheck(String)
         .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_STRING);
     this.appendValueInput("time")
        .setCheck(Number)
        .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_SCROLL_INTERVAL);    
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setInputsInline(true);
     this.setTooltip(Blockly.MIXLY_ESP32_SCROLL_IMAGE_OR_STRING_DELAY);
   }
 };

 Blockly.Blocks['display_onoff'] = {
   init: function() {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ESP32_ON, "ON"], [Blockly.MIXLY_ESP32_OFF, "OFF"]]), 'ONOFF')
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
  }
};

Blockly.Blocks['switch'] = {
    init: function() {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_ESP32_ON, "1"],
                [Blockly.MIXLY_ESP32_OFF, "0"]
            ]), "flag");
        this.setOutput(true);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_INOUT_HIGHLOW);
    }
};

Blockly.Blocks['display_fill'] = {
    init: function(){
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput('SUB');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                [Blockly.MIXLY_LCD_STAT_CLEAR, "0"],
                [Blockly.MIXLY_HANDBIT_DISLPAY_OLED_FILL, "1"]
            ]), "key");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_MICROBIT_JS_ACCELERATION);
        var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('key');
        var TOOLTIPS = {
        '0': Blockly.MIXLY_LCD_STAT_CLEAR,
        '1': Blockly.MIXLY_HANDBIT_DISLPAY_OLED_FILL
       };
      return Blockly.MIXLY_DF_LCD+TOOLTIPS[mode];
    });
    }
};

Blockly.Blocks.display_tm_use_i2c_init = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput('I2CSUB')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH+"I2C")
            .setCheck("var");
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_MAKE)
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_SETUP + Blockly.Msg.LISTS_SET_INDEX_INPUT_TO)
            .appendField(new Blockly.FieldDropdown([
                // ["MPU9250", "MPU9250"],
                // ["TM1637", "TM1637"],
                ["TM1650", "TM1650"]
                ]), "key");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('key');
        var mode0 = Blockly.MIXLY_ESP32_SENSOR_USE_I2C_TOOLTIP;
        var mode1 = Blockly.MIXLY_ESP32_NEAR;
        var TOOLTIPS = {
        // "MPU9250": "MPU9250",
        // "TM1637": "TM1637",
        "TM1650": "TM1650"
      };
      return mode0 +TOOLTIPS[mode]
    });
    }
};

Blockly.Blocks.display_tm1650_power = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY)
            .appendField(new Blockly.FieldDropdown([["TM1650", "tm1650"]]), "TYPE");
        this.appendValueInput("VAR")
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "_on"], [Blockly.MIXLY_OFF, "_off"], [Blockly.MIXLY_LCD_STAT_CLEAR, "_clear"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_4digitdisplay_power);
    }
};

Blockly.Blocks.display_tm1650_show_num = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY)
            .appendField(new Blockly.FieldDropdown([["TM1650", "tm1650"]]), "TYPE");
        this.appendValueInput("VAR")
        this.appendValueInput("VALUE")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_SHOW_NUMBER);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setTooltip(Blockly.MIXLY_TOOLTIP_4digitdisplay_displayString);
    }
};

Blockly.Blocks.display_tm1650_show_dot = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY)
            .appendField(new Blockly.FieldDropdown([["TM1650", "tm1650"]]), "TYPE");
        this.appendValueInput("VAR")
        this.appendValueInput("NO")
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_NOMBER1)
        this.appendValueInput("STAT")
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_NOMBER2 + Blockly.MIXLY_4DIGITDISPLAY_DOT)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_4digitdisplay_showDot);
    }
};

Blockly.Blocks['display_animate'] = {
  init: function() {
    var ANIMATE =
        [["ALL_CLOCKS", 'ALL_CLOCKS'],
         ["ALL_ARROWS", 'ALL_ARROWS']];
    this.setColour(Blockly.Blocks.display.HUE);
    this.setOutput(true, 'Tuple');
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_DISPLAY_ANIMATE)
        .appendField(new Blockly.FieldDropdown(ANIMATE), 'ANIMATION')        
    //this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
  }
};

Blockly.Blocks.display_circle = {
    init: function () {
      var brightness_or_not =
        [[Blockly.MIXLY_4DIGITDISPLAY_ON, '1'],
         [Blockly.MIXLY_4DIGITDISPLAY_OFF, '0']
        ];
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput('VAR')
            .appendField(Blockly.OLED)
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_MIXPY_TURTLE_DRAW_CIRCLE)   
            .appendField(new Blockly.FieldDropdown(brightness_or_not), 'OP')  
        this.jsonInit({
      "message0" : Blockly.MIXLY_HANBIT_SHOW_CIRCLE,
      "args0" : [{
          "check" : Number,
          "type" : "input_value",
          "name" : "x"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "y"
        },{
          "check" : Number,
          "type" : "input_value",
          "name" : "r"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox", 
          "name" : "fill"
          }
        ]
      });
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_MIXPY_TURTLE_DRAW_CIRCLE);
    }
};

Blockly.Blocks.display_triangle = {
    init: function () {
      var brightness_or_not =
        [[Blockly.MIXLY_4DIGITDISPLAY_ON, '1'],
         [Blockly.MIXLY_4DIGITDISPLAY_OFF, '0']
        ];
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput('VAR')
            .appendField(Blockly.OLED)
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_DISPLAY_DRAW+Blockly.MIXLY_HANBIT_DRAW_TRIANGLE)   
            .appendField(new Blockly.FieldDropdown(brightness_or_not), 'OP')  
        this.jsonInit({
      "message0" : Blockly.MIXLY_HANBIT_SHOW_triangle,
      "args0" : [{
          "check" : Number,
          "type" : "input_value",
          "name" : "x0"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "y0"
        },{
          "check" : Number,
          "type" : "input_value",
          "name" : "x1"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "y1"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "x2"
        }, {
          "check" : Number,
          "type" : "input_value",
          "name" : "y2"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox", 
          "name" : "fill"
          }
        ]
      });
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setTooltip(Blockly.MIXLY_DISPLAY_DRAW+Blockly.MIXLY_HANBIT_DRAW_TRIANGLE);
    }
};

Blockly.Blocks.display_help = {
  init: function () {
    this.setColour('#555555');
    this.appendDummyInput("")
      .appendField(Blockly.MIXGO_ONBOARDDISPLAY_HELP);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

//显示-OLED-显示图像
Blockly.Blocks.display_oled_showBitmap = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('VAR')
        .appendField(Blockly.OLED)
        .setCheck("var");
    this.appendDummyInput("")
      .appendField(Blockly.OLED_BITMAP);
    this.appendValueInput("START_X", Number)
      .appendField(Blockly.OLED_START_X)
      .setCheck(Number);
    this.appendValueInput("START_Y", Number)
      .appendField(Blockly.OLED_START_Y)
      .setCheck(Number);
    this.appendValueInput("bitmap_name", String)
      .appendField(Blockly.OLED_BITMAP_NAME);
    this.appendValueInput("WIDTH", Number)
      .appendField(Blockly.MIXLY_WIDTH)
      .setCheck(Number);
    this.appendValueInput("HEIGHT", Number)
      .appendField(Blockly.MIXLY_HEIGHT)
      .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_SHOW_BMP_TOOLTIP);
  }
};

//显示-OLED-画点
Blockly.Blocks.display_oled_drawPixel = {
  init: function () {
    this.setColour(Blockly.Blocks.display.HUE);
    this.appendValueInput('VAR')
        .appendField(Blockly.OLED)
    this.appendDummyInput("")
      .appendField(Blockly.OLED_DRAWPIXEL);
    this.appendValueInput("POS_X")
      .appendField(Blockly.OLED_POSX)
    this.appendValueInput("POS_Y")
      .appendField(Blockly.OLED_POSY)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.OLED_DRAW_PIXE_TOOLTIP);
  }
};

Blockly.Blocks.display_tm_use_i2c_init = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendValueInput('I2CSUB')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH+"I2C")
            .setCheck("var");
        this.appendValueInput('SUB')
            .appendField(Blockly.MIXLY_MICROPYTHON_SOCKET_MAKE)
            .setCheck("var");
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_SETUP + Blockly.Msg.LISTS_SET_INDEX_INPUT_TO)
            .appendField(new Blockly.FieldDropdown([
                // ["MPU9250", "MPU9250"],
                // ["TM1637", "TM1637"],
                ["TM1650", "TM1650"]
                ]), "key");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('key');
        var mode0 = Blockly.MIXLY_ESP32_SENSOR_USE_I2C_TOOLTIP;
        var mode1 = Blockly.MIXLY_ESP32_NEAR;
        var TOOLTIPS = {
        // "MPU9250": "MPU9250",
        // "TM1637": "TM1637",
        "TM1650": "TM1650"
      };
      return mode0 +TOOLTIPS[mode]
    });
    }
};

Blockly.Blocks.display_tm1650_power = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY)
            .appendField(new Blockly.FieldDropdown([["TM1650", "tm1650"]]), "TYPE");
        this.appendValueInput("VAR")
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "on"], [Blockly.MIXLY_OFF, "off"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"]]), "STAT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_4digitdisplay_power);
    }
};

Blockly.Blocks.display_tm1650_show_num = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY)
            .appendField(new Blockly.FieldDropdown([["TM1650", "tm1650"]]), "TYPE");
        this.appendValueInput("VAR")
        this.appendValueInput("VALUE")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_SHOW_NUMBER);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        // this.setTooltip(Blockly.MIXLY_TOOLTIP_4digitdisplay_displayString);
    }
};

Blockly.Blocks.display_tm1650_show_dot = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY)
            .appendField(new Blockly.FieldDropdown([["TM1650", "tm1650"]]), "TYPE");
        this.appendValueInput("VAR")
        this.appendValueInput("NO")
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_NOMBER1)
        this.appendValueInput("STAT")
            .appendField(Blockly.MIXLY_4DIGITDISPLAY_NOMBER2 + Blockly.MIXLY_4DIGITDISPLAY_DOT)
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_TOOLTIP_4digitdisplay_showDot);
    }
};

Blockly.Blocks.display_tm1650_set_brightness = {
    init: function () {
        this.setColour(Blockly.Blocks.display.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_4DIGITDISPLAY)
            .appendField(new Blockly.FieldDropdown([["TM1650", "tm1650"]]), "TYPE");
        this.appendValueInput("VAR")
        this.appendValueInput("VALUE")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_MICROBIT_JS_MONITOR_SET_BRIGHTNESS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_4DIGITDISPLAY_BRIGHTNESS_TOOLTIP);
    }
};