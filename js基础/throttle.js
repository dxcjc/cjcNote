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