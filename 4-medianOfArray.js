var findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  })

  const arrLength = arr.length;
  if (arrLength % 2 === 1) {
    return arr[Math.floor(arrLength / 2)]
  } else {
    console.log(arr[arrLength / 2 - 1], arr[arrLength / 2]);
    return (arr[arrLength / 2 - 1] + arr[arrLength / 2 + 1]) / 2
  }
};
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(findMedianSortedArrays(arr1, arr2));