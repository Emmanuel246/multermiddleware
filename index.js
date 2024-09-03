const express = require("express");
const app = express();

app.set("View engine", "ejs");

app.get("upload", (req, res) => {
    res.render("upload");
});

app.post("/upload", (req, res) => {
    res.send("Image Upload");
});

app.listen(8080);
console.log("8080 is the port");