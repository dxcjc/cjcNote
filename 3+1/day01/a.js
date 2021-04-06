let  canPermutePalindrome = function(s) {
  if(s.length<=1) return true
  let temp =[]
  let sArr = s.split('')
  while (sArr.length>0){
    let a = sArr.shift()
    if(sArr.indexOf(a)!==-1){
        sArr.splice(sArr.indexOf(a),1)
      }else {
        temp.push(a)
        if (temp.length>2) return false
      }
    }
  return true
};
console.log(canPermutePalindrome("aab"));
