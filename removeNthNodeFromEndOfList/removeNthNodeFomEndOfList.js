/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 */
 var removeNthFromEnd = function(head, n) {
  let arr = [];
  let node = head;

  while (node !== null) {
      arr.push(node.val)
      node = node.next
  }
  arr.splice(arr.length - n, 1);

  let result;
  let temp;
  for (let i = arr.length - 1; i >= 0; i--) {
      if (!result) {
          result = new ListNode(arr[i])
      } else {
          temp = new ListNode(arr[i])
          temp.next = result;
          result = temp
      }
  }
  return result;
};