const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("View engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
    }
);

app.post("/api/data" ,(req,res) => {
    res.json({message: "Data received", data: req.body});
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});