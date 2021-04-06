// call 和 apply 都用于改变函数内 this 的指向。能力是相同的，只是传参的方式不同。
//
// 除了第一个参数外，call 可以接收一个参数列表，apply 只接受一个参数数组。
//
// bind 和上面两个方法作用是一致的，只是该方法会返回一个函数。
/**
 *
 * @param method bind的method属性
 * @param args method的参数
 * @returns {fn} 返回的函数改变this的走向
 */
Function.prototype.myBind=(method,...args)=>{
  // 保存this对象
  let self = this
  let fn = function (){
    //判断method是否是本对象的方法
    self.apply((method instanceof self ? this : method),args.concat(Array.prototype.splice.call(arguments)))
  }
  fn.prototype = Object.create(self.prototype);
  return fn
}
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let _this = this
  let args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}