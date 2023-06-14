import "./styles.css";

const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", fetchData);

async function fetchData() {
  console.log("Hello");
  const inputUrlEnd = document.getElementById("input-show").value;
  const urlBegin = "https://api.tvmaze.com/search/shows?q=";
//  console.log(inputUrlEnd);
  const urlWhole = urlBegin + inputUrlEnd;
  console.log(urlWhole);
  const dataFetched = await fetch(urlWhole);
  const dataJson = await dataFetched.json();
//  console.log(dataJson[0]);
  dataJson.forEach((data) => {
//    <div class="show-data"> 
//      <img src="[show image medium]"> 
//      <div class="show-info"> 
//        <h1>[Show title]</h1> 
//        <p>[Show summary]</p> 
//      </div> 
//    </div> 

    let divShowData = document.createElement("div");
    divShowData.setAttribute("class", "show-data");
    let imgShowImage = document.createElement("img");
    let divShowInfo = document.createElement("div");
    divShowInfo.setAttribute("class", "show-info");
    let h1ShowTitle = document.createElement("h1");
    if (data.show.image){
      if (data.show.image.medium){
        imgShowImage.file = data.show.image.medium;
        console.log(imgShowImage.file);
        imgShowImage.src = data.show.image.medium;
        console.log(imgShowImage);
        imgShowImage.innerHTML = imgShowImage;
        divShowData.appendChild(imgShowImage);
      }
    }
    divShowInfo.innerHTML = data.show.summary;
    h1ShowTitle.innerText = data.show.name;
    divShowInfo.insertBefore(h1ShowTitle, divShowInfo.children[0]);
    divShowData.appendChild(divShowInfo);
    const divData = document.getElementById("data");
    divData.appendChild(divShowData);
  })
  
}