const modal = document.querySelector('.comentarioPopup');

function addComentario() {
    modal.classList.add('active');
}

function fecharPopup() {
    modal.classList.remove('active');
}

function enviarComentario() {
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== '') {
        const comentariosContainer = document.querySelector('.comentariosContainer');

        const novoComentario = document.createElement('div');
        novoComentario.classList.add('comentario');

        novoComentario.innerHTML = `
            <img src="./assets/profile2.png" alt="foto de perfil do usuário" class="fotoPerfil">
            <div class="conteudoComentario">
                <div class="usuarioComentario">leitor_coder</div>
                <div class="textoComentario">${commentText}</div>
            </div>
        `;

        comentariosContainer.appendChild(novoComentario);
        document.getElementById('commentText').value = ''; // Limpa o campo de texto
        fecharPopup(); // Fecha o popup
    }
}
