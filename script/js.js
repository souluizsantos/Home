const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // anima o ícone
  menu.classList.toggle('active');      // abre/fecha o menu
});


/*-----------------------------------------------------------------*/


document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'trail';
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);

  // remove o ponto depois da animação
  setTimeout(() => {
    trail.remove();
  }, 800);
});

/*-----------------------------------------------------------------*/





