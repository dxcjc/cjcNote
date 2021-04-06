/*
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]
解释:

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


 */

var maxSlidingWindow = function(nums, k) {
  if(nums.length <=1 || k === 1) return nums
  let length = nums.length-k+1
  let maxArr = []
  for (let i = 0; i < length; i++) {
    let max = nums[i]
    for (let j = i+1; j < k+i; j++) {
      if (nums[j]>max) max = nums[j]
    }
    maxArr.push(max)
  }
  return maxArr
};

console.log(maxSlidingWindow([], 0));