// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
//  示例 1：
// 输入：matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]


// 解题思路：可以模拟打印矩阵的路径。初始位置是矩阵的左上角，初始方向是向右，当路径超出界限或者进入之前访问过的位置时，则顺时针旋转，进入下一个方向。
// 判断路径是否进入之前访问过的位置需要使用一个与输入矩阵大小相同的辅助矩阵 \textit{visited}visited，其中的每个元素表示该位置是否被访问过。当一个元素被访问时，将 \textit{visited}visited 中的对应位置的元素设为已访问。
// 如何判断路径是否结束？由于矩阵中的每个元素都被访问一次，因此路径的长度即为矩阵中的元素数量，当路径的长度达到矩阵中的元素数量时即为完整路径，将该路径返回。



let matrix =
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const row = matrix.length, columns = matrix[0].length
  const count = row * columns
  let visited = new Array(row).fill(0).map(item => new Array(columns).fill(false))
  let directionIndex = 0, nextRowIndex = 0, nextColIndex = 0
  let directionArr = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let arr = []
  for (let i = 0; i < count; i++) {
    arr[i] = matrix[nextRowIndex][nextColIndex]
    console.log(nextRowIndex, nextColIndex)
    visited[nextRowIndex][nextColIndex] = true
    const nextRow = nextRowIndex + directionArr[directionIndex][0], nextCol = nextColIndex + directionArr[directionIndex][1]
    if (!(nextRow >= 0 && nextRow < row && nextCol >= 0 && nextCol < columns && !(visited[nextRow][nextCol]))) {
      directionIndex = (directionIndex + 1) % 4
    }
    nextRowIndex += directionArr[directionIndex][0]
    nextColIndex += directionArr[directionIndex][1]
  }
  return arr
};


// var spiralOrder = function (matrix) {
//   let n = matrix.length
//   if (n <= 0) return;
//   let arr = []
//   for (let i = 0; i < 2 * n - 2; i++) {
//     if (i === 0) {
//       for (let j = 0; j < n; j++) {
//         arr.push(matrix[i][j]);
//       }
//       continue;
//     }
//     if (i === n - 1) {
//       for (let j = n - 1; j >= 0; j--) {
//         arr.push(matrix[i][j]);
//       }
//       continue;
//     }
//     if (i > n) {
//       for (let j = n - 2; j > 0; j--) {
//         arr.push(matrix[j][0])
//       }
//       continue;
//     }
//     if (i < n) {
//       arr.push(matrix[i][n - 1])
//     }
//   }
//   matrix.pop()
//   matrix.shift()
//   for (let i = 0; i < matrix.length; i++) {
//     matrix[i].pop();
//     matrix[i].shift();
//   }
//   spiralOrder(matrix)
//   return arr
// };

spiralOrder(matrix)
