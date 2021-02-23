const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];
const fs = require("fs");
const path = require("path");
//图片转换成pdf
(async () => {
  const browser = await puppeteer.launch({

    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",

    headless: false

  })
  const page = await browser.newPage()

  await page.goto('https://jpg2pdfjs.com/zh/proversion')

  let files = []

  readAll('D:\\练习\\note\\爬虫\\images\\继母的朋友们',files)

  for (let file of files) {

    const uploadPic = await page.waitForSelector('#bfile')

    console.log(file);

    let fileNames = []

    readAll(`${file}`,fileNames)

    // console.log(fileNames);
    for (let fileName of fileNames) {

      // console.log(fileName)
      await uploadPic.uploadFile(fileName)

    }
    await page.click('#fiximg')

    await page.select('#fiximg','no');

    await page.click('#convertBtn')

    await page.waitForSelector('#outputArea > a')

    await page.click('#outputArea > a')

    await page.reload()

  }
  await browser.close()

})()






