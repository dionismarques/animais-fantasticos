export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutacao
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM, com um numero em seu texto
  // e incrementa a partir de 0 ate o ponto final.
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 50 * Math.random());
  }

  // Ativa incrementar numero para cada
  // numero selecionado do DOM
  animaNumeros() {
    console.log('oi');
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }


  // funcao que ocorre qundoo a mutacao ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  
  // Adiciona o MutationObserver para verificar
  // quando a classe ativo é adionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
