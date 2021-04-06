/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates =  function(S) {
  let temp = ''
  for (let i = 0; i < S.length; i++) {
    let a = S.charAt(i)
    if(a === temp[temp.length-1]){
      temp = temp.substring(0,temp.length-1)
    }else{
      temp += a
    }
  }
  return temp
};
// console.log(removeDuplicates("abbaca"));
