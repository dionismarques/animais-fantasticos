export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
  // console.log(funcionamento)
}
// const agora = new Date();
// const futuro = new Date('Dec 31 2019 23:59')
// // 0 = domingo, 1 = segunda
// console.log(agora.getDay())
// console.log(futuro)
// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000)
//   // horas
//   // return tempo / (60 * 60 * 1000)
// }
// const diasAgora = transformarDias(agora.getTime())
// const diasFuturo = transformarDias(futuro.getTime())
// console.log(diasFuturo - diasAgora)
