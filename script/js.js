document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Função para abrir/fechar o menu
    const toggleMenu = (e) => {
        // e.preventDefault() evita que o navegador trate o toque como clique duplo
        if (e.type === 'touchstart') e.preventDefault(); 
        menu.classList.toggle('active');
        console.log("Menu alternado!");
    };

    if (hamburger && menu) {
        // Escuta tanto o clique quanto o toque no celular
        hamburger.addEventListener('click', toggleMenu);
        hamburger.addEventListener('touchstart', toggleMenu);
    }

    // --- EFEITO DE RASTRO (Apenas para Computador) ---
    // Verificamos se o dispositivo NÃO é mobile antes de rodar o rastro
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            const trail = document.createElement('div');
            trail.className = 'trail'; 
            
            trail.style.left = e.pageX + 'px';
            trail.style.top = e.pageY + 'px';
            
            document.body.appendChild(trail);

            setTimeout(() => {
                trail.remove();
            }, 800);
        });
    }
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





