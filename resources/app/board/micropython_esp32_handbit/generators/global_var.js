//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');

Blockly.BlockSvg.SEP_SPACE_X = 8;

Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

var writeUTF = function (str, isGetBytes) {
    var back = [];
    var byteSize = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (0x00 <= code && code <= 0x7f) {
            byteSize += 1;
            back.push(code);
        } else if (0x80 <= code && code <= 0x7ff) {
            byteSize += 2;
            back.push((192 | (31 & (code >> 6))));
            back.push((128 | (63 & code)))
        } else if ((0x800 <= code && code <= 0xd7ff) || (0xe000 <= code && code <= 0xffff)) {
            byteSize += 3;
            back.push((224 | (15 & (code >> 12))));
            back.push((128 | (63 & (code >> 6))));
            back.push((128 | (63 & code)))
        }
    }
    for (i = 0; i < back.length; i++) {
        back[i] &= 0xff;
    }
    if (isGetBytes) {
        return back;
    }
    if (byteSize <= 0xff) {
        return [0, byteSize].concat(back);
    } else {
        return [byteSize >> 8, byteSize & 0xff].concat(back);
    }
}

var toUTF8Hex = function (str) {
    var charBuf = writeUTF(str, true);
    var re = '';
    for (var i = 0; i < charBuf.length; i++) {
        var x = (charBuf[i] & 0xFF).toString(16);
        if (x.length === 1) {
            x = '0' + x;
        }
        re += x;
    }
    return re;
}




Blockly.Python['i2c_pin'] = function (block) {
    var i2c_pin = block.getFieldValue('i2c_pin');
    var code = `${i2c_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['uart_rx_pin'] = function (block) {
    var uart_rx_pin = block.getFieldValue('uart_rx_pin');
    var code = `${uart_rx_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['uart_tx_pin'] = function (block) {
    var uart_tx_pin = block.getFieldValue('uart_tx_pin');
    var code = `${uart_tx_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['dh11_hum_tem_pin'] = function (block) {
    var dh11_hum_tem_pin = block.getFieldValue('dh11_hum_tem_pin');
    var code = `${dh11_hum_tem_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['pwm_pin'] = function (block) {
    var pwm_pin = block.getFieldValue('pwm_pin');
    var code = `${pwm_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['all_pin'] = function (block) {
    var all_pin = block.getFieldValue('all_pin');
    var code = `${all_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['set_analog'] = function (block) {
    var set_analog = block.getFieldValue('set_analog');
    var code = `${set_analog}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['set_digital'] = function (block) {
    var set_digital = block.getFieldValue('set_digital');
    var code = `${set_digital}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['read_analog_pin'] = function (block) {
    var read_analog_pin = block.getFieldValue('read_analog_pin');

    var code = `${read_analog_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['input_pin'] = function (block) {
    var input_pin = block.getFieldValue('input_pin');
    var code = `${input_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['output_pin'] = function (block) {
    var output_pin = block.getFieldValue('output_pin');
    var code = `${output_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['china_city'] = function (block) {
    var _province = block.getFieldValue('province');
    var _city = block.getFieldValue('city');
    //var _type = block.getFieldValue('type');
	var code = '"' + CITYS_DATA[_province][_city]['pinyin'] + '"';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['china_city_town'] = function (block) {
    var _province = block.getFieldValue('province');
    var _city = block.getFieldValue('city');
    var _town = block.getFieldValue('town');
    var _type = block.getFieldValue('type');
	var code = '"' + getCityInfo(_province, _city, _town, _type) + '"';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['math_on_list'] = function(block) {
  // Math functions for lists.
  var func = block.getFieldValue('OP');
  var list = Blockly.Python.valueToCode(block, 'LIST',
      Blockly.Python.ORDER_NONE) || '[]';
  var code;
  switch (func) {
    case 'SUM':
      code = 'sum(' + list + ')';
      break;
    case 'MIN':
      code = 'min(' + list + ')';
      break;
    case 'MAX':
      code = 'max(' + list + ')';
      break;
    case 'AVERAGE':
      var functionName = Blockly.Python.provideFunction_(
          'math_mean',
          // This operation excludes null and values that aren't int or float:',
          // math_mean([null, null, "aString", 1, 9]) == 5.0.',
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(myList):',
           '  return float(sum(myList)) / len(myList)']);
      code = functionName + '(' + list + ')';
      break;
    case 'MEDIAN':
      var functionName = Blockly.Python.provideFunction_(
          'math_median',
          // This operation excludes null values:
          // math_median([null, null, 1, 3]) == 2.0.
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(myList):',
           '  localList = sorted(myList)',
           '  if not localList: return',
           '  if len(localList) % 2 == 0:',
           '    return (localList[len(localList) // 2 - 1] + ' +
               'localList[len(localList) // 2]) / 2.0',
           '  else:',
           '    return localList[(len(localList) - 1) // 2]']);
      code = functionName + '(' + list + ')';
      break;
    case 'MODE':
      var functionName = Blockly.Python.provideFunction_(
          'math_modes',
          // As a list of numbers can contain more than one mode,
          // the returned result is provided as an array.
          // Mode of [3, 'x', 'x', 1, 1, 2, '3'] -> ['x', 1].
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(some_list):',
           '  modes = []',
           '  # Using a lists of [item, count] to keep count rather than dict',
           '  # to avoid "unhashable" errors when the counted item is ' +
               'itself a list or dict.',
           '  counts = []',
           '  maxCount = 1',
           '  for item in some_list:',
           '    found = False',
           '    for count in counts:',
           '      if count[0] == item:',
           '        count[1] += 1',
           '        maxCount = max(maxCount, count[1])',
           '        found = True',
           '    if not found:',
           '      counts.append([item, 1])',
           '  for counted_item, item_count in counts:',
           '    if item_count == maxCount:',
           '      modes.append(counted_item)',
           '  return modes']);
      code = functionName + '(' + list + ')';
      break;
    case 'STD_DEV':
      Blockly.Python.definitions_['import_math'] = 'import math';
      var functionName = Blockly.Python.provideFunction_(
          'math_standard_deviation',
          ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(numbers):',
           '  n = len(numbers)',
           '  if n == 0: return',
           '  mean = float(sum(numbers)) / n',
           '  variance = sum((x - mean) ** 2 for x in numbers) / n',
           '  return math.sqrt(variance)']);
      code = functionName + '(' + list + ')';
      break;
    case 'RANDOM':
      Blockly.Python.definitions_['import_random'] = 'import random';
      code = 'random.choice(' + list + ')';
      break;
    default:
      throw 'Unknown operator: ' + func;
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['mpython_main'] = function (block) {
    // let code = Blockly.Python.statementToCode(block, 'DO') || '';
    // return code.replace(/^ {4}/gm, '');
    return '';
};
