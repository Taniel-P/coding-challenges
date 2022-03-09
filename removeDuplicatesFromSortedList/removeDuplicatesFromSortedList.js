// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

var deleteDuplicates = function(head) {
  if(head == null || head.next == null)
      return head;
  if (head.val == head.next.val && head.next.next == null)
      return null;
  if(head.val != head.next.val){
      head.next = deleteDuplicates(head.next);
      return head;
  }
  if (head.next.next != null && head.next.val != head.next.next.val) {
      return deleteDuplicates(head.next.next);
  }
  return deleteDuplicates(head.next);
};