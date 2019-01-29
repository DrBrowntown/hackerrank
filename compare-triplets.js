// Function Description

// Complete the function compareTriplets in the editor below.
// It must return an array of two integers, the first being Alice's score and
// the second being Bob's.

// compareTriplets has the following parameter(s):

//     a: an array of integers representing Alice's challenge rating
//     b: an array of integers representing Bob's challenge rating

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  let array = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      console.log(a[i], b[i]);
      alice += 1;
    } else if (b[i] > a[i]) {
      bob += 1;
    }
  }
  array.push(alice, bob);
  return array;
}

a = [17, 28, 30];
b = [99, 16, 8];

compareTriplets(a, b);
