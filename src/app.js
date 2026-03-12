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

app.listen(port, () => {
    console.log(
        `App listening in http://localhost:${port}`
    )
});