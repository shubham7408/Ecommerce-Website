const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const requestTimeStamp = (req,res,next) => {
    const timestamp = new Date().toISOString();

    console.log(`${timestamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(requestTimeStamp);


app.get("/",(req,res) => {
    res.send("Home Page");
});

app.get("/about",(req,res) => {
    res.send("About Page");
});

app.get("/contact",(req,res) => {
    res.send("<h1>This is Contact Form</h1>")
});

app.listen(PORT,() => {
    console.log(`Runing on 3000`);
})