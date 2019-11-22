import ScrollSmooth from './modules/scroll.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimaisFetch from './modules/fetch-animais.js';
import initBitcoinFetch from './modules/fetch-bitcoin.js';
import initAnimationScroll from './modules/animascroll.js';
import Accordion from './modules/accordion.js';

// console.log(tooltip);
const scrollsmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollsmooth.init();

const accordion = new Accordion('[data-anima="accordion"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();
initAnimationScroll();
