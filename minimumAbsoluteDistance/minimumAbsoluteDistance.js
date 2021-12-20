// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr


// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

var minimumAbsDifference = function(arr) {
  let result = [];
  let diffs = [];

  let array = arr.sort((a, b) => {
    return a -b;
  });

  for (let i = 0; i < array.length; i++) {
    let diff = 0;
    diff = array[i + 1] - array[i];
    diffs.push(diff);
  }

  let lowestDiff = diffs.sort();
  const lowestDifference = lowestDiff[0];

  for (let j = 0; j < array.length; j++) {
    if (array[j + 1] - array[j] === lowestDifference) {
      result.push([array[j], array[j + 1]]);
    }
  }
  return result;
};

console.log(minimumAbsDifference([1,3,6,10,15]));