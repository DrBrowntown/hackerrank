function simpleArraySum(ar) {
  let sum = 0;
  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

simpleArraySum([1, 2, 3, 4, 10, 11]);
