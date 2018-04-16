const lengthOfLongestSubstring = (str) => {
  let cache = '';
  let long = 0;
  for (let i = 0; i < str.length; i++) {
    let index = cache.indexOf(str[i]);
    cache += str[i];
    if (index >= 0) {
      cache = cache.substr(index + 1)

    }

    long = Math.max(long, cache.length)
  }
  return long;
}

const testStr1 = 'pwwdfakfeoikdk'

console.log(lengthOfLongestSubstring(testStr1));