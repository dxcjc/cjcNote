// 编写一个高效的算法来判断m x n矩阵中，是否存在一个目标值。该矩阵具有如下特性：
//
// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。

var searchMatrix = function(matrix, target) {
  let n = matrix.length //列长度
  if(n == 0) return false
  let m = matrix[0].length //行长度

  for (let i = 0; i < n; i++) {
    if(target <= matrix[i][m-1]){//每一列最大值
      for (let j = 0; j < m; j++) {
        if (target == matrix[i][j]) return true
      }
      return false
    }
  }
  return false

};

console.log(searchMatrix([[1]], 2));
