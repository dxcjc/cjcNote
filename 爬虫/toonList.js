const puppeteer = require("puppeteer");
const fs = require("fs");
const request = require("request");
const path = require("path");
const iPhone = puppeteer.devices['iPhone 6'];
const pupetter = require('./pupetter')

async function pup(url) {
  const pathToExtension = require("path").join(
    __dirname,
    "./chrome-win/chrome.exe",
  );
  const browser = await puppeteer.launch({
    executablePath: "C:\\Users\\cjc\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe",
    headless: false,
    timeout: 0
  });
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto(url, {timeout: 0});
  return {page, browser}
}

async function getToon() {
  let {page, browser} = await pup(`https://www.bttoon.com/classify`)
  let List = await page.$$eval('#classify_container > li> a.ImgA.autoHeight', (el) =>
    el.map((x) =>
      `https://www.bttoon.com` + x.getAttribute('href')//获取图片的src地址
    )
  )
  let bookNames = await page.$$eval('#classify_container > li > a.txtA', (el) =>
    el.map((x) =>
     x.innerText
    )
  )
  pupetter.mkdirSync(`./images`); // 存放目录
  await browser.close();
  console.log(List);

  bookNames = [...bookNames]
  List = [...List]
  for (let i = 1; i < List.length; i++) {
    pupetter.mkdirSync(`./images/${bookNames[i]}`); // 存放目录
    await getBookInfo(List[i],bookNames[i]);
  }

}

async function getBookInfo(url,bookName) {
  let {page, browser} = await pup(url)
  await page.click('#list > ul.Drama> li.add')
  await page.goBack({timeout: 0})
  await page.click('#list > ul.Drama> li.add')
  let List = await page.$$eval('#list > ul > li> a', (el) =>
    el.map((x) =>
      `https://www.bttoon.com` + x.getAttribute('href')//获取图片的src地址
    )
  )
  let names = await page.$$eval('#list > ul > li > a > span', (el) =>
    el.map((x) =>
      x.innerText // 章节名
    )
  )
  names = [...names]
  List = [...List]
  await browser.close();
  console.log(names, List)
  for (let i = 0; i < List.length; i++) {
    // let chapter =  names[i].replace('/\\n')
    //  chapter = chapter.replace(/[-]/g, '');

    let chapter =  names[i].substring(0,4)
    pupetter.mkdirSync(`./images/${bookName}/${chapter}`); // 存放目录
    await pupetter.netbian(1, List[i], chapter,bookName);
  }

}


getToon()
