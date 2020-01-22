const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send("Hello World! today we will going to sove node question")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
