/*
 * @Author: your name
 * @Date: 2021-02-25 15:41:25
 * @LastEditTime: 2021-03-16 16:06:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \note\mst\判断数据类型.js
 */
// 实现一个函数判断数据类型
function typeIs(obj) {
  console.log(Object.prototype.toString.call(obj));
}
typeIs('a')