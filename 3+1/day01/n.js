var hammingWeight = function (n) {
  let count = 0
  console.log(parseInt(n).toString());
  while (n !== 0) {
    let a = n & 1
    if(a === 1) count++
    n = n>>>1
  }
  return count
};

console.log(hammingWeight(11111111111111111111111111111101));