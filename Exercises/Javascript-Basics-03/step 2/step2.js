var arr = document.querySelectorAll("a");

arr[0].addEventListener("click", function() {
  document.querySelector("p").style.display = "block";
});

arr[1].addEventListener("click", function() {
  document.querySelector("p").style.display = "none";
});
