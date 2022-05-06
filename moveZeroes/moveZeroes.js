var moveZeroes = function(nums) {
  let count = 0;
  const len = nums.length - 1;

  for (let i = 0; i < len; i++) {
      if (nums[i] === 0) {
         nums.splice(i, 1);
         nums.push(0);
          i--;
          count++;
          if (count > len) {
              break;
          }
      }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 2, 3, 0, 4]));