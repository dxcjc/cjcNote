const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];
(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.emulate(iPhone)
  await page.goto('http://www.baidu.com')
  await page.screenshot({path: 'c:/temp/baidu_iphone_X.png'})
})()