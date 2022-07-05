//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');

//开始录音 录音时长
Blockly.Blocks['mpython_audio_start_recording'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_START_RECORDING_MESSAGE0,
            "args0": [
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "volume"
                }
            ]
        });
    }
};

//录音结果
Blockly.Blocks['mpython_audio_recording_result'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_RECORDING_RESULT_MESSAGE0,
        });
    }
};

//获取录音
Blockly.Blocks['mpython_audio_discern_recording'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_MESSAGE0,
            "args0": [
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "variables"
                }
            ]
        });
    }
};

//识别录音结果
Blockly.Blocks['mpython_audio_discern_recording_result'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_DISCERN_RECORDING_RESULT_MESSAGE0,
        });
    }
};

//  设音频音量 %1
Blockly.Blocks['mpython_audio_set_volume'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_SET_VOLUME_MESSAGE0,
            "args0": [
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "volume"
                }
            ]
        });
    }
};

//  'TTS 语音播放 %1
Blockly.Blocks['mpython_audio_xunfei_tts'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_MESSAGE0,
            "args0": [
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "TEXT"
                }
            ]
        });
    }
};

//  'TTS 语音配置 APPID %1 API KEY %2
Blockly.Blocks['mpython_audio_xunfei_tts_config'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_XUNFEI_TTS_CONFIG_MESSAGE0,
            "args0": [
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "APPID"
                }
                ,
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "API_KEY"
                }
            ]
        });
    }
};

//  '掌控扩展板 音频 播放  %1
Blockly.Blocks['mpython_audio_play'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_PLAY_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_PLAY_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_PLAY_MESSAGE0,
            "args0": [
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "url"
                }
            ]
        });
    }
};

//  '掌控扩展板 音频  %1
Blockly.Blocks['mpython_audio_cmd'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_CMD_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_CMD_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_CMD_MESSAGE0,
            "args0": [
                {
                    "options": [
                        [Blockly.Msg.PAUSE, "pause"],
                        [Blockly.Msg.PLAY, "resume"],
                        [Blockly.Msg.STOP, "stop"]
                    ],
                    "type": "field_dropdown",
                    "name": "cmd"
                }
            ]
        });
    }
};

//  '掌控扩展板 音频播放 釋放緩存
Blockly.Blocks['mpython_audio_deinit'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_DEINIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_DEINIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_DEINIT_MESSAGE0,
        });
    }
};

//  '音频播放初始化
Blockly.Blocks['mpython_audio_init'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_INIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_INIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_INIT_MESSAGE0,
        });
    }
};

// 录音功能 初始化
Blockly.Blocks['mpython_record_init'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RECORD_INIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RECORD_INIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RECORD_INIT_MESSAGE0,
        });
    }
};

// 录音功能 释放缓存
Blockly.Blocks['mpython_record_deinit'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RECORD_DEINIT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RECORD_DEINIT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RECORD_DEINIT_MESSAGE0
        });
    }
};

// 录音功能 录制wav音频 
Blockly.Blocks['mpython_record_wav'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RECORD_WAV_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RECORD_WAV_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RECORD_WAV_MESSAGE0,
			"args0": [
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "file_name"
                },
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "record_time"
                }
            ]
        });
    }
};

// AI
Blockly.Blocks['mpython_asr'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			// "nextStatement": null,
			// "previousStatement": null,
			"output": 'String',
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.MPYTHON_ASR_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_ASR_TOOLTIP,
			"message0": Blockly.Msg.MPYTHON_ASR_MESSAGE0,
			"args0": [
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "record_time"
                }
            ]
		});
	}
};


// 讯飞语音合成
Blockly.Blocks['xunfei_speech_tts'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.XUNFEI_SPEECH_TTS_HELPURL,
			"tooltip": Blockly.Msg.XUNFEI_SPEECH_TTS_TOOLTIP,
			"message0": Blockly.Msg.XUNFEI_SPEECH_TTS_MESSAGE0,
			"args0": [
                {
					"type": "input_dummy"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "APPID"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "APISecret"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "APIKey"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "Text"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "AudioFile"
                }
			]
		});
	}
};

// 讯飞语音识别
Blockly.Blocks['xunfei_speech_iat'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
			"nextStatement": null,
			"previousStatement": null,
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.XUNFEI_SPEECH_IAT_HELPURL,
			"tooltip": Blockly.Msg.XUNFEI_SPEECH_IAT_TOOLTIP,
			"message0": Blockly.Msg.XUNFEI_SPEECH_IAT_MESSAGE0,
			"args0": [
                {
					"type": "input_dummy"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "APPID"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "APISecret"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "APIKey"
                },
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "AudioFile"
                }
			]
		});
	}
};

// 讯飞语音识别结果（文字）
Blockly.Blocks['xunfei_speech_iat_result'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
			"output": "String",
			"colour": Blockly.Blocks.actuator.HUE,
			"helpUrl": Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_HELPURL,
			"tooltip": Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_TOOLTIP,
			"message0": Blockly.Msg.XUNFEI_SPEECH_IAT_RESULT_MESSAGE0
		});
	}
};

//  '掌控扩展板 音频 选择播放
Blockly.Blocks['mpython_audio_play_choose'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_AUDIO_PLAY_CHOOSE_MESSAGE0,
            "args0": [
                {
                    "options": [
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_pullingtradish_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/32.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_twotigers_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/33.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_Pianodarkmelodies_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/20.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_miaow_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/21.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_bark_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/22.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_Arichpercussivesound_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/23.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_Soundeffectsfortension_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/24.mp3'"],
                        //[Blockly.Msg.MPYTHON_AUDIO_PLAY_chirp_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/19.mp3'"],
                        //[Blockly.Msg.MPYTHON_AUDIO_PLAY_Camerashuttersound_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/25.mp3'"],
                        //[Blockly.Msg.MPYTHON_AUDIO_PLAY_Cricketscry_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/27.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_Hundredsofflies_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/26.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_Shakethebassline_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/28.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_audiencecheeredandclapped_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/29.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_Cruiseshipwhistle_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/30.mp3'"],
                        [Blockly.Msg.MPYTHON_AUDIO_PLAY_Moderntelephoneringtone_MESSAGE0, "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/31.mp3'"],
                        ["1", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/01_1.mp3'"],
                        ["2", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/02_2.mp3'"],
                        ["3", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/03_3.mp3'"],
                        ["4", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/04_4.mp3'"],
                        ["5", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/05_5.mp3'"],
                        ["6", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/06_6.mp3'"],
                        ["7", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/07_7.mp3'"],
                        ["8", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/08_8.mp3'"],
                        ["9", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/09_9.mp3'"],
                        ["10", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/10_10.mp3'"],
                        ["do", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/11_do.mp3'"],
                        ["re", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/12_re.mp3'"],
                        ["mi", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/13_mi.mp3'"],
                        ["fa", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/14_fa.mp3'"],
                        ["so", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/15_so.mp3'"],
                        ["la", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/16_la.mp3'"],
                        ["xi", "'http://steamaker.oss-cn-shenzhen.aliyuncs.com/test/17_xi.mp3'"],
                    ],
                    "type": "field_dropdown",
                    "name": "cmd"
                }
            ]
        });
    }
};
