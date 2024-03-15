const menu = document.querySelector('.app-bar__navigation');
menu.addEventListener('click', (e) => {
  const targetMenu = e.target;
  if (targetMenu.classList.contains('menu__link')) {
    const menuLinkActive = document.querySelector('ul li a.active');
    if (menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute(
      'href',
    )) {
      menuLinkActive.classList.remove('active');
    }
    targetMenu.classList.add('active');
  }
});
