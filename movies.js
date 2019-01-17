process.stdin.resume();
process.stdin.setEncoding("utf-8");

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on("data", function(data) {
  __input_stdin += data;
});

const https = require("https");
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */

function getMovieTitles(substr) {
  const Url =
    "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr;
  const titles = [];
  let pageCounter = 1;
  fetch(Url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      for (let title in res.data) {
        titles.push(res.data[title].Title);
      }
      if (res.page < res.total_pages) {
        pageCounter += 1;
        let nextQuery = substr + "&page=" + pageCounter;
        getMovieTitles(nextQuery);
      }
      console.log(titles.sort());
    });
}

getMovieTitles("spiderman");

process.stdin.on("end", function() {
  __input_stdin_array = __input_stdin.split("\n");
  var _substr = __input_stdin_array[__input_currentline].trim();
  __input_currentline += 1;

  getMovieTitles(_substr);
});
