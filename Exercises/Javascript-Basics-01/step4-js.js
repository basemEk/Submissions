// let name= prompt("enter your name", "name");
// let surname= prompt("enter your surname", "surname");

// let city= prompt("enter your city", "city");
// alert("name :" +name + "\n" + "surname "+ surname +"\n"+ "city");

document.getElementById("validate").addEventListener("click", () => {
  var name = document.getElementById("name").value;
  var lName = document.getElementById("surname").value;
  var city = document.getElementById("city").value;
  alert(`Nom : ${lName}\nPrenome : ${name}\nVille : ${city} `);
});
