var majorityElement = function(nums) {
  let map = {}
  for(let i= 0;i < nums.length;i++){
    let temp = nums[i]
    if(!map[temp]){
      map[temp] = 1
    }else{
      map[temp]++
    }
  }

  let majorityElement = ''
  let max = 0
  for(let key in map){
    if(map[key]>max){
      if(max > nums.length/2) return majorityElement
      majorityElement = key
      max = map[key]
    }
  }
  return majorityElement
};
console.log(majorityElement([3, 2, 3]));
