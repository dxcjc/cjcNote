Function.prototype.CjcCall=function (thisArgs,...args){
  const fn = Symbol('fn')
  thisArgs = thisArgs || window
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