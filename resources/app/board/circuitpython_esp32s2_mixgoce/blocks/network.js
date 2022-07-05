'use strict';

goog.provide('Blockly.Blocks.network');

goog.require('Blockly.Blocks');

Blockly.Blocks.network.HUE=225

Blockly.Blocks['iot_wifi_connect'] = {
   init: function() {
    this.setColour(Blockly.Blocks.network.HUE);
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

Blockly.Blocks['radio_ons'] = {
    init: function() {
        this.setColour(225);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_MICROBIT_PY_COMMUNICATE_ON,'True'],[Blockly.MIXLY_MICROBIT_PY_COMMUNICATE_OFF,'False']]), "type")
            .appendField(Blockly.MIXLY_MIXGOCE_NRF);
        this.setInputsInline(true);
        this.setOutput(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
        var mode = thisBlock.getFieldValue('type');
        var mode0 =Blockly.MIXLY_MIXGOCE_NRF;
        var TOOLTIPS = {
        'on':Blockly.MIXLY_MICROBIT_PY_COMMUNICATE_ON,
        'off':Blockly.MIXLY_MICROBIT_PY_COMMUNICATE_OFF
      };
      return TOOLTIPS[mode]+mode0;
    });
    }
};

Blockly.Blocks['microbit_radio_config'] = {
  init : function () {
    this.jsonInit({
      "colour" : 225,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/radio.html#radio.config",
      "tooltip" : Blockly.MIXLY_MIXGOCE_SET_NRF1,
      "message0" : Blockly.MIXLY_MIXGOCE_SET_NRF,
      "args0" : [{
          "type" : "input_dummy"
        }, {
          "min" : 0,
          "value" : 76,
          "type" : "input_value",
          "max" : 125,
          "name" : "channel"
        }, {
          "type" : "input_dummy"
        }, {
          "name" : "power",         
          "type" : "input_value"
        }, {
          "type" : "input_dummy"
        }, {
          "name" : "address",
          "type" : "input_value"
        }, {
          "type" : "input_dummy"
        }, {
          "name" : "data_rate",
          "type" : "input_value"
        }
      ]
    });
  }
};

Blockly.Blocks['radio_init'] = {
    init:function(){
        this.setColour(225);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MIXGOCE_NRF_INIT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
}

Blockly.Blocks['radio_send_string'] = {
    init:function(){
        this.setColour(225);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MIXGOCE_NRF_SEND);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
              [Blockly.MIXLY_MICROBIT_MSG,'send']]), "type")
        this.appendValueInput('data')
            // .setCheck(String)
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
}

Blockly.Blocks['radio_receive_string'] = {
    init:function(){
        this.setColour(225);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_MIXGOCE_NRF_RECEIVE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
              [Blockly.MIXLY_MICROBIT_MSG,'receive']]), "type")
        this.setOutput(true);
        this.setInputsInline(true);
    }
}