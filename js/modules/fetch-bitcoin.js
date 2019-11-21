export default function initBitcoinFetch() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btnPreco = document.querySelector('.preco-bth');
      btnPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
