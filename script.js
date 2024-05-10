// função para o botão switch do header
let switchState = false;

function toggleSwitch() {
  switchState = !switchState;
  const switchButton = document.getElementById('switchButton');

  if (switchState) {
    switchButton.classList.remove('off');
    switchButton.classList.add('on');
    // Redireciona para outra URL quando o botão é ligado
    window.location.href = './indexReviews.html';
  } else {
    switchButton.classList.remove('on');
    switchButton.classList.add('off');
    // Redireciona para outra URL quando o botão é desligado
    window.location.href = "./index.html" ;
  }
}
