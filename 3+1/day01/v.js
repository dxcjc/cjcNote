// 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
//
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。
// 示例:
//   输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6

// var trap = function (height) {
//   let length = height.length
//   let count = 0
//   let maxNum = Math.max(...height);
//   for (let i = 1; i <= maxNum; i++) {
//     let left =0
//     let right =0
//     for (let j = 0; j < length; j++) {
//       if(height[j]>=i) {
//         left = j
//         break
//       }
//     }
//     for (let j = length-1; j > 0 ; j--) {
//       if(height[j]>=i) {
//         right = j
//         break
//       }
//     }
//     for (let j = 0; j < length; j++) {
//       if(j>right) break
//       if(j>left && height[j] < i) count++
//     }
//     console.log(count,left,right);
//   }
//   return count
// };

var trap = function(height) {

  let ans = 0;

  const stack = [];

  const n = height.length;

  for (let i = 0; i < n; ++i) {
    //stack有值
    console.log(stack,height[i],height[stack[stack.length - 1]])

    while (stack.length && height[i] > height[stack[stack.length - 1]]) {

      const top = stack.pop();

      if (!stack.length) {

        break;

      }
      //栈顶元素
      const left = stack[stack.length - 1];

      const currWidth = i - left - 1;

      const currHeight = Math.min(height[left], height[i]) - height[top];

      ans += currWidth * currHeight;

    }

    stack.push(i);

  }

  return ans;

};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

