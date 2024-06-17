// // função para o botão switch do header
// let switchState = false;

// function toggleSwitch() {
//   switchState = !switchState;
//   const switchButton = document.getElementById("switchButton");

//   if (switchState) {
//     switchButton.classList.remove("off");
//     switchButton.classList.add("on");
//     // Redireciona para outra URL quando o botão é ligado
//     window.location.href = "./indexReviews.html";
//   } else {
//     switchButton.classList.remove("on");
//     switchButton.classList.add("off");
//     // Redireciona para outra URL quando o botão é desligado
//     window.location.href = "./index.html";
//   }
// }

// // consumo da API google books

// const bookName = document.getElementById("bookname");
// const authorName = document.getElementById("authorname");
// const searchBookButton = document.getElementById("searchbook");
// const btnViewMore = document.getElementById("ver-mais");
// let infoBook = document.getElementById("infobook");

// // função que passa os dados de consulta para API
// async function consultaApi() {
//   let termosPesq = concatWords();
//   console.log(termosPesq);

//   let authorPesq = concatAuthorName();

//   let url = `https://www.googleapis.com/books/v1/volumes?q=${termosPesq}+inauthor:${authorPesq}&maxResults=5&key=${key}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);

//   for (let i = 0; i < data.items.length; i++) {
//     if (data.items[i].volumeInfo.hasOwnProperty("imageLinks") === false) {
//       data.items[i].volumeInfo.imageLinks = {
//         thumbnail: "./assets/covernotavailable.png",
//       };
//     } else {
//       console.log("não existe");
//     }
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     document.addEventListener("click", function (event) {
//       if (event.target && event.target.classList.contains("ver-mais")) {
//         event.preventDefault(); // Prevent the default anchor behavior
//         const bookId = event.target.getAttribute("data-id");
//         const url = new URL(event.target.closest("a").href);
//         url.searchParams.set("id", bookId);
//         window.location.href = url.toString();
//       }
//     });
//   });

//   infoBook.innerHTML = `

//   <div class="bookObject">
//     <div>
//       <a href=""><img src="${data.items[0].volumeInfo.imageLinks.thumbnail}" alt="Foto de capa do livro não disponível"></a>
//       <a href="./produto.html" class="ver-mais-link" data-id="${data.items[0].id}"><button class="ver-mais">Ver mais</button></a>
//     </div>
//     <div id="bookdescription">
//       <p><span>Título: </span>${data.items[0].volumeInfo.title}</p>
//       <p><span>Autor: </span>${data.items[0].volumeInfo.authors}</p>
//       <p><span>Editora: </span>${data.items[0].volumeInfo.publisher}</p>
//       <p><span>Data da publicação: </span>${data.items[0].volumeInfo.publishedDate}</p>
//       <p><span>Gênero: </span>${data.items[0].volumeInfo.categories}</p>
//       <a href="./produto.html" class="ver-mais-link" data-id="${data.items[0].id}"><button class="ver-mais">Ver mais</button></a>
//       <p><span>Descrição: </span>${data.items[0].volumeInfo.description}</p>
//     </div>
//   </div>

//   <div class="bookObject">
//     <div>
//       <a href=""><img src="${data.items[1].volumeInfo.imageLinks.thumbnail}" alt="Foto de capa do livro não disponível"></a>
//       <a href="./produto.html"><button id="ver-mais">Ver mais</button></a>
//     </div>
//     <div id="bookdescription">
//       <p><span>Título: </span>${data.items[1].volumeInfo.title}</p>
//       <p><span>Autor: </span>${data.items[1].volumeInfo.authors}</p>
//       <p><span>Editora: </span>${data.items[1].volumeInfo.publisher}</p>
//       <p><span>Data da publicação: </span>${data.items[1].volumeInfo.publishedDate}</p>
//       <p><span>Gênero: </span>${data.items[1].volumeInfo.categories}</p>
//       <p><span>Descrição: </span>${data.items[1].volumeInfo.description}</p>
//     </div>
//   </div>

//   <div class="bookObject">
//     <div>
//       <a href=""><img src="${data.items[2].volumeInfo.imageLinks.thumbnail}" alt="Foto de capa do livro não disponível"></a>
//       <a href="./produto.html"><button id="ver-mais">Ver mais</button></a>
//     </div>
//     <div id="bookdescription">
//       <p><span>Título: </span>${data.items[2].volumeInfo.title}</p>
//       <p><span>Autor: </span>${data.items[2].volumeInfo.authors}</p>
//       <p><span>Editora: </span>${data.items[2].volumeInfo.publisher}</p>
//       <p><span>Data da publicação: </span>${data.items[2].volumeInfo.publishedDate}</p>
//       <p><span>Gênero: </span>${data.items[2].volumeInfo.categories}</p>
//       <p><span>Descrição: </span>${data.items[2].volumeInfo.description}</p>
//     </div>
//   </div>

//   <div class="bookObject">
//     <div>
//       <a href=""><img src="${data.items[3].volumeInfo.imageLinks.thumbnail}" alt="Foto de capa do livro não disponível"></a>
//       <a href="./produto.html"><button id="ver-mais">Ver mais</button></a>
//     </div>
//     <div id="bookdescription">
//       <p><span>Título: </span>${data.items[3].volumeInfo.title}</p>
//       <p><span>Autor: </span>${data.items[3].volumeInfo.authors}</p>
//       <p><span>Editora: </span>${data.items[3].volumeInfo.publisher}</p>
//       <p><span>Data da publicação: </span>${data.items[3].volumeInfo.publishedDate}</p>
//       <p><span>Gênero: </span>${data.items[3].volumeInfo.categories}</p>
//       <p><span>Descrição: </span>${data.items[3].volumeInfo.description}</p>
//     </div>
//   </div>

//   <div class="bookObject">
//     <div>
//       <a href=""><img src="${data.items[4].volumeInfo.imageLinks.thumbnail}" alt="Foto de capa do livro não disponível"></a>
//       <a href="./produto.html"><button id="ver-mais">Ver mais</button></a>
//     </div>
//     <div id="bookdescription">
//       <p><span>Título: </span>${data.items[4].volumeInfo.title}</p>
//       <p><span>Autor: </span>${data.items[4].volumeInfo.authors}</p>
//       <p><span>Editora: </span>${data.items[4].volumeInfo.publisher}</p>
//       <p><span>Data da publicação: </span>${data.items[4].volumeInfo.publishedDate}</p>
//       <p><span>Gênero: </span>${data.items[4].volumeInfo.categories}</p>
//       <p><span>Descrição: </span>${data.items[4].volumeInfo.description}</p>
//     </div>
//   </div>
//   `;
//   return data;
// }

// // funções que tratam os dados pesquisados no nome do livro e autor
// function concatWords() {
//   const wordsSearch = bookName.value.split(" ").join("+");
//   return wordsSearch;
// }

// function concatAuthorName() {
//   const nameAuthor = authorName.value.split(" ").join("+");
//   return nameAuthor;
// }

// searchBookButton.addEventListener("click", consultaApi);

const bookName = document.getElementById("bookname");
const authorName = document.getElementById("authorname");
const searchBookButton = document.getElementById("searchbook");
let infoBook = document.getElementById("infobook");

// Function to fetch data from the Google Books API
async function consultaApi() {
  let termosPesq = concatWords();
  let authorPesq = concatAuthorName();

  let url = `https://www.googleapis.com/books/v1/volumes?q=${termosPesq}+inauthor:${authorPesq}&maxResults=5&key=${key}`;

  const response = await fetch(url);
  const data = await response.json();

  // Check for missing image links and set a default image if necessary
  for (let i = 0; i < data.items.length; i++) {
    if (!data.items[i].volumeInfo.imageLinks) {
      data.items[i].volumeInfo.imageLinks = {
        thumbnail: "./assets/covernotavailable.png",
      };
    }
  }

  renderBooks(data.items);
  return data;
}

// Function to render books in the DOM
function renderBooks(books) {
  infoBook.innerHTML = books
    .map(
      (book) => `
    <div class="bookObject">
      <div>
        <a href="./produto.html" class="ver-mais-link" data-id="${book.id}">
          <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="Foto de capa do livro não disponível">
          <button class="ver-mais">Ver mais</button>
        </a>
      </div>
      <div class="bookdescription">
        <p><span>Título: </span>${book.volumeInfo.title}</p>
        <p><span>Autor: </span>${book.volumeInfo.authors}</p>
        <p><span>Editora: </span>${book.volumeInfo.publisher}</p>
        <p><span>Data da publicação: </span>${book.volumeInfo.publishedDate}</p>
        <p><span>Gênero: </span>${book.volumeInfo.categories}</p>
        <p><span>Descrição: </span>${book.volumeInfo.description}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// Function to concatenate book name search terms
function concatWords() {
  return bookName.value.split(" ").join("+");
}

// Function to concatenate author name search terms
function concatAuthorName() {
  return authorName.value.split(" ").join("+");
}

// Event listener for the search button
searchBookButton.addEventListener("click", consultaApi);

// Event listener for dynamically generated "ver mais" buttons
document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("ver-mais")) {
    event.preventDefault();
    const bookId = event.target.closest("a").getAttribute("data-id");
    const url = new URL(event.target.closest("a").href);
    url.searchParams.set("id", bookId);
    window.location.href = url.toString();
  }
});
