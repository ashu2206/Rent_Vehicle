function myfunction() {
  var u = document.getElementById("email").value;
  var p = document.getElementById("password").value;
  if (u == "user@gmail.com" && p == "user") {
    window.location.href = "./index.html";
  } else {
    alert("enter correct email and password");
  }
}
