import outSideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Define touchstart e clique como argumento padrão 
    // de events caso o usuario não defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.activeClass = 'ativo';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

// Ativa o dropdown e adiciona
// a função que observa o clique junto dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdownmenu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
