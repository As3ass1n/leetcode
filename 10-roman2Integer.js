/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let sum = 0;
  let strLength = s.length;
  const romanArr = s.split('');
  for (let i = 0; i < strLength; i++) {
    let item = romanInt[s[i]];

    let nextItem = i + 1 === strLength ? 0 : romanInt[s[i + 1]];

    if (nextItem > item) {
      sum = sum + nextItem - item;
      i++;
    } else {
      sum = sum + item;
    }

  }
  console.log(sum)
  return sum;


};

romanToInt('MMM')

// 