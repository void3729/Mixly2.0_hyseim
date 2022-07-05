//goog.provide('Blockly.Python.mpython');
//goog.require('Blockly.Python');

//开始录音 录音时长
Blockly.Python['mpython_audio_start_recording'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    Blockly.Python.definitions_['import_urequests'] = 'import urequests';
    Blockly.Python.definitions_['import_json'] = 'import json';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
    Blockly.Python.definitions_['import_gc'] = 'import gc';
    var volume = Blockly.Python.valueToCode(block, 'volume', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['Get_asr_start()'] = 
    'def Get_asr_start():\n'+
    '    audio.recorder_init(i2c)\n'+
    '    audio.record("temp.wav", ' + volume + ')\n'+
    '    audio.recorder_deinit()\n' + 
    '    gc.collect()';
    var code = 'Get_asr_start()\n';
    return code;
};

// //录音结果0
// Blockly.Python['mpython_audio_recording_result'] = function (block) {
//     Blockly.Python.definitions_['def Get_asr_result()'] = 
//     'def Get_asr_result():\n'+
//     '    global rsp_json\n'+
//     '    _response = urequests.post("http://119.23.66.134:8085/file_upload",\n'+
//     '        files={"file":("temp.wav", "audio/wav")},\n'+
//     '        params={"appid":"1", "mediatype":"2", "deviceid":ubinascii.hexlify(machine.unique_id()).decode().upper()})\n'+
//     '    rsp_json = _response.json()\n'+
//     '    _response.close()\n'+
//     '    return rsp_json';
// 	var code = 'Get_asr_result()';
// 	return [code, Blockly.Python.ORDER_ATOMIC];
//     //return code;
// };

//录音结果1
Blockly.Python['mpython_audio_recording_result'] = function (block) {
	var code = '"temp.wav"';
	return [code, Blockly.Python.ORDER_ATOMIC];
    //return code;
};


//获取录音2
Blockly.Python['mpython_audio_discern_recording'] = function (block) {
    var variables = Blockly.Python.valueToCode(block, 'variables', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['def Get_asr_result_discern()'] = 
    'def Get_asr_result_discern(filename):\n'+
    '    _response = urequests.post("http://119.23.66.134:8085/file_upload",\n'+
    '        files={"file":(filename, "audio/wav")},\n'+
    '        params={"appid":"1", "mediatype":"2", "deviceid":ubinascii.hexlify(machine.unique_id()).decode().upper()})\n'+
    '    rsp_json = _response.json()\n' +
    '    _response.close()\n'+
    '    if "text" in rsp_json:\n'+
    '        return rsp_json["text"]\n'+
    '    elif "Code" in rsp_json:\n'+
    //'        return "Code:%s" % rsp_json["Code"]\n'+
    '        return "."\n' +
    '    else:\n'+
    '        return rsp_json';
    var code = 'get_asr_result_discern = Get_asr_result_discern('+ variables + ')\n';
    return code;
};


//识别录音结果
Blockly.Python['mpython_audio_discern_recording_result'] = function (block) {
    //var variables = Blockly.Python.valueToCode(block, 'variables', Blockly.Python.ORDER_ATOMIC);
	var code = 'get_asr_result_discern';
	return [code, Blockly.Python.ORDER_ATOMIC];
    //return code;
};

// 设音频音量 %1
Blockly.Python['mpython_audio_set_volume'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    var volume = Blockly.Python.valueToCode(block, 'volume', Blockly.Python.ORDER_ATOMIC);
    var code = `audio.set_volume(${volume})` + '\n';

    return code;
};

// 'TTS 语音播放 %1
Blockly.Python['mpython_audio_xunfei_tts'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    var TEXT = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);

    var code = 'audio.xunfei_tts(' + TEXT + ')\n';

    return code;
};

// 'TTS 语音配置 APPID %1 API KEY %2
Blockly.Python['mpython_audio_xunfei_tts_config'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    var APPID = Blockly.Python.valueToCode(block, 'APPID', Blockly.Python.ORDER_ATOMIC);
    var API_KEY = Blockly.Python.valueToCode(block, 'API_KEY', Blockly.Python.ORDER_ATOMIC);
    var code = 'audio.xunfei_tts_config(' + API_KEY + ', ' + APPID + ')\n';

    return code;
};

// '掌控扩展板 音频 播放  %1
Blockly.Python['mpython_audio_play'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    var url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);

    var code = 'audio.play(' + url + ')\n';

    return code;
};

// '掌控扩展板 音频  %1
Blockly.Python['mpython_audio_cmd'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    var cmd = block.getFieldValue('cmd');
    var code = 'audio.' + cmd + '()\n';
    if (cmd == 'stop') {
        Blockly.Python.definitions_['import_time'] = 'import time';
        code += 'time.sleep(1)\n';
    }
    return code;
};

// '掌控扩展板 音频播放 釋放緩存
Blockly.Python['mpython_audio_deinit'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    Blockly.Python.definitions_['import_gc'] = 'import gc';
    return 'audio.player_deinit()\ngc.collect()\n';
};

// '掌控扩展板 音频播放初始化
Blockly.Python['mpython_audio_init'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    //Blockly.Python.definitions_['import_gc'] = 'import gc';
    //return 'gc.collect()\naudio.player_init(i2c)\n';
    return 'audio.player_init(i2c)\n';
};

// 录音 初始化
Blockly.Python['mpython_record_init'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    //Blockly.Python.definitions_['import_gc'] = 'import gc';
    //return 'gc.collect()\naudio.recorder_init(i2c)\n';
    return 'audio.recorder_init(i2c)\n';
};

// 录音 释放缓存
Blockly.Python['mpython_record_deinit'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    Blockly.Python.definitions_['import_gc'] = 'import gc';
    return 'audio.recorder_deinit()\ngc.collect()\n';
};

// 录音 录制音频
Blockly.Python['mpython_record_wav'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    var file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
    var record_time = Blockly.Python.valueToCode(block, 'record_time', Blockly.Python.ORDER_ATOMIC);
    var code = 'audio.record(' + file_name + ', ' + record_time + ')\n';
	return code;
};

//语音识别
Blockly.Python['mpython_asr'] = function (block) {
    Blockly.Python.definitions_['import_mpython'] = 'from mpython import *';
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    Blockly.Python.definitions_['import_urequests'] = 'import urequests';
    Blockly.Python.definitions_['import_json'] = 'import json';
    Blockly.Python.definitions_['import_machine'] = 'import machine';
    Blockly.Python.definitions_['import_ubinascii'] = 'import ubinascii';
    Blockly.Python.definitions_['import_gc'] = 'import gc';
	Blockly.Python.functions_['mpython_get_asr'] = 'def get_asr_result(_time):\n' +
'    audio.recorder_init(i2c)\n' +
'    audio.record("temp.wav", int(_time))\n' +
'    audio.recorder_deinit()\n' +
'    gc.collect()\n' +
'    _response = urequests.post("http://119.23.66.134:8085/file_upload",\n' +
'        files={"file":("temp.wav", "audio/wav")},\n' +
'        params={"appid":"1", "mediatype":"2", "deviceid":ubinascii.hexlify(machine.unique_id()).decode().upper()})\n' +
'    rsp_json = _response.json()\n' +
'    _response.close()\n' +
'    if "text" in rsp_json:\n' +
'        return rsp_json["text"]\n' +
'    elif "Code" in rsp_json:\n' +
'        return "Code:%s" % rsp_json["Code"]\n' +
'    else:\n' +
'        return rsp_json';
    var record_time = Blockly.Python.valueToCode(block, 'record_time', Blockly.Python.ORDER_ATOMIC);
	var code = 'get_asr_result(' + record_time + ')';
	return [code, Blockly.Python.ORDER_ATOMIC];
};


// 讯飞语音合成
Blockly.Python['xunfei_speech_tts'] = function(block) {
    Blockly.Python.definitions_['import_xunfei'] = 'from xunfei import *';
  
    var APPID = Blockly.Python.valueToCode(block, 'APPID', Blockly.Python.ORDER_ATOMIC);
    var APISecret = Blockly.Python.valueToCode(block, 'APISecret', Blockly.Python.ORDER_ATOMIC);
    var APIKey = Blockly.Python.valueToCode(block, 'APIKey', Blockly.Python.ORDER_ATOMIC);
    var Text = Blockly.Python.valueToCode(block, 'Text', Blockly.Python.ORDER_ATOMIC);
    var AudioFile = Blockly.Python.valueToCode(block, 'AudioFile', Blockly.Python.ORDER_ATOMIC);
  
    var code = 'speech_tts = Xunfei_speech(' + APPID + ', ' + APIKey + ', ' + APISecret + ', mode=MODE_TTS, AudioFile=' + AudioFile + ', Text=' + Text + ')\nprint("Processing, please wait....")\nspeech_tts.tts()\n';
    return code;
  };
  
  // 讯飞语音识别
  Blockly.Python['xunfei_speech_iat'] = function(block) {
    Blockly.Python.definitions_['import_xunfei'] = 'from xunfei import *';
  
    var APPID = Blockly.Python.valueToCode(block, 'APPID', Blockly.Python.ORDER_ATOMIC);
    var APISecret = Blockly.Python.valueToCode(block, 'APISecret', Blockly.Python.ORDER_ATOMIC);
    var APIKey = Blockly.Python.valueToCode(block, 'APIKey', Blockly.Python.ORDER_ATOMIC);
    var AudioFile = Blockly.Python.valueToCode(block, 'AudioFile', Blockly.Python.ORDER_ATOMIC);
  
    var code = 'speech_iat = Xunfei_speech(' + APPID + ', ' + APIKey + ', ' + APISecret + ', mode=MODE_IAT, AudioFile=' + AudioFile + ')\n';
    return code;
  };
  
// 讯飞语音识别结果
Blockly.Python['xunfei_speech_iat_result'] = function(block) {
    Blockly.Python.definitions_['import_xunfei'] = 'from xunfei import *';
  
    var code = 'speech_iat.iat()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
  
// '掌控扩展板 音频 选择播放
Blockly.Python['mpython_audio_play_choose'] = function (block) {
    Blockly.Python.definitions_['import_audio'] = 'import audio';
    var cmd = block.getFieldValue('cmd');
    var code = 'audio.play(' + cmd + ')\n';
    return code;
};
