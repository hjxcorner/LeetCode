// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// 示例:
// 现有矩阵 matrix 如下：
// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。
// 给定 target = 20，返回 false。


/**
 * 解题思路：左下角或右上角开始寻找, 如果元素相等则退出, 不等则进行列或行下表的指针位移.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }
  let maxRow = matrix.length - 1;
  let maxCol = matrix[0].length - 1;
  let [row, col] = [maxRow, 0];
  while (row >= 0 && col <= maxCol) {
    if (target < matrix[row][col]) {
      row--;
    } else if (target > matrix[row][col]) {
      col++;
    } else return true;
  }
  return false;
};