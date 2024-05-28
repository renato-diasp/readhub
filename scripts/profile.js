document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    const usersStorage = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = usersStorage.find(function (userLogin) {
      return userLogin.email === loggedInUser.email;
    });

    if (foundUser) {
      document.getElementById("nomeUsuario").innerHTML = foundUser.username;
    } else {
      console.error("User not found in usersStorage");
    }
  } else {
    console.error("No logged-in user found");
  }
});
