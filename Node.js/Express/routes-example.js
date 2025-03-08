const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Hello World!");
});

//get all Products


app.get("/api/products", (req,res) => {
    res.json({products: [
        {id: 1, name: "Product 1","label":"Sneakers"},
        {id: 2, name: "Product 2","label":"Sneakers"},
        {id: 3, name: "Product 3","label":"Sneakers"},
    ]});
});

//get a single product
app.get("/api/products/:id", (req,res) => {
    const productId = req.params.id;
    res.json({id: productId, name: `Product ${productId}`});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});