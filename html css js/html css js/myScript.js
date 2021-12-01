let modal = document.querySelector(".myModal")
let btn = document.querySelector(".buttoncolor");
let xclose = document.querySelector(".close");

console.log(xclose);


function showPupUp(){
  const pop = document.querySelector(".modal-content");
  pop.classList.toggle("hide");
}

btn.addEventListener("click", showPupUp);

function closeWindow(){
  const pop = document.querySelector(".modal-content");
  pop.classList.add("hide");

}

xclose.addEventListener("click", closeWindow);

// function clickHere() {
//   console.log(123)
//   btn.classList.remove("hide");


// }

// btn.addEventListener("click", clickHere);

// function myFunction() {
//   element.classList.toggle(".buttoncolor");
// }

// btn.addEventListener("click", myFunction);
