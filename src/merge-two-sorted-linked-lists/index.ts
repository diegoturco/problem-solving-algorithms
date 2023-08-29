class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  let list = new ListNode(0);

  const ans = list;

  while (l1 && l2) {
    if (l1.val < l2.val) {      
      list.next = l1;
      l1 = l1.next;
    } else {
      list.next = l2;
      l2 = l2.next;
    }

    list = list.next;
  }

  if (l1) {
    list.next = l1;
  }
  
  if (l2) {
    list.next = l2;
  }

  return ans.next;
}

export default mergeTwoLists;
