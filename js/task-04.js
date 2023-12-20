function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let number = 0 
const boxDiv = document.querySelector("#boxes")
const buttons = document.querySelector("#controls").querySelectorAll("button");
document.querySelector("#controls").querySelector("input").addEventListener("input", value => {
  number = value.target.value;
});
buttons[0].addEventListener("click", createBoxes)
buttons[1].addEventListener("click", destroyBoxes)

function createBoxes(amount){
  let divHeight = 30
  amount = number
  console.log(amount)
  for (let i = 0; i < amount; i++){
    boxDiv.insertAdjacentHTML(
    "beforeend",
    `<div style="width: 30px; height: ${divHeight}px; background-color: ${getRandomHexColor()}"></div>`
    )
  divHeight += 10
  }
}

function destroyBoxes(){
  boxDiv.innerHTML = ""
}




