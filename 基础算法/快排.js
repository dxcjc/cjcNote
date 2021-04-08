//快排 会消耗很多内存空间，数据量大时可能造成内存溢出 （可快速写出，但是不推荐）
function quickSort(arr) {

    let length = arr.length
    //递归终止条件
    if(length <= 1) return arr
    // 1:选取基准元素
    let pivot = length/2 || 0 

    let pivotValue = arr.splice(pivot, 1)[0]

    let left = [], right = []

    arr.forEach(item => {
        // 2:比基准元素小的元素放到左边，大的放右边
        item > pivotValue ? right.push(item) : left.push(item)
       
    });
    
    // 3:在左右子数组中重复步骤一二，直到数组只剩下一个元素
     // 4:向上逐级合并数组
    return [ ...quickSort(left), pivotValue, ...quickSort(right)]
    
}

//使用
var arr1 = [5,1,4,4,2,3]

console.log(quickSort(arr1)); 
