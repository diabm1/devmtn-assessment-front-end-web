console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  // console.log('form submit');
  alert("submitted successfully");
}

function mouseOverPicture(evt) {
  evt.preventDefault();

  let picture = evt.target;
  let complimentList = document.querySelector("#compliments")
  let complimentItems = complimentList.querySelectorAll("li")
  let complimentIndex = Math.floor(Math.random() * complimentItems.length)
  let complimentText = complimentItems[complimentIndex].textContent;

  alert(complimentText)


}

let wildCatPicture = document.querySelector("#wild-cat");
let form = document.querySelector("#contact");

wildCatPicture.addEventListener("mouseover", mouseOverPicture);

form.addEventListener("submit", handleSubmit);
