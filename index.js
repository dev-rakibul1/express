const express = require("express");
const app = express();
const port = 2000;
const products = require("./products.json");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "My name is Rakibul Islam. I live in Bangladesh. May Allah help me to be for SR software developer and give me a job as good software developer in larger company in the world."
  );
});

app.get("/phones", (req, res) => {
  res.send("Phone data is coming as soon as possible");
});

app.get("/about", (req, res) => {
  res.send("About us pages");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("id is: ", id);

  const product = products.find((pk) => pk.id === id) || {};
  res.send(product);
  console.log(product);
});

app.listen(port, () => {
  console.log(`My server running port is ${port}`);
});
