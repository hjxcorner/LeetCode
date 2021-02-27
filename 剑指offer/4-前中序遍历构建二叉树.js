// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如，给出
// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：
//     3
//    / \
//   9  20
//     /  \
//    15   7

// 解题思路：利用前序遍历确定树的根结点，再根据根结点和中序遍历找到左右子树的前/中序遍历，递归创建左右子树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {

};

function foo(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  let root = preorder[0]
  let Tree = new TreeNode(root)
  if (preorder.length === 1 || inorder.length === 1) return Tree;
  let rootIndex = inorder.indexOf(root)
  let preLeftArr = [], preRightArr = [], inLeftArr = [], inRightArr = []
  inLeftArr = inorder.slice(0, rootIndex);
  inRightArr = inorder.slice(rootIndex + 1);
  preLeftArr = preorder.slice(1, inLeftArr.length + 1);
  preRightArr = preorder.slice(inLeftArr.length + 1);
  Tree.left =  foo(preLeftArr, inLeftArr);
  Tree.right = foo(preRightArr, inRightArr);
  return Tree;
}

console.log(foo([3,9,20,15,7], [9,3,15,20,7]))
