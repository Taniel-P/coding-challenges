var searchInsert = function(nums, target) {

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
          return i;
      } else {
          if (nums[i] > target) {
              return i;
          }
          if (nums[nums.length - 1] < target) {
              return nums.length
          }
      }
  }

};

console.log(searchInsert([1,3,5,6], 5));