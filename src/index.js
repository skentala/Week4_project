import "./styles.css";

const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", function fetchData);

function fetchData() {
  console.log("Hello");
  const inputUrlEnd = document.getElementById("input-show").value;
  const urlBegin = "https://api.tvmaze.com/search/shows?q=";
  console.log(inputUrlEnd);
  const urlWhole = urlBegin + inputUrlEnd;
  console.log(urlWhole);
//  const dataFetched = await fetch(urlWhole);
//  console.log(dataFetched);
}