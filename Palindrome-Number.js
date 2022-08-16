/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
	let arr = x.toString().split("");
	let pointRight = arr.length - 1;
	let pointLeft = 0;
	for (let i = 0; i < arr.length / 2; i++) {
		console.log(`left is ${arr[i]} , Right is ${arr[pointRight]} `);
		if (arr[i] !== arr[pointRight]) {
			return false;
		}
		pointRight--;
	}
	return true;
};
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(1000021));
