var jump = function(nums) {

  let nextPos = 0;
  let finalPos = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
      nextPos = Math.max(nextPos, i + nums[i]);
      console.log('Here', nextPos)
      console.log('==', i + nums[i])

      if (i === finalPos) {
          jumps++;
          finalPos = nextPos;
      }
  }
  return jumps;
};