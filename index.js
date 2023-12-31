const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send({ msg: "Base API endpoint" });
});

app.get("/about", (req, res) => {
  res.send({ about: "about us..." });
});
app.get("/contact", (req, res) => {
  res.send({ about: `contact me at ${process.env.EMAIL}` });
});
app.listen(PORT, () => {
  console.log("server started on 8000");
});
