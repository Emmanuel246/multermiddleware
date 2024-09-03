const express = require("express");
const app = express();
const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})


app.set("View engine", "ejs");

app.get("upload", (req, res) => {
    res.render("upload");
});

app.post("/upload", (req, res) => {
    res.send("Image Upload");
});

app.listen(8080);
console.log("8080 is the port");