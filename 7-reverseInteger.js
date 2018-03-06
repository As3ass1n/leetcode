

// var reverse = function (x) {
//   const MAX_SAFE_INTEGER = 2 ** 31 - 1;
//   const MIN_SAFE_INTEGER = - (2 ** 31) + 1;

//   if (isNaN(x)) return 'x is Not a Number';
//   let arr = x.toString().split('');
//   let reverseNum;
//   if (x < 0) {
//     arr.shift();
//     reverseNum = -arr.reverse().join('')
//   } else {
//     reverseNum = arr.reverse().join('')
//   }
//   console.log(reverseNum,MIN_SAFE_INTEGER,MAX_SAFE_INTEGER)
//   if (reverseNum < MIN_SAFE_INTEGER || reverseNum > MAX_SAFE_INTEGER) return 0;

//   return Number(reverseNum);
// };

var reverse = function (x) {
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};
console.log(reverse(-123))