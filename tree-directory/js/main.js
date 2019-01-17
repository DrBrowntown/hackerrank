const Url =
  "https://raw.githubusercontent.com/hyperscience/interview-problems/master/treePaths.json";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

fetch(Url)
  .then(data => {
    return data.json();
  })
  .then(res => {
    const array = [];
    const array2 = [];
    for (let treeLine in res.data) {
      array.push(res.data[treeLine].split("/")[1]);
      array2.push(res.data[treeLine].split("/")[2]);

      const uniqueTrees = array.filter(onlyUnique);
      const uniqueTrees2 = array2.filter(onlyUnique);
      console.log(uniqueTrees2);
      if (treeLine > 10) {
        for (treeTop in uniqueTrees) {
          document.getElementById("tree").children[0].innerHTML +=
            "<li>" + uniqueTrees[treeTop] + "</li>";
        }
      }

      continue;
    }
  });
