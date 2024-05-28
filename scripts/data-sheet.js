var avaliacoes = [
  {
    username: "analuiza",
    livro: "harry potter e o prisioneiro de azkaban",
    nota: 3,
    comentario:
      "Livro muito muito bom, com muitos detalhes igual aos anteriores, meu livro favorito da saga, sem defeitos ! Muito tranquilo de ler, Harry Potter sempre vai ser um clássico",
  },
  {
    username: "pedrovictor",
    livro: "O Problema dos Três Corpos",
    nota: 5,
    comentario:
      "Excelente livro para aqueles q gostam de um bom sci-fi. A narrativa sai do eixo América-Europa o que causa um desconforto em quem está acostumado a ler apenas propaganda desses dois continentes e suscita algumas teorias da conspiração e fake-news q seduzem desavisados ou mal intencionados. O começo é bem arrastado mas do meio para o final é muito instigante e surpreendente. Super recomendo.",
  },
  {
    username: "moisessouza",
    livro: "Vidas Secas",
    nota: 2,
    comentario:
      "Eu particularmente sou muito ligado a esse livro. Ele é para mim de certa forma nostálgico pois me lembra a minha infância, passada em uma fazenda no Norte de Minas Gerais, uma região semiárida muito parecida com o Nordeste representado no livro. Meu pai era um agregado e trabalhava como lavrador, situação muito parecida com a de Fabiano e sua família .Ótima obra para conhecer melhor um outro Brasil, talvez ainda desconhecido por muitos.",
  },
  {
    username: "ryan",
    livro: "O Menino do Pijama Listrado",
    nota: 4,
    comentario:
      "Incrível!Apesar de ser um livro leve que retrata sobre o tema, é capaz de impactar e emocionar o leitor de forma intensa. Livro impactante e um dos meus favoritos!!!",
  },
  {
    username: "giuliagomes",
    livro: "A Menina que Roubava Livros",
    nota: 5,
    comentario:
      "melhor livro que já  li na vida! é muito enriquecedor e a riqueza de detalhes torna a leitura muito fluida e gostosa! recomendo demais. Inclusive, extremamente necessário, tendo em vista o tempo que vivemos....",
  },
];

const apiKey = "AIzaSyDRQMcDdHY1vkISHX-hGhDsjt3Mv2LDyaY";

async function fetchBookData(livro) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
      livro
    )}&key=${apiKey}`
  );
  const data = await response.json();
  if (data.items && data.items.length > 0) {
    const book = data.items[0].volumeInfo;
    return {
      title: book.title,
      image: book.imageLinks
        ? book.imageLinks.thumbnail
        : "https://via.placeholder.com/100",
    };
  }
  return {
    title: livro,
    image: "https://via.placeholder.com/100",
  };
}

function generateStars(nota) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < nota) {
      stars += '<img src="./assets/star-fill.svg" alt="star">';
    } else {
      stars += '<img src="./assets/star.svg" alt="star">';
    }
  }
  return stars;
}

async function generateReviews(avaliacoes) {
  const reviewsContainer = document.getElementById("reviews");
  for (let avaliacao of avaliacoes) {
    const bookData = await fetchBookData(avaliacao.livro);
    const reviewHTML = `
        <section>
            <div class="infobook">
                <p>${bookData.title}</p>
                ${generateStars(avaliacao.nota)}
                <div class="bookimage">
                    <img src="${bookData.image}" alt="Book image">
                </div>
            </div>
    
            <div class="avaliacao">
                <div class="titledescription">
                    <img src="./assets/profile2.png" alt="">
                    <p>${avaliacao.username}</p>
                </div>            
                <p>${avaliacao.comentario}</p>
            </div>
        </section>
        `;
    reviewsContainer.innerHTML += reviewHTML;
  }
}

generateReviews(avaliacoes);
