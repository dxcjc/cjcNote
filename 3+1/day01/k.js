var minOperations = function(s) {
  let length = s.length
  let flag = 0
  let flag1 = 1
  let count = 0
  let count1 =0
  for (let i = 0; i < length; i++) {
    flag==0 ? flag=1:flag=0
    let a = s.charAt(i)^flag
    if(a ===1) count+=1
    flag1==0 ? flag1=1:flag1=0
    let b = s.charAt(i)^flag1
    if(b ===1) count1+=1
  }
  return Math.min(count,count1)
};
s = "10"
console.log(minOperations(s));