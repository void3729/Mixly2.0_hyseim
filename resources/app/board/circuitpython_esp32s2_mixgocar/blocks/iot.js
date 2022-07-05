'use strict';

goog.provide('Blockly.Blocks.iot');
goog.require('Blockly.Blocks');

goog.require('Mixly.COnfig');

Blockly.Blocks.iot.HUE = 225
//'#2FAD7A';

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
    // this.appendValueInput('PROJECT')
    //     .appendField(Blockly.MIXLY_EMQX_PROJECT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
}
};

Blockly.Blocks['IOT_EMQX_INIT_AND_CONNECT'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_CREATE_MQTT_CLIENT_AND_CONNECT);
    this.appendValueInput('SERVER')
        .appendField(Blockly.MIXLY_EMQX_SERVER)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PORT')
        .appendField(Blockly.MIXLY_EMQX_PORT)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('USERNAME')
        .appendField(Blockly.MIXLY_EMQX_USERNAME)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PASSWORD')
        .appendField(Blockly.MIXLY_EMQX_PASSWORD)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PROJECT')
        .appendField(Blockly.MIXLY_EMQX_PROJECT)
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('IS_SSL')
       //  .appendField(Blockly.MIXLY_EMQX_IS_SSL)
       //  .setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('SOCKET_POOL')
    //     .appendField(Blockly.MIXLY_EMQX_SOCKET_POOL)
    //     .setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('SSL_CONTEXT')
    //     .appendField(Blockly.MIXLY_EMQX_SSL_CONTEXT)
    //     .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_INIT_TOOLTIP);
}
};

Blockly.Blocks['IOT_EMQX_INIT'] = {
   init: function() {
    this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
    this.appendDummyInput()
        .appendField("MQTT")
	    .appendField(Blockly.MIXLY_EMQX_INIT_CLIENT);
    this.appendValueInput('SERVER')
	    .appendField(Blockly.MIXLY_EMQX_SERVER)
	    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PORT')
	    .appendField(Blockly.MIXLY_EMQX_PORT)
	    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('USERNAME')
	    .appendField(Blockly.MIXLY_EMQX_USERNAME)
	    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PASSWORD')
	    .appendField(Blockly.MIXLY_EMQX_PASSWORD)
	    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('PROJECT')
	    .appendField(Blockly.MIXLY_EMQX_PROJECT)
	    .setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('IS_SSL')
	   //  .appendField(Blockly.MIXLY_EMQX_IS_SSL)
	   //  .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('SOCKET_POOL')
	    .appendField(Blockly.MIXLY_EMQX_SOCKET_POOL)
	    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('SSL_CONTEXT')
	    .appendField(Blockly.MIXLY_EMQX_SSL_CONTEXT)
	    .setAlign(Blockly.ALIGN_RIGHT);
    // this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_INIT_TOOLTIP);
}
};

Blockly.Blocks['IOT_EMQX_PUBLISH'] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
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

Blockly.Blocks['IOT_EMQX_PUBLISH_MORE'] = {
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
             .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput('TOPIC')
             .appendField(Blockly.MIXLY_EMQX_PUBLISH)
             .appendField(Blockly.MIXLY_EMQX_PUBLISH_TOPIC)
        this.appendValueInput('MSG')
            .appendField(Blockly.MIXLY_EMQX_PUBLISH_MSG)
        this.appendValueInput('RETAIN')
            .setCheck(Boolean)
            .appendField(Blockly.MIXLY_RETAIN)
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_QOS)
            .appendField(new Blockly.FieldDropdown([["QoS 0", "0"], ["QoS 1", "1"]]), 'qos')
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_PUBLISH_MORE_TOOLTIP);
 }
 };

Blockly.Blocks["IOT_EMQX_SUBSCRIBE"] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendValueInput('TOPIC')
            .appendField(Blockly.MIXLY_EMQX_SUBSCRIBE)
            .appendField(Blockly.MIXLY_EMQX_PUBLISH_TOPIC);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_SUBSCRIBE_TOOLTIP);
    }
};


Blockly.Blocks["IOT_EMQX_SUBSCRIBE_MORE"] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendValueInput('TOPIC')
            .appendField(Blockly.MIXLY_EMQX_SUBSCRIBE)
            .appendField(Blockly.MIXLY_EMQX_PUBLISH_TOPIC);
        this.appendValueInput('QOS')
            .appendField(Blockly.MIXLY_EMQX_QOS);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_SUBSCRIBE_MORE_TOOLTIP);
    }
};

Blockly.Blocks["IOT_EMQX_UNSUBSCRIBE"] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendValueInput('TOPIC')
            .appendField(Blockly.MIXLY_EMQX_UNSUBSCRIBE)
            .appendField(Blockly.MIXLY_EMQX_PUBLISH_TOPIC);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_UNSUBSCRIBE_TOOLTIP);
    }
};

Blockly.Blocks['IOT_EMQX_RECONNECT']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_RECONNECT);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_RECONNECT_TOOLTIP);
    }
};

Blockly.Blocks["IOT_EMQX_LOOP"] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        //this.setOutput(true, Boolean);
        this.appendValueInput('TIMEOUT')
            .appendField(Blockly.MIXLY_EMQX_LOOP)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_LOOPONE);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_LOOP_TOOLTIP);
    }
};

Blockly.Blocks["IOT_EMQX_IS_CONNECT"] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        //DummyInput
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_IS_CONNECT);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_IS_CONNECT_TOOLTIP);
    }
};

Blockly.Blocks["IOT_EMQX_ENABLE_LOGGER"] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_NABLE_LOGGER);
        this.appendValueInput('LEVEL')
            .appendField(Blockly.MIXLY_EMQX_NABLE_LOGGERONE)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_ENABLE_LOGGER_TOOLTIP);
    }
};

Blockly.Blocks["IOT_EMQX_DISABLE_LOGGER"] = {
    init: function () {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_DISABLE_LOGGER);

        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['IOT_EMQX_DEINIT']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendDummyInput()
        .appendField(Blockly.MIXLY_EMQX_DEINIT);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_ONENET_DISCONNECT_TOOLTIP);
    }
};

Blockly.Blocks['IOT_EMQX_ADD_TOPIC_CALLBACK'] = {
    init: function() {
     this.setColour(Blockly.Blocks.iot.HUE);
     // this.appendValueInput('VAR')
     //     .setCheck("var")
     this.appendDummyInput()
         .appendField("MQTT")
     this.appendValueInput('TOPIC')
         .appendField(Blockly.MIXLY_EMQX_FOR)
         .appendField(Blockly.MIXLY_EMQX_PUBLISH_TOPIC);
     this.appendValueInput('METHOD')
         .appendField(Blockly.MIXLY_EMQX_SET_METHOD);
     this.setInputsInline(true);
     this.setPreviousStatement(true);
     this.setNextStatement(true);
     this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_ADD_TOPIC_CALLBACK_TOOLTIP);
 }
 };

 Blockly.Blocks['IOT_EMQX_REMOVE_TOPIC_CALLBACK'] = {
    init: function() {
     this.setColour(Blockly.Blocks.iot.HUE);
     // this.appendValueInput('VAR')
     //     .setCheck("var")
     this.appendDummyInput()
         .appendField("MQTT")
     this.appendValueInput('TOPIC')
         .appendField(Blockly.MIXLY_EMQX_FOR)
         .appendField(Blockly.MIXLY_EMQX_PUBLISH_TOPIC);
     this.appendDummyInput()
         .appendField(Blockly.MIXLY_EMQX_REMOVE_METHOD);
     this.setInputsInline(true);
     this.setPreviousStatement(true);
     this.setNextStatement(true);
     this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_REMOVE_TOPIC_CALLBACK_TOOLTIP);
 }
 };

 Blockly.Blocks['IOT_EMQX_USERNAME_PW_SET'] = {
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendValueInput('USERNAME')
        .appendField(Blockly.MIXLY_EMQX_SET_USERNAME);
        this.appendValueInput('PASSWORD')
        .appendField(Blockly.MIXLY_EMQX_SET_PASSWORD);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_USERNAME_PW_SET_TOOLTIP);
 }
};

Blockly.Blocks['IOT_EMQX_CONNECT']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_CONNECT);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_CONNECT_TOOLTIP);
    }
};

Blockly.Blocks['IOT_EMQX_DISCONNECT']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_DISCONNECT);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_DISCONNECT_TOOLTIP);
    }
};

Blockly.Blocks['IOT_EMQX_PING']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")     
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_PING);   
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_PING_TOOLTIP);
    }
};

Blockly.Blocks['CREATE_DEFAULT_CONTEXT']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_SSL_DEFAULT);     
        this.setInputsInline(true);
        this.setOutput(true, Boolean);
    }
};

Blockly.Blocks['WIFI_RADIO_CONNECT']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        this.appendValueInput('USERNAME')
            .appendField(Blockly.MIXLY_WIFI_CONNECT)   
            .appendField(Blockly.Msg.HTML_NAME);
        this.appendValueInput('PASSWORD')
            .appendField(Blockly.MIXLY_WIFI_PASSWORD);  
        this.setInputsInline(true);
        this.setPreviousStatement(true);   
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_WIFI_RADIO_CONNECT_TOOLTIP);
    }
};

Blockly.Blocks['CREATE_SOCKETPOOL']={
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_CREATE_SOCKETPOOL);
        this.setInputsInline(true);
        this.setOutput(true);
    }
};


Blockly.Blocks['WIFI_RESET']={
    init: function() {
        this.setColour(Blockly.Blocks.network.HUE);
        this.appendDummyInput()
            .appendField("Wi-Fi")
        this.appendDummyInput()
            .appendField(Blockly.Msg.HTML_RESET);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_WIFI_RESET_TOOLTIP);
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

Blockly.Blocks['IOT_EMQX_SUBSCRIBE_AND_ADD_TOPIC_CALLBACK'] = {
    init: function() {
        this.setColour(Blockly.Blocks.iot.HUE);
        // this.appendValueInput('VAR')
        //     .setCheck("var")
        this.appendDummyInput()
            .appendField("MQTT")
        this.appendValueInput('TOPIC')
            .appendField(Blockly.MIXLY_EMQX_SUBSCRIBE+Blockly.MIXLY_EMQX_PUBLISH_TOPIC)
        this.appendValueInput('METHOD')
            .appendField(Blockly.MIXLY_EMQX_SET_METHOD);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_EMQX_QOS)
            .appendField(new Blockly.FieldDropdown([["QoS 0", "0"], ["QoS 1", "1"]]), 'qos')
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.MIXLY_ESP32_IOT_EMQX_ADD_TOPIC_CALLBACK_TOOLTIP);
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