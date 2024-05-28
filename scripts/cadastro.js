function handleSignup(event) {
  event.preventDefault();

  // acesso as infos do form
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // acesso a uma div do html que gerará uma resposta em innerHTML de sucesso de cadastro ou nao para o usuário
  var alert = document.getElementById("alert");

  // acesso das infos do local storage
  var usersStorage = JSON.parse(localStorage.getItem("users")) || [];

  // checa se email já foi cadastrado
  var checkEmail = usersStorage.find(function (userLogin) {
    return userLogin.email === email;
  });

  // checa se usuário já foi cadastrado
  var checkUsername = usersStorage.find(function (userLogin) {
    return userLogin.username === username;
  });

  if (checkEmail) {
    alert.innerHTML = "<p> Email já cadastrado </p>";
    return;
  }

  if (checkUsername) {
    alert.innerHTML = "<p> Nome de usuário já cadastrado </p>";
    return;
  }

  // checa se as senhas são iguais
  if (password !== confirmPassword) {
    alert.innerHTML = "<p> As senhas não são iguais </p>";
    return;
  }

  // objeto padrão de usuário
  var user = {
    email: email,
    username: username,
    password: password,
    wishlist: [],
    livrosLidos: [],
  };

  // armazena informações no local storage
  try {
    usersStorage.push(user);
    localStorage.setItem("users", JSON.stringify(usersStorage));
    document.getElementById("signupForm").reset();
    localStorage.removeItem("loggedInUser");
    localStorage.setItem("loggedInUser", JSON.stringify({ email: user.email }));
    window.location.href = "./profile.html";
  } catch (error) {
    console.error("Error adding user:", error);
    alert(
      "Ocorreu um erro ao adicionar o usuário. Por favor, tente novamente mais tarde."
    );
  }
}

document.getElementById("signupForm").addEventListener("submit", handleSignup);
