'use strict';

goog.provide('Blockly.Blocks.iot');
goog.require('Blockly.Blocks');

Blockly.Blocks.iot.HUE = '#2FAD7A';

Blockly.Blocks['iot_wifi_connect'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ESP32_IOT_CONNECT_WIFI);
    this.appendValueInput('WIFINAME')
    .setCheck(String)
    .appendField(Blockly.Msg.HTML_NAME);
    this.appendValueInput('PASSWORD')
    .setCheck(String)
    .appendField(Blockly.Msg.HTML_PASSWORD);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_ESP32_IOT_WIFI_CONNECT_TOOLTIP);
}
};

Blockly.Blocks['iot_onenet_connect'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")
    .appendField("OneNET" + Blockly.Msg.TUPLE_JOIN);
    this.appendValueInput('CLIENT')
    .setCheck(String)
    .appendField(Blockly.MIXLY_ESP32_ONENET_CLIENT);
    this.appendValueInput('SERVER')
    .setCheck(String)
    .appendField(Blockly.MIXLY_ESP32_ONENET_SERVER);
    this.appendValueInput('USERNAME')
    .setCheck(String)
    .appendField(Blockly.MIXLY_ESP32_ONENET_USERNAME);
    this.appendValueInput('PASSWORD')
    .setCheck(String)
    .appendField(Blockly.MIXLY_ESP32_ONENET_PASSWORD);
    this.appendValueInput('TOPIC')
    .setCheck(String)
    .appendField(Blockly.MIXLY_ESP32_ONENET_TOPIC);
    this.appendValueInput('SUB')
    .appendField(Blockly.MIXLY_ESP32_ONENET_SUB);
    //this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_CONNECT_TOOLTIP);
}
};

Blockly.Blocks['iot_onenet_disconnect'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")
    .appendField("OneNET")
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ESP32_DISCONNECT_ONENET);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_DISCONNECT_TOOLTIP);
}
};

Blockly.Blocks['iot_onenet_check'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")
    .appendField("OneNET")
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ESP32_CHECK_ONENET);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_CHECK_TOOLTIP);
}
};

Blockly.Blocks['iot_onenet_publish_dict'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")
    .appendField("OneNET")
    this.appendValueInput('DICT')
    .appendField(Blockly.MIXLY_ESP32_PUBLISH_ONENET);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ESP32_IOT_ONENET_PRINT_DATA)
    .appendField(new Blockly.FieldCheckbox('TRUE'), 'is_print');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_PUBLISH_DICT_TOOLTIP);
}
};

Blockly.Blocks['iot_onenet_publish'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this Blockly.Block
     */
     init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        this.appendValueInput('VAR')
        .setCheck("var")
        .appendField("OneNET")
        .setAlign(Blockly.ALIGN_RIGHT)
        this.appendDummyInput()
        .appendField(new Blockly.FieldLabel(Blockly.MIXLY_ESP32_PUBLISH_ONENET), 'TIP')
        .setAlign(Blockly.ALIGN_RIGHT)
        this.itemCount_ = 2;
        this.updateShape_();
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['iot_publish_item']));
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_PUBLISH_TOOLTIP);
    },
    /**
     * Create XML to represent list inputs.
     * @return {Element} XML storage element.
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
        var containerBlock =
        workspace.newBlock('iot_publish_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('iot_create_with_item');
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
        var i = 0;
        while (itemBlock) {
            connections[i] = itemBlock.valueConnection_;
            itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
            i++;
        }
        this.itemCount_ = i;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            if (connections[i]) {
                this.getInput('ADD' + i).connection.connect(connections[i]);
            }
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
        // Delete everything.
        if (this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        }
        var keyNames = [];
        for (var i = 0; this.getInput('ADD' + i); i++) {
            //this.getInput('VALUE' + i).removeField("KEY"+i);
            keyNames.push(this.getFieldValue("KEY" + i))
            this.removeInput('ADD' + i);
        }
        // Rebuild block.
        if (this.itemCount_ == 0) {
            //this.getField('TIP')
            //.setText(Blockly.MIXLY_ESP32_PUBLISH_ONENET_EMPTY);
            this.setFieldValue(Blockly.MIXLY_ESP32_PUBLISH_ONENET_EMPTY, 'TIP');
        } else {
            //this.getField('TIP')
            //.setText(Blockly.MIXLY_ESP32_PUBLISH_ONENET);
            this.setFieldValue(Blockly.MIXLY_ESP32_PUBLISH_ONENET, 'TIP');
            for (var i = 0; i < this.itemCount_; i++) {
                this.appendValueInput('ADD' + i)
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(
                    new Blockly.FieldTextInput(
                        keyNames.length > i
                        ? keyNames[i]
                        : '"key'+(i+1)+'"'),
                    'KEY'+i)
                .appendField(":")
            }
        }
    }, getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

Blockly.Blocks['iot_publish_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_MICROBIT_TYPE_DICT);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
}
};


Blockly.Blocks['iot_publish_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.DICTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
}
};

Blockly.Blocks['iot_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
    .appendField(Blockly.Msg.DICTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
}
};


Blockly.Blocks['iot_mixio_connect'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
    .setCheck("var")
    .appendField('MixIO'+Blockly.MIXLY_EMQX_CONNECT);
    this.appendValueInput('SERVER')
    .setCheck(String)
    .appendField(Blockly.MIXLY_EMQX_SERVER);
    this.appendValueInput('USERNAME')
    .setCheck(String)
    .appendField(Blockly.MIXLY_WIFI_USERNAME);
    this.appendValueInput('PASSWORD')
    .setCheck(String)
    .appendField(Blockly.MIXLY_WIFI_PASSWORD);
    this.appendValueInput('PROJECT')
    .setCheck(String)
    .appendField(Blockly.MIXLY_EMQX_PROJECT);
    // this.appendValueInput('SUB')
    // .appendField(Blockly.MIXLY_ESP32_ONENET_SUB);
    //this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
}
};

Blockly.Blocks['IOT_MIXIO_PUBLISH'] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        this.appendValueInput('VAR')
            .setCheck("var")
            .appendField("MixIO")
        this.appendValueInput('TOPIC')
            .appendField(Blockly.MIXLY_EMQX_PUBLISH)
            .appendField(Blockly.MIXLY_EMQX_PUBLISH_TOPIC);
        this.appendValueInput('MSG')
            .appendField(Blockly.MIXLY_EMQX_PUBLISH_MSG);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_PUBLISH_TOOLTIP);
    }
};

Blockly.Blocks["IOT_MIXIO_SUBSCRIBE"] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        this.appendValueInput('VAR')
            .setCheck("var")
            .appendField("MixIO")
        this.appendValueInput('TOPIC')
            .appendField(Blockly.MIXLY_EMQX_SUBSCRIBE+Blockly.MIXLY_EMQX_PUBLISH_TOPIC);
        this.appendValueInput('METHOD')
            .appendField(Blockly.MIXLY_EMQX_SET_METHOD);    
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_SUBSCRIBE_TOOLTIP);
    }
};

Blockly.Blocks['iot_mixio_disconnect'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
        .setCheck("var")
        .appendField("MixIO")
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_DISCONNECT_ONENET);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_DISCONNECT_TOOLTIP);
}
};

Blockly.Blocks['iot_mixio_connect_only'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
        .setCheck("var")
        .appendField("MixIO")
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_EMQX_CONNECT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_DISCONNECT_TOOLTIP);
}
};

Blockly.Blocks['iot_mixio_check'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
        .setCheck("var")
        .appendField("MixIO")
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_ESP32_CHECK_ONENET);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_CHECK_TOOLTIP);
}
};

Blockly.Blocks['iot_mixio_format_topic'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
        .setCheck("var")
        .appendField(Blockly.MIXLY_MICROPYTHON_FORMAT)
        .appendField(Blockly.MQTT_Topic);
    this.setInputsInline(true);
    this.setOutput(true);
}
};

Blockly.Blocks['iot_mixio_format_msg'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
        .setCheck("var")
        .appendField(Blockly.MIXLY_MICROPYTHON_FORMAT)
        .appendField(Blockly.MIXLY_EMQX_PUBLISH_MSG);
    this.setInputsInline(true);
    this.setOutput(true);
}
};

Blockly.Blocks['IOT_FORMATTING'] = {
  init: function () {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
        .appendField(Blockly.MIXLY_ESP32_IOT_MAP_FORMATING);
    this.setOutput(true);
    // this.setTooltip();
  }
};

 Blockly.Blocks['IOT_FORMAT_STRING'] = {
  init: function () {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendValueInput('VAR')
        .appendField(Blockly.MIXLY_MICROPYTHON_FORMAT+'(Json)');
    this.setOutput(true);
    // this.setTooltip();
  }
};

Blockly.Blocks['IOT_EMQX_PING']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendValueInput('VAR')
            .setCheck("var")
            .appendField("MIXIO")
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_PING);   
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_PING_TOOLTIP);
    }
};

Blockly.Blocks['IOT_EMQX_INIT_AND_CONNECT_BY_SHARE_CODE'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH+Blockly.MIXLY_MIXIO_SHARE_KEY)
        .appendField(new Blockly.FieldTextInput('A1B2C3'), 'code');
    this.appendDummyInput()
        .appendField(Blockly.Msg.TUPLE_JOIN+Blockly.Msg.VARIABLES_SET_TAIL)
        .appendField("MixIO");
    this.appendValueInput('VAR')
        .setCheck(String)
        .appendField(Blockly.MIXLY_ESP32_ONENET_CLIENT);    
    this.appendValueInput('SERVER')
        .appendField(Blockly.MIXLY_EMQX_SERVER)
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('PROJECT')
    //     .appendField(Blockly.MIXLY_EMQX_PROJECT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
}
};


Blockly.Blocks['IOT_EMQX_INIT_AND_CONNECT_BY_MIXLY_CODE'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH)
        .appendField("Mixly Key")
        .appendField(new Blockly.FieldTextInput(Mixly.Config.BOARD.visitorId.str32.substring(0,8).toUpperCase()), 'code');
    this.appendDummyInput()
        .appendField(Blockly.Msg.TUPLE_JOIN+Blockly.Msg.VARIABLES_SET_TAIL)
        .appendField("MixIO");
    this.appendValueInput('VAR')
        .setCheck(String)
        .appendField(Blockly.MIXLY_ESP32_ONENET_CLIENT);
    this.appendValueInput('SERVER')
        .appendField(Blockly.MIXLY_EMQX_SERVER)
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('PROJECT')
    //     .appendField(Blockly.MIXLY_EMQX_PROJECT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
}
};


Blockly.Blocks['iot_wificonnect'] = Blockly.Blocks['iot_wifi_connect'];
Blockly.Blocks['iot_onenetconnect'] = Blockly.Blocks['iot_onenet_connect'];
Blockly.Blocks['iot_onenetdisconnect'] = Blockly.Blocks['iot_onenet_disconnect'];
Blockly.Blocks['iot_checkonenet'] = Blockly.Blocks['iot_onenet_check'];
Blockly.Blocks['iot_publish'] = Blockly.Blocks['iot_onenet_publish'];

