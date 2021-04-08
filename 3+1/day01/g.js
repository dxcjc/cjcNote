/*
 * @Author: your name
 * @Date: 2021-03-13 15:16:17
 * @LastEditTime: 2021-04-07 10:48:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \note\3+1\day01\g.js
 */
// 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
//
// 实现 MyHashSet 类：
//
// void add(key) 向哈希集合中插入值 key 。
// bool contains(key) 返回哈希集合中是否存在这个值 key 。
// void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。
//
// 示例：
//
// 输入：
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
//   [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// 输出：
// [null, null, null, true, false, null, true, null, false]
//
// 解释：
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // 返回 True
// myHashSet.contains(3); // 返回 False ，（未找到）
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // 返回 True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // 返回 False ，（已移除）


/**
 * Initialize your data structure here.
 */

let MyHashSet = function() {
  this.set = []
};
/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  let flag = this.contains(key)
  if(!flag) this.set.push(key)
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  let flag = false
  let length = this.set.length
  for (let i = 0; i < length; i++) {
    if(this.set[i] === key){
      flag = true
      break
    }
  }
  return flag
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let length = this.set.length
  for (let i = 0; i < length; i++) {
    if(this.set[i] === key){
      this.set.splice(i,1)
      return
    }
  }
  return false
};





/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */












