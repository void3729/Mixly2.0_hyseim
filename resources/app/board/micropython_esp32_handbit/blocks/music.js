//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');


//音符
Blockly.Blocks['mpython_music_note'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "colour": Blockly.Blocks.actuator.HUE,
            "output": "String",
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.mpython_music_note_TOOLTIP,
            "message0": Blockly.Msg.mpython_music_note_MESSAGE0,
            "args0": [{
                "name": "gamut",
                "options": [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'], ['E', 'E'], ['F', 'F'], ['G', 'G']],
                "type": "field_dropdown"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "num1"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "num2"
            }
            ]
        });
    }
};

/**
引用microbit音乐
*/
Blockly.Blocks['mpython_music_play'] = {
    init: function () {
        this.jsonInit({
            'inputsInline': false,
            "colour": Blockly.Blocks.actuator.HUE,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MUSIC_PLAY_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MUSIC_PLAY_MESSAGE0,
            "args0": [{
                "name": "melody",
                "options": [
					["DADADADUM", "DADADADUM"],
					["ENTERTAINER", "ENTERTAINER"],
					["PRELUDE", "PRELUDE"],
					["ODE", "ODE"],
					["NYAN", "NYAN"],
					["RINGTONE", "RINGTONE"],
					["FUNK", "FUNK"],
					["BLUES", "BLUES"],
					["BIRTHDAY", "BIRTHDAY"],
					["WEDDING", "WEDDING"],
					["FUNERAL", "FUNERAL"],
					["PUNCHLINE", "PUNCHLINE"],
					["PYTHON", "PYTHON"],
					["BADDY", "BADDY"],
					["CHASE", "CHASE"],
					["BA_DING", "BA_DING"],
					["WAWAWAWAA", "WAWAWAWAA"],
					["JUMP_UP", "JUMP_UP"],
					["JUMP_DOWN", "JUMP_DOWN"],
					["POWER_UP", "POWER_UP"],
					["POWER_DOWN", "POWER_DOWN"],
					[Blockly.Msg.MPYTHON_MUSIC_GE_CHANG_ZU_GUO, "GE_CHANG_ZU_GUO"],
					[Blockly.Msg.MPYTHON_MUSIC_DONG_FANG_HONG, "DONG_FANG_HONG"],
					[Blockly.Msg.MPYTHON_MUSIC_CAI_YUN_ZHUI_YUE, "CAI_YUN_ZHUI_YUE"],
					[Blockly.Msg.MPYTHON_MUSIC_ZOU_JIN_XIN_SHI_DAI, "ZOU_JIN_XIN_SHI_DAI"],
					[Blockly.Msg.MPYTHON_MUSIC_MO_LI_HUA, "MO_LI_HUA"],
					[Blockly.Msg.MPYTHON_MUSIC_YI_MENG_SHAN_XIAO_DIAO, "YI_MENG_SHAN_XIAO_DIAO"]
				],
                "type": "field_dropdown"
            },
            {
                //"check": 'Number',
                "type": "input_value",
                "name": "pin"
            }
            ]
        });
    }
};

Blockly.Blocks['mpython_music_play_until_end'] = {
    init: function () {
        this.jsonInit({
            'inputsInline': false,
            "colour": Blockly.Blocks.actuator.HUE,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MUSIC_PLAY_UNTIL_END_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MUSIC_PLAY_UNTIL_END_MESSAGE0,
            "args0": [{
                "name": "melody",
                "options": [
					["DADADADUM", "DADADADUM"],
					["ENTERTAINER", "ENTERTAINER"],
					["PRELUDE", "PRELUDE"],
					["ODE", "ODE"],
					["NYAN", "NYAN"],
					["RINGTONE", "RINGTONE"],
					["FUNK", "FUNK"],
					["BLUES", "BLUES"],
					["BIRTHDAY", "BIRTHDAY"],
					["WEDDING", "WEDDING"],
					["FUNERAL", "FUNERAL"],
					["PUNCHLINE", "PUNCHLINE"],
					["PYTHON", "PYTHON"],
					["BADDY", "BADDY"],
					["CHASE", "CHASE"],
					["BA_DING", "BA_DING"],
					["WAWAWAWAA", "WAWAWAWAA"],
					["JUMP_UP", "JUMP_UP"],
					["JUMP_DOWN", "JUMP_DOWN"],
					["POWER_UP", "POWER_UP"],
					["POWER_DOWN", "POWER_DOWN"],
					[Blockly.Msg.MPYTHON_MUSIC_GE_CHANG_ZU_GUO, "GE_CHANG_ZU_GUO"],
					[Blockly.Msg.MPYTHON_MUSIC_DONG_FANG_HONG, "DONG_FANG_HONG"],
					[Blockly.Msg.MPYTHON_MUSIC_CAI_YUN_ZHUI_YUE, "CAI_YUN_ZHUI_YUE"],
					[Blockly.Msg.MPYTHON_MUSIC_ZOU_JIN_XIN_SHI_DAI, "ZOU_JIN_XIN_SHI_DAI"],
					[Blockly.Msg.MPYTHON_MUSIC_MO_LI_HUA, "MO_LI_HUA"],
					[Blockly.Msg.MPYTHON_MUSIC_YI_MENG_SHAN_XIAO_DIAO, "YI_MENG_SHAN_XIAO_DIAO"]
				],
                "type": "field_dropdown"
            },
            {
                //"check": 'Number',
                "type": "input_value",
                "name": "pin"
            }
            ]
        });
    }
};

Blockly.Blocks['microbit_music_play_built_in'] = {
    init: function () {
        this.jsonInit({
            'inputsInline': false,
            "colour": Blockly.Blocks.actuator.HUE,
            "nextStatement": null,
            "previousStatement": null,
            // "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_HELPURL,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_TOOLTIP,
            "message0": Blockly.Msg.MICROBIT_MUSIC_PLAY_BUILT_IN_MESSAGE0,
            "args0": [{
                "name": "melody",
                "options": [
					["DADADADUM", "DADADADUM"],
					["ENTERTAINER", "ENTERTAINER"],
					["PRELUDE", "PRELUDE"],
					["ODE", "ODE"],
					["NYAN", "NYAN"],
					["RINGTONE", "RINGTONE"],
					["FUNK", "FUNK"],
					["BLUES", "BLUES"],
					["BIRTHDAY", "BIRTHDAY"],
					["WEDDING", "WEDDING"],
					["FUNERAL", "FUNERAL"],
					["PUNCHLINE", "PUNCHLINE"],
					["PYTHON", "PYTHON"],
					["BADDY", "BADDY"],
					["CHASE", "CHASE"],
					["BA_DING", "BA_DING"],
					["WAWAWAWAA", "WAWAWAWAA"],
					["JUMP_UP", "JUMP_UP"],
					["JUMP_DOWN", "JUMP_DOWN"],
					["POWER_UP", "POWER_UP"],
					["POWER_DOWN", "POWER_DOWN"],
					[Blockly.Msg.MPYTHON_MUSIC_GE_CHANG_ZU_GUO, "GE_CHANG_ZU_GUO"],
					[Blockly.Msg.MPYTHON_MUSIC_DONG_FANG_HONG, "DONG_FANG_HONG"],
					[Blockly.Msg.MPYTHON_MUSIC_CAI_YUN_ZHUI_YUE, "CAI_YUN_ZHUI_YUE"],
					[Blockly.Msg.MPYTHON_MUSIC_ZOU_JIN_XIN_SHI_DAI, "ZOU_JIN_XIN_SHI_DAI"],
					[Blockly.Msg.MPYTHON_MUSIC_MO_LI_HUA, "MO_LI_HUA"],
					[Blockly.Msg.MPYTHON_MUSIC_YI_MENG_SHAN_XIAO_DIAO, "YI_MENG_SHAN_XIAO_DIAO"]
				],
                "type": "field_dropdown"
            }
                ,
            // {
            // 	"type": "input_dummy"
            // }
            // ,
            {
                "checked": true,
                "type": "field_checkbox",
                "name": "wait"
            }
                // , 
                // {
                // 	"type": "input_dummy"
                // }
                ,
            {
                "checked": false,
                "type": "field_checkbox",
                "name": "loop"
            }
                ,
            {
                //"check": 'Number',
                "type": "input_value",
                "name": "pin"
            }
            ]
        });
    }
};

//  掌控 music 引脚
Blockly.Blocks['mpython_music_pin_p6'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": "Number",
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_MUSIC_PIN_P6_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MUSIC_PIN_P6_TOOLTIP,
            "message0": "%1",
            "args0": [
                {
                    "options": [
                        [Blockly.Msg.MPYTHON_MUSIC_PIN_P6, "6"], ["P0", "0"], ["P1", "1"], ["P8", "8"], ["P9", "9"], ["P13", "13"], ["P14", "14"], ["P15", "15"], ["P16", "16"], ["P19", "19"], ["P20", "20"]
                    ],
                    "type": "field_dropdown",
                    "name": "music_pin"
                }
            ]
        });
    }
};

Blockly.Blocks['microbit_music_pitch'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.actuator.HUE,
            // "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PITCH_HELPURL,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MICROBIT_MUSIC_PITCH_TOOLTIP,
            "message0": Blockly.Msg.MICROBIT_MUSIC_PITCH_MESSAGE0,
            "args0": [{
                //"check": "Number",
                "type": "input_value",
                "name": "pitch"
            }, {
                "type": "input_dummy"
            }
                ,
            {
                //"check": "Number",
                "type": "input_value",
                "name": "duration"
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

Blockly.Blocks['microbit_music_play_list_of_notes'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "nextStatement": null,
            "previousStatement": null,
            // "helpUrl": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_HELPURL,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_TOOLTIP,
            "message0": Blockly.Msg.MICROBIT_MUSIC_PLAY_LIST_OF_NOTES_MESSAGE0,
            "args0": [
                {
                    //"check": "Array",
                    "type": "input_value",
                    "name": "notes"
                }, {
                    "checked": true,
                    "type": "field_checkbox",
                    "name": "wait"
                }, {
                    "type": "input_dummy"
                }, {
                    "checked": false,
                    "type": "field_checkbox",
                    "name": "loop"
                }, {
                    //"check": 'Number',
                    "type": "input_value",
                    "name": "pin"
                }
            ]
        });
    }
};

Blockly.Blocks['microbit_music_reset'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "nextStatement": null,
            "previousStatement": null,
            // "helpUrl": Blockly.Msg.MICROBIT_MUSIC_RESET_HELPURL,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MICROBIT_MUSIC_RESET_TOOLTIP,
            "message0": Blockly.Msg.MICROBIT_MUSIC_RESET_MESSAGE0
        });
    }
};

Blockly.Blocks['microbit_music_stop'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "nextStatement": null,
            "previousStatement": null,
            // "helpUrl": Blockly.Msg.MICROBIT_MUSIC_STOP_HELPURL,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MICROBIT_MUSIC_STOP_TOOLTIP,
            "message0": Blockly.Msg.MICROBIT_MUSIC_STOP_MESSAGE0,
            "args0": [
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "pin"
                }
            ]
        });
    }
};
/*节拍*/
Blockly.Blocks['microbit_music_set_tempo'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.actuator.HUE,
            // "helpUrl": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_HELPURL,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_TOOLTIP,
            "message0": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_MESSAGE0,
            "args0": [{
                //"check": "Number",
                "type": "input_value",
                "name": "ticks"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "bpm"
            }
            ]
        });
    }
};
/*节拍-播放速度*/
Blockly.Blocks['microbit_music_set_tempo_speed'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.actuator.HUE,
            // "helpUrl": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_HELPURL,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_TOOLTIP,
            "message0": Blockly.Msg.MICROBIT_MUSIC_SET_TEMPO_SPEED_MESSAGE0,
            "args0": [
                // {
                // //"check": "Number",
                // "type": "input_value",
                // "name": "ticks"
                // },
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "bpm"
                }
            ]
        });
    }
};
Blockly.Blocks['microbit_music_get_tempo'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "output": "Array",
            // "helpUrl": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_HELPURL,
            "helpUrl": Blockly.Msg.mpython_HELPURL,
            "tooltip": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_TOOLTIP,
            "message0": Blockly.Msg.MICROBIT_MUSIC_GET_TEMPO_MESSAGE0
        });
    }
};
/**
引用microbit音乐
*/

//播放范围频率
Blockly.Blocks['mpython_music_range_pitch'] = {
    init: function () {
        this.jsonInit({
            "colour": Blockly.Blocks.actuator.HUE,
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "helpUrl": Blockly.Msg.mpython_music_HELPURL,
            "tooltip": Blockly.Msg.mpython_music_range_pitch_TOOLTIP,
            "message0": Blockly.Msg.mpython_music_range_pitch_MESSAGE0,
            "args0": [{
                //"check": "Number",
                "type": "input_value",
                "name": "start"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "end"
            }, {
                //"check": "Number",
                "type": "input_value",
                "name": "step"
            }
                ,
            {
                //"check": "Number",
                "type": "input_value",
                "name": "time"
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

// 播放音符  几几拍
Blockly.Blocks['mpython_music_tone_tempo'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MUSIC_TONE_TEMPO_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "musical_note",
                    //"check": "String"
                }
                ,
                {
                    "type": "input_value",
                    "name": "pin",
                    //"check": "Number"
                }
            ]
        });
    }
};

// 下拉音符对应的频率
Blockly.Blocks['mpython_music_tone'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            'output': 'Number',
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_MUSIC_TONE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MUSIC_TONE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MUSIC_TONE_MESSAGE0,
            "args0": [
                {
                    "name": "music_tone",
                    "options": music_tone_freq,
                    "type": "field_dropdown"
                }
            ]
        });
    }
};

// 下拉音符本身
Blockly.Blocks['mpython_music_musical_note'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_MESSAGE0,
            "args0": [
                {
                    "name": "musical_note",
                    "options": musical_note,
                    "type": "field_dropdown"
                },
                {
                    "name": "music_tick",
                    "options": music_tick,
                    "type": "field_dropdown"
                }
            ],
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            'output': "String",
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MUSIC_MUSICAL_NOTE_TOOLTIP
        });
    }
};

// 下拉节拍
Blockly.Blocks['mpython_music_tick'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            'output': 'Number',
            "colour": Blockly.Blocks.actuator.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_MUSIC_TICK_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_MUSIC_TICK_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_MUSIC_TICK_MESSAGE0,
            "args0": [
                {
                    "name": "music_tick",
                    "options": music_tick,
                    "type": "field_dropdown"
                }
            ]
        });
    }
};