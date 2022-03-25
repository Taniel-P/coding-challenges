// You are given a 0-indexed integer array nums representing the contents of a pile, where nums[0] is the topmost element of the pile.

// In one move, you can perform either of the following:

// If the pile is not empty, remove the topmost element of the pile.
// If there are one or more removed elements, add any one of them back onto the pile. This element becomes the new topmost element.
// You are also given an integer k, which denotes the total number of moves to be made.

// Return the maximum value of the topmost element of the pile possible after exactly k moves. In case it is not possible to obtain a non-empty pile after k moves, return -1.

var maximumTop = function(nums, k) {

  if (k === 0) {
      return nums[0];
  }

  if (nums.length === 1) {
      if (k % 2 === 1) {
          return -1;
      } else {
          return nums[0];
      }
  }

  if (k > nums.length) {
      let container = nums.slice(0, k - 1);
      container.sort((a, b) => {
          return b - a;
      });
      return container[0];
  }

  if (nums.length === k) {
          let container = nums.slice(0, k - 1);
          container.sort((a, b) => {
              return b - a;
          });
          return container[0];
  }

  let container = nums.slice(0, k - 1);
  container.sort((a, b) => {
      return b - a;
  });

  let rest = nums.slice(k, nums.length)
  if (container[0] > rest[0]) {
      return container[0];
  } else {
      return rest[0];
  }

};