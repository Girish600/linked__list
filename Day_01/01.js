// 1 ----->
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  let a = new Node(1);
  let b = new Node(2);
  let c = new Node(3);
  
  a.next = b;
  b.next = c;
  
  let head = a;
  
  let d = new Node(4);
  d.next = head;
  head = d;
  
  let current = head;
  let result = [];
  while (current != null) {
    result.push(current.data);
    current = current.next;
  }
  console.log("Linked List after inserting at the beginning:", result.join(" -> "));


// 2 ----->
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   let a = new Node(1);
//   let b = new Node(2);
//   let c = new Node(3);
  
//   a.next = b;
//   b.next = c;
  
//   let head = a;
  
//   let d = new Node(4);
//   let current = head;
  
//   while (current.next != null) {
//     current = current.next;
//   }
//   current.next = d;
  
//   current = head;
//   let result = [];
//   while (current != null) {
//     result.push(current.data);
//     current = current.next;
//   }
//   console.log("Linked List after inserting at the end:", result.join(" -> "));


// 3 ----->
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   let a = new Node(1);
//   let b = new Node(2);
//   let c = new Node(3);
  
//   a.next = b;
//   b.next = c;
  
//   let head = a;
  
//   let d = new Node(4);
//   let position = 2;

//   let current = head;
//   let index = 0;
//   let prev = null;
  
//   while (current != null && index < position) {
//     prev = current;
//     current = current.next;
//     index++;
//   }
  
//   if (prev != null) {
//     prev.next = d;
//   }
//   d.next = current;

//   current = head;
//   let result = [];
//   while (current != null) {
//     result.push(current.data);
//     current = current.next;
//   }
//   console.log(Linked List after inserting at position ${position}:, result.join(" -> "));