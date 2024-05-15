function handleLogin(event) {
  event.preventDefault();

  var loginInput = document.getElementById("loginInput").value; // Corrected ID to "loginInput"
  var passwordInput = document.getElementById("passwordInput").value; // Corrected ID to "passwordInput"

  var usersStorage = JSON.parse(localStorage.getItem("users")) || [];

  var foundUser = usersStorage.find(function (userLogin) {
    return userLogin.email === loginInput || userLogin.username === loginInput;
  });

  if (foundUser && foundUser.password === passwordInput) {
    alert("Login efetuado.");
  } else {
    alert(
      "Credenciais inválidas. Por favor, verifique o seu email/usuário e senha."
    );
  }
}

document.getElementById("loginButton").addEventListener("click", handleLogin);
