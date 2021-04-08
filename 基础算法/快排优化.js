/*
 * @Author: your name
 * @Date: 2021-04-08 11:07:15
 * @LastEditTime: 2021-04-08 14:15:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \note\基础算法\快排优化.js
 */

//我们可以用元素交换来取代开新数组，在每一次分区的时候直接在原数组上交换元素，将小于基准数的元素挪到数组开头
function quickSort(arr, left, right) {  
    // 设置递归条件
    if(left < right){
        // 设置交换起始位置
        let postilion = left - 1
        // 设置基准元素（当前区间最后一个元素）
        let pivot = arr[right] 
        //循环当前区间
        for (let i = left; i <= right; i++) {
            // 判断当前元素是否大于基准元素，
            // 将小于基准数的元素挪到数组交换位置
            // 当循环到基准元素时，将基准元素交换到中间
            // 此时交换位置 左侧全是小于基准元素，右侧全大于基准元素
            if(arr[i] <= pivot){

                postilion++ 

                let temp =  arr[i];

                 arr[i] = arr[postilion]

                arr[postilion] = temp
                
            }

        }
       
        // 分别对左右两侧从新排序 
        quickSort(arr,left,postilion-1)

        quickSort(arr,postilion+1, right)
    }
    
    return arr


}

var arr1 = [5,1,4,2,3]
var start = 0;
var end = arr1.length - 1;
console.log(quickSort(arr1, start, end)); 