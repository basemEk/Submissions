const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello"));

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  res.json({
    status: 200,
    message: new Date().getHours() + ":" + new Date().getMinutes()
  });
});

app.listen(2020);
