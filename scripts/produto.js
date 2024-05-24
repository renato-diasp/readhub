const modal = document.querySelector('.comentarioPopup')


function addComentario() {
    modal.classList.add('active')
  }
  
  function fecharPopup() {
    modal.classList.remove('active')
  }