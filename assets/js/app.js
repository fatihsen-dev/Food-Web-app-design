let count = 5;
let rotateCount = 20;
const wheel = document.querySelector("#wheel");
const mainImg = document.querySelector("#mainImg");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

const rotate = () => {
   mainImg.src = `./assets/images/foods/${count}.svg`;
   wheel.style.transform = `rotate(${rotateCount}deg)`;
};

left.onclick = () => {
   count === 1 ? (count = 10) : (count -= 1);
   rotateCount -= 40;
   rotate();
};

right.onclick = () => {
   count === 10 ? (count = 1) : (count += 1);
   rotateCount += 40;
   rotate();
};
