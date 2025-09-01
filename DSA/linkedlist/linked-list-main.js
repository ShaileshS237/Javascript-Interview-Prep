/* linked list is a linear data structure  where elements are store in nodes, each containing value and refrance to next node.
Provides dyanmic memory allocation. */

/*  syntax : 
    class Node { 
        constructor (value) {
            this.value = value;
            this.next  = null;
        }
    }
*/


// 1. Creating the linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value)

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }


    print() {
        let current = this.head;
        let count = 1;
        let result = "";
        while (current) {
            count++;
            result += current.value + "->"
            current = current.next;
        }
        console.log(result + "null");
        console.log(count)
    }
}



let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print();



