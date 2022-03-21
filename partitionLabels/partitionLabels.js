var partitionLabels = function(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
          let current = map.get(s[i]);
          current[1] = i;
      } else {
          map.set(s[i], [i, i]);
      }
  }

  let entry = [...map.values()];
  let data = calculateIntervals(entry);

  return data;

};

function calculateIntervals(arr) {
  let data = [];
  let current = arr[0];
  for (let i = 1; i < arr.length; i++) {
      let curr = arr[i];
      if (curr[0] < current[1]) {
          let zeroIndex = Math.min(curr[0], current[0]);
          let firstIndex = Math.max(curr[1], current[1]);
          current = [zeroIndex, firstIndex];
      } else {
          data.push(current);
          current = arr[i];
      }
  }

  data.push(current);
  let result = [];

  for (let j = 0; j < data.length; j++) {
      let curr = data[j];
      result.push(curr[1] - curr[0] + 1);
  }

  return result;
}