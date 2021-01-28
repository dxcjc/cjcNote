# cjcNote
## 手写call
```js
//call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
//语法：function.call(thisArg, arg1, arg2, ...)
```
call()的原理比较简单，由于函数的this指向它的直接调用者，我们变更调用者即完成this指向的变更：
```js
变更函数调用者示例
function foo() {
console.log(this.name)
}

// 测试
const obj = {
name: '手写call'
}
obj.foo = foo   // 变更foo的调用者
obj.foo()       // '手写call'

复制代码基于以上原理, 我们两句代码就能实现call()
Function.prototype.myCall = function(thisArg, ...args) {
thisArg.fn = this              // this指向调用call的对象,即我们要改变this指向的函数
return thisArg.fn(...args)     // 执行函数并return其执行结果
}
```

```js
//补充
Function.prototype.CjcCall=function (thisArgs,...args){
  const fn = Symbol('fn')
  thisArgs = thisArgs || window //为传入对象则指向window
  thisArgs[fn] = this
  const result = thisArgs[fn](...args)
  delete thisArgs[fn]
  return result
}

function a(){
  console.log(this.a)
}
obj={
  a:'aaaaaaaaaa'
}
a.CjcCall(obj)
```
## 2手写apply
```js
//apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
//语法：func.apply(thisArg, [argsArray])
```


apply()和call()类似，区别在于call()接收参数列表，而apply()接收一个参数数组，所以我们在call()的实现上简单改一下入参形式即可
```js
Function.prototype.CjcApply = function (thisArgs,args){
  const fn = Symbol('fn')
  thisArgs = thisArgs || window
  thisArgs[fn] = this
  let result = thisArgs[fn](...args)
  delete thisArgs[fn]
  return result
}
function a(){
  console.log(this.a)
}
obj={
  a:'aaaaaaaaaa'
}
a.CjcApply(obj,['adadadadass'])
```

## 3手写bind(arguments?)

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
语法: function.bind(thisArg, arg1, arg2, ...)

```js
// 从用法上看，似乎给call/apply包一层function就实现了bind()：
Function.prototype.myBind = function(thisArg, ...args) {
return () => {
this.apply(thisArg, args)
}
}
```
复制代码但我们忽略了三点：

- bind()除了this还接收其他参数，bind()返回的函数也接收参数，这两部分的参数都要传给返回的函数
- new会改变this指向：如果bind绑定后的函数被new了，那么this指向会发生改变，指向当前函数的实例
- 没有保留原函数在原型链上的属性和方法
```js

Function.prototype.CjcBind = function (thisArgs,...args){
  let self = this
  let fn = function (){
     self.apply(thisArgs instanceof self ? this:thisArgs,args.concat(Array.prototype.splice.call(arguments)))
  }
  fn.prototype = Object.create(self.prototype);
  return fn
}
function c(a,b){
  console.log(arguments,a,b)
}
obj={}
c.CjcBind(obj, 'adadad', 'dasdasdasd')('aaaa','asdasds')
```
## 4 防抖函数
防抖，即短时间内大量触发同一事件，只会执行一次函数，实现原理为设置一个定时器，约定在xx毫秒后再触发事件处理，每次触发事件都会重新设置计时器，直到xx毫秒内无第二次操作，防抖常用于搜索框/滚动条的监听事件处理，如果不做防抖，每输入一个字/滚动屏幕，都会触发事件处理，造成性能浪费
```js
function debounce(fn,time){
  let timeout = null
  return function (){
    let that = this
    let args = arguments
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(()=>{
        fn.apply(that, args)
      },time)
  }
}
const debounced = debounce(()=>console.log('hi'),1000)
debounced()
```
## 5 节流函数

防抖是延迟执行，而节流是间隔执行，函数节流即每隔一段时间就执行一次，实现原理为设置一个定时器，约定xx毫秒后执行事件，如果时间到了，那么执行函数并重置定时器，和防抖的区别在于，防抖每次触发事件都重置定时器，而节流在定时器到时间后再清空定时器

```js
function throttle(fn,time){
  let timeout = null
  return function (){
    let that = this
    let args = arguments
    if (!timeout){
      timeout = setTimeout(()=>{
        console.log(1)
        timeout = null
        fn.apply(that, args)
      },time)
    }
  }
}
/*******************************************************************************************************/
// function throttle(func, wait) {
//   var prev = 0;
//   return function() {
//     let now = Date.now();
//     let context = this;
//     let args = arguments;
//     if (now - prev > wait) {
//       func.apply(context, args);
//       prev = now;
//     }
//   }
// }
const throttled = throttle(()=>console.log('hi'),1000)
throttled()
throttled()
throttled()
throttled()
```
## 6 数组扁平化
```js
let arr = [1, [1,2], [1,2,3]]
```
- 1 es6 =》 flat
```js
console.log(arr.flat());  // [1, 1, 2, 1, 2, 3]
```

- 2 递归(for,reduce)
```js
function flat(arr){
let result = result || []
for (let item of arr){
item instanceof Array ? result.concat(item):result.push(item)
}
return result
}
const arr = [1, [1,2], [1,2,3]]
function flat(arr) {
return arr.reduce((prev, cur) => {
return prev.concat(cur instanceof Array ? flat(cur) : cur)
}, [])
}

flat(arr)  // [1, 1, 2, 1, 2, 3]

console.log(arr.flat());  // [1, 1, 2, 1, 2, 3]

```

- 3 正则
```js
function flat(arr){
arr = JSON.stringify(arr);
const str = `[${JSON.stringify(arr).replace(/(\[|\])/g, '')}]`
JSON.parse(str)
}
console.log(arr.flat());  // [1, 1, 2, 1, 2, 3]
```

- 4 迭代+[...]
```js
let arr = [1, [1,2], [1,2,3,[4,4,4]]]
while (arr.some(Array.isArray)){
arr = [].concat(...arr);
}
console.log(arr)  // [1, 1, 2, 1, 2, 3]
```





