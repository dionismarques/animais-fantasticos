import ScrollSmooth from './modules/scroll.js';
import initTabNav from './modules/tabnav.js';
import initAccordion from './modules/accordion.js';
import initModal from './modules/modal-1.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimaisFetch from './modules/fetch-animais.js';
import initBitcoinFetch from './modules/fetch-bitcoin.js';
import initAnimationScroll from './modules/animascroll.js';

// console.log(tooltip);
const scrollsmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollsmooth.init();

initTabNav();
initAccordion();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();
initAnimationScroll();

// import $ from 'jquery';
// import _ from 'lodash';

// $('nav').hide();

// const diferenca = _.difference(['Banana', 'Uva'], ['Banana', 'Morango']);
// console.log(diferenca);
