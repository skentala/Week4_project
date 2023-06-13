import "./styles.css";

const submitButton = document.getElementById("submit-data");
submitButton.addEventListener("click", () => {
  const inputURL = document.getElementById("input-show");
  console.log(inputURL.value);
})