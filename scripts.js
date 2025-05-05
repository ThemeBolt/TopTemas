const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('show');
      toggleButton.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    
