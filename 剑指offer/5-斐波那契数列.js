// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。


var fib = function(n) {
  let a = 0, b = 1, c
  if (n < 2) return n
  for (let i = 2; i <= n; i ++) {
      c = a + b
      a = b
      b = c
  }
  return c % 1000000007
};

// var fib = function(n) {
//   if (n < 2) return n
//   return (fib(n - 1) + fib(n - 2)) % 1000000007
// };

console.log(fib(79));


// js的精度有误差  
// 9999999999999999 == 10000000000000001 // true