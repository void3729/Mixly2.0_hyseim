'use strict';

goog.provide('Blockly.Blocks.game');

goog.require('Blockly.Python');

Blockly.Python.game_init=function(block) {
    Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
    var code=Blockly.Python.statementToCode(block, "DO0" )+'blocklygame.initMap(\'block_id=' + block.id + '\');\n'

    var code_piece=[];
        code_piece=code.split("\n");
        for(var i=0;i<code_piece.length;i++){
          if((code_piece[i].indexOf("    ") >= 0)){  
              code_piece[i]=code_piece[i].replace("    ","");
          }
        }   
        code=""
        for(var i=0;i<code_piece.length;i++){
          code+=code_piece[i]+'\n'
        }
    return code;
  };

// Blockly.Python.move_direction = function(block) {
//     Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
//     var Direction = this.getFieldValue('direction');
//     return 'actor.moveDirection('+Direction+',\'block_id=' + block.id + '\');\n';
//   };

Blockly.Python.move_direction_steps = function (block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var times = Blockly.Python.valueToCode(this, 'times', Blockly.Python.ORDER_ATOMIC);
  var Direction = this.getFieldValue('direction');
  var d = 'actor.moveDirection('+Direction+',\'block_id=' + block.id + '\');\n',
      d = Blockly.Python.addLoopTrap(d, block.id) || Blockly.Python.PASS;
  return 'for _my_variable in range(' + times + '):\n\t' + d;
};


Blockly.Python.move_related_to_spirite = function (block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var times = Blockly.Python.valueToCode(this, 'times', Blockly.Python.ORDER_ATOMIC);
  var Direction = this.getFieldValue('Direction');
  if(Direction=='f'){
    Direction=0;
  }else{
    Direction=2
  }
  var d = 'dire=(actor.direction+'+Direction+")%4\n\t"+'actor.moveDirection(dire,\'block_id=' + block.id + '\');\n',
      d = Blockly.Python.addLoopTrap(d, block.id) || Blockly.Python.PASS;
  return 'for _my_variable in range(' + times + '):\n\t' + d;
};


Blockly.Python.initSettedMap = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var level = this.getFieldValue('level');
  return 'blocklygame.settedMap('+level+',\'block_id=' + block.id + '\');\n'+'actor=blocklygame.Actor(\'car\',2);\n';;
};
// Blockly.Python.move_forward = function(block) {
//   Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
//   return 'actor.moveForward(\'block_id=' + block.id + '\');\n';
// };

// Blockly.Python.move_backward = function(block) {
//   Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
//   var code = 'actor.moveBackward(\'block_id=' + block.id + '\');\n';
//   return code;
// };

Blockly.Python.Turn = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var dropdown_Direction = this.getFieldValue('Direction');
  var code = 'actor.turn(\'' + dropdown_Direction +"\',\'block_id="+ block.id + '\');\n';
  return code;
};

Blockly.Python.isDone = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var code = 'actor.isDone(\'block_id=' + block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.isPath = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var dropdown_Direction = this.getFieldValue('Direction');
  var code = 'actor.isPath(' + dropdown_Direction +",\'block_id="+ block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.is_Related_Path = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var dropdown_Direction = this.getFieldValue('Direction');
  switch (dropdown_Direction){
    case 'f':
      dropdown_Direction=0;
      break;
    case "b":
      dropdown_Direction=2;
      break;
    case "r":
      dropdown_Direction=1;
      break;
    case "l":
      dropdown_Direction=3;
      break;
  }
  var code = 'actor.isPath('+"(actor.direction+"+dropdown_Direction+")%4"+",\'block_id="+ block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//从这里开始是新的块
Blockly.Python.get_actor_point = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
   var code = 'actor.getPoint(\'block_id='+block.id+'\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
 };

Blockly.Python.game_get_local_img = function() {
    var dropdown_type = this.getFieldValue('type');
    Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
    var code = dropdown_type;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.set_map = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var value_x = Blockly.Python.valueToCode(this, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(this, 'y', Blockly.Python.ORDER_ATOMIC);
  var startPos_x = Blockly.Python.valueToCode(this, 'startPos_x', Blockly.Python.ORDER_ATOMIC); 
  var startPos_y = Blockly.Python.valueToCode(this, 'startPos_y', Blockly.Python.ORDER_ATOMIC); 
  var endPos_x = Blockly.Python.valueToCode(this, 'endPos_x', Blockly.Python.ORDER_ATOMIC); 
  var endPos_y = Blockly.Python.valueToCode(this, 'endPos_y', Blockly.Python.ORDER_ATOMIC); 
  
  return 'blocklygame.setMap('+value_x+','+value_y+','+startPos_x+','+startPos_y+','+endPos_x+','+endPos_y+",\'block_id="+ block.id + '\');\n';
};


Blockly.Python.set_map_bg = function(block) {
  Blockly.Python.definitions_['import_blocklygame'] = 'import blocklygame';
  var bg_pic = Blockly.Python.valueToCode(this, 'background', Blockly.Python.ORDER_ATOMIC);
  return 'blocklygame.set_map_bg('+bg_pic+",\'block_id="+ block.id + '\');\n';
};

Blockly.Python.game_get_character_img = function() {
    var dropdown_type = this.getFieldValue('type');
    Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
    var code = dropdown_type;
    return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python.initialize = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  // var value_character = this.getFieldValue('character');
  var value_direction = "1"
  // this.getFieldValue('direction');
  var value_character = Blockly.Python.valueToCode(this, 'character', Blockly.Python.ORDER_ATOMIC);
  return 'actor=blocklygame.Actor('+value_character+','+value_direction+",\'block_id="+ block.id + '\');\n';
};



Blockly.Python.place_item = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var value_posx = Blockly.Python.valueToCode(this, 'posx', Blockly.Python.ORDER_ATOMIC);
    var value_posy = Blockly.Python.valueToCode(this, 'posy', Blockly.Python.ORDER_ATOMIC);
  var value_item = this.getFieldValue('item');
  return 'blocklygame.placeItem('+value_posx+','+value_posy+','+value_item+",\'block_id="+ block.id + '\');\n';
};

Blockly.Python.game_get_path_img = function() {
    var dropdown_type = this.getFieldValue('type');
    Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
    var code = dropdown_type;
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python.set_pathtype = function(block) {
  Blockly.Python.definitions_['import_blocklygame'] = 'import blocklygame';
    var path_type = Blockly.Python.valueToCode(this, 'pathtype', Blockly.Python.ORDER_ATOMIC);
  return 'blocklygame.setPathType('+path_type+",\'block_id="+ block.id + '\');\n';
  // return 'actor.getPoint();\n';
};

Blockly.Python.isBarrier = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var dropdown_Direction = this.getFieldValue('direction');
  var code = 'actor.isBarrier('+dropdown_Direction+",\'block_id="+ block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.is_Related_Barrier = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var dropdown_Direction = this.getFieldValue('direction');
  switch (dropdown_Direction){
    case 'f':
      dropdown_Direction=0;
      break;
    case "b":
      dropdown_Direction=2;
      break;
    case "r":
      dropdown_Direction=1;
      break;
    case "l":
      dropdown_Direction=3;
      break;
  }

  var code = 'actor.isBarrier('+"(actor.direction+"+dropdown_Direction+")%4"+",\'block_id="+ block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python.randomOil = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  return 'actor.randomOil(\'block_id=' + block.id + '\');\n';
};

Blockly.Python.isOilFull = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var code = 'actor.isOilFull(\'block_id='+ block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.isLightGreen = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var code = 'actor.isLightGreen(\'block_id='+ block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.addOil = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var code = 'actor.addOil(\'block_id='+ block.id + '\');\n';
  return code;
};

Blockly.Python.isCirculationRight = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var code = 'actor.isCirculationRight(\'block_id='+ block.id + '\');\n';
  return code;
};

Blockly.Python.checkMarker = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var marker = this.getFieldValue('marker');
  var code = 'actor.checkMarker('+marker+',\'block_id='+ block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.getMarkerNum = function(block) {
  Blockly.Python.definitions_['import_blocklygame'] = 'import blocklygame';
  var marker = this.getFieldValue('marker');
  var code = 'actor.getMarkerNum('+marker+',\'block_id='+ block.id + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.randomPlaceBarrier = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var value_posx = Blockly.Python.valueToCode(this, 'posx', Blockly.Python.ORDER_ATOMIC);
  var value_posy = Blockly.Python.valueToCode(this, 'posy', Blockly.Python.ORDER_ATOMIC);
  return 'blocklygame.randomPlaceBarrier('+value_posx+','+value_posy+",\'block_id="+ block.id + '\');\n';
};

Blockly.Python.settedSimpleMap = function(block) {
  Blockly.Python.definitions_.import_blocklygame = "import blocklygame";
  var level = this.getFieldValue('level');
  return 'blocklygame.settedSimpleMap('+level+',\'block_id=' + block.id + '\');\n';
};