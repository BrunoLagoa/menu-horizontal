const navbar = document.querySelector('.navbar');
const searchBox = document.querySelector('.search-box .bx-search');

searchBox.addEventListener('click', () => {
  navbar.classList.toggle('showInput');

  if (navbar.classList.contains('showInput')) {
    searchBox.classList.replace('bx-search', 'bx-x');
  } else {
    searchBox.classList.replace('bx-x', 'bx-search');
  }
});

const menuOpenBtn = document.querySelector('.navbar .bx-menu');
const menuCloseBtn = document.querySelector('.nav-links .bx-x');
const navLinks = document.querySelector('.nav-links');

menuOpenBtn.addEventListener('click', () => {
  navLinks.style.left = '0';
});

menuCloseBtn.addEventListener('click', () => {
  navLinks.style.left = '-100%';
});

const htmlCssArrow = document.querySelector('.html-css-arrow');
htmlCssArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show1');
});

const moreArrow = document.querySelector('.more-arrow');
moreArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show2');
});

const jsArrow = document.querySelector('.js-arrow');
jsArrow.addEventListener('click', () => {
  navLinks.classList.toggle('show3');
});
