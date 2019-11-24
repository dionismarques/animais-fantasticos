import ScrollSmooth from './modules/scroll.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import Accordion from './modules/accordion.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

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

const scrollanima = new ScrollAnima('[data-anime="scroll"]');
scrollanima.init();

const dropdownmenu = new DropdownMenu('[data-dropdown]');
dropdownmenu.init();

const menumobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menumobile.init();

initFuncionamento();

fetchAnimais('././animais-api.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.preco-btc');
