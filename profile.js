console.log("hello world");

let favColor = document.querySelector("#color");
let favPlace = document.querySelector("#place");
let favRitual = document.querySelector("#ritual");

function buttonsCllicked(evt) {
    evt.preventDefault();
    
    if(favColor){
        alert("favorite color clicked")
    } else if(favPlace){
        alert("favorite place clicked")
    } else {
        alert("favorite ritual clicked")
    }
}

// console.log(favColor)
favColor.addEventListener("click", buttonsCllicked);
favPlace.addEventListener("click", buttonsCllicked);
favRitual.addEventListener("click", buttonsCllicked);
