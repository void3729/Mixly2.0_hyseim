//检测当前程序代码量
function getCodePer(){
    xmlCode = mixlyjs.getXmlCode("project");
    var id=getUrlParam('id');
    $.post("../../../index/Mixly/codePer",{"xmlCode":xmlCode,"id":id},function (res) {
        if(res.code===200){
            window.per=res.msg;
        }
    });
}
//保存代码到云端
function saveSever() {
    event_save('saveSever');
    var id=getUrlParam('id');
    if(id==null){
       alert('参数有误，请检查');
       return false;    
    }

    var data='';
 //if (document.getElementById('tab_arduino').className == 'tabon') {
    data = mixlyjs.getCodeContent(); 
    type='py';
    xmlCode = mixlyjs.getXmlCode("project");
//      type='xml';
//  }else{
//      data = mixlyjs.getXmlContent("project");
//      type='xml';
//  } 
  $.post('../../../index/Mixly/saveServer',{id:id,pyCode:data,xmlCode:xmlCode,type:type},function(result){
    layer.msg(result.msg);
  });   
}
//加载代码显示出来
function loadServer() {
    let { BOARD } = Mixly.Config;
    Blockly.lastCode = '';
    window.actionArrayRecord = [];
    event_save('loadSever');
    //getEvent();
//当有localStorage缓存时，不从api接口中读取数据，否则api读取后会存在localStorage中，重复显示出来 add by qiang 20180521
    var xml_str;
    console.log('loadfrommoodle');
    if ('localStorage' in window && window['localStorage'] != null && window.localStorage[BOARD.boardName]) {
        xml_str = window.localStorage[BOARD.boardName];
        console.log('localStorage');
        console.log(xml_str);
        var pattern=/<xml[\w\W]*?>(.*)<\/xml>/i
        var code=pattern.exec(xml_str);
        console.log(code);
    
        if( code!=null&&code[1]!=''){
            console.log(code[1]);
            console.log('read from localStorage');
            //return false;
        }
    }
  /*else{
      if(typeof JSFuncs!='undefined' && typeof JSFuncs.loadFromLocalStorageCache!='undefined')
        xml_str =(JSFuncs.loadFromLocalStorageCache());
  }*/
    var data='';
    var type='xml';
    var id=getUrlParam('id');
    if(id==null){
          // alert('参数有误，请检查');
          return false; 
    }
    $.post('../../../index/problem/code_detail',{id:id},function(result){
        if(result.code==200){
            var count = Blockly.mainWorkspace.getAllBlocks().length;
                data=result.data; 
        }else{
            return;  
        }
    //      alert(2);   
        data = mixlyjs.translateQuote(data, true);
        if(type=='xml'||type=='mix'){               
            mixlyjs.renderXml(data);
        }else{
            mixlyjs.renderIno(data);
        }
        var selectFile = document.getElementById('select_file');
        if (selectFile != null) {
            $("#select_file").remove();
            $("#select_file_wrapper").remove();
            selectFile = document.getElementById('select_file');
        }
        if (selectFile == null) {
            var selectFileDom = document.createElement('INPUT');
            selectFileDom.type = 'file';
            selectFileDom.id = 'select_file';

            var selectFileWrapperDom = document.createElement('DIV');
            selectFileWrapperDom.id = 'select_file_wrapper';
            selectFileWrapperDom.style.display = 'none';
            selectFileWrapperDom.appendChild(selectFileDom);

            document.body.appendChild(selectFileWrapperDom);
            selectFile = document.getElementById('select_file');
       
    //  $("#select_file").change(parseInputXMLfile);
        }
        selectFile.click();
    //        var count = Blockly.mainWorkspace.getAllBlocks().length;
    //        if (count) {// && confirm('Replace existing blocks?\n"Cancel" will merge.')
    //          Blockly.mainWorkspace.clear();
    //        }
     });
}

function getUrlParam(name) {
 var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
 var r = window.location.search.substr(1).match(reg); //匹配目标参数
 if (r != null) return unescape(r[2]); return null; //返回参数值
}

function save2hex(){
    var firmware = $("#firmware").text();
    var output = getHexFile(firmware);
    var blob = new Blob([output], {type: 'text/xml'});
  saveAs(blob, 'blockduino.hex');
}
//呈现问题
function problem(){
    var id=getUrlParam('id');
    var type=getUrlParam('type');
    if(id===null){
        layer.msg('无对应问题');
    }else{
        event_save('protip');
        window.clearInterval(window.show);
        layui.use('layer',function () {
            var layer=layui.layer;
            var $=layui.jquery;
            layer.open({
                type: 2,
                title: "问题描述",
                skin: 'layui-layer-rim', //加上边框
                area: ['450px', '300px'], //宽高
                content: '../../../index/Mixly/MixPro?id='+id+'&type='+type,
                end: function() {
                    window.show=window.setInterval(fnTime,10000);
                }
            });
        })
    }
    return false;
}
//初始化时呈现问题
function problem2(){
    var id=getUrlParam('id');
    var type=getUrlParam('type');
    var checktype=getUrlParam('checktype');
    if(checktype=='edit'){
        if(id===null){
            layer.msg('无对应问题');
        }else{
            layui.use('layer',function () {
                var layer=layui.layer;
                var $=layui.jquery;
                layer.open({
                    type: 2,
                    title: "问题描述",
                    skin: 'layui-layer-rim', //加上边框
                    area: ['450px', '300px'], //宽高
                    content: '../../../index/Mixly/MixPro?id='+id+'&type='+type,
                    end: function() {
                        window.show=window.setInterval(fnTime,10000);
                        pyengine.run2();
                    }
                });
            })
        }
    }
    return false;
}
function keyTip(s_block,t_block){
    var sxml=s_block.slice(0);
    var txml=t_block.slice(0);
    skey=-1;
    tkey=-1;
    st=0;
    if(t_block.length>s_block.length){
        for (var i = 0; i <= s_block.length-1; i++) {
            if(t_block[i]!=s_block[i]){
                var t=i+1;
                var a=[1,s_block[i]+'-'+t_block[i]+'-'+t];//你的块是这个，而教师的块是这个
                return a;
            }
        }
        var a=[-2,t_block[s_block.length]];//可以增加使用这个块
        return a;
    }else if(t_block.length<s_block.length){
        for (var i = 0; i <= t_block.length-1; i++) {
            if(t_block[i]!=s_block[i]){
                var t=i+1;
                var a=[1,s_block[i]+'-'+t_block[i]+'-'+t];//你的块是这个，而教师的块是这个
                return a;
            }
        }
        var t=t_block.length+1;
        var a=[2,s_block[t_block.length]+'-'+t];//可以减少使用这个块
        return a;
    }else{
        for (var i = 0; i <= t_block.length-1; i++) {
            if(t_block[i]!=s_block[i]){
                var t=i+1;
                var a=[1,s_block[i]+'-'+t_block[i]+'-'+t];//你的块是这个，而教师的块是这个
                return a;
            }
        }
        var a=[0,null];//两个代码一样
        return a;
    }
}
//提示
function tips() {
    var id=getUrlParam('id');
    var type=getUrlParam('type');
    xmlCode = mixlyjs.getXmlCode("project");
    var xmlDoc = (new DOMParser()).parseFromString(xmlCode,"application/xml");
    x=xmlDoc.getElementsByTagName("block");
    var action=document.getElementById("side_code").innerText;
    xmlStr=[];
    for (i=0;i<x.length;i++){
        xmlStr.push(x[i].attributes['type'].nodeValue);
    }
   if(id===null){
        layer.msg('无对应问题',{time:1000});
        return false;
    }
    else{
        getEvent();
        window.clearInterval(window.show);
        $.post('../../../index/mixly/tipsave',{id:id},function(result){
            var txml=result.txml;
            txml=txml.split(',');
            var xl=xmlStr.length;
            var tips=keyTip(xmlStr,txml);
            var time = new Date();
            min=time.getMinutes();
            sec=time.getSeconds();
            if(result.code==200){
                layui.use('layer',function () {
                var layer=layui.layer;
                var $=layui.jquery;
                layer.open({
                    type: 2,
                    title: "提示",
                    skin: 'layui-layer-rim', //加上边框
                    area: ['550px', '400px'], //宽高
                    content: '../../../index/Mixly/tips?id='+id+'&type='+type+'&status='+tips[0]+'&tips='+tips[1]+'&min='+min+'&sec='+sec+'&page=tips&action='+action+'&xl='+xl,
                    end: function() {
                        event_save('endtips');
                        window.show=window.setInterval(fnTime,10000);
                        }
                    });
                })
            }else{
                layer.msg(result.msg);
            }
            console.log(result.tips);
        });
    }
    return false;
};
//提交并检测正确与否
function submit() {
    var id=getUrlParam('id');
    var type=getUrlParam('type');
    if(id===null){
        layer.msg('无对应问题',{time:1000});
        return false;
    }   
    document.getElementById("run_btn").onclick();
    event_save('submit');//存储行为
    //保存文件并提交判断
    $ = layui.jquery;
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlCode = Blockly.Xml.domToText(xml);
    var pyCode = mixlyjs.getCodeContent();
    if (document.getElementById("boardSelector").value == ""){
        var fn = 'filename'
    }else{
        var fn = document.getElementById("boardSelector").value;
    }
    layui.use('layer',function () {
        layer=layui.layer;
        $=layui.jquery;
        $.post("../../../index/Mixly/detail_submit",{"xmlCode":xmlCode,"pyCode":pyCode,"fn":fn,"code":"1","type":type,"id":id},function (res) {
            if(res.code===200){
                getEvent();
                layer.msg(res.msg,{time:2000});
            }else {
                layer.msg(res.msg,{time:2000});
            };
        });
    });
};
//提交但不检测
function submit2() {
    var id=getUrlParam('id');
    var type=getUrlParam('type');
    if(id===null){
        layer.msg('无对应问题',{time:1000});
        return false;
    }   
    //保存文件
    $ = layui.jquery;
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlCode = Blockly.Xml.domToText(xml);
    var pyCode = mixlyjs.getCodeContent();
    if (document.getElementById("boardSelector").value == ""){
        var fn = 'filename'
    }else{
        var fn = document.getElementById("boardSelector").value
    }
    layui.use('layer',function () {
        layer=layui.layer;
        $=layui.jquery;
        $.post("../../../index/Mixly/detail_submit",{"xmlCode":xmlCode,"pyCode":pyCode,"fn":fn,"code":"1","type":type,"id":id},function (res) {
            if(res.code===200){
                layer.msg(res.msg,{time:2000});
            }else {
                layer.msg(res.msg,{time:2000});
            };
        });
    });
};

//将动作发送给后台
$(function(){
    var checktype=getUrlParam('checktype');
    var status=getUrlParam('status');
    var auto=getUrlParam('auto');
    var finishTime=getUrlParam('finishTime')*60*1000;
    if(checktype=='edit'){
        layer=layui.layer;
        $('#nav').append('<dd class="layui-nav-item"  lay-unselect=""><a href="#"   onclick="problem()" class="icon-cube">问题描述</a></dd>');
        $('#nav').append('<dd class="layui-nav-item"  lay-unselect=""><a href="#"   onclick="tips()" class="icon-cube">提示</a></dd>');
        $('#nav').append('<dd class="layui-nav-item"  lay-unselect=""><a href="#"   id="run_btn" onclick="pyengine.run2(); " class="icon-cube" style="display:none">运行</a></dd>');
       /* $('#nav').append('<dd class="layui-nav-item"  lay-unselect=""><a href="#"   onclick="saveSever()" class="icon-upload">保存到云端</a></dd>');*/
        $('#nav').append('<dd class="layui-nav-item"  lay-unselect="" style="float:right"><a href="#"   onclick="submit()" class="icon-upload" id="sub">提交</a></dd>');
        $('#nav').append('<dd class="layui-nav-item"  lay-unselect="" style="float:right"><p id="ftime" style="margin-left:10px"></p></dd>');
        var now = document.getElementById('boardSelector');
        now.style.display='none';
        var oDiv_last = document.getElementById('ftime');
        var s_boom_time=getUrlParam('finishTime')*60;
        function autoTime(){
            s_boom_time = s_boom_time-1;
            var last_minut = parseInt(s_boom_time/60);
            var last_second = s_boom_time%60;
            if(last_minut<=0 && last_second<=0){
                submit();
                var all_last_time ="已提交";
                oDiv_last.innerHTML = all_last_time;
                window.setTimeout(checkAnswer2,600);
                window.clearInterval(window.autoSubmit);
            }else{
                var all_last_time ="离提交还有: " + last_minut +"分" + last_second + "秒"
                oDiv_last.innerHTML = all_last_time;
            }
        }
        if(status==0){
            autoTime();
            window.autoSubmit=setInterval(autoTime,1000);
        }
        //window.autosub=window.setInterval(autoSubmit,finishTime);//自动提交
        //window.initpage=setInterval(initpro,400);
    }else if(checktype=='create'){
        layer=layui.layer;
        $('#nav').append('<dd class="layui-nav-item"  lay-unselect=""><a href="#"   onclick="problem()" class="icon-cube">问题描述</a></dd>');
        $('#nav').append('<dd class="layui-nav-item"  lay-unselect=""><a href="#"   onclick="saveSever()" class="icon-upload">保存到云端</a></dd>');
        $('#nav').append('<dd class="layui-nav-item"  lay-unselect="" style="float:right"><a href="#"   onclick="submit2()" class="icon-upload">提交</a></dd>');
        var now = document.getElementById('boardSelector');
        now.style.display='none';
    }
});
/*window.onbeforeunload=function(e){ 
    var checktype=getUrlParam('checktype');
    var type=getUrlParam('type');
    if(checktype=='edit'||type=='practise'){
        var e = window.event||e;  
　　      e.returnValue=("确定离开当前页面吗？");
    } 
}*/
//进行时间上的判断
function fnTime(){
    //判断是否为第一次加载页面
    if(window.mystatus=='loadSever'){
        getEvent();
        window.mystatus='edit';
        return false;
    }
    //短时间没有操作
    if(window.actionArrayRecord.length>1){
        if(window.mystatus=='conTip'){
            window.mystatus='edit';
        }else if(window.mystatus=='endtips'&&window.actionArrayRecord.length>2){
            window.mystatus='edit';
        }
        getEvent();
    }
    else{
        var admin=getUrlParam('admin');
        if(window.mystatus=='run'||window.mystatus=='steprun'||window.mystatus=='submit'||window.status=='conSub'||window.status=='typeSub'){
            window.mystatus='runtime';//运行后的间隔设置
            return false;
        }
         //20秒没有发生任何行为操作
        else if(window.mystatus!='run'&&window.mystatus!='conTip'&&window.mystatus!='endtips'&&window.mystatus!='success'){
            if(admin==3){
                alert('遇到困难了?点击提示试试');
            }
            event_save('conTip');//求助意识提示-提示
            return false;
        }
        else if(window.mystatus=='endtips'){
            if(admin==3){
                alert('根据提示内容修改程序');
            }
            event_save('actEdit');//求助后的行动-提示
            return false;
        }
    }
}

//将点击动作存储在全局变量中
function event_save(action){
    var checktype=getUrlParam('checktype');
    if(checktype=='edit'){
        window.mystatus=action;
        var recordLine = {};
        recordLine.actionType =action;
        recordLine.time = new Date();
        recordLine.currentCode = mixlyjs.getCodeContent();
        window.actionArrayRecord.push(recordLine);
        window.actionArrayRecord;
        if(action=='run'||action=='steprun'){
            window.answer='';
            window.clearInterval(window.show);//取消时间计算
            window.checkRun=window.setInterval(checkA2,600);
        }
        if(action=='submit'){
            window.answer='';
            var oDiv_last = document.getElementById('ftime');
            var all_last_time ="已提交";
            oDiv_last.innerHTML = all_last_time;
            window.clearInterval(window.autoSubmit);
            window.clearInterval(window.show);//取消时间计算
            window.checkSub=window.setInterval(checkAnswer,200);
        }
    }
    
}


//时时监测动作并发送给后台
function getEvent(){
    var id=getUrlParam('id');
    var type=getUrlParam('type');
    $ = layui.jquery;
    var fileName=document.getElementById("boardSelector").value
    $.ajax({
      url:"../../../index/Mixly/event",
      data:{"data":window.actionArrayRecord,"fileName":fileName,'id':id,'type':type,'page':'mixly'},
      method:'post',
      headers: { 
       'Content-Type': 'application/x-www-form-urlencoded',
       'Access-Control-Max-Age':3600,
                    },  
      success:function(res){
            window.actionArrayRecord.length = 0;
      },
      error:function(){
        return;
      }
    })
}
//获取边框运行结果
function checkAnswer(){
    var nowA=document.getElementById("side_code").innerText;
    if(nowA!=window.answer){
        window.answer=nowA;
        var id=getUrlParam('id');
        var type=getUrlParam('type');
        var admin=getUrlParam('admin');
        var msg='';
        if(nowA=='成功\n'){
            event_save('success');
            msg='挑战成功';
            status=1;
        }else if(nowA=='失败\n'){
            if(window.mystatus!='conSub'){
                msg='挑战失败，请继续完成程序';
                event_save('conSub');//错误估计当前程序状态-未完成任务
            }
            status=2;
        }else{
            if(window.mystatus!='typeSub'){
                msg='挑战失败，请分步执行查看错误的图形块';
                event_save('typeSub');//错误估计当前程序状态-程序逻辑错误
            }
            status=3;
        }
        $.post("../../../index/Mixly/judge",{"status":status,"type":type,"id":id},function (res) {
            if(res.code===200){
                //layer.msg(res.msg,{time:2000});
                window.clearInterval(window.checkSub);
                window.show=window.setInterval(fnTime,10000);
            }else {
               // layer.msg(res.msg,{time:2000});
            };
        });
        //var index = parent.layer.getFrameIndex(window.name);  
        //parent.layer.close(index);//关闭当前页
        /*if(status==2||status==3){
            alert(msg);
        }*/
    }
}
//获取边框运行结果
function checkAnswer2(){
    var nowA=document.getElementById("side_code").innerText;
    var id=getUrlParam('id');
    var type=getUrlParam('type');
    var admin=getUrlParam('admin');
    var msg='';
    if(nowA=='成功\n'){
        event_save('success');
        msg='挑战成功';
        status=1;
    }else if(nowA=='失败\n'){
        if(window.mystatus!='conSub'){
            msg='挑战失败，请继续完成程序';
            event_save('conSub');//错误估计当前程序状态-未完成任务
        }
        status=2;
    }else{
        if(window.mystatus!='typeSub'){
            msg='挑战失败，请分步执行查看错误的图形块';
            event_save('typeSub');//错误估计当前程序状态-程序逻辑错误
        }
        status=3;
    }
    $.post("../../../index/Mixly/judge",{"status":status,"type":type,"id":id},function (res) {
        if(res.code===200){
            window.show=window.setInterval(fnTime,10000);
        }else {
           // layer.msg(res.msg,{time:2000});
        };
    });
}
//获取边框运行结果
function checkA2(){
    var nowA=document.getElementById("side_code").innerText;
    if(nowA!=window.answer){
        window.clearInterval(window.checkRun);
        window.show=window.setInterval(fnTime,10000);
    }
}
function after(){
    return false;
}