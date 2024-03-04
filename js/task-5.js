function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
const button = document.querySelector(".change-color");
let span = document.querySelector(".color")


button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});


// Варіант 2

// button.addEventListener("click", changeColor);
//  function changeColor() {
//   const color = getRandomHexColor();
//   const body = document.body;
//   body.style.backgroundColor = color;
//   span.textContent = color;
// }