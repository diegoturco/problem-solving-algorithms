import reverseLinkedList from ".";
import ListNode from "../utils/list-node";

describe("pure iterative - reverse linked list", () => {
  it("case 1", () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
    const reverseList = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1, null)))));
  
    expect(reverseLinkedList(head)).toStrictEqual(reverseList);
  });
});
