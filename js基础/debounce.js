function debounce(fn,time){
  let timeout =null
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
debounced()
debounced()
debounced()
debounced()
debounced()
debounced()
