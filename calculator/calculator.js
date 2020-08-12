const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

function sum (arr) {
	let sum = 0;
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		sum += arr[i];
	};
	return sum;
};

function multiply (arr) {
	let product = 1;
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		product *= arr[i];
	};
	return product;
};

const power = (a, b) => Math.pow(a,b);

function factorial(a) {
	let result = 1;
	for (let i = a; i > 0; i--) {
		result *= i;
	};
	return result;
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}