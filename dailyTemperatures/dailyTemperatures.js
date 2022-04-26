var dailyTemperatures = function(temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
      while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
          let index = stack.pop();
          console.log('II', index)
          result[index] = i - index;
      }
      stack.push(i)
      console.log('OUT', stack)
  }

  return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
// Output: [1,1,4,2,1,1,0,0]