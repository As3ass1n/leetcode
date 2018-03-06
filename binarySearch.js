function binarySearch(arr, min, max, target) {
  let mid = Math.floor((min + max) / 2);
  if(min > max) return -1;
  
  if (target < arr[mid]) {
    return binarySearch(arr, min, mid - 1, target);
  } else if (target > arr[mid]) {
    return binarySearch(arr, mid + 1, max, target);
  } else {
    return mid;
  }
  return -1
}

const arr = [1, 3, 5, 7, 9];

const index = binarySearch(arr, 0, 4, 6);
console.log(index)