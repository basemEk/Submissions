var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var red = document.querySelector(".red");

green.addEventListener("click", function() {
  document.querySelector("p").style.color = "green";
});

blue.addEventListener("click", function() {
  document.querySelector("p").style.color = "blue";
});

red.addEventListener("click", function() {
  document.querySelector("p").style.color = "red";
});
