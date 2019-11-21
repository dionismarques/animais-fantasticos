export default function animationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const halthOfTheWindow = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - halthOfTheWindow) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    // function animaScroll() {
    //   sections.forEach((section) => {
    //     const sectionTop = section.getBoundingClientRect().top - halthOfTheWindow;
    //     if (sectionTop < 0)
    //       section.classList.add('ativo')
    //   })
    // }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
