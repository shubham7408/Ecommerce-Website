const Change = document.getElementById("backgroundBTN");
const divchange = document.getElementById("Colorbox");

Change.addEventListener("click", function () {
    divchange.style.backgroundColor = "lightblue";
    divchange.style.color = "white";
    divchange.style.fontSize = "20px";
    divchange.style.padding = "20px";
    divchange.style.borderRadius = "10px";
    divchange.style.margin = "10px";
    divchange.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
    divchange.style.textAlign = "center";
    divchange.style.fontFamily = "Arial";
    divchange.style.fontWeight = "bold";
    divchange.innerHTML = "Hello World!";
});