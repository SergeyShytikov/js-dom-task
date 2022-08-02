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

function displayImageAndText() {
  const  arg = [...arguments].join();
  const category = mtbCategories.find(item => item.name === arg);
  const img = document.getElementById("image");
  img.src=category.image;
  const description = document.createElement("p");
  description.classList.add("text");
  description.innerText = category.description;
  main.append(description);
  return console.log(description)
  TODO:  many descriptions displayed
}
const buttons = document.querySelectorAll(".button");
buttons.forEach(item =>{item.addEventListener("click", ()=> {displayImageAndText(item.innerText)})})


console.log(buttons)
