//'use strict';

//goog.provide('Blockly.Blocks.mpython');
//goog.require('Blockly.Blocks');

/******************* SIOT *****************/

// 连接 SIoT
Blockly.Blocks['mpython_siot_connect'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            // "output": 'String',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_CONNECT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_CONNECT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_CONNECT_MESSAGE0,
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "align": "RIGHT",
                    "type": "input_value",
                    "name": "CLIENT_ID"
                },
                {
                    "align": "RIGHT",
                    "type": "input_value",
                    "name": "SERVER"
                },
                {
                    "align": "RIGHT",
                    "type": "input_value",
                    "name": "IOT_USER"
                },
                {
                    "align": "RIGHT",
                    "type": "input_value",
                    "name": "IOT_PWD"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython_siot_isconnected'] = {
    init: function () {
        this.jsonInit({
            //"nextStatement": null,
            //"previousStatement": null,
            "output": 'Boolean',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_ISCONNECTED_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython_siot_subscribe'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_HELPURL);
        this.setColour(Blockly.Blocks.iot.HUE);
        this.itemCount_ = 1;
        this.updateShape_();
        //this.setOutput(true);
		this.setNextStatement(true);
		this.setPreviousStatement(true);
        this.setMutator(new Blockly.Mutator(['mpython_siot_subscribe_item']));
        this.setTooltip(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_TOOLTIP);
    },
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('mpython_siot_subscribe_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('mpython_siot_subscribe_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
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
        if (this.itemCount_ > 5) this.itemCount_ = 5;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
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
    updateShape_: function () {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i).setCheck("String").setAlign(Blockly.ALIGN_RIGHT);
                if (i == 0) {
                    input.appendField(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_INPUT_WITH);
                } else {
                    input.appendField(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_ITEM_TITLE + (i+1));
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

Blockly.Blocks['mpython_siot_subscribe_item'] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
}

Blockly.Blocks['mpython_siot_subscribe_container'] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.MPYTHON_SIOT_SUBSCRIBE_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['mpython_siot_disconnect'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
            // "output": 'Boolean',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_DISCONNECT_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_DISCONNECT_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_DISCONNECT_MESSAGE0
        });
    }
};

Blockly.Blocks['mpython_siot_publish'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output": 'Boolean',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_PUBLISH_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_PUBLISH_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_PUBLISH_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "MESSAGE"
                },
                {
                    "options": [
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC1, '1'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC2, '2'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC3, '3'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC4, '4'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC5, '5']
                    ],
                    "type": "field_dropdown",
                    "name": "TOPIC"
                }
            ]
        });
    }
};

function inSiotEvent(block) {
	var parentBlock = block.getParent();
	do {
		if (parentBlock) {
			if ( ( parentBlock.type == 'mpython_siot_receive' ) || ( parentBlock.type == 'mpython_siot_receive_from' ) ) {
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

function disableSiotBlock(evt, block) {
	//if (evt.blockId != block.id) return;
	if (evt.type == 'ui') return;
	if (evt.type == 'move') {
		var parentBlock = block.getParent();
		var legal = false;
		do {
			if (parentBlock) {
				if ( ['mpython3_siot_receive', 'mpython3_siot_receive_from', 'mpython_siot_receive', 'mpython_siot_receive_from'].indexOf(parentBlock.type) >= 0 ) {
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

Blockly.Blocks['mpython_siot_message'] = {
    init: function () {
        this.jsonInit({
            // "inputsInline": false,
            // "nextStatement": null,
            // "previousStatement": null,
            "output": 'String',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_MESSAGE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_MESSAGE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_MESSAGE_MESSAGE0
        });
    },
	onchange: function(e) {
		disableSiotBlock(e, this);
	}
};

Blockly.Blocks['mpython_siot_receive'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            // "nextStatement": null,
            // "previousStatement": null,
            // "output": 'Boolean',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_RECEIVE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_RECEIVE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_RECEIVE_MESSAGE0,
            "args0": [
                {
                    "options": [
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC1, '1'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC2, '2'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC3, '3'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC4, '4'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC5, '5']
                    ],
                    "type": "field_dropdown",
                    "name": "TOPIC"
                }
            ],
            "message1": "%1",
            "args1": [
                {
                    "type": "input_statement",
                    "name": "DO"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython3_siot_receive'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": false,
            "nextStatement": null,
            // "previousStatement": null,
            // "output": 'Boolean',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_RECEIVE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_RECEIVE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_RECEIVE_MESSAGE0,
            "args0": [
                {
                    "options": [
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC1, '1'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC2, '2'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC3, '3'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC4, '4'],
                        [Blockly.Msg.MPYTHON_SIOT_TOPIC5, '5']
                    ],
                    "type": "field_dropdown",
                    "name": "TOPIC"
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

Blockly.Blocks['mpython_siot_publish_to'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
            // "output": 'Boolean',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_PUBLISH_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_PUBLISH_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_PUBLISH_TO_MESSAGE0,
            "args0": [
                {
                    "type": "input_value",
                    "name": "MESSAGE"
                },
                {
                    "type": "input_value",
                    "name": "TOPIC"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython_siot_receive_from'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            // "output": 'Boolean',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_RECEIVE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_RECEIVE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_RECEIVE_FROM_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "TOPIC",
                    "text": ''
                }
            ],
            "message1": "%1",
            "args1": [
                {
                    "type": "input_statement",
                    "name": "DO"
                }
            ]
        });
    }
};

Blockly.Blocks['mpython3_siot_receive_from'] = {
    init: function () {
        this.jsonInit({
            "inputsInline": true,
            // "nextStatement": null,
            // "previousStatement": null,
            // "output": 'Boolean',
            "colour": Blockly.Blocks.iot.HUE,
            "helpUrl": Blockly.Msg.MPYTHON_SIOT_RECEIVE_HELPURL,
            "tooltip": Blockly.Msg.MPYTHON_SIOT_RECEIVE_TOOLTIP,
            "message0": Blockly.Msg.MPYTHON_SIOT_RECEIVE_FROM_MESSAGE0,
            "args0": [
                {
                    "type": "field_input",
                    "name": "TOPIC",
                    "text": ''
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
