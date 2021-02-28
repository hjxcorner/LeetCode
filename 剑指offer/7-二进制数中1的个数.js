// 请实现一个函数，输入一个整数（以二进制串形式），输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
// 示例 1：

// 输入：00000000000000000000000000001011
// 输出：3
// 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
// 示例 2：

// 输入：00000000000000000000000010000000
// 输出：1
// 解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
// 示例 3：

// 输入：11111111111111111111111111111101
// 输出：31
// 解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。

// 方法一：将n转换成字符串

var hammingWeight = function(n) {
  let str = n.toString(2);
  console.log(n ,str)

  let count = 0
  for(let i = 0; i < str.length; i ++) {
      if(str[i] === '1') count ++
  }
  return count
};

// 方法二：位运算 &：与运算 两个数值的对应位都为1时返回1  >>>：无符号右移 
var hammingWeight = function(n) {
  let res = 0;
  while(n != 0){
      res = res + (n & 1);
      // 无符号右移1位
      n = n >>> 1;
  }
  return res;
};


console.log(hammingWeight(000000011001));