// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
// 示例：
// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。

// 解题思路：定义左右指针，如果左指针为偶数右指针为奇数则交换两数，否则做相应的位移

var exchange = function(nums) {

  let leng = nums.length
  let left = 0; right = leng - 1
  while (left <= right) {
      if(nums[left] % 2 === 0) {
          if (nums[right] % 2 === 1) swap(nums, left, right)
          else right --
      } else {
          left ++
      }
  }
  return nums
};

function swap(arr, i, j) {
  let tem = arr[i]
  arr[i] = arr[j]
  arr[j] = tem 
}

console.log(exchange([1,2,3,4,5,6,7,8,9]))