//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');
Blockly.Msg.actuator_HUE = 180;

Blockly.Blocks['mpython_display_FrameBuffer'] = { //将图像数组生成帧缓存
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Msg.actuator_HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_display_FrameBuffer_TOOLTIP,
            "message0": Blockly.Msg.mpython_display_FrameBuffer_MESSAGE0,
            "args0": [
                {
                    //"check": ["Array"],
                    "type": "input_value",
                    "name": "bmp"
                },
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "w"
                }, {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "h"
                }, {
                    "name": "scan_mode",
                    "options": [[Blockly.Msg.mpython_horizontal, 'HLSB'], [Blockly.Msg.mpython_vertical, 'VLSB']],
                    "type": "field_dropdown"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython_display_blit'] = {  //将fb1帧缓存送至oled显示，起始位(0,0)
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Msg.actuator_HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_display_blit_TOOLTIP,
            "message0": Blockly.Msg.mpython_display_blit_MESSAGE0,
            "args0": [{
                //"check": "Number",
                "type": "input_value",
                "name": "x"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "y"
            }
            ]
        });
    }
};
Blockly.Blocks['mpython_front_reverse'] = {  //像素点bit反转与否
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Msg.actuator_HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_front_reverse_TOOLTIP,
            "message0": Blockly.Msg.mpython_front_reverse_MESSAGE0,
            "args0": [
                {
                    "name": "front_reverse", //正反显示
                    "options": [[Blockly.Msg.mpython_front, '0'], [Blockly.Msg.mpython_reverse, '1']],
                    "type": "field_dropdown"
                }
            ]
        });
    }
};
Blockly.Blocks['mpython_images_append'] = {  //将fb1帧缓存送至oled显示，起始位(0,0)
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Msg.actuator_HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_images_append_TOOLTIP,
            "message0": Blockly.Msg.mpython_images_append_MESSAGE0,
            "args0": [{
                //"check": "Number",
                "type": "input_value",
                "name": "num"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "period"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "Length"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "Width"
            }
            ]
        });
    }
};


Blockly.Blocks['mpython_display_Show'] = {  //刷新oled
	init: function () {
		this.jsonInit({
			//"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_Show_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_Show_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_display_DispChar'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.mpython_display_DispChar_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_DispChar_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_DispChar_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "x"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "y"
			}, {
				//"check": "String",
				"type": "input_value",
				"name": "message"
			}
				,
			{
				"options": [
					[Blockly.Msg.MPYTHON_DISPCHAR_MODE_1, '1'],
					[Blockly.Msg.MPYTHON_DISPCHAR_MODE_2, '2'],
					[Blockly.Msg.MPYTHON_DISPCHAR_MODE_3, '3'],
					['XOR', '4']
				],
				"type": "field_dropdown",
				"name": "TEXTMODE"
			}, {
				"options": [
					[Blockly.Msg.MPYTHON_FONT_NO_WRAP, 'False'],
					[Blockly.Msg.MPYTHON_FONT_WRAP, 'True']
				],
				"type": "field_dropdown",
				"name": "AUTORETURN"
			}
			]
		});
	}
};

//4行显示字符串
Blockly.Blocks['mpython_display_DispChar_5lines'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_DispChar_5lines_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_DispChar_5lines_MESSAGE0,
			"args0": [{
				// "name": "DispChar_5lines",
				// "options": [[Blockly.Msg.mpython_line1, '0'], [Blockly.Msg.mpython_line2, '13'], [Blockly.Msg.mpython_line3, '26'], [Blockly.Msg.mpython_line4, '39'], [Blockly.Msg.mpython_line5, '52']],
				// "options": [[Blockly.Msg.mpython_line1, '0'], [Blockly.Msg.mpython_line2, '16'], [Blockly.Msg.mpython_line3, '32'], [Blockly.Msg.mpython_line4, '48']],
				// "type": "field_dropdown"
				"type": "input_value",
				"name": "DispChar_5lines"
			}, {
				//"check": "String",
				"type": "input_value",
				"name": "message"
			}, {
				"options": [
					[Blockly.Msg.MPYTHON_DISPCHAR_MODE_1, '1'],
					[Blockly.Msg.MPYTHON_DISPCHAR_MODE_2, '2'],
					[Blockly.Msg.MPYTHON_DISPCHAR_MODE_3, '3'],
					['XOR', '4']
				],
				"type": "field_dropdown",
				"name": "TEXTMODE"
			}, {
				"options": [
					[Blockly.Msg.MPYTHON_FONT_NO_WRAP, 'False'],
					[Blockly.Msg.MPYTHON_FONT_WRAP, 'True']
				],
				"type": "field_dropdown",
				"name": "AUTORETURN"
			}
			]
		});
	}
};

//清除单行显示
Blockly.Blocks['mpython_clear_dispchar_5lines'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_CLEAR_DISPCHAR_5LINES_MESSAGE0,
			"args0": [{
				// "name": "DispChar_5lines",
				// "options": [[Blockly.Msg.mpython_line1, '0'], [Blockly.Msg.mpython_line2, '16'], [Blockly.Msg.mpython_line3, '32'], [Blockly.Msg.mpython_line4, '48']],
				// "type": "field_dropdown"
				"name": "DispChar_5lines",
				"type": "input_value"
			}
			]
		});
	}
};

// 4行
Blockly.Blocks['mpython_4_lines'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_4_LINES_MESSAGE0,
			"args0": [
				{
					"name": "mpython_4_lines",
					"options":
						[
							['1', '1'],
							['2', '2'],
							['3', '3'],
							['4', '4']
						],
					"type": "field_dropdown"
				}
			],
			"inputsInline": true,
			'output': "Number",
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.MPYTHON_4_LINES_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_4_LINES_TOOLTIP
		});
	}
};


Blockly.Blocks['mpython_display_fill'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [{
				"name": "display_fill",
				"options": [
					[Blockly.Msg.mpython_display_fill_0, 'fill(0)'],
					[Blockly.Msg.mpython_display_fill_1, 'fill(1)'],
					[Blockly.Msg.mpython_display_invert_0, 'invert(0)'],
					[Blockly.Msg.mpython_display_invert_1, 'invert(1)'],
					// [Blockly.Msg.mpython_display_show, 'show()']
				],
				"type": "field_dropdown"
			}
			],
			"nextStatement": null,
			"previousStatement": null,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_fill_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_fill_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_oled_pixel_option'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"output": "Number",
			"helpUrl": '',
			"tooltip": '',
			"message0": '%1',
			"args0": [{
				"options": [
					[Blockly.Msg.mpython_display_pixel_1, '1'],
					[Blockly.Msg.mpython_display_pixel_0, '0']],
				"type": "field_dropdown",
				"name": "VALUE"
			}
			]
		});
	}
};

Blockly.Blocks['mpython_display_pixel'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_pixel_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_pixel_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "x"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "y"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "display_pixel"
			}
				/*, {
					"name": "display_pixel",
					"options": [[Blockly.Msg.mpython_display_pixel_1, '1'], [Blockly.Msg.mpython_display_pixel_0, '0']],
					"type": "field_dropdown"
				}*/
			]
		});
	}
};
Blockly.Blocks['mpython_ProgressBar'] = { //进度条
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "width",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "height",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "progress",
					"type": "input_value",
					//"check": "Number"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_ProgressBar_TOOLTIP,
			"message0": Blockly.Msg.mpython_ProgressBar_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};
Blockly.Blocks['mpython_stripBar'] = { //柱状条
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "dir_h_v",
					"options": [
						[Blockly.Msg.mpython_vertical, '0'],
						[Blockly.Msg.mpython_horizontal, '1']
					],
					"type": "field_dropdown"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "width",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "height",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "progress",
					"type": "input_value",
					//"check": "Number"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_stripBar_TOOLTIP,
			"message0": Blockly.Msg.mpython_stripBar_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_hvline'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [
					[Blockly.Msg.MPYTHON_DISPLAY_MODE_1, '1'],
					[Blockly.Msg.MPYTHON_DISPLAY_MODE_0, '0']
					],
					"type": "field_dropdown"
				},
				{
					"name": "dir_h_v",
					"options": [
						[Blockly.Msg.mpython_vertical, '0'],
						[Blockly.Msg.mpython_horizontal, '1']
					],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				},
				{
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "length",
					"type": "input_value",
					//"check": "Number"
				}

			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DISPLAY_HVLINE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DISPLAY_HVLINE_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};
				
Blockly.Blocks['mpython_display_hline'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "length",
					"type": "input_value",
					//"check": "Number"
				}

			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_hline_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_hline_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};
Blockly.Blocks['mpython_display_vline'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "length",
					"type": "input_value",
					//"check": "Number"
				}

			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_vline_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_vline_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};
Blockly.Blocks['mpython_display_line'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x1",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y1",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "x2",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y2",
					"type": "input_value",
					//"check": "Number"
				}

			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_line_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_line_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_shape_rect'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [
					[Blockly.Msg.MPYTHON_DISPLAY_MODE_1, '1'],
					[Blockly.Msg.MPYTHON_DISPLAY_MODE_0, '0']
					],
					"type": "field_dropdown"
				},
				{
					"name": "shape",
					"options": [
						[Blockly.Msg.MPYTHON_DISPLAY_HOLLOW, 'rect'],
						[Blockly.Msg.MPYTHON_DISPLAY_SOLID, 'fill_rect']
					],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				},
				{
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "w",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "h",
					"type": "input_value",
					//"check": "Number"
				}

			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DISPLAY_SHAPE_RECT_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DISPLAY_SHAPE_RECT_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_rect'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "w",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "h",
					"type": "input_value",
					//"check": "Number"
				}

			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_rect_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_rect_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};
// 绘制弧角矩形
Blockly.Blocks['mpython_display_RoundRect'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "w",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "h",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "r",
					"type": "input_value",
					//"check": "Number"
				}

			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_RoundRect_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_RoundRect_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};
Blockly.Blocks['mpython_display_fill_rect'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "w",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "h",
					"type": "input_value",
					//"check": "Number"
				}

			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_fill_rect_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_fill_rect_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_shape_circle'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [
					[Blockly.Msg.MPYTHON_DISPLAY_MODE_1, '1'],
					[Blockly.Msg.MPYTHON_DISPLAY_MODE_0, '0']
					],
					"type": "field_dropdown"
				},
				{
					"name": "shape",
					"options": [
						[Blockly.Msg.MPYTHON_DISPLAY_HOLLOW, 'circle'],
						[Blockly.Msg.MPYTHON_DISPLAY_SOLID, 'fill_circle']
					],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "radius",
					"type": "input_value",
					//"check": "Number"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DISPLAY_SHAPE_CIRCLE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DISPLAY_SHAPE_CIRCLE_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_fill_circle'] = { //实心圆
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "radius",
					"type": "input_value",
					//"check": "Number"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_fill_circle_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_fill_circle_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_circle'] = { //空心圆
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "radius",
					"type": "input_value",
					//"check": "Number"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_circle_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_circle_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_shape_triangle'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [
					[Blockly.Msg.MPYTHON_DISPLAY_MODE_1, '1'],
					[Blockly.Msg.MPYTHON_DISPLAY_MODE_0, '0']
					],
					"type": "field_dropdown"
				},
				{
					"name": "shape",
					"options": [
						[Blockly.Msg.MPYTHON_DISPLAY_HOLLOW, 'triangle'],
						[Blockly.Msg.MPYTHON_DISPLAY_SOLID, 'fill_triangle']
					],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "x2",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "y2",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "x3",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y3",
					"type": "input_value",
					//"check": "Number"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DISPLAY_SHAPE_TRIANGLE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DISPLAY_SHAPE_TRIANGLE_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_triangle'] = { //空心三角
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "x2",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "y2",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "x3",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y3",
					"type": "input_value",
					//"check": "Number"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_triangle_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_triangle_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_display_fill_triangle'] = { //实心三角
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
					"type": "field_dropdown"
				},
				{
					"type": "input_dummy"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "x2",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "y2",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "x3",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y3",
					"type": "input_value",
					//"check": "Number"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_fill_triangle_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_fill_triangle_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

// 绘制 bitmap 图案
Blockly.Blocks['mpython_display_Bitmap'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "state",
					"options": [
                        [Blockly.Msg.mpython_display_hline_1, '1']
                        //, [Blockly.Msg.mpython_display_hline_0, '0']
                    ],
					"type": "field_dropdown"
				}, {
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "w",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "h",
					"type": "input_value",
					//"check": "Number"
				},
				{
					//"check": ["String", "Array"],
					"type": "input_value",
					"name": "Bitmap"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_display_Bitmap_TOOLTIP,
			"message0": Blockly.Msg.mpython_display_Bitmap_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

// 取得 pbm 数据
Blockly.Blocks['mpython_get_pbm_data'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					//"check": "String",
					"type": "input_value",
					"name": "file_path"
        },
        {
          "name": "select",
          //"check": "String",
          "type": "field_dropdown",
          "options": [
              [Blockly.Msg.MPYTHON_DISPCHAR_MODE_1, '0'],
              [Blockly.Msg.MPYTHON_DISPCHAR_MODE_2, '1']
          ]
      }
			],
			"output": "Array",
			"helpUrl": Blockly.Msg.MPYTHON_GET_PBM_DATA_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_GET_PBM_DATA_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_GET_PBM_DATA_MESSAGE0
		});
	}
};

// 取得 pbm 数据
Blockly.Blocks['mpython_get_pbm_data_custom'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					//"check": "String",
					"type": "input_value",
					"name": "file_path"
				},
                {
                  "name": "select",
                  //"check": "String",
                  "type": "field_dropdown",
                  "options": [
					[Blockly.Msg.MPYTHON_DISPCHAR_MODE_1, '0'],
					[Blockly.Msg.MPYTHON_DISPCHAR_MODE_2, '1']
                  ]
              }
			],
			"output": "Array",
			"helpUrl": Blockly.Msg.MPYTHON_GET_PBM_DATA_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_GET_PBM_DATA_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_GET_PBM_DATA_CUSTOM_MESSAGE0
		});
	}
};

// 绘制 pbm 图案
Blockly.Blocks['mpython_display_pbm_data'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					//"check": "Array",
					"type": "input_value",
					"name": "pbm_data"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DISPLAY_PBM_DATA_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

// 绘制 bitmap 图案 -- 来自文件
Blockly.Blocks['mpython_bitmap_from_file'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				// {"name": "state",
				// "options": [[Blockly.Msg.mpython_display_hline_1, '1'], [Blockly.Msg.mpython_display_hline_0, '0']],
				// "type": "field_dropdown"
				// },
				{
					"name": "x",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "y",
					"type": "input_value",
					//"check": "Number"
				},
				{
					"name": "w",
					"type": "input_value",
					//"check": "Number"
				}, {
					"name": "h",
					"type": "input_value",
					//"check": "Number"
				},
				{
					//"check": "Array",
					"type": "input_value",
					"name": "pbm_data"
				}
			],
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_BITMAP_FROM_FILE_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

/*
// 显示数码管字体
Blockly.Blocks['mpython_display_digiface'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DISPLAY_DIGIFACE_FONT_MESSAGE0,
			"args0": [{
					//"check": "Number",
					"type": "input_value",
					"name": "x"
				}, {
					//"check": "Number",
					"type": "input_value",
					"name": "y"
				}, {
					//"check": "String",
					"type": "input_value",
					"name": "message"
				}, {
					"name": "size",
					"options": [
					['11', '11'],
					['17', '17'],
					['24', '24'],
					['35', '35'],
					['48', '48']
					],
					"type": "field_dropdown"
				}
			]
		});
	}
};
*/

// 内置图片下拉框
Blockly.Blocks['mpython_pbm_image'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				/*{
					"type": "field_image",
					"name": "file_image",
					"src": "static/face/1.png",
					"width": 128,
					"height": 64,
					"alt": "*"
				},*/
				{
					"name": "path",
					"options": [
						[Blockly.Msg.MPYTHON_FACE_1, 'face/1.pbm'],
						[Blockly.Msg.MPYTHON_FACE_2, 'face/2.pbm'],
						[Blockly.Msg.MPYTHON_FACE_3, 'face/3.pbm'],
						[Blockly.Msg.MPYTHON_FACE_4, 'face/4.pbm'],
						[Blockly.Msg.MPYTHON_FACE_5, 'face/5.pbm'],
						[Blockly.Msg.MPYTHON_FACE_6, 'face/6.pbm'],
						[Blockly.Msg.MPYTHON_FACE_7, 'face/7.pbm'],
						[Blockly.Msg.MPYTHON_FACE_8, 'face/8.pbm'],
						[Blockly.Msg.MPYTHON_FACE_9, 'face/9.pbm'],
						[Blockly.Msg.MPYTHON_FACE_10, 'face/10.pbm'],
						[Blockly.Msg.MPYTHON_FACE_11, 'face/11.pbm'],
						[Blockly.Msg.MPYTHON_FACE_12, 'face/12.pbm'],
						[Blockly.Msg.MPYTHON_FACE_ROCK, 'face/rock.pbm'],
						[Blockly.Msg.MPYTHON_FACE_ROCK_S, 'face/rock_s.pbm'],
						[Blockly.Msg.MPYTHON_FACE_PAPER, 'face/paper.pbm'],
						[Blockly.Msg.MPYTHON_FACE_PAPER_S, 'face/paper_s.pbm'],
						[Blockly.Msg.MPYTHON_FACE_SCISSORS, 'face/scissors.pbm'],
						[Blockly.Msg.MPYTHON_FACE_SCISSORS_S, 'face/scissors_s.pbm'],
						['Expressions/Big smile.pbm', 'face/Expressions/Big smile.pbm'],
						['Expressions/Heart large.pbm', 'face/Expressions/Heart large.pbm'],
						['Expressions/Heart small.pbm', 'face/Expressions/Heart small.pbm'],
						['Expressions/Mouth 1 open.pbm', 'face/Expressions/Mouth 1 open.pbm'],
						['Expressions/Mouth 1 shut.pbm', 'face/Expressions/Mouth 1 shut.pbm'],
						['Expressions/Mouth 2 open.pbm', 'face/Expressions/Mouth 2 open.pbm'],
						['Expressions/Mouth 2 shut.pbm', 'face/Expressions/Mouth 2 shut.pbm'],
						['Expressions/Sad.pbm', 'face/Expressions/Sad.pbm'],
						['Expressions/Sick.pbm', 'face/Expressions/Sick.pbm'],
						['Expressions/Smile.pbm', 'face/Expressions/Smile.pbm'],
						['Expressions/Swearing.pbm', 'face/Expressions/Swearing.pbm'],
						['Expressions/Talking.pbm', 'face/Expressions/Talking.pbm'],
						['Expressions/Wink.pbm', 'face/Expressions/Wink.pbm'],
						['Expressions/ZZZ.pbm', 'face/Expressions/ZZZ.pbm'],
						['Eyes/Angry.pbm', 'face/Eyes/Angry.pbm'],
						['Eyes/Awake.pbm', 'face/Eyes/Awake.pbm'],
						['Eyes/Black eye.pbm', 'face/Eyes/Black eye.pbm'],
						['Eyes/Bottom left.pbm', 'face/Eyes/Bottom left.pbm'],
						['Eyes/Bottom right.pbm', 'face/Eyes/Bottom right.pbm'],
						['Eyes/Crazy 1.pbm', 'face/Eyes/Crazy 1.pbm'],
						['Eyes/Crazy 2.pbm', 'face/Eyes/Crazy 2.pbm'],
						['Eyes/Disappointed.pbm', 'face/Eyes/Disappointed.pbm'],
						['Eyes/Dizzy.pbm', 'face/Eyes/Dizzy.pbm'],
						['Eyes/Down.pbm', 'face/Eyes/Down.pbm'],
						['Eyes/Evil.pbm', 'face/Eyes/Evil.pbm'],
						['Eyes/Hurt.pbm', 'face/Eyes/Hurt.pbm'],
						['Eyes/Knocked out.pbm', 'face/Eyes/Knocked out.pbm'],
						['Eyes/Love.pbm', 'face/Eyes/Love.pbm'],
						['Eyes/Middle left.pbm', 'face/Eyes/Middle left.pbm'],
						['Eyes/Middle right.pbm', 'face/Eyes/Middle right.pbm'],
						['Eyes/Neutral.pbm', 'face/Eyes/Neutral.pbm'],
						['Eyes/Nuclear.pbm', 'face/Eyes/Nuclear.pbm'],
						['Eyes/Pinch left.pbm', 'face/Eyes/Pinch left.pbm'],
						['Eyes/Pinch middle.pbm', 'face/Eyes/Pinch middle.pbm'],
						['Eyes/Pinch right.pbm', 'face/Eyes/Pinch right.pbm'],
						['Eyes/Tear.pbm', 'face/Eyes/Tear.pbm'],
						['Eyes/Tired left.pbm', 'face/Eyes/Tired left.pbm'],
						['Eyes/Tired middle.pbm', 'face/Eyes/Tired middle.pbm'],
						['Eyes/Tired right.pbm', 'face/Eyes/Tired right.pbm'],
						['Eyes/Toxic.pbm', 'face/Eyes/Toxic.pbm'],
						['Eyes/Up.pbm', 'face/Eyes/Up.pbm'],
						['Eyes/Winking.pbm', 'face/Eyes/Winking.pbm'],
						['Information/Accept.pbm', 'face/Information/Accept.pbm'],
						['Information/Backward.pbm', 'face/Information/Backward.pbm'],
						['Information/Decline.pbm', 'face/Information/Decline.pbm'],
						['Information/Forward.pbm', 'face/Information/Forward.pbm'],
						['Information/Left.pbm', 'face/Information/Left.pbm'],
						['Information/No go.pbm', 'face/Information/No go.pbm'],
						['Information/Question mark.pbm', 'face/Information/Question mark.pbm'],
						['Information/Right.pbm', 'face/Information/Right.pbm'],
						['Information/Stop 1.pbm', 'face/Information/Stop 1.pbm'],
						['Information/Stop 2.pbm', 'face/Information/Stop 2.pbm'],
						['Information/Thumbs down.pbm', 'face/Information/Thumbs down.pbm'],
						['Information/Thumbs up.pbm', 'face/Information/Thumbs up.pbm'],
						['Information/Warning.pbm', 'face/Information/Warning.pbm'],
						['Objects/Bomb.pbm', 'face/Objects/Bomb.pbm'],
						['Objects/Boom.pbm', 'face/Objects/Boom.pbm'],
						['Objects/Fire.pbm', 'face/Objects/Fire.pbm'],
						['Objects/Flowers.pbm', 'face/Objects/Flowers.pbm'],
						['Objects/Forest.pbm', 'face/Objects/Forest.pbm'],
						['Objects/Light off.pbm', 'face/Objects/Light off.pbm'],
						['Objects/Light on.pbm', 'face/Objects/Light on.pbm'],
						['Objects/Lightning.pbm', 'face/Objects/Lightning.pbm'],
						['Objects/Night.pbm', 'face/Objects/Night.pbm'],
						['Objects/Pirate.pbm', 'face/Objects/Pirate.pbm'],
						['Objects/Snow.pbm', 'face/Objects/Snow.pbm'],
						['Objects/Target.pbm', 'face/Objects/Target.pbm'],
						['Progress/Bar 0.pbm', 'face/Progress/Bar 0.pbm'],
						['Progress/Bar 1.pbm', 'face/Progress/Bar 1.pbm'],
						['Progress/Bar 2.pbm', 'face/Progress/Bar 2.pbm'],
						['Progress/Bar 3.pbm', 'face/Progress/Bar 3.pbm'],
						['Progress/Bar 4.pbm', 'face/Progress/Bar 4.pbm'],
						['Progress/Dial 0.pbm', 'face/Progress/Dial 0.pbm'],
						['Progress/Dial 1.pbm', 'face/Progress/Dial 1.pbm'],
						['Progress/Dial 2.pbm', 'face/Progress/Dial 2.pbm'],
						['Progress/Dial 3.pbm', 'face/Progress/Dial 3.pbm'],
						['Progress/Dial 4.pbm', 'face/Progress/Dial 4.pbm'],
						['Progress/Dots 0.pbm', 'face/Progress/Dots 0.pbm'],
						['Progress/Dots 1.pbm', 'face/Progress/Dots 1.pbm'],
						['Progress/Dots 2.pbm', 'face/Progress/Dots 2.pbm'],
						['Progress/Dots 3.pbm', 'face/Progress/Dots 3.pbm'],
						['Progress/Hourglass 0.pbm', 'face/Progress/Hourglass 0.pbm'],
						['Progress/Hourglass 1.pbm', 'face/Progress/Hourglass 1.pbm'],
						['Progress/Hourglass 2.pbm', 'face/Progress/Hourglass 2.pbm'],
						['Progress/Timer 0.pbm', 'face/Progress/Timer 0.pbm'],
						['Progress/Timer 1.pbm', 'face/Progress/Timer 1.pbm'],
						['Progress/Timer 2.pbm', 'face/Progress/Timer 2.pbm'],
						['Progress/Timer 3.pbm', 'face/Progress/Timer 3.pbm'],
						['Progress/Timer 4.pbm', 'face/Progress/Timer 4.pbm'],
						['Progress/Water level 0.pbm', 'face/Progress/Water level 0.pbm'],
						['Progress/Water level 1.pbm', 'face/Progress/Water level 1.pbm'],
						['Progress/Water level 2.pbm', 'face/Progress/Water level 2.pbm'],
						['Progress/Water level 3.pbm', 'face/Progress/Water level 3.pbm'],
						['System/Accept_1.pbm', 'face/System/Accept_1.pbm'],
						['System/Accept_2.pbm', 'face/System/Accept_2.pbm'],
						['System/Alert.pbm', 'face/System/Alert.pbm'],
						['System/Box.pbm', 'face/System/Box.pbm'],
						['System/Busy_0.pbm', 'face/System/Busy_0.pbm'],
						['System/Busy_1.pbm', 'face/System/Busy_1.pbm'],
						['System/Decline_1.pbm', 'face/System/Decline_1.pbm'],
						['System/Decline_2.pbm', 'face/System/Decline_2.pbm'],
						['System/Dot_empty.pbm', 'face/System/Dot_empty.pbm'],
						['System/Dot_full.pbm', 'face/System/Dot_full.pbm'],
						['System/Play.pbm', 'face/System/Play.pbm'],
						['System/Slider_0.pbm', 'face/System/Slider_0.pbm'],
						['System/Slider_1.pbm', 'face/System/Slider_1.pbm'],
						['System/Slider_2.pbm', 'face/System/Slider_2.pbm'],
						['System/Slider_3.pbm', 'face/System/Slider_3.pbm'],
						['System/Slider_4.pbm', 'face/System/Slider_4.pbm'],
						['System/Slider_5.pbm', 'face/System/Slider_5.pbm'],
						['System/Slider_6.pbm', 'face/System/Slider_6.pbm'],
						['System/Slider_7.pbm', 'face/System/Slider_7.pbm'],
						['System/Slider_8.pbm', 'face/System/Slider_8.pbm']
					],
					"type": "field_dropdown"
				},
				{
					"type": "field_label",
					"name": "size_image",
					"text": "64 * 64"
				}
			],
			"output": "String",
			"helpUrl": '',
			"tooltip": '',
			"message0": '%1 %2'
		});
	}
};

// 字体下拉框
Blockly.Blocks['mpython_font'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Msg.actuator_HUE,
			"args0": [
				{
					"name": "font",
					"options": [
						[Blockly.Msg.MPYTHON_FONT_DIGIFACE_11, 'font.digiface_11'],
						[Blockly.Msg.MPYTHON_FONT_DIGIFACE_16, 'font.digiface_16'],
						[Blockly.Msg.MPYTHON_FONT_DIGIFACE_21, 'font.digiface_21'],
						[Blockly.Msg.MPYTHON_FONT_DIGIFACE_30, 'font.digiface_30'],
						[Blockly.Msg.MPYTHON_FONT_DIGIFACE_44, 'font.digiface_44'],
						[Blockly.Msg.MPYTHON_FONT_DIGIFACE_IT_30, 'font.digiface_it_30'],
						[Blockly.Msg.MPYTHON_FONT_DIGIFACE_IT_42, 'font.digiface_it_42'],
						[Blockly.Msg.MPYTHON_FONT_DVSM_12, 'font.dvsm_12'],
						[Blockly.Msg.MPYTHON_FONT_DVSM_16, 'font.dvsm_16'],
						[Blockly.Msg.MPYTHON_FONT_DVSM_21, 'font.dvsm_21'],
						[Blockly.Msg.MPYTHON_FONT_DVSMB_12, 'font.dvsmb_12'],
						[Blockly.Msg.MPYTHON_FONT_DVSMB_16, 'font.dvsmb_16'],
						[Blockly.Msg.MPYTHON_FONT_DVSMB_21, 'font.dvsmb_21']
					],
					"type": "field_dropdown"
				}
			],
			"output": "String",
			"helpUrl": '',
			"tooltip": '',
			"message0": '%1'
		});
	}
};

// 显示字体文字
Blockly.Blocks['mpython_display_font'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.MPYTHON_DISPLAY_FONT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DISPLAY_FONT_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DISPLAY_FONT_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "x"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "y"
			}, {
				//"check": "String",
				"type": "input_value",
				"name": "message"
			}, {
				"name": "font",
				"options": [
					[Blockly.Msg.MPYTHON_FONT_DIGIFACE_11, 'font.digiface_11'],
					[Blockly.Msg.MPYTHON_FONT_DIGIFACE_16, 'font.digiface_16'],
					[Blockly.Msg.MPYTHON_FONT_DIGIFACE_21, 'font.digiface_21'],
					[Blockly.Msg.MPYTHON_FONT_DIGIFACE_30, 'font.digiface_30'],
					[Blockly.Msg.MPYTHON_FONT_DIGIFACE_44, 'font.digiface_44'],
					[Blockly.Msg.MPYTHON_FONT_DIGIFACE_IT_30, 'font.digiface_it_30'],
					[Blockly.Msg.MPYTHON_FONT_DIGIFACE_IT_42, 'font.digiface_it_42'],
					[Blockly.Msg.MPYTHON_FONT_DVSM_12, 'font.dvsm_12'],
					[Blockly.Msg.MPYTHON_FONT_DVSM_16, 'font.dvsm_16'],
					[Blockly.Msg.MPYTHON_FONT_DVSM_21, 'font.dvsm_21'],
					[Blockly.Msg.MPYTHON_FONT_DVSMB_12, 'font.dvsmb_12'],
					[Blockly.Msg.MPYTHON_FONT_DVSMB_16, 'font.dvsmb_16'],
					[Blockly.Msg.MPYTHON_FONT_DVSMB_21, 'font.dvsmb_21']
				],
				"type": "field_dropdown"
			}, {
				"name": "wrap",
				"options": [
					[Blockly.Msg.MPYTHON_FONT_NO_WRAP, 'False'],
					[Blockly.Msg.MPYTHON_FONT_WRAP, 'True']
				],
				"type": "field_dropdown"
			}
			]
		});
	}
};

// 显示自定义字体文字
Blockly.Blocks['mpython_display_custom_font'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg.actuator_HUE,
			"helpUrl": Blockly.Msg.MPYTHON_DISPLAY_FONT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DISPLAY_FONT_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DISPLAY_FONT_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "x"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "y"
			}, {
				//"check": "String",
				"type": "input_value",
				"name": "message"
			}, {
				"name": "font",
				"text": "font.dvsm_16",
				"type": "field_input"
			}, {
				"name": "wrap",
				"options": [
					[Blockly.Msg.MPYTHON_FONT_NO_WRAP, 'False'],
					[Blockly.Msg.MPYTHON_FONT_WRAP, 'True']
				],
				"type": "field_dropdown"
			}
			]
		});
	}
};

//打开本地图片，显示于oled
Blockly.Blocks['mpython_image_to_oled'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Msg.actuator_HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_image_to_oled_TOOLTIP,
            "message0": Blockly.Msg.mpython_image_to_oled_MESSAGE0,
            "args0": [{
                //"check": "String",
                "type": "input_value",
                "name": "image_dir"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "w"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "h"
            }
            ]
        });
    }
};

// 生成二维码
Blockly.Blocks['mpython_qr_code'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Msg.actuator_HUE,
            "helpUrl": Blockly.Msg.MPYTHON_QR_CODE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_QR_CODE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_QR_CODE_MESSAGE0,
            "args0": [{
                //"check": "Number",
                "type": "input_value",
                "name": "x"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "y"
            }, {
                //"check": "String",
                "type": "input_value",
                "name": "str"
            }, {
				"name": "scale",
				"options": [
					['58 * 58', '2'],
					['29 * 29', '1']
				],
				"type": "field_dropdown"
			}
            ]
        });
    }
};