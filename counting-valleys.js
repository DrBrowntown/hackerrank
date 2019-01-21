function countingValleys(n, s) {
  let altitude = 0;
  let count = 0;

  for (var i = 0; i < n; i++) {
    let chararacter = s.charAt(i);
    if (chararacter === "D" && altitude == 0) {
      count++;
      altitude--;
    } else if (chararacter === "D" && altitude !== 0) {
      altitude--;
    } else if (chararacter === "U") {
      altitude++;
    }
  }
  return count;
}

countingValleys(8, "UDDDUDUU");
