let modal = document.querySelectorAll(".myModal")
let btn = document.querySelectorAll(".buttoncolor");
let xclose = document.querySelectorAll(".close");

console.log(btn);


function showPupUp(index){
  const pop = document.querySelectorAll(".modal-content");
  pop[index].classList.toggle("hide");
};

// btn.addEventListener("click", showPupUp);

function closeWindow(){
  const pop = document.querySelector(".modal-content");
  pop.classList.add("hide");

};

// xclose.addEventListener("click", closeWindow);

let btns = 0;

while (btns < btn.length) {
  btn[btns].addEventListener("click", function(){
    const index = [].indexOf.call(btn, this);
    showPupUp(index);
  });
  btns++;
};


// img.src = 'img/Shopimg/Meubel1.jpg'


// let imgDiv = document.querySelector(".x");
// let image = document.createElement("img");
// image.src ='img/Shopimg/Meubel1.jpg';
// image.style.width = "1000px";
// // image.classList.add("small-img");
// imgDiv.appendChild(image);