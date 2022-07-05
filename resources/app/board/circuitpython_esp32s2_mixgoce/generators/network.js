'use strict';

goog.provide('Blockly.Python.network');
goog.require('Blockly.Python');

Blockly.Python.iot_wifi_connect = function(block) {
  Blockly.Python.definitions_['import_mixgoce_do_connect'] = "from mixgoce import do_connect";  
  var username =  Blockly.Python.valueToCode(this, 'WIFINAME', Blockly.Python.ORDER_ATOMIC) ;
  var password =  Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC) ; 
  var code='do_connect(' + username + ','  + password + ')\n';
  return code;
};

Blockly.Python['radio_init'] = function(){
    Blockly.Python.definitions_['import_nrf'] = 'import nrf';
    var type = this.getFieldValue('type');
    var code = 'nrf = nrf.NRF()\n';
    return code;
};

Blockly.Python['radio_ons'] = function(){
    Blockly.Python.definitions_['import_nrf'] = 'import nrf';
    var type = this.getFieldValue('type');
    var code = 'nrf.power('+type+')\n';
    return code;
};
Blockly.Python['microbit_radio_config'] = function(block) {
  Blockly.Python.definitions_['import_nrf'] = 'import nrf';
  //var number_length = block.getFieldValue('length');
  var number_channel = Blockly.Python.valueToCode(this, "channel", Blockly.Python.ORDER_ATOMIC);
  var number_power = Blockly.Python.valueToCode(this, "power", Blockly.Python.ORDER_ATOMIC);
  var address = Blockly.Python.valueToCode(this, "address", Blockly.Python.ORDER_ATOMIC);
  var dropdown_data_rate = Blockly.Python.valueToCode(this, "data_rate", Blockly.Python.ORDER_ATOMIC);
  var code = 'nrf.config(channel=' + number_channel + ', power=' + number_power + ', address=b' + address + ', data_rate=' + dropdown_data_rate + ')\n';
  return code;
};
Blockly.Python.radio_send_string = function () {
  Blockly.Python.definitions_['import_nrf'] = 'import nrf';
  var type = this.getFieldValue('type');
    var number = Blockly.Python.valueToCode(this, 'data', Blockly.Python.ORDER_ATOMIC);
    return "nrf."+type+"(" + number + ")\n";
}

Blockly.Python.radio_receive_string = function () {
  Blockly.Python.definitions_['import_nrf'] = 'import nrf';
  var type = this.getFieldValue('type');
  var code = "nrf."+type+"()";
  return [code, Blockly.Python.ORDER_ATOMIC];
}