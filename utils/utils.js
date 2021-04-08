/*
 * @Author: dxCjc
 * @Date: 2021-04-06 15:15:25
 * @LastEditTime: 2021-04-08 10:33:55
 * @LastEditors: Please set LastEditors
 * @Description: my utils
 * @FilePath: \note\utils\utils.js
 */

/**
 * multiArray二维数组转换:将数组（array）拆分成多个子数组，并将这些子数组组成一个新数组。
 * @param array 需要处理的数组
 * @param count 子数组需要的长度
 */
function multiArray(array, count) {
    let pages = []
    array.forEach((item,index) => {
        let page = Math.floor(index/count);
        (!pages[page]) && (pages[page] = []) //判断pages[page]是否存在
        pages[page].push(item)
    });
    return pages
}

/**
 * flatten扁平化数组:将多层嵌套数组（array）拆分成一个数组
 * @param {*} array 多层嵌套数组
 */
function flatten(array){
   return array.reduce((prv,next)=>prv.concat(Array.isArray(next) ? flatten(next):next),[])
//    return [].concat(...array.map(item=> Array.isArray(item) ? flatten(item):item))
}

/**
 * flattenDeep指定层级扁平化数组:将多层嵌套数组（array）拆分成指定层级数组
 * @param {*} array 多层嵌套数组
 * @param {*} depth 减少的嵌套层级数
 */
function flattenDeep(array, depth){
    return array.reduce((prv,next)=>prv.concat(depth > 1 && Array.isArray(next) ? flattenDeep(next,depth-1):next),[])
}

/**
 * isArrayEqual检查两个数组各项相等比较两个数组内的各项值是否相等，返回一个Boolean值 不考虑顺序
 * @param {*} arrOne 要检查的数组
 * @param {*} arrTwo 要检查的数组
 */
function isArrayEqual(arrOne, arrTwo){
    let length = arrOne.length
    if(arrOne.length !== arrTwo.length) return false
    for(let i = 0; i < length; i++){
        if(arrOne[i]!=arrTwo[i]) return false
    }
    return true
}

/**
 * allEqual检查数组各项相等
 * @param {*} array 要检查的数组
 */
function allEqual(array){
   return array.every(item => item === array[0])
}

/**
 * diffArray具有唯一array值的数组P:创建一个具有唯一 array 值的数组，每个值不包含在其他给定的数组中
 * @param {*} arrOne 
 * @param {*} arrTwo 
 */
function diffArray(arrOne, arrTwo){
    const s = new Set(arrTwo)
    return arrOne.filter(item => !s.has(item))
}


/**
 * haveArr具有共同array值的数组:创建一个具有共同 array 值的数组，每个值包含在其他给定的数组中
 * @param {*} arrOne 
 * @param {*} arrTwo 
 */
 function haveArr(arrOne, arrTwo){
    const s = new Set(arrTwo)
    return arrOne.filter(item => s.has(item))
}

/**
 * uniqueArray数组去重:创建一个去重后的 array 数组副本
 * @param {*} array 
 * @returns 
 */
function uniqueArray(array){
    return [...new Set(array)]
}





console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]))