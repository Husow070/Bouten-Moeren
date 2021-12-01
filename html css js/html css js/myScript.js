let modal = document.querySelectorAll(".myModal")
let btn = document.querySelectorAll(".buttoncolor");
let xclose = document.querySelectorAll(".close");

console.log(btn);


function showPupUp(index){
  const pop = document.querySelectorAll(".modal-content");
  pop[index].classList.toggle("hide");
}

// btn.addEventListener("click", showPupUp);

function closeWindow(){
  const pop = document.querySelector(".modal-content");
  pop.classList.add("hide");

}

// xclose.addEventListener("click", closeWindow);

let btns = 0;

while (btns < btn.length) {
  btn[btns].addEventListener("click", function(){
    const index = [].indexOf.call(btn, this);
    showPupUp(index);
  });
  btns++;
}

