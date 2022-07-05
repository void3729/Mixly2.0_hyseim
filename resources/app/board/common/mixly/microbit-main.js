var wmicResult = null;
var upload_cancel = false;

// Reset the filesystem and load the files from this hex file to the fs and editor
function loadHex(filename, hexStr) {
    var importedFiles = [];
    // If hexStr is parsed correctly it formats the file system before adding the new files
    try {
        importedFiles = FS.importHexFiles(hexStr);
    } catch (hexImportError) {
        try {
            importedFiles = FS.importHexAppended(hexStr);
        } catch (appendedError) {
            return alert(hexImportError.message);
        }
    }
    // Check if imported files includes a main.py file
    var code = '';
    if (importedFiles.indexOf('main.py') > -1) {
        code = FS.read('main.py');
    } else {
        alert("no main.py");
    }
    //setName(filename.replace('.hex', ''));
    document.getElementById('changemod_btn').value = 0;
    document.getElementById('changemod_btn').textContent = MSG['tab_arduino'];
    tabClick('arduino');
    editor.setValue(code, -1);
}

// Function for adding file to filesystem
function loadFileToFilesystem(filename, fileBytes) {
    // For main.py confirm if the user wants to replace the editor content
    if (filename === 'main.py') {
        return;
    }
    try {
        if (FS.exists(filename)) {
            FS.remove(filename);
            FS.create(filename, fileBytes);
        } else {
            FS.write(filename, fileBytes);
        }
        // Check if the filesystem has run out of space
        var _ = FS.getUniversalHex();
    } catch (e) {
        if (FS.exists(filename)) {
            FS.remove(filename);
        }
        return alert(filename + '\n' + e.message);
    }
}

// Update main.py code with required rules for including or excluding the file
function updateMain() {
    try {
        // Remove main.py if editor content is empty to download a hex file
        // with MicroPython included (also includes the rest of the filesystem)
        var code = "";
        if (document.getElementById('tab_arduino').className == 'tabon') {
            //code = document.getElementById('content_arduino').value;
            code = editor.getValue();
        } else {
            code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace) || '';
        }
        //code = code_head+code
        //code = code.replace('from mixpy import math_map','')
        //code = code.replace('from mixpy import math_mean','')
        //code = code.replace('from mixpy import math_median','')
        //code = code.replace('from mixpy import math_modes','')
        //code = code.replace('from mixpy import math_standard_deviation','')
        //code = code.replace('from mixpy import lists_sort','')
        //var mainCode = EDITOR.getCode();
        if (FS.exists('main.py')) {
            FS.remove('main.py');
        }
        for (var i = 0; i < py_module.length; i++) {
            if (FS.exists(py_module[i]['filename'])) {
                FS.remove(py_module[i]['filename']);
            }
        }
        if (code) {
            FS.create('main.py', code);
        }
        var str = code;
        var arrayObj = new Array();
        str.trim().split("\n").forEach(function (v, i) {
            arrayObj.push(v);
        })

        var module_name = "";
        for (var i = 0; i < arrayObj.length; i++) {
            if (arrayObj[i].indexOf("from") == 0) {
                module_name = arrayObj[i].substring(4, arrayObj[i].indexOf("import"));
                module_name = module_name.replace(/(^\s*)|(\s*$)/g, "");
                if (FS.exists(module_name + '.py'))
                    continue;
                for (var j = 0; j < py_module.length; j++) {
                    if (py_module[j]['filename'] == module_name + ".py") {
                        loadFileToFilesystem(py_module[j]['filename'], py_module[j]['code']);
                    }
                }
            } else if (arrayObj[i].indexOf("import") == 0) {
                module_name = arrayObj[i].substring(6);
                module_name = module_name.replace(/(^\s*)|(\s*$)/g, "");
                if (FS.exists(module_name + '.py'))
                    continue;
                for (var j = 0; j < py_module.length; j++) {
                    if (py_module[j]['filename'] == module_name + ".py") {
                        loadFileToFilesystem(py_module[j]['filename'], py_module[j]['code']);
                    }
                }
            }
        }
    } catch (e) {
        // We generate a user readable error here to be caught and displayed
        throw new Error(e.message);
    }
}

function writeToHex() {
    fso = new ActiveXObject("Scripting.FileSystemObject");
    f1 = fso.CreateTextFile("mithon.hex", true);
    f1.Write(doDownload());
    f1.Close();
}

function doDownload() {
    /*
    var firmware = $("#firmware").text();
    var output = getHexFile(firmware);
    */
    try {
        updateMain();
        var output = FS.getUniversalHex();
    } catch (e) {
        alert(e.message);
        return;
    }
    return output;
}

/*function doSave() {
    var code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace) || '';
    code = code.replace(/(_[0-9A-F]{2}_[0-9A-F]{2}_[0-9A-F]{2})+/g, function (s) { return decodeURIComponent(s.replace(/_/g, '%')); });
    alert(code);
}*/

function getHexFile(firmware) {
    var code = "";
    if (document.getElementById('tab_arduino').className == 'tabon') {
        //code = document.getElementById('content_arduino').value;
        code = editor.getValue();
    } else {
        code = Blockly.Python.workspaceToCode(Blockly.mainWorkspace) || '';
    }
    code = code_head + code
    code = code.replace('from mixpy import math_map', '')
    code = code.replace('from mixpy import math_mean', '')
    code = code.replace('from mixpy import math_median', '')
    code = code.replace('from mixpy import math_modes', '')
    code = code.replace('from mixpy import math_standard_deviation', '')
    code = code.replace('from mixpy import lists_sort', '')
    var hexlified_python = hexlify(code);
    var insertion_point = ":::::::::::::::::::::::::::::::::::::::::::";
    return firmware.replace(insertion_point, hexlified_python);
}

function hexlify(script) {
    function hexlify(ar) {
        var result = '';
        for (var i = 0; i < ar.length; ++i) {
            if (ar[i] < 16) {
                result += '0';
            }
            result += ar[i].toString(16);
        }
        return result;
    }
    // add header, pad to multiple of 16 bytes
    data = new Uint8Array(4 + script.length + (16 - (4 + script.length) % 16));
    data[0] = 77; // 'M'
    data[1] = 80; // 'P'
    data[2] = script.length & 0xff;
    data[3] = (script.length >> 8) & 0xff;
    for (var i = 0; i < script.length; ++i) {
        data[4 + i] = script.charCodeAt(i);
    }
    // check data.length < 0x2000
    if (data.length > 8192) {
        throw new RangeError('Too long');
    }
    // convert to .hex format
    var addr = 0x3e000; // magic start address in flash
    var chunk = new Uint8Array(5 + 16);
    var output = [];
    for (var i = 0; i < data.length; i += 16, addr += 16) {
        chunk[0] = 16; // length of data section
        chunk[1] = (addr >> 8) & 0xff; // high byte of 16-bit addr
        chunk[2] = addr & 0xff; // low byte of 16-bit addr
        chunk[3] = 0; // type (data)
        for (var j = 0; j < 16; ++j) {
            chunk[4 + j] = data[i + j];
        }
        var checksum = 0;
        for (var j = 0; j < 4 + 16; ++j) {
            checksum += chunk[j];
        }
        chunk[4 + 16] = (-checksum) & 0xff;
        output.push(':' + hexlify(chunk).toUpperCase())
    }
    return output.join('\n');
};

var code_head = 'import math\n' +
    '\n' +
    'def math_map(v, al, ah, bl, bh):\n' +
    '    return bl +  (bh - bl) * (v - al) / (ah - al)\n' +
    '\n' +
    'def math_mean(myList):\n' +
    '    localList = [e for e in myList if type(e) == int or type(e) == float]\n' +
    '    if not localList: return\n' +
    '    return float(sum(localList)) / len(localList)\n' +
    '\n' +
    'def math_median(myList):\n' +
    '    localList = sorted([e for e in myList if type(e) == int or type(e) == float])\n' +
    '    if not localList: return\n' +
    '    if len(localList) % 2 == 0:\n' +
    '        return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0\n' +
    '    else:\n' +
    '        return localList[(len(localList) - 1) // 2]\n' +
    '\n' +
    'def math_modes(some_list):\n' +
    '    modes = []\n' +
    '    # Using a lists of [item, count] to keep count rather than dict\n' +
    '    # to avoid "unhashable" errors when the counted item is itself a list or dict.\n' +
    '    counts = []\n' +
    '    maxCount = 1\n' +
    '    for item in some_list:\n' +
    '        found = False\n' +
    '        for count in counts:\n' +
    '            if count[0] == item:\n' +
    '                count[1] += 1\n' +
    '                maxCount = max(maxCount, count[1])\n' +
    '                found = True\n' +
    '        if not found:\n' +
    '            counts.append([item, 1])\n' +
    '    for counted_item, item_count in counts:\n' +
    '        if item_count == maxCount:\n' +
    '            modes.append(counted_item)\n' +
    '    return modes\n' +
    '\n' +
    'def math_standard_deviation(numbers):\n' +
    '    n = len(numbers)\n' +
    '    if n == 0: return\n' +
    '    mean = float(sum(numbers)) / n\n' +
    '    variance = sum((x - mean) ** 2 for x in numbers) / n\n' +
    '    return math.sqrt(variance)\n' +
    '\n' +
    'def lists_sort(my_list, type, reverse):\n' +
    '    def try_float(s):\n' +
    '        try:\n' +
    '            return float(s)\n' +
    '        except:\n' +
    '            return 0\n' +
    '    key_funcs = {\n' +
    '        "NUMERIC": try_float,\n' +
    '        "TEXT": str,\n' +
    '        "IGNORE_CASE": lambda s: str(s).lower()\n' +
    '    }\n' +
    '    key_func = key_funcs[type]\n' +
    '    list_cpy = list(my_list)\n' +
    '    return sorted(list_cpy, key=key_func, reverse=reverse)\n'

function isExistOption(id, value) {
    var isExist = false;
    var count = $('#' + id).find('option').length;

    for (var i = 0; i < count; i++) {
        if ($('#' + id).get(0).options[i].value == value) {
            isExist = true;
            break;
        }
    }
    return isExist;
}