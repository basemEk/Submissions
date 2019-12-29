let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");
let num3 = prompt("Enter the third number");

if (
  num1.substr(-1) == num2.substr(-1) &&
  num1.substr(-1) == num3.substr(-1) &&
  num2.substr(-1) == num3.substr(-1)
) {
  alert("they have the same last digit");
} else {
  alert("they don't have the same last digit");
}
