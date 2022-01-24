// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

var detectCapitalUse = function(word) {
  let result = false;

  if (word === word.toUpperCase()) {
      result = true;
      return result;
  }

  if (word === word.toLowerCase()) {
      result = true;
      return result;
  }

  let words = word.slice(1)
  if (word[0] === word[0].toUpperCase() && words === words.toLowerCase()) {
      result = true;
      return result;
  }
  return result;
};