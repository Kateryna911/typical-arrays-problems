
exports.min = function min (array) {
  return Math.min.apply(null, this);
}

exports.max = function max (array) {
  return Math.max.apply(null, this);
}

exports.avg = function avg (array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index){
        total += item;
        count++;
    });

    return total / count;
}
