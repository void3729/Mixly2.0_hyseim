'use strict';

goog.provide('Blockly.Python.image');

goog.require('Blockly.Python');


Blockly.Python.true_false = function () {
    var code = this.getFieldValue('flag');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.image_RGB = function () {
  var R =Blockly.Python.valueToCode(this, 'R',Blockly.Python.ORDER_ATOMIC);
  var G =Blockly.Python.valueToCode(this, 'G',Blockly.Python.ORDER_ATOMIC);
  var B =Blockly.Python.valueToCode(this, 'B',Blockly.Python.ORDER_ATOMIC);
  var code ='['+R+','+G+','+B+']';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_Image = function () {	
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var code = sub+" = image.Image("+path+")\n";
  return code;  
};

Blockly.Python.image_Image1 = function () {	
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'SUB',Blockly.Python.ORDER_ATOMIC);
  var code = sub+" = image.Image()\n";
  return code;  
};

Blockly.Python.image_getinfo = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_save = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var code = sub+".save("+path+")\n";
  return code; 
};

//----开始--------------cool.ai-----弃用字体加载，出厂内存加载------------------

Blockly.Python.image_font_free = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var code = "image.font_free()\n";
  return code; 
};

Blockly.Python.image_font_load = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var path =Blockly.Python.valueToCode(this, 'path',Blockly.Python.ORDER_ATOMIC);
  var code = "image.font_load(image.UTF8, 16, 16, "+path+")\n";
  return code; 
};

Blockly.Python.image_draw_string_flash = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  Blockly.Python.definitions_['font_load'] = 'image.font_load(image.UTF8, 16, 16, 0xA00000)';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var x0 =Blockly.Python.valueToCode(this, 'x0',Blockly.Python.ORDER_ATOMIC);
  var y0 =Blockly.Python.valueToCode(this, 'y0',Blockly.Python.ORDER_ATOMIC);
  var t =Blockly.Python.valueToCode(this, 'tex',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var s =Blockly.Python.valueToCode(this, 'scale',Blockly.Python.ORDER_ATOMIC);
  var x =Blockly.Python.valueToCode(this, 'x_spacing',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_string('+x0+','+y0+',str.encode('+t+'),color='+color+',scale='+s+',x_spacing='+x+',mono_space=1)';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//----结束--------------cool.ai-----弃用字体加载，出厂内存加载------------------


Blockly.Python.image_draw_string_UTF = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var x0 =Blockly.Python.valueToCode(this, 'x0',Blockly.Python.ORDER_ATOMIC);
  var y0 =Blockly.Python.valueToCode(this, 'y0',Blockly.Python.ORDER_ATOMIC);
  var t =Blockly.Python.valueToCode(this, 'tex',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var s =Blockly.Python.valueToCode(this, 'scale',Blockly.Python.ORDER_ATOMIC);
  var x =Blockly.Python.valueToCode(this, 'x_spacing',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_string('+x0+','+y0+',str.encode('+t+'),color='+color+',scale='+s+',x_spacing='+x+',mono_space=1)';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_draw_string = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var x0 =Blockly.Python.valueToCode(this, 'x0',Blockly.Python.ORDER_ATOMIC);
  var y0 =Blockly.Python.valueToCode(this, 'y0',Blockly.Python.ORDER_ATOMIC);
  var t =Blockly.Python.valueToCode(this, 'tex',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var s =Blockly.Python.valueToCode(this, 'scale',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_string('+x0+','+y0+','+t+','+color+','+s+',mono_space=0)';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_copy = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.copy('+LIST+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


Blockly.Python.image_compress = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var quality =Blockly.Python.valueToCode(this, 'quality',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.compress('+quality+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_clear = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var code = sub+".clear()\n";
  return code; 
};

Blockly.Python.image_tonew = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_set_pixel = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.set_pixel('+LIST+','+color+')\n';
  return code; 
};

Blockly.Python.image_get_pixel = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.get_pixel('+LIST+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_draw_line = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_line('+list+','+color+','+t+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_draw_arrow = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_arrow('+list+','+color+','+t+')';
  return [code, Blockly.Python.ORDER_ATOMIC];  
};

Blockly.Python.image_draw_cross = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var s =Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
  var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_cross('+list+','+color+','+s+','+t+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_draw_circle = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
  var f =Blockly.Python.valueToCode(this, 'fil',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_circle('+list+','+color+','+t+','+f+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_draw_rectangle = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var t =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
  var f =Blockly.Python.valueToCode(this, 'fil',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_rectangle('+list+','+color+','+t+','+f+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_draw_keypoints = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key =Blockly.Python.valueToCode(this, 'keypoints',Blockly.Python.ORDER_ATOMIC);
  var color =Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var size =Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
  var thi =Blockly.Python.valueToCode(this, 'thi',Blockly.Python.ORDER_ATOMIC);
  var fil =Blockly.Python.valueToCode(this, 'fil',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_keypoints('+key+','+color+','+size+','+thi+','+fil+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_draw_image = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var x_scale =Blockly.Python.valueToCode(this, 'x_scale',Blockly.Python.ORDER_ATOMIC);
  var y_scale =Blockly.Python.valueToCode(this, 'y_scale',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.draw_image('+sub+','+list+','+x_scale+','+y_scale+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//--形状识别----------------------------------------------//

Blockly.Python.image_find_lines = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var theta_margin =Blockly.Python.valueToCode(this, 'theta_margin',Blockly.Python.ORDER_ATOMIC);
  var rho_margin =Blockly.Python.valueToCode(this, 'rho_margin',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_lines('+roi+',threshold='+threshold+',theta_margin='+theta_margin+',rho_margin='+rho_margin+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_find_line_segments = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var distance =Blockly.Python.valueToCode(this, 'distance',Blockly.Python.ORDER_ATOMIC);
  var difference =Blockly.Python.valueToCode(this, 'difference',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_line_segments('+roi+','+distance+','+difference+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


Blockly.Python.image_find_circles = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var r_min =Blockly.Python.valueToCode(this, 'r_min',Blockly.Python.ORDER_ATOMIC);
  var r_max =Blockly.Python.valueToCode(this, 'r_max',Blockly.Python.ORDER_ATOMIC);
  var r_step =Blockly.Python.valueToCode(this, 'r_step',Blockly.Python.ORDER_ATOMIC);
  var x_margin =Blockly.Python.valueToCode(this, 'x_margin',Blockly.Python.ORDER_ATOMIC);
  var y_margin =Blockly.Python.valueToCode(this, 'y_margin',Blockly.Python.ORDER_ATOMIC);
  var r_margin =Blockly.Python.valueToCode(this, 'r_margin',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_circles('+roi+',threshold='+threshold+',x_margin='+x_margin+',y_margin='+y_margin+',r_margin='+r_margin+',r_min='+r_min+',r_max='+r_max+',r_step='+r_step+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


Blockly.Python.image_find_rects = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_rects('+roi+',threshold='+threshold+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_get_regression = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var invert = Blockly.Python.valueToCode(this, 'invert',Blockly.Python.ORDER_ATOMIC);
  var robust = Blockly.Python.valueToCode(this, 'robust',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.get_regression(['+threshold+'],invert='+invert+',roi='+roi+',robust='+robust+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//--形状列表解析------------------------------------------//



Blockly.Python.image_line = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_circle = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  if (key == "circle")
	var code = '['+sub+'.x(),'+sub+'.y(),'+sub+'.r()]';
  else
	var code = sub+'.'+key+'()';  
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_rect = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';  
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//--图像滤波------------------------------------------//

Blockly.Python.image_histeq = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = Blockly.Python.valueToCode(this, 'key',Blockly.Python.ORDER_ATOMIC);
  var limit =Blockly.Python.valueToCode(this, 'limit',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.histeq('+key+','+limit+')';  
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_mean = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var size = Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
  var key = Blockly.Python.valueToCode(this, 'key',Blockly.Python.ORDER_ATOMIC);
  var offset = Blockly.Python.valueToCode(this, 'offset',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.mean('+size+','+key+','+offset+')';  
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_cartoon = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var seed = Blockly.Python.valueToCode(this, 'seed',Blockly.Python.ORDER_ATOMIC);
  var floa = Blockly.Python.valueToCode(this, 'float',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.cartoon(seed_threshold='+seed+',floating_threshold='+floa+')';  
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_erode = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var size = Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
  var threshold = Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.erode('+size+','+threshold+')';  
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_dilate = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var size = Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
  var threshold = Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.dilate('+size+','+threshold+')';  
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_flood_fill = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var list =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var color = Blockly.Python.valueToCode(this, 'color',Blockly.Python.ORDER_ATOMIC);
  var seed = Blockly.Python.valueToCode(this, 'seed',Blockly.Python.ORDER_ATOMIC);
  var floa = Blockly.Python.valueToCode(this, 'float',Blockly.Python.ORDER_ATOMIC);
  var invert = Blockly.Python.valueToCode(this, 'invert',Blockly.Python.ORDER_ATOMIC);
  var clear = Blockly.Python.valueToCode(this, 'clear',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.flood_fill('+list+','+seed+','+floa+','+color+','+invert+','+clear+')';  
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_linpolar = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key =Blockly.Python.valueToCode(this, 'key',Blockly.Python.ORDER_ATOMIC); 
  var code = sub+'.linpolar('+key+')';   
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_invert = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC); 
  var code = sub+'.invert()';   
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_lens_corr = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC); 
  var strength =Blockly.Python.valueToCode(this, 'strength',Blockly.Python.ORDER_ATOMIC); 
  var zoom =Blockly.Python.valueToCode(this, 'zoom',Blockly.Python.ORDER_ATOMIC); 
  var code = sub+'.lens_corr('+strength+','+zoom+')';   
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_binary = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var invert = Blockly.Python.valueToCode(this, 'invert',Blockly.Python.ORDER_ATOMIC);
  var zero = Blockly.Python.valueToCode(this, 'zero',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.binary(['+threshold+'],invert='+invert+',zero='+zero+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_morph = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var size =Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
  var kernel = Blockly.Python.valueToCode(this, 'kernel',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.morph('+size+','+kernel+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//--条二维码----------------------------------------------//



Blockly.Python.image_find_barcodes = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_barcodes('+roi+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_find_qrcodes = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_qrcodes('+roi+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_find_apriltags = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_apriltags('+roi+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


//--维码列表解析------------------------------------------//


Blockly.Python.image_barcode = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_qrcode = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


Blockly.Python.image_apriltag = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


//--颜色识别----------------------------------------------//

Blockly.Python.image_find_blobs = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var area1 =Blockly.Python.valueToCode(this, 'area',Blockly.Python.ORDER_ATOMIC);
  var pixel =Blockly.Python.valueToCode(this, 'pixel',Blockly.Python.ORDER_ATOMIC);
  var margin =Blockly.Python.valueToCode(this, 'margin',Blockly.Python.ORDER_ATOMIC);
  var merge =Blockly.Python.valueToCode(this, 'key',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_blobs(['+LIST+'],roi='+roi+',area_threshold='+area1+',pixels_threshold='+pixel+',merge='+merge+',margin='+margin+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


Blockly.Python.image_get_histogram = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.get_histogram(roi='+roi+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//--颜色列表解析------------------------------------------//


Blockly.Python.image_blob = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_Histogram = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_percentile = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var per =Blockly.Python.valueToCode(this, 'percentile',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.get_percentile('+per+').'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


Blockly.Python.image_threshold = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.get_threhsold.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


//--颜色格式转换------------------------------------------//

Blockly.Python.image_lab_to_rgb = function () {
  Blockly.Python.definitions_['import_image_pic'] = 'import image as pic';
  var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var code = 'pic.lab_to_rgb('+LIST+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_rgb_to_lab = function () {
  Blockly.Python.definitions_['import_image_pic'] = 'import image as pic';
  var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var code = 'pic.rgb_to_lab('+LIST+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_rgb_to_grayscale = function () {
  Blockly.Python.definitions_['import_image_pic'] = 'import image as pic';
  var LIST =Blockly.Python.valueToCode(this, 'LIST',Blockly.Python.ORDER_ATOMIC);
  var code = 'pic.rgb_to_grayscale('+LIST+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_grayscale_to_rgb = function () {
  Blockly.Python.definitions_['import_image_pic'] = 'import image as pic';
  var g_value =Blockly.Python.valueToCode(this, 'g_value',Blockly.Python.ORDER_ATOMIC);
  var code = 'pic.grayscale_to_rgb('+g_value+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

//--特征识别----------------------------------------------//

Blockly.Python.image_find_hog = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var size =Blockly.Python.valueToCode(this, 'size',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_hog('+roi+','+size+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};


Blockly.Python.image_find_keypoints = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var roi =Blockly.Python.valueToCode(this, 'roi',Blockly.Python.ORDER_ATOMIC);
  var key =Blockly.Python.valueToCode(this, 'max_keypoints',Blockly.Python.ORDER_ATOMIC);
  var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var scale =Blockly.Python.valueToCode(this, 'scale_factor',Blockly.Python.ORDER_ATOMIC);
  var normalized =Blockly.Python.valueToCode(this, 'normalized',Blockly.Python.ORDER_ATOMIC);
  var code = sub+'.find_keypoints(roi='+roi+',max_keypoints='+key+',threshold='+threshold+',scale_factor='+scale+',normalized='+normalized+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

Blockly.Python.image_match_descriptor = function () {
  Blockly.Python.definitions_['import_image_pic'] = 'import image as pic';
  var sub1 =Blockly.Python.valueToCode(this, 'VAR1',Blockly.Python.ORDER_ATOMIC);
  var sub2 =Blockly.Python.valueToCode(this, 'VAR2',Blockly.Python.ORDER_ATOMIC);
  var threshold =Blockly.Python.valueToCode(this, 'threshold',Blockly.Python.ORDER_ATOMIC);
  var code = 'pic.match_descriptor('+sub1+','+sub2+',threshold='+threshold+')';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};



//--颜色列表解析------------------------------------------//


Blockly.Python.image_kptmatch = function () {
  Blockly.Python.definitions_['import_image'] = 'import image';
  var sub =Blockly.Python.valueToCode(this, 'VAR',Blockly.Python.ORDER_ATOMIC);
  var key = this.getFieldValue('key');
  var code = sub+'.'+key+'()';
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};













