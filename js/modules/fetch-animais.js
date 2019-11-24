import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria div contendo informação
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preencha cada animal no DOM
  const numeroGrid = document.querySelector(target);
  function prencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }

  // Anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais atraves de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Apos a transformação de json, ativa as funções
      // para preencher e animar os numeros
      animaisJSON.forEach((animal) => prencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
    return criarAnimais();
  }
}
