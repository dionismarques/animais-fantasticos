// import initAnimaNumeros from "./anima-numeros";

export default class Accordion {
  constructor(list) {
    this.accordion = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordion.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordion.length) {
      this.toggleAccordion(this.accordion[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
