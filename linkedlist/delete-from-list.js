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
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            return
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }


    printList() {
        let result = "";
        let current = this.head;

        while (current) {
            result += current.value + "->";
            current = current.next
        }

        console.log(result + "null")
    }


    deleteLast() {
        let current = this.head;

        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    // deleteSpecific(value){
    //     if(!this.head) {
    //         console.log("list is empty")
    //         return;
    //     }

    //     if(this.head.value === value) {
    //         this.head = this.head.next;
    //         return;
    //     }



    // }

}


let list = new LinkedList();

list.append(10)
list.append(20)
list.append(30)
list.deleteLast()
list.printList()