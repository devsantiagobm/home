//loader
const body = document.querySelector('body');
const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
  loader.classList.add('loader--active');
  if(loader.classList.contains('loader--active')){
    body.classList.remove('body__active')
  }
})


// navbar
const navbarBtn = document.querySelector('.header__navBtn');
const navBarBtnIcon = document.querySelector('.navBtn__icon');
let stateIcon = false;
const nav = document.querySelector('.nav__list')
const circleShadow = document.querySelector('.header__circle');


navbarBtn.addEventListener('click', () => {

  if (btnLangIcon.classList[1] == "lang__icon--uk") {
    if (!stateIcon) {
      stateIcon = true;
      navBarBtnIcon.src = "../multimedia/headerImages/navBarIconDesactive.svg";
    } else {
      stateIcon = false;
      navBarBtnIcon.src = "../multimedia/headerImages/navBarIcon.svg";
    }
  }
  if (btnLangIcon.classList[1] == "lang__icon--es") {
    if (!stateIcon) {
      stateIcon = true;
      navBarBtnIcon.src = "multimedia/headerImages/navBarIconDesactive.svg";
    } else {
      stateIcon = false;
      navBarBtnIcon.src = "multimedia/headerImages/navBarIcon.svg";
    }
  }
  nav.classList.toggle('nav__list--active');
  circleShadow.classList.toggle('header__circle--active');
  body.classList.toggle('body__active')

})

// slider
window.addEventListener('load', () => {
  new Glider(document.querySelector('.slider__list'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.slider__indicator',
    duration: 1,
    draggable: true,
    arrows: {
      prev: '.slider__btn--back',
      next: '.slider__btn--next'
    },
    responsive: [
      {
        breakpoint: 572,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          duration: 1
        }
      },
      {
        breakpoint: 812,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 1
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          duration: 1
        }
      }
    ]
  });
})

// preguntas frecuentes

const preguntas = document.querySelectorAll('.question__items');

preguntas.forEach((pregunta) => {
  pregunta.addEventListener(('click'), e => {
    e.currentTarget.classList.toggle('active');

    const respuesta = pregunta.querySelector('.question__text');
    const alturaReal = respuesta.scrollHeight;

    if (!respuesta.style.maxHeight) {
      respuesta.style.maxHeight = alturaReal + "px";
    } else {
      respuesta.style.maxHeight = null;
    }

    preguntas.forEach((elemento) => {
      if (pregunta !== elemento) {
        elemento.classList.remove('active');
        elemento.querySelector('.question__text').style.maxHeight = null;
      }
    })
  })
})

// idioma

const btnLang = document.querySelector('.lang');
const btnLangIcon = document.querySelector('.lang__icon')

btnLang.addEventListener('click', () => {
  if (btnLangIcon.classList[1] == "lang__icon--uk") {
    location.href = "../"
  }

  if (btnLangIcon.classList[1] == "lang__icon--es") {
    location.href = "es"
  }
})

