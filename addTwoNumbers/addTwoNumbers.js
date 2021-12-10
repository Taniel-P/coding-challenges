// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// param {ListNode} l1
// param {ListNode} l2
// return {ListNode}

var addTwoNumbers = function (l1, l2) {
  let arr = [];
  let arr2 = [];
  let head = l1;
  let head2 = l2;
  while (head !== null) {
    arr.push(head.val);
    head = head.next
  }
  while (head2 !== null) {
    arr2.push(head2.val);
    head2 = head2.next
  }
  let num1 = arr.reverse().join('');
  let num2 = arr2.reverse().join('');
  let sum = Number(num1) + Number(num2);
  console.log(sum)
  let str = sum.toString().split('').reverse();
  let list = new ListNode(str[0]);
  let selectedNode = list;
  for (let i = 1; i < str.length; i++) {
    selectedNode.next = new ListNode(str[i]);
    selectedNode = selectedNode.next;
  }
  return list
};
