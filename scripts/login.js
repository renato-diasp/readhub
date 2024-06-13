function handleLogin(event) {
  event.preventDefault();

  // pega as infos do form
  var loginInput = document.getElementById("loginInput").value;
  var passwordInput = document.getElementById("passwordInput").value;

  // acesso das infos do local storage
  var usersStorage = JSON.parse(localStorage.getItem("users")) || [];

  // acesso a uma div do html que gerará uma resposta em innerHTML de sucesso de login ou nao para o usuário
  var alertDiv = document.getElementById("alert");

  // busca do usuário no local storage
  var foundUser = usersStorage.find(function (userLogin) {
    return userLogin.email === loginInput || userLogin.username === loginInput;
  });

  // checa se a senha está correta e efetua o login
  if (foundUser && foundUser.password === passwordInput) {
    // adiciona o usuário que fez o login em uma outra chave do local storage
    localStorage.removeItem("loggedInUser");
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ email: foundUser.email })
    );

    localStorage.setItem("isLoggedIn", "true");

    // Show success alert
    // alert("Login efetuado com sucesso");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login efetuado com sucesso",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        confirmButton: "custom-button",
      },
    });

    // Redirect to index.html after a short delay
    setTimeout(function () {
      window.location.href = "indexReviews.html";
    }, 1500); // 1000 milliseconds = 1 second
  } else {
    alertDiv.innerHTML = "<p>Usuário ou senha incorretos</p>";
  }
}

// Executa a função após clicar em login
document.getElementById("loginButton").addEventListener("click", handleLogin);
