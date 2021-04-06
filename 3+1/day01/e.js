// var calculate = function(s) {
//   s = s.replace(/\s/g, "")
//   while(s.includes('*')){
//     let index = s.indexOf('*')
//     let left = s.substring(0,index).split(/[+\-*/]/);
//
//     let right = s.substring(index+1,s.length).split(/[+\-*/]/);
//
//     if(left.length===1) s =calc('*',left[left.length-1], right[0])+s.substring(index+2,s.length)
//     else s =s.substring(0,index-1)+ calc('*',left[left.length-1],right[0])+s.substring(index+2,s.length)
//   }
//   while(s.includes('/')){
//     let index = s.indexOf('/')
//     let left = s.substring(0,index).split(/[+\-*/]/);
//     let right = s.substring(index+1,s.length).split(/[+\-*/]/);
//     if(left.length===1) s =calc('/',left[left.length-1],right[0])+s.substring(index+2,s.length)
//     else s =s.substring(0,index-1)+calc('/',left[left.length-1],right[0])+s.substring(index+2,s.length)
//     console.log(s,'****************');
//   }
//   let a = s.split('+')
//   for (let i = 0; i < a.length; i++) {
//     a[i] = a[i].replace(/-/g,'+-')
//   }
//   console.log(a.join('+'));
//   return a.join('+').split('+').reduce((r, n) => calc('+', r, n), 0)
//
// };
//
// console.log(calculate("3*2*2+5*6"));
// s[i].charCodeAt() - '0'.charCodeAt();

var calculate = function(s) {
  s = s.replace(/\s/g, "")
  const stack = new Array();
  let preSign = '+';
  let num = 0;
  const n = s.length;
  for (let i = 0; i < n; ++i) {
    if (!isNaN(Number(s[i]))) {
      num = num * 10 + Number(s[i])
    }
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(stack.pop() / num | 0);
      }
      preSign = s[i];
      num = 0;
    }
  }
  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }
  return ans;
};



function calc(flag, num1, num2) {

  num1 = Number(num1) || 0
  num2 =  Number(num2) || 0
  let result
  switch (flag) {
    case '+' :
      result = num1 + num2
      break;
    case '-' :
      result = num1 - num2
      break;
    case '*' :
      result = num1 * num2
      break;
    case '/' :
      result = num1 / num2
      break;
    default:
      result = 0
  }
console.log(result)
  return parseInt(result)
}

