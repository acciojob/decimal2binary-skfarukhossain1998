function decimalToBinary(n) {
  if (n === 0) {
    return "0";
  }

  var binary = "";
  while (n > 0) {
    var remainder = n % 2;
    binary = remainder + binary;
    n = Math.floor(n / 2);
  }

  return binary;
}

module.exports = threeSum;
