// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。


// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104
// 2,6   0,0
var merge = function (intervals) {
  let start = 0, end = 0
  let temp = []
  let length = intervals.length
  for (let i = 0; i < length; i++) {
    let a =[]
    for (let j = 0; j < length; j++) {
      if (j < length - 1 && j >= 0 && i!==j) {
        if ((intervals[i][1] >= intervals[j][0] && intervals[i][1] <= intervals[j][1]) ||
          (intervals[i][0] >= intervals[j][0] && intervals[i][0] <= intervals[j][1]) ||
          (intervals[i][0] < intervals[j][0] && intervals[i][1] > intervals[j][1])) {
          intervals[i][0] < intervals[j][0] ? start = intervals[i][0] : start = intervals[j][0]
          intervals[i][1] > intervals[j][1] ? end = intervals[i][1] : end = intervals[j][1]
          a = [start,end]
        }
      }
    }
    temp.push(a)
  }
  return temp
};
console.log(merge([[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]]));