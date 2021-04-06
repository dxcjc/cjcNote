var isStraight = function (nums) {
  let length = nums.length
  let zeroCount = 0
  nums=nums.sort((i,j)=>{
    return i-j
  })
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) zeroCount++
  }
  for (let i = 0; i < length; i++) {
    if(nums[i] !== 0){
      if (nums[i + 1] - nums[i] > 0) {
        zeroCount = zeroCount - (nums[i + 1] - nums[i] - 1)
      }else {
        zeroCount = zeroCount - (nums[i] - nums[i+1] - 1)
      }
      if(zeroCount<0 || nums[i] === nums[i+1]) return false
    }
  }
  return true
};

console.log(isStraight([8,7,11,0,9]));
