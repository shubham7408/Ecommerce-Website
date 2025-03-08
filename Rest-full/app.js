const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let books = [
    {
        id:1,
        title:"Book"
    },

    {
        id:2,
        title:"Shoes",
    }
];

//get all books

app.get("/",(req,res) => {
    res.send("<h1>Welcome to library Page </h1>");
});

app.get("/api/books",(req,res) => {
    res.json(books);
})

app.get("/api/books/:id",(req,res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if(!book) {
        res.status(404).send("The book with the given id was not found");
    } else {
        res.status(200).json(book);
    }
});


app.post("/api/books",(req,res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title
    };
    books.push(book);
    res.status(201).json(book);
});

app.put("/api/books/:id",(req,res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if(!book) {
        res.status(404).send("The book with the given id was not found");
    } else {
        book.title = req.body.title;
        res.status(200).json(book);
    }
});

app.delete("/api/books/:id",(req,res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if(!book) {
        res.status(404).send("The book with the given id was not found");
    } else {
        const index = books.indexOf(book);
        books.splice(index,1);
        res.status(200).json(book);
    }
});

app.listen(PORT,() => {
    console.log("The server is running");
})