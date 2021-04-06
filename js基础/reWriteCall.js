// Function.prototype.CjcCall=function (thisArgs,...args){
//   const fn = Symbol('fn')
//   thisArgs = thisArgs || window
//   thisArgs[fn] = this
//   const result = thisArgs[fn](...args)
//   delete thisArgs[fn]
//   return result
// }

Function.prototype.Call =function call(obj,...args) {
  // 创建一个symbol对象
  const fn = Symbol('fn')
  // 判断obj 是否为空 ，为空就重置为window
  obj = obj || window
  // 将目标方法挂载到obj上，既改变this走向
  obj[fn] = this
  // 执行该方法
  const result = obj[fn](...args)
  // 将方法从obj上移除
  delete  obj[fn]
  // 返回结果
  return result
}

function a(b){
  console.log(this,b)
}
obj={
  a:'aaaaaaaaaa'
}
a.Call(obj,'dasdasdas')