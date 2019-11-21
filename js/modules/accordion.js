export default function initAccordion() {
  const accordion = document.querySelectorAll('[data-anima="accordion"] dt');
  const activeClass = 'ativo';

  function addActive() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  if (accordion.length) {
    accordion[0].classList.toggle(activeClass);
    accordion[0].nextElementSibling.classList.toggle(activeClass);

    accordion.forEach((item) => {
      item.addEventListener('click', addActive);
    });
  }
}
