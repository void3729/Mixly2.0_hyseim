'use strict';


Blockly.Python.spk_init = function () {
    Blockly.Python.definitions_['import player'] = 'import player';	
    var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
	var BCK = Blockly.Python.valueToCode(this, 'BCK',Blockly.Python.ORDER_ATOMIC);
	var WS = Blockly.Python.valueToCode(this, 'WS',Blockly.Python.ORDER_ATOMIC);
	var DAT = Blockly.Python.valueToCode(this, 'DAT',Blockly.Python.ORDER_ATOMIC);	
	var code=""+sub+"=player.spk_init("+BCK+","+WS+","+DAT+")\n";
	return code;
  return code;  
};

Blockly.Python.mic_init = function () {
    Blockly.Python.definitions_['import player'] = 'import player';	
    var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
	// var BCK = Blockly.Python.valueToCode(this, 'BCK',Blockly.Python.ORDER_ATOMIC);
	// var WS = Blockly.Python.valueToCode(this, 'WS',Blockly.Python.ORDER_ATOMIC);
	// var DAT = Blockly.Python.valueToCode(this, 'DAT',Blockly.Python.ORDER_ATOMIC);	
	var code=""+sub+"=player.mic_init()\n";
	return code;
  return code;  
};


Blockly.Python.audio_play = function () {
  Blockly.Python.definitions_['import player'] = 'import player';	
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var volume =Blockly.Python.valueToCode(this, 'volume',Blockly.Python.ORDER_ATOMIC);
  var code = "player.audio_play("+sub+","+path+","+volume+")\n";
  return code; 
};

Blockly.Python.audio_record = function () {
  Blockly.Python.definitions_['import player'] = 'import player';	
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var time =Blockly.Python.valueToCode(this, 'time',Blockly.Python.ORDER_ATOMIC);
  var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var code = "player.audio_record("+sub+","+path+","+time+")\n";
  return code; 
};


Blockly.Python.video_play = function () {
  Blockly.Python.definitions_['import player'] = 'import player';	
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var volume =Blockly.Python.valueToCode(this, 'volume',Blockly.Python.ORDER_ATOMIC);
  var code = "player.video_play("+sub+","+path+","+volume+")\n";
  return code; 
};


Blockly.Python.video_record = function () {
  Blockly.Python.definitions_['import player'] = 'import player';	
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var sub = Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var time =Blockly.Python.valueToCode(this, 'time',Blockly.Python.ORDER_ATOMIC);
  var code = "player.video_record("+sub+","+path+","+time+")\n";
  return code; 
};