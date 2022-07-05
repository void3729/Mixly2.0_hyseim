//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');




// 整数 %1 对应的 ASCII 字符 
Blockly.Python['int_to_chr'] = function (block) {
  var _int = Blockly.Python.valueToCode(block, '_int', Blockly.Python.ORDER_ATOMIC);

  var code = `str(${_int})`
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// hcsr04 超声波(mm) 
Blockly.Python['mpython_hcsr04_obj'] = function (block) {
  Blockly.Python.definitions_['from_hcsr04_import_HCSR04'] = 'from hcsr04 import HCSR04'
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var hcsr04_name = block.getFieldValue('hcsr04_name');
  // var trigger = block.getFieldValue('trigger');
  var trigger = Blockly.Python.valueToCode(block, 'trigger', Blockly.Python.ORDER_ATOMIC);
  var echo = Blockly.Python.valueToCode(block, 'echo', Blockly.Python.ORDER_ATOMIC);
  // var echo = block.getFieldValue('echo');
  Blockly.Python.definitions_['mpython_hcsr04_object' + hcsr04_name] =
    `${hcsr04_name} = HCSR04(trigger_pin=Pin.P${trigger}, echo_pin=Pin.P${echo})`

  var code = '\n';

  return code;
};

// hcsr04 超声波(mm) 
Blockly.Python['mpython_hcsr04_distance'] = function (block) {
  Blockly.Python.definitions_['from_hcsr04_import_HCSR04'] = 'from hcsr04 import HCSR04'
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var hcsr04_name = block.getFieldValue('hcsr04_name');
  var unit = block.getFieldValue('unit');

  var code = `${hcsr04_name}.distance_${unit}()`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// hcsr04 超声波(mm) 
Blockly.Python['mpython_hcsr04_distance_mm'] = function (block) {
  Blockly.Python.definitions_['from_hcsr04_import_HCSR04'] = 'from hcsr04 import HCSR04'
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var hcsr04_name = block.getFieldValue('hcsr04_name');

  var code = `${hcsr04_name}.distance_mm()`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// pm2.5浓度
Blockly.Python['mpython_pm2_5_MIC'] = function (block) {
	Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
	Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
	var rx = Blockly.Python.valueToCode(block, 'rx', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.functions_['mpython_pm2_5'] = 'uart=machine.UART(1, baudrate=9600, rx=Pin.P' + rx + ', timeout=200)\n' +
	'_pm_data = [None, None, None, None, None, None, None, None, None]\n'+
	'def timer13_tick(_):\n'+
	'  global _pm_data\n'+
	'  try:\n'+
	'      if uart.any():\n'+
	'          d = uart.read(0x42)\n'+
	'          if d[0] == 0x42 and d[1] == 0x4d:\n'+
	'              _pm_data = [d[5], d[7], d[9], d[17], d[19], d[21], d[23], d[25], d[27]]\n'+
	'  except: pass\n'+
	'\n'+
	'tim13 = Timer(13)\n'+
	'tim13.init(period=1000, mode=Timer.PERIODIC, callback=timer13_tick)';
  
	  var unit = block.getFieldValue('unit');
	var code = unit;
	  return [code, Blockly.Python.ORDER_ATOMIC];
	};

// 0.1升空气中直径在多少间的颗粒物个数
Blockly.Python['mpython_pm2_5_LitresAir'] = function (block) {
	Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
	Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
	var rx = Blockly.Python.valueToCode(block, 'rx', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.functions_['mpython_pm2_5'] = 'uart=machine.UART(1, baudrate=9600, rx=Pin.P' + rx + ', timeout=200)\n' +
	'_pm_data = [None, None, None, None, None, None, None, None, None]\n'+
	'def timer13_tick(_):\n'+
	'  global _pm_data\n'+
	'  try:\n'+
	'      if uart.any():\n'+
	'          d = uart.read(0x42)\n'+
	'          if d[0] == 0x42 and d[1] == 0x4d:\n'+
	'              _pm_data = [d[5], d[7], d[9], d[17], d[19], d[21], d[23], d[25], d[27]]\n'+
	'  except: pass\n'+
	'\n'+
	'tim13 = Timer(13)\n'+
	'tim13.init(period=1000, mode=Timer.PERIODIC, callback=timer13_tick)';
  
	  var unit = block.getFieldValue('unit');
	var code = unit;
	  return [code, Blockly.Python.ORDER_ATOMIC];
	};



// mac 地址
Blockly.Python['mpython_mac_address'] = function (block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
  //Blockly.Python.definitions_['mac_address'] = 'mac_address = ubinascii.hexlify(machine.unique_id()).decode()';
  var code = 'ubinascii.hexlify(machine.unique_id()).decode().upper()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};





// '解析 json 字符串 %1 返回对象';
Blockly.Python['mpython_ujson_loads'] = function (block) {
  Blockly.Python.definitions_['import_ujson'] = 'import ujson';

  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = "ujson.loads(" + data + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 自定义代码
Blockly.Python['mpython_custom_code'] = function (block) {
  var custom_type = block.getFieldValue('custom_type');
  var custom_code = block.getFieldValue('custom_code');
  if ('topping' == custom_type) {
    Blockly.Python.definitions_['import_custom'] = custom_code;
    return '';
  } else {
    return custom_code + '\n';
  }
};

// 自定义返回值
Blockly.Python['mpython_custom_value'] = function (block) {
  var custom_code = block.getFieldValue('custom_code');
  return [custom_code, Blockly.Python.ORDER_ATOMIC];
};


// '%1 转 json 字符串';
Blockly.Python['mpython_ujson_dumps'] = function (block) {
  Blockly.Python.definitions_['import_ujson'] = 'import ujson';

  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = "ujson.dumps(" + data + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// '解码 base64 数据 %1 返回字节对象';
Blockly.Python['mpython_base64_to_data'] = function (block) {
  Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';

  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = "ubinascii.a2b_base64(" + data + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// '%1 以 base64 格式编码 返回字节对象';
Blockly.Python['mpython_data_to_base64'] = function (block) {
  Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';

  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);

  var code = "ubinascii.b2a_base64(" + data + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// '十六进制字符串 %1 转 二进制 字节';
Blockly.Python['mpython_hex_to_bin_str'] = function (block) {
  Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';

  var convert_chr = Blockly.Python.valueToCode(block, 'convert_chr', Blockly.Python.ORDER_ATOMIC);

  var code = "ubinascii.unhexlify(" + convert_chr + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// '字符串 %1 转 十六进制 字节';
Blockly.Python['mpython_str_to_hex'] = function (block) {
  Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';

  var convert_chr = Blockly.Python.valueToCode(block, 'convert_chr', Blockly.Python.ORDER_ATOMIC);

  var code = "ubinascii.hexlify(" + convert_chr + ", ' ')";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 'ASCII 单字符 %1 转 整形';
Blockly.Python['mpython_chr_to_int'] = function (block) {
  var convert_chr = Blockly.Python.valueToCode(block, 'convert_chr', Blockly.Python.ORDER_ATOMIC);

  var code = "ord(" + convert_chr + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// '整形 %1 转 ASCII 单字符';
Blockly.Python['mpython_int_to_chr'] = function (block) {
  var convert_num = Blockly.Python.valueToCode(block, 'convert_num', Blockly.Python.ORDER_ATOMIC);

  var code = "chr(" + convert_num + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// '10进制整数 %1 转化为 %2 字节';
Blockly.Python['mpython_ten_converted_to_bytes'] = function (block) {
  Blockly.Python.definitions_['import_struct'] = 'import struct';

  var convert_num = Blockly.Python.valueToCode(block, 'convert_num', Blockly.Python.ORDER_ATOMIC);
  var convert_choice = block.getFieldValue('convert_choice');

  var code = "struct.pack(" + convert_choice + ", " + convert_num + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// %1 字符串 %2 转化为10进制整数
Blockly.Python['mpython_convert_to_ten'] = function (block) {
  var convert_str = Blockly.Python.valueToCode(block, 'convert_str', Blockly.Python.ORDER_ATOMIC);
  var convert_choice = block.getFieldValue('convert_choice');

  var code = "int(" + convert_str + ", " + convert_choice + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 10进制整数 %1 转化为 %2
Blockly.Python['mpython_ten_convert_to'] = function (block) {
  var int_num = Blockly.Python.valueToCode(block, 'int_num', Blockly.Python.ORDER_ATOMIC);
  var ten_convert_to = block.getFieldValue('ten_convert_to');

  var code = ten_convert_to + '(' + int_num + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 数字值
Blockly.Python['mpython_high_low'] = function (block) {
  var high_low = block.getFieldValue('high_low');
  var code = high_low;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 波特率
Blockly.Python['mpython_baudrate'] = function (block) {
  var baudrate = block.getFieldValue('baudrate');

  var code = baudrate;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// 子綫程
Blockly.Python['mpython_define_thread'] = function (block) {
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    var thread = block.getFieldValue('THREAD');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    Blockly.Python.functions_['thread_' + thread] = 'def thread_' + thread + '():\n' + branch;
    return '';
};

Blockly.Python['mpython3_define_thread'] = function (block) {
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    var thread = block.getFieldValue('THREAD');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.functions_['thread_' + thread] = 'def thread_' + thread + '():\n' + branch;
    return null;
};

Blockly.Python['mpython_run_thread'] = function (block) {
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    var thread = block.getFieldValue('THREAD');
    var code = '_thread.start_new_thread(thread_' + thread + ', ())\n';  
    return code;
};

Blockly.Python['mpython_start_new_thread'] = function (block) {
    Blockly.Python.definitions_['import_thread'] = 'import _thread';
    // var thread_name = Blockly.Python.valueToCode(block, 'thread_name', Blockly.Python.ORDER_ATOMIC);
    var thread_name = block.getFieldValue('thread_name');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    Blockly.Python.functions_['thread_' + thread_name] = 'def thread_' + thread_name + '():\n' + branch;
    var code = '_thread.start_new_thread(thread_' + thread_name + ', ())\n';
    return code;
};



// text内容是否为number
Blockly.Python['text_is_number'] = function (block) {
  var input_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var type = block.getFieldValue('TYPE');
  var code = input_text + type;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// 线程锁对象 %1 请求锁
Blockly.Python['mpython_lock_object_acquire_lock'] = function (block) {
  Blockly.Python.definitions_['import_thread'] = 'import _thread';
  var thread_lock_object = block.getFieldValue('thread_lock_object');
  Blockly.Python.definitions_['def_thread_lock_object'] = thread_lock_object + ' = _thread.allocate_lock()';

  var code = thread_lock_object + '.acquire()\n';
  return code;
};






// 格式化字符串 % 方式
Blockly.Python['text_format'] = function (block) {
  var format = Blockly.Python.valueToCode(block, 'FORMAT', Blockly.Python.ORDER_ATOMIC);
  var content = Blockly.Python.valueToCode(block, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
  var code = format + " % " + content;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 格式化字符串 format 方式
Blockly.Python['text_format2'] = function (block) {
  var format = Blockly.Python.valueToCode(block, 'FORMAT', Blockly.Python.ORDER_ATOMIC);
  var content = Blockly.Python.valueToCode(block, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
  var code = format + ".format" + content;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// 字节 %1 转 字符串
Blockly.Python['mpython_bytes_decode'] = function (block) {
  var bytes_decode = Blockly.Python.valueToCode(block, 'bytes_decode', Blockly.Python.ORDER_ATOMIC);

  var code = `${bytes_decode}.decode('UTF-8','ignore')`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// text转字节
Blockly.Python['text_to_byte'] = function (block) {
  var input_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  // if(typeof input_text == "string"){
  // var code = "bytes(" + input_text + ", 'utf-8')";
  // }else{
  // code = "bytes(" + input_text + ")";
  // }
  // alert(typeof input_text);

  // Blockly.Python.functions_['to_byte'] =
  // 'def to_byte(_input):\n' +
  // '    if type(_input) == str:\n'+
  // '        return bytes(_input, \'utf-8\')\n'+
  // '    else:\n'+
  // '        return bytes(_input)\n';

  var code = "bytes(" + input_text + ", 'utf-8')";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 非文本转字节
Blockly.Python['other_to_byte'] = function (block) {
  var input_var = Blockly.Python.valueToCode(block, 'input_var', Blockly.Python.ORDER_ATOMIC);
  var code = "bytes(" + input_var + ")";

  return [code, Blockly.Python.ORDER_ATOMIC];
};





// 按位取反 ，~a
Blockly.Python['bit_inversion'] = function (block) {
  var data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var code = '~' + data;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/*try_except*/
Blockly.Python['mpython_try_except'] = function (block) {
  var tryCode = Blockly.Python.statementToCode(block, 'TRY') ||
    Blockly.Python.PASS;
  var exceptCode = Blockly.Python.statementToCode(block, 'EXCEPT') ||
    Blockly.Python.PASS;
  return 'try:\n' + tryCode + 'except:\n' + exceptCode;
};

Blockly.Python['mpython_try_except_finally'] = function (block) {
  var tryCode = Blockly.Python.statementToCode(block, 'TRY') ||
    Blockly.Python.PASS;
  var exceptCode = Blockly.Python.statementToCode(block, 'EXCEPT') ||
    Blockly.Python.PASS;
  var finallyCode = Blockly.Python.statementToCode(block, 'FINALLY') ||
    Blockly.Python.PASS;
  return 'try:\n' + tryCode + 'except:\n' + exceptCode + 'finally:\n' + finallyCode;
};
/*try_except*/




/*文本- 开始 */
// 附加文本
Blockly.Python['text_append_text'] = function (block) {
  var text_abc = Blockly.Python.valueToCode(block, 'text_abc', Blockly.Python.ORDER_ATOMIC);
  var append_text = Blockly.Python.valueToCode(block, 'append_text', Blockly.Python.ORDER_ATOMIC);
  var code = "str(" + text_abc + ")" + " + str(" + append_text + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 自定义代码
Blockly.Python['mpython_custom_code'] = function (block) {
  var custom_type = block.getFieldValue('custom_type');
  var custom_code = block.getFieldValue('custom_code');
  if ('topping' == custom_type) {
    Blockly.Python.definitions_['import_custom'] = custom_code;
    return '';
  } else {
    return custom_code + '\n';
  }
};

/*文本 - 结束 */




// 复位
Blockly.Python['mpython_machine_reset'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = 'machine.reset()\n';
  return code;
};



// 数学 - random.randrange
Blockly.Python['math_random_randrange'] = function (block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.functions_['random_seed'] = 'random.seed(time.ticks_cpu())';
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_random'] = 'import random';
  var start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
  // var stop1 = Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC);
  // var stop = parseInt(stop1) + parseInt(1);
  var stop = Blockly.Python.valueToCode(block, 'stop', Blockly.Python.ORDER_ATOMIC);
  var step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  var code = 'random.randrange(' + start + ', ' + stop + ', ' + step + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 数学 - 图形化角度
Blockly.Python['math_angle'] = function (block) {
  var code = block.getFieldValue('angle');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 数学 - 保留几位小数
Blockly.Python['math_keep_decimal'] = function (block) {
  var num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
  var place = Blockly.Python.valueToCode(block, 'PLACE', Blockly.Python.ORDER_ATOMIC);
  var code = 'round(' + num + ', ' + place + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};





/**
引用labplus-数学-映射
*/
//映射，放在数学目录
Blockly.Python['labplus_mapping'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var inputNum = Blockly.Python.valueToCode(block, 'inputNum', Blockly.Python.ORDER_ATOMIC);
  var outputNum = Blockly.Python.valueToCode(block, 'outputNum', Blockly.Python.ORDER_ATOMIC);
  var bMin = Blockly.Python.valueToCode(block, 'bMin', Blockly.Python.ORDER_ATOMIC);
  var bMax = Blockly.Python.valueToCode(block, 'bMax', Blockly.Python.ORDER_ATOMIC);
  var cMin = Blockly.Python.valueToCode(block, 'cMin', Blockly.Python.ORDER_ATOMIC);
  var cMax = Blockly.Python.valueToCode(block, 'cMax', Blockly.Python.ORDER_ATOMIC);
  /*
  Blockly.Python.definitions_['labplus_mapping'] = 'def numberMap(inputNum,bMin,bMax,cMin,cMax):\n'+
  '    outputNum = 0\n'+
  '    outputNum =((cMax - cMin) / (bMax - bMin))*(inputNum - bMin)+cMin\n'+
  '    return outputNum\n';*/
  var code = 'numberMap(' + inputNum + ',' + bMin + ',' + bMax + ',' + cMin + ',' + cMax + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};



//定时器
Blockly.Python['mpython_Timer'] = function (block) {
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var Num = Blockly.Python.valueToCode(block, 'Num', Blockly.Python.ORDER_ATOMIC);
  var period = Blockly.Python.valueToCode(block, 'period', Blockly.Python.ORDER_ATOMIC);
  var Timer_mode = block.getFieldValue('Timer_mode');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.definitions_['timer' + Num + '_tick'] = 'def timer' + Num + '_tick(_):\n' + branch;
  Blockly.Python.definitions_['def_Timer' + Num] = 'tim' + Num + ' = Timer(' + Num + ')';
  var code = 'tim' + Num + '.init(period=' + period + ', mode=Timer.' + Timer_mode + ', callback=timer' + Num + '_tick)\n';
  return code;
};

Blockly.Python['mpython_timer_def'] = function (block) {
    Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
    var Num = Blockly.Python.valueToCode(block, 'Num', Blockly.Python.ORDER_ATOMIC);
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
    Blockly.Python.definitions_['timer' + Num + '_tick'] = 'def timer' + Num + '_tick(_):\n' + branch;
    Blockly.Python.definitions_['def_Timer' + Num] = 'tim' + Num + ' = Timer(' + Num + ')';
    return null;
};

Blockly.Python['mpython_timer_init'] = function (block) {
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var Num = Blockly.Python.valueToCode(block, 'Num', Blockly.Python.ORDER_ATOMIC);
  var period = Blockly.Python.valueToCode(block, 'period', Blockly.Python.ORDER_ATOMIC);
  var Timer_mode = block.getFieldValue('Timer_mode');
  var code = 'tim' + Num + '.init(period=' + period + ', mode=Timer.' + Timer_mode + ', callback=timer' + Num + '_tick)\n';
  return code;
};

// 定时器选项
Blockly.Python['mpython_timer_option'] = function (block) {
  var code = block.getFieldValue('Timer_num');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 自定义事件选项
Blockly.Python['mpython_event_option'] = Blockly.Python['mpython_timer_option'];

// 定时器- 当前计数值
Blockly.Python['mpython_Timer_value'] = function (block) {
  //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  //Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var Timer_num = Blockly.Python.valueToCode(block, 'Timer_num', Blockly.Python.ORDER_ATOMIC);

  var code = 'tim' + Timer_num + '.value()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//取消定时器的初始化。停止计时器，并禁用计时器外围设备
Blockly.Python['mpython_Timer_deinit'] = function (block) {
  //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  //Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var Timer_num = Blockly.Python.valueToCode(block, 'Timer_num', Blockly.Python.ORDER_ATOMIC);

  var code = 'tim' + Timer_num + '.deinit()\n';
  return code;
};

//中断-引脚
Blockly.Python['mpython_Interrupt_pin'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var Interrupt_pin = Blockly.Python.valueToCode(block, 'Interrupt_pin', Blockly.Python.ORDER_ATOMIC);
  // var Interrupt_pin = block.getFieldValue('Interrupt_pin');
  var action = block.getFieldValue('action');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  var irq = ("to_high" == action) ? "IRQ_RISING" : "IRQ_FALLING";
  Blockly.Python.definitions_['PinMode_IN' + Interrupt_pin] = 'p' + Interrupt_pin + ' = MPythonPin(' + Interrupt_pin + ', PinMode.IN)';
  Blockly.Python.definitions_['on_pin' + Interrupt_pin] =
    'def on_pin' + Interrupt_pin + '(_):\n' +
    '    if 0 == _.value():\n' +
    '        on_pin' + Interrupt_pin + '_to_low(_)\n' +
    '    else:\n' +
    '        on_pin' + Interrupt_pin + '_to_high(_)';
  Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_' + action] =
    'def on_pin' + Interrupt_pin + '_' + action + '(_):\n' + branch;
  Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=Pin.' + irq + ', handler=on_pin' + Interrupt_pin + '_' + action + ')';
  if ("to_high" == action) {
    if (Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_to_low']) {
      Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_pin' + Interrupt_pin + ')';
    } else {
      Blockly.Python.definitions_['on_pin' + Interrupt_pin] = "";
    }
  } else {
    if (Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_to_high']) {
      Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_pin' + Interrupt_pin + ')';
    } else {
      Blockly.Python.definitions_['on_pin' + Interrupt_pin] = "";
    }
  }
  return '';
};

//中断-引脚
Blockly.Python['mpython3_interrupt_pin'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var Interrupt_pin = Blockly.Python.valueToCode(block, 'Interrupt_pin', Blockly.Python.ORDER_ATOMIC);
  // var Interrupt_pin = block.getFieldValue('Interrupt_pin');
  var action = block.getFieldValue('action');
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
  var irq = ("to_high" == action) ? "IRQ_RISING" : "IRQ_FALLING";
  Blockly.Python.definitions_['PinMode_IN' + Interrupt_pin] = 'p' + Interrupt_pin + ' = MPythonPin(' + Interrupt_pin + ', PinMode.IN)';
  Blockly.Python.definitions_['on_pin' + Interrupt_pin] =
    'def on_pin' + Interrupt_pin + '(_):\n' +
    '    if 0 == _.value():\n' +
    '        on_pin' + Interrupt_pin + '_to_low(_)\n' +
    '    else:\n' +
    '        on_pin' + Interrupt_pin + '_to_high(_)';
  Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_' + action] =
    'def on_pin' + Interrupt_pin + '_' + action + '(_):\n' + branch;
  Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=Pin.' + irq + ', handler=on_pin' + Interrupt_pin + '_' + action + ')';
  if ("to_high" == action) {
    if (Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_to_low']) {
      Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_pin' + Interrupt_pin + ')';
    } else {
      Blockly.Python.definitions_['on_pin' + Interrupt_pin] = "";
    }
  } else {
    if (Blockly.Python.definitions_['on_pin' + Interrupt_pin + '_to_high']) {
      Blockly.Python.functions_['Interrupt_pin' + Interrupt_pin] = 'p' + Interrupt_pin + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_pin' + Interrupt_pin + ')';
    } else {
      Blockly.Python.definitions_['on_pin' + Interrupt_pin] = "";
    }
  }
  return null;
};

//中断-按键
Blockly.Python['mpython_Interrupt_AB'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var button_AB = block.getFieldValue('button');
  var action = block.getFieldValue('action');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  var irq = ("down" == action) ? "IRQ_FALLING" : "IRQ_RISING";
  Blockly.Python.definitions_['on_' + button_AB] =
    'def on_' + button_AB + '(_):\n' +
    '    if 0 == _.value():\n' +
    '        on_' + button_AB + '_down(_)\n' +
    '    else:\n' +
    '        on_' + button_AB + '_up(_)';
  var debounce = '    time.sleep_ms(10)\n' +
	'    if ' + button_AB + '.value() == ' + (("down" == action) ? '1' : '0') +': return\n';
  Blockly.Python.definitions_['on_' + button_AB + '_' + action] =
    'def on_' + button_AB + '_' + action + '(_):\n' + debounce + branch;
  Blockly.Python.functions_['Interrupt_' + button_AB] = button_AB + '.irq(trigger=Pin.' + irq + ', handler=on_' + button_AB + '_' + action + ')';
  if ("down" == action) {
    if (Blockly.Python.definitions_['on_' + button_AB + '_up']) {
      Blockly.Python.functions_['Interrupt_' + button_AB] = button_AB + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_' + button_AB + ')';
    } else {
      Blockly.Python.definitions_['on_' + button_AB] = "";
    }
  } else {
    if (Blockly.Python.definitions_['on_' + button_AB + '_down']) {
      Blockly.Python.functions_['Interrupt_' + button_AB] = button_AB + '.irq(trigger=(Pin.IRQ_FALLING | Pin.IRQ_RISING), handler=on_' + button_AB + ')';
    } else {
      Blockly.Python.definitions_['on_' + button_AB] = "";
    }
  }
  return '';
};

// 是否倾斜
Blockly.Python['mpython_is_tilted'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var direction = block.getFieldValue('direction');
  switch (direction) {
    case "forward":
      return ['accelerometer.get_x() < -0.3', Blockly.Python.ORDER_ATOMIC];
    case "back":
      return ['accelerometer.get_x() > 0.3', Blockly.Python.ORDER_ATOMIC];
    case "right":
      return ['accelerometer.get_y() < -0.3', Blockly.Python.ORDER_ATOMIC];
    case "left":
      return ['accelerometer.get_y() > 0.3', Blockly.Python.ORDER_ATOMIC];
    default:
      return "";
  }
};

// 倾斜检测器
Blockly.Python['mpython_tilt_detector'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var direction = block.getFieldValue('direction');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.definitions_['def_dir'] = '_dir = \'\'\n' +
    'def on_tilt_forward():pass\n' +
    'def on_tilt_back():pass\n' +
    'def on_tilt_right():pass\n' +
    'def on_tilt_left():pass\n' +
    'def on_tilt_none():pass\n';
  Blockly.Python.definitions_['def_Timer14'] = 'tim14 = Timer(14)';
  Blockly.Python.definitions_['timer14_tick'] = 'def timer14_tick(_):\n' +
    "    global _dir\n" +
    "    if accelerometer.get_x() < -0.3:\n" +
    "        if 'F' != _dir:_dir = 'F';on_tilt_forward()\n" +
    "    elif accelerometer.get_x() > 0.3:\n" +
    "        if 'B' != _dir:_dir = 'B';on_tilt_back()\n" +
    "    elif accelerometer.get_y() < -0.3:\n" +
    "        if 'R' != _dir:_dir = 'R';on_tilt_right()\n" +
    "    elif accelerometer.get_y() > 0.3:\n" +
    "        if 'L' != _dir:_dir = 'L';on_tilt_left()\n" +
    "    else:\n" +
    "        if '' != _dir:_dir = '';on_tilt_none()\n";
  Blockly.Python.definitions_['timer14_init'] = 'tim14.init(period=200, mode=Timer.PERIODIC, callback=timer14_tick)\n';
  Blockly.Python.definitions_['on_tilt_' + direction] = 'def on_tilt_' + direction + '():\n' + branch;
  return '';
};

Blockly.Python['mpython3_tilt_detector'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var direction = block.getFieldValue('direction');
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
  Blockly.Python.definitions_['def_dir'] = '_dir = \'\'\n' +
    'def on_tilt_forward():pass\n' +
    'def on_tilt_back():pass\n' +
    'def on_tilt_right():pass\n' +
    'def on_tilt_left():pass\n' +
    'def on_tilt_none():pass\n';
  Blockly.Python.definitions_['def_Timer14'] = 'tim14 = Timer(14)';
  Blockly.Python.definitions_['timer14_tick'] = 'def timer14_tick(_):\n' +
    "    global _dir\n" +
    "    if accelerometer.get_x() < -0.3:\n" +
    "        if 'F' != _dir:_dir = 'F';on_tilt_forward()\n" +
    "    elif accelerometer.get_x() > 0.3:\n" +
    "        if 'B' != _dir:_dir = 'B';on_tilt_back()\n" +
    "    elif accelerometer.get_y() < -0.3:\n" +
    "        if 'R' != _dir:_dir = 'R';on_tilt_right()\n" +
    "    elif accelerometer.get_y() > 0.3:\n" +
    "        if 'L' != _dir:_dir = 'L';on_tilt_left()\n" +
    "    else:\n" +
    "        if '' != _dir:_dir = '';on_tilt_none()\n";
  Blockly.Python.definitions_['timer14_init'] = 'tim14.init(period=200, mode=Timer.PERIODIC, callback=timer14_tick)\n';
  Blockly.Python.definitions_['on_tilt_' + direction] = 'def on_tilt_' + direction + '():\n' + branch;
  return null;
};

// 是否倾斜
Blockly.Python['mpython_is_shaked'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  Blockly.Python.definitions_['def_shake_variable'] = '_is_shaked = _is_thrown = False\n' +
    '_last_x = _last_y = _last_z = _count_shaked = _count_thrown = 0\n' +
    'def on_shaked():pass\ndef on_thrown():pass\n';
  Blockly.Python.definitions_['def_Timer11'] = 'tim11 = Timer(11)';
  Blockly.Python.definitions_['timer11_tick'] = 'def timer11_tick(_):\n' +
    '    global _is_shaked, _is_thrown, _last_x, _last_y, _last_z, _count_shaked, _count_thrown\n' +
    '    if _is_shaked:\n' +
    '        _count_shaked += 1\n' +
    '        if _count_shaked == 5: _count_shaked = 0\n' +
	'    if _is_thrown:\n' +
	'        _count_thrown += 1\n' +
	'        if _count_thrown == 10: _count_thrown = 0\n' +
	'        if _count_thrown > 0: return\n' +
    '    x=accelerometer.get_x(); y=accelerometer.get_y(); z=accelerometer.get_z()\n' +
	'    _is_thrown = (x * x + y * y + z * z < 0.25)\n' +
	'    if _is_thrown: on_thrown();return\n' +
    '    if _last_x == 0 and _last_y == 0 and _last_z == 0:\n' +
    '        _last_x = x; _last_y = y; _last_z = z; return\n' +
    '    diff_x = x - _last_x; diff_y = y - _last_y; diff_z = z - _last_z\n' +
    '    _last_x = x; _last_y = y; _last_z = z\n' +
    '    if _count_shaked > 0: return\n' +
    '    _is_shaked = (diff_x * diff_x + diff_y * diff_y + diff_z * diff_z > 1)\n' +
    '    if _is_shaked: on_shaked()\n';
  Blockly.Python.definitions_['timer11_init'] = 'tim11.init(period=100, mode=Timer.PERIODIC, callback=timer11_tick)\n';
  var action = block.getFieldValue('action');
  if ('thrown' == action) {
	  return ['_is_thrown', Blockly.Python.ORDER_ATOMIC];
  } else {
	  return ['_is_shaked', Blockly.Python.ORDER_ATOMIC];
  }
};

// 摇晃检测器
Blockly.Python['mpython_shake_detector'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.definitions_['def_shake_variable'] = '_is_shaked = _is_thrown = False\n' +
    '_last_x = _last_y = _last_z = _count_shaked = _count_thrown = 0\n' +
    'def on_shaked():pass\ndef on_thrown():pass\n';
  Blockly.Python.definitions_['def_Timer11'] = 'tim11 = Timer(11)';
  Blockly.Python.definitions_['timer11_tick'] = 'def timer11_tick(_):\n' +
    '    global _is_shaked, _is_thrown, _last_x, _last_y, _last_z, _count_shaked, _count_thrown\n' +
    '    if _is_shaked:\n' +
    '        _count_shaked += 1\n' +
    '        if _count_shaked == 5: _count_shaked = 0\n' +
	'    if _is_thrown:\n' +
	'        _count_thrown += 1\n' +
	'        if _count_thrown == 10: _count_thrown = 0\n' +
	'        if _count_thrown > 0: return\n' +
    '    x=accelerometer.get_x(); y=accelerometer.get_y(); z=accelerometer.get_z()\n' +
	'    _is_thrown = (x * x + y * y + z * z < 0.25)\n' +
	'    if _is_thrown: on_thrown();return\n' +
    '    if _last_x == 0 and _last_y == 0 and _last_z == 0:\n' +
    '        _last_x = x; _last_y = y; _last_z = z; return\n' +
    '    diff_x = x - _last_x; diff_y = y - _last_y; diff_z = z - _last_z\n' +
    '    _last_x = x; _last_y = y; _last_z = z\n' +
    '    if _count_shaked > 0: return\n' +
    '    _is_shaked = (diff_x * diff_x + diff_y * diff_y + diff_z * diff_z > 1)\n' +
    '    if _is_shaked: on_shaked()\n';
  Blockly.Python.definitions_['timer11_init'] = 'tim11.init(period=100, mode=Timer.PERIODIC, callback=timer11_tick)\n';
  var action = block.getFieldValue('action');
  if ('thrown' == action) {
	  Blockly.Python.definitions_['on_thrown_event'] = 'def on_thrown():\n' + branch;
  } else {
	  Blockly.Python.definitions_['on_shaked_event'] = 'def on_shaked():\n' + branch;
  }
  return '';
};

Blockly.Python['mpython3_shake_detector'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
  Blockly.Python.definitions_['def_shake_variable'] = '_is_shaked = _is_thrown = False\n' +
    '_last_x = _last_y = _last_z = _count_shaked = _count_thrown = 0\n' +
    'def on_shaked():pass\ndef on_thrown():pass\n';
  Blockly.Python.definitions_['def_Timer11'] = 'tim11 = Timer(11)';
  Blockly.Python.definitions_['timer11_tick'] = 'def timer11_tick(_):\n' +
    '    global _is_shaked, _is_thrown, _last_x, _last_y, _last_z, _count_shaked, _count_thrown\n' +
    '    if _is_shaked:\n' +
    '        _count_shaked += 1\n' +
    '        if _count_shaked == 5: _count_shaked = 0\n' +
	'    if _is_thrown:\n' +
	'        _count_thrown += 1\n' +
	'        if _count_thrown == 10: _count_thrown = 0\n' +
	'        if _count_thrown > 0: return\n' +
    '    x=accelerometer.get_x(); y=accelerometer.get_y(); z=accelerometer.get_z()\n' +
	'    _is_thrown = (x * x + y * y + z * z < 0.25)\n' +
	'    if _is_thrown: on_thrown();return\n' +
    '    if _last_x == 0 and _last_y == 0 and _last_z == 0:\n' +
    '        _last_x = x; _last_y = y; _last_z = z; return\n' +
    '    diff_x = x - _last_x; diff_y = y - _last_y; diff_z = z - _last_z\n' +
    '    _last_x = x; _last_y = y; _last_z = z\n' +
    '    if _count_shaked > 0: return\n' +
    '    _is_shaked = (diff_x * diff_x + diff_y * diff_y + diff_z * diff_z > 1)\n' +
    '    if _is_shaked: on_shaked()\n';
  Blockly.Python.definitions_['timer11_init'] = 'tim11.init(period=100, mode=Timer.PERIODIC, callback=timer11_tick)\n';
  var action = block.getFieldValue('action');
  if ('thrown' == action) {
	  Blockly.Python.definitions_['on_thrown_event'] = 'def on_thrown():\n' + branch;
  } else {
	  Blockly.Python.definitions_['on_shaked_event'] = 'def on_shaked():\n' + branch;
  }
  return null;
};

// 触摸检测器
Blockly.Python['mpython_touch_event'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var touchPad = block.getFieldValue('touchPad');
  var action = block.getFieldValue('action');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  Blockly.Python.definitions_['def_touch_status'] =
    '_status_p = _status_y = _status_t = _status_h = _status_o = _status_n = 0\n' +
    'def on_touchpad_P_pressed():pass\n' +
    'def on_touchpad_P_unpressed():pass\n' +
    'def on_touchpad_Y_pressed():pass\n' +
    'def on_touchpad_Y_unpressed():pass\n' +
    'def on_touchpad_T_pressed():pass\n' +
    'def on_touchpad_T_unpressed():pass\n' +
    'def on_touchpad_H_pressed():pass\n' +
    'def on_touchpad_H_unpressed():pass\n' +
    'def on_touchpad_O_pressed():pass\n' +
    'def on_touchpad_O_unpressed():pass\n' +
    'def on_touchpad_N_pressed():pass\n' +
    'def on_touchpad_N_unpressed():pass';
  Blockly.Python.definitions_['def_Timer12'] = 'tim12 = Timer(12)';
  Blockly.Python.definitions_['timer12_tick'] = 'def timer12_tick(_):\n' +
    '    global _status_p, _status_y, _status_t, _status_h, _status_o, _status_n\n' +
    '    try:\n' +
    '        touchPad_P.read();pass\n' +
    '    except:\n' +
    '        return\n' +
    '    if touchPad_P.read() < 400:\n' +
    '        if 1 != _status_p:_status_p = 1;on_touchpad_P_pressed()\n' +
    '    elif 0 != _status_p:_status_p = 0;on_touchpad_P_unpressed()\n' +
    '    if touchPad_Y.read() < 400:\n' +
    '        if 1 != _status_y:_status_y = 1;on_touchpad_Y_pressed()\n' +
    '    elif 0 != _status_y:_status_y = 0;on_touchpad_Y_unpressed()\n' +
    '    if touchPad_T.read() < 400:\n' +
    '        if 1 != _status_t:_status_t = 1;on_touchpad_T_pressed()\n' +
    '    elif 0 != _status_t:_status_t = 0;on_touchpad_T_unpressed()\n' +
    '    if touchPad_H.read() < 400:\n' +
    '        if 1 != _status_h:_status_h = 1;on_touchpad_H_pressed()\n' +
    '    elif 0 != _status_h:_status_h = 0;on_touchpad_H_unpressed()\n' +
    '    if touchPad_O.read() < 400:\n' +
    '        if 1 != _status_o:_status_o = 1;on_touchpad_O_pressed()\n' +
    '    elif 0 != _status_o:_status_o = 0;on_touchpad_O_unpressed()\n' +
    '    if touchPad_N.read() < 400:\n' +
    '        if 1 != _status_n:_status_n = 1;on_touchpad_N_pressed()\n' +
    '    elif 0 != _status_n:_status_n = 0;on_touchpad_N_unpressed()';
  Blockly.Python.definitions_['timer12_init'] = 'tim12.init(period=100, mode=Timer.PERIODIC, callback=timer12_tick)\n';
  Blockly.Python.definitions_['on_touchpad_' + touchPad + '_' + action] =
    'def on_touchpad_' + touchPad + '_' + action + '():\n' + branch;
  return '';
};

// 自定义事件
Blockly.Python['mpython_custom_event'] = function (block) {
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  var i = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['def_event_' + i] = '_event_changed_' + i + ' = False';
  var condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['def_Timer' + i] = 'tim' + i + ' = Timer(' + i + ')';
  Blockly.Python.definitions_['timer' + i + '_tick'] = 'def timer' + i + '_tick(_):\n' +
    '    global _event_changed_' + i + '\n' +
    '    if ' + condition + ':\n' +
    '        if not _event_changed_' + i + ': _event_changed_' + i + ' = True; on_custom_event_' + i + '()\n' +
    '    else: _event_changed_' + i + ' = False';
  Blockly.Python.definitions_['on_custom_event_' + i] = 'def on_custom_event_' + i + '():\n' + branch;
  return 'tim' + i + '.init(period=100, mode=Timer.PERIODIC, callback=timer' + i + '_tick)\n';
};
 
Blockly.Python['mpython3_custom_event'] = function (block) {
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;
  var i = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['def_event_' + i] = '_event_changed_' + i + ' = False';
  var condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['def_Timer' + i] = 'tim' + i + ' = Timer(' + i + ')';
  Blockly.Python.definitions_['timer' + i + '_tick'] = 'def timer' + i + '_tick(_):\n' +
    '    global _event_changed_' + i + '\n' +
    '    if ' + condition + ':\n' +
    '        if not _event_changed_' + i + ': _event_changed_' + i + ' = True; on_custom_event_' + i + '()\n' +
    '    else: _event_changed_' + i + ' = False';
  Blockly.Python.definitions_['on_custom_event_' + i] = 'def on_custom_event_' + i + '():\n' + branch;
  Blockly.Python.definitions_['def_custom_event_' + i] = 'tim' + i + '.init(period=100, mode=Timer.PERIODIC, callback=timer' + i + '_tick)\n';
  return null;
};
  
//播放范围频率
Blockly.Python['mpython_music_range_pitch'] = function (block) {
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var start = Blockly.Python.valueToCode(block, 'start', Blockly.Python.ORDER_ATOMIC);
  var end = Blockly.Python.valueToCode(block, 'end', Blockly.Python.ORDER_ATOMIC);
  var step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  var time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if (pin == '6') {
    code = 'for freq in range(' + start + ', ' + end + ', ' + step + '):\n' +
      '    music.pitch(freq, ' + time + ')\n';
  } else {
    code = 'for freq in range(' + start + ', ' + end + ', ' + step + '):\n' +
      '    music.pitch(freq, ' + time + ', pin=Pin.P' + pin + ')\n';
  }

  return code;
};

// 掌控 music 引脚
Blockly.Python['mpython_music_pin_p6'] = function (block) {
  var music_pin = block.getFieldValue('music_pin');

  var code = `${music_pin}`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//上电、reset后的系统计时
Blockly.Python['mpython_time_ticks'] = function (block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var time_ticks = block.getFieldValue('time_ticks');
  var code = 'time.' + time_ticks + '()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//获取年月日等
Blockly.Python['mpython_time_localtime'] = function (block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var time_localtime = block.getFieldValue('time_localtime');
  var code = 'time.localtime()[' + time_localtime + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 摇晃 */
Blockly.Python['mpython_sway_xyz'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var direction_group = block.getFieldValue('direction_group');
  var code = 'button_' + direction_group + '.value() == 0';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_sleep_ms'] = function (block) {
  //Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  var ms_us = block.getFieldValue('ms_us');
  // var code = 'sleep_ms(' + value_duration + ')\n';
  switch (ms_us) {
    case 'ms':
    case 'us':
      return 'time.sleep_' + ms_us + '(' + value_duration + ')\n';
    case 's':
      return 'time.sleep(' + value_duration + ')\n';
    default:
      return '';
  }
};

//运行时间差
Blockly.Python['mpython_time_difference'] = function (block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var time1 = Blockly.Python.valueToCode(block, 'time1', Blockly.Python.ORDER_ATOMIC);
  var time2 = Blockly.Python.valueToCode(block, 'time2', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.ticks_diff(' + time1 + ', ' + time2 + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};





//舵机
Blockly.Python['mpython_servo_angle0'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_servo'] = 'from servo import Servo';
  // var pwm_pin = block.getFieldValue('pwm_pin');
  var pwm_pin = Blockly.Python.valueToCode(block, 'pwm_pin', Blockly.Python.ORDER_ATOMIC);
  var servo_angle = Blockly.Python.valueToCode(block, 'servo_angle', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.functions_['Servo_define' + pwm_pin] = 'servo_' + pwm_pin + ' = Servo(' + pwm_pin + ', min_us=500, max_us=2500, actuation_range=180)'; //实例化
  var code = 'servo_' + pwm_pin + '.write_angle(' + servo_angle + ')\n';
  return code;
};

//舵机
Blockly.Python['mpython_servo_angle'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_servo'] = 'from servo import Servo';
  // var pwm_pin = block.getFieldValue('pwm_pin');
  var pwm_pin = Blockly.Python.valueToCode(block, 'pwm_pin', Blockly.Python.ORDER_ATOMIC);
  var min_us = Blockly.Python.valueToCode(block, 'min_us', Blockly.Python.ORDER_ATOMIC);
  var max_us = Blockly.Python.valueToCode(block, 'max_us', Blockly.Python.ORDER_ATOMIC);
  var actuation_range = Blockly.Python.valueToCode(block, 'actuation_range', Blockly.Python.ORDER_ATOMIC);
  var servo_angle = Blockly.Python.valueToCode(block, 'servo_angle', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.functions_['Servo_define' + pwm_pin] = 'servo_' + pwm_pin + ' = Servo(' + pwm_pin + ', min_us=' + min_us + ', max_us=' + max_us + ', actuation_range=' + actuation_range + ')'; //实例化
  var code = 'servo_' + pwm_pin + '.write_angle(' + servo_angle + ')\n';
  return code;
};

//dht11 温湿度
Blockly.Python['mpython_dh11_hum_tem'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  // var dh11_hum_tem_pin = block.getFieldValue('dh11_hum_tem_pin');
  var dh11_hum_tem_pin = Blockly.Python.valueToCode(block, 'dh11_hum_tem_pin', Blockly.Python.ORDER_ATOMIC);
  var hum_tem = block.getFieldValue('hum_tem');
  Blockly.Python.definitions_['dh11_define'] = 'dht11 = dht.DHT11(Pin(Pin.P' + dh11_hum_tem_pin + '))';
  Blockly.Python.definitions_['def_Timer13'] = 'tim13 = Timer(13)';
  Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
    '    try: dht11.measure()\n' +
    '    except: pass\n';
  Blockly.Python.definitions_['timer13_init'] = 'tim13.init(period=1000, mode=Timer.PERIODIC, callback=timer13_tick)\n';
  var code = 'dht11.' + hum_tem + '()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//dht22 温湿度
Blockly.Python['mpython_dh22_hum_tem'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  Blockly.Python.definitions_['import_dht'] = 'import dht';
  // var dh22_hum_tem_pin = block.getFieldValue('dh22_hum_tem_pin');
  var dh22_hum_tem_pin = Blockly.Python.valueToCode(block, 'dh22_hum_tem_pin', Blockly.Python.ORDER_ATOMIC);
  var hum_tem = block.getFieldValue('hum_tem');
  Blockly.Python.definitions_['dh22_define'] = 'dht22 = dht.DHT22(Pin(Pin.P' + dh22_hum_tem_pin + '))';
  Blockly.Python.definitions_['def_Timer13'] = 'tim13 = Timer(13)';
  Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
    '    try: dht22.measure()\n' +
    '    except: pass\n';
  Blockly.Python.definitions_['timer13_init'] = 'tim13.init(period=1000, mode=Timer.PERIODIC, callback=timer13_tick)\n';
  var code = 'dht22.' + hum_tem + '()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/*音符*/
Blockly.Python['mpython_music_note'] = function (block) {
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var gamut = block.getFieldValue('gamut');
  var num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
  var num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
  var code = "'" + gamut + num1 + ':' + num2 + "'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};




// 构建Clock对象
Blockly.Python['mpython_def_clock'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var clock_name = block.getFieldValue('clock_name');
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var radius = Blockly.Python.valueToCode(block, 'radius', Blockly.Python.ORDER_ATOMIC);
  // Blockly.Python.functions_['def_clock'] = 'clock = UI.Clock(' + x + ', ' + y + ', ' +  radius + ')';
  Blockly.Python.functions_['def_clock' + clock_name] = clock_name + ' = Clock(oled, ' + x + ', ' + y + ', ' + radius + ')';
  var code = '';
  return code;
};
// 获取本地时间并设置模拟钟表时间
Blockly.Python['mpython_settime_clock'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var clock_name = block.getFieldValue('clock_name');
  var code = clock_name + '.settime()\n';
  return code;
};
// 绘制钟表 ,清除钟表
Blockly.Python['mpython_draw_clear_clock'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var draw_clear_clock = block.getFieldValue('draw_clear_clock');
  var clock_name = block.getFieldValue('clock_name');
  var code = clock_name + '.' + draw_clear_clock + '()\n';
  return code;
};


/* 按键开始 */
Blockly.Python['mpython_button_is_pressed'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var dropdown_button = block.getFieldValue('button');

  if (dropdown_button === 'A+B') {
    var code = 'button_a.value() == 0 and button_b.value() == 0';
  } else {
    var code = 'button_' + dropdown_button + '.value() == 0';
  }

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_button_both_pressed'] = function (block) { //弃用
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  //var dropdown_button = block.getFieldValue('button');
  var code = 'button_a.value() == 0 and button_b.value() == 0';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_touchPad_value'] = function (block) { // 被触摸
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var dropdown_touchPad = block.getFieldValue('touchPad');
  var code = 'touchPad_' + dropdown_touchPad + '.read() < 400';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_touchPad_value_num'] = function (block) { // 触摸值
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var dropdown_touchPad = block.getFieldValue('touchPad');
  var code = 'touchPad_' + dropdown_touchPad + '.read()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
/* 按键结束 */

/* 引脚开始 */
Blockly.Python['mpython_read_digital'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  // var allPin = block.getFieldValue('allPin');
  var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['set_PinMode_in_' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.IN)';
  //Blockly.Python.definitions_['set_PinMode_in'] = 'p'+ allPin + ' = MPythonPin(' + allPin + ', PinMode.IN)';
  var code = 'p' + allPin + '.read_digital()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


/* DS18B20 防水温度传感器 */
Blockly.Python['mpython_read_ds18b20'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['machine_Timer'] = 'from machine import Timer';
  Blockly.Python.definitions_['import_onewire'] = 'import onewire';
  Blockly.Python.definitions_['import_ds18x20'] = 'import ds18x20';
  var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
  /*
  Blockly.Python.definitions_['ds18x20_define'] = 'ow = onewire.OneWire(Pin(Pin.P'+ allPin + '))\n' +
  'ds = ds18x20.DS18X20(ow)\n' +
  'roms = ds.scan()\n' +
  '_ds18x20_value = 0\n';*/
  Blockly.Python.definitions_['ds18x20_list_define'] = '_ds18x20_list = []';
  Blockly.Python.definitions_['def_Timer13'] = 'tim13 = Timer(13)';
	/*
  Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
	'    global _ds18x20_value\n' +
    '    try:\n' +
	'        ds.convert_temp()\n' +
	'        for rom in roms: _ds18x20_value = ds.read_temp(rom);break\n' +
    '    except: pass\n';*/
  Blockly.Python.definitions_['timer13_tick'] = 'def timer13_tick(_):\n' +
//	'    global _ds18x20_value_0, _ds18x20_value_1, _ds18x20_value_2, _ds18x20_value_3, _ds18x20_value_4, _ds18x20_value_6, _ds18x20_value_7, _ds18x20_value_8, _ds18x20_value_9, _ds18x20_value_10, _ds18x20_value_13, _ds18x20_value_14, _ds18x20_value_15, _ds18x20_value_16, _ds18x20_value_19, _ds18x20_value_20\n' +
	'    for p in _ds18x20_list:\n' +
    '        try:\n' +
	'            eval("ds_" + p + ".convert_temp()")\n' +
	'            for rom in eval("roms_" + p):\n' +
	'                t = eval("ds_" + p).read_temp(rom)\n' +
//	'                eval("_ds18x20_value_" + p) = t\n' +
	'                eval("set_ds_value_" + p + "(" + str(t) + ")")\n' +
	'                break\n' +
    '        except: pass\n';
  Blockly.Python.definitions_['timer13_init'] = 'tim13.init(period=1000, mode=Timer.PERIODIC, callback=timer13_tick)\n';
  Blockly.Python.functions_['set_ds_value_' + allPin] = 'def set_ds_value_' + allPin + '(_t):\n' +
	'    global _ds18x20_value_' + allPin + '\n' +
	'    _ds18x20_value_' + allPin + ' = _t\n';  
  Blockly.Python.functions_['ds18x20_value' + allPin] = 'ow_'+ allPin + ' = onewire.OneWire(Pin(Pin.P'+ allPin + '))\n' +
	'ds_'+ allPin + ' = ds18x20.DS18X20(ow_'+ allPin + ')\n' +
	'roms_'+ allPin + ' = ds_'+ allPin + '.scan()\n' +
	'_ds18x20_value_'+ allPin + ' = 0\n' +
	'_ds18x20_list.append(str(' + allPin + '))\n';
  /*
  Blockly.Python.functions_['get_ds18x20_value'] = 'def get_ds18x20_value():\n' +
  '    global _ds18x20_value\n' +
  '    return _ds18x20_value\n';*/
  
  var code = '_ds18x20_value_' + allPin;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_set_digital'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // var allPin = block.getFieldValue('allPin');
  var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['set_PinMode_out_' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.OUT)';
  //Blockly.Python.definitions_['set_PinMode_out'] = 'p'+ allPin + ' = MPythonPin(' + allPin + ', PinMode.OUT)';
  var code = 'p' + allPin + '.write_digital(' + num + ')\n';
  return code;
};

// 新的
// 数字引脚，上下拉，输入/推挽输出/开漏输出
Blockly.Python['mpython_set_pin_mode'] = function (block) {
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  // var allPin = block.getFieldValue('allPin');
  var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
  var in_out = block.getFieldValue('in_out');
  var pin_up_down_pull = block.getFieldValue('pin_up_down_pull');
  var pin_value = Blockly.Python.valueToCode(block, 'pin_value', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.functions_['set_PinMode' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.' + in_out + ', ' + pin_up_down_pull + ')';
  var code = 'p' + allPin + '.write_digital(' + pin_value + ')\n';
  return code;
};

// type
Blockly.Python['mpython_type'] = function (block) {
  var VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'None';
  var code = 'type(' + VAR + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// type is
Blockly.Python['mpython_type_is'] = function (block) {
  var VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'None';
  var TYPE = block.getFieldValue('TYPE');
  var code = 'type(' + VAR + ') == ' + TYPE;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// eval
Blockly.Python['mpython_eval'] = function (block) {
  var VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'None';
  var code = 'eval(' + VAR + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// return
Blockly.Python['mpython_return'] = function (block) {
  var VAR = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'None';
  var code = 'return ' + VAR + '\n';
  return code;
};

Blockly.Python['mpython_read_analog'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  // var allPin = block.getFieldValue('allPin');
  var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC)
  Blockly.Python.definitions_['set_PinMode_in_' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.ANALOG)';
  //Blockly.Python.definitions_['set_PinMode_in'] = 'p'+ allPin + ' = MPythonPin(' + allPin + ', PinMode.ANALOG)';
  var code = 'p' + allPin + '.read_analog()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_set_analog'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  // var allPin = block.getFieldValue('allPin');
  var allPin = Blockly.Python.valueToCode(block, 'allPin', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['set_PinMode_out_' + allPin] = 'p' + allPin + ' = MPythonPin(' + allPin + ', PinMode.PWM)';
  //Blockly.Python.definitions_['set_PinMode_out'] = 'p'+ allPin + ' = MPythonPin(' + allPin + ', PinMode.PWM)';
  var code = 'p' + allPin + '.write_analog(' + num + ')\n';
  return code;
};

/* RGB */
Blockly.Python['mpython_rgb_list'] = function (block) {
	var code = block.getFieldValue('rgb_list');
	return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['mpython_set_rgb_list_color'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var color = block.getFieldValue('COLOUR');
  var r = 0;
  var g = 0;
  var b = 0;
  try {
    if (color.length == 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    }
  } catch (e) { }

  var code = '';
  switch(num) {
	case '0':
	case '1':
	case '2':
    // 原生亮度的 1/30，能较好显示色差，经测试
    // 再测试，发现 1/30有些颜色无法亮起来，所有取消了
		code = 'rgb[' + num + '] = (int(' + r + '), ' + 'int(' + g + '), ' +
'int(' + b + '))\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
	case '-1':
    code = 'rgb.fill((int(' + r + '), ' + 'int(' + g + '), ' + 'int(' + b + ')))\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
	default:
		code = 'rgb[' + num + '] = (int(' + r + '), ' + 'int(' + g + '), ' +
'int(' + b + '))\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
  }
};

Blockly.Python['mpython_set_rgb_list_number'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  switch(num) {
	case '0':
	case '1':
	case '2':
    code = 'rgb[' + num + '] = (int(' + r + '), ' + 'int(' + g + '), ' +
'int(' + b + '))\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
	case '-1':
    code = 'rgb.fill( (int(' + r + '), ' + 'int(' + g + '), ' + 'int(' + b + ')) )\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
	default:
    code = 'rgb[' + num + '] = (int(' + r + '), ' + 'int(' + g + '), ' +
'int(' + b + '))\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
  }
  return code;
};

Blockly.Python['mpython_off_rgb_list'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  switch(num) {
	case '0':
	case '1':
	case '2':
		code = 'rgb[' + num + '] = (0, 0, 0)\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
	case '-1':
		code = 'rgb.fill( (0, 0, 0) )\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
	default:
		code = 'rgb[' + num + '] = (0, 0, 0)\nrgb.write()\ntime.sleep_ms(1)\n';
		return code;
  }
};

Blockly.Python['mpython_set_RGB_color'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var color = block.getFieldValue('COLOUR');
  var r = 0;
  var g = 0;
  var b = 0;
  try {
    if (color.length == 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    }
  } catch (e) { }

  // 原生亮度的 1/30，能较好显示色差，经测试
  var code = 'rgb[' + num + '] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' +
  'int(' + b + '/30))\nrgb.write()\ntime.sleep_ms(1)\n';
  //var code = 'rgb[' + (num - 1) + '] = ('+ half_r + ', '  + half_g  + ', '  + half_g + ')\n';
  return code;
};

Blockly.Python['mpython_set_RGB_color_all'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  //var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var color = block.getFieldValue('COLOUR');
  var r = 0;
  var g = 0;
  var b = 0;
  try {
    if (color.length == 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    }
  } catch (e) { }

  var code = 'rgb[0] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
    'rgb[1] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
    'rgb[2] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
	'rgb.write()\ntime.sleep_ms(1)\n';
  return code;
};

Blockly.Python['mpython_set_RGB'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  var code = 'rgb[' + num + '] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\nrgb.write()\ntime.sleep_ms(1)\n';
  return code;
};

Blockly.Python['mpython_set_RGB_all'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  //var num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var r = Blockly.Python.valueToCode(block, 'r', Blockly.Python.ORDER_ATOMIC);
  var g = Blockly.Python.valueToCode(block, 'g', Blockly.Python.ORDER_ATOMIC);
  var b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
  var code = 'rgb[0] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
    'rgb[1] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
    'rgb[2] = (int(' + r + '/30), ' + 'int(' + g + '/30), ' + 'int(' + b + '/30))\n' +
	'rgb.write()\ntime.sleep_ms(1)\n';
  return code;
};

Blockly.Python['mpython_fresh_RGB'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'rgb.write()\ntime.sleep_ms(1)\n';
  return '';//code;
};
Blockly.Python['mpython_off_RGB'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_time'] = 'import time';
  // var code =
  // 'rgb[0] = (0,0,0)\n' +
  // 'rgb[1] = (0,0,0)\n' +
  // 'rgb[2] = (0,0,0)\n'  +
  // 'rgb.write()\n';
  var code = 'rgb.fill( (0, 0, 0) )\nrgb.write()\ntime.sleep_ms(1)\n';
  return code;
};

/* 蜂鸣器 */
Blockly.Python['mpython_buzz_state'] = function (block) {
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  //var open_close = block.getFieldValue('open_close');
  // var code = 'buzz.off()\n';
  var code = 'music.stop()\n';
  return code;
};

// 连续播放
Blockly.Python['mpython_buzz_freq'] = function (block) {
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var freq = Blockly.Python.valueToCode(block, 'freq', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if (pin == '6') {
    code = `music.pitch(${freq})` + '\n';
  } else {
    code = `music.pitch(${freq}, -1, pin=Pin.P${pin})` + '\n';
  }

  // var code = `music.pitch(${freq}, -1, pin=Pin.P${pin})` + '\n';
  return code;
};

Blockly.Python['mpython_buzz_tone'] = function (block) {
  // Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var buzz_tone = block.getFieldValue('buzz_tone');
  var code = 'music.pitch(' + buzz_tone + ')\n';
  return code;
};

// 播放音符  几几拍
Blockly.Python['mpython_music_tone_tempo'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  var musical_note = Blockly.Python.valueToCode(block, 'musical_note', Blockly.Python.ORDER_ATOMIC);
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  // var music_tick = block.getFieldValue('music_tick');
  var code = '';
  if (pin == '6') {
    code = "music.play(" + musical_note + ")\n";
  } else {
    code = "music.play(" + musical_note + ', pin=Pin.P' + pin + ")\n";
  }
  // var code =
  //   "music.play(" + musical_note + ', pin=Pin.P' + pin + ")\n";
  return code;
};

/* 下拉音符对应频率 */
Blockly.Python['mpython_music_tone'] = function (block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = block.getFieldValue('music_tone');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 下拉音符本身 */
Blockly.Python['mpython_music_musical_note'] = function (block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var musical_note = block.getFieldValue('musical_note');
  var music_tick = block.getFieldValue('music_tick');
  var code = "'" + musical_note + ":" + music_tick + "'";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 4行 */
Blockly.Python['mpython_4_lines'] = function (block) {
  var code = block.getFieldValue('mpython_4_lines');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 下拉节拍 */
Blockly.Python['mpython_music_tick'] = function (block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = block.getFieldValue('music_tick');
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 声音光线 */
Blockly.Python['mpython_read_sound'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'sound.read()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_read_light'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'light.read()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 加速度 */
Blockly.Python['mpython_accelerometer_get'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var ax = block.getFieldValue('axis');
  var code;
  switch (ax) {
    case "X":
      code = 'accelerometer.get_x()';
      break;
    case "Y":
      code = 'accelerometer.get_y()';
      break;
    case "Z":
      code = 'accelerometer.get_z()';
      break;
    default:
      return "";
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_accelerometer_get_x'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'accelerometer.get_x()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_accelerometer_get_y'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'accelerometer.get_y()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_accelerometer_get_z'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'accelerometer.get_z()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_accelerometer_set_range'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var range = block.getFieldValue('range');
  var code = 'accelerometer.set_range(accelerometer.' + range + ')\n';
  return code;
};

Blockly.Python['mpython_accelerometer_set_resolution'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var resolution = block.getFieldValue('resolution');
  var code = 'accelerometer.set_resolution(accelerometer.' + resolution + ')\n';
  return code;
};

Blockly.Python['mpython_accelerometer_set_offset'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var code = 'accelerometer.set_offset(' + x + ', ' + y + ', ' + z + ')\n';
  return code;
};

Blockly.Python['mpython_tilt_angle'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_math'] = 'import math';
  var ax = block.getFieldValue('axis');
  Blockly.Python.functions_['get_tilt_angle'] = 'def get_tilt_angle(_axis):\n' +
    '    _Ax = accelerometer.get_x()\n' +
    '    _Ay = accelerometer.get_y()\n' +
    '    _Az = accelerometer.get_z()\n' +
    '    if \'X\' == _axis:\n' +
    '        _T = math.sqrt(_Ay ** 2 + _Az ** 2)\n' +
    '        if _Az < 0: return math.degrees(math.atan2(_Ax , _T))\n' +
    '        else: return 180 - math.degrees(math.atan2(_Ax , _T))\n' +
    '    elif \'Y\' == _axis:\n' +
    '        _T = math.sqrt(_Ax ** 2 + _Az ** 2)\n' +
    '        if _Az < 0: return math.degrees(math.atan2(_Ay , _T))\n' +
    '        else: return 180 - math.degrees(math.atan2(_Ay , _T))\n' +
    '    elif \'Z\' == _axis:\n' +
    '        _T = math.sqrt(_Ax ** 2 + _Ay ** 2)\n' +
    '        if (_Ax + _Ay) < 0: return 180 - math.degrees(math.atan2(_T , _Az))\n' +
    '        else: return math.degrees(math.atan2(_T , _Az)) - 180\n' +
    '    return 0';
  var code;
  switch (ax) {
    case "X":
      code = 'get_tilt_angle(\'X\')';
      break;
    case "Y":
      code = 'get_tilt_angle(\'Y\')';
      break;
    case "Z":
      code = 'get_tilt_angle(\'Z\')';
      break;
    default:
      code = "0";
      break;
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};

/* 随机项 */
Blockly.Python['mpython_random_choice'] = function (block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.functions_['random_seed'] = 'random.seed(time.ticks_cpu())';
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  Blockly.Python.definitions_['import_random'] = 'import random';
  var list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var code = 'str(random.choice(' + list + '))';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 外部脉冲电平持续时间 %1 
Blockly.Python['machine_time_pulse_us'] = function (block) {
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  // var pin = block.getFieldValue('pin');
  var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var pulse = Blockly.Python.valueToCode(block, 'pulse', Blockly.Python.ORDER_ATOMIC);
  //var pulse = block.getFieldValue('pulse');
  // var overtime = Blockly.Python.valueToCode(block, 'overtime', Blockly.Python.ORDER_ATOMIC);

  var code = `machine.time_pulse_us(Pin(Pin.P${pin}), ${pulse}, timeout_us=1000000)`
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_print'] = function (block) {
  var content = Blockly.Python.valueToCode(block, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
  var code = 'print(' + content + ')\n';
  return code;
};

Blockly.Python['mpython_print_to_chart'] = function (block) {
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
            Blockly.Python.ORDER_NONE) || 'None';
    }
	var code;
	if ( block.itemCount_ == 1) {
		code = 'print((' + elements[0] + ',))\n';
	} else {
		code = 'print((' + elements.join(', ') + '))\n';
	}
    return code;
};

Blockly.Python['mpython_init_chart'] = function (block) {
	Blockly.Python.definitions_['import_time'] = 'import time';
    var elements = new Array(block.itemCount_ + 1);
	elements[0] = "'__TITLE'";
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i+1] = Blockly.Python.valueToCode(block, 'ADD' + i,
            Blockly.Python.ORDER_NONE) || 'None';
    }
	var code = 'time.sleep_ms(50);print((' + elements.join(', ') + '));time.sleep_ms(50)\n';
    return code;
};

// 通用红外接收
Blockly.Python['mpython_ir_remote_recv'] = function (block) {
	Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
	Blockly.Python.definitions_['import_ir_remote_recv'] = 'from ir_remote import IRDecode';
	var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['define_ir_remote_recv'] = 'remote = IRDecode(Pin.P' + pin + ')';
    var doCode = Blockly.Python.statementToCode(block, 'DO') || Blockly.Python.PASS;
    Blockly.Python.functions_['def_ir_remote_recv'] = 'def remote_callback(_address, _command):\n' + doCode;
	
	var code = 'remote.set_callback(remote_callback)\n';
    return code;
};

Blockly.Python['mpython3_ir_remote_recv'] = function (block) {
	Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
	Blockly.Python.definitions_['import_ir_remote_recv'] = 'from ir_remote import IRDecode';
	var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var doFunc = Blockly.Python.statementToCode(this, 'DO');
	Blockly.Python.definitions_['define_ir_remote_recv'] = 'remote = IRDecode(Pin.P' + pin + ')';

  //var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var branch = doFunc;
  Blockly.Python.functions_['def_ir_remote_recv'] = 'def remote_callback(_address, _command):\n' + branch + '\nremote.set_callback(remote_callback)';

  return null;
};

Blockly.Python['mpython_ir_remote_address'] = function (block) {
    return ['_address', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_ir_remote_message'] = function (block) {
    return ['_command', Blockly.Python.ORDER_ATOMIC];
};

// 通用红外发送
Blockly.Python['mpython_ir_remote_send'] = function (block) {
	Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
	Blockly.Python.definitions_['import_ir_remote_send'] = 'from ir_remote import IRTransmit';
	var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
	Blockly.Python.definitions_['define_ir_remote_send'] = 'ir = IRTransmit(Pin.P' + pin + ')';
	var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
	var command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
	var code = 'ir.send(' + address + ', ' + command + ')\n';
    return code;
}


// MLX90615 设置
Blockly.Python['mpython_MLX90615_set'] = function (block) {
    Blockly.Python.definitions_['import_MLX90615'] = 'from MLX90615 import *';
    var set = Blockly.Python.valueToCode(block, 'set', Blockly.Python.ORDER_ATOMIC);
    var code = 'irTemp.set_emissivity(' + set + ')\n';
    return code;
};

// MLX90615 获取红外测温修正系数
Blockly.Python['mpython_MLX90615_get'] = function () {
    Blockly.Python.definitions_['import_MLX90615'] = 'from MLX90615 import *';
    var code = 'irTemp.get_emissivity()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// MLX90615 获取红外测温
Blockly.Python['mpython_MLX90615_thermometry'] = function () {
    Blockly.Python.definitions_['import_MLX90615'] = 'from MLX90615 import *';
    var code = 'irTemp.get_obj_temp()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


//mq135 2021.06.22添加
//mq135初始化
Blockly.Python['mpython_mq135_init'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_mq135'] = 'from mq135 import MQ135';
    var mq135_pin = Blockly.Python.valueToCode(block, 'mq135_pin', Blockly.Python.ORDER_ATOMIC);
    var temperature = Blockly.Python.valueToCode(block, 'temperature', Blockly.Python.ORDER_ATOMIC);
    var humidity = Blockly.Python.valueToCode(block, 'humidity', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['mq135_init'] = 'mq = MQ135(' + mq135_pin + ', '+ temperature+', '+humidity+')';
    // Blockly.Python.definitions_['mq135_init_get_corrected_rzero'] = 'mq.get_corrected_rzero()';
    var code = '\n'
    return code;
};

//mq135返回ppm浓度
Blockly.Python['mpython_mq135_options'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    // Blockly.Python.definitions_['mq135_init_get_corrected_rzero'] = 'mq.get_corrected_rzero()';
    var mq135_options = block.getFieldValue('mq135_options');
    var code = 'mq.' + mq135_options + '';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mq135_pin'] = function (block) {
    var mq135_pin = block.getFieldValue('mq135_pin');
    var code = `${mq135_pin}`
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// (实验箱)bme280 温湿度、气压
Blockly.Python['mpython_bme280_hum_tem_pre'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var hum_tem_pre = block.getFieldValue('hum_tem_pre');
    var code = 'bme280.' + hum_tem_pre + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_bme280'] = Blockly.Python['mpython_bme280_hum_tem_pre'];

/* 掌控2.0 */
//磁力计 compass 改为 magnetic

//magnetic.calibrate() #校准
Blockly.Python['mpython_magnetic_calibrate'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  return 'magnetic.calibrate()\n';
};

//magnetic.get_x()/y/z
Blockly.Python['mpython_magnetic_get_axis'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var ax = block.getFieldValue('axis');
  var code;
  switch (ax) {
    case "X":
      code = 'magnetic.get_x()';
      break;
    case "Y":
      code = 'magnetic.get_y()';
      break;
    case "Z":
      code = 'magnetic.get_z()';
      break;
    default:
      return "";
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_compass_get_axis'] = Blockly.Python['mpython_magnetic_get_axis'];

//magnetic.get_heading() # 获取方位角
Blockly.Python['mpython_magnetic_get_heading'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'magnetic.get_heading()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['mpython_compass_get_angle'] = Blockly.Python['mpython_magnetic_get_heading'];

//magnetic.peeling() # 去除当前环境磁场强度
Blockly.Python['mpython_magnetic_peeling'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  return 'magnetic.peeling()\n';
};

//magnetic.get_field_strength() #获取磁场强度
Blockly.Python['mpython_magnetic_get_field_strength'] = function (block) {
  Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
  var code = 'magnetic.get_field_strength()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// 数字转bytes（struct.pack）
Blockly.Python['number_to_bytes'] = function (block) {
  Blockly.Python.definitions_['import_struct'] = 'import struct';
  var order = block.getFieldValue('ORDER');
  var type = block.getFieldValue('TYPE');
  var number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_NONE);
  switch (type) {
    case 'f':
    case 'd':
      number = 'float(' + number + ')';
      break;
    default:
      number = 'int(' + number + ')';
      break;
  }
  var code = 'struct.pack("' + order + type + '", ' + number + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

// bytes转数字（struct.unpack）
Blockly.Python['bytes_to_number'] = function (block) {
  Blockly.Python.definitions_['import_struct'] = 'import struct';
  var order = block.getFieldValue('ORDER');
  var type = block.getFieldValue('TYPE');
  var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_NONE);
  var code = 'struct.unpack("' + order + type + '", ' + data + ')[0]';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['mpython2_accelerometer_event'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var action = block.getFieldValue('ACTION');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_' + action] = 
        'def on_' + action + '(_):\n' + branch;
    
    Blockly.Python.definitions_['define_event_' + action] = 'accelerometer.event_' + action + ' = on_' + action;

    return '';
};

Blockly.Python['mpython3_accelerometer_event'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var action = block.getFieldValue('ACTION');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_' + action] = 
        'def on_' + action + '(_):\n' + branch;
    
    Blockly.Python.definitions_['define_event_' + action] = 'accelerometer.event_' + action + ' = on_' + action;

    return null;
};

Blockly.Python['mpython2_accelerometer_angle'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var type = block.getFieldValue('TYPE');
    var code = '';
    if (type == 'roll') {
        code = 'accelerometer.roll_pitch_angle()[0]';
    } else {
        code = 'accelerometer.roll_pitch_angle()[1]';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_button_is_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'button_' + button + '.is_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_button_was_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'button_' + button + '.was_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_button_get_presses'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'button_' + button + '.get_presses()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_button_event'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_button_' + button + '_' + action] = 
        'def on_button_' + button + '_'  + action + '(_):\n' + branch;
    
    Blockly.Python.definitions_['define_event_' + button + '_' + action] = 'button_' + button + '.event_' + action + ' = on_button_' + button + '_' + action;

    return '';
};

Blockly.Python['mpython3_button_event'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_button_' + button + '_' + action] = 
        'def on_button_' + button + '_'  + action + '(_):\n' + branch;
    
    Blockly.Python.definitions_['define_event_' + button + '_' + action] = 'button_' + button + '.event_' + action + ' = on_button_' + button + '_' + action;

    return null;
};

Blockly.Python['mpython2_touchpad_is_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'touchpad_' + button + '.is_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_was_pressed'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'touchpad_' + button + '.was_pressed()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_get_presses'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'touchpad_' + button + '.get_presses()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_value'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var code = 'touchpad_' + button + '.read()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython2_touchpad_event'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_touchpad_' + button + '_' + action] = 
        'def on_touchpad_' + button + '_'  + action + '(_):\n' + branch;
    
    Blockly.Python.definitions_['define_event_' + button + '_' + action] = 'touchpad_' + button + '.event_' + action + ' = on_touchpad_' + button + '_' + action;

    return '';
};

Blockly.Python['mpython3_touchpad_event'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var action = block.getFieldValue('ACTION');
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	var branch = nextBlock ? Blockly.Python.prefixLines(Blockly.Python.blockToCode(nextBlock), Blockly.Python.INDENT) : Blockly.Python.PASS;

    Blockly.Python.definitions_['define_on_touchpad_' + button + '_' + action] = 
        'def on_touchpad_' + button + '_'  + action + '(_):\n' + branch;
    
    Blockly.Python.definitions_['define_event_' + button + '_' + action] = 'touchpad_' + button + '.event_' + action + ' = on_touchpad_' + button + '_' + action;

    return null;
};

Blockly.Python['mpython2_touchpad_threshold'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var button = block.getFieldValue('BUTTON');
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    var code = 'touchpad_' + button + '.config(' + value + ')\n';
    return code;
};

// 2021.6.23 6轴
Blockly.Python['mpython_gyroscope_get'] = function(block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var ax = block.getFieldValue('axis');
    var code;
    switch (ax) {
        case "X":
            code = 'gyroscope.get_x()';
            break;
        case "Y":
            code = 'gyroscope.get_y()';
            break;
        case "Z":
            code = 'gyroscope.get_z()';
            break;
        default:
            return "";
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['mpython_gyroscope_set_range'] = function(block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var range = block.getFieldValue('range');
    var code = 'gyroscope.set_range(gyroscope.' + range + ')\n';
    return code;
};

Blockly.Python['mpython_gyroscope_set_offset'] = function(block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    var x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
    var code = 'gyroscope.set_offset(' + x + ', ' + y + ', ' + z + ')\n';
    return code;
};

// 2021.6.23 6轴 end
