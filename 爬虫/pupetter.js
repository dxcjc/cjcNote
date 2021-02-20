const puppeteer = require("puppeteer");
const fs = require("fs");
const request = require("request");
const path = require("path");
const iPhone = puppeteer.devices['iPhone 6'];
let i = 2;//页数
async function netbian(i) {
  const pathToExtension = require("path").join(
    __dirname,
    "./chrome-win/chrome.exe",
  );
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(iPhone);

  await page.goto(`https://www.bttoon.com/view/1198/53153`);
  let images = await page.$$eval(".charpetBox > img", (el) =>//图片节点，API可查看官方介绍
    el.map((x) => {
      return x.getAttribute("data-original")//获取图片的src地址
    })
  );
  console.log(images);
  mkdirSync(`./images`); // 存放目录
  for (m of images) {
    await downloadImg(m, "./images/" + new Date().getTime() + ".jpg");
  }
page.click()
  //下一页，具体结束页可以自己限制
  // 关闭
  await browser.close();
}
netbian(1);//这里执行

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
}