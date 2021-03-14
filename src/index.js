
exports.min = function min (array) {
  return Math.min.apply(null, this);
}

exports.max = function max (array) {
  return Math.max.apply(null, this);
}

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0) {
        return 0;
    }
    return (
        array.reduce(function(a, b) {
            return a + b;
        }, 0) / array.length
    );
}
