class singleton{
  constructor(name,password) {
    this.name      = name
    this.password  = password
  }
  static getInstance(name,password){
    if(!this.instance)this.instance = new singleton(name,password)
    return this.instance
  }
}

let obj1 = singleton.getInstance('CXK','123')
let obj2 = singleton.getInstance('CXK','321')

console.log(obj1===obj2)    // true
console.log(obj1)           // {name:CXK,password:123}
console.log(obj2)