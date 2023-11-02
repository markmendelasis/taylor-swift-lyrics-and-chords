import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;

app.use(express.static("public"));

const data = 

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/taylor-swift", (req, res) => {
    res.render("taylor-swift.ejs");
})

app.get("/fearless", (req, res) => {
    res.render("about.ejs");
})

app.get("/speak-now", (req, res) => {
    res.render("about.ejs");
})

app.get("/red", (req, res) => {
    res.render("about.ejs");
})

app.post("/submit", (req, res) => {


})

app.listen(port, ()=> {
    console.log(`Server started at port ${port} `);
});

