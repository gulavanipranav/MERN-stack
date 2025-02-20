const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", express.static(path.join(__dirname, "views")));

app.listen(port, () => {
  console.log(`App started at ${port}`);
});
