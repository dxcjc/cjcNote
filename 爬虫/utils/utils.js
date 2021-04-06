const fs = require("fs");
const path = require("path");
const request = require("request");
// 同步创建目录
function mkdirSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
  return false;
}

// 下载文件 保存图片
async function downloadImg(src, path) {
  try{
    return new Promise(async function (resolve, reject) {
      let writeStream = fs.createWriteStream(path);
      let readStream = await request(src,{
        headers:{
          Referer:`https://www.bttoon.com`
        }
      });
      await readStream.pipe(writeStream);
      readStream.on("end", function () {
        console.log("文件下载成功");
      });
      readStream.on("error", function () {
        console.log("错误信息:" + err);
      });
      writeStream.on("finish", function () {
        console.log("文件写入成功");
        writeStream.end();
        resolve();
      });
    });
  }catch (e) {
    console.log(e)
  }

}

function readAll(parentPath, out) {
  try {
    let files = fs.readdirSync(parentPath);
    files.forEach(function (item) {
      let tempPath = path.join(parentPath, item);
      let stats = fs.statSync(tempPath);
      out.push(tempPath);
    });
  } catch (e) {
    console.warn("Path Error:" + parentPath);
    return out;
  }
}

function stripScript(s) {
  let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）/-/\n|{}【】‘；：”“'。，、？]");
  let rs = "";
  for (let i = 0; i < s.length; i++) {
    rs = rs+s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}
mkdirSync('./images/秘密教学/'+stripScript('第1话-门缝传\n出呻吟声限免01-23'))
module.exports={
  readAll,
  mkdirSync,
  downloadImg,
  stripScript
}