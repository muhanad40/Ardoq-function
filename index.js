function productOfTopThree(numbers = []) {
	if (!numbers.length) return 0;

	return numbers.filter(n => Math.sign(n) === 1)
		.sort((n1, n2) => (n1 > n2) ? -1 : 1)
		.slice(0, 3)
		.reduce((acc, number) => acc * number, 1);
}

module.exports = productOfTopThree;
