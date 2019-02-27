function rotLeft(a, d) {
  a = a.shift();
  for (var i = 0; i < d; i++) {
    console.log(a);
    rotLeft(a, d)
  }
}
rotLeft([0, 1, 2, 3, 4, 5], 3);

//test
