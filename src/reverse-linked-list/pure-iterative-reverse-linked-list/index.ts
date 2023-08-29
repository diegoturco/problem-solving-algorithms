import ListNode from "../utils/list-node";

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    prev = new ListNode(head.val, prev);
    head = head.next;
  }

  return prev;
}

export default reverseLinkedList;
