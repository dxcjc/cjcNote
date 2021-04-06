### 1.什么是树状结构？

- 树是一种一对多的数据结构,存储的是具有“一对多”关系的数据元素的集合。
- 树的结点
    - 父节点：具有孩子节点的节点
    - 子节点：具有父节点的节点
    - 兄弟节点：具有相同父节点的节点
- 子树,空树
    - 子树由树中的n个节点组成的树，树中的每个节点都是该树的子树
    - 空树:空集合构成的树，不包含任何节点
- 结点的度和层次
    - 度:对于一个结点，拥有的子树数（结点有多少分支）称为结点的度（Degree）
    - 结点的层次：从一棵树的树根开始，树根所在层为第一层，根的孩子结点所在的层为第二层，依次类推。
- 森林:由 m（m >= 0）个互不相交的树组成的集合被称为森林
- 二叉树
    - 性值
        1. 二叉树中，第 i 层最多有 2i-1 个结点。
        2. 如果二叉树的深度为 K，那么此二叉树最多有 2K-1 个结点。
        3. 二叉树中，终端结点数（叶子结点数）为 n0，度为 2 的结点数为 n2，则 n0=n2+1。
        4. 性质 3 的计算方法为：对于一个二叉树来说，除了度为 0 的叶子结点和度为 2 的结点，剩下的就是度为 1 的结点（设为 n1），那么总结点 n=n0+n1+n2。
           同时，对于每一个结点来说都是由其父结点分支表示的，假设树中分枝数为 B，那么总结点数 n=B+1。而分枝数是可以通过 n1 和 n2 表示的，即 B=n1+2*n2。所以，n 用另外一种方式表示为 n=n1+2*
           n2+1。 两种方式得到的 n 值组成一个方程组，就可以得出 n0=n2+1。 满二叉树 如果二叉树中除了叶子结点，每个结点的度都为 2，则此二叉树称为满二叉树。

- 满二叉树：如果二叉树中除了叶子结点，每个结点的度都为 2，则此二叉树称为满二叉树。
    - 满二叉树除了满足普通二叉树的性质，还具有以下性质：
        - 满二叉树中第 i 层的节点数为 2n-1 个。
        - 深度为 k 的满二叉树必有 2k-1 个节点 ，叶子数为 2k-1。
        - 满二叉树中不存在度为 1 的节点，每一个分支点中都两棵深度相同的子树，且叶子节点都在最底层。
        - 具有 n 个节点的满二叉树的深度为 log2(n+1)。
- 完全二叉树:如果二叉树中除去最后一层节点为满二叉树，且最后一层的结点依次从左到右分布，则此二叉树被称为完全二叉树。
    - 对于任意一个完全二叉树来说，如果将含有的结点按照层次从左到右依次标号，对于任意一个结点 i ，完全二叉树还有以下几个结论成立：
        - 当 i>1 时，父亲结点为结点 [i/2] 。（i=1 时，表示的是根结点，无父亲结点）
        - 如果 2 * i>n（总结点的个数） ，则结点 i 肯定没有左孩子（为叶子结点）；否则其左孩子是结点 2*i 。
        - 如果 2 * i+1>n ，则结点 i 肯定没有右孩子；否则右孩子是结点 2*i+1 。

### 2.解释并实现树的先序/中序/后序/层级遍历？

1. 前序遍历：根结点 ---> 左子树 ---> 右子树
2. 中序遍历：左子树---> 根结点 ---> 右子树
3. 后序遍历：左子树 ---> 右子树 ---> 根结点
4. 层次遍历：只需按层次遍历即可

```js
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
//  前序遍历：根结点 ---> 左子树 ---> 右子树
function preOrder(root,res) {
  if (root !== null) {
    // 中
    res.push(root.key);
    // 左
    preOrder(root.left, res);
    // 右
    preOrder(root.right, res);
  }
}

//  中序遍历：左子树---> 根结点 ---> 右子树
function pushRoot(root,res) {
  if (root !== null) {
    // 左
    pushRoot(root.left, result);
    // 中
    result.push(root.key);
    // 右
    pushRoot(root.right, result);
    
  }
}
// 后序遍历：左子树 ---> 右子树 ---> 根结点
function afterOrder(root, res) {
  if (root !== null) {
    // 左
    afterOrder(root.left, res);
    // 右
    afterOrder(root.right, res);
    // 中
    res.push(root.key);
  }
}

// 层次遍历

var levelOrder = function(root) {
  const ret = [];
  if (!root) {
    return ret;
  }

  const q = [];
  q.push(root);
  while (q.length !== 0) {
    const currentLevelSize = q.length;
    ret.push([]);
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift();
      ret[ret.length - 1].push(node.key);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return ret;
};
```

### 3.树状结构的应用？
应用：
- 哈夫曼编码 ：利用哈夫曼树构造的用于通信的二进制编码，称为哈夫曼编码。
- 查找
- 排序
### 4.AST抽象语法树？
AST 抽象语法树简介
AST（Abstract Syntax Tree）是源代码的抽象语法结构树状表现形式，Webpack、ESLint、JSX、TypeScript 的编译和模块化规则之间的转化都是通过 AST 来实现对代码的检查、分析以及编译等操作。

JavaScript 语法的 AST 语法树
JavaScript 中想要使用 AST 进行开发，要知道抽象成语法树之后的结构是什么，里面的字段名称都代表什么含义以及遍历的规则，可以通过 http://esprima.org/demo/parse... 来实现 JavaScript 语法的在线转换。

通过在线编译工具，可以将 function fn(a, b) {} 编译为下面的结构。
```js
{
"type": "Program",
"body": [
{
"type": "FunctionDeclaration",
"id": {
"type": "Identifier",
"name": "fn"
},
"params": [
{
"type": "Identifier",
"name": "a"
},
{
"type": "Identifier",
"name": "b"
}
],
"body": {
"type": "BlockStatement",
"body": []
},
"generator": false,
"expression": false,
"async": false
}
],
"sourceType": "script"
}

```

将 JavaScript 语法编译成抽象语法树后，需要对它进行遍历、修该并重新编译，遍历树结构的过程为 “先序深度优先”。
