const modal = document.querySelector(".comentarioPopup");

function addComentario() {
  modal.classList.add("active");
}

function fecharPopup() {
  modal.classList.remove("active");
}

function enviarComentario() {
  const commentText = document.getElementById("commentText").value;

  // Verifica se há um usuário logado
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true" || !loggedInUser) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Você tem que estar logado para comentar",
      customClass: {
        confirmButton: "custom-button",
      },
    });
    fecharPopup();
    return;
  }
  //   if (!loggedInUser) {
  //     alert("Você precisa estar logado para comentar.");
  //     fecharPopup();
  //     return;
  //   }

  if (commentText.trim() !== "") {
    const comentariosContainer = document.querySelector(
      ".comentariosContainer"
    );

    //busca o usuário no storage
    const usersStorage = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = usersStorage.find(function (userLogin) {
      return userLogin.email === loggedInUser.email;
    });

    const novoComentario = document.createElement("div");
    novoComentario.classList.add("comentario");

    novoComentario.innerHTML = `
            <img src="./assets/profile2.png" alt="foto de perfil do usuário" class="fotoPerfil">
            <div class="conteudoComentario">
                <div class="usuarioComentario">${foundUser.username}</div>
                <div class="textoComentario">${commentText}</div>
            </div>
        `;

    comentariosContainer.appendChild(novoComentario);
    document.getElementById("commentText").value = ""; // Limpa o campo de texto
    fecharPopup(); // Fecha o popup
  }
}

// Function to get query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to fetch book details by ID
async function fetchBookDetails(bookId) {
  const url = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${key}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Function to display book details
function displayBookDetails(book) {
  const capaLivro = document.getElementById("capaLivro");
  const tituloLivro = document.getElementById("tituloLivro");
  const autorAnoLivro = document.getElementById("autorAnoLivro");
  const avaliacaoLivro = document.getElementById("avaliacaoLivro");

  capaLivro.src = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : "./assets/covernotavailable.png";
  tituloLivro.textContent = book.volumeInfo.title;
  autorAnoLivro.textContent = `${book.volumeInfo.authors.join(", ")} - ${
    book.volumeInfo.publishedDate
  }`;
  avaliacaoLivro.innerHTML =
    book.volumeInfo.description || "Descrição não disponível";
}

// Main function to execute when the page loads
document.addEventListener("DOMContentLoaded", async () => {
  const bookId = getQueryParam("id");
  if (bookId) {
    const bookDetails = await fetchBookDetails(bookId);
    displayBookDetails(bookDetails);
  } else {
    console.error("Book ID not found in URL");
  }
});

const btLido = document.getElementById("addLido");
const btWishList = document.getElementById("addWishlist");

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
var emailUser = loggedInUser.email;
var usersStorage = JSON.parse(localStorage.getItem("users")) || [];

var userIndex = usersStorage.findIndex((obj) => obj.email === emailUser);
var userLidos = usersStorage[userIndex].livrosLidos;
var userWishlist = usersStorage[userIndex].wishlist;

btLido.addEventListener("click", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true" || !loggedInUser) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Você tem que estar logado para adicionar este livro",
      customClass: {
        confirmButton: "custom-button",
      },
    });
    fecharPopup();
    return;
  } else {
    let livro = getQueryParam("id");
    let verifyList = userLidos.includes(livro);

    if (verifyList === false) {
      userLidos.push(livro);
      usersStorage[userIndex].livrosLidos = userLidos;

      userWishlist = userWishlist.filter((e) => e !== livro);
      usersStorage[userIndex].wishlist = userWishlist;

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Adicionado a lista de livros lidos",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: "custom-button",
        },
      });
    } else {
      Swal.fire({
        position: "center",
        title: "Livro já marcado como lido",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: "custom-button",
        },
      });
    }
    localStorage.setItem("users", JSON.stringify(usersStorage));
  }
});

////////////////////////////// wishlist
btWishList.addEventListener("click", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true" || !loggedInUser) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Você tem que estar logado para adicionar este livro",
      customClass: {
        confirmButton: "custom-button",
      },
    });
    fecharPopup();
    return;
  } else {
    let livro = getQueryParam("id");
    let verifyWishlist = userWishlist.includes(livro);
    let verifyList = userLidos.includes(livro);

    if (verifyWishlist === false && verifyList === false) {
      userWishlist.push(livro);
      usersStorage[userIndex].wishlist = userWishlist;

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Adicionado a sua Wishlist",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: "custom-button",
        },
      });
    } else if (verifyList === true) {
      Swal.fire({
        position: "center",
        title: "Livro já marcado como lido",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: "custom-button",
        },
      });
    } else {
      Swal.fire({
        position: "center",
        title: "Livro já adicionado a Wishlist",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: "custom-button",
        },
      });
    }
    localStorage.setItem("users", JSON.stringify(usersStorage));
  }
});
