var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums1.length; i++) {
    let temp = nums2[0]
    if (temp <= nums1[i]) {
      nums1.splice(i, 0, temp)
      nums2.shift()
      nums1.pop()
    }
  }
  console.log(nums1,nums2)
  if (nums2.length === 0) return nums1
  for (let i = m+n - 1; i >= 0; i--) {
    nums1[i] =  nums2.pop()
    if (nums2.length == 0) break
  }
  // if(nums2.length>0){
  //   for (let i = 0; i < nums2.length; i++) {
  //     nums1.push(nums2[i])
  //   }
  // }
  return nums1
};
// [1,2,3,0,0,0],
// 3,
//   [2,5,6],
// 3
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));