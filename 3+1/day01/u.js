var clumsy = function(N) {
  let flag = ['+','*','/']
  let i = 0
  let result = 0
  let results = []
  while(true){
    if(N<1) {
      results.push(result)
      if(i==3) results.push(N--)
      break
    }
    if(i>=3) {
      i=i-3
      results.push(result)
      result=0
      results.push(N--)
      continue
    }
    result = calc(result,N,flag[i])
    i++
    N--
  }
  flag = ['+','+','-']
  result = 0
  i = 0
  console.log(results);
  while(results.length>0){
    if(i>2) {
      i=i-2
    }
    result = calc(result,results.shift(),flag[i])
    i++
  }

  return result
};
// 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
function calc(n1,n2,flag){

  switch(flag){
    case '+': return n1+n2;
      break;
    case '-':return n1-n2;
      break;
    case '*':return n1*n2;
      break;
    case '/':return  Math.floor(n1/n2);
      break;
    default: return
  }

}

console.log(clumsy(10));