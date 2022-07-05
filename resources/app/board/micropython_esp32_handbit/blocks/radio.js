//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');


//  无线广播  接收消息
Blockly.Blocks['mpython_radio_rec'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": null,
            "colour": Blockly.Blocks.communicate.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RADIO_REC_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RADIO_REC_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RADIO_REC_MESSAGE0,
        });
    }
};

//  无线广播  发送 %1
Blockly.Blocks['mpython_radio_send'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.communicate.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RADIO_SEND_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RADIO_SEND_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RADIO_SEND_MESSAGE0,
            "args0": [
                {
                    //"check": "String",
                    "type": "input_value",
                    "name": "send"
                }
            ]
        });
    }
};

//  设无线广播  频道为 %1
Blockly.Blocks['mpython_radio_channel'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.communicate.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RADIO_CHANNEL_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RADIO_CHANNEL_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RADIO_CHANNEL_MESSAGE0,
            "args0": [
                {
                    //"check": "Number",
                    "type": "input_value",
                    "name": "channel"
                }
            ]
        });
    }
};

//  无线广播 %1
Blockly.Blocks['mpython_radio_on_off'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output":null,
            "colour": Blockly.Blocks.communicate.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_RADIO_ON_OFF_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_RADIO_ON_OFF_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_RADIO_ON_OFF_MESSAGE0,
            "args0": [
                {
                    "options": [
                        [Blockly.Msg.LABPLUS_USB_SWITCH_ON, 'on'],
                        [Blockly.Msg.LABPLUS_USB_SWITCH_OFF, 'off']
                    ],
                    "type": "field_dropdown",
                    "name": "on_off"
                }
            ]
        });
    }
};

// radio 收到任意消息
Blockly.Blocks['mpython_radio_recv'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_RADIO_RECV_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.communicate.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_RADIO_RECV_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_RADIO_RECV_TOOLTIP,
			"args0": [{
				"type": "input_value",
				"name": "message"
			}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
}

/*
function disableRadioBlock(evt, block) {
	if (evt.type == 'ui') return;
	if (evt.type == 'move') {
		var parentBlock = block.getParent();
		var legal = false;
		do {
			if (parentBlock) {
				if ( parentBlock.type == 'mpython3_radio_recv' ) {
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

Blockly.Blocks['mpython_radio_msg'] = {
	init: function () {
		this.jsonInit({
            "output": 'String',
			"message0": Blockly.Msg.MPYTHON_RADIO_MSG_MESSAGE0,
			// "nextStatement": null,
			// "previousStatement": null,
			"colour": Blockly.Blocks.communicate.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_RADIO_MSG_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_RADIO_MSG_TOOLTIP,
		});
	}/*,
	onchange: function(e) {
		disableRadioBlock(e, this);
	}*/
}

Blockly.Blocks['mpython3_radio_recv'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON3_RADIO_RECV_MESSAGE0,
			//"nextStatement": null,
			// "previousStatement": null,
			"colour": Blockly.Blocks.communicate.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_RADIO_RECV_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_RADIO_RECV_TOOLTIP,
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
}

// radio 收到特定消息
Blockly.Blocks['mpython_radio_recv_msg'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_RADIO_RECV_MSG_MESSAGE0,
			//"nextStatement": null,
			//"previousStatement": null,
			"colour": Blockly.Blocks.communicate.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_RADIO_RECV_MSG_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_RADIO_RECV_MSG_TOOLTIP,
			"args0": [{
				"type": "field_input",
				"name": "message",
				"text": "on"
			}
			]
		});
		this.appendStatementInput('DO')
			.appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
	}
};

Blockly.Blocks['mpython3_radio_recv_msg'] = {
	init: function () {
		this.jsonInit({
			"message0": Blockly.Msg.MPYTHON_RADIO_RECV_MSG_MESSAGE0,
			// "nextStatement": null,
			// "previousStatement": null,
			"colour": Blockly.Blocks.communicate.HUE,
			"inputsInline": true,
			"helpUrl": Blockly.Msg.MPYTHON_RADIO_RECV_MSG_HELPURL,
			"tooltip": Blockly.Msg.MPYTHON_RADIO_RECV_MSG_TOOLTIP,
			"args0": [{
				"type": "field_input",
				"name": "message",
				"text": "on"
			},
			{
		      	"type": "input_dummy"
		    },
		    {
		      	"type": "input_statement",
		      	"name": "DO"
		    }
			]
		});
	}
};
