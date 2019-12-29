var a = prompt("enter a month number please.");

var b = "";

switch (a) {
  case 1:
    b = 12;
    break;
  case 2:
    b = 1;
    break;
}
if (a == 1) {
  document.write("end of the season");
} else {
  document.write("continue");
}
