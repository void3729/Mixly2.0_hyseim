//goog.provide('Blockly.Blocks.ble');
//goog.require('Blockly.Blocks');


var BLE_COLOR = "#6A79E8";//D4F2E8 6A7974
var BLE_MASTER_COLOR = "#333399";


// Common
Blockly.Blocks['ble_uuid'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
            "output": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_UUID_HELPURL,
			"tooltip": Blockly.Msg.BLE_UUID_TOOLTIP,
			"message0": 'UUID %1',
			"args0": [
                {
                    "text": "0x181A",
                    "type": "field_input",
                    "name": "VALUE"
                }
            ]
		});
	}
}


// Peripheral
Blockly.Blocks['ble_setup_peripheral'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_SETUP_PERIPHERAL_HELPURL,
			"tooltip": Blockly.Msg.BLE_SETUP_PERIPHERAL_TOOLTIP,
			"message0": Blockly.Msg.BLE_SETUP_PERIPHERAL_MESSAGE0,  // '构建 BLE 外围设备对象 %1 显示名称 %2 Service UUID %3',
			"args0": [
                {
                    "type": "input_dummy"
                }, {
				 	//"check": "String",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "NAME"
                }, {
				 	//"check": "String",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "UUID"
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
}

Blockly.Blocks['ble_add_characteristic'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_ADD_CHARACTERISTIC_HELPURL,
			"tooltip": Blockly.Msg.BLE_ADD_CHARACTERISTIC_TOOLTIP,
			"message0": Blockly.Msg.BLE_ADD_CHARACTERISTIC_MESSAGE0,  // '定义 BLE 属性 %1 %2 Characteristic UUID %3 Read %4 Write %5 Notity %6',
			"args0": [
                {
                    "text": "_c1",
                    "type": "field_input",
                    "name": "NAME"
                }, {
                    "type": "input_dummy"
                }, {
				 	//"check": "String",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "UUID"
                }, {
                    "checked": true,
                    "type": "field_checkbox",
                    "name": "properties_r"
                }, {
                    "checked": true,
                    "type": "field_checkbox",
                    "name": "properties_w"
                }, {
                    "checked": true,
                    "type": "field_checkbox",
                    "name": "properties_n"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_peripheral_advertise'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_HELPURL,
			"tooltip": Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_TOOLTIP,
			"message0": Blockly.Msg.BLE_PERIPHERAL_ADVERTISE_MESSAGE0,  // 'BLE 外围设备 %1',
			"args0": [
                {
                    "options": [
						[Blockly.Msg.BLE_START_BROADCASTING, "True"],
						[Blockly.Msg.BLE_STOP_BROADCASTING, "False"]
					],
                    "type": "field_dropdown",
                    "name": "toggle"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_peripheral_attrubute_read'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
            "output": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_HELPURL,
			"tooltip": Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_TOOLTIP,
			"message0": Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_READ_MESSAGE0,  // '读 BLE 设备的属性 %1',
			"args0": [
                {
                    "text": "_c1",
                    "type": "field_input",
                    "name": "NAME"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_peripheral_attrubute_write'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_HELPURL,
			"tooltip": Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_TOOLTIP,
			"message0": Blockly.Msg.BLE_PERIPHERAL_ATTRUBUTE_WRITE_MESSAGE0,  // '写 BLE 设备的属性 %1 %2 值 %3 Notify %4',
			"args0": [
                {
                    "text": "_c1",
                    "type": "field_input",
                    "name": "NAME"
                }, {
                    "type": "input_dummy"
                }, {
				 	//"check": ["Number", "String"],
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "VALUE"
                }, {
				 	//"check": "Boolean",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "NOTIFY"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_peripheral_disconnect'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_HELPURL,
			"tooltip": Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_TOOLTIP,
			"message0": Blockly.Msg.BLE_PERIPHERAL_DISCONNECT_MESSAGE0  // 'BLE 外围设备断开连接',
		});
	}
};

Blockly.Blocks['ble_peripheral_mac'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": null,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_PERIPHERAL_MAC_HELPURL,
			"tooltip": Blockly.Msg.BLE_PERIPHERAL_MAC_TOOLTIP,
			"message0": Blockly.Msg.BLE_PERIPHERAL_MAC_MESSAGE0  // 'BLE 外围设备 MAC地址',
		});
	}
};

Blockly.Blocks['ble_peripheral_connection_callback']= {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_HELPURL,
			"tooltip": Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_TOOLTIP,
			"message0": Blockly.Msg.BLE_PERIPHERAL_CONNECTION_CALLBACK_MESSAGE0,  // '当 BLE 与中央设备建立连接时 %1 连接句柄 %2 地址类型 %3 中央设备的MAC地址 %4',
			"args0": [
                {
                    "type": "input_dummy"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "conn_handle"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "addr_type"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "addr"
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
}

Blockly.Blocks['ble_peripheral_write_callback']= {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_HELPURL,
			"tooltip": Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_TOOLTIP,
			"message0": Blockly.Msg.BLE_PERIPHERAL_WRITE_CALLBACK_MESSAGE0,  // '当 BLE 设备的属性值被改写时 %1 连接句柄 %2 被写属性句柄 %3 写入的数据 %4',
			"args0": [
                {
                    "type": "input_dummy"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "conn_handle"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "attr_handle"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "data"
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
}


// Centeral
Blockly.Blocks['ble_setup_centeral'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_SETUP_CENTERAL_HELPURL,
			"tooltip": Blockly.Msg.BLE_SETUP_CENTERAL_TOOLTIP,
			"message0": Blockly.Msg.BLE_SETUP_CENTERAL_MESSAGE0,  // '构建 BLE 中央设备对象 显示名称 %1',
			"args0": [
                {
				 	//"check": "String",
				 	"type": "input_value",
                    "name": "NAME"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_centeral_connect'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_CENTERAL_CONNECT_HELPURL,
			"tooltip": Blockly.Msg.BLE_CENTERAL_CONNECT_TOOLTIP,
			"message0": Blockly.Msg.BLE_CENTERAL_CONNECT_MESSAGE0,  // 'BLE 中央设备连接到 %1 %2',
			"args0": [
                {
                    "options": [
						[Blockly.Msg.BLE_INFO_NAME, "name"],
						[Blockly.Msg.BLE_INFO_MAC, "addr"]
					],
                    "type": "field_dropdown",
                    "name": "TYPE"
                },
                {
				 	//"check": "String",
				 	"type": "input_value",
                    "name": "VALUE"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_centeral_is_connected'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": "Boolean",
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_HELPURL,
			"tooltip": Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_TOOLTIP,
			"message0": Blockly.Msg.BLE_CENTERAL_IS_CONNECTED_MESSAGE0  // 'BLE 外围设备已连接 ?'
		});
	}
}

Blockly.Blocks['ble_centeral_def_characteristic'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_HELPURL,
			"tooltip": Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_TOOLTIP,
			"message0": Blockly.Msg.BLE_CENTERAL_DEF_CHARACTERISTIC_MESSAGE0,  // '设定 %1 为 已连接外围设备 属性对象 %2 Service UUID %3 Characteristic UUID %4',
			"args0": [
                {
                    "text": "_c1",
                    "type": "field_input",
                    "name": "NAME"
                }, {
                    "type": "input_dummy"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "Service"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "Characteristic"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_centeral_characteristic_read'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": null,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_HELPURL,
			"tooltip": Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_TOOLTIP,
			"message0": Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_READ_MESSAGE0,  // '读 已连接外围设备的 属性 %1 值',
			"args0": [
                {
                    "text": "_c1",
                    "type": "field_input",
                    "name": "NAME"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_centeral_characteristic_write'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_HELPURL,
			"tooltip": Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_TOOLTIP,
			"message0": Blockly.Msg.BLE_CENTERAL_CHARACTERISTIC_WRITE_MESSAGE0,  // '写 已连接外围设备的 属性 %1 值 %2',
			"args0": [
                {
                    "text": "_c1",
                    "type": "field_input",
                    "name": "NAME"
                }, {
				 	"type": "input_value",
                    "name": "VALUE"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_centeral_notify_callback']= {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_HELPURL,
			"tooltip": Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_TOOLTIP,
			"message0": Blockly.Msg.BLE_CENTERAL_NOTIFY_CALLBACK_MESSAGE0,  // '当 已连接外围设备发起 Notify 通知事件时 %1 属性的值柄 %2 通知的属性值 %3',
			"args0": [
                {
                    "type": "input_dummy"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "value_handle"
                }, {
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "notify_data"
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
}

Blockly.Blocks['ble_centeral_connected_info'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": "Array",
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_HELPURL,
			"tooltip": Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_TOOLTIP,
			"message0": Blockly.Msg.BLE_CENTERAL_CONNECTED_INFO_MESSAGE0,  // '已连接的外围设备 %1',
            "args0": [
                {
                    "options": [
						[Blockly.Msg.BLE_INFO_NAME, "name"],
						[Blockly.Msg.BLE_INFO_MAC, "mac"],
						[Blockly.Msg.BLE_INFO_RSSI, "rssi"],
						[Blockly.Msg.BLE_INFO_ADDRTYPE, "addrType"],
						[Blockly.Msg.BLE_INFO_ADVTYPE, "advType"],
						[Blockly.Msg.BLE_INFO_DATA, "data"]
					],
                    "type": "field_dropdown",
                    "name": "INFO"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_centeral_close'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_CENTERAL_CLOSE_HELPURL,
			"tooltip": Blockly.Msg.BLE_CENTERAL_CLOSE_TOOLTIP,
			"message0": Blockly.Msg.BLE_CENTERAL_CLOSE_MESSAGE0,  // '关闭 BLE UART'
		});
	}
}


// UART
/*
Blockly.Blocks['ble_setup_uart'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_SETUP_UART_HELPURL,
			"tooltip": Blockly.Msg.BLE_SETUP_UART_TOOLTIP,
			"message0": Blockly.Msg.BLE_SETUP_UART_MESSAGE0,  // '构建 BLE UART 对象 %1 显示名称 %2 缓存大小 %3',
			"args0": [
                {
                    "type": "input_dummy"
                }, {
				 	//"check": "String",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "NAME"
                }, {
				 	//"check": "Number",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "RXBUF"
                }
            ]
		});
	}
}*/

Blockly.Blocks['ble_setup_uart'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_SETUP_UART_HELPURL,
			"tooltip": Blockly.Msg.BLE_SETUP_UART_TOOLTIP,
			"message0": Blockly.Msg.BLE_SETUP_UART_MESSAGE0,  // '构建 BLE UART 对象 %1 显示名称 %2 缓存大小 %3',
			"args0": [{
				 	//"check": "String",
				 	"type": "input_value",
                    "name": "NAME"
                }
            ]
		});
	}
}
Blockly.Blocks['ble_setup_uart_master'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_SETUP_UART_MASTER_HELPURL,
			"tooltip": Blockly.Msg.BLE_SETUP_UART_MASTER_TOOLTIP,
			"message0": Blockly.Msg.BLE_SETUP_UART_MASTER_MESSAGE0,  // '构建 BLE UART 对象 %1 显示名称 %2 缓存大小 %3',
			"args0": [
                {
                    "options": [
						[Blockly.Msg.BLE_INFO_NAME, "name"],
						[Blockly.Msg.BLE_INFO_MAC, "addr"]
					],
                    "type": "field_dropdown",
                    "name": "TYPE"
                },
                {
				 	//"check": "String",
				 	"type": "input_value",
                    "name": "VALUE"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_uart_is_connected'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
            "output": "Boolean",
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_IS_CONNECTED_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_IS_CONNECTED_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_IS_CONNECTED_MESSAGE0
		});
	}
}

Blockly.Blocks['ble_uart_any'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
            "output": "Array",
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_ANY_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_ANY_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_ANY_MESSAGE0,  // 'BLE UART 可读字节数量'
		});
	}
}

Blockly.Blocks['ble_uart_irq']= {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_IRQ_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_IRQ_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_IRQ_MESSAGE0,  // '当 BLE UART 接收到数据时',
            "message1": "%1",
            "args1": [
                {
                    "type": "input_statement",
                    "name": "DO"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_uart_received']= {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            // "nextStatement": null,
            // "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_IRQ_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_IRQ_TOOLTIP,
			"args0": [
			{
		      	"type": "input_dummy"
		    },
		    {
		      	"type": "input_statement",
		      	"name": "DO"
		    }],
			"message0": Blockly.Msg.BLE_UART_IRQ_MESSAGE0,  // '当 BLE UART 接收到数据时',
		});
	}
}

function inUartEvent(block) {
	var parentBlock = block.getParent();
	do {
		if (parentBlock) {
			if ( parentBlock.type == 'ble_uart_irq' ) {
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

function disableUartBlock(evt, block) {
	if (evt.type == 'ui') return;
	if (evt.type == 'move') {
		var parentBlock = block.getParent();
		var legal = false;
		do {
			if (parentBlock) {
				if ( ['ble_uart_received', 'ble_uart_irq'].indexOf(parentBlock.type) >= 0 ) {
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

Blockly.Blocks['ble_uart_read'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": "Array",
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_READ_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_READ_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_READ_MESSAGE0/*,   'BLE UART 读取串口 缓存大小 %1',
			"args0": [
                {
				 	//"check": "Number",
				 	"type": "input_value",
                    "name": "SIZE"
                }
            ]*/
		});
	},
	onchange: function(e) {
		disableUartBlock(e, this);
	}
}

Blockly.Blocks['ble_uart_write'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_WRITE_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_WRITE_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_WRITE_MESSAGE0,  // '往 BLE UART 写字节 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "DATA"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_uart_close'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_CLOSE_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_CLOSE_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_CLOSE_MESSAGE0,  // '关闭 BLE UART'
		});
	}
}

/*
// UART 主机
Blockly.Blocks['ble_setup_uart_master'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_SETUP_UART_MASTER_HELPURL,
			"tooltip": Blockly.Msg.BLE_SETUP_UART_MASTER_TOOLTIP,
			"message0": Blockly.Msg.BLE_SETUP_UART_MASTER_MESSAGE0,  // '构建 BLE UART 主机对象 显示名称 %1',
		});
	}
}

Blockly.Blocks['ble_uart_master_connect'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_MASTER_CONNECT_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_MASTER_CONNECT_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_MASTER_CONNECT_MESSAGE0,  // 'BLE UART 主机 连接到 %1 %2',
			"args0": [
                {
                    "options": [
						[Blockly.Msg.BLE_INFO_NAME, "name"],
						[Blockly.Msg.BLE_INFO_MAC, "addr"]
					],
                    "type": "field_dropdown",
                    "name": "TYPE"
                },
                {
				 	//"check": "String",
				 	"type": "input_value",
                    "name": "VALUE"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_uart_master_is_connected'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": "Boolean",
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_MASTER_IS_CONNECTED_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_MASTER_IS_CONNECTED_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_MASTER_IS_CONNECTED_MESSAGE0  // 'BLE 外围设备已连接 ?'
		});
	}
}

Blockly.Blocks['ble_uart_master_irq']= {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_MASTER_IRQ_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_MASTER_IRQ_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_MASTER_IRQ_MESSAGE0,  // '当 BLE UART 接收到数据时',
            "message1": "%1",
            "args1": [
                {
                    "type": "input_statement",
                    "name": "DO"
                }
            ]
		});
	}
}

function inUartMasterEvent(block) {
	var parentBlock = block.getParent();
	do {
		if (parentBlock) {
			if ( parentBlock.type == 'ble_uart_master_irq' ) {
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

function disableUartMasterBlock(evt, block) {
	//if (evt.blockId != block.id) return;
	if (evt.type == 'ui') return;
	if (evt.type == 'move') {
		if (evt.newInputName != 'DO') {
			if (!inUartMasterEvent(block)) {
                block.setDisabled(true);
                return;
            }
		}
		var parentBlock = block.getParent();
		var legal = false;
		do {
			if (parentBlock) {
				if ( parentBlock.type == 'ble_uart_master_irq' ) {
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
			block.setDisabled(false);
		} else {
			block.setDisabled(true);
		}		
	}
}

Blockly.Blocks['ble_uart_master_read'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": "Array",
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_MASTER_READ_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_MASTER_READ_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_MASTER_READ_MESSAGE0,  // 'BLE UART 读取串口',
		});
	},
	onchange: function(e) {
		disableUartMasterBlock(e, this);
	}
}

Blockly.Blocks['ble_uart_master_write'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_MASTER_WRITE_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_MASTER_WRITE_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_MASTER_WRITE_MESSAGE0,  // '往 BLE UART 写字节 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "DATA"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_uart_master_close'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_MASTER_COLOR,
			"helpUrl": Blockly.Msg.BLE_UART_MASTER_CLOSE_HELPURL,
			"tooltip": Blockly.Msg.BLE_UART_MASTER_CLOSE_TOOLTIP,
			"message0": Blockly.Msg.BLE_UART_MASTER_CLOSE_MESSAGE0,  // '关闭 BLE UART'
		});
	}
}*/

// HID
Blockly.Blocks['ble_setup_hid'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_SETUP_HID_HELPURL,
			"tooltip": Blockly.Msg.BLE_SETUP_HID_TOOLTIP,
			"message0": Blockly.Msg.BLE_SETUP_HID_MESSAGE0,  // '构建 BLE HID %1 对象 %2 显示名称 %3 电池电量 %4',
			"args0": [
                {
                    "options": [
						[Blockly.Msg.BLE_HID_MOUSE, "mouse"],
						[Blockly.Msg.BLE_HID_KEYBOARD, "keyboard"],
						[Blockly.Msg.BLE_HID_CONSUMER, "consumer"]
					],
                    "type": "field_dropdown",
                    "name": "TYPE"
                }, {
                    "type": "input_dummy"
                }, {
				 	//"check": "String",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "NAME"
                }, {
				 	//"check": "Number",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "battery_level"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_hid_advertise'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_ADVERTISE_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_ADVERTISE_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_ADVERTISE_MESSAGE0,  // 'BLE HID设备 %1',
			"args0": [
                {
                    "options": [
						[Blockly.Msg.BLE_START_BROADCASTING, "True"],
						[Blockly.Msg.BLE_STOP_BROADCASTING, "False"]
					],
                    "type": "field_dropdown",
                    "name": "toggle"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_hid_connect_event'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_CONNECT_EVENT_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_CONNECT_EVENT_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_CONNECT_EVENT_MESSAGE0,  // 'BLE HID设备 断开连接',
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

Blockly.Blocks['ble_hid_connect'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_CONNECT_EVENT_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_CONNECT_EVENT_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_CONNECT_EVENT_MESSAGE0,  // 'BLE HID设备 断开连接',
		});
	}
};

Blockly.Blocks['ble_hid_disconnect'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            //"output": null,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_DISCONNECT_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_DISCONNECT_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_DISCONNECT_MESSAGE0,  // 'BLE HID设备 断开连接',
		});
	}
};

Blockly.Blocks['ble_hid_battery_level'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": null,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_BATTERY_LEVEL_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_BATTERY_LEVEL_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_BATTERY_LEVEL_MESSAGE0,  // 'BLE HID设备 电池电量',
		});
	}
};

Blockly.Blocks['ble_hid_mouse_buttons'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": null,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_MOUSE_BUTTONS_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_MOUSE_BUTTONS_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_MOUSE_BUTTONS_MESSAGE0,  // '鼠标键 %1',
			"args0": [
                {
                    "options": [
						["LEFT", "Mouse.LEFT"],
						["RIGHT", "Mouse.RIGHT"],
						["MIDDLE", "Mouse.MIDDLE"]
					],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_hid_mouse_click'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_MOUSE_CLICK_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_MOUSE_CLICK_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_MOUSE_CLICK_MESSAGE0,  // 'BLE HID 鼠标 点击按键 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "BUTTON"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_hid_mouse_press'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_MOUSE_PRESS_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_MOUSE_PRESS_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_MOUSE_PRESS_MESSAGE0,  // 'BLE HID 鼠标 点击按键 %1','BLE HID 鼠标 长按按键 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "BUTTON"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_hid_mouse_release'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_MOUSE_RELEASE_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_MOUSE_RELEASE_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_MOUSE_RELEASE_MESSAGE0,  // 'BLE HID 鼠标 释放按键 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "BUTTON"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_hid_mouse_release_all'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_MOUSE_RELEASE_ALL_MESSAGE0,  // 'BLE HID 鼠标 释放所有按键'
		});
	}
};

Blockly.Blocks['ble_hid_mouse_move'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_MOUSE_MOVE_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_MOUSE_MOVE_TOOLTIP,  // 'x, y - 光标移动量,范围 ±127 。\nwheel - 滚轮,范围 ±127 。',
			"message0": Blockly.Msg.BLE_HID_MOUSE_MOVE_MESSAGE0,  // 'BLE HID 鼠标 光标移动 %1 X轴移动量 %2 Y轴移动量 %3 滚轮 %4',
			"args0": [
                {
                    "type": "input_dummy"
                }, {
				 	//"check": "Number",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "X"
                }, {
				 	//"check": "Number",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "Y"
                }, {
				 	//"check": "Number",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "WHEEL"
                }
            ]
		});
	}
};


Blockly.Blocks['ble_hid_keyboard_buttons'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": null,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_KEYBOARD_BUTTONS_MESSAGE0,  // '键盘按键 %1',
			"args0": [
                {
                    "options": [
						["Space", "KeyboardCode.SPACE"],
						["Enter", "KeyboardCode.ENTER"],
						["↑", "KeyboardCode.UP_ARROW"],
						["↓", "KeyboardCode.DOWN_ARROW"],
						["←", "KeyboardCode.LEFT_ARROW"],
						["→", "KeyboardCode.RIGHT_ARROW"],
						["1", "KeyboardCode.ONE"],
						["2", "KeyboardCode.TWO"],
						["3", "KeyboardCode.THREE"],
						["4", "KeyboardCode.FOUR"],
						["5", "KeyboardCode.FIVE"],
						["6", "KeyboardCode.SIX"],
						["7", "KeyboardCode.SEVEN"],
						["8", "KeyboardCode.EIGHT"],
						["9", "KeyboardCode.NINE"],
						["0", "KeyboardCode.ZERO"],
						["A", "KeyboardCode.A"],
						["B", "KeyboardCode.B"],
						["C", "KeyboardCode.C"],
						["D", "KeyboardCode.D"],
						["E", "KeyboardCode.E"],
						["F", "KeyboardCode.F"],
						["G", "KeyboardCode.G"],
						["H", "KeyboardCode.H"],
						["I", "KeyboardCode.I"],
						["J", "KeyboardCode.J"],
						["K", "KeyboardCode.K"],
						["L", "KeyboardCode.L"],
						["M", "KeyboardCode.M"],
						["N", "KeyboardCode.N"],
						["O", "KeyboardCode.O"],
						["P", "KeyboardCode.P"],
						["Q", "KeyboardCode.Q"],
						["R", "KeyboardCode.R"],
						["S", "KeyboardCode.S"],
						["T", "KeyboardCode.T"],
						["U", "KeyboardCode.U"],
						["V", "KeyboardCode.V"],
						["W", "KeyboardCode.W"],
						["X", "KeyboardCode.X"],
						["Y", "KeyboardCode.Y"],
						["Z", "KeyboardCode.Z"],
						["Esc", "KeyboardCode.ESCAPE"],
						["Backspace", "KeyboardCode.BACKSPACE"],
						["Tab", "KeyboardCode.TAB"],
						["Ctrl", "KeyboardCode.CONTROL"],
						["Alt", "KeyboardCode.ALT"],
						["Shift", "KeyboardCode.SHIFT"],
						["CapsLock", "KeyboardCode.CAPS_LOCK"],
						["PgUp", "KeyboardCode.PAGE_UP"],
						["PgDn", "KeyboardCode.PAGE_DOWN"],
						["F1", "KeyboardCode.F1"],
						["F2", "KeyboardCode.F2"],
						["F3", "KeyboardCode.F3"],
						["F4", "KeyboardCode.F4"],
						["F5", "KeyboardCode.F5"],
						["F6", "KeyboardCode.F6"],
						["F7", "KeyboardCode.F7"],
						["F8", "KeyboardCode.F8"],
						["F9", "KeyboardCode.F9"],
						["F10", "KeyboardCode.F10"],
						["F11", "KeyboardCode.F11"],
						["F12", "KeyboardCode.F12"]
					],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_hid_keyboard_send'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_KEYBOARD_SEND_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_KEYBOARD_SEND_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_KEYBOARD_SEND_MESSAGE0,  // 'BLE HID 键盘 按下按键 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "BUTTON"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_hid_keyboard_send_multi'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_KEYBOARD_SEND_MULTI_MESSAGE0,  // 'BLE HID 键盘 同时按下按键 %1 %2 %3',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "BUTTON1"
                }, 
                {
				 	"type": "input_value",
                    "name": "BUTTON2"
                },
                {
				 	"type": "input_value",
                    "name": "BUTTON3"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_hid_keyboard_press'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_KEYBOARD_PRESS_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_KEYBOARD_PRESS_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_KEYBOARD_PRESS_MESSAGE0,  // 'BLE HID 键盘 长按按键 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "BUTTON"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_hid_keyboard_release'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_MESSAGE0,  // 'BLE HID 键盘 释放按键 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "BUTTON"
                }
            ]
		});
	}
};

Blockly.Blocks['ble_hid_keyboard_release_all'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_KEYBOARD_RELEASE_ALL_MESSAGE0,  // 'BLE HID 键盘 释放所有按键'
		});
	}
};


Blockly.Blocks['ble_hid_consumer_buttons'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "output": null,
            //"nextStatement": null,
            //"previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_CONSUMER_BUTTONS_MESSAGE0,  // '遥控器键 %1',
			"args0": [
                {
                    "options": [
						["POWER", "ConsumerCode.POWER"],
						["CHANNEL_UP", "ConsumerCode.CHANNEL_UP"],
						["CHANNEL_DOWN", "ConsumerCode.CHANNEL_DOWN"],
						["RECORD", "ConsumerCode.RECORD"],
						["FAST_FORWARD", "ConsumerCode.FAST_FORWARD"],
						["REWIND", "ConsumerCode.REWIND"],
						["SCAN_NEXT_TRACK", "ConsumerCode.SCAN_NEXT_TRACK"],
						["SCAN_PREVIOUS_TRACK", "ConsumerCode.SCAN_PREVIOUS_TRACK"],
						["STOP", "ConsumerCode.STOP"],
						["EJECT", "ConsumerCode.EJECT"],
						["PLAY_PAUSE", "ConsumerCode.PLAY_PAUSE"],
						["MUTE", "ConsumerCode.MUTE"],
						["VOLUME_DECREMENT", "ConsumerCode.VOLUME_DECREMENT"],
						["VOLUME_INCREMENT", "ConsumerCode.VOLUME_INCREMENT"]
					],
                    "type": "field_dropdown",
                    "name": "BUTTON"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_hid_consumer_send'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_HID_CONSUMER_SEND_HELPURL,
			"tooltip": Blockly.Msg.BLE_HID_CONSUMER_SEND_TOOLTIP,
			"message0": Blockly.Msg.BLE_HID_CONSUMER_SEND_MESSAGE0,  // 'BLE HID 遥控器点击 %1',
			"args0": [
                {
				 	"type": "input_value",
                    "name": "BUTTON"
                }
            ]
		});
	}
};

// iBeacon
Blockly.Blocks['ble_setup_ibeacon'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": false,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_SETUP_IBEACON_HELPURL,
			"tooltip": Blockly.Msg.BLE_SETUP_IBEACON_TOOLTIP,
			"message0": Blockly.Msg.BLE_SETUP_IBEACON_MESSAGE0,  // '构建 BLE iBeacon %1 对象 %2 显示名称 %3 电池电量 %4',
			"args0": [
                {
                    "type": "input_dummy"
                }, {
				 	//"check": "String",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "UUID"
                }, {
				 	//"check": "Number",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "major"
                }, {
				 	//"check": "Number",
                    "align": "RIGHT",
				 	"type": "input_value",
                    "name": "minor"
                }
            ]
		});
	}
}

Blockly.Blocks['ble_ibeacon_advertise'] = {
	init: function () {
		this.jsonInit({
			"inputsInline": true,
            "nextStatement": null,
            "previousStatement": null,
			"colour": BLE_COLOR,
			"helpUrl": Blockly.Msg.BLE_IBEACON_ADVERTISE_HELPURL,
			"tooltip": Blockly.Msg.BLE_IBEACON_ADVERTISE_TOOLTIP,
			"message0": Blockly.Msg.BLE_IBEACON_ADVERTISE_MESSAGE0,  // 'BLE iBeacon设备 %1',
			"args0": [
                {
                    "options": [
						[Blockly.Msg.BLE_START_BROADCASTING, "True"],
						[Blockly.Msg.BLE_STOP_BROADCASTING, "False"]
					],
                    "type": "field_dropdown",
                    "name": "toggle"
                }
            ]
		});
	}
};
