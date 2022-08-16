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
			this.length--;
			return temp;
		} else {
			let currentNode = this.head;
			while (currentNode.next.next !== null) {
				currentNode = currentNode.next;
			}
			currentNode.next = null;
			this.length--;
			return;
		}
	}
	shift() {
		if (!this.head) {
			return null;
		} else if (this.length == 1) {
			let temp = this.head;
			this.head = null;
			this.length = 0;
			return temp;
		} else {
			let temp = this.head;
			this.head = temp.next;
			this.head--;
			return temp;
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
		} else if (this.length == 0) {
			this.unshift(value);
			return;
		} else if (this.length == index) {
			this.push(value);
		}
		let currentNode = this.head;
		let newNode = new Node(value);
		for (let i = 1; i <= index - 1; i++) {
			currentNode = currentNode.next;
		}
		newNode.next = currentNode.next;
		currentNode.next = newNode.next;
		this.length++;
		return;
	}
	removeAt(index) {
		if (index > this.length || index < 0) {
			return null;
		} else if (index == 0) {
			let result = this.shift();
			this.length--;
			return result;
		} else if (this.length == index) {
			let result = this.pop();
			this.length;
			return result;
		}
		let currentNode = this.head;
		for (let i = 1; i <= index - 2; i++) {
			currentNode = currentNode.next;
		}
		let temp = currentNode.next;
		currentNode.next = currentNode.next.next;
		this.length--;
		return temp;
	}
}

let a = new LinkList();
a.push("cat");
a.push("dog");
a.push("bird");
a.push("tiger");
a.printAll();
console.log("-------------");
a.pop();
a.printAll();
console.log("-------------");
a.removeAt(1);
a.printAll();
console.log(a);

let b = new LinkList();
b.printAll();
b.push("cat");
b.printAll();
