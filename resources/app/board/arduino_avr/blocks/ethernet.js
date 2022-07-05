'use strict';
goog.provide('Blockly.Blocks.ethernet');
goog.require('Blockly.Blocks');
Blockly.Blocks.ethernet.HUE = 0;

Blockly.Blocks['ethernet_init_begin'] = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_BEGIN)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ETHERNET, 'Ethernet'],[Blockly.MIXLY_ETHERNET2,'Ethernet2']]), "Ethernet");
    this.appendValueInput('MAC')
    .setCheck(Array)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ETHERNET_MAC_ADDRESS);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_INIT);
  }
};

Blockly.Blocks['ethernet_mac_address']={
	init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput('DE'), 'VAR1')
    .appendField('-')
    .appendField(new Blockly.FieldTextInput('AD'), 'VAR2')
    .appendField('-')
    .appendField(new Blockly.FieldTextInput('BE'), 'VAR3')
    .appendField('-')
    .appendField(new Blockly.FieldTextInput('EF'), 'VAR4')
    .appendField('-')
    .appendField(new Blockly.FieldTextInput('FE'), 'VAR5')
    .appendField('-')
    .appendField(new Blockly.FieldTextInput('ED'), 'VAR6');
    this.setOutput(true, Array);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_MACADDRESS);
  }
}

Blockly.Blocks['ethernet_init_local_ip'] = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_LOCALIP);
    this.setOutput(true, 'IPAddress');
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_LOCALIP);
  }
};

Blockly.Blocks['ethernet_client_connect_server']={
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_CONNECT_SERVER)
    .appendField(this.newQuote_(true))
    .appendField(new Blockly.FieldTextInput('mixly.org'), 'SERVER')
    .appendField(this.newQuote_(false));
    this.appendValueInput('PORT')
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_PORT);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_CONNECT);
  },
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
}

Blockly.Blocks['ethernet_client_stop'] = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_STOP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_STOP);
  }
};

Blockly.Blocks['ethernet_client_connected'] = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_CONNECTED);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_CONNECTED);
  }
};

Blockly.Blocks['ethernet_client_available'] = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_AVAILABLE);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_CLIENT_AVAILABLE);
  }
};

Blockly.Blocks['ethernet_client_print'] = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendValueInput('TEXT')
    .setCheck(String)
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_PRINT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_CLIENT_PRINT);
  }
};

Blockly.Blocks['ethernet_client_println'] = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendValueInput('TEXT')
    .setCheck(String)
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_PRINTLN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_CLIENT_PRINTLN);
  }
};

Blockly.Blocks['ethernet_client_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_READ);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_CLIENT_READ);
  }
};

Blockly.Blocks['ethernet_client_get_request']={
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_GET_REQUEST);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_URL)
    .appendField(this.newQuote_(true))
    .appendField(new Blockly.FieldTextInput(''), 'URL')
    .appendField(this.newQuote_(false));
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_SERVER)
    .appendField(this.newQuote_(true))
    .appendField(new Blockly.FieldTextInput(''), 'SERVER')
    .appendField(this.newQuote_(false));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_ETHERNET_GET_REQUEST);
  },
  newQuote_: function(open) {
    if (open == this.RTL) {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==';
    } else {
      var file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC';
    }
    return new Blockly.FieldImage(file, 12, 12, '"');
  }
}


Blockly.Blocks.NTP_server = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.NTP_SERVER);
    this.appendValueInput("server_add")
    .appendField(Blockly.blynk_SERVER_ADD)
    .setCheck(String);
    this.appendValueInput("timeZone")
    .appendField(Blockly.MIXLY_TimeZone)
    .setCheck(Number);
    this.appendValueInput("Interval")
    .appendField(Blockly.blynk_WidgetRTC_setSyncInterval )
    .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};
//传感器-实时时钟块_时间变量
var NTP_TIME_TYPE = [
[Blockly.MIXLY_YEAR, "NTP.getDateYear()"],
[Blockly.MIXLY_MONTH, "NTP.getDateMonth()"],
[Blockly.MIXLY_DAY, "NTP.getDateDay()"],
[Blockly.MIXLY_HOUR, "NTP.getTimeHour24()"],
[Blockly.MIXLY_MINUTE, "NTP.getTimeMinute()"],
[Blockly.MIXLY_SECOND, "NTP.getTimeSecond()"],
[Blockly.MIXLY_WEEK, "NTP.getDateWeekday()"]
];
//传感器-实时时钟块_获取时间
Blockly.Blocks.NTP_server_get_time = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.NTP_server_get_time);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldDropdown(NTP_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.MQTT_server = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../common/media/blynk/iot.png", 20, 20))
    .appendField(Blockly.MQTT_SERVER);
    this.appendValueInput("server_add")
    .appendField(Blockly.MQTT_SERVER_ADD)
    .setCheck(String);
    this.appendValueInput("server_port")
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_PORT)
    .setCheck(Number);
    this.appendValueInput("IOT_ID")
    .appendField(Blockly.MIXLY_EMQX_USERNAME)
    .setCheck(String);
    this.appendValueInput("IOT_PWD", String)
    .appendField(Blockly.Msg.HTML_PASSWORD)
    .setCheck([String, Number]);
    this.appendValueInput("Client_ID")
    .appendField(Blockly.MQTT_Client_ID)
    .setCheck(String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//WIFI信息
Blockly.Blocks.WIFI_info = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../common/media/blynk/iot.png", 20, 20))
    .appendField(Blockly.MIXLY_NETWORK_INIT);
    this.appendValueInput("SSID")
    .appendField(Blockly.Msg.HTML_NAME);
    this.appendValueInput("PWD")
    .appendField(Blockly.Msg.HTML_PASSWORD);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

Blockly.Blocks['network_connect'] = {
  init: function() {
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ESP32_NETWORK_CONNECT);
    this.appendValueInput('id')
    .setCheck(String)
    .appendField(Blockly.Msg.HTML_NAME);
    this.appendValueInput('password')
    .setCheck(String)
    .appendField(Blockly.Msg.HTML_PASSWORD);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_NETWORK_CONNECT_TOOLTIP);
  }
};

Blockly.Blocks['network_wifi_connect'] = {
  init: function() {
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_NETWORK_WIFI_CONNECT);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_ESP32_NETWORK_WIFI_CONNECT_TOOLTIP);
  }
};

Blockly.Blocks['network_get_connect'] = {
  init: function() {
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendDummyInput()  
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_GET+Blockly.MIXLY_DEVICE)
    .appendField(new Blockly.FieldDropdown([["MAC","MAC"],["IP","IP"]]), "mode")
    .appendField(Blockly.MQTT_SERVER_ADD);
    this.setOutput(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['MQTT_connect'] = {
  init: function() {
    this.setColour(Blockly.Blocks.storage.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MQTT_connect);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
  }
};
var Topic_validator = function(newValue) {
  return newValue.replace(/\//g, '');
};

//MQTT-发送消息到topic
Blockly.Blocks.MQTT_publish = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../common/media/blynk/iot.png", 20, 20))
    .appendField(Blockly.MQTT_publish);
    this.appendValueInput("data");
    this.appendDummyInput("")
    .appendField(Blockly.LANG_MATH_RANDOM_INT_INPUT_TO);
    this.appendDummyInput()
    .appendField(Blockly.MQTT_Topic)
    .appendField(new Blockly.FieldTextInput('Topic', Topic_validator),"Topic");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(" ");
    this.setHelpUrl();
  }
};

Blockly.Blocks.MQTT_subscribe_value = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MQTT_Topic)
    .appendField(new Blockly.FieldTextInput('Topic_0', Topic_validator),"Topic_0");
    this.appendDummyInput("")
    .appendField(Blockly.Msg.HTML_VALUE)
    this.setInputsInline(true);
    this.setOutput(true, String);
  }
};
Blockly.Blocks['MQTT_add_subscribe_topic'] = {
  /**
   * Mutator bolck for else-if condition.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MQTT_Topic);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['MQTT_subscribe'] = {
  /**
   * Block for if/elseif/else condition.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_MICROBIT_JS_CURRENT)
    .appendField(Blockly.MQTT_Topic+Blockly.MQTT_subscribe2)
    .appendField(new Blockly.FieldTextInput('Topic_0', Topic_validator),"Topic_0");
    this.appendStatementInput('DO0')
    .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setMutator(new Blockly.Mutator(['MQTT_add_subscribe_topic']));
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      if (!thisBlock.elseifCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      } else if (thisBlock.elseifCount_) {
        return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
      }
    });
    this.elseifCount_ = 0;
  },
  /**
   * Create XML to represent the number of else-if and else inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
   mutationToDom: function() {
    if (!this.elseifCount_ && !this.elseCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.elseifCount_) {
      container.setAttribute('elseif', this.elseifCount_);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and else inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
   domToMutation: function(xmlElement) {
    var containerBlock = this;
    var valueConnections = [];
    var statementConnections = [];
    var elseStatementConnection = null;
    for (var i = this.elseifCount_; i > 0; i--) {
      this.removeInput('DummyInput' + i);
      if(containerBlock.getInputTargetBlock('DO' + i) && containerBlock.getInputTargetBlock('DO' + i).previousConnection)
        statementConnections[i] = (containerBlock.getInputTargetBlock('DO' + i).previousConnection);
      else
        statementConnections[i] = null;
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10);
    //this.compose(containerBlock);
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendDummyInput('DummyInput' + i)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_MICROBIT_JS_CURRENT)
      .appendField(Blockly.MQTT_Topic+Blockly.MQTT_subscribe2)
      .appendField(new Blockly.FieldTextInput('Topic_'+ i, Topic_validator),"Topic_"+ i);
      this.appendStatementInput('DO' + i)
      .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    }
    for(var i = statementConnections.length - 2; i > 0; i--){
      if(statementConnections[i])
        Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
   decompose: function(workspace) {
    var containerBlock = workspace.newBlock('mqtt_topics_set');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('MQTT_add_subscribe_topic');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   compose: function(containerBlock) {
    // Disconnect all the elseif input blocks and remove the inputs.
    for (var i = this.elseifCount_; i > 0; i--) {
      this.removeInput('DummyInput' + i);
      this.removeInput('DO' + i);
    }
    this.elseifCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var statementConnections = [null];
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'MQTT_add_subscribe_topic':
        this.elseifCount_++;
        statementConnections.push(clauseBlock.statementConnection_);
        break;
        default:
        throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
      clauseBlock.nextConnection.targetBlock();
    }

    this.updateShape_();
    // Reconnect any child blocks.
    this.reconnectChildBlocks_(statementConnections);

  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
   saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'MQTT_add_subscribe_topic':
        var inputDo = this.getInput('DO' + i);
        clauseBlock.statementConnection_ =
        inputDo && inputDo.connection.targetConnection;
        i++;
        break;
        default:
        throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
      clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Reconstructs the block with all child blocks attached.
   */
   rebuildShape_: function() {
    var statementConnections = [null];

    var i = 1;
    while (this.getInput('DummyInput' + i)) {
      var inputDo = this.getInput('DO' + i);
      statementConnections.push(inputDo.connection.targetConnection);
      i++;
    }
    this.updateShape_();
    this.reconnectChildBlocks_(statementConnections);
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @this Blockly.Block
   * @private
   */
   updateShape_: function() {
    var i = 1;
    while (this.getInput('DummyInput' + i)) {
      this.removeInput('DummyInput' + i);
      this.removeInput('DO' + i);
      i++;
    }
    // Rebuild block.
    for (var i = 1; i <= this.elseifCount_; i++) {
      this.appendDummyInput("DummyInput"+ i)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_MICROBIT_JS_CURRENT)
      .appendField(Blockly.MQTT_Topic+Blockly.MQTT_subscribe2)
      .appendField(new Blockly.FieldTextInput('Topic_'+ i, Topic_validator),"Topic_"+ i);
      this.appendStatementInput('DO' + i)
      .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
    }
  },
  /**
   * Reconnects child blocks.
   * @param {!Array<?Blockly.RenderedConnection>} valueConnections List of value
   * connectsions for if input.
   * @param {!Array<?Blockly.RenderedConnection>} statementConnections List of
   * statement connections for do input.
   * @param {?Blockly.RenderedConnection} elseStatementConnection Statement
   * connection for else input.
   */
   reconnectChildBlocks_: function(statementConnections) {
    for (var i = 1; i <= this.elseifCount_; i++) {
      //Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
      Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
    }
  }
};

Blockly.Blocks['mqtt_topics_set'] = {
  /**
   * Mutator block for if container.
   * @this Blockly.Block
   */
   init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_EMQX_SUBSCRIBE+Blockly.MQTT_Topic);
    this.appendStatementInput('STACK');
    this.contextMenu = false;
  }
};

//GET请求
Blockly.Blocks.http_get = {
  init: function() {
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_GET_REQUEST);
    this.appendValueInput("api")
    .setCheck(null)
    .appendField(Blockly.blynk_SERVER_ADD);
    this.appendStatementInput("success")
    .setCheck(null)
    .appendField(Blockly.MIXLY_SUCCESS);
    this.appendStatementInput("failure")
    .setCheck(null)
    .appendField(Blockly.MIXLY_FAILED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.setTooltip("");
  }
};
//自动配网
Blockly.Blocks.WIFI_smartConfig = {
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
    .appendField(Blockly.blynk_smartconfig)
    .appendField(new Blockly.FieldDropdown([["SmartConfig", 'SmartConfig'],["AP",'AP']]), "MODE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);//可上下连接
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
  }
};

Blockly.Blocks.WIFI_ap_or_sta= {
  init: function() { 
    this.appendDummyInput()  
    .appendField(new Blockly.FieldImage("../common/media/blynk/wifi_udp.PNG", 25, 25, "*"))
    .appendField(Blockly.MIXLY_SETUP+" UDP WIFI");
    this.appendDummyInput()  
    .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_MODE+":")
    .appendField(new Blockly.FieldDropdown([["STA","STA"],["AP","AP"]]), "mode");
    this.appendValueInput("SSID")
    .setCheck(null)  
    .appendField("WIFI "+Blockly.Msg.HTML_NAME);
    this.appendValueInput("PSK")
    .setCheck(null)  
    .appendField("WIFI "+Blockly.Msg.HTML_PASSWORD);
    this.appendValueInput("IP1")
    .setCheck(null)  
    .appendField(Blockly.MIXLY_WIFI_LINK_DEVICE+" IP1");
    this.appendValueInput("IP2")
    .setCheck(null)  
    .appendField(Blockly.MIXLY_WIFI_LINK_DEVICE+" IP2");
    this.appendValueInput("IP")
    .setCheck(null)  
    .appendField(Blockly.MIXLY_ESP32_BLUETOOTH_FLAG+" IP");
    this.appendValueInput("duankou")
    .setCheck(null)  
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_PORT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.setHelpUrl("");
  }
};

Blockly.Blocks.WIFI_ap_and_sta= {
  init: function() { 
    this.appendDummyInput()  
    .appendField(new Blockly.FieldImage("../common/media/blynk/wifi_udp.PNG", 25, 25, "*"))
    .appendField(Blockly.MIXLY_SETUP+" UDP WIFI");
    this.appendDummyInput()  
    .appendField(Blockly.MIXLY_MICROBIT_PY_STORAGE_MODE+": AP+STA");
    this.appendValueInput("SSID1")
    .setCheck(null)  
    .appendField("WIFI "+Blockly.Msg.HTML_NAME+"(STA)");
    this.appendValueInput("SSID2")
    .setCheck(null)  
    .appendField("WIFI "+Blockly.Msg.HTML_NAME+"(AP)");
    this.appendValueInput("PSK1")
    .setCheck(null)  
    .appendField("WIFI "+Blockly.Msg.HTML_PASSWORD+"(STA)");
    this.appendValueInput("PSK2")
    .setCheck(null)  
    .appendField("WIFI "+Blockly.Msg.HTML_PASSWORD+"(AP)");
    this.appendValueInput("IP1")
    .setCheck(null)  
    .appendField(Blockly.MIXLY_WIFI_LINK_DEVICE+" IP1");
    this.appendValueInput("IP2")
    .setCheck(null)  
    .appendField(Blockly.MIXLY_WIFI_LINK_DEVICE+" IP2");
    this.appendValueInput("IP")
    .setCheck(null)  
    .appendField(Blockly.MIXLY_ESP32_BLUETOOTH_FLAG+" IP");
    this.appendValueInput("duankou")
    .setCheck(null)  
    .appendField(Blockly.MIXLY_ETHERNET_CLINET_PORT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.setHelpUrl("");
  }
};

Blockly.Blocks.WIFI_incomingPacket= {
  init: function() { 
    this.appendDummyInput()  
    .appendField(new Blockly.FieldImage("../common/media/blynk/wifi_udp.PNG", 25, 25, "*"))
    .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF+" WIFI UDP "+Blockly.MIXLY_STM32_SPI_DATA_RECEIVED+"？")
    this.appendValueInput("input_data")
    .setCheck(null)  
    .appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS);
    this.appendDummyInput()  
    .appendField("("+Blockly.LANG_MATH_STRING+")");
    this.appendStatementInput("do")
    .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.WIFI_send_data= {
  init: function() { 
    this.appendDummyInput()  
    .appendField(new Blockly.FieldImage("../common/media/blynk/wifi_udp.PNG", 25, 25, "*"))
    .appendField("WIFI UDP "+Blockly.MIXLY_SEND_DATA);
    this.appendValueInput("data")
    .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//天气GET
Blockly.Blocks.WeatherGet = {
  init: function () {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.WeatherGet)
    .appendField(new Blockly.FieldTextInput('北京'), 'data')
    .appendField("1", "check");
    this.setOutput(true, Boolean);
    this.setTooltip("输入正确的城市名（不用带“市”字)如：深圳 北京 广州，如果错误会显示'error'刷新成功则返回true\n天气接口优化注意：\n1. 接口每 8 小时更新一次，机制是  CDN  缓存 8 小时更新一次。注意：自己做缓存。\n2. 接口采用城市 ID 来精准查询请求，省份不能直接查询天气。\n3.每分钟阈值为 300 次，如果超过会禁用一天。请谨慎使用。");
  }
};

//获取当天天气
Blockly.Blocks.WeatherGetToday = {
  init: function () {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.WeatherGetToday)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_Humidity ,"0"],['PM2.5', "1"],['PM1.0',"2"],[Blockly.TodayQuality,"3"],[Blockly.MIXLY_TEMPERATURE,"4"]]), "type");
    this.setOutput(true, Number);
    this.setTooltip("返回对应数据 字符串型。");
  }
};

//获取当天天气
Blockly.Blocks.WeatherGetForecast = {
  init: function () {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.WeatherGetForecast)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_GPS_DATE ,"ForecastDate"],[Blockly.ForecastHigh, "ForecastHigh"],[Blockly.ForecastLow,"ForecastLow"],[Blockly.ForecastYmd,"ForecastYmd"],[Blockly.MIXLY_WEEK,"ForecastWeek"],[Blockly.ForecastAqi,"ForecastAqi"],[Blockly.ForecastFx,"ForecastFx"],[Blockly.ForecastFl,"ForecastFl"],[Blockly.ForecastType,"ForecastType"]]), "type");
    this.appendValueInput('date',Number)
    .appendField(Blockly.MIXLY_GPS_DATE+'(0~14)');
    this.setOutput(true, Number);
    this.setTooltip("返回预报天气内容0表示当天，最大为14，字符串型。");
    this.setInputsInline(true);
  }
};

var PROVINCES = [], key;
for (key in CITYS_DATA)
  PROVINCES.push([key, key]);


function getCitysByProvince(a) {
  var b = [], c;
  for (c in CITYS_DATA[a])
    b.push([c, c]);
  return b;
}

Blockly.Blocks.china_city = {
  init: function () {
    this.citys = [["-", "-"]];
    var input = this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown(PROVINCES), "province");
    input.appendField(new Blockly.FieldDropdown(this.generateOptions()), "city");

    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#27b6ac");
    this.setHelpUrl("");
    this.preProvince = null;
  },
  onchange: function () {
    var getProvince = this.getFieldValue("province");
    if (this.preProvince !== getProvince) {
      this.citys = getCitysByProvince(getProvince);
      var cityField = this.getField("city");
      cityField.menuGenerator_ = this.citys;
      if (!this.checkCity(cityField.getValue(), this.citys)) {
        this.setFieldValue(this.citys[0][0], "city");
      }
    }
    this.preProvince = getProvince;
  },
  generateOptions: function () {
    return this.citys;
  },
  checkCity: function(newCityName, cityArr) {
    for (var i = 0; i < cityArr.length; i++) {
      if (cityArr[i][0] == newCityName) {
        return true;
      }
    }
    return false;
  }
};

Blockly.Blocks.weather_private_key = {
  init: function () {
    this.setColour("#27b6ac");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldDropdown([['S9l2sb_ZK-UsWaynG', 'S9l2sb_ZK-UsWaynG'], ['SpRpSYb7QOMT0M8Tz', 'SpRpSYb7QOMT0M8Tz'], ['SboqGMxP4tYNXUN8f', 'SboqGMxP4tYNXUN8f'], ['SJiRrYGYFkGnfi081', 'SJiRrYGYFkGnfi081'], ['SMhSshUxuTL0GLVLS', 'SMhSshUxuTL0GLVLS']]), 'key');
    this.setOutput(true, null);
  }
};

Blockly.Blocks.weather_seniverse_city_weather = {
  init: function () {
    this.appendDummyInput("")
      .appendField(MSG.catweather)
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LIVE_WEATHER, "weather/now"], [Blockly.MIXLY_3_DAY_WEATHER_FORECAST, "weather/daily"], [Blockly.MIXLY_6_LIFE_INDEXES, "life/suggestion"]]), "api")
      .appendField(Blockly.MIXLY_INFORMATION_CONFIGURATION);
    this.appendValueInput("location")
      .setCheck(null)
      .appendField(Blockly.MIXLY_GEOGRAPHIC_LOCATION);
    this.appendValueInput("private_key")
      .setCheck(null)
      .appendField(Blockly.MIXLY_API_PRIVATE_KEY);
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_LANGUAGE)
      .appendField(new Blockly.FieldDropdown([["简体中文", "zh-Hans"], ["繁體中文", "zh-Hant"], ["English", "en"]]), "language");
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_TEMPERATURE_UNIT)
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_CELSIUS + "(℃)", "c"], [Blockly.MIXLY_FAHRENHEIT + "(℉)", "f"]]), "unit");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#27b6ac");
    this.setTooltip("这里的API私钥免费体验有次数限制\n访问频率限制20次/分钟");
    this.setHelpUrl("");
  }
};


Blockly.Blocks.weather_get_seniverse_weather_info = {
  init: function () {
    this.appendDummyInput("")
      //.appendField("心知天气")
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LIVE_WEATHER, "weather/now"], [Blockly.MIXLY_3_DAY_WEATHER_FORECAST, "weather/daily"], [Blockly.MIXLY_6_LIFE_INDEXES, "life/suggestion"]]), "api")
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_AVAILABLE, "update"], [Blockly.MIXLY_GET_DATA_UPDATE_TIME, "getLastUpdate"], [Blockly.MIXLY_GET_SERVER_RESPONSE_STATUS_CODE, "getServerCode"]]), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#27b6ac");
    this.setTooltip("");
    this.setHelpUrl("");
  }

};

Blockly.Blocks.weather_get_seniverse_weather_info1 = {
  init: function () {
    this.appendDummyInput("")
      //.appendField("心知天气")
      .appendField(Blockly.MIXLY_LIVE_WEATHER)
      .appendField(Blockly.MIXLY_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WEATHER_PHENOMENON, "getWeatherText"], [Blockly.MIXLY_WEATHER_PHENOMENON_CODE, "getWeatherCode"], [Blockly.MIXLY_TEMPERATURE, "getDegree"]]), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#27b6ac");
    this.setTooltip("");
    this.setHelpUrl("");
  }

};

Blockly.Blocks.weather_get_seniverse_weather_info2 = {
  init: function () {
    this.appendDummyInput("")
      //.appendField("心知天气")
      .appendField(Blockly.MIXLY_3_DAY_WEATHER_FORECAST)
      .appendField(Blockly.MIXLY_GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_TODAY, "0"], [Blockly.MIXLY_TOMORROW, "1"], [Blockly.MIXLY_DAY_AFTER_TOMORROW, "2"]]), "date")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.ForecastHigh, "getHigh"], 
        [Blockly.ForecastLow, "getLow"], 
        [Blockly.MIXLY_DAYTIME_WEATHER_PHENOMENON, "getDayText"], 
        [Blockly.MIXLY_DAYTIME_WEATHER_PHENOMENON_CODE, "getDayCode"], 
        [Blockly.MIXLY_EVENING_WEATHER_PHENOMENON, "getNightText"], 
        [Blockly.MIXLY_EVENING_WEATHER_PHENOMENON_CODE, "getNightCode"], 
        [Blockly.MIXLY_PROBABILITY_OF_PRECIPITATION, "getRain"], 
        [Blockly.ForecastFx, "getWindDirection"], 
        [Blockly.MIXLY_WIND_SPEED, "getWindSpeed"], 
        [Blockly.MIXLY_WIND_RATING, "getWindScale"], 
        [Blockly.MIXLY_Humidity, "getHumidity"]
      ]), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#27b6ac");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks.weather_get_seniverse_weather_info3 = {
  init: function () {
    this.appendDummyInput("")
      //.appendField("心知天气")
      .appendField(Blockly.MIXLY_6_LIFE_INDEXES)
      .appendField(Blockly.MIXLY_GET)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.MIXLY_CAR_WASH_INDEX, "getCarWash"], 
        [Blockly.MIXLY_DRESSING_INDEX, "getDressing"], 
        [Blockly.MIXLY_COLD_INDEX, "getFactorFlu"], 
        [Blockly.MIXLY_MOVEMENT_INDEX, "getExercise"], 
        [Blockly.MIXLY_TOURISM_INDEX, "getTravel"], 
        [Blockly.MIXLY_UV_INDEX, "getUV"]]
      ), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#27b6ac");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['mixio_mqtt_subscribe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_CREATE_MQTT_CLIENT_AND_CONNECT);
    this.appendValueInput("server")
        .setCheck(null)
        .appendField(Blockly.blynk_SERVER_ADD);
    this.appendValueInput("port")
        .setCheck(null)
        .appendField(Blockly.MIXLY_EMQX_PORT);
    this.appendValueInput("mqtt_username")
        .setCheck(null)
        .appendField(Blockly.MIXLY_WIFI_USERNAME);
    this.appendValueInput("mqtt_password")
        .setCheck(null)
        .appendField(Blockly.MIXLY_WIFI_PASSWORD);
    this.appendValueInput("project")
        .setCheck(null)
        .appendField(Blockly.MIXLY_EMQX_PROJECT);
    //this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mixio_mqtt_subscribe_key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.USE_MIXLY_KEY)
        .appendField(new Blockly.FieldTextInput("1RFOH08C"), "key")
        .appendField(Blockly.CONNECT_TO_MIXIO);
    //this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mixio_mqtt_publish'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(Blockly.MQTT_SEND_MESSAGE);
    this.appendValueInput("topic")
        .setCheck(null)
        .appendField(Blockly.TO_TOPIC);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["MixIO","1"], ["MixIO Key","2"]]), "mode");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mixio_mqtt_received_the_news'] = {
  init: function() {
    this.appendValueInput("topic")
        .setCheck(null)
        .appendField(Blockly.WHEN_THE_SUBJECT_IS_RECEIVED);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_MICROBIT_MSG)
        .appendField(new Blockly.FieldDropdown([["MixIO","1"], ["MixIO Key","2"]]), "mode");
    this.appendStatementInput("function")
        .setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(170);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//OTA
Blockly.Blocks['asyncelegantota'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://gitee.com/peien268/image/raw/master/20211007232703.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
        .appendField("ElegantOTA");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("http://ip/update");
 this.setHelpUrl("");
  }
};