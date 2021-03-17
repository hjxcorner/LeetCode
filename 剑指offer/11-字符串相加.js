// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
// 提示：
// num1 和num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
 
    let leng1 = num1.length - 1, leng2 = num2.length - 1
    let str = ''
    let carray = 0
    while(leng1 >= 0 || leng2 >= 0) {
      let n1 = num1[leng1] ? num1[leng1] - '0' : 0
      let n2 = num2[leng2] ? num2[leng2] - '0' : 0
      let tem = n1 + n2 + carray
      carray = Math.floor(tem / 10) 
      str = (tem % 10) + str
      leng1 --
      leng2 --
    }
    
    if(carray === 1) str = carray + str
    console.log(str)
    return str
};

addStrings('111111111111111111111111111111111111', '9999999999999999999999999')