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

const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الارهاب والكباب", year: 1992, rating: 6.2 }
];

app.get("/movies/create", (req, res) => {
  res.json({ status: 200, data: "creating movies" });
});

app.get("/movies/read", (req, res) => {
  res.json({ status: 200, data: "read movies" });
});

app.get("/movies/update", (req, res) => {
  res.json({ status: 200, data: "update movies" });
});

app.get("/movies/delete", (req, res) => {
  res.json({ status: 200, data: "delete movies" });
});
