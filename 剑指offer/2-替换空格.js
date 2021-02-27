// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 示例 1：
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

// 解题思路：遍历字符串，将遍历项拼接到另外一个字符串，如果遍历项为 ' '，则拼接 '%20'

/**
 * @param {string} s
 * @return {string}
 */

let s = 'hello world'

var replaceSpace = function (s) {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      str += '%20'
      continue
    }
    str += s[i];
  }
  return str;
};

console.log(replaceSpace(s));