var isValid = function(s) {
  let stack = [];

  let lib = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
      if (lib[s[i]]) {
          stack.push(s[i])

      } else {
          console.log(s[i])
          if (lib[stack.pop()] !== s[i]) {
              return false;
          }
      }
  }

  if (stack.length > 0) {
      return false;
  } else {
      return true;
  }

};