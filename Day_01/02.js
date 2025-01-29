class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  let a = new ListNode(1);
  let b = new ListNode(2);
  let c= new ListNode(3);
  let  d= new ListNode(4);
    a.next=b;
    b.next=c;
    c.next=d
  head=a
  
  function deleteNode(head, value) {
    if (!head) return null;
  
    if (head.data === value) return head.next; 
  
    let current = head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }
  
    if (current.next) {
      current.next = current.next.next; 
    }
  
    return head;
  }
  
  
  
  console.log(deleteNode(head, 3));