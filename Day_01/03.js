class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }


    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }


    insertAtPosition(data, position) {
        if (position < 1) {
            console.log("Invalid position!");
            return;
        }

        const newNode = new Node(data);

        if (position === 1) { 
            this.insertAtBeginning(data);
            return;
        }

        let temp = this.head;
        for (let i = 1; i < position - 1; i++) {
            if (!temp) {
                console.log("Position out of bounds!");
                return;
            }
            temp = temp.next;
        }

        if (!temp) {
            console.log("Position out of bounds!");
            return;
        }

        newNode.next = temp.next;
        newNode.prev = temp;

        if (temp.next) {
            temp.next.prev = newNode;
        }

        temp.next = newNode;
    }


    insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode;
        newNode.prev = temp;
    }


    printList() {
        let temp = this.head;
        let result = [];
        while (temp !== null) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log("Doubly Linked List:", result.join(" <-> "));
    }
}


const dll = new DoublyLinkedList();
dll.insertAtBeginning(10);
dll.insertAtEnd(20);
dll.insertAtPosition(15, 2);
dll.printList(); 
