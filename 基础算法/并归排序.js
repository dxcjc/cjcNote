function mergeSort(arr) {

    let length = arr.length
    //数组元素被划分到剩1个时，递归终止
    if (length <= 1) return arr
    // 对半划分数组
    const midIndex = arr.length / 2 | 0

    let left = arr.slice(0, midIndex)

    let right = arr.slice(midIndex, length)
    //先划分，后合并(直至数组中仅剩一个元素)
    return merge(mergeSort(left), mergeSort(right))

}

//合并
function merge(leftArr, rightArr) {

    let result = []
    // 循环比较两个数组的第一个元素，
    // 将较小的元素放入result中知道某一数组为空
    while (leftArr.length && rightArr.length) {

        leftArr[0] <= rightArr[0] ? result.push(leftArr.shift()) : result.push(rightArr.shift())

    }
    // 将剩余数组中的元素添加到result中
    if (leftArr.length) result = result.concat(leftArr)

    if (rightArr.length) result = result.concat(rightArr)

    return result

}

var arr1 = [5, 1, 4, 4, 2, 3]

console.log(mergeSort(arr1));