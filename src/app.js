import {mtbCategories} from '/src/data.js';

const main = document.querySelector(".main")
const menuItems = document.querySelector(".menu-items");
const createListOfLi = () => {
  mtbCategories.forEach(item => {
    const li = document.createElement("li");
    //TODO: add "a" atribute to each li point
    li.classList.add("button");
    li.innerText = item.name;
    menuItems.append(li);
  })
}
createListOfLi()

const description = document.createElement("p");
  description.classList.add("text");
  main.append(description);

function displayImageAndText() {
  const  arg = [...arguments].join();
  const category = mtbCategories.find(item => item.name === arg);
  const img = document.getElementById("image");
  img.src=category.image;
  description.innerText = category.description;
  return ;
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(item =>{item.addEventListener("click", ()=> {displayImageAndText(item.innerText)})})
