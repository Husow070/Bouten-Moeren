let modal = document.querySelector("myModal")
let btn = document.querySelector(".buttoncolor");



function showPupUp(){
  console.log('132')
  const pop = document.querySelector(".modal-content");
  pop.classList.remove("hide");
}

btn.addEventListener("click", showPupUp);

