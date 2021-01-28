Function.prototype.CjcApply = function (thisArgs,args){
  const fn = Symbol('fn')
  thisArgs = thisArgs || window
  thisArgs[fn] = this
  let result = thisArgs[fn](...args)
  delete thisArgs[fn]
  return result
}
function a(args){
  console.log(args)
}
obj={
}
a.CjcApply(obj,['adadadadass'])