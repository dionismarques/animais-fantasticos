import initAnimaNumeros from './anima-numeros.js';

export default function initAnimaisFetch() {
  async function fetchAnimais(url) {
    function createAnimal(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
      return div;
    }
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numeroGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numeroGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log('Erro');
    }
  }

  fetchAnimais('./animais-api.json');
}
