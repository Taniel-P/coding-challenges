// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

var partition = function(s) {
  const res = [];
  const path = [];

  const helper = (s, i, j) =>{
      if(i === s.length){
          res.push([...path]);
          return;
      }

      for(let index = j; index <= s.length; ++index){
          if(isPalindrome(s, i, index)){
              path.push(s.slice(i, index));
              helper(s, index, index+1);
              path.pop();
          }
      }
  }

  const isPalindrome = (s, i, j) =>{
      while(i < j - 1){
          if(s[i] !== s[j-1]){
              return false;
          }
          ++i;
          --j;
      }
      return true;
  };

  helper(s, 0, 1);
  return res;

};