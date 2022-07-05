goog.provide('Mixly.Electron.PythonShell');
goog.require('Mixly.Modules');
goog.require('Mixly.StatusBar');
goog.require('Mixly.Env');

Mixly.Modules.iconvLite = require('iconv-lite');
Mixly.Modules.PythonShell = require('python-shell').PythonShell;
var input_prompt_message = "";
var input_prompt_message_line = -1;
var input_prompt_position_row = -1;
var input_prompt_position_column = -1;
//python-shell输出中文数据有乱码，现在编码为iso-8859-1，原来编码为GBK
var options = null;

try {
    if (Mixly.Env.currentPlatform !== "win32") {
        if (Mixly.Modules.fs.existsSync("/usr/local/bin/python3")) {
            Mixly.Env.python3Path = '/usr/local/bin/python3';
        }
        console.log(Mixly.Env.python3Path);
    }
} catch (e) {
    console.log(e);
}

console.log(Mixly.Env.python3Path);

options = {
    pythonPath: Mixly.Env.python3Path,
    pythonOptions: ['-u'],
    encoding: "binary",
    mode: 'utf-8'
};

/*
if (Mixly.Env.currentPlatform == "darwin" || Mixly.Env.currentPlatform == "linux") {
    Mixly.Modules.child_process.exec('which python3', function (error, stdout, stderr) {
        if (error || stdout == null) {
            Mixly.Env.python3Path = '/usr/local/bin/python3';
        } else {
            Mixly.Env.python3Path = stdout.replace("\n", "");
        }
        console.log(Mixly.Env.python3Path);
        options = {
            pythonPath: Mixly.Env.python3Path,
            pythonOptions: ['-u'],
            encoding: "binary",
            mode: 'utf-8'
        };
    });
} else {
    options = {
        pythonPath: Mixly.Env.python3Path,
        pythonOptions: ['-u'],
        encoding: "binary",
        mode: 'utf-8'
    };
}
*/

let shell = null;

function message_decode(s) {
    if (s) {
        try {
            return unescape(s.replace(/_([0-9a-fA-F]{3})/gm, '%$1'));
        } catch (e) {
            return s;
        }
    }
    return s;
}

/**
* @function 运行python
* @description 运行当前画布上的python程序
* @return void
*/
Mixly.Electron.PythonShell.run = function () {
    Mixly.Electron.PythonShell.addEvent();
    Mixly.StatusBar.show(1);
    Mixly.StatusBar.setValue(indexText["程序正在运行"] + "...\n", true);
    var code = "";
    if (document.getElementById('tab_arduino').className == 'tabon') {
        code = editor.getValue();
        try {
            var inputArr = code.match(/(?<![\w+])input\(/g);
            if (inputArr) {
                code = code.replace("\n", "import pyinput\n");
                code = code.replace(/(?<![\w+])input\(/g, "pyinput.input(");
            }
        } catch (e) {
            console.log(e);
        }
    } else {
        code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace) || '';
        var chinese_code = code.replace(/(_[0-9A-F]{2}_[0-9A-F]{2}_[0-9A-F]{2})+/g, function (s) { return decodeURIComponent(s.replace(/_/g, '%')); });
        code = chinese_code;
        try {
            var inputArr = code.match(/(?<![\w+])input\(/g);
            if (inputArr) {
                code = "import pyinput\n" + code;
                code = code.replace(/(?<![\w+])input\(/g, "pyinput.input(");
            }
        } catch (e) {
            console.log(e);
        }
    }
    if (code.indexOf("import turtle") != -1) code += "\nturtle.done()\n";
    if (shell)
        shell.terminate('SIGKILL');
    Mixly.Modules.fs.writeFile(Mixly.Env.pyFilePath, code, 'utf8', function (err) {
        //如果err=null，表示文件使用成功，否则，表示希尔文件失败
        err = message_decode(err);
        if (err) {
            layer.msg(indexText['写文件出错了，错误是：'] + err, {
                time: 1000
            });
            Mixly.StatusBar.setValue(indexText['写文件出错了，错误是：'] + err + '\n', true);
            Mixly.StatusBar.show(1);
        } else {
            shell = new Mixly.Modules.PythonShell(Mixly.Env.pyFilePath, options);
            let iconv = Mixly.Modules.iconvLite;
            var startTime = Number(new Date());
            //程序运行完成时执行
            shell.childProcess.on('exit', (code) => {
                console.log(code);
                //var timeCost = parseInt((Number(new Date()) - startTime) / 1000);
                var timeCost = Number(new Date()) - startTime;
                var timeCostSecond = timeCost % 60;
                var timeCostMinute = parseInt(timeCost / 60);
                //var timeCostStr = (timeCostMinute ? timeCostMinute + "m" : "") + timeCostSecond + "s";
                var timeCostStr = timeCost + "ms";
                //if (code == 0) {
                if (Mixly.StatusBar.getValue().lastIndexOf("\n") == Mixly.StatusBar.getValue().length - 1)
                    Mixly.StatusBar.addValue("==" + indexText["程序运行完成"]  + "(" + indexText["用时"] + " " + timeCostStr + ")==\n", false);
                else
                    Mixly.StatusBar.addValue("\n==" + indexText["程序运行完成"]  + "(" + indexText["用时"] + " " + timeCostStr + ")==\n", false);
                Mixly.StatusBar.scrollToTheBottom();
                shell = null;
                //}
            });

            /*
            //有数据输入时执行
            var data =  Buffer.from([0, 1, 2], 'float32');  
            shell.stdin.setEncoding('utf-8');   
            setInterval(function(){
                if (shell)
                    shell.stdin.write('111\r\n');
            }, 500);
            */

            //有数据输出时执行
            shell.stdout.setEncoding('binary');
            shell.stdout.on('data', function (data) {
                try {
                    data = decode(iconv.decode(iconv.encode(data, "iso-8859-1"), 'gbk'));
                    data = message_decode(data);
                    data = data.replace(/(?<![\w+])pyinput.input\(/g, "input(");
                } catch (e) {
                    console.log(e);
                }
                Mixly.StatusBar.addValue(data, true);

                if (data.lastIndexOf(">>>") != -1 && shell) {
                    input_prompt_message = data.substring(data.lastIndexOf(">>>"));
                    input_prompt_message_line = Mixly.StatusBar.Ace.session.getLength();
                    Mixly.StatusBar.Ace.selection.moveCursorLineEnd();
                    input_prompt_position_row = Mixly.StatusBar.Ace.selection.getCursor().row;
                    input_prompt_position_column = Mixly.StatusBar.Ace.selection.getCursor().column;
                }
            });

            //程序运行出错时执行
            shell.stderr.setEncoding('binary');
            shell.stderr.on('data', function (err) {
                console.log('stderr: ' + err);
                try {
                    err = err.replace(/(?<![\w+])pyinput.input\(/g, "input(");
                } catch (e) {
                    console.log(e);
                }
                try {
                    Mixly.StatusBar.addValue(iconv.decode(iconv.encode(err, "iso-8859-1"), 'gbk'), false);
                    err = message_decode(err);
                } catch (e) {
                    err = message_decode(err);
                    Mixly.StatusBar.addValue(err, false);
                }
                Mixly.StatusBar.scrollToTheBottom();
                shell = null;
            });
        }

    })
}

/**
* @function 停止py
* @description 停止当前正在运行的python程序
* @return void
*/
Mixly.Electron.PythonShell.stop = function () {
    Mixly.StatusBar.show(1);
    if (shell) {
        shell.terminate('SIGKILL');
        //shell.stdout.end();
        //shell.stdin.end();
        //Mixly.StatusBar.addValue("\n==" + indexText["程序运行完成"] + "==\n", false);
        shell = null;
    } else {
        Mixly.StatusBar.addValue("\n==" + indexText["无程序在运行"] + "==\n", false);
    }
    Mixly.StatusBar.scrollToTheBottom();
}

/**
* @function 清空状态栏
* @description 清空当前状态栏内的所有数据
* @return void
*/
Mixly.Electron.PythonShell.clearOutput = function () {
    Mixly.StatusBar.setValue("");
}

Mixly.Electron.PythonShell.addEvent = () => {
    Mixly.StatusBar.Ace.getSession().selection.on('changeCursor', function (e) {
        if (shell && input_prompt_message_line != -1) {
            if (Mixly.StatusBar.Ace.selection.getCursor().row < input_prompt_position_row) {
                Mixly.StatusBar.Ace.selection.moveCursorTo(input_prompt_position_row, input_prompt_position_column, true);
            }
            else if (Mixly.StatusBar.Ace.selection.getCursor().row <= input_prompt_position_row
                && Mixly.StatusBar.Ace.selection.getCursor().column <= input_prompt_position_column) {
                Mixly.StatusBar.Ace.selection.moveCursorTo(input_prompt_position_row, input_prompt_position_column, true);
            }
            last_row_data = Mixly.StatusBar.Ace.session.getLine(input_prompt_message_line - 1);
            if (last_row_data.indexOf(">>>") != -1
                && Mixly.StatusBar.Ace.selection.getCursor().row == input_prompt_message_line
                && Mixly.StatusBar.Ace.selection.getCursor().column == 0) {
                //shell.stdin.setEncoding('utf-8'); 
                if (last_row_data.indexOf(input_prompt_message) == -1) {
                    last_row_data = last_row_data.replace(">>> ", "");
                    last_row_data = last_row_data.replace(">>>", "");
                    shell.stdin.write(escape(last_row_data.replace(">>>", "")) + "\n");
                } else {
                    shell.stdin.write(escape(last_row_data.replace(input_prompt_message, "")) + "\n");
                }
                input_prompt_message_line = -1;
                last_row_data = "";
            }
        }

    });
}


