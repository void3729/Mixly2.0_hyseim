//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');


//彩灯初始化
Blockly.Blocks['mpython_neopixel_init'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_neopixel_init_HELPURL,
            "tooltip": Blockly.Msg.mpython_neopixel_init_TOOLTIP,
            "message0": Blockly.Msg.mpython_neopixel_init_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "neopixel_name",
                    "text": "my_rgb"
                }
                ,
                {
                    // "options": pwm_pin,
                    // "type": "field_dropdown",
                    //"check": "Number",
                    "type": "input_value",
                    "name": "analogP_IO"
                }, {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "n"
                }
            ]
        });
    }
};

//彩灯 单个颜色
Blockly.Blocks['mpython_neopixel_single'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_neopixel_init_HELPURL,
            "tooltip": Blockly.Msg.mpython_neopixel_single_TOOLTIP,
            "message0": Blockly.Msg.mpython_neopixel_single_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "neopixel_name",
                "text": "my_rgb"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "order"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "r"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "g"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "b"
            }
            ]
        });
    }
};


//彩灯 单个颜色
Blockly.Blocks['mpython_neopixel_single_gui'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_neopixel_init_HELPURL,
            "tooltip": Blockly.Msg.mpython_neopixel_single_gui_TOOLTIP,
            "message0": Blockly.Msg.mpython_neopixel_single_gui_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "neopixel_name",
                "text": "my_rgb"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "order"
            }, {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#ff0000"
            }
            ]
        });
    }
};


//彩灯 显示
Blockly.Blocks['mpython_neopixel_show'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_neopixel_init_HELPURL,
            "tooltip": Blockly.Msg.mpython_neopixel_show_TOOLTIP,
            "message0": Blockly.Msg.mpython_neopixel_show_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "neopixel_name",
                "text": "my_rgb"
            }
            ]
        });
    }
};

//彩灯 关闭
Blockly.Blocks['mpython_neopixel_off'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_neopixel_init_HELPURL,
            "tooltip": Blockly.Msg.mpython_neopixel_off_TOOLTIP,
            "message0": Blockly.Msg.mpython_neopixel_off_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "neopixel_name",
                "text": "my_rgb"
            }
            ]
        });
    }
};

//彩灯 统一颜色
Blockly.Blocks['mpython_neopixel_all'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_neopixel_init_HELPURL,
            "tooltip": Blockly.Msg.mpython_neopixel_all_TOOLTIP,
            "message0": Blockly.Msg.mpython_neopixel_all_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "neopixel_name",
                "text": "my_rgb"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "r"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "g"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "b"
            }
            ]
        });
    }
};
//彩灯 统一颜色
Blockly.Blocks['mpython_neopixel_all_gui'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_neopixel_init_HELPURL,
            "tooltip": Blockly.Msg.mpython_neopixel_all_gui_TOOLTIP,
            "message0": Blockly.Msg.mpython_neopixel_all_gui_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "neopixel_name",
                "text": "my_rgb"
            }, {
                "type": "field_colour",
                "name": "COLOUR",
                "colour": "#ff0000"
            }
            ]
        });
    }
};

//彩灯  彩虹灯效
Blockly.Blocks['mpython_neopixel_rainbow'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_NEOPIXEL_RAINBOW_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "neopixel_name",
                "text": "my_rgb"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "n"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "bright"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "offset"
            }
            ]
        });
    }
};

// 亮度调节
Blockly.Blocks['mpython_neopixel_brightness'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_NEOPIXEL_BRIGHTNESS_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "neopixel_name",
                "text": "my_rgb"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "bright"
            }
            ]
        });
    }
};