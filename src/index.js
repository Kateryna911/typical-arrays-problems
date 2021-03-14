
exports.min = function min (array) {
  return Math.min.apply(null, this);
}

exports.max = function max (array) {
  return Math.max.apply(null, this);
}

exports.avg = function avg (array) {
  var sum = 0;
  for (var i = 0, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
