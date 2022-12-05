const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Index sayfası");
});

app.get("/about", (req, res) => {
  res.status(200).send("About sayfası");
});

app.get("*", (req, res) => {
  res.status(404).send("404 sayfası");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
