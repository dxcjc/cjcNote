const request = require('request')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')
const fs = require('fs')
function requestPromise(url)
{
  return new Promise((resolve, reject) => {
    request(url, {encoding: null}, (err, response, body) => {
      const bufs = iconv.decode(body, 'gbk')
      resolve(bufs.toString('utf8'))
    })
  })
}

async function getList(){
  let bookUrl = []
  let bookName = ''
  let bookImg = ''
  await requestPromise('https://www.biquge5200.cc/131_131878').then(res=>{
    const $ = cheerio.load(res)
    $('#list > dl > dd > a').each((i,item)=>{

      let url = item.attribs.href.replace('https','http')
      bookUrl.push(url)
    })
    $('#info > h1').each((i,item)=>{
       bookName = item.children[0].data
    })
    $('#fmimg > img').each((i,item)=>{
      bookImg = item.attribs.src
    })
  })
  return {bookUrl, bookName,bookImg}
}
class Book{
  constructor(name,bookImg) {
    this.name = name
    this.text = new Set()
    this.bookImg = bookImg
  }

}
class Chapter{
  constructor(name,content) {
    this.name = name
    this.content = content
  }
}


async function getBooks() {
  let {bookUrl, bookName,bookImg} = await getList()
  let book = new Book(bookName,bookImg)
  for (const item of bookUrl) {
    await requestPromise(item).then(res => {
      const $ = cheerio.load(res)
      let content = ''
      let name = ''
      $('#content > p').each((i,item)=>{
        content += item.children[0].data
      })
      $('#wrapper > div.content_read > div > div.bookname > h1').each((i,item)=>{
        name = item.children[0].data
      })
      book.text.add(new Chapter(name, content))
      console.log(book);
    })
  }
  const content = book.toString()
}
getBooks()




