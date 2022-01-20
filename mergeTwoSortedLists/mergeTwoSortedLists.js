// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */

var mergeTwoLists = function(list1, list2) {
  let head1 = list1;
  let head2 = list2;
  let arr = [];
  while (head1 !== null && head2 !== null) {
      arr.push(head1.val);
      head1 = head1.next;
      arr.push(head2.val);
      head2 = head2.next;
  }
  let newHead = new ListNode(arr[0]);
  let selectedNode = newHead;
  for (let i = 1; i < arr.length; i++) {
      selectedNode.next = new ListNode(arr[i])
      selectedNode = selectedNode.next;
  }
  return newHead;
};