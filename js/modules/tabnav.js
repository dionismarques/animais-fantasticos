export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function tabContentAll(valor) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[valor].dataset.anime;
    tabContent[valor].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    // tabContentAll(0)
    tabMenu.forEach((item, valor) => {
      item.addEventListener('click', () => {
        tabContentAll(valor);
      });
    });
  }
}
