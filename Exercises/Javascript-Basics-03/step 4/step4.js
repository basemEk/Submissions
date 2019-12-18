function myPass() {
  var pass = document.getElementById("password").value;
  var conf = document.getElementById("confirmation").value;

  if (pass != conf) {
    alert("no");
    document.getElementById("confirmation").style.border = "thick solid red";
  } else {
    console.log(pass);
  }
}
