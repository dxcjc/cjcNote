var getKthFromEnd = function(head, k) {
  if(!head) return head

  let node = head
  let size = 1
  while (node.next){
    node = node.next
    size++
  }
  let index = size+1 - k
  let i = 1
  while (head.next){
    if(i == index) return head
    head = head.next
    i++
  }
  return head
};

let head={
  val : 1,
  next :{
    val:1,
    next:{
      val:2,
      next:null
    }
  }
}

console.log(getKthFromEnd(head, 3));