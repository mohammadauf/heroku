const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const path = require("path");
const hbs = require("hbs");


const partialsPath = path.join(__dirname, "../views/partials");
hbs.registerPartials(partialsPath);

const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath));


app.set('view engine', 'hbs');

app.get("", (req, res) => {
    res.status(200).render("index");
});
app.get("/about", (req, res) => {
    res.status(200).render("about")
});
app.get("/weather", (req, res) => {

    res.status(200).render("weather")
});
app.get("*", (req, res) => {
    res.status(404).render("error");
});

app.listen(port, () => {
    console.log(`port start at ${port}`);
});