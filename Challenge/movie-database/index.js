const express = require("express");
const app = express();
app.listen(2020);

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

app.get("/hello/:ID", (req, res) => {
  // console.log(req.params,req.query);
  res.json({ status: 200, message: "Hello " + req.params.ID });
});

app.get("/search", (req, res) => {
  // console.log(req.params,req.query);
  if (req.query.s) {
    res.json({ status: 200, message: "ok ", data: req.query.s });
  } else {
    res.json({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
  }
});
