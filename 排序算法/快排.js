//选取基准元素
//比基准元素小的元素放到左边，大的放右边
//在左右子数组中重复步骤一二，直到数组只剩下一个元素
//向上逐级合并数组

// function quickSort(arr) {
//   if (arr.length <= 1) return arr
//   const pivot = arr.length / 2 | 0
//   const pivotValue = arr.splice(pivot,1)[0]
//   const leftArr = []
//   const rightArr = []
//   arr.forEach(item=>{
//     item > pivotValue ? rightArr.push(item) : leftArr.push(item)
//   })
//   return [...quickSort(leftArr),pivotValue,...quickSort(rightArr)]
// }
// console.log(quickSort([1, 5, 4, 2, 5, 8, 4, 2, 45, 2, 3, 5]));
/**********************************优化**************************************************/
function quickSort(arr,left,right) {
  if(left<right){
    let position = left - 1
    for (let i = left; i <= right; i++) {
      let pivot = arr[right]
      if(arr[i]<= pivot){
        position++
        let temp = arr[position]
        arr[position] = arr[i]
        arr[i] = temp
      }
    }
    quickSort(arr,left,position-1)
    quickSort(arr,position+1,right)
  }
  return arr
}
let arr = [1, 5, 4, 2, 5, 8, 4, 2, 45, 2, 3, 5]
let start = 0;
let end = arr.length - 1;
console.log(quickSort(arr, start, end));