let fs = require('fs');
let path = require('path');

const fsExtend = {};

fsExtend.cpfile = (srcPath, tarPath, cb) => {
    var rs = fs.createReadStream(srcPath)
    rs.on('error', (err) => {
        if (err) {
            console.log('read error', srcPath)
        }
        cb && cb(err)
    })

    var ws = fs.createWriteStream(tarPath)
    ws.on('error', (err) => {
        if (err) {
            console.log('write error', tarPath)
        }
        cb && cb(err)
    })
    ws.on('close', (ex) => {
        cb && cb(ex)
    })

    rs.pipe(ws)
}

fsExtend.cpdir = (srcDir, tarDir, cb) => {
    fs.readdir(srcDir, (err, files) => {
        var count = 0
        var checkEnd = () => {
            ++count == files.length && cb && cb()
        }

        if (err) {
            checkEnd()
            return
        }

        files.forEach((file) => {
            var srcPath = path.join(srcDir, file)
            var tarPath = path.join(tarDir, file)

            fs.stat(srcPath, (err, stats) => {
                if (stats.isDirectory()) {
                    fs.mkdir(tarPath, (err) => {
                        if (err) {
                            console.log(err)
                            return
                        }

                        fsExtend.cpdir(srcPath, tarPath, checkEnd)
                    })
                } else {
                    fsExtend.cpfile(srcPath, tarPath, checkEnd)
                }
            })
        })

        //为空时直接回调
        files.length === 0 && cb && cb()
    })
}

fsExtend.deldir = (dirPath) => {
    let files = [];
    if (fs.existsSync(dirPath)) {
        files = fs.readdirSync(dirPath);
        files.forEach((file, index) => {
            let curPath = dirPath + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                fsExtend.deldir(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dirPath);
    }
}

fsExtend.cpdirWithName = (oldPath, newPath, foldersName, doFunc, startIndex = 0) => {
    fs.mkdir(newPath + "/" + foldersName[startIndex], (err) => {
        if (err || !fs.existsSync(oldPath + "/" + foldersName[startIndex])) {
            startIndex++;
            if (startIndex < foldersName.length) {
                fsExtend.cpdirWithName(oldPath, newPath, foldersName, doFunc, startIndex);
            } else {
                doFunc();
            }
        } else {
            fsExtend.cpdir(oldPath + "/" + foldersName[startIndex], newPath + "/" + foldersName[startIndex], function (err) {
                if (err) {
                    console.log(err);
                }
                startIndex++;
                if (startIndex < foldersName.length) {
                    fsExtend.cpdirWithName(oldPath, newPath, foldersName, doFunc, startIndex);
                } else {
                    doFunc();
                }
            })
        }
    })
}

fsExtend.cpfileWithName = (oldPath, newPath, filesName) => {
    for (var i = 0; i < filesName.length; i++) {
        try {
            if (fs.existsSync(oldPath + "/" + filesName[i])) {
                fs.copyFileSync(oldPath + "/" + filesName[i], newPath + "/" + filesName[i]);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

fsExtend.delfileWithName = (dirPath, filesName) => {
    for (let i = 0; i < filesName.length; i++) {
        try {
            fs.unlinkSync(dirPath + "/" + filesName[i]);
        } catch (e) {
            console.log(e);
        }
    }
}

fsExtend.deldirWithName = (fatherDirPath, dirName) => {
    for (let i = 0; i < dirName.length; i++) {
        fsExtend.deldir(fatherDirPath + "/" + dirName[i]);
    }
}

fsExtend.getDirAndFileName = (dirPath) => {
    let nameArr = null;
    if (fs.existsSync(dirPath)
        && fs.statSync(dirPath).isDirectory()) {
        nameArr = [];
        nameArr.push([]);
        nameArr.push([]);
        let obtainArr = fs.readdirSync(dirPath);
        for (let i = 0; i < obtainArr.length; i++) {
            if (fs.statSync(dirPath + "/" + obtainArr[i]).isFile()) {
                nameArr[0].push(obtainArr[i]);
            } else {
                nameArr[1].push(obtainArr[i]);
            }
        }
    }
    return nameArr;
}

fsExtend.isdir = (inPath) => {
    if (fs.existsSync(inPath)) {
        if (fs.statSync(inPath).isDirectory())
            return 1;
        else
            return 0;
    } else {
        return 0;
    }
}

fsExtend.isfile = (inPath) => {
    if (fs.existsSync(inPath)) {
        if (fs.statSync(inPath).isFile())
            return 1;
        else
            return 0;
    } else {
        return 0;
    }
}

//递归创建目录 同步方法 
fsExtend.mkdirSync = (dirname) => {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (fsExtend.mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

fsExtend.writeFileSync = (filePath, data) => {
    let dirPath = path.dirname(filePath);
    fsExtend.mkdirSync(dirPath);
    fsExtend.writeFileSync(filePath, data);
}

module.exports = fsExtend;