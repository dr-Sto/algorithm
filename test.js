// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {}
// console.log(twoSum([11, 15, 2, 7], 9))

// 示例 1:
// 输入: "()"
// 输出: true
// 示例 2:
// 输入: "()[]{}"
// 输出: true
// 示例 3:
// 输入: "(]"
// 输出: false
// 示例 4:
// 输入: "([)]"
// 输出: false
// 示例 5:
// 输入: "{[]}"
// 输出: true
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {}
// console.log(isValid('[({})]'))

// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }

    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)   
      return l1
    } else {
      l2.next = mergeTwoLists(l1, l2.next)   
      return l2
    }
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let result  = mergeTwoLists(l1, l2)
let arr = [];
let cur = result;
while (cur) {
  arr.push(cur.val);
  cur = cur.next;
}
console.log(arr); // [1,1,2,3,4,4]