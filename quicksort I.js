function quicksort(arr, left, right) {
  if (left > right) return;

  const storeIndex = partition(arr, left, right);
  quicksort(arr, left, storeIndex - 1);
  quicksort(arr, storeIndex + 1, right);
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[left];
  let idx = left;
  for (let i = right; i > left; i--) {
    if (pivot > arr[i]) {
      swap(arr, i, idx)
      idx++;
    }
  }
  swap(arr, right, idx);
  return idx;
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}


const arr = [2, 4, 5, 9, 9, 9, 6, 1];

console.log(quicksort(arr, 0, arr.length - 1))
