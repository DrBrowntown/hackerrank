//ineffecient

function repeatedString(s, n) {
  if (s.length < n) {
    s += s;
    repeatedString(s, n);
    // console.log(s);
  } else if (s.length > n) {
    s = s.substring(0, n);
    console.log(s.match(/a/g).length);
  } else {
    console.log(s.match(/a/g).length);
  }
}
//Better version

function repeatedString(s, n) {
  const counta = str => str.split("").filter(c => c == "a").length;

  const d = Math.floor(n / s.length);
  const r = n - s.length * d;
  console.log(d * counta(s) + counta(s.substr(0, r)));
}

repeatedString("a", 1000000000000);
repeatedString("aba", 10);
