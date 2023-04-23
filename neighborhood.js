let restaurantRecBtn = document.querySelector("#randomBtn");

function buttonCllicked(evt) {
  evt.preventDefault();

  let restaurantLinks = document.querySelector("#links");
  let restaurantItems = restaurantLinks.querySelectorAll("li");
  let restaurantIndex = Math.floor(Math.random() * restaurantItems.length);
  let restaurantText = restaurantItems[restaurantIndex].textContent;

  alert(restaurantText);
}

restaurantRecBtn.addEventListener("click", buttonCllicked);
