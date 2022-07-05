'use strict';

goog.provide('Blockly.Blocks.ai');
goog.require('Blockly.Blocks');
Blockly.Blocks.ai.HUE = "#55839A"

Blockly.Blocks['tuple_anchor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.tuple.HUE);
	this.appendDummyInput("")
        .appendField(new Blockly.FieldTextInput('anchor'), 'VAR')
        .appendField('锚点参数= (')
        .appendField(new Blockly.FieldTextInput('1.889, 2.5245, 2.9465, 3.94056, 3.99987, 5.3658, 5.155437, 6.92275, 6.718375, 9.01025'), 'TEXT')
        .appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setTooltip("锚点参数");
  } 
};

Blockly.Blocks['tuple_calss'] = {
  init: function() {
    this.setColour(Blockly.Blocks.tuple.HUE);
	this.appendDummyInput("")
        .appendField(new Blockly.FieldTextInput('calss'), 'VAR')
        .appendField('物品名称= [')
        .appendField(new Blockly.FieldTextInput("'name1', 'name2', 'name3', 'name4'"), 'TEXT')
        .appendField(']');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setTooltip("将要识别的物品名称");
  } 
};

Blockly.Blocks.KPU_load = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
        this.appendValueInput('SUB')
            .appendField("")
            .setCheck("var");
        this.appendValueInput('path')
            .appendField("模型加载")
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("从flash系统中加载模型");
    }
};

Blockly.Blocks.KPU_load1 = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
        this.appendValueInput('SUB')
            .appendField("")
            .setCheck("var");
        this.appendValueInput('path')
            .appendField("模型路径")
            .setCheck(String);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("从文件系统中加载模型");
    }
};

Blockly.Blocks.KPU_init_yolo2= {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("yolo2")
			.appendField("初始化");
        this.appendValueInput('SUB')
			.setAlign(Blockly.ALIGN_RIGHT)
            .appendField("网络模型")
            .setCheck("var");
        this.appendValueInput('threshold')
			.setAlign(Blockly.ALIGN_RIGHT)		
            .appendField("概率阈值")
            .setCheck(Number);
		this.appendValueInput('nms_value')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("box_iou门限")
            .setCheck(Number);
		this.appendValueInput('anchor_num')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("锚点数")
            .setCheck(Number);
		this.appendValueInput('anchor')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("锚点参数");
        //this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("初始化yolo2网络");
    }
};

Blockly.Blocks['KPU_run_yolo2']= {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("yolo2")
			.appendField("运行网络");
        this.appendValueInput('SUB')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("模型")
            .setCheck("var");
		this.appendValueInput('VAR')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("图像");
        this.setOutput(true);
		this.setInputsInline(true);
        this.setTooltip("运行yolo2网络");
    }
};

Blockly.Blocks['KPU_forward']= {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("yolo2")
			.appendField("前向运算");
        this.appendValueInput('SUB')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("模型")
            .setCheck("var");
		this.appendValueInput('VAR')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("图像");
        this.setOutput(true);
		this.setInputsInline(true);
        this.setTooltip("运行网络前向运算");
    }
};


Blockly.Blocks['KPU_analysis'] = {
    init: function () {
		this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput()
			.appendField("yolo2")
            .appendField("模型解析");
        this.appendValueInput('VAR')
			.appendField("对象")
            .setCheck("var");			
		this.appendDummyInput()
			.appendField("获取")
            .appendField(new Blockly.FieldDropdown([
                ["坐标-x", "x"],
                ["坐标-y", "y"],
                ["标识号", "classid"],
                ["置信度", "value"]
            ]), "key");			
        this.setOutput(true);
		//this.setInputsInline(true);
        this.setTooltip("对于模型解析，获取模型识别结果的目标坐标、标识好、置信度");
    }
};

Blockly.Blocks.aionenet_nic_init = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("AI_OneNET")
			.appendField("连接WiFi");
        this.appendValueInput('account')
            .appendField("名称")
            .setCheck(String);
        this.appendValueInput('password')
            .appendField("密码")
            .setCheck(String);			
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("AI-Onenet平台 连接WiFi");
    }
};

Blockly.Blocks.aionenet_token = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("AI_OneNET")
			.appendField("获鉴权码");
        this.appendValueInput('account')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("账号")
            .setCheck(String);
        this.appendValueInput('password')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("密码")
            .setCheck(String);			
        this.setOutput(true);
		this.setInputsInline(true);
        this.setTooltip("AI-Onenet平台 需要注册平台才能使用账号获取用户鉴权码，鉴权码一般24小时有效");
    }
};

Blockly.Blocks.aionenet_API = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("AI_OneNET")
			.appendField("调取API");
		this.appendValueInput('VAR')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("图像");
		this.appendDummyInput()
			.appendField("识别")
            .appendField(new Blockly.FieldDropdown([
                ["人脸检测", "FACE_RECO"],
                ["人脸分析", "FACE_ATTRIBUTE"],
                ["人体检测", "BODY_RECO"],
                ["图像抄表", "AMMETER_READ"],
                ["内容测评", "IDENTIFY_PORN"],
                ["车牌信息", "NUMBER_PLATE_RECOGNITION"],
                ["宠物种类", "CAT_DOG_DETECTION"],
                ["火灾检测", "FIRE_DETECTION"]
				]), "api");	
        this.appendValueInput('token')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("鉴权码")
            .setCheck(String);			
        this.setOutput(true);
		this.setInputsInline(true);
        this.setTooltip("AI-Onenet平台 调用平台API，返回列表识别结果参数");
    }
};

Blockly.Blocks.ailocal_training = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("AI_Local")
			.appendField("模型训练");		
		this.appendValueInput('calss')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("物品");	
		this.appendValueInput('sample')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("训练量")
            .setCheck(Number);				
        this.appendValueInput('save')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("保存")
            .setCheck(String);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("AI-Local本地模型训练 需要识别的物品名称、每个物品训练数量、保存的名称");
    }
};

Blockly.Blocks.ailocal_loading = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("AI_Local")
			.appendField("模型加载");					
        this.appendValueInput('path')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("路径")
            .setCheck(String);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("AI-Local 加载已经训练好的本地模型");
    }
};


Blockly.Blocks.ailocal_predict = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("AI_Local")
			.appendField("运行模型");
		this.appendValueInput('calss')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("物品");				
		this.appendValueInput('VAR')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("图像");			
        this.setOutput(true);
		this.setInputsInline(true);
        this.setTooltip("AI-Local 采集图像运行模型将返回识别的物品名、置信度");
    }
};

//---开始------------新增---20210302---------------------------------------------------

Blockly.Blocks.ai_face_init = {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("AI_Face")
			.appendField("初始化 加载");			
        this.appendValueInput('FD')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("模型FD:")
            .setCheck(String);
        this.appendValueInput('LD')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("模型LD:")
            .setCheck(String);
        this.appendValueInput('FE')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("模型FE:")
            .setCheck(String);			
        //this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("人脸分辨，初始化");
    }
};

Blockly.Blocks['ai_face_train']= {
    init: function () {
        this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput("")
			.appendField("AI_Face")
			.appendField("运行识别");
		this.appendValueInput('names')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("人名");				
		this.appendValueInput('VAR')
			.setAlign(Blockly.ALIGN_RIGHT)	
			.appendField("图象");
		this.appendValueInput('threshold')
			.setAlign(Blockly.ALIGN_RIGHT)	
            .appendField("阈值")
            .setCheck(Number);				
        this.setOutput(true);
		this.setInputsInline(true);
        this.setTooltip("人脸分辨，识别到人脸返回True，无人脸返回False");
    }
};

Blockly.Blocks['ai_face_info'] = {
    init: function () {
		this.setColour(Blockly.Blocks.ai.HUE);
		this.appendDummyInput()
			.appendField("AI_Face")
			.appendField("识别解析");		
		this.appendDummyInput()
			.appendField("获取")
            .appendField(new Blockly.FieldDropdown([
                ["识别人名", "info_name"],
                ["置信度 %", "info_score"],
                ["脸部坐标", "info_face"],
                ["三官坐标", "info_organs"]
            ]), "key");			
        this.setOutput(true);
		this.setInputsInline(true);
        this.setTooltip("人脸分辨,识别到人物名称，置信度，脸部坐标，三官(眼睛x2、鼻子、嘴巴*2)坐标");
    }
};

//---开始------------新增---20210302---------------------------------------------------


