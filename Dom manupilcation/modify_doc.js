const message = document.getElementById("message");
// message.textContent = "New Message"; //Chnages the text
message.innerHTML = "<b> New Message1 </b>";

const image = document.getElementById("image");
image.setAttribute("alt", "New Image");
image.setAttribute("src", "new.webp");
console.log(image.getAttribute("src"));

//Manipulating the Styles using the DOM
const styled = document.getElementById("Styled");
styled.style.color = "lightgreen";
styled.style.fontFamily = "courier";

//Event types
// Click events
const Clicked = document.getElementById("clicking");
Clicked.addEventListener("click", () => {
  async function fetchdata() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        method: "GET",
        headers: {
          "Content-Type": "apllication/json",
        },
      }
    );
    if (!response.ok) {
      console.log("The error while fetching data");
    }
    const data = response.json();
    console.log(data);
  }
  alert("Clicked me");
  console.log(fetchdata());
});

//Mouse Events
Clicked.addEventListener("mouseover", () => {
  console.log("Hovered");
});

//Keyboard Events
const In = document.getElementById("input");
In.addEventListener("keydown", (event) => {
  console.log(`Key presed ${event.key}`);
});

//Forms event

const form = document.getElementById("myform");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form Submitted Success", event);

  const formData = new FormData(form);
  console.log("username", formData.get("username"));
});
