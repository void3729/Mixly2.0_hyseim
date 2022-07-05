//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');



//  整数 %1 对应的 ASCII 字符
Blockly.Blocks['int_to_chr'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"output": 'String',
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.INT_TO_CHR_HELPURL,
			"tooltip": Blockly.Msg.INT_TO_CHR_TOOLTIP,
			"message0": Blockly.Msg.INT_TO_CHR_MESSAGE0,
			"args0": [
				{
					//"check": "Number",
					"type": "input_value",
					"name": "_int"
				}
			]
		});
	}
};



//  hcsr04 超声波
Blockly.Blocks['mpython_hcsr04_obj'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			// "output": 'Number',
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_HCSR04_OBJ_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_HCSR04_OBJ_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_HCSR04_OBJ_MESSAGE0,
			"args0": [
				{
					"text": "hcsr04",
					"type": "field_input",
					"name": "hcsr04_name"
				}
				,
				{
					//"check": "Number",
					"type": "input_value",
					"name": "trigger"
				}
				,
				{
					//"check": "Number",
					"type": "input_value",
					"name": "echo"
				}
			]
		});
	}
};

//  hcsr04 超声波(mm)
Blockly.Blocks['mpython_hcsr04_distance'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"output": 'Number',
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MESSAGE0,
			"args0": [
				{
					"text": "hcsr04",
					"type": "field_input",
					"name": "hcsr04_name"
				},
				{
					"options": [
						['mm', 'mm'],
						['cm', 'cm']
					],
					"type": "field_dropdown",
					"name": "unit"
				}
			]
		});
	}
};

//  hcsr04 超声波(mm)
Blockly.Blocks['mpython_hcsr04_distance_mm'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"output": 'Number',
			"colour": Blockly.Blocks.pins.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_HCSR04_DISTANCE_MM_MESSAGE0,
			"args0": [
				{
					"text": "hcsr04",
					"type": "field_input",
					"name": "hcsr04_name"
				}
			]
		});
	}
};

// pm2.5浓度
Blockly.Blocks['mpython_pm2_5_MIC'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"output": 'Number',
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_PM2_5_MIC_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_PM2_5_MIC_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_PM2_5_MIC_MESSAGE0,
			"args0": [
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "rx"
                },
				{
					"options": [
						['PM1.0ug/m3', '_pm_data[0]'],
						['PM2.5ug/m3', '_pm_data[1]'],
						['PM10ug/m3', '_pm_data[2]']
					],
					"type": "field_dropdown",
					"name": "unit"
				}
			]
		});
	}
};

// 0.1升空气中直径在多少间的颗粒物个数
Blockly.Blocks['mpython_pm2_5_LitresAir'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'Number',
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_PM2_5_LitresAir_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_PM2_5_LitresAir_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_PM2_5_LitresAir_MESSAGE0,
			"args0": [
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "rx"
                },
				{
					"options": [
						['0.3um', '_pm_data[3]'],
						['0.5um', '_pm_data[4]'],
						['1um', '_pm_data[5]'],
						['2.5um', '_pm_data[6]'],
						['5um', '_pm_data[7]'],
						['10um', '_pm_data[8]']
					],
					"type": "field_dropdown",
					"name": "unit"
				}
			]
		});
	}
};
//  mac 地址
Blockly.Blocks['mpython_mac_address'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"output": 'String',
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.ethernet.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_MAC_ADDRESS_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAC_ADDRESS_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAC_ADDRESS_MESSAGE0,
		});
	}
};



// '解析 json 字符串 %1 返回对象';
Blockly.Blocks['mpython_ujson_loads'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": null,
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_UJSON_LOADS_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_UJSON_LOADS_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_UJSON_LOADS_MESSAGE0,
			"args0": [
				{
					//"check": "String",
					"type": "input_value",
					"name": "data"
				}
			]
		});
	}
};

// '%1 转 json 字符串';
Blockly.Blocks['mpython_ujson_dumps'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'String',
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_UJSON_DUMPS_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_UJSON_DUMPS_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_UJSON_DUMPS_MESSAGE0,
			"args0": [
				{
					// //"check": "String",
					"type": "input_value",
					"name": "data"
				}
			]
		});
	}
};

// '解码 base64 数据 %1 返回字节对象';
Blockly.Blocks['mpython_base64_to_data'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": null,
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_BASE64_TO_DATA_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_BASE64_TO_DATA_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_BASE64_TO_DATA_MESSAGE0,
			"args0": [
				{
					// //"check": "String",
					"type": "input_value",
					"name": "data"
				}
			]
		});
	}
};

// '%1 以 base64 格式编码 返回字节对象';
Blockly.Blocks['mpython_data_to_base64'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": null,
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_DATA_TO_BASE64_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DATA_TO_BASE64_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DATA_TO_BASE64_MESSAGE0,
			"args0": [
				{
					// //"check": "String",
					"type": "input_value",
					"name": "data"
				}
			]
		});
	}
};


// '十六进制字符串 %1 转 二进制 字节';
Blockly.Blocks['mpython_hex_to_bin_str'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": null,
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_HEX_TO_BIN_STR_MESSAGE0,
			"args0": [
				{
					//"check": "String",
					"type": "input_value",
					"name": "convert_chr"
				}
			]
		});
	}
};

// '字符串 %1 转 十六进制 字节';
Blockly.Blocks['mpython_str_to_hex'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": null,
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_STR_TO_HEX_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_STR_TO_HEX_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_STR_TO_HEX_MESSAGE0,
			"args0": [
				{
					//"check": "String",
					"type": "input_value",
					"name": "convert_chr"
				}
			]
		});
	}
};

// 'ASCII 单字符 %1 转 整形';
Blockly.Blocks['mpython_chr_to_int'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'String',
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_CHR_TO_INT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_CHR_TO_INT_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_CHR_TO_INT_MESSAGE0,
			"args0": [
				{
					//"check": "String",
					"type": "input_value",
					"name": "convert_chr"
				}
			]
		});
	}
};

// '整形 %1 转 ASCII 单字符';
Blockly.Blocks['mpython_int_to_chr'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'String',
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_INT_TO_CHR_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_INT_TO_CHR_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_INT_TO_CHR_MESSAGE0,
			"args0": [
				{
					//"check": "Number",
					"type": "input_value",
					"name": "convert_num"
				}
			]
		});
	}
};

// '10进制整数 %1 转化为 %2 字节';
Blockly.Blocks['mpython_ten_converted_to_bytes'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": null,
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_TEN_CONVERTED_TO_BYTES_MESSAGE0,
			"args0": [
				{
					"options": [
						['2', "'<H'"],
						['4', "'<L'"]
					],
					"type": "field_dropdown",
					"name": "convert_choice"
				}
				,
				{
					//"check": "Number",
					"type": "input_value",
					"name": "convert_num"
				}
			]
		});
	}
};

// %1 字符串 %2 转化为10进制整数
Blockly.Blocks['mpython_convert_to_ten'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'Number',
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_CONVERT_TO_TEN_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_CONVERT_TO_TEN_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_CONVERT_TO_TEN_MESSAGE0,
			"args0": [
				{
					"options": [
						[Blockly.Msg.MPYTHON_BIN, '2'],
						[Blockly.Msg.MPYTHON_OCT, '8'],
						[Blockly.Msg.MPYTHON_HEX, '16']
					],
					"type": "field_dropdown",
					"name": "convert_choice"
				}
				,
				{
					//"check": "String",
					"type": "input_value",
					"name": "convert_str"
				}
			]
		});
	}
};

// 10进制整数 %1 转化为 %2
Blockly.Blocks['mpython_ten_convert_to'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'String',
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_TEN_CONVERT_TO_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_TEN_CONVERT_TO_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_TEN_CONVERT_TO_MESSAGE0,
			"args0": [
				{
					//"check": "Number",
					"type": "input_value",
					"name": "int_num"
				}
				,
				{
					"options": [
						[Blockly.Msg.MPYTHON_BIN, 'bin'],
						[Blockly.Msg.MPYTHON_OCT, 'oct'],
						[Blockly.Msg.MPYTHON_HEX, 'hex']
					],
					"type": "field_dropdown",
					"name": "ten_convert_to"
				}
			]
		});
	}
};

// 数字值
Blockly.Blocks['mpython_high_low'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'Number',
			"colour": Blockly.Blocks.pins.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_HIGH_LOW_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_HIGH_LOW_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_HIGH_LOW_MESSAGE0,
			"args0": [
				{
					"options": [
						['HIGH', '1'],
						['LOW', '0']
					],
					"type": "field_dropdown",
					"name": "high_low"
				}
			]
		});
	}
};


// 子綫程
Blockly.Blocks['mpython_define_thread'] = {
	init: function () {
		this.jsonInit({
			//"inputsInline": true,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": '',
			"tooltip": '',
			"message0": Blockly.Msg.MPYTHON_DEFINE_THREAD_MESSAGE0,
			"args0": [
				{
					"options": [
						['1', '1'],
						['2', '2'],
						['3', '3'],
						['4', '4']
					],
					"type": "field_dropdown",
					"name": "THREAD"
				}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

Blockly.Blocks['mpython3_define_thread'] = {
	init: function () {
		this.jsonInit({
			//"inputsInline": true,
			"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": '',
			"tooltip": '',
			"message0": Blockly.Msg.MPYTHON_DEFINE_THREAD_MESSAGE0,
			"args0": [
				{
					"options": [
						['1', '1'],
						['2', '2'],
						['3', '3'],
						['4', '4']
					],
					"type": "field_dropdown",
					"name": "THREAD"
				}
			]
		});
	}
};

Blockly.Blocks['mpython_run_thread'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": '',
			"tooltip": '',
			"message0": Blockly.Msg.MPYTHON_RUN_THREAD_MESSAGE0,
			"args0": [
				{
					"options": [
						['1', '1'],
						['2', '2'],
						['3', '3'],
						['4', '4']
					],
					"type": "field_dropdown",
					"name": "THREAD"
				}
			]
		});
	}
};


Blockly.Blocks['mpython_start_new_thread'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_START_NEW_THREAD_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_START_NEW_THREAD_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_START_NEW_THREAD_MESSAGE0,
			"args0": [
				{
					"options": [
						['1', '1'],
						['2', '2'],
						['3', '3'],
						['4', '4']
					],
					"type": "field_dropdown",
					"name": "thread_name"
				}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

// 线程锁对象 %1 请求锁
Blockly.Blocks['mpython_lock_object_acquire_lock'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_LOCK_OBJECT_ACQUIRE_LOCK_MESSAGE0,
			"args0": [
				{
					"type": "field_input",
					"name": "thread_lock_object",
					"text": "lock"
				}
			]
		});
	}
};



// text内容是否为number
Blockly.Blocks['text_is_number'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'Boolean',
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.TEXT_IS_NUMBER_HELPURL,
			"tooltip": Blockly.Msg.TEXT_IS_NUMBER_TOOLTIP,
			"message0": Blockly.Msg.TEXT_IS_NUMBER_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "TEXT",
					//"check": "String"
				}, {
					"options": [
						[Blockly.Msg.TEXT_IS_DIGIT, '.isdigit()'],
						[Blockly.Msg.TEXT_IS_ALPHA, '.isalpha()']
						//[Blockly.Msg.TEXT_IS_ALNUM, '.isalnum()']
					],
					"type": "field_dropdown",
					"name": "TYPE"
				}
			]
		});
	}
};





//  字节 %1 转 字符串
Blockly.Blocks['mpython_bytes_decode'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"output": 'String',
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_BYTES_DECODE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_BYTES_DECODE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_BYTES_DECODE_MESSAGE0,
			"args0": [
				{
					// //"check": "String",
					"type": "input_value",
					"name": "bytes_decode"
				}
			]
		});
	}
};

// 字符串格式化 % 方式
Blockly.Blocks['text_format'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"output": "String",
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.TEXT_FORMAT_HELPURL,
			"tooltip": Blockly.Msg.TEXT_FORMAT_TOOLTIP,
			"message0": Blockly.Msg.TEXT_FORMAT_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "FORMAT",
					//"check": "String"
				},
				{
					"type": "input_value",
					"name": "CONTENT"
				}
			]
		});
	}
};

// 字符串格式化 format 方式
Blockly.Blocks['text_format2'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"output": "String",
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.TEXT_FORMAT2_HELPURL,
			"tooltip": Blockly.Msg.TEXT_FORMAT2_TOOLTIP,
			"message0": Blockly.Msg.TEXT_FORMAT2_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "FORMAT",
					//"check": "String"
				},
				{
					"type": "input_value",
					"name": "CONTENT"
				}
			]
		});
	}
};

// text转字节
Blockly.Blocks['text_to_byte'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"output": null, // 生成bytes对象
			// "output":'Number',
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.TEXT_TO_BYTE_HELPURL,
			"tooltip": Blockly.Msg.TEXT_TO_BYTE_TOOLTIP,
			"message0": Blockly.Msg.TEXT_TO_BYTE_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "TEXT",
					//"check": "String"
				}
				// ,
				// {
				// "options": [
				// ['utf-8', 'utf-8'],
				// ['ascii', 'ascii']
				// ],
				// "type": "field_dropdown",
				// "name": "encode"
				// }
			]
		});
	}
};

// 非文本转字节
Blockly.Blocks['other_to_byte'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": null, // 生成bytes对象
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.OTHER_TO_BYTE_HELPURL,
			"tooltip": Blockly.Msg.OTHER_TO_BYTE_TOOLTIP,
			"message0": Blockly.Msg.OTHER_TO_BYTE_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "input_var"
					// //"check": "String"
				}
			]
		});
	}
};




// 按位取反 ，~a
Blockly.Blocks['bit_inversion'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": "Number",
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.BIT_INVERSION_HELPURL,
			"tooltip": Blockly.Msg.BIT_INVERSION_TOOLTIP,
			"message0": Blockly.Msg.BIT_INVERSION_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "data"
				}
			]
		});
	}
};

/*try_except*/
Blockly.Blocks['mpython_try_except'] = {
	init: function () {
		this.jsonInit({
			"message0": '',
			"previousStatement": null,
			"nextStatement": null,
			"colour": Blockly.Msg["LOGIC_HUE"],
			"tooltip": '',
			"helpUrl": ''
		});
		this.appendStatementInput('TRY')
			.appendField('try');
		this.appendStatementInput('EXCEPT')
			.appendField('except');
	}
};

Blockly.Blocks['mpython_try_except_finally'] = {
	init: function () {
		this.jsonInit({
			"message0": '',
			"previousStatement": null,
			"nextStatement": null,
			"colour": Blockly.Msg["LOGIC_HUE"],
			"tooltip": '',
			"helpUrl": ''
		});
		this.appendStatementInput('TRY')
			.appendField('try');
		this.appendStatementInput('EXCEPT')
			.appendField('except');
		this.appendStatementInput('FINALLY')
			.appendField('finally');
	}
};
/*try_except*/


/*文本- 开始 */
//
Blockly.Blocks['text_append_text'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.texts.HUE,
			"args0": [
				{
					// //"check": "Number",
					"type": "input_value",
					"name": "text_abc"
				},
				{
					"type": "input_value",
					"name": "append_text"
				}
			],
			"output": 'String',
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"helpUrl": Blockly.Msg.TEXT_APPEND_TEXT_HELPURL,
			"tooltip": Blockly.Msg.TEXT_APPEND_TEXT_TOOLTIP,
			"message0": Blockly.Msg.TEXT_APPEND_TEXT_MESSAGE0
		});
	}
};

// 自定义代码
Blockly.Blocks['mpython_custom_code'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_CUSTOM_CODE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_CUSTOM_CODE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_CUSTOM_CODE_MESSAGE0,
			"args0": [{
				"name": "custom_type",
				"options": [
					[Blockly.Msg.MPYTHON_CUSTOM_TYPE_NORMAL, 'normal'],
					[Blockly.Msg.MPYTHON_CUSTOM_TYPE_IMPORT, 'topping']
				],
				"type": "field_dropdown"
			}, {
				"type": "input_dummy"
			}, {
				"type": "field_textarea",
				"name": "custom_code",
				"text": "custom code"
			}
			]
		});
	}
};

// 自定义代码
Blockly.Blocks['mpython_custom_value'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"output": null,
			"colour": Blockly.Blocks.texts.HUE,
			"helpUrl": '',
			"tooltip": '',
			"message0": Blockly.Msg.MPYTHON_CUSTOM_VALUE_MESSAGE0,
			"args0": [
                {
                    "text": "custom code",
                    "type": "field_input",
                    "name": "custom_code"
                }
			]
		});
	}
};

/*文本 - 结束 */







// 复位
Blockly.Blocks['mpython_machine_reset'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			// "output":'Boolean',
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_MACHINE_RESET_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MACHINE_RESET_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MACHINE_RESET_MESSAGE0,
			// "args0": [{
			// //"check": "Number",
			// "type": "input_value",
			// "name": "seg_num"
			// }
			// ]
		});
	}
};



// 数学 - random.randrange
Blockly.Blocks['math_random_randrange'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			'output': "Number",
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MATH_RANDOM_RANDRANGE_HELPURL,
			"tooltip": Blockly.Msg.MATH_RANDOM_RANDRANGE_TOOLTIP,
			"message0": Blockly.Msg.MATH_RANDOM_RANDRANGE_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "start"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "stop"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "step"
			}
			]
		});
	}
};

// 数学 - 图形化角度
Blockly.Blocks['math_angle'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			'output': "Number",
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": '',
			"tooltip": '',
			"message0": '%1',
			"args0": [{
				"name": "angle",
				"type": "field_angle"
			}
			]
		});
	}
};

// 数学 - 保留小数位数
Blockly.Blocks['math_keep_decimal'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			'output': "Number",
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": Blockly.Msg.MATH_KEEP_DECIMAL_HELPURL,
			"tooltip": Blockly.Msg.MATH_KEEP_DECIMAL_TOOLTIP,
			"message0": Blockly.Msg.MATH_KEEP_DECIMAL_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "NUM"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "PLACE"
			}
			]
		});
	}
};





/**
引用labplus-数学-映射
*/
//映射数字范围，放在math目录里
Blockly.Blocks['labplus_mapping'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"colour": Blockly.Msg["MATH_HUE"], //  blockly\blocks\math.js  //Blockly.Blocks.math.HUE = 230;
			"args0": [{
				"name": "inputNum",
				"type": "input_value",
				//"check": "Number"
			}, {
				"name": "bMin",
				"type": "input_value",
				//"check": "Number"
			}, {
				"name": "bMax",
				"type": "input_value",
				//"check": "Number"
			}, {
				"name": "cMin",
				"type": "input_value",
				//"check": "Number"
			}, {
				"name": "cMax",
				"type": "input_value",
				//"check": "Number"
			}
			],
			"output": "Number",
			"message0": Blockly.Msg.labplus_mapping_MESSAGE0,
			"tooltip": Blockly.Msg.labplus_mapping_TOOLTIP,
			"helpUrl": Blockly.Msg.labplus_mapping_HELPURL
		});
	}
};


//定时器
Blockly.Blocks['mpython_Timer'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.mpython_Timer_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_Timer_HELPURL,
			"tooltip": Blockly.Msg.mpython_Timer_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "Num"
			}, {
				"options": [
					[Blockly.Msg.mpython_PERIODIC, 'PERIODIC'],
					[Blockly.Msg.mpython_ONE_SHOT, 'ONE_SHOT']
				],
				"type": "field_dropdown",
				"name": "Timer_mode"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "period"
			}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

Blockly.Blocks['mpython_timer_def'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_TIMER_DEF_MESSAGE0,
			"nextStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_Timer_HELPURL,
			"tooltip": Blockly.Msg.mpython_Timer_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "Num"
			}]
		});
	}
};

Blockly.Blocks['mpython_timer_init'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_TIMER_INIT_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_Timer_HELPURL,
			"tooltip": Blockly.Msg.mpython_Timer_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "Num"
			}, {
				"options": [
					[Blockly.Msg.mpython_PERIODIC, 'PERIODIC'],
					[Blockly.Msg.mpython_ONE_SHOT, 'ONE_SHOT']
				],
				"type": "field_dropdown",
				"name": "Timer_mode"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "period"
			}
			]
		});
	}
};

// 定时器选项
Blockly.Blocks['mpython_timer_option'] = {
	init: function () {
		this.jsonInit({
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": '',
			"tooltip": '',
			"message0": '%1',
			"args0": [{
				"options": [
					["1", "1"],
					["2", "2"],
					["4", "4"],
					["7", "7"],
					["8", "8"],
					["9", "9"],
					["10", "10"]
				],
				"type": "field_dropdown",
				"name": "Timer_num"
			}
			]
		});
	}
};

// 自定义事件选项
Blockly.Blocks['mpython_event_option'] = {
	init: function () {
		this.jsonInit({
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": '',
			"tooltip": '',
			"message0": '%1',
			"args0": [{
				"options": [
					["10", "10"],
					["9", "9"],
					["8", "8"],
					["7", "7"],
					["4", "4"],
					["2", "2"],
					["1", "1"]
				],
				"type": "field_dropdown",
				"name": "Timer_num"
			}
			]
		});
	}
};

// 定时器- 当前计数值
Blockly.Blocks['mpython_Timer_value'] = {
	init: function () {
		this.jsonInit({
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_Timer_value_TOOLTIP,
			"message0": Blockly.Msg.mpython_Timer_value_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "Timer_num"
			}
			]
		});
	}
};

//取消定时器的初始化。停止计时器，并禁用计时器外围设备
Blockly.Blocks['mpython_Timer_deinit'] = {
	init: function () {
		this.jsonInit({
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"inputsInline": false,
			"nextStatement": null,
			"previousStatement": null,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_Timer_deinit_TOOLTIP,
			"message0": Blockly.Msg.mpython_Timer_deinit_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "Timer_num"
			}
			]
		});
	}
};

//中断-引脚
Blockly.Blocks['mpython_Interrupt_pin'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.mpython_Interrupt_pin_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_Interrupt_pin_HELPURL,
			"tooltip": Blockly.Msg.mpython_Interrupt_pin_TOOLTIP,
			"args0": [{
				/*
				"options": [
					["P0", "0"],
					["P1", "1"],
					["P2", "2"],
					["P3", "3"],
					["P8", "8"],
					["P9", "9"],
					["P13", "13"],
					["P14", "14"],
					["P15", "15"],
					["P16", "16"],
					[Blockly.Msg.mpython_button_A, "5"],
					[Blockly.Msg.mpython_button_B, "11"]
				],
				"type": "field_dropdown",
				*/
				//"check": "Number",
				"type": "input_value",
				"name": "Interrupt_pin"
			}, {
				"options": [
					[Blockly.Msg.mpython_Interrupt_pin_IRQ_RISING, "to_high"],
					[Blockly.Msg.mpython_Interrupt_pin_IRQ_FALLING, "to_low"]
				],
				"type": "field_dropdown",
				"name": "action"
			}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

//中断-引脚
Blockly.Blocks['mpython3_interrupt_pin'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.mpython_Interrupt_pin_MESSAGE0,
			"nextStatement": null,
			// "previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_Interrupt_pin_HELPURL,
			"tooltip": Blockly.Msg.mpython_Interrupt_pin_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "Interrupt_pin"
			}, {
				"options": [
					[Blockly.Msg.mpython_Interrupt_pin_IRQ_RISING, "to_high"],
					[Blockly.Msg.mpython_Interrupt_pin_IRQ_FALLING, "to_low"]
				],
				"type": "field_dropdown",
				"name": "action"
			}
			]
		});
	}
};

//中断-按键
Blockly.Blocks['mpython_Interrupt_AB'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"message0": Blockly.Msg.mpython_Interrupt_AB_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_Interrupt_AB_HELPURL,
			"tooltip": Blockly.Msg.mpython_Interrupt_AB_TOOLTIP,
			"args0": [{
				"options": button_AB,
				"type": "field_dropdown",
				"name": "button"
			}, {
				"options": [
					[Blockly.Msg.mpython_IRQ_FALLING, "down"],
					[Blockly.Msg.mpython_IRQ_RISING, "up"]
				],
				"type": "field_dropdown",
				"name": "action"
			}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

// 掌控板摇晃状态
Blockly.Blocks['mpython_is_shaked'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Boolean",
			"helpUrl": Blockly.Msg.MPYTHON_IS_SHAKED_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_IS_SHAKED_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_IS_SHAKED_MESSAGE0,
			"args0": [{
				"options": [
					[Blockly.Msg.MPYTHON_IS_SHAKED, "shaked"],
					[Blockly.Msg.MPYTHON_IS_THROWN, "thrown"]
				],
				"type": "field_dropdown",
				"name": "action"
			}]
		});
	}
};

// 检测前后左右
Blockly.Blocks['mpython_shake_detector'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"message0": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_TOOLTIP,
			"args0": [{
				"options": [
					[Blockly.Msg.MPYTHON_IS_SHAKED, "shaked"],
					[Blockly.Msg.MPYTHON_IS_THROWN, "thrown"]
				],
				"type": "field_dropdown",
				"name": "action"
			}]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

Blockly.Blocks['mpython3_shake_detector'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"message0": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_MESSAGE0,
			"nextStatement": null,
			//"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_SHAKE_DETECTOR_TOOLTIP,
			"args0": [{
				"options": [
					[Blockly.Msg.MPYTHON_IS_SHAKED, "shaked"],
					[Blockly.Msg.MPYTHON_IS_THROWN, "thrown"]
				],
				"type": "field_dropdown",
				"name": "action"
			}]
		});
	}
};

// 掌控板倾斜状态
Blockly.Blocks['mpython_is_tilted'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Boolean",
			"helpUrl": Blockly.Msg.MPYTHON_IS_TILTED_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_IS_TILTED_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_IS_TILTED_MESSAGE0,
			"args0": [{
				"options": [
					[Blockly.Msg.MPYTHON_DIRECTION_FORWARD, 'forward'],
					[Blockly.Msg.MPYTHON_DIRECTION_BACK, 'back'],
					[Blockly.Msg.MPYTHON_DIRECTION_LEFT, 'left'],
					[Blockly.Msg.MPYTHON_DIRECTION_RIGHT, 'right']
				],
				"type": "field_dropdown",
				"name": "direction"
			}
			]
		});
	}
};

// 检测前后左右
Blockly.Blocks['mpython_tilt_detector'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"message0": Blockly.Msg.MPYTHON_TILT_DETECTOR_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_TILT_DETECTOR_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_TILT_DETECTOR_TOOLTIP,
			"args0": [{
				"options": [
					[Blockly.Msg.MPYTHON_DIRECTION_FORWARD, 'forward'],
					[Blockly.Msg.MPYTHON_DIRECTION_BACK, 'back'],
					[Blockly.Msg.MPYTHON_DIRECTION_LEFT, 'left'],
					[Blockly.Msg.MPYTHON_DIRECTION_RIGHT, 'right'],
					[Blockly.Msg.MPYTHON_DIRECTION_NONE, 'none']
				],
				"type": "field_dropdown",
				"name": "direction"
			}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

Blockly.Blocks['mpython3_tilt_detector'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"message0": Blockly.Msg.MPYTHON_TILT_DETECTOR_MESSAGE0,
			"nextStatement": null,
			//"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_TILT_DETECTOR_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_TILT_DETECTOR_TOOLTIP,
			"args0": [{
				"options": [
					[Blockly.Msg.MPYTHON_DIRECTION_FORWARD, 'forward'],
					[Blockly.Msg.MPYTHON_DIRECTION_BACK, 'back'],
					[Blockly.Msg.MPYTHON_DIRECTION_LEFT, 'left'],
					[Blockly.Msg.MPYTHON_DIRECTION_RIGHT, 'right'],
					[Blockly.Msg.MPYTHON_DIRECTION_NONE, 'none']
				],
				"type": "field_dropdown",
				"name": "direction"
			}
			]
		});
	}
};

// 检测按键事件
Blockly.Blocks['mpython_touch_event'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"message0": Blockly.Msg.MPYTHON_TOUCH_EVENT_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_TOUCH_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_TOUCH_EVENT_TOOLTIP,
			"args0": [{
				"options": touchPad,
				"type": "field_dropdown",
				"name": "touchPad"
			}, {
				"options": [
					[Blockly.Msg.MPYTHON_TOUCH_EVENT_PRESSED, 'pressed'],
					[Blockly.Msg.MPYTHON_TOUCH_EVENT_UNPRESSED, 'unpressed']
				],
				"type": "field_dropdown",
				"name": "action"
			}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

// 自定义事件
Blockly.Blocks['mpython_custom_event'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_CUSTOM_EVENT_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_CUSTOM_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_CUSTOM_EVENT_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "index"
			}, {
				//"check": "Boolean",
				"type": "input_value",
				"name": "condition"
			}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

Blockly.Blocks['mpython3_custom_event'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_CUSTOM_EVENT_MESSAGE0,
			"nextStatement": null,
			// "previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_CUSTOM_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_CUSTOM_EVENT_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "index"
			}, {
				//"check": "Boolean",
				"type": "input_value",
				"name": "condition"
			}
			]
		});
	}
};

//上电、reset后的系统计时
Blockly.Blocks['mpython_time_ticks'] = {
	init: function () {
		this.jsonInit({
			//"inputsInline": true,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_time_ticks_TOOLTIP,
			"message0": Blockly.Msg.mpython_time_ticks_MESSAGE0,
			"output": "Number",
			"args0": [{
				"options": [
					[Blockly.Msg.mpython_s, 'time'],
					[Blockly.Msg.mpython_ms, 'ticks_ms'],
					[Blockly.Msg.mpython_us, 'ticks_us']
				],
				"type": "field_dropdown",
				"name": "time_ticks"
			}
			]
		});
	}
};

// 获取年月日等
//若未提供秒或为None，则使用 RTC时间
Blockly.Blocks['mpython_time_localtime'] = {
	init: function () {
		this.jsonInit({
			//"inputsInline": true,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_time_localtime_TOOLTIP,
			"message0": Blockly.Msg.mpython_time_localtime_MESSAGE0,
			"output": "Number",
			"args0": [{
				"options": [
					[Blockly.Msg.mpython_year, '0'],
					[Blockly.Msg.mpython_month, '1'],
					[Blockly.Msg.mpython_date, '2'],
					[Blockly.Msg.mpython_hour, '3'],
					[Blockly.Msg.mpython_minute, '4'],
					[Blockly.Msg.mpython_s, '5'],
					[Blockly.Msg.mpython_week, '6'],
					[Blockly.Msg.mpython_days, '7']
				],
				"type": "field_dropdown",
				"name": "time_localtime"
			}
			]
		});
	}
};

//摇晃
Blockly.Blocks['mpython_sway_xyz'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "direction_group",
				"options": [
					[Blockly.Msg.mpython_left_right, 'left_right'],
					[Blockly.Msg.mpython_front_back, 'front_back']
				],
				"type": "field_dropdown"
			}
			],
			"output": "Boolean",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_sway_xyz_TOOLTIP,
			"message0": Blockly.Msg.mpython_sway_xyz_MESSAGE0
		});
	}
};





//舵机
Blockly.Blocks['mpython_servo_angle0'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.pins.HUE,
			"args0": [{
				"name": "pwm_pin",
				// "options": set_analog,
				// "type": "field_dropdown"
				//"check": "Number",
				"type": "input_value"
			}
				,
			{
				"name": "servo_angle",
				"type": "input_value",
				//"check": "Number"
			}
			],
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_servo_angle0_TOOLTIP,
			"message0": Blockly.Msg.mpython_servo_angle0_MESSAGE0,
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

//舵机
Blockly.Blocks['mpython_servo_angle'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.pins.HUE,
			"args0": [{
				"name": "pwm_pin",
				// "options": set_analog,
				// "type": "field_dropdown"
				//"check": "Number",
				"type": "input_value"
			}
				,
			{
				"name": "servo_angle",
				"type": "input_value",
				//"check": "Number"
			}
				,
			{
				"name": "min_us",
				"type": "input_value",
				//"check": "Number"
			}
				,
			{
				"name": "max_us",
				"type": "input_value",
				//"check": "Number"
			}
				,
			{
				"name": "actuation_range",
				"type": "input_value",
				//"check": "Number"
			}
			],
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_servo_angle_TOOLTIP,
			"message0": Blockly.Msg.mpython_servo_angle_MESSAGE0,
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

// dh11 温湿度
Blockly.Blocks['mpython_dh11_hum_tem'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.sensor.HUE,
			"args0": [
				{
					"name": "dh11_hum_tem_pin",
					//"check": "Number",
					"type": "input_value"
				}, {
					"name": "hum_tem",
					"options": [
						[Blockly.Msg.mpython_tem, 'temperature'],
						[Blockly.Msg.mpython_hum, 'humidity']
					],
					"type": "field_dropdown"
				}

			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_dh11_hum_tem_HELPURL,
			"tooltip": Blockly.Msg.mpython_dh11_hum_tem_TOOLTIP,
			"message0": Blockly.Msg.mpython_dh11_hum_tem_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null
		});
	}
};

// dh22 温湿度
Blockly.Blocks['mpython_dh22_hum_tem'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.sensor.HUE,
			"args0": [
				{
					"name": "dh22_hum_tem_pin",
					//"check": "Number",
					"type": "input_value"
				}, {
					"name": "hum_tem",
					"options": [
						[Blockly.Msg.mpython_tem, 'temperature'],
						[Blockly.Msg.mpython_hum, 'humidity']
					],
					"type": "field_dropdown"
				}

			],
			"output": "Number",
			"helpUrl": Blockly.Msg.MPYTHON_DH22_HUM_TEM_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_DH22_HUM_TEM_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_DH22_HUM_TEM_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_sleep_ms'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_SLEEP_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_SLEEP_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "duration"
			}, {
				"name": "ms_us",
				"options": [
					[Blockly.Msg.mpython_s, 's'],
					[Blockly.Msg.MPYTHON_MS, 'ms'],
					[Blockly.Msg.MPYTHON_US, 'us']
				],
				"type": "field_dropdown"
			}
			]
		});
	}
};

// type
Blockly.Blocks['mpython_type'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_TYPE_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "VAR"
				}
			],
			"output": null,
			"colour": Blockly.Msg["LOGIC_HUE"],
			"tooltip": Blockly.Msg.MPYTHON_TYPE_TOOLTIP,
			"helpUrl": Blockly.Msg.MPYTHON_TYPE_HELPURL
		});
	}
};

// type is
Blockly.Blocks['mpython_type_is'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_TYPE_IS_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "VAR"
				},
				{
					"name": "TYPE",
					"options":
						[
							['int', 'int'],
							['float', 'float'],
							['bool', 'bool'],
							['str', 'str'],
							['list', 'list'],
							['tuple', 'tuple'],
							['set', 'set'],
							['dict', 'dict'],
							['bytes', 'bytes'],
							['bytearray', 'bytearray'],
							['complex', 'complex']
						],
					"type": "field_dropdown"
				}
			],
			"output": "Boolean",
			"colour": Blockly.Msg["LOGIC_HUE"],
			"tooltip": Blockly.Msg.MPYTHON_TYPE_IS_TOOLTIP,
			"helpUrl": Blockly.Msg.MPYTHON_TYPE_IS_HELPURL
		});
	}
};

// eval
Blockly.Blocks['mpython_eval'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_EVAL_MESSAGE0,
			"args0": [
				{
					//"check": "String",
					"type": "input_value",
					"name": "VAR"
				}
			],
			"output": null,
			"colour": Blockly.Msg["LOGIC_HUE"],
			"tooltip": Blockly.Msg.MPYTHON_EVAL_TOOLTIP,
			"helpUrl": Blockly.Msg.MPYTHON_EVAL_HELPURL
		});
	}
};

// return
Blockly.Blocks['mpython_return'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Msg["LOGIC_HUE"],
			"helpUrl": Blockly.Msg.MPYTHON_RETURN_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_RETURN_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_RETURN_MESSAGE0,
			"args0": [{
				// //"check": "Number",
				"type": "input_value",
				"name": "VAR"
			}
			]
		});
	}
};

//运行时间差
Blockly.Blocks['mpython_time_difference'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"output": 'Number',
			"helpUrl": Blockly.Msg.MPYTHON_TIME_DIFFERENCE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_TIME_DIFFERENCE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_TIME_DIFFERENCE_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "time1"
			}, {
				//"check": "Number",
				"type": "input_value",
				"name": "time2"
			}
			]
		});
	}
};



// 构建Clock对象
Blockly.Blocks['mpython_def_clock'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_def_clock_TOOLTIP,
			"message0": Blockly.Msg.mpython_def_clock_MESSAGE0,
			"args0": [
				{
					"type": "field_input",
					"name": "clock_name",
					"text": "my_clock"
				},
				{
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
					"name": "radius"

				}
			]
		});
	}
};

// 获取本地时间并设置模拟钟表时间
Blockly.Blocks['mpython_settime_clock'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_settime_clock_TOOLTIP,
			"message0": Blockly.Msg.mpython_settime_clock_MESSAGE0,
			"args0": [
				{
					"type": "field_input",
					"name": "clock_name",
					"text": "my_clock"
				}
			]
		});
	}
};

// 绘制钟表 ,清除钟表
Blockly.Blocks['mpython_draw_clear_clock'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_draw_clear_clock_TOOLTIP,
			"message0": Blockly.Msg.mpython_draw_clear_clock_MESSAGE0,
			"args0": [{
				"name": "draw_clear_clock",
				"options": [
					[Blockly.Msg.mpython_draw, 'drawClock'],
					[Blockly.Msg.mpython_clear, 'clear']
				],
				"type": "field_dropdown"
			},
			{
				"type": "field_input",
				"name": "clock_name",
				"text": "my_clock"
			}
			]
		});
	}
};




/* 按键开始 */
Blockly.Blocks['mpython_button_is_pressed'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "button",
				"options": [["A", "a"], ["B", "b"], ["A+B", "A+B"]],
				"type": "field_dropdown"
			}
			],
			"output": "Boolean",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_button_is_pressed_TOOLTIP,
			"message0": Blockly.Msg.mpython_button_is_pressed_MESSAGE0
		});
	}
};
Blockly.Blocks['mpython_button_both_pressed'] = { //同时按下AB
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Boolean",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_button_both_pressed_TOOLTIP,
			"message0": Blockly.Msg.mpython_button_both_pressed_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_touchPad_value'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "touchPad",
				"options": touchPad,
				"type": "field_dropdown"
			}
			],
			"output": "Boolean",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_touchPad_value_TOOLTIP,
			"message0": Blockly.Msg.mpython_touchPad_value_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_touchPad_value_num'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "touchPad",
				"options": touchPad,
				"type": "field_dropdown"
			}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_touchPad_value_num_TOOLTIP,
			"message0": Blockly.Msg.mpython_touchPad_value_num_MESSAGE0
		});
	}
};
/* 按键结束 */

/* 引脚开始 */
Blockly.Blocks['mpython_read_digital'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.pins.HUE,
			"args0": [
				{
					"name": "allPin",
					//"check": "Number",
					"type": "input_value"
					// "options": read_digital,
					// "type": "field_dropdown"
				}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_read_digital_TOOLTIP,
			"message0": Blockly.Msg.mpython_read_digital_MESSAGE0
		});
	}
};

/* DS18B20 防水温度传感器 */
Blockly.Blocks['mpython_read_ds18b20'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.sensor.HUE,
			"args0": [
				{
					"name": "allPin",
					//"check": "Number",
					"type": "input_value"
					// "options": read_digital,
					// "type": "field_dropdown"
				}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_read_DS18B20_TOOLTIP,
			"message0": Blockly.Msg.mpython_read_DS18B20_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_set_digital'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.pins.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_set_digital_TOOLTIP,
			"message0": Blockly.Msg.mpython_set_digital_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "num"
			}, {
				"name": "allPin",
				// "options": set_digital,
				// "type": "field_dropdown"
				//"check": "Number",
				"type": "input_value"
			}
			]
		});
	}
};

// 新的
//数字引脚，上下拉，输入/推挽输出/开漏输出
Blockly.Blocks['mpython_set_pin_mode'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.pins.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_SETS_PIN_MODE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_SETS_PIN_MODE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_SETS_PIN_MODE_MESSAGE0,
			"args0": [
				{
					"name": "allPin",
					//"check": "Number",
					"type": "input_value"
					// "options": all_pin,
					// "type": "field_dropdown"
				}, {
					"name": "in_out",
					"options": [
						//[Blockly.Msg.MPYTHON_SET_PIN_IN, 'IN'],
						//[Blockly.Msg.MPYTHON_SET_PIN_PUSH_PULL_OUT, 'OUT'], // 推挽输出
						[Blockly.Msg.MPYTHON_SET_PIN_LEAKY_OUT, 'OUT_DRAIN'] // 开漏输出
					],
					"type": "field_dropdown"
				}, {
					"name": "pin_up_down_pull",
					"options": [
						[Blockly.Msg.MPYTHON_SET_PIN_NO_PULL, 'None'],
						[Blockly.Msg.MPYTHON_SET_PIN_DOWN_PULL, 'Pin.PULL_DOWN'],
						[Blockly.Msg.MPYTHON_SET_PIN_UP_PULL, 'Pin.PULL_UP']
					],
					"type": "field_dropdown"
				}, {
					"name": "pin_value",
					//"check": "Number",
					"type": "input_value"
				}
			]
		});
	}
};

Blockly.Blocks['mpython_read_analog'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.pins.HUE,
			"args0": [
				// {
				// 	"name": "allPin",
				// 	"options": read_analog,
				// 	"type": "field_dropdown"
				// }
				{
					//"check": "Number",
					"type": "input_value",
					"name": "allPin"
				}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_read_analog_TOOLTIP,
			"message0": Blockly.Msg.mpython_read_analog_MESSAGE0
		});
	}
};
Blockly.Blocks['mpython_set_analog'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.pins.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_set_analog_TOOLTIP,
			"message0": Blockly.Msg.mpython_set_analog_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "num"
			}, {
				"name": "allPin",
				// "options": set_analog,
				// 	"type": "field_dropdown"
				//"check": "Number",
				"type": "input_value"
			}
			]
		});
	}
};


/* RGB */
Blockly.Blocks['mpython_rgb_list'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": 'Number',
			"colour": Blockly.Blocks.pins.HUE,
			"helpUrl": '',
			"tooltip": '',
			"message0": '%1',
			"args0": [
				{
					"options": [
						[Blockly.Msg.MPYTHON_RGB_0, '0'],
						[Blockly.Msg.MPYTHON_RGB_1, '1'],
						[Blockly.Msg.MPYTHON_RGB_2, '2'],
						[Blockly.Msg.MPYTHON_RGB_ALL, '-1']
					],
					"type": "field_dropdown",
					"name": "rgb_list"
				}
			]
		});
	}
};

Blockly.Blocks['mpython_set_rgb_list_color'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_SET_RGB_LIST_COLOR_MESSAGE0,
			"args0": [{
				"name": "num",
				//"check": "Number",
				"type": "input_value"
			}, {
				"type": "field_colour",
				"name": "COLOUR",
				"colour": "#ff0000"
			}
			]
		});
	}
};

Blockly.Blocks['mpython_set_rgb_list_number'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_SET_RGB_LIST_NUMBER_MESSAGE0,
			"args0": [{
				"name": "num",
				//"check": "Number",
				"type": "input_value"
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

Blockly.Blocks['mpython_off_rgb_list'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_OFF_RGB_LIST_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_OFF_RGB_LIST_MESSAGE0,
			"args0": [{
				"name": "num",
				//"check": "Number",
				"type": "input_value"
			}]
		});
	}
};

Blockly.Blocks['mpython_set_RGB_color'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_set_RGB_color_TOOLTIP,
			"message0": Blockly.Msg.mpython_set_RGB_color_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "num"
			}, {
				"type": "field_colour",
				"name": "COLOUR",
				"colour": "#ff0000"
			}
			]
		});
	}
};
Blockly.Blocks['mpython_set_RGB'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_set_RGB_TOOLTIP,
			"message0": Blockly.Msg.mpython_set_RGB_MESSAGE0,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "num"
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
Blockly.Blocks['mpython_set_RGB_color_all'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_set_RGB_color_all_TOOLTIP,
			"message0": Blockly.Msg.mpython_set_RGB_color_all_MESSAGE0,
			"args0": [{
				"type": "field_colour",
				"name": "COLOUR",
				"colour": "#ff0000"
			}
			]
		});
	}
};
Blockly.Blocks['mpython_set_RGB_all'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_set_RGB_all_TOOLTIP,
			"message0": Blockly.Msg.mpython_set_RGB_all_MESSAGE0,
			"args0": [{
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
Blockly.Blocks['mpython_fresh_RGB'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_fresh_RGB_TOOLTIP,
			"message0": Blockly.Msg.mpython_fresh_RGB_MESSAGE0
		});
	}
};
Blockly.Blocks['mpython_off_RGB'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_off_RGB_TOOLTIP,
			"message0": Blockly.Msg.mpython_off_RGB_MESSAGE0
		});
	}
};

/* 蜂鸣器 */
Blockly.Blocks['mpython_buzz_state'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_buzz_state_TOOLTIP,
			"message0": Blockly.Msg.mpython_buzz_state_MESSAGE0
		});
	}
};
Blockly.Blocks['mpython_buzz_freq'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_buzz_freq_TOOLTIP,
			"message0": Blockly.Msg.mpython_buzz_freq_MESSAGE0,
			"args0": [
				{
					//"check": "Number",
					"type": "input_value",
					"name": "freq"
				}
				,
				{
					//"check": "Number",
					"type": "input_value",
					"name": "pin"
				}
			]
		});
	}
};
Blockly.Blocks['mpython_buzz_tone'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_buzz_tone_TOOLTIP,
			"message0": Blockly.Msg.mpython_buzz_tone_MESSAGE0,
			"args0": [{
				"name": "buzz_tone",
				"options": buzz_tone,
				"type": "field_dropdown"
			}
			]
		});
	}
};



/* 声音光线 */
Blockly.Blocks['mpython_read_sound'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_read_sound_TOOLTIP,
			"message0": Blockly.Msg.mpython_read_sound_MESSAGE0
		});
	}
};
Blockly.Blocks['mpython_read_light'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_read_light_TOOLTIP,
			"message0": Blockly.Msg.mpython_read_light_MESSAGE0
		});
	}
};

/* 加速度 */
Blockly.Blocks['mpython_accelerometer_get'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "axis",
				"options": axis,
				"type": "field_dropdown"
			}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_accelerometer_get_TOOLTIP,
			"message0": Blockly.Msg.mpython_accelerometer_get_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_accelerometer_get_x'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_accelerometer_get_x_TOOLTIP,
			"message0": Blockly.Msg.mpython_accelerometer_get_x_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_accelerometer_get_y'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_accelerometer_get_y_TOOLTIP,
			"message0": Blockly.Msg.mpython_accelerometer_get_y_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_accelerometer_get_z'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_accelerometer_get_z_TOOLTIP,
			"message0": Blockly.Msg.mpython_accelerometer_get_z_MESSAGE0
		});
	}
};

Blockly.Blocks['mpython_accelerometer_set_range'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "range",
				"options": [
					[Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_2G, 'RANGE_2G'],
					[Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_4G, 'RANGE_4G'],
					[Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_8G, 'RANGE_8G'],
					[Blockly.Msg.MPYTHON_ACCELEROMETER_RANGE_16G, 'RANGE_16G']
				],
				"type": "field_dropdown"
			}
			],
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RANGE_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_accelerometer_set_resolution'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "resolution",
				"options": [
					[Blockly.Msg.MPYTHON_ACCELEROMETER_RES_10_BIT, 'RES_10_BIT'],
					[Blockly.Msg.MPYTHON_ACCELEROMETER_RES_12_BIT, 'RES_12_BIT'],
					[Blockly.Msg.MPYTHON_ACCELEROMETER_RES_14_BIT, 'RES_14_BIT']
				],
				"type": "field_dropdown"
			}
			],
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_RESOLUTION_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_accelerometer_set_offset'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
					"type": "input_dummy"
				},{
					//"check": "Number",
					"type": "input_value",
					"name": "x"
				},{
					//"check": "Number",
					"type": "input_value",
					"name": "y"
				},{
					//"check": "Number",
					"type": "input_value",
					"name": "z"
				},
			],
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_ACCELEROMETER_SET_OFFSET_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

// 倾斜角
Blockly.Blocks['mpython_tilt_angle'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "axis",
				"options": axis,
				"type": "field_dropdown"
			}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.MPYTHON_TILT_ANGLE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_TILT_ANGLE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_TILT_ANGLE_MESSAGE0
		});
	}
};

/* 随机项 */
Blockly.Blocks['mpython_random_choice'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.mpython_random_choice_MESSAGE0,
			"args0": [
				{
					"type": "input_value",
					"name": "list",
					//"check": ["Array", "String"]
				}
			],
			//"output": "Number", "String",
			"output": "String",
			"colour": Blockly.Msg["MATH_HUE"],
			"tooltip": Blockly.Msg.mpython_random_choice_TOOLTIP,
			"helpUrl": Blockly.Msg.mpython_HELPURL
		});
	}
};

//  外部脉冲电平持续时间 %1
Blockly.Blocks['machine_time_pulse_us'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"output": 'Number',
			"colour": Blockly.Blocks.pins.HUE,
			"helpUrl": Blockly.Msg.MACHINE_TIME_PULSE_US_HELPURL,
			"tooltip": Blockly.Msg.MACHINE_TIME_PULSE_US_TOOLTIP,
			"message0": Blockly.Msg.MACHINE_TIME_PULSE_US_MESSAGE0,
			"args0": [
				{
					// options: all_pin,
					// "type": "field_dropdown",
					//"check": "Number",
					"type": "input_value",
					"name": "pin"
				},
				//{
				//	options: [
				//		['HIGH', '1'],
				//		['LOW', '0'],
				//	],
				//	"type": "field_dropdown",
				//	"name": "pulse"
				//},
				{
				 	//"check": "Number",
				 	"type": "input_value",
				 	"name": "pulse"
				}
			]
		});
	}
};

Blockly.Blocks['mpython_print'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.texts.HUE,
			"args0": [
				{
					"name": "CONTENT",
					"type": "input_value",
					//"check": ["Number", "String"]
				}

			],
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_print_TOOLTIP,
			"message0": Blockly.Msg.mpython_print_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_print_to_chart'] = {
	/**
	 * Block for creating a list with any number of elements of any type.
	 * @this Blockly.Block
	 */
    init: function () {
        //this.setHelpUrl(Blockly.Msg.mpython_HELPURL);
        this.setColour(Blockly.Msg["MATH_HUE"]);
        this.itemCount_ = 1;
        this.updateShape_();
        //this.setOutput(true);
		this.setNextStatement(true);
		this.setPreviousStatement(true);
        this.setMutator(new Blockly.Mutator(['mpython_print_to_chart_item']));
        this.setTooltip(Blockly.Msg.MPYTHON_PRINT_TO_CHART_TOOLTIP);
    },
	/**
	 * Create XML to represent list inputs.
	 * @return {!Element} XML storage element.
	 * @this Blockly.Block
	 */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
	/**
	 * Parse XML to restore the list inputs.
	 * @param {!Element} xmlElement XML storage element.
	 * @this Blockly.Block
	 */
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
	/**
	 * Populate the mutator's dialog with this block's components.
	 * @param {!Blockly.Workspace} workspace Mutator's workspace.
	 * @return {!Blockly.Block} Root block in mutator.
	 * @this Blockly.Block
	 */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('mpython_print_to_chart_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('mpython_print_to_chart_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
	/**
	 * Reconfigure this block based on the mutator dialog's components.
	 * @param {!Blockly.Block} containerBlock Root block in mutator.
	 * @this Blockly.Block
	 */
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        if (this.itemCount_ > 4) this.itemCount_ = 4;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
	/**
	 * Store pointers to any connected child blocks.
	 * @param {!Blockly.Block} containerBlock Root block in mutator.
	 * @this Blockly.Block
	 */
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
	/**
	 * Modify this block to have the correct number of inputs.
	 * @private
	 * @this Blockly.Block
	 */
    updateShape_: function () {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.MPYTHON_PRINT_TO_CHART_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.setCheck("Number").appendField(Blockly.Msg.MPYTHON_PRINT_TO_CHART_INPUT_WITH);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};
Blockly.Blocks['mpython_print_to_chart_item'] = {
	/**
	 * Mutator bolck for adding items.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(Blockly.Msg["MATH_HUE"]);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_PRINT_TO_CHART_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MPYTHON_PRINT_TO_CHART_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
}

Blockly.Blocks['mpython_print_to_chart_container'] = {
	/**
	 * Mutator block for list container.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(Blockly.Msg["MATH_HUE"]);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_PRINT_TO_CHART_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.MPYTHON_PRINT_TO_CHART_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

// 初始化图表
Blockly.Blocks['mpython_init_chart'] = {
	/**
	 * Block for creating a list with any number of elements of any type.
	 * @this Blockly.Block
	 */
    init: function () {
        //this.setHelpUrl(Blockly.Msg.mpython_HELPURL);
        this.setColour(Blockly.Msg["MATH_HUE"]);
        this.itemCount_ = 1;
        this.updateShape_();
        //this.setOutput(true);
		this.setNextStatement(true);
		this.setPreviousStatement(true);
        this.setMutator(new Blockly.Mutator(['mpython_init_chart_item']));
        this.setTooltip(Blockly.Msg.MPYTHON_INIT_CHART_TOOLTIP);
    },
	/**
	 * Create XML to represent list inputs.
	 * @return {!Element} XML storage element.
	 * @this Blockly.Block
	 */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
	/**
	 * Parse XML to restore the list inputs.
	 * @param {!Element} xmlElement XML storage element.
	 * @this Blockly.Block
	 */
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
	/**
	 * Populate the mutator's dialog with this block's components.
	 * @param {!Blockly.Workspace} workspace Mutator's workspace.
	 * @return {!Blockly.Block} Root block in mutator.
	 * @this Blockly.Block
	 */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('mpython_init_chart_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('mpython_init_chart_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
	/**
	 * Reconfigure this block based on the mutator dialog's components.
	 * @param {!Blockly.Block} containerBlock Root block in mutator.
	 * @this Blockly.Block
	 */
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        if (this.itemCount_ > 4) this.itemCount_ = 4;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
	/**
	 * Store pointers to any connected child blocks.
	 * @param {!Blockly.Block} containerBlock Root block in mutator.
	 * @this Blockly.Block
	 */
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
	/**
	 * Modify this block to have the correct number of inputs.
	 * @private
	 * @this Blockly.Block
	 */
    updateShape_: function () {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.MPYTHON_INIT_CHART_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.setCheck("String").appendField(Blockly.Msg.MPYTHON_INIT_CHART_INPUT_WITH);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};
Blockly.Blocks['mpython_init_chart_item'] = {
	/**
	 * Mutator bolck for adding items.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(Blockly.Msg["MATH_HUE"]);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_INIT_CHART_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MPYTHON_INIT_CHART_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
}

Blockly.Blocks['mpython_init_chart_container'] = {
	/**
	 * Mutator block for list container.
	 * @this Blockly.Block
	 */
    init: function () {
        this.setColour(Blockly.Msg["MATH_HUE"]);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_INIT_CHART_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.MPYTHON_INIT_CHART_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

// 通用红外接收
Blockly.Blocks['mpython_ir_remote_recv'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_MESSAGE0,
			"inputsInline": true,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "pin"
			}, {
                "type": "input_value",
                "name": "address"
            }, {
                "type": "input_value",
                "name": "command"
            }]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

Blockly.Blocks['mpython3_ir_remote_recv'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON3_IR_REMOTE_RECV_MESSAGE0,
			"inputsInline": true,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_IR_REMOTE_RECV_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "pin"
			},
			{
		      	"type": "input_dummy"
		    },
		    {
		      	"type": "input_statement",
		      	"name": "DO"
		    }]
		});
	}
};

/*
function disableIrRemoteBlock(evt, block) {
	if (evt.type == 'ui') return;
	if (evt.type == 'move') {
		var parentBlock = block.getParent();
		var legal = false;
		do {
			if (parentBlock) {
				if ( 'mpython3_ir_remote_recv' == parentBlock.type ) {
					legal = true;
					break;
				}
				parentBlock = parentBlock.getParent();
			} else {
				break;
			}
		}
		while (parentBlock);
		if (legal) {
			block.setEnabled(true);
		} else {
			block.setEnabled(false);
		}		
	}
}
*/

Blockly.Blocks['mpython_ir_remote_address'] = {
	init: function () {
		this.jsonInit({
            "output": null,
			"message0": Blockly.Msg.MPYTHON_IR_REMOTE_ADDRESS_MESSAGE0,
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": '',
			"tooltip": ''
		});
	}/*,
	onchange: function(e) {
		disableIrRemoteBlock(e, this);
	}*/
};

Blockly.Blocks['mpython_ir_remote_message'] = {
	init: function () {
		this.jsonInit({
            "output": null,
			"message0": Blockly.Msg.MPYTHON_IR_REMOTE_MESSAGE_MESSAGE0,
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": '',
			"tooltip": ''
		});
	}/*,
	onchange: function(e) {
		disableIrRemoteBlock(e, this);
	}*/
};

// 通用红外发送
Blockly.Blocks['mpython_ir_remote_send'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_IR_REMOTE_SEND_MESSAGE0,
			"inputsInline": true,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.sensor.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_IR_REMOTE_SEND_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_IR_REMOTE_SEND_TOOLTIP,
			"args0": [{
				//"check": "Number",
				"type": "input_value",
				"name": "pin"
			}, {
				//"check": ["Number", "Array"],
				"type": "input_value",
				"name": "address"
			}, {
				//"check": ["Number", "Array"],
				"type": "input_value",
				"name": "command"
			}]
		});
	}
};


// MLX90615 设置
Blockly.Blocks['mpython_MLX90615_set'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":'Boolean',
            "colour": Blockly.Blocks.sensor.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_MLX90615_SET_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MLX90615_SET_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MLX90615_SET_MESSAGE0,
            "args0": [{
                //"check": "Number",
                "type": "input_value",
                "name": "set"
            }
            ]
        });
    }
};

// MLX90615 获取红外测温修正系数
Blockly.Blocks['mpython_MLX90615_get'] = {
    init: function () {
        this.jsonInit({
            // "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": null,
            "colour": Blockly.Blocks.sensor.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_MLX90615_GET_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MLX90615_GET_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MLX90615_GET_MESSAGE0,
        });
    }
};

// MLX90615 获取红外测温
Blockly.Blocks['mpython_MLX90615_thermometry'] = {
    init: function () {
        this.jsonInit({
            // "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": null,
            "colour": Blockly.Blocks.sensor.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MLX90615_THERMOMETRY_MESSAGE0,
        });
    }
};


//mq135 2021.06.22添加
//mq135
Blockly.Blocks['mpython_mq135_init'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.sensor.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "args0": [{
                    //"check": "Number",
                    "name": "mq135_pin",
                    "type": "input_value"
                }, {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "temperature"
                },{
                    //"check": "Number",
                    "type": "input_value",
                    "name": "humidity"
                }
            ],
            "helpUrl": Blockly.Msg.MPYTHON_MQ135_INIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MQ135_INIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MQ135_INIT_MESSAGE0,
        });
    }
};

Blockly.Blocks['mpython_mq135_options'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.sensor.HUE,
            "output": 'Number',
            "args0": [ {
				"options": [
					// [Blockly.Msg.MPYTHON_MQ135_GET_RZERO, "get_rzero()"],
                    [Blockly.Msg.MPYTHON_MQ135_GET_CORRECTED_PPM, "get_corrected_ppm()"],
					[Blockly.Msg.MPYTHON_MQ135_GET_CORRECTED_RZERO, "get_corrected_rzero()"],
                    // [Blockly.Msg.MPYTHON_MQ135_GET_PPM, "get_ppm()"]
				],
				"type": "field_dropdown",
				"name": "mq135_options"
			}
            ],
            "helpUrl": Blockly.Msg.MPYTHON_MQ135_OPTIONS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MQ135_OPTIONS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MQ135_OPTIONS_MESSAGE0,
        });
    }
};

Blockly.Blocks['mq135_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
			"message0": '%1',
            "args0": [
                {
                    "options": [ ["P0", "0"], ["P1", "1"] ],
                    "type": "field_dropdown",
                    "name": "mq135_pin"
                }
            ]
        });
    }
};


//(实验箱)bme280 温湿度、气压
Blockly.Blocks['mpython_bme280'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.sensor.HUE,
			"args0": [
				{
					"name": "hum_tem_pre",
					"options": [
						[Blockly.Msg.mpython_tem, 'temperature'],
						[Blockly.Msg.mpython_hum, 'humidity'],
						[Blockly.Msg.mpython_pre, 'pressure']
					],
					"type": "field_dropdown"
				}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_bme280_hum_tem_pre_TOOLTIP,
			"message0": "BME280" + Blockly.Msg.mpython_bme280_hum_tem_pre_MESSAGE0,
		});
	}
};

Blockly.Blocks['mpython_bme280_hum_tem_pre'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.sensor.HUE,
			"args0": [
				{
					"name": "hum_tem_pre",
					"options": [
						[Blockly.Msg.mpython_tem, 'temperature'],
						[Blockly.Msg.mpython_hum, 'humidity'],
						[Blockly.Msg.mpython_pre, 'pressure']
					],
					"type": "field_dropdown"
				}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.mpython_bme280_hum_tem_pre_TOOLTIP,
			"message0": Blockly.Msg.mpython_bme280_hum_tem_pre_MESSAGE0,
		});
	}
};

/* 掌控2.0 */
//磁力计 compass 改为 magnetic
//magnetic.calibrate() #校准
//magnetic.get_heading() # 获取方位角
//magnetic.get_x()/y/z
//magnetic.peeling() # 去除当前环境磁场强度
//magnetic.get_field_strength() #获取磁场强度

Blockly.Blocks['mpython_magnetic_calibrate'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAGNETIC_CALIBRATE_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_magnetic_peeling'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAGNETIC_PEELING_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAGNETIC_PEELING_MESSAGE0,
			"nextStatement": null,
			"previousStatement": null
		});
	}
};

Blockly.Blocks['mpython_magnetic_get_axis'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [{
				"name": "axis",
				"options": axis,
				"type": "field_dropdown"
			}
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAGNETIC_GET_AXIS_MESSAGE0
		});
	}
};
Blockly.Blocks['mpython_compass_get_axis'] = Blockly.Blocks['mpython_magnetic_get_axis'];

Blockly.Blocks['mpython_magnetic_get_heading'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAGNETIC_GET_HEADING_MESSAGE0
		});
	}
};
Blockly.Blocks['mpython_compass_get_angle'] = Blockly.Blocks['mpython_magnetic_get_heading'];

Blockly.Blocks['mpython_magnetic_get_field_strength'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"output": "Number",
			"helpUrl": Blockly.Msg.mpython_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAGNETIC_GET_FIELD_STRENGTH_MESSAGE0
		});
	}
};

/*
b signed char (1)
B unsigned char (1)
h short (2)
H unsigned short (2)
i int (4)
I unsigned int (4)
q long long (8)
Q unsigned long long (8)
f float (4)
d double (8)*/

Blockly.Blocks['number_to_bytes'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"output": null,
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": '',
			"tooltip": '',
			"message0": Blockly.Msg.NUMBER_TO_BYTES_MESSAGE0,
			"args0": [
                {
                    "type": "input_dummy"
                },
				{
					"options": [
						[Blockly.Msg.LITTLE_ENDIAN, "<"],  // Little-Endian (Default)
						[Blockly.Msg.BIG_ENDIAN, ">"]  // Big-Endian
					],
					"type": "field_dropdown",
					"name": "ORDER"
				},
                {
					"options": [
						['signed char (1 byte)', "b"],
						['unsigned char (1 byte)', "B"],
						['short (2 bytes)', "h"],
						['unsigned short (2 bytes)', "H"],
						['int (4 bytes)', "i"],
						['unsigned int (4 bytes)', "I"],
						['long long (8 bytes)', "q"],
						['unsigned long long (8 bytes)', "Q"],
						['float (4 bytes)', "f"],
						['double (8 bytes)', "d"]
					],
					"type": "field_dropdown",
					"name": "TYPE"
				},
                {
                    "type": "input_dummy"
                },
                {
                    "align": "RIGHT",
                    //"check": "Number",
                    "type": "input_value",
                    "name": "NUMBER"
                }
			]
		});
	}
};

Blockly.Blocks['bytes_to_number'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"output": null,
			"colour": Blockly.Msg["MATH_HUE"],
			"helpUrl": '',
			"tooltip": '',
			"message0": Blockly.Msg.BYTES_TO_NUMBER_MESSAGE0,
			"args0": [
                {
                    "type": "input_dummy"
                },
				{
					"options": [
						[Blockly.Msg.LITTLE_ENDIAN, "<"],  // Little-Endian (Default)
						[Blockly.Msg.BIG_ENDIAN, ">"]  // Big-Endian
					],
					"type": "field_dropdown",
					"name": "ORDER"
				},
                {
					"options": [
						['signed char (1 byte)', "b"],
						['unsigned char (1 byte)', "B"],
						['short (2 bytes)', "h"],
						['unsigned short (2 bytes)', "H"],
						['int (4 bytes)', "i"],
						['unsigned int (4 bytes)', "I"],
						['long long (8 bytes)', "q"],
						['unsigned long long (8 bytes)', "Q"],
						['float (4 bytes)', "f"],
						['double (8 bytes)', "d"]
					],
					"type": "field_dropdown",
					"name": "TYPE"
				},
                {
                    "type": "input_dummy"
                },
                {
                    "align": "RIGHT",
                    //"check": "Array",
                    "type": "input_value",
                    "name": "DATA"
                }
			]
		});
	}
};

Blockly.Blocks['mpython2_accelerometer_event'] = {
    init: function () {
        this.jsonInit({
			"message0": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_MESSAGE0,
            "inputsInline": true,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TOOLTIP,
			"args0": [
                {
                    "options": [
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_UP, "tilt_up"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_DOWN, "tilt_down"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_LEFT, "tilt_left"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_RIGHT, "tilt_right"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_UP, "face_up"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_DOWN, "face_down"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_SINGLE_CLICK, "single_click"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_DOUBLE_CLICK, "double_click"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FREEFALL, "freefall"]
                    ],
                    "type": "field_dropdown",
                    "name": "ACTION"
                }
            ]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['mpython3_accelerometer_event'] = {
    init: function () {
        this.jsonInit({
			"nextStatement": null,
			"message0": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_MESSAGE0,
            "inputsInline": true,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TOOLTIP,
			"args0": [
                {
                    "options": [
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_UP, "tilt_up"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_DOWN, "tilt_down"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_LEFT, "tilt_left"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_TILT_RIGHT, "tilt_right"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_UP, "face_up"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FACE_DOWN, "face_down"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_SINGLE_CLICK, "single_click"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_DOUBLE_CLICK, "double_click"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_EVENT_FREEFALL, "freefall"]
                    ],
                    "type": "field_dropdown",
                    "name": "ACTION"
                }
            ]
		});
    }
};

Blockly.Blocks['mpython2_accelerometer_angle'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [
                {
                    "options": [
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_ROLL_ANGLE, "roll"],
                        [Blockly.Msg.MPYTHON2_ACCELEROMETER_PITCH_ANGLE, "pitch"]
                    ],
                    "type": "field_dropdown",
                    "name": "TYPE"
                }
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_ACCELEROMETER_ANGLE_MESSAGE0,
		});
	}
};

Blockly.Blocks['mpython2_button_is_pressed'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [
                {
                    "options": [
                        ["A", "a"],
                        ["B", "b"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
			],
			"output": "Boolean",
			"helpUrl": Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_BUTTON_IS_PRESSED_MESSAGE0,
		});
	}
};

Blockly.Blocks['mpython2_button_was_pressed'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [
                {
                    "options": [
                        ["A", "a"],
                        ["B", "b"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
			],
			"output": "Boolean",
			"helpUrl": Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_BUTTON_WAS_PRESSED_MESSAGE0,
		});
	}
};

Blockly.Blocks['mpython2_button_get_presses'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [
                {
                    "options": [
                        ["A", "a"],
                        ["B", "b"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_BUTTON_GET_PRESSES_MESSAGE0,
		});
	}
};

Blockly.Blocks['mpython2_button_event'] = {
    init: function () {
        this.jsonInit({
			"message0": Blockly.Msg.MPYTHON2_BUTTON_EVENT_MESSAGE0,
            "inputsInline": true,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON2_BUTTON_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_BUTTON_EVENT_TOOLTIP,
			"args0": [
                {
                    "options": [
                        ["A", "a"],
                        ["B", "b"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                },
                {
                    "options": [
                        [Blockly.Msg.MPYTHON2_BUTTON_EVENT_PRESSED, "pressed"],
                        [Blockly.Msg.MPYTHON2_BUTTON_EVENT_RELEASED, "released"]
                    ],
                    "type": "field_dropdown",
                    "name": "ACTION"
                }
            ]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['mpython3_button_event'] = {
    init: function () {
        this.jsonInit({
			"nextStatement": null,
			"message0": Blockly.Msg.MPYTHON2_BUTTON_EVENT_MESSAGE0,
            "inputsInline": true,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON2_BUTTON_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_BUTTON_EVENT_TOOLTIP,
			"args0": [
                {
                    "options": [
                        ["A", "a"],
                        ["B", "b"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                },
                {
                    "options": [
                        [Blockly.Msg.MPYTHON2_BUTTON_EVENT_PRESSED, "pressed"],
                        [Blockly.Msg.MPYTHON2_BUTTON_EVENT_RELEASED, "released"]
                    ],
                    "type": "field_dropdown",
                    "name": "ACTION"
                }
            ]
		});
    }
};

Blockly.Blocks['mpython2_touchpad_event'] = {
    init: function () {
        this.jsonInit({
			"message0": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_MESSAGE0,
            "inputsInline": true,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_TOOLTIP,
			"args0": [
                {
                    "options": [
                        ["P", "p"],
                        ["Y", "y"],
                        ["T", "t"],
                        ["H", "h"],
                        ["O", "o"],
                        ["N", "n"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                },
                {
                    "options": [
                        [Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_PRESSED, "pressed"],
                        [Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_RELEASED, "released"]
                    ],
                    "type": "field_dropdown",
                    "name": "ACTION"
                }
            ]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['mpython3_touchpad_event'] = {
    init: function () {
        this.jsonInit({
			"nextStatement": null,
			"message0": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_MESSAGE0,
            "inputsInline": true,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_TOOLTIP,
			"args0": [
                {
                    "options": [
                        ["P", "p"],
                        ["Y", "y"],
                        ["T", "t"],
                        ["H", "h"],
                        ["O", "o"],
                        ["N", "n"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                },
                {
                    "options": [
                        [Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_PRESSED, "pressed"],
                        [Blockly.Msg.MPYTHON2_TOUCHPAD_EVENT_RELEASED, "released"]
                    ],
                    "type": "field_dropdown",
                    "name": "ACTION"
                }
            ]
		});
    }
};

Blockly.Blocks['mpython2_touchpad_threshold'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"nextStatement": null,
			"previousStatement": null,
			"colour": ('X' == SOFTWARE_KEY) ? Blockly.Blocks.loops.HUE : Blockly.Blocks.loops.HUE,
			"helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_TOUCHPAD_THRESHOLD_MESSAGE0,
			"args0": [
                {
                    "options": [
                        ["P", "p"],
                        ["Y", "y"],
                        ["T", "t"],
                        ["H", "h"],
                        ["O", "o"],
                        ["N", "n"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                },
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "VALUE"
                }
			]
		});
	}
};

Blockly.Blocks['mpython2_touchpad_is_pressed'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [
                {
                    "options": [
                        ["P", "p"],
                        ["Y", "y"],
                        ["T", "t"],
                        ["H", "h"],
                        ["O", "o"],
                        ["N", "n"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
			],
			"output": "Boolean",
			"helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_TOUCHPAD_IS_PRESSED_MESSAGE0,
		});
	}
};

Blockly.Blocks['mpython2_touchpad_was_pressed'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [
                {
                    "options": [
                        ["P", "p"],
                        ["Y", "y"],
                        ["T", "t"],
                        ["H", "h"],
                        ["O", "o"],
                        ["N", "n"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
			],
			"output": "Boolean",
			"helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_TOUCHPAD_WAS_PRESSED_MESSAGE0,
		});
	}
};

Blockly.Blocks['mpython2_touchpad_get_presses'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [
                {
                    "options": [
                        ["P", "p"],
                        ["Y", "y"],
                        ["T", "t"],
                        ["H", "h"],
                        ["O", "o"],
                        ["N", "n"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_TOUCHPAD_GET_PRESSES_MESSAGE0,
		});
	}
};

Blockly.Blocks['mpython2_touchpad_value'] = {
	init: function () {
		this.jsonInit({
			"colour": Blockly.Blocks.loops.HUE,
			"args0": [
                {
                    "options": [
                        ["P", "p"],
                        ["Y", "y"],
                        ["T", "t"],
                        ["H", "h"],
                        ["O", "o"],
                        ["N", "n"]
                    ],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
			],
			"output": "Number",
			"helpUrl": Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON2_TOUCHPAD_VALUE_MESSAGE0,
		});
	}
};


// 2021.06.13 v2.3新增六轴陀螺仪
Blockly.Blocks['mpython_gyroscope_get'] = {
    init: function() {
        this.jsonInit({
            "colour": Blockly.Blocks.loops.HUE,
            "args0": [{
                "name": "axis",
                "options": axis,
                "type": "field_dropdown"
            }],
            "output": "Number",
            "helpUrl": Blockly.Msg.mpython_gyroscope_get_HELPURL,
            "tooltip": Blockly.Msg.mpython_gyroscope_get_TOOLTIP,
            "message0": Blockly.Msg.mpython_gyroscope_get_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython_gyroscope_set_range'] = {
    init: function() {
        this.jsonInit({
            "colour": Blockly.Blocks.loops.HUE,
            "args0": [{
                "name": "range",
                "options": [
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_16_DPS, 'RANGE_16_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_32_DPS, 'RANGE_32_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_64_DPS, 'RANGE_64_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_128_DPS, 'RANGE_128_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_256_DPS, 'RANGE_256_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_512_DPS, 'RANGE_512_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_1024_DPS, 'RANGE_1024_DPS'],
                    [Blockly.Msg.MPYTHON_GYROSCOPE_RANGE_2048_DPS, 'RANGE_2048_DPS']
                ],
                "type": "field_dropdown"
            }],
            "helpUrl": Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GYROSCOPE_SET_RANGE_MESSAGE0,
            "nextStatement": null,
            "previousStatement": null
        });
    }
};

Blockly.Blocks['mpython_gyroscope_set_offset'] = {
    init: function() {
        this.jsonInit({
            "colour": Blockly.Blocks.loops.HUE,
            "nextStatement": null,
            "previousStatement": null,
            "args0": [{
                "type": "input_dummy"
            }, {
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
                "name": "z"
            }, ],
            "helpUrl": Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GYROSCOPE_SET_OFFSET_MESSAGE0,
        });
    }
};

// 2021.06.13 v2.3新增六轴陀螺仪 end
