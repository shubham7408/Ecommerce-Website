//  getElementbyID()
//  Selects an element by its id
//   Returns a singl DOM element
const greeting = document.getElementById("greeting");
console.log(greeting.textContent);

//getelement by classNAme()
//Select elements by their class,
//Returns a live HTML Collections (array-like object());

const items = document.getElementsByClassName("item");
console.log("Items are here",items);

//getElementsbyTagID
//Select Elemtns by their tag Name
// Returns a live HTMLColections

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[1].textContent);

//querySelector()
//Selects the first matching element using a CSS selector

const special = document.querySelector(".container #special");
console.log(special.textContent);

//query selectorAll();
//Selects ALl matching elements using CSS selector
//Returns a Nodelist (not Live, unlike HTML collections);

const menuitems = document.querySelectorAll(".menu-items");
console.log(menuitems)
menuitems.forEach((item) => console.log(item.textContent));

