import ScrollSmooth from './modules/scroll.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal-1.js';
import initTooltip from './modules/tooltip.js';
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

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBitcoinFetch();
initAnimationScroll();
