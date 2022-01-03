const isMultiple = (n, mod) => {
  let result = false;
  if (n % mod === 0) {
    result = true;
  }
  return result;
}

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (isMultiple(i, 3) && isMultiple(i, 5)) {
      console.log('FizzBuzz');
    } else if (isMultiple(i, 3)) {
      console.log('Fizz');
    } else if (isMultiple(i, 5)) {
      console.log('Buzz');
    } else {
    console.log(i);
    }
  }
}

fizzBuzz(100);
