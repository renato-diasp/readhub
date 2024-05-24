function handleSignup(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var alert = document.getElementById("alert");

  var usersStorage = JSON.parse(localStorage.getItem("users")) || [];

  // Check for existing email
  var checkEmail = usersStorage.find(function (userLogin) {
    return userLogin.email === email;
  });

  // Check for existing username
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

  if (password !== confirmPassword) {
    alert.innerHTML = "<p> As senhas não são iguais </p>";
    return;
  }

  var user = {
    email: email,
    username: username,
    password: password,
  };

  try {
    usersStorage.push(user);
    localStorage.setItem("users", JSON.stringify(usersStorage));
    document.getElementById("signupForm").reset();
    alert("Usuário cadastrado com sucesso!");
    alert.innerHTML = "";
  } catch (error) {
    console.error("Error adding user:", error);
    alert(
      "Ocorreu um erro ao adicionar o usuário. Por favor, tente novamente mais tarde."
    );
  }
}

document.getElementById("signupForm").addEventListener("submit", handleSignup);
