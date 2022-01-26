const express = require("express");
const app = express();
const nsduRouter = require("./routers/nsdu");

app.set("view engine", "ejs");
app.listen(5000);

app.use("/nsdu", nsduRouter)
app.get("/", (req, res) => {
    res.render("menu");
});