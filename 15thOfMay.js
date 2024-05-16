// Question 4 - Reerse LinkList in group of k                                      //

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to append a node to the end of the list
    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to reverse the linked list within a given range
    reverseKGroup(k) {
        const dummy = new ListNode(0);
        dummy.next = this.head;
        let prevGroupTail = dummy;

        let head = this.head;
        while (head) {
            const groupStart = head;
            const groupEnd = this.getGroupEnd(head, k);

            if (!groupEnd) break;

            prevGroupTail.next = this.reverseList(groupStart, groupEnd.next);
            prevGroupTail = groupStart;
            head = prevGroupTail.next;
        }
        this.head = dummy.next;
    }

    // Method to get the end of the group
    getGroupEnd(head, k) {
        while (head && k > 1) {
            head = head.next;
            k--;
        }
        return head;
    }

    // Method to reverse the linked list up to a stopping point
    reverseList(head, stop) {
        let prev = stop;
        while (head !== stop) {
            const next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }

    // Method to print the linked list
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.val);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// Example usage:
const list = new LinkedList();
[1, 2, 3, 4, 5].forEach(val => list.append(val));
console.log('Original list:');
list.print();

list.reverseKGroup(2);
console.log('Reversed list in groups of 2:');
list.print();


// Question 4 -> 