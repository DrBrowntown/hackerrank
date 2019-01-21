function jumpingOnClouds(c) {
  let jumps = 0;

  for (var i = 0; i < c.length; i++) {
    if (c[i] + c[i + 1] === 0) {
      i += 1;
      jumps += 1;
    } else if (c[i] === 1) {
      jumps += 1;
    }
  }
  return jumps;
}

jumpingOnClouds([0, 0, 0, 0, 1, 0]);
// jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
