// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// 示例 1：
// 输入：head = [1,3,2]
// 输出：[2,3,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

const dataStructure = require('../dataStructure')
const LinkedList = dataStructure.LinkedList

const linkedList = new LinkedList();
for (let i = 0; i < 5; i ++) {
  linkedList.add(i);
}

let head = linkedList.head()
var reversePrint = function(head) {
  let arr = []
  while (head.next !== null){
    arr.push(head.element)
    head = head.next
  }
  let leng = arr.length;
  for(let i = 0; i < Math.floor(leng / 2); i ++) {
    swap(arr, i, leng - i - 1);
  }
  return arr
};

function swap(arr, i , j) {
  let tem = arr[i];
  arr[i] = arr[j];
  arr[j] = tem;
}

console.log(reversePrint(head))