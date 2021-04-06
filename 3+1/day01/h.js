// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
//
// 说明：
//
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
//
// 示例 1:
//
// 输入: [2,2,1]
// 输出: 1
// 示例2:
//
// 输入: [4,1,2,1,2]
// 输出: 4



var singleNumber = function(nums) {
  let temp = []
  let length = nums.length
  for (let i = 0; i < length; i++) {
    if(!temp.includes(nums[i])){
      temp.push(nums[i])
    }else{
      let index = temp.indexOf(nums[i])
      temp.splice(index,1)
    }
  }
  return temp[0]
};
console.log(singleNumber([2,2,1]));