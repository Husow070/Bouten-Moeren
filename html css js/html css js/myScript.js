let modal = document.querySelector("myModal")
let btn = document.querySelector(".buttoncolor");
let xclose = document.querySelector(".close");

console.log(xclose);


function showPupUp(){
  console.log('132')
  const pop = document.querySelector(".modal-content");
  pop.classList.remove("hide");
}

btn.addEventListener("click", showPupUp);

function closeWindow(){
  console.log('1213')
  const pop = document.querySelector(".modal-content");
  pop.classList.add("hide");

}

xclose.addEventListener("click", closeWindow);