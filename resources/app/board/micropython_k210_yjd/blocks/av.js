'use strict';

goog.provide('Blockly.Blocks.av');
goog.require('Blockly.Blocks');
Blockly.Blocks.av.HUE = "#2CAAD2"




Blockly.Blocks.spk_init = {
    init: function () {
        this.setColour(Blockly.Blocks.av.HUE);
        this.appendValueInput('SUB')
            .setCheck("var")
			.appendField("初始化");     			
        this.appendValueInput("BCK", Number)
            .appendField("BCK#")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);	
        this.appendValueInput("WS", Number)
            .appendField("WS#")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);	
        this.appendValueInput("DAT", Number)
            .appendField("DAT#")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);			
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("初始化配置扬声器，用于语音播放");
    }
};


Blockly.Blocks.mic_init = {
    init: function () {
        this.setColour(Blockly.Blocks.av.HUE);
        this.appendValueInput('SUB')
            .setCheck("var")
			.appendField("初始化");     			
        // this.appendValueInput("BCK", Number)
            // .appendField("BCK#")
            // .setCheck(Number)
            // .setAlign(Blockly.ALIGN_RIGHT);	
        // this.appendValueInput("WS", Number)
            // .appendField("WS#")
            // .setCheck(Number)
            // .setAlign(Blockly.ALIGN_RIGHT);	
        // this.appendValueInput("DAT", Number)
            // .appendField("DAT#")
            // .setCheck(Number)
            // .setAlign(Blockly.ALIGN_RIGHT);			
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("初始化配置扬声器，用于语音播放");
    }
};

//-新20210329------音频播放-------------------------------------------//
Blockly.Blocks.audio_play = {
    init: function () {
        this.setColour(Blockly.Blocks.av.HUE);
        this.appendDummyInput()
			.appendField("Audio 音频播放");     			
        this.appendValueInput('path')
            .appendField("路径")
			.setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(String);
        this.appendValueInput('SUB')
            .setCheck("var")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("设备");  				
		this.appendValueInput('volume')
            .appendField("音量(%)")
			.setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);			
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("音频播放");
    }
};

//-新20210329------音频录制-------------------------------------------//
Blockly.Blocks.audio_record = {
    init: function () {
        this.setColour(Blockly.Blocks.av.HUE);
        this.appendDummyInput()
			.appendField("Audio 音频录制");     			
        this.appendValueInput('path')
            .appendField("路径")
			.setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(String);
        this.appendValueInput('SUB')
            .setCheck("var")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("设备");  			
		this.appendValueInput('time')
            .appendField("时长(s)")
			.setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("音频录制");
    }
};

//-新20210329------视频播放-------------------------------------------//
Blockly.Blocks.video_play = {
    init: function () {
        this.setColour(Blockly.Blocks.av.HUE);
        this.appendDummyInput()
			.appendField("Video 视频播放");     			
        this.appendValueInput('path')
            .appendField("路径")
			.setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(String);
        this.appendValueInput('SUB')
            .setCheck("var")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("设备");  				
		this.appendValueInput('volume')
            .appendField("音量(%)")
			.setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);			
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("视频播放");
    }
};

//-新20210329------视频录制-------------------------------------------//
Blockly.Blocks.video_record = {
    init: function () {
        this.setColour(Blockly.Blocks.av.HUE);
        this.appendDummyInput()
			.appendField("Video 视频录制");     			
        this.appendValueInput('path')
            .appendField("路径")
			.setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(String);
        this.appendValueInput('SUB')
            .setCheck("var")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("设备");  			
		this.appendValueInput('time')
            .appendField("时长(s)")
			.setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);		
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("视频录制");
    }
};







