// 1. 原型链继承
// function Parent(){
//   this.name = ['cjc']
// }
// Parent.prototype.getName =function () {
//   console.log(this.name)
// }
// function Child(){}
// Child.prototype =new Parent()
// Child.prototype.constructor = Child
// // 然后Child实例就能访问到父类及其原型上的name属性和getName()方法
// // const child = new Child()
// // console.log(child.name);
// // child.getName()
//
// // 测试
// const child1 = new Child()
// const child2 = new Child()
// child1.name[0] = 'foo'
// console.log(child1.name)          // ['foo']
// console.log(child2.name)
// 2. 构造函数继承
// function Parent(){
//   this.name = ['cjc']
// }
// Parent.prototype.getName =function () {
//   console.log(this.name)
// }
// function Child(){
//   Parent.call(this)
// }
// // // 测试
// const child1 = new Child()
// const child2 = new Child()
// child1.name[0] = 'foo'
// console.log(child1.name)          // ['foo']
// console.log(child2.name)
// 3.组合继承
// function Parent(){
//   this.name = ['cjc']
// }
// Parent.prototype.getName =function () {
//   console.log(this.name)
// }
// function Child(){
//   Parent.call(this)
// }
// Child.prototype =new Parent()
// Child.prototype.constructor = Child
// // // 测试
// const child1 = new Child()
// const child2 = new Child()
// child1.name[0] = 'foo'
// console.log(child1.name)          // ['foo']
// console.log(child2.name)
// 3. 寄生式组合继承
function Parent(name) {
  this.name = [name]
}
Parent.prototype.getName = function() {
  return this.name
}
function Child() {
  // 构造函数继承
  Parent.call(this, 'zhangsan')
}
//原型链继承
// Child.prototype = new Parent()
Child.prototype = Parent.prototype  //将`指向父类实例`改为`指向父类原型`
Child.prototype.constructor = Child

//测试
const child1 = new Child()
const child2 = new Child()
child1.name[0] = 'foo'
console.log(child1.name)          // ['foo']
console.log(child2.name)          // ['zhangsan']
child2.getName()



