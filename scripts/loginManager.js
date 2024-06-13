document.addEventListener("DOMContentLoaded", (event) => {
  checkLoginStatus();

  document
    .getElementById("login-header")
    .addEventListener("click", function () {
      document.getElementById("menu").classList.toggle("hidden");
    });

  // fecha o menu dropdown quando clica em qlqr lugar da página
  window.onclick = function (event) {
    if (!event.target.matches("#login-header")) {
      var dropdowns = document.getElementsByClassName("menu");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!openDropdown.classList.contains("hidden")) {
          openDropdown.classList.add("hidden");
        }
      }
    }
  };
});

function logout() {
  localStorage.setItem("isLoggedIn", "false");
  checkLoginStatus();
}

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  let loginHeader = document.getElementById("login-header");

  if (isLoggedIn === "true" && loggedInUser) {
    const usersStorage = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = usersStorage.find(
      (userLogin) => userLogin.email === loggedInUser.email
    );

    if (foundUser && loginHeader) {
      loginHeader.innerText = foundUser.username;
      loginHeader.href = "javascript:void(0);"; // Impede de navegar para outra página
    } else {
      console.error("Logged-in user not found in storage");
    }
  } else {
    localStorage.setItem("isLoggedIn", "false");
    if (loginHeader) {
      loginHeader.innerText = "Login";
      loginHeader.href = "./login.html";
    }
  }
}
