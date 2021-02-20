// class Observer{
//   constructor(callback) {
//     this.callback = callback
//   }
// }
//
// class Subject{
//   constructor() {
//     this.observers = []
//   }
//   addObserver(Observer){
//     this.observers.push(Observer)
//   }
//   cancelOberser(oberser) {
//     this.observer = this.observer.filter(item => item !== oberser);
//   }
//   notify(){
//     this.observers.forEach(observer=>{
//       observer.callback()
//     })
//   }
// }
//
// let subject = new Subject()       //被观察者
// const update = () => {console.log('被观察者发出通知')}  //收到广播时要执行的方法
// let ob1 = new Observer(update)    //观察者1
// let ob2 = new Observer(update)    //观察者2
// subject.addObserver(ob1)          //观察者1订阅subject的通知
// subject.addObserver(ob2)          //观察者2订阅subject的通知
// subject.notify()                  //发出广播,执行所有观察者的update方法

class Subscribe{
   constructor() {
     this.subMap = {}
   }
}
Subscribe.prototype.on = function (type,fn){
  if(this.subMap[type]){
    if(!this.subMap[type].includes(fn)) this.subMap[type].push(fn)
  }else {
    this.subMap[type] = [fn]
  }
}
// 取消订阅
Subscribe.prototype.unsubscribe= function (type, cb) {
  if (this.subMap[type] && this.subMap[type].includes(cb)) {
    const index = this.subMap[type].indexOf(cb);
    this.subMap[type].splice(index, 1);
  }
}
Subscribe.prototype.emit = function (type,args){
  if(this.subMap[type]){
    this.subMap[type].forEach(fn=>{
      fn(args)
    })
  }
}

const subscribe = new Subscribe();

// 订阅
subscribe.on('公众号1', fn1 = msg => console.log(`孙悟空订阅的公众号1: ${msg}`));
subscribe.on('公众号1', fn2 = msg => console.log(`猪八戒订阅的公众号1: ${msg}`));
subscribe.on('公众号2', fn3 = msg => console.log(`沙悟净订阅的公众号2: ${msg}`));
// 注意：要想取消订阅成功，必须用变量保存这个匿名函数，目的是为了用一个变量来固定指向该匿名函数的内存地址的指针。
subscribe.unsubscribe('公众号1', fn2);
// 发布
subscribe.emit('公众号1', '今天我们的粉丝查过100万啦！！！');
subscribe.emit('公众号2', '明天给粉丝们寄礼物喽～～');




