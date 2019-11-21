export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToTop(event) {
    event.preventDefault();
    // console.log(this.getAttribute('href'));
    // console.log(event.currentTarget.getAttribute('href'));
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // const topo = section.offsetTop;
    // console.log(event.target.getAttribute('href'));
    // console.log(event.target.attributes);
    // console.log(event.currentTarget.attributes);
    // console.log(event);
    // console.log(section.offsetTop)
    // window.scrollTo(0, topo)
    // FORMA ALTENATIVA
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // });
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  if (linksInternos.length) {
    linksInternos.forEach((item) => {
      item.addEventListener('click', scrollToTop);
    });
  }
  // console.log(linksInternos)
}
