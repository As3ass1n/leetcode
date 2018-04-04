/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 432 + 321 = 753

// 2 -> 3 ->4
// 1 -> 2 ->3
// 3 -> 5 -> 7

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;
  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = x + y + carry;
    carry = parseInt(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    console.log(curr, curr.next, dummyHead);

    curr.next = new ListNode(carry)
    console.log(curr, curr.next, dummyHead);

  }
  return dummyHead.next;
};


const l1 = new ListNode(235);
const l2 = new ListNode(921)

addTwoNumbers(l1, l2)