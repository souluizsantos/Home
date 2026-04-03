const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // anima o ícone
  menu.classList.toggle('active');      // abre/fecha o menu
});
