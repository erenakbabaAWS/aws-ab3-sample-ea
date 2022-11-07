const express = require("express");
const app = express();

app.set("view engine", "ejs");

const port = 8080;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});