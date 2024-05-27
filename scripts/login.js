function handleLogin(event) {
  event.preventDefault();

  var loginInput = document.getElementById("loginInput").value;
  var passwordInput = document.getElementById("passwordInput").value;

  var usersStorage = JSON.parse(localStorage.getItem("users")) || [];

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
    alert(
      "Credenciais inválidas. Por favor, verifique o seu email/usuário e senha."
    );
  }
}

document.getElementById("loginButton").addEventListener("click", handleLogin);
