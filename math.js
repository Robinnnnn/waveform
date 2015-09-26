var array = [10, 13, 7, 11, 12, 9, 6, 5]

function smooth(array, alpha) {
  var w_avg = average(array) * alpha;
  var smoothed = [];
  for (var i = 0; i < array.length; i++) {
    var curr = array[i];
    var prev = i > 0 ? smoothed[i - 1] : curr;
    var next = i < array.length ? curr : array[i - 1];
    var weighted = Number(average([w_avg, prev, curr, next]).toFixed(2))
    smoothed.push(weighted)
  }
  return smoothed;
}

debug(smooth(array, 0.85))



function gaussian(x) {
  var e = Math.exp(-1 * Math.pow(x, 2) / (2 * variance(array)));
  debug(['e', e])
  var d = Math.sqrt(2 * Math.PI) * standardDeviation(array);
  debug(['d', d])
  return (e / d);
}

// 0.9343
// 0.147
// debug(Math.exp(-1 * Math.pow(1, 2) / (2 * variance(array))))

// .147
// .137
// debug(gaussian(0))

// debug(10 * .399 + 13 * .242 + 5 * .242)
// debug(13 * .399 + 10 * .242 + 7 * .242)
// debug(7 * .399 + 13 * .242 + 11 * .242)
// debug(11 * .399 + 7 * .242 + 12 * .242)
// debug(12 * .399 + 11 * .242 + 9 * .242)
// debug(9 * .399 + 12 * .242 + 6 * .242)
// debug(6 * .399 + 9 * .242 + 5 * .242)
// debug(5 * .399 + 6 * .242 + 10 * .242)

// debug(variance(array))

function standardDeviation(values) {
  return Math.sqrt(variance(values));
}

function variance(values) {
  var avg = average(values);

  var squareDiffs = values.map(function(value) {
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var variance = average(squareDiffs);
  return variance;
}

function average(data) {
  var sum = data.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}