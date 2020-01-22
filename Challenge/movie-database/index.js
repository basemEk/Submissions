const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (req, res) => res.send("status:200, message:'ok'"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.listen(2020);

app.get("/time", function(req, res) {
  res.send("status:200, message:");
});
