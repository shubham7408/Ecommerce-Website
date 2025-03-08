const express = require ("express");
const path = require("path");
const { title } = require("process");
const app = express();
const PORT = process.env.PORT || 3000;
//set the engine as view enginer

app.set("view engine","ejs")

//set the direectory for views.

app.set("views",path.join(__dirname,"views"));

const products = [
    {
        id:1,
        title:"Product 1"
    },

    {
        id:2,
        title:"Product 2"
    },

    {
        id:3,
        title:"product 3"
    }
]


app.get("/",(req,res) => {
    res.render("home", {title:"Home",products: products});
});

app.listen(PORT,() => {
    console.log("Runing on port");
})