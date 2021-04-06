/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let len = nums.length
  nums.sort((a,b) => a-b)
  let res = []
  helper()

  return res


  function helper(temp = [], start = 0) {
    res.push(temp)
    if (temp.length === len) return
    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[i-1]) continue
      temp.push(nums[i])
      helper([...temp], i+1)
      temp.pop()
    }
  }
};


console.log(subsetsWithDup([1,2,3,4]));

