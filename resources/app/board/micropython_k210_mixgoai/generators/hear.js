'use strict';


Blockly.Python.asrloca_init = function () {
  Blockly.Python.definitions_['import asrloca'] = 'import asrloca';
  var SUB =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var KEY = this.getFieldValue('KEY');
  var code = SUB+"=asrloca.ASR_init("+KEY+")\n";
  return code;  
};


Blockly.Python.asrloca_config = function() {
  var ck = new Array(this.itemCount_);
  var cv = new Array(this.itemCount_);
  var ct = new Array(this.itemCount_);

  var default_value = '0';
  var v = Blockly.Python.valueToCode(this, 'SUB', Blockly.Python.ORDER_ATOMIC) ;

  for (var n = 0; n < this.itemCount_; n++) {
  var keyName = this.getFieldValue('KEY' + n);    
  ck[n] = keyName
  }
  for (var n = 0; n < this.itemCount_; n++) {     
  cv[n] = Blockly.Python.valueToCode(this, 'ADD' + n,
    Blockly.Python.ORDER_NONE) || default_value;
  }
  var code=v + ".config({";
  for (var n = 0; n < this.itemCount_; n++) {
    ct[n] = "'"+ck[n]+"'"+': '+cv[n]
  }

  code=code+ct.join(', ')+"})\n";
  return code;
};

Blockly.Python.asrloca_recognize = function () {
  var SUB =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var code = SUB+".recognize()";
    return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.asrloca_del = function () {
  var SUB =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var code = SUB+".__del__()";
  return code;
};