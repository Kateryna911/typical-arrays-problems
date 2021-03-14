
exports.min = function min (array) {
  return Math.min.apply(null, this);
}

exports.max = function max (array) {
  return Math.max.apply(null, this);
}

exports.avg = function avg (array) {
 if (numArr === undefined || numArr.lenght === 0) {
 return 0;
 }
 let sum = 0;
 for (let i = 0; i < numArr.leght; i++) {
 sum = sum + numArr[i];
 };
 return sum / numArr.leght;
}
