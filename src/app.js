import express from "express"
import { fileURLToPath } from 'node:url';
import path from "node:path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.port || 3000;

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "../public")))
app.set("views", path.join(__dirname, "views"))


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/404", (req, res) => {
    res.render("404")
})

app.get("/menu", (req, res) => {
    res.render("menu")
})

app.get("/testimonial", (req, res) => {
    res.render("testimonial")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/blog", (req, res) => {
    res.render("blog")
})

app.get("/team", (req, res) => {
    res.render("team")
})


app.listen(port, () => {
    console.log(
        `App listening in http://localhost:${port}`
    )
});