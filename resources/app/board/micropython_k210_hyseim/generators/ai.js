'use strict';

goog.provide('Blockly.Python.ai');
goog.require('Blockly.Python');


Blockly.Python.tuple_anchor = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var varName = Blockly.Python.variableDB_.getName(this.getFieldValue('VAR'),
    Blockly.Variables.NAME_TYPE);
  var text=this.getFieldValue('TEXT');
  var code = varName+'= '+ '(' + text + ')\n';
  return code;
};

Blockly.Python.tuple_calss = function() {
  var dropdown_type = this.getFieldValue('TYPE');
  var varName = Blockly.Python.variableDB_.getName(this.getFieldValue('VAR'),
    Blockly.Variables.NAME_TYPE);
  var text=this.getFieldValue('TEXT');
  var code = varName+'= '+ '[' + text + ']\n';
  return code;
};

Blockly.Python.KPU_load = function () {
  Blockly.Python.definitions_['import board'] = 'import board';	
  Blockly.Python.definitions_['import_KPU'] = 'import KPU as kpu';
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var code = sub+" = kpu.load("+path+")\n";
  return code;  
};

Blockly.Python.KPU_load1 = function () {
  Blockly.Python.definitions_['import board'] = 'import board';		
  Blockly.Python.definitions_['import_KPU'] = 'import KPU as kpu';
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var code = sub+" = kpu.load("+path+")\n";
  return code;  
};

Blockly.Python.KPU_init_yolo2 = function () {
  Blockly.Python.definitions_['import_KPU'] = 'import KPU as kpu';
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var th =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var nm =Blockly.Python.valueToCode(this, 'nms_value',Blockly.Python.ORDER_ATOMIC);
  var an =Blockly.Python.valueToCode(this, 'anchor_num',Blockly.Python.ORDER_ATOMIC);
  var anchor =Blockly.Python.valueToCode(this, 'anchor',Blockly.Python.ORDER_ATOMIC);
  var code = "kpu.init_yolo2("+sub+","+th+","+nm+","+an+","+anchor+")\n";
  return code;  
};

Blockly.Python.KPU_run_yolo2 = function () {
  Blockly.Python.definitions_['import_KPU'] = 'import KPU as kpu';
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var img =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var code = "kpu.run_yolo2("+sub+","+img+")";
  return [code, Blockly.Python.ORDER_ATOMIC];  
};

Blockly.Python.KPU_forward = function () {
  Blockly.Python.definitions_['import_KPU'] = 'import KPU as kpu';
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var img =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var code = "kpu.forward("+sub+","+img+")[:]";
  return [code, Blockly.Python.ORDER_ATOMIC];  
};

Blockly.Python.KPU_analysis = function () {
  Blockly.Python.definitions_['import_KPU'] = 'import KPU as kpu';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.aionenet_nic_init = function () {
  Blockly.Python.definitions_['import aionenet'] = 'import aionenet';
  var account =Blockly.Python.valueToCode(this, 'account',Blockly.Python.ORDER_ATOMIC);
  var passwor =Blockly.Python.valueToCode(this, 'password',Blockly.Python.ORDER_ATOMIC);
  var code = "aionenet.nic_init("+account+","+passwor+")\n";
  return code;  
};

Blockly.Python.aionenet_token = function () {
  Blockly.Python.definitions_['import aionenet'] = 'import aionenet';
  var account =Blockly.Python.valueToCode(this, 'account',Blockly.Python.ORDER_ATOMIC);
  var passwor =Blockly.Python.valueToCode(this, 'password',Blockly.Python.ORDER_ATOMIC);
  var code = "aionenet.token("+account+","+passwor+")";
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.aionenet_API = function () {
  Blockly.Python.definitions_['import aionenet'] = 'import aionenet';
  var img =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var token =Blockly.Python.valueToCode(this, 'token',Blockly.Python.ORDER_ATOMIC);
  var api = this.getFieldValue('api');
  var code = 'aionenet.post_ai('+img+',"'+api+'",'+token+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

///---------------------------------------------------------------
Blockly.Python.ailocal_training = function () {
  Blockly.Python.definitions_['import ailocal'] = 'import ailocal';
  var calss =Blockly.Python.valueToCode(this, 'calss',Blockly.Python.ORDER_ATOMIC);
  var sample =Blockly.Python.valueToCode(this, 'sample',Blockly.Python.ORDER_ATOMIC);
  var save =Blockly.Python.valueToCode(this, 'save',Blockly.Python.ORDER_ATOMIC);
  var code = "ailocal.training("+calss+","+sample+","+save+")\n";
  return code;  
};

Blockly.Python.ailocal_loading = function () {
  Blockly.Python.definitions_['import ailocal'] = 'import ailocal';
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var code = "ailocal.loading("+path+")\n";
  return code;  
};

Blockly.Python.ailocal_predict = function () {
  Blockly.Python.definitions_['import ailocal'] = 'import ailocal';
  var calss =Blockly.Python.valueToCode(this, 'calss',Blockly.Python.ORDER_ATOMIC);
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var code = "ailocal.predict("+sub+","+calss+")";
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//---开始------------新增---20210302---------------------------------------------------

Blockly.Python.ai_face_init = function () {
  Blockly.Python.definitions_['import ai_face'] = 'import ai_face';
  var FD =Blockly.Python.valueToCode(this, 'FD',Blockly.Python.ORDER_ATOMIC);
  var LD =Blockly.Python.valueToCode(this, 'LD',Blockly.Python.ORDER_ATOMIC);
  var FE =Blockly.Python.valueToCode(this, 'FE',Blockly.Python.ORDER_ATOMIC);
  var code = "ai_face.init("+FD+","+LD+","+FE+")\n";
  return code;  
};


Blockly.Python.ai_face_train = function () {
  Blockly.Python.definitions_['import ai_face'] = 'import ai_face';
  var img =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var names =Blockly.Python.valueToCode(this, 'names',Blockly.Python.ORDER_ATOMIC);
  var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var code = 'ai_face.train('+img+','+names+','+threshold+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.ai_face_info = function () {
  Blockly.Python.definitions_['import ai_face'] = 'import ai_face';
  var key = this.getFieldValue('key');
  var code = 'ai_face.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//---开始------------新增---20210302---------------------------------------------------