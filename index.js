import express, { urlencoded } from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import axios from "axios";




const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const data = 

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

// app.get("/taylor-swift", (req, res) => {
//     res.render("taylor-swift.ejs");
// })

app.get("/taylor-swift", async (req, res) => {
    res.render("taylor-swift.ejs")
  });

  app.post("/taylor-swift", async (req, res) => {
    const selection = req.body.type;
    console.log(selection);
    try {
      const response = await axios.get(
        `https://taylor-swift-api.sarbo.workers.dev/lyrics/${selection}`
      );
      const result = response.data;
      console.log(result);
      res.render("taylor-swift.ejs", {
        data: result,
      });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("taylor-swift.ejs", {
        error: "No activities that match your criteria.",
      });
    }
  });

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



