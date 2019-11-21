import outSideClick from './outside-click.js';

export default function initDropdownMenu() {
  const dropMenu = document.querySelectorAll('[data-dropdown]');

  function handreClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  dropMenu.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handreClick);
    });
  });
}
