

class Vue {

  constructor(options) {

    this.$data = options.data
    //观察数据变化
    Observer(this.$data)
    //将data中的数据绑定到vm实例
    Object.keys(this.$data).forEach((key) => {

      Object.defineProperty(this, key, {

        configurable: true,

        enumerable: true,

        get() {

          return this.$data[key]

        },

        set(newValue) {

          this.$data[key] = newValue

        },

      })

    })

    //编译模板
    Compile(options.el, this)

  }

}

function Observer(obj) {

  if (!obj || typeof obj !== 'object') return
  //给data中的所有对象添加get ,set
  Object.keys(obj).forEach((key) => {

    let value = obj[key]

    Observer(value)

    Object.defineProperty(obj, key, {

      configurable: true,

      enumerable: true,

      get() {

        return value

      },

      set(newValue) {

        value = newValue

      },

    })

  })

}

//编译
function Compile(el, vm) {
  //获取el对应的dom节点
  vm.$el = document.querySelector(el)
  //创建虚拟dom节点
  const fragment = document.createDocumentFragment()

  let chileNode;
  //将el上的dom元素一次赋值到虚拟dom上
  while ((chileNode = vm.$el.firstChild)) {

    fragment.appendChild(chileNode)

  }

  replace(fragment)

  vm.$el.appendChild(fragment)

  function replace(node) {

    const resMustache = /\{\{\s*(\S+)\s*\}\}/
    //判断是否是文本节点
    if (node.nodeType === 3) {

      const text = node.textContent

      const execResult = resMustache.exec(text)

      if(execResult){

        const value = execResult[1].split('.').reduce((newObj,k)=> newObj[k],vm)

        node.textContent = text.replace(resMustache, value)

      }

      return

    }
    node.childNodes.forEach(child => replace(child))

  }

}

class Dep{

  constructor(){
    this.subs = [] 
  }

  add(Watcher){
    this.subs.push(Watcher)
  }

  notify(){
    this.subs.forEach(watch=>watch.updata())
  }
}


class Watch{

  constructor(vm, key, cb){
    this.vm = vm
    this.key = key 
    this.cb = cb
  }

  updata(){

  }
}