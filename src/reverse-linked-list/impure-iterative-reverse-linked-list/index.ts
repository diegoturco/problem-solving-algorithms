import ListNode from "../utils/list-node";

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    const next = head.next;

    head.next = prev;

    prev = head;

    head = next;
  }

  return prev;
}

export default reverseLinkedList;
