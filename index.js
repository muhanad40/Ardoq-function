function sortArr(arr, direction) {
  return arr.sort((n1, n2) => {
    if (direction === 'desc') {
      return (n1 > n2) ? -1 : 1;
    } else if (direction === 'asc') {
      return (n1 > n2) ? 1 : -1;
    }
  });
}

function multiplyItems(arr) {
  return arr.reduce((acc, number) => acc * number, 1);
}

function productOfTopN(arr = [], numberOfMultiples) {
  // Strip invalid/falsy entries
  const numbers = arr.filter(n => typeof n === 'number' && !isNaN(n));

  if (!numbers.length || !numberOfMultiples || numbers.length < numberOfMultiples) return 0;

  const largestThreeNumbers = sortArr(numbers, 'desc').slice(0, numberOfMultiples);
  const lowestTwoNumbers = sortArr(numbers, 'asc').slice(0, numberOfMultiples - 1);

  return Math.max(
    multiplyItems(largestThreeNumbers),
    multiplyItems(lowestTwoNumbers) * largestThreeNumbers[0]
  );
}

module.exports = productOfTopN;
