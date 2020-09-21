const productOfTopThree =  require('../');

describe('productOfTopThree', () => {
	describe('Invalid cases', () => {
		it('should return 0 if given empty array', () => {
			expect(productOfTopThree([])).toEqual(0);
		});

		it('should return 0 if given array of falsy items', () => {
			expect(productOfTopThree([null, false, undefined, NaN])).toEqual(0);
		});

		it('should return 0 when given an array of less than three numbers', () => {
			expect(productOfTopThree([1, 5])).toEqual(0);
		});
	});

	describe('Valid cases', () => {
		it('should return the product of the highest three numbers when given only positive numbers', () => {
			expect(productOfTopThree([1, 5, 3, 7, 3, 2])).toEqual(105);
		});

		it('should return the product of the highest three numbers when given one negative number and multiple positive numbers', () => {
			expect(productOfTopThree([1, 5, 3, 7, 3, -5, 2])).toEqual(105);
		});

		it('should return the product of the highest three numbers when given at least two negative numbers and multiple positive numbers', () => {
			expect(productOfTopThree([1, 5, 3, 7, 3, -5, -7, 2])).toEqual(245);
		});

		it('should return the product of the highest three numbers when also given falsy values', () => {
			expect(productOfTopThree([1, 5, 3, 7, 3, -5, -7, 2, NaN, null])).toEqual(245);
		});
	});
});
