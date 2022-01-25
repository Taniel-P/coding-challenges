// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
  if (arr.length < 3) {
      return false;
  }

  if (arr.length >= 3) {
      let result = false;
      let firstFlag = false;
      let secondFlag = false;
      let greatest = 0;
      let greatestPosition = 0;
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] > greatest) {
              greatest = arr[i];
              greatestPosition = i;
          }
      }
      let firstHalf = arr.slice(0, greatestPosition);
      let secondHalf = arr.slice(greatestPosition, arr.length);

      if (firstHalf.length <= 1 && firstHalf[0] < secondHalf[0]) {
          firstFlag = true;
      } else if (firstHalf.length > 1) {
          let curr = firstHalf[0];
          for (let j = 1; j < firstHalf.length; j++) {
              if (curr < firstHalf[j]) {
                  firstFlag = true
                  curr = firstHalf[j];
              } else {
                  firstFlag = false;
                  break;
              }

          }
      }
      if (secondHalf.length > 1) {
          let curr = secondHalf[0];
          for (let k = 1; k < secondHalf.length; k++) {
              if (curr > secondHalf[k]) {
                  secondFlag = true
                  curr = secondHalf[k];
              } else {
                  secondFlag = false;
                  break;
              }

          }
      }
      if (firstFlag && secondFlag) {
          result = true;
      }
      return result;
  }
};