// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

//     n: the number of socks in the pile
//     ar: the colors of each sock

// Input Format

// The first line contains an integer
// , the number of socks represented in .
// The second line contains space-separated integers describing the colors

// of the socks in the pile.

// Constraints

// where

// Output Format

// Return the total number of matching pairs of socks that John can sell.

function sockMerchant(n, ar) {
  ar.sort(function(a, b) {
    return a - b;
  });
  var counter = 0;
  for (let i of ar) {
    if (ar[i] === ar[i + 1]) {
      console.log(ar[i]);
      counter += 1;
    }
  }
  return counter;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
