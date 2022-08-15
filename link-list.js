class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class LinkList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	printAll() {
		if (this.length == 0) {
			console.log("empty");
			return;
		} else {
			let currentNode = this.head;
			while (currentNode !== null) {
				console.log(currentNode.value);
				currentNode = currentNode.next;
			}
		}
	}
	push(value) {
		let newNode = new Node(value);
		if (this.length == 0) {
			this.head = newNode;
		} else {
			let currentNode = this.head;
			while (currentNode.next !== null) {
				currentNode = currentNode.next;
			}
			currentNode.next = newNode;
		}
		this.length++;
	}
	pop() {
		if (!this.head) {
			return null;
		} else if (this.length == 1) {
			let temp = this.head;
			this.head = null;
			this.length = 0;
			return temp;
		} else {
			let currentNode = this.head;
			while (currentNode.next.next !== null) {
				currentNode = currentNode.next;
			}
			currentNode.next = null;
		}
	}
	unshift(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.length = 1;
		} else {
			let temp = this.head;
			this.head = newNode;
			this.head.next = temp;
			this.length++;
		}
	}
	insertat(index, value) {
		if (index > this.length || index < 0) {
			return null;
		}

		if (this.length == 0) {
		}
	}
}

let a = new LinkList();
a.push("cat");
a.push("dog");
a.printAll();
console.log("-------------");
a.pop();
a.printAll();
// console.log(a);
