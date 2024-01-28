function SearchBoxSubmit(event) {
  event.preventDefault();
  let searchBoxInput = document.querySelector("#search-box");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchBoxInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", SearchBoxSubmit);
