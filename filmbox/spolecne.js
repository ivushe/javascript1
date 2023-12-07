
const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');

menuTlacitko.addEventListener('click', () => {

  menuPolozky.classList.toggle('show');


  const isMenuOpen = menuPolozky.classList.contains('show');
  menuTlacitko.innerHTML = isMenuOpen
    ? '<i class="fas fa-xmark"></i>'
    : '<i class="fas fa-bars"></i>';
});
