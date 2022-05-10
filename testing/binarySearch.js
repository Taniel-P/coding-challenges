const binarySearch = (arr, tar) => {
  let start = 0;
  let end = arr.length - 1;


  const search = (arr, tar, start, end) => {
    let mid = Math.floor((start + end) / 2);

    if (start > end) {
      return false;
    }

    if (tar === arr[mid]) {
      return true;
    }

    if (arr[mid] > tar) {
      return search(arr, tar, start, mid - 1);
    } else {
      return search(arr, tar, mid + 1, end);
    }


  }

  if (search(arr, tar, start, end)) {
    return tar;
  } else {
    return 'Target not found'
  }

}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));