/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(head.next == null) return head
  deleteDuplicate(head)
  return head
};

function deleteDuplicate(head){
  if(head == null) return
  if(head.val == head.next.val){
    head.next = head.next.next
    if(head.next !== null) deleteDuplicate(head)
  }
  if(head.next !== null) deleteDuplicate(head.next)
}

let node={
  val : 1,
  next :{
    val:1,
    next:{
      val:2,
      next:null
    }
  }
}

console.log(deleteDuplicates(head));