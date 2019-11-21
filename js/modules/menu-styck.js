//*******************************//
//********** EU CRIEI ***********//
//*******************************//
function styckyMenu() {
  const menu = document.querySelector('.js-menu')

  const menuHeight = menu.getBoundingClientRect().top; //58
  function testet() {
    const scrollTop = window.scrollY;
    if (scrollTop >= menuHeight) {
      menu.classList.add('ativo');
      menu.children[0].classList.add('ativo');
    } else {
      menu.classList.remove('ativo');
      menu.children[0].classList.remove('ativo');
    }
    // console.log(scrollTop)
  }
  // console.log(menuHeight)
  window.addEventListener('scroll', testet)
}
// styckyMenu()