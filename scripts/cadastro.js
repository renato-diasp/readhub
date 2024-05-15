function handleSignup(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("As senhas não coincidem.");
    return;
  }

  var user = {
    email: email,
    username: username,
    password: password,
  };

  try {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("signupForm").reset();
  } catch (error) {
    console.error("Error adding user:", error);
    alert(
      "Ocorreu um erro ao adicionar o usuário. Por favor, tente novamente mais tarde."
    );
  }
}

document.getElementById("signupForm").addEventListener("submit", handleSignup);
