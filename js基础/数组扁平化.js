let arr = [1, [1,2], [1,2,3]]
// 1 es6 =》 flat
console.log(arr.flat());  // [1, 1, 2, 1, 2, 3]
// 2 递归(for,reduce)
// function flat(arr){
//   let result = result || []
//   for (let item of arr){
//     item instanceof Array ? result.concat(item):result.push(item)
//   }
//   return result
// }
// const arr = [1, [1,2], [1,2,3]]
// function flat(arr) {
//   return arr.reduce((prev, cur) => {
//     return prev.concat(cur instanceof Array ? flat(cur) : cur)
//   }, [])
// }
//
// flat(arr)  // [1, 1, 2, 1, 2, 3]
//
// console.log(arr.flat());  // [1, 1, 2, 1, 2, 3]
// 3 正则
// function flat(arr){
//    arr = JSON.stringify(arr);
//   const str = `[${JSON.stringify(arr).replace(/(\[|\])/g, '')}]`
//   JSON.parse(str)
// }
//
// console.log(arr.flat());  // [1, 1, 2, 1, 2, 3]
// 4 迭代+[...]
// let arr = [1, [1,2], [1,2,3,[4,4,4]]]
// while (arr.some(Array.isArray)){
//   arr = [].concat(...arr);
// }
// console.log(arr)  // [1, 1, 2, 1, 2, 3]
