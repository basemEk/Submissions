function clearAll() {
  if (confirm("press the button to clear the text")) {
    document.getElementById("name").value = " ";
    document.getElementById("surname").value = " ";
    document.getElementById("city").value = " ";
  } else {
    alert("No");
  }
}
