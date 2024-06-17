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

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const usersStorage = JSON.parse(localStorage.getItem("users")) || [];

const foundUser = usersStorage.find(function (userLogin) {
  return userLogin.email === loggedInUser.email;
});

function fetchBookCover(bookId) {
  return fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    .then((response) => response.json())
    .then((data) => {
      const coverUrl = data.volumeInfo.imageLinks.thumbnail;
      return coverUrl;
    })
    .catch((error) => {
      console.error("Error fetching book cover:", error);
      return "assets/default-book-cover.jpg"; // fallback image in case of error
    });
}

function generateBookList(containerId, bookArray) {
  const container = document.getElementById(containerId);
  const mainBox = document.createElement("div");
  mainBox.classList.add("main-box");

  const tituloBox = document.createElement("div");
  tituloBox.classList.add("tituloBox");
  tituloBox.textContent =
    containerId === "livrosLidos" ? "Livros lidos" : "WishList";
  mainBox.appendChild(tituloBox);

  // Create a separate div to hold all the books
  const booksContainer = document.createElement("div");
  booksContainer.classList.add("books-container");

  bookArray.forEach((bookId) => {
    fetchBookCover(bookId).then((coverUrl) => {
      const box = document.createElement("div");
      box.classList.add("box");

      const img = document.createElement("img");
      img.src = coverUrl;
      img.alt = "Capa do livro";

      box.appendChild(img);
      booksContainer.appendChild(box); // Append each book box to the booksContainer
    });
  });

  // Append the booksContainer to the mainBox after tituloBox
  mainBox.appendChild(booksContainer);

  // Append the mainBox to the container in the DOM
  container.appendChild(mainBox);
}

generateBookList("livrosLidos", foundUser.livrosLidos);
generateBookList("wishlist", foundUser.wishlist);
