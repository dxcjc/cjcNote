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

