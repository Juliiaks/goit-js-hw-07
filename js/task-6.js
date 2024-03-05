function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputDiv = document.querySelector("#controls");

const input = document.querySelector("input");

const btnCreate = document.querySelector("button[data-create]");

const btnDestroy = document.querySelector("button[data-destroy]");

const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", handleClick);
function handleClick() {
  const boxCount = input.value;
    if (boxCount >= 1 && boxCount <= 100) {
      createBoxes(boxCount);
      input.value = " ";
      input.reset;
    } 
} 

function createBoxes(amount) {
  for (let i = 0; i < amount; i++){
    const newBoxes = document.createElement("div");
      newBoxes.style.width = `${30 + i * 10}px`;
      newBoxes.style.height = `${30 + i * 10}px`;
      newBoxes.style.backgroundColor = getRandomHexColor();
    divBoxes.append(newBoxes);
      
  }
  
}

btnDestroy.addEventListener("click", removeBoxes);

function removeBoxes() {
    divBoxes.innerHTML = " ";
  }


