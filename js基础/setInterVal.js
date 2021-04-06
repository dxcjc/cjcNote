// 合并二维有序数组成一维有序数组，归并排序的思路
let arr = [1,3,5,[2,4,6]]

function mergeSort(arr){
  let lengthArr = arr.length;
  if(lengthArr === 0){
    return [];
  }
  while(arr.length > 1){
    let arrayItem1 = arr.shift();
    let arrayItem2 = arr.shift();
    let mergeArr = merge(arrayItem1, arrayItem2);
    arr.push(mergeArr);
  }
  return arr[0];
}