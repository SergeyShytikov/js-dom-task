import {mtbCategories} from '/src/data.js';

const menu = document.querySelector(".menu");
const main = document.querySelector(".main")
const menuItems = document.querySelector(".menu-items");
const createListOfLi = () => {
  mtbCategories.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("button");
    li.innerText = item.name;
    menuItems.append(li);
  })
}
createListOfLi()

const changeImage = () => {
  main.insertAdjacentElement()
}
const buttons = document.querySelectorAll(".button");
buttons.forEach(item =>{item.addEventListener("click", ()=> {console.log(item.innerText)})})


console.log(buttons)
