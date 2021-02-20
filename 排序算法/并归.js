//归并排序和快排的思路类似，都是递归分治，区别在于快排边分区边排序，而归并在分区完成后才会排序
function  mergeSort(arr) {
  if (arr.length <= 1) return arr
  const midIndex = arr.length/2 | 0
  const leftArray = arr.splice(0,midIndex)
  return merge(mergeSort(leftArray),mergeSort(arr))
}
function merge(leftArray,rightArray){
  let arr = []
  while(leftArray.length  && rightArray.length ){
    leftArray[0]>=rightArray[0] ? arr.push(leftArray.shift()) :  arr.push(rightArray.shift())
  }
  while(leftArray.length) arr.push(leftArray.shift())
  while(rightArray.length) arr.push(rightArray.shift())
  return arr
}
let arr = [1, 5, 4, 2, 5, 8, 4, 2, 45, 2, 3, 5]
console.log(mergeSort(arr));