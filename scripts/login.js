function handleLogin(event) {
  event.preventDefault();

  var loginInput = document.getElementById("loginInput").value;
  var passwordInput = document.getElementById("passwordInput").value;

  var usersStorage = JSON.parse(localStorage.getItem("users")) || [];

  var alert = document.getElementById("alert");

  var foundUser = usersStorage.find(function (userLogin) {
    return userLogin.email === loginInput || userLogin.username === loginInput;
  });

  if (foundUser && foundUser.password === passwordInput) {
    // alert("Login efetuado.");

    localStorage.removeItem("loggedInUser");
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ email: foundUser.email })
    );

    window.location.href = "profile.html";
  } else {
    alert.innerHTML = "<p> Usuário ou senha incorretos </p>";
  }
}

document.getElementById("loginButton").addEventListener("click", handleLogin);
