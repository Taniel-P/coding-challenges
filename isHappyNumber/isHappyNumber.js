
const isHappyNumber = (num) => {

  const checker = (num) => {
    num = num.toString().split('');
    let result = 0;

    for (let i = 0; i < num.length; i++) {
      result += num[i] * num[i];
    }

    if (result === 1) {
      return true;
    } else {
      try {
        return isHappyNumber(result);
      }
      catch (error) {
        return false;
      }
    }
  }

  if (checker(num)) {
    return 1;
  } else {
    return 0;
  }
}

console.log(isHappyNumber(7));