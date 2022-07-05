//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');


//音符本身
var musical_note = [
    ['C3', 'C3'],
    ['C#3', 'C#3'],
    ['D3', 'D3'],
    ['D#3', 'D#3'],
    ['E3', 'E3'],
    ['F3', 'F3'],
    ['F#3', 'F#3'],
    ['G3', 'G3'],
    ['G#3', 'G#3'],
    ['A3', 'A3'],
    ['A#3', 'A#3'],
    ['B3', 'B3'],
    ['C4', 'C4'],
    ['C#4', 'C#4'],
    ['D4', 'D4'],
    ['D#4', 'D#4'],
    ['E4', 'E4'],
    ['F4', 'F4'],
    ['F#4', 'F#4'],
    ['G4', 'G4'],
    ['G#4', 'G#4'],
    ['A4', 'A4'],
    ['A#4', 'A#4'],
    ['B4', 'B4'],
    ['C5', 'C5'],
    ['C#5', 'C#5'],
    ['D5', 'D5'],
    ['D#5', 'D#5'],
    ['E5', 'E5'],
    ['F5', 'F5'],
    ['F#5', 'F#5'],
    ['G5', 'G5'],
    ['G#5', 'G#5'],
    ['A5', 'A5'],
    ['A#5', 'A#5'],
    ['B5', 'B5']
];

//音符对应的音调、频率
var music_tone_freq = [
    ['C3', '131'],
    ['C#3', '139'],
    ['D3', '147'],
    ['D#3', '156'],
    ['E3', '165'],
    ['F3', '175'],
    ['F#3', '185'],
    ['G3', '196'],
    ['G#3', '208'],
    ['A3', '220'],
    ['A#3', '233'],
    ['B3', '247'],
    ['C4', '262'],
    ['C#4', '277'],
    ['D4', '294'],
    ['D#4', '311'],
    ['E4', '330'],
    ['F4', '349'],
    ['F#4', '370'],
    ['G4', '392'],
    ['G#4', '415'],
    ['A4', '440'],
    ['A#4', '466'],
    ['B4', '494'],
    ['C5', '523'],
    ['C#5', '554'],
    ['D5', '587'],
    ['D#5', '622'],
    ['E5', '659'],
    ['F5', '698'],
    ['F#5', '740'],
    ['G5', '784'],
    ['G#5', '831'],
    ['A5', '880'],
    ['A#5', '932'],
    ['B5', '988']
];

var music_tick = [
    ['1/4', '1']
    , ['1/2', '2']
    , ['1', '4']
    , ['2', '8']
];


var usocket_color = 32;
var logic_color = 210;
var mpython_bluebit_color = "#336699";
var list_color = Blockly.Blocks.lists.HUE;
var math_color = 230;
var event_color = 32;
var oled_color = 96;
var buttonColor = 300;
var pinColor = 260;
var rgbColor = 0; //系统资源-颜色
var buzzColor = 192;
var tuple_color = 192;
var dict_color = 32;
var accelerometerColor = 55;
var wifi_color = 160;
var iot_color = 64;
var iot_blynk_color = '#24c48e';
var iot_onenet_color = 64;
var iot_tinyweb_color = 160;
var set_color = 160; //集合
var extend_color = 288;
var bluetooth_color = '#a101e5';
/*
颜色
*/
var purple_red = 328; // 紫红色
var wine_red = rgbColor; // 酒红色
var brown = event_color; // 褐色
var green = oled_color; // 绿色
var light_blue = tuple_color; // 浅蓝色
var purple = pinColor; // 紫色
var light_green = wifi_color; // 浅绿色
var yellow_green = iot_onenet_color; // 黄绿色
var bright_green = iot_blynk_color; // 亮绿色
var bright_purple = extend_color; // 亮紫色
var deep_blue = mpython_bluebit_color; // 深蓝色


var read_digital = [["P0", "0"], ["P1", "1"], ["P2", "2"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var read_analog = [
    ["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3(EXT)", "3"], ["P4(light)", "4"], ["P10(sound)", "10"]
];
var read_analog_1 = [
    ["P1", "1"], ["P0", "0"], ["P2", "2"], ["P3(EXT)", "3"], ["P4(light)", "4"], ["P10(sound)", "10"]
];
var set_digital_state = [['LOW', '0'], ['HIGH', '1']];
var set_digital = [["P0", "0"], ["P1", "1"],  ["P5(button_A)", "5"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P11(button_B)", "11"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var set_digital_1 = [["P1", "1"], ["P0", "0"],  ["P5(button_A)", "5"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var set_analog = [["P0", "0"], ["P1", "1"],  ["P5(button_A)", "5"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P11(button_B)", "11"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var set_analog_1 = [["P1", "1"], ["P0", "0"],  ["P5(button_A)", "5"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var all_pin =
    [
        ["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3(EXT)", "3"], ["P4(light)", "4"], 
        ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"], 
        ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
    ];
var buzz_tone = [['do', '262'], ['re', '294'], ['mi', '330'], ['fa', '349'], ['sol', '392'], ['la', '440'], ['si', '494']];
/*
var pwm_pin = [
    ["P7(掌控板)", "7"],
    ["P8", "8"],
    ["P9(掌控实验箱)", "9"],
    ["P13", "13"],
    ["P14", "14"],
    ["P15", "15"],
    ["P16", "16"]
]*/
var dh11_hum_tem_pin = [ ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]];
var text_color = 160;
var touchPad = [["P", "P"], ["Y", "Y"], ["T", "T"], ["H", "H"], ["O", "O"], ["N", "N"]];
var axis = [["X", "X"], ["Y", "Y"], ["Z", "Z"]];
var WiFi_config = [["IP", "0"], ["netmask", "1"], ["gateway", "2"], ["DNS", "3"]];
var WiFi_channel = [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]];
var button_AB = [["A", "button_a"], ["B", "button_b"]];
var uart_tx_pin = [
    ["P16", "16"], ["P0", "0"], ["P1", "1"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],  ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
];
var uart_rx_pin = [
    ["P15", "15"], ["P0", "0"], ["P1", "1"], ["P2", "2"], ["P3(EXT)", "3"], ["P4(light)", "4"],  ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"], ["P10", "10"],  ["P13", "13"], ["P14", "14"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
];
var i2c_pin = [
     ["P6(buzzer)", "6"], ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"],
     ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"],
    ["P19(SCL)", "19"], ["P20(SDA)", "20"]
];

var output_pin =
    [
        ["P0", "0"], ["P1", "1"],  ["P6(buzzer)", "6"],
        ["P7(RGB)", "7"], ["P8", "8"], ["P9", "9"], 
        ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19(SCL)", "19"], ["P20(SDA)", "20"]
    ];




Blockly.Blocks['i2c_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.I2C_PIN_HELPURL,
            "tooltip": Blockly.Msg.I2C_PIN_TOOLTIP,
            "message0": Blockly.Msg.I2C_PIN_MESSAGE0,
            "args0": [
                {
                    "options": i2c_pin,
                    "type": "field_dropdown",
                    "name": "i2c_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['uart_rx_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.UART_RX_PIN_HELPURL,
            "tooltip": Blockly.Msg.UART_RX_PIN_TOOLTIP,
            "message0": Blockly.Msg.UART_RX_PIN_MESSAGE0,
            "args0": [
                {
                    "options": uart_rx_pin,
                    "type": "field_dropdown",
                    "name": "uart_rx_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['uart_tx_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.UART_TX_PIN_HELPURL,
            "tooltip": Blockly.Msg.UART_TX_PIN_TOOLTIP,
            "message0": Blockly.Msg.UART_TX_PIN_MESSAGE0,
            "args0": [
                {
                    "options": uart_tx_pin,
                    "type": "field_dropdown",
                    "name": "uart_tx_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['dh11_hum_tem_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.DH11_HUM_TEM_PIN_HELPURL,
            "tooltip": Blockly.Msg.DH11_HUM_TEM_PIN_TOOLTIP,
            "message0": Blockly.Msg.DH11_HUM_TEM_PIN_MESSAGE0,
            "args0": [
                {
                    "options": dh11_hum_tem_pin,
                    "type": "field_dropdown",
                    "name": "dh11_hum_tem_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['pwm_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.PWM_PIN_HELPURL,
            "tooltip": Blockly.Msg.PWM_PIN_TOOLTIP,
            "message0": Blockly.Msg.PWM_PIN_MESSAGE0,
            "args0": [
                {
                    "options": [
						[Blockly.Msg.MPYTHON_PWM_PIN_P7, "7"],
						["P8", "8"],
						[Blockly.Msg.MPYTHON_PWM_PIN_P9, "9"],
						["P13", "13"],
						["P14", "14"],
						["P15", "15"],
						["P16", "16"]
					],
                    "type": "field_dropdown",
                    "name": "pwm_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['all_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.ALL_PIN_HELPURL,
            "tooltip": Blockly.Msg.ALL_PIN_TOOLTIP,
            "message0": Blockly.Msg.ALL_PIN_MESSAGE0,
            "args0": [
                {
                    "options": all_pin,
                    "type": "field_dropdown",
                    "name": "all_pin"
                }
            ]
        });
    }
};


Blockly.Blocks['set_digital'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.SET_DIGITAL_HELPURL,
            "tooltip": Blockly.Msg.SET_DIGITAL_TOOLTIP,
            "message0": Blockly.Msg.SET_DIGITAL_MESSAGE0,
            "args0": [
                {
                    "options": set_digital,
                    "type": "field_dropdown",
                    "name": "set_digital"
                }
            ]
        });
    }
};

Blockly.Blocks['set_analog'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.SET_ANALOG_HELPURL,
            "tooltip": Blockly.Msg.SET_ANALOG_TOOLTIP,
            "message0": Blockly.Msg.SET_ANALOG_MESSAGE0,
            "args0": [
                {
                    "options": set_analog,
                    "type": "field_dropdown",
                    "name": "set_analog"
                }
            ]
        });
    }
};

Blockly.Blocks['read_analog_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.READ_ANALOG_PIN_HELPURL,
            "tooltip": Blockly.Msg.READ_ANALOG_PIN_TOOLTIP,
            "message0": Blockly.Msg.READ_ANALOG_PIN_MESSAGE0,
            "args0": [
                {
                    "options": read_analog,
                    "type": "field_dropdown",
                    "name": "read_analog_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['input_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.INPUT_PIN_HELPURL,
            "tooltip": Blockly.Msg.INPUT_PIN_TOOLTIP,
            "message0": Blockly.Msg.INPUT_PIN_MESSAGE0,
            "args0": [
                {
                    "options": all_pin,
                    "type": "field_dropdown",
                    "name": "input_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['output_pin'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'Number',
            "colour": Blockly.Blocks.pins.HUE,
            "helpUrl": Blockly.Msg.OUTPUT_PIN_HELPURL,
            "tooltip": Blockly.Msg.OUTPUT_PIN_TOOLTIP,
            "message0": Blockly.Msg.OUTPUT_PIN_MESSAGE0,
            "args0": [
                {
                    "options": output_pin,
                    "type": "field_dropdown",
                    "name": "output_pin"
                }
            ]
        });
    }
};

function getFirstProvince() {
	for (var key in CITYS_DATA) {
		return key;
	}
	return "";
}

function getCitysByProvince(_province) {
	var arr = [];
	for (var key in CITYS_DATA[_province]) {
		arr.push([key, key]);
	}
	return arr;
}

/*
function getTownsByCity(_province, _city) {
	var arr = [];
	for (var key in CITYS_DATA[_province][_city]) {
		arr.push([key, key]);
	}
	return arr;
}

function getCityInfo(_province, _city, _town, _type) {
	var result = CITYS_DATA[_province][_city][_town][_type];
	result = result.replace(/\//g, ' ');
	var arr = result.split(' ');
	var sp = ("pinyin" == _type) ? ' ' : '';
	if (arr.length == 3) {
		if (arr[2] == arr[1]) {
			return arr[0] + sp + arr[1];
		} else {
			return arr.join(sp);
		}		
	} else if (arr.length == 2) {
		if (arr[1] == arr[0]) {
			return arr[0];
		} else {
			return arr.join(sp);
		}
	} else {
		return '';
	}
}*/

var PROVINCES = [];
for (var key in CITYS_DATA) {
	PROVINCES.push([key, key]);
}

var CITYS = getCitysByProvince(getFirstProvince());

Blockly.Blocks['china_city'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": "",
            "tooltip": "",
            "message0": Blockly.Msg.CHINA_CITY_MESSAGE0,
            "args0": [
                {
					"options": PROVINCES,
                    "type": "field_dropdown",
                    "name": "province"
                },
                {
					"options": CITYS,
                    "type": "field_dropdown",
                    "name": "city"
                }
            ]
        });
    }
};

Blockly.Blocks['china_city_town'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": "",
            "tooltip": "",
            "message0": Blockly.Msg.CHINA_CITY_TOWN_MESSAGE0,
            "args0": [
                {
					"options": PROVINCES,
                    "type": "field_dropdown",
                    "name": "province"
                },
                {
					"options": CITYS,
                    "type": "field_dropdown",
                    "name": "city"
                },
                {
					"options": [["-", "-"]],
                    "type": "field_dropdown",
                    "name": "town"
                },
                {
                    "options": [
						[Blockly.Msg.CHINA_CITY_PINYIN, "pinyin"],
						[Blockly.Msg.CHINA_CITY_CNNAME, "cnname"]
					],
                    "type": "field_dropdown",
                    "name": "type"
                }
            ]
        });
    }
};

const MPYTHON_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsSAAALEgHS3X78AAAFU0lEQVRYhe1YbWxTVRh+bm/be3t7Wdf1Yxsr3VwnZBLmQpFEEdhgZgOFZCFGE3USfxj2gzD+SUICMUSCLsEf/lhEjb8MiRpFDGBkaIBAIqywEGfYYGyjY+3GvmD92tp7zTldL7trS4crCyZ7mpOe85zzvue573vuOfdeRpZlPMvQPNPq/g8CtanIM6dPlXg8ns8DgWDu+vWv7qzbsrXnaQk4c/pUFYCq6ea3s+dSrcHN1VXFGpZtjU5FXblmM+WCExOQpvstuTpavL4IguGYYvfymjLcujOIoeEHKu7y1VsqMansNQwgGEVaDweDmIpFfzvbeq4uYaOkOCFOw2pdgIyR+/cxOjKCqckINCwL90oRFc+Fsfp5Ce+8bobRqKM86TOKRlitOUqbFLPZqGq/4BKo/QpHBA3bTIo9IwMGnkdsagqyLIHV6mprNm/6IUmgLKM+Lg7Q8wbsP3AAh48cgc4g0H5BG4D7xeKIzOZc9PlHUblCVCJzo6MvYyotYghFSy2Tgmi52D8wjsrlhvi8LIvvjh/HocOHIWvYeFrBlCUJnA2Xy4X8/HxaCEQjB59/TF9o5VbR1IfjiSf9hUuLaN1kMqHY6QTP89BzglIn0Op0gBTVJezBsKoZA4FASh1pBTY2NtLi9/tp++8eDcKTEtPRedckLLGh/eYE5etqa9HQ8AG6uv1Y5SzAnqY9sNtsGBrToGlvE60T3L6npfYXr3SZBNGMy+2P1mttbS0OHjyYUodyk2yqqmrScdzRdILTgUSQ5zj09vXBlcMjmmuHf3AQHMch12Si9XA4/EQ+pWi0/ffW1kqk22ZmYo3bjbVr16pJWUbK8ycdn4b1DQzg519OPnb+jAIdDgccy5bhq2PHnjgSj4Pdbkd1dXXGcRkFEnja2tB9507WxBF4vd45CVw8i+eLJIFk/yPlmRVI9qN0e9LThCiK2LVrFyoqKlSzJN0kPp9vwcURlJaWor6+nmbvusej8EkCm5ubF1obRXd3N1paWnDp0iUVr0oxORVEo0BL4gxeKKx02jHefgEby52qGee0Dy4E7BYz8kISzIUF6QXSB4PpyCUeEghWu93weDxZP0lm4uSFtnjrqvrhPSmCM4UlYLVa8dG+fVkTl8A/HR0ZxyyeJPNFxpskGAjMKRX/BX29vRmtMgo8e+4c2q5dy+go3ReKx325iEajGf1mFChJEoaHhzM6InAWcNi+MQ/fnPAr7yzzRVbX4JuvWcc7ewLNb9fZsuYzqwIv33hoKneJu4+fGcqaT1WKi5dyMPJqzT0DEZQUcrQ+EZQgChrKGXkWNrN6hVy/OYGu3hBny9NRPzEZYJm4D5tZl9J3Kr7XG1TeSVU90aAXroIJ7P/QQYuv/yYVR/4b3jCh8a18hB70YMs6M97daqb1mWMJr5fvoaIkSLmd223468oV6sNmHINVHE7yTeYkNjP5smKDIaFJ9dr58W7X0fJSg+pqDn3ppYb0ygYiKC7k8OPZEQgGDZY7ebiW8egfnEQ0JuPX82PY9FIOiA8yVq9jUGjVUx87aiyUJ/XyUgE7avIUnkSx5XsfNrhzaDny9d3bn35xoiwpxU8CcvVEHI18TKbCCyy6R8tlelnMRkd3aJrJU3qGRqcoT4TPhiKQYfCTlsUnAAy374ah1TLKuuvsCYHjNNCyzJwv4XzbQ2hZ4JXKJSq+YZsNs7M0G3o905+glDXY+sefvTki+1koIkkkMiQCpAg8sLzEQOtFdj0dS75CqV7Rp6sz+Q3uJSjKj48ne2mCr1uXq0Q3wZOfFItRe9/9yYd733O8rwRu8Rv1PLEocF4A8C/hIf563CPoigAAAABJRU5ErkJggg==";

Blockly.Blocks['mpython_main'] = {
    init: function() {
        this.setColour(Blockly.Blocks.base.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(MPYTHON_ICON, 18, 18))
            .appendField(Blockly.Msg.MPYTHON_MAIN_MESSAGE0);
        this.setNextStatement(true, null);
    }/*
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
			"colour": Blockly.Blocks.base.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_MAIN_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_MAIN_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_MAIN_MESSAGE0,
		});
	}*/
};
