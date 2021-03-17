// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 解题思路：从个位开始，两个数两个数相乘 用pos[index1] 记录相乘的个位数值 pos[index2]记录十位数值
//          然后就是不断相乘不断进位不断累加


function multiplyBigNum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return "";
  let len1 = num1.length,
      len2 = num2.length;
  let pos = [];
  for (let j = len2 - 1; j >= 0; j--) {
      for (let i = len1 - 1; i >= 0; i--) {
          let index1 = i + j,
              index2 = i + j + 1;
          let mul = num1[i] * num2[j] + (pos[index2] || 0);
          pos[index1] = Math.floor(mul / 10) + (pos[index1] || 0);
          pos[index2] = mul % 10;
      }
  }
  let result = pos.join("").replace(/^0+/, "");
  return result || '0';
}

let a =multiplyBigNum('123456789101112', '22324342352');
console.log(a);