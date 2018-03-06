/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let tmp = target - nums[i]
    if (obj[tmp] !== undefined) {
      return [obj[tmp], i];
    }
    obj[nums[i]] = i
  }
};

const testArr = [2, 7, 11, 15];
const target = 13;
console.log(twoSum(testArr, target))
