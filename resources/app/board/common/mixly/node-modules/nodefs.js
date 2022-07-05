let fs = require('fs');
let path = require('path')
// 读
function read(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { flag: 'r', encoding: 'utf-8' }, function (err, data) {
      if (err) {
        // 失败执行的内容
        reject(err);
      } else {
        // 成功执行的内容
        resolve(data);
      }
    })
  })
}
// 写
function write(path, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, content, { flag: 'a', encoding: 'utf-8' }, function (err) {
      if (err) {
        // console.log('写入出错');
        reject(err);
      } else {
        // console.log('写入成功');
        resolve();
      }
    })
  })
}
// 创建目录
function mkdir(path) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(path, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  })
}
// 重命名
function rename(oldPath, newPath) {
  return new Promise(function (resolve, reject) {
    fs.rename(oldPath, newPath, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    })
  })
}
// 读目录
function readdir(path, options) {
  return new Promise(function (resolve, reject) {
    fs.readdir(path, options, function (err, files) {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    })
  })
}
//删除目录
function deldir(dir) {
  return new Promise(function (resolve, reject) {
    //先读文件夹
    fs.stat(dir, function (err, stat) {
      if (stat.isDirectory()) {
        fs.readdir(dir, function (err, files) {
          files = files.map(file => path.join(dir, file)); // a/b  a/m
          files = files.map(file => deldir(file)); //这时候变成了promise
          Promise.all(files).then(function () {
            console.log("del dir");
            fs.rmdir(dir, resolve);
          })
        })
      } else {
        console.log("del dir");
        fs.unlink(dir, resolve);
      }
    })

  })
}
//删除文件
function delfile(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) reject(err);
      if (stats.isFile()) {
        fs.unlink(filePath, err => {
          if (err) reject(err);
          resolve();
        })
      } else {
        reject();
      }
    })
  })
}
//拷贝文件
function cpfile(oldFilePath, newFilePath) {
  return new Promise((resolve, reject) => {
    read(oldFilePath).then(message => {
      return write(newFilePath, message);
    }).then(message => {
      resolve();
    }).catch(e => {
      reject(e);
    })
  })
}

function copyFile(srcPath, tarPath, cb) {
  var rs = fs.createReadStream(srcPath)
  rs.on('error', function (err) {
    if (err) {
      console.log('read error', srcPath)
    }
    cb && cb(err)
  })

  var ws = fs.createWriteStream(tarPath)
  ws.on('error', function (err) {
    if (err) {
      console.log('write error', tarPath)
    }
    cb && cb(err)
  })
  ws.on('close', function (ex) {
    cb && cb(ex)
  })

  rs.pipe(ws)
}

function copyFolder(srcDir, tarDir, cb) {
  try {
    fs.mkdirSync(tarDir);
  }catch(e) {
  }
  fs.readdir(srcDir, function (err, files) {
    var count = 0
    var checkEnd = function () {
      ++count == files.length && cb && cb()
    }

    if (err) {
      checkEnd()
      return
    }

    files.forEach(function (file) {
      var srcPath = path.join(srcDir, file)
      var tarPath = path.join(tarDir, file)

      fs.stat(srcPath, function (err, stats) {
        if (stats.isDirectory()) {
          fs.mkdir(tarPath, function (err) {
            if (err) {
              console.log(err)
              return
            }
            copyFolder(srcPath, tarPath, checkEnd)
          })
        } else {
          copyFile(srcPath, tarPath, checkEnd)
        }
      })
    })

    //为空时直接回调
    files.length === 0 && cb && cb()
  })
}
// 拷贝目录
function cpdir(oldDirPath, newDirPath) {
  return new Promise(function (resolve, reject) {
    copyFolder(oldDirPath, newDirPath, function (err) {
      if (err) {
        console.log("copy dir err");
        reject();
      }
      console.log("copy dir");
      resolve();
    })
  });
}
/*
//移动目录
function movedir(oldDirPath, newDirPath) {
  return new Promise((resolve, reject) => {
    fs.stat(newDirPath, (err, stats) => {
      if (err) 
        cpdir(oldDirPath, newDirPath)

    }  
  })
}
*/

module.exports = {
  read,
  write,
  mkdir,
  rename,
  readdir,
  deldir,
  cpdir,
  delfile,
  cpfile
}
