// Function.prototype.CjcBind = function (thisArgs,...args){
//   let self = this
//   let fn = function (){
//     /**
//      * this: 指向fn
//      */
//     console.log(arguments);
//     self.apply(thisArgs instanceof self ? this:thisArgs,args.concat(Array.prototype.splice.call(arguments)))
//   }
//   fn.prototype = Object.create(self.prototype);
//   return fn
// }

Function.prototype.Bind = function (obj,...args) {

  let that = this

  let fn = function () {

    that.apply(obj instanceof that ? this : obj,args.concat(Array.prototype.splice.call(arguments)))

  }

  fn.prototype = Object.create(that.prototype);

  return fn

}

function c(a,b){
  console.log(a,b)
}
obj={}
c.Bind(null, 'ada', 'das')()
c.Bind(null, 'ada', 'das')()

