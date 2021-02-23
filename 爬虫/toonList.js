const puppeteer = require("puppeteer");
const iPhone = puppeteer.devices['iPhone 6'];
const utils = require('./utils/utils')

//跳转获取page和browser对象
async function pup(url,browser) {

  if(!browser){
     browser = await puppeteer.launch({
      // executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      // headless: false,
      timeout: 0
    });
  }
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto(url, {timeout: 0});
  return {page, browser}
}

//获取书籍详情页链接和书籍名
async function getBookList() {
  console.log('获取书籍详情页链接和书籍名')
  let {page, browser} = await pup(`https://www.bttoon.com/classify`)
  let List = await page.$$eval('#classify_container > li> a.ImgA.autoHeight', (el) =>
    el.map((x) =>
      `https://www.bttoon.com` + x.getAttribute('href') //获取书籍详情页链接
    )
  )
  let bookNames = await page.$$eval('#classify_container > li > a.txtA', (el) =>
    el.map((x) => x.innerText)
  )
  utils.mkdirSync(`./images`); // 存放目录
  await page.close()
  bookNames = [...bookNames]
  List = [...List]
  for (let i = 0; i < List.length; i++) {
    utils.mkdirSync(`./images/${bookNames[i]}`); // 存放目录
    await getBookInfo(List[i],bookNames[i],browser);
  }
}

async function getBookInfo(url,bookName,oldBrowser) {
  console.log('书籍详情页获取书籍章节信息')
  let {page, browser} = await pup(url,oldBrowser)
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
  await page.close();
  console.log(names, List)
  for (let i = 0; i < List.length; i++) {
    let chapter =  names[i].substring(0,4)
    utils.mkdirSync(`./images/${bookName}/${chapter}`); // 存放目录
    await netbian(1, List[i], chapter,bookName,browser);
  }
}

async function netbian(i,url,chapter,bookName,oldBrowser) {
  console.log('下载图片')
  let temp
  console.log(i,chapter,'888888888888888888')
  let {page, browser} = await pup(`${url}/${i}`,oldBrowser)
  let images = await page.$$eval(".charpetBox > img", (el) =>//图片节点，API可查看官方介绍
    el.map((x) => {
      return x.getAttribute("data-original")//获取图片的src地址
    })
  );
  await page.close();
  for (let m of images) {
    await utils.downloadImg(m, `./images/${bookName}/${chapter}/` + new Date().getTime()+ ".jpg");
  }
  temp = temp || []
  console.log((JSON.stringify(temp) !== JSON.stringify(images)))
  if(JSON.stringify(temp) !== JSON.stringify(images)){
    temp = images
    await netbian(++i,url,chapter,bookName)
  }
}


getBookList()
