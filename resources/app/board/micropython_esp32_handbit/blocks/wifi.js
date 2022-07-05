//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');


/* wifi */
// 连接
Blockly.Blocks['mpython_init_wifi'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_init_wifi_TOOLTIP,
            "message0": Blockly.Msg.mpython_init_wifi_MESSAGE0,
            "args0": [{
                //"check": "String",
                "type": "input_value",
                "name": "ssid"
            }, {
                //"check": "String",
                "type": "input_value",
                "name": "password"
            }
            ]
        });
    }
};

Blockly.Blocks['mpython3_init_wifi'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_init_wifi_TOOLTIP,
            "message0": Blockly.Msg.mpython_init_wifi_MESSAGE0,
            "args0": [{
                "type": "field_input",
                "name": "ssid"
            }, {
                "type": "field_input",
                "name": "password"
            }
            ]
        });
    }
};

// 以元组形式返回所有wifi配置信息
Blockly.Blocks['mpython_wifi_all_config'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": "Array", //输出type = any
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_WIFI_ALL_CONFIG_MESSAGE0,
        });
    }
};

// 是否连接
Blockly.Blocks['mpython_wifi_isconnected'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "output": 'Boolean',
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_WIFI_ISCONNECTED_MESSAGE0,
        });
    }
};

// wifi 配置 ，IP address, netmask等
Blockly.Blocks['mpython_WiFi_config'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_WiFi_config_TOOLTIP,
            "message0": Blockly.Msg.mpython_WiFi_config_MESSAGE0,
            "output": 'String',
            "args0": [{
                "options": WiFi_config,
                "type": "field_dropdown",
                "name": "WiFi_config"
            }
            ]
        });
    }
};

// 配置静态IP
Blockly.Blocks['mpython_wifi_ifconfig'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_WIFI_IFCONFIG_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_WIFI_IFCONFIG_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_WIFI_IFCONFIG_MESSAGE0,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    //"check": "String",
                    "align": "RIGHT",
                    "type": "input_value",
                    "name": "ADDRESS"
                }, {
                    //"check": "String",
                    "align": "RIGHT",
                    "type": "input_value",
                    "name": "NETMASK"
                }, {
                    //"check": "String",
                    "align": "RIGHT",
                    "type": "input_value",
                    "name": "GATEWAY"
                }, {
                    //"check": "String",
                    "align": "RIGHT",
                    "type": "input_value",
                    "name": "DNS"
                }
            ]
        });
    }
};

// 断开
Blockly.Blocks['mpython_dis_WiFi'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_dis_WiFi_TOOLTIP,
            "message0": Blockly.Msg.mpython_dis_WiFi_MESSAGE0
        });
    }
};

// 信道
Blockly.Blocks['mpython_wifi_channel'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            //"nextStatement": null,
            //"previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": "",
            "tooltip": "",
            "message0": "%1",
            "output": 'Number',
            "args0": [{
                "options": WiFi_channel,
                "type": "field_dropdown",
                "name": "channel"
            }]
        });
    }
};

// 热点
Blockly.Blocks['mpython_enable_APWiFi'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_ENABLE_APWIFI_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_ENABLE_APWIFI_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_ENABLE_APWIFI_MESSAGE0,
            "args0": [{
                //"check": "String",
                "type": "input_value",
                "name": "essid"
            },
			{
                //"check": "String",
                "type": "input_value",
                "name": "password"
            },
			{
                //"check": "Number",
                "type": "input_value",
                "name": "channel"
            }
            ]
        });
    }
};

// 断开
Blockly.Blocks['mpython_disable_APWiFi'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_disable_APWiFi_TOOLTIP,
            "message0": Blockly.Msg.mpython_disable_APWiFi_MESSAGE0
        });
    }
};

// 获取 心知城市天气
Blockly.Blocks['mpython_seniverse_city_weather'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "colour": CategoryColors.Weather,
            "helpUrl": Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SENIVERSE_CITY_WEATHER_MESSAGE0,
            "output": 'Array',
            "args0": [
				{
					"options": [
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_1, "api_1"],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_2, "api_2"],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_API_3, "api_3"]
					],				
					"type": "field_dropdown",
					"name": "api"
				}, {
                    "type": "input_dummy",
				}, {
					//"check": "String",
					"type": "input_value",
					"name": "location"
				}, {
					"type": "field_input",
					"name": "key",
                    "text": "your_private_key"
				}, {
                    "type": "input_dummy",
				}, {
					"options": [
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_LANGUAGE_1, "zh-Hans"],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_LANGUAGE_2, "zh-Hant"]
					],				
					"type": "field_dropdown",
					"name": "language"
				}, {
                    "type": "input_dummy",
				}, {
					"options": [
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_UNIT_1, "c"],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_UNIT_2, "f"]
					],				
					"type": "field_dropdown",
					"name": "unit"
				}
			]
        });
    }
};

// 定义 天气信息对象
Blockly.Blocks['mpython_define_seniverse_weather'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output": null,
            "colour": CategoryColors.Weather,
            "helpUrl": Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_DEFINE_SENIVERSE_WEATHER_MESSAGE0,
            "args0": [
				{
                    "type": "field_input",
                    "name": "var_name",
                    "text": "w1"
                }, {
                    //"check": "Array",
                    "type": "input_value",
                    "name": "info"
                }
            ]
        });
    }
};

// 返回 天气通用字段
Blockly.Blocks['mpython_get_seniverse_weather_info'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": ["String", "Array"],
            "colour": CategoryColors.Weather,
            "helpUrl": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO_MESSAGE0,
            "args0": [
				{
                    "type": "field_input",
                    "name": "var_name",
                    "text": "w1"
                }, {
					"options": [
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_city_name, 'name'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_city_id, 'id'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_country, 'country'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_path, 'path'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_timezone, 'timezone'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_timezone_offset, 'timezone_offset'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_last_update_date, 'last_update_date'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_last_update, 'last_update'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_object, 'object']
					],				
					"type": "field_dropdown",
					"name": "type"
				}
            ]
        });
    }
};

// 返回 天气实况
Blockly.Blocks['mpython_get_seniverse_weather_info1'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": CategoryColors.Weather,
            "helpUrl": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO1_MESSAGE0,
            "args0": [
				{
                    "type": "field_input",
                    "name": "var_name",
                    "text": "w1"
                }, {
					"options": [
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text, 'text'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code, 'code'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_temperature, 'temperature']
					],				
					"type": "field_dropdown",
					"name": "type"
				}
            ]
        });
    }
};

// 返回 3天天气预报
Blockly.Blocks['mpython_get_seniverse_weather_info2'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": CategoryColors.Weather,
            "helpUrl": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO2_MESSAGE0,
            "args0": [
				{
                    "type": "field_input",
                    "name": "var_name",
                    "text": "w1"
                }, {
					"options": [
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_today, '0'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_tomorrow, '1'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_the_day_after_tomorrow, '2']
					],				
					"type": "field_dropdown",
					"name": "date"
				}, {
					"options": [
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_high, 'high'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_low, 'low'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text_day, 'text_day'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code_day, 'code_day'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_text_night, 'text_night'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_code_night, 'code_night'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_direction, 'wind_direction'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_direction_degree, 'wind_direction_degree'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_speed, 'wind_speed'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_wind_scale, 'wind_scale'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_date, 'date']
					],				
					"type": "field_dropdown",
					"name": "type"
				}
            ]
        });
    }
};

// 返回 6项生活指数
Blockly.Blocks['mpython_get_seniverse_weather_info3'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": CategoryColors.Weather,
            "helpUrl": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_GET_SENIVERSE_WEATHER_INFO3_MESSAGE0,
            "args0": [
				{
                    "type": "field_input",
                    "name": "var_name",
                    "text": "w1"
                }, {
					"options": [
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_car_washing, 'car_washing'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_dressing, 'dressing'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_flu, 'flu'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_sport, 'sport'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_travel, 'travel'],
						[Blockly.Msg.MPYTHON_SENIVERSE_WEATHER_uv, 'uv']
					],				
					"type": "field_dropdown",
					"name": "type"
				}
            ]
        });
    }
};

// NTP时间同步
Blockly.Blocks['mpython_ntptime_settime'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_ntptime_settime_TOOLTIP,
            "message0": Blockly.Msg.mpython_ntptime_settime_MESSAGE0,
            "args0": [
                {
                    "name": "timezone",
                    "options": [
                        [Blockly.Msg.mpython_ntptime_timezone_E8, '8'],
                        [Blockly.Msg.mpython_ntptime_timezone_E9, '9'],
                        [Blockly.Msg.mpython_ntptime_timezone_E10, '10'],
                        [Blockly.Msg.mpython_ntptime_timezone_E11, '11'],
                        [Blockly.Msg.mpython_ntptime_timezone_E12, '12'],
                        [Blockly.Msg.mpython_ntptime_timezone_W12, '-12'],
                        [Blockly.Msg.mpython_ntptime_timezone_W11, '-11'],
                        [Blockly.Msg.mpython_ntptime_timezone_W10, '-10'],
                        [Blockly.Msg.mpython_ntptime_timezone_W9, '-9'],
                        [Blockly.Msg.mpython_ntptime_timezone_W8, '-8'],
                        [Blockly.Msg.mpython_ntptime_timezone_W7, '-7'],
                        [Blockly.Msg.mpython_ntptime_timezone_W6, '-6'],
                        [Blockly.Msg.mpython_ntptime_timezone_W5, '-5'],
                        [Blockly.Msg.mpython_ntptime_timezone_W4, '-4'],
                        [Blockly.Msg.mpython_ntptime_timezone_W3, '-3'],
                        [Blockly.Msg.mpython_ntptime_timezone_W2, '-2'],
                        [Blockly.Msg.mpython_ntptime_timezone_W1, '-1'],
                        [Blockly.Msg.mpython_ntptime_timezone_0, '0'],
                        [Blockly.Msg.mpython_ntptime_timezone_E1, '1'],
                        [Blockly.Msg.mpython_ntptime_timezone_E2, '2'],
                        [Blockly.Msg.mpython_ntptime_timezone_E3, '3'],
                        [Blockly.Msg.mpython_ntptime_timezone_E4, '4'],
                        [Blockly.Msg.mpython_ntptime_timezone_E5, '5'],
                        [Blockly.Msg.mpython_ntptime_timezone_E6, '6'],
                        [Blockly.Msg.mpython_ntptime_timezone_E7, '7']
                    ],
                    "type": "field_dropdown"
                },
                {
                    "type": "field_input",
                    "name": "server",
                    "text": "time.windows.com"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython_ntp_server'] = {
    init: function () {
        this.jsonInit({
            "output": "String",
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": '',
            "tooltip": '',
            "message0": '%1',
            "args0": [
                {
                    "name": "SERVER",
                    "options": [
                        ['time.windows.com', '"time.windows.com"'],
                        ['ntp.aliyun.com', '"ntp.aliyun.com"'],
                        ['ntp.ntsc.ac.cn', '"ntp.ntsc.ac.cn"'],
                        ['time.asia.apple.com', '"time.asia.apple.com"'],
                        ['cn.ntp.org.cn', '"cn.ntp.org.cn"'],
                        ['cn.pool.ntp.org', '"cn.pool.ntp.org"'],
                        ['asia.pool.ntp.org', '"asia.pool.ntp.org"'],
                        ['time.google.com', '"time.google.com"'],
                        ['time.cloudflare.com', '"time.cloudflare.com"'],
                        ['time.hko.hk', '"time.hko.hk"'],
                        ['ntp.nict.jp', '"ntp.nict.jp"'],
                        ['time.nist.gov', '"time.nist.gov"'],
                        ['ntp.tuna.tsinghua.edu.cn', '"ntp.tuna.tsinghua.edu.cn"'],
                        ['ntp.neu.edu.cn', '"ntp.neu.edu.cn"'],
                        ['ntp.nc.u-tokyo.ac.jp', '"ntp.nc.u-tokyo.ac.jp"'],
                        ['ntp.ix.ru', '"ntp.ix.ru"']
                    ],
                    "type": "field_dropdown"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython3_ntptime_settime'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_ntptime_settime_TOOLTIP,
            "message0": Blockly.Msg.mpython_ntptime_settime_MESSAGE0,
            "args0": [
                {
                    "name": "timezone",
                    "options": [
                        [Blockly.Msg.mpython_ntptime_timezone_E8, '8'],
                        [Blockly.Msg.mpython_ntptime_timezone_E9, '9'],
                        [Blockly.Msg.mpython_ntptime_timezone_E10, '10'],
                        [Blockly.Msg.mpython_ntptime_timezone_E11, '11'],
                        [Blockly.Msg.mpython_ntptime_timezone_E12, '12'],
                        [Blockly.Msg.mpython_ntptime_timezone_W12, '-12'],
                        [Blockly.Msg.mpython_ntptime_timezone_W11, '-11'],
                        [Blockly.Msg.mpython_ntptime_timezone_W10, '-10'],
                        [Blockly.Msg.mpython_ntptime_timezone_W9, '-9'],
                        [Blockly.Msg.mpython_ntptime_timezone_W8, '-8'],
                        [Blockly.Msg.mpython_ntptime_timezone_W7, '-7'],
                        [Blockly.Msg.mpython_ntptime_timezone_W6, '-6'],
                        [Blockly.Msg.mpython_ntptime_timezone_W5, '-5'],
                        [Blockly.Msg.mpython_ntptime_timezone_W4, '-4'],
                        [Blockly.Msg.mpython_ntptime_timezone_W3, '-3'],
                        [Blockly.Msg.mpython_ntptime_timezone_W2, '-2'],
                        [Blockly.Msg.mpython_ntptime_timezone_W1, '-1'],
                        [Blockly.Msg.mpython_ntptime_timezone_0, '0'],
                        [Blockly.Msg.mpython_ntptime_timezone_E1, '1'],
                        [Blockly.Msg.mpython_ntptime_timezone_E2, '2'],
                        [Blockly.Msg.mpython_ntptime_timezone_E3, '3'],
                        [Blockly.Msg.mpython_ntptime_timezone_E4, '4'],
                        [Blockly.Msg.mpython_ntptime_timezone_E5, '5'],
                        [Blockly.Msg.mpython_ntptime_timezone_E6, '6'],
                        [Blockly.Msg.mpython_ntptime_timezone_E7, '7']
                    ],
                    "type": "field_dropdown"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "server"
                }
            ]
        });
    }
};

// wifi 模拟时钟
Blockly.Blocks['mpython_wifi_clock'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": rgbColor,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_wifi_clock_TOOLTIP,
            "message0": Blockly.Msg.mpython_wifi_clock_MESSAGE0,
            "args0": [
                // {
                // "type": "field_input",
                // "name": "clock_name",
                // "text": "my_clock"
                // },
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

/* wifi */

// UDP 初始化
Blockly.Blocks['mpython_udp_init'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_UDP_INIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UDP_INIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UDP_INIT_MESSAGE0
        });
    }
};

// UDP 发送消息
Blockly.Blocks['mpython_udp_send'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_UDP_SEND_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UDP_SEND_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UDP_SEND_MESSAGE0,
            "args0": [
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "VALUE"
                }
            ]
        });
    }
};

// UDP 发送消息到
Blockly.Blocks['mpython_udp_sendto'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_UDP_SENDTO_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UDP_SENDTO_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UDP_SENDTO_MESSAGE0,
            "args0": [
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "VALUE"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "IP"
                },
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "PORT"
                }
            ]
        });
    }
};

// UDP 收到消息（全局变量）
Blockly.Blocks['mpython_udp_recv'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_UDP_RECV_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UDP_RECV_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UDP_RECV_MESSAGE0
        });
    }
};

function inUdpEvent(block) {
	var parentBlock = block.getParent();
	do {
		if (parentBlock) {
			if ( parentBlock.type == 'mpython_udp_recv_event' ) {
				return true;
			}
			parentBlock = parentBlock.getParent();
		} else {
			break;
		}
	}
	while (parentBlock);
	return false;
}

function disableUdpBlock(evt, block) {
	//if (evt.blockId != block.id) return;
	if (evt.type == 'ui') return;
	if (evt.type == 'move') {
		var parentBlock = block.getParent();
		var legal = false;
		do {
			if (parentBlock) {
				if ( (parentBlock.type == 'mpython3_udp_recv_event') || ( parentBlock.type == 'mpython_udp_recv_event' ) ) {
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

// UDP 收到消息（局部变量）
Blockly.Blocks['mpython_udp_recv_msg'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "String",
            "colour": Blockly.Blocks.network.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_UDP_RECV_MSG_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_UDP_RECV_MSG_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_UDP_RECV_MSG_MESSAGE0
        });
    },
	onchange: function(e) {
		disableUdpBlock(e, this);
	}
};

// UDP 收到消息事件
Blockly.Blocks['mpython_udp_recv_event'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_UDP_RECV_EVENT_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.network.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_UDP_RECV_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_UDP_RECV_EVENT_TOOLTIP
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

Blockly.Blocks['mpython3_udp_recv_event'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_UDP_RECV_EVENT_MESSAGE0,
			// "nextStatement": null,
			// "previousStatement": null,
			"colour": Blockly.Blocks.network.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_UDP_RECV_EVENT_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_UDP_RECV_EVENT_TOOLTIP,
            "args0": [
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

// 返回当前日期字符串
Blockly.Blocks['mpython_wifi_get_date'] = {
    init: function () {
        this.jsonInit({
            "output": "String", 
            "colour": Blockly.Blocks.network.HUE,
            "message0": Blockly.Msg.mpython_wifi_get_date_MESSAGE0
        });
    }
};

// 返回当前时间字符串
Blockly.Blocks['mpython_wifi_get_time'] = {
    init: function () {
        this.jsonInit({
            "output": "String", 
            "colour": Blockly.Blocks.network.HUE,
            "message0": Blockly.Msg.mpython_wifi_get_time_MESSAGE0
        });
    }
};
