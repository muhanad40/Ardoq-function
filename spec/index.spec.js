const productOfTopThree =  require('../');

describe('productOfTopThree', () => {
	it('should return 0 if given empty array', () => {
		expect(productOfTopThree([])).toEqual(0);
	});

	it('should return the product of the highest three numbers when given only positive numbers', () => {
		expect(productOfTopThree([1, 5, 3, 7, 3, 2])).toEqual(105);
	});

	it('should return the product of the highest three numbers when given positive and negative numbers', () => {
		expect(productOfTopThree([1, 5, 3, 7, 3, -5, -2, 2])).toEqual(105);
	});

	it('should return the product of the highest three numbers when also given NaN', () => {
		expect(productOfTopThree([1, 5, 3, 7, 3, NaN, -5, -2, 2])).toEqual(105);
	});
});
