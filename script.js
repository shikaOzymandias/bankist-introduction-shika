'use strict';

///////////////////////////////////////
// Modal window
// const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScroll = document.querySelector('.btn--scroll-to');
const sec1 = document.querySelector('#section--1');
const h1= document.querySelector('h1');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// button Scrolliing
btnScroll.addEventListener('click',function (e){
  const s1coords = sec1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // window.scrollTo(s1coords.left + window.pageXOffset , s1coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left:s1coords.left + window.pageXOffset,
  //   top:s1coords.top + window.pageYOffset,
  //   behavior:'smooth',
  // });
  sec1.scrollIntoView({behavior:'smooth'});
});
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el){
//   el.addEventListener('click',function (e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   });
// });
document.querySelector('.nav__links').addEventListener('click',function (e){
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click',function (e){
  const clicked = e.target.closest('.operations__tab');

  console.log(clicked);

  // Guard clause
  if (!clicked) return;
  // Deleting Tab
  tabs.forEach(tb=> tb.classList.remove('operations__tab--active'));
  tabsContent.forEach(tb => tb.classList.remove('operations__content--active'));
  // Active Tab
  clicked.classList.add('operations__tab--active');

  // Activate Contents

  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
});

//Menu Fde Animation
// const nav = document.querySelector('.nav');

const eventHandler = function (e){
  if (e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    // console.log(link);
    // console.log(siblings);
    siblings.forEach(el=>{
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover',eventHandler.bind(0.5));

nav.addEventListener('mouseout',eventHandler.bind(1));

// Sticky nav
// const sec1Initial = sec1.getBoundingClientRect();
//
// window.addEventListener('scroll',function (){
//   // console.log(window.scrollY);
//   // console.log(sec1Initial.top);
//   if (window.scrollY > sec1Initial.top ){
//     nav.classList.add('sticky');
//   }else {
//     nav.classList.remove('sticky');
//   }
// });



///////////////

//////////////
///////////

//Btn Cockie
// const massage = document.createElement('div');
// massage.classList.add('cookie-message');
// massage.innerHTML = 'we use cockies as a snack but here for improving our analytic.<button class="' +
//     'btn btn--close-cookie">Alright .</button>';
// header.append(massage);
//
// document.querySelector('.btn--close-cookie').addEventListener('click',function (){
//   massage.remove();
// });

//Styles
// massage.style.backgroundColor = '#37383d';
// massage.style.width = '120%';
//
// massage.style.height =
//     Number.parseFloat(getComputedStyle(massage).height, 10) + 50 + 'px';
//
// document.documentElement.style.setProperty('--color-primary','purple');

// attribute
// const logo = document.querySelector('.nav__logo');
//
// console.log(logo);
// console.log(logo.src);
// console.log(logo.alt);

// non Standard

// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('loc','IR');
// console.log(logo.getAttribute('loc'));

//


// const h1 = document.querySelector('h1');
//
// h1.addEventListener('mouseenter', function (e){
//
//   alert('Great . keep Swiming ...');
//
// });

//
// const alet = function (e) {
//   alert('Great . keep Swiming ...');
//   h1.removeEventListener('mouseenter',alet);
// };
//
// h1.addEventListener('mouseenter',alet);

// const randomInt = (min , max) =>
//   Math.floor(Math.random() * (max - min + 1) + min );
//
// const randomColor = () =>
//     `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
//
// document.querySelector('.nav__link').addEventListener('click',function (e){
//   this.style.backgroundColor = randomColor(0,255);
//   console.log('link', e.target , this);
// });
//
// document.querySelector('.nav__links').addEventListener('click',function (e){
//   this.style.backgroundColor = randomColor(0,255);
//   console.log('links', e.target,this);
// });
//
// document.querySelector('.nav').addEventListener('click',function (e){
//   this.style.backgroundColor = randomColor(0,255);
//   console.log('nav', e.target,this);
// });


// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children[0]);
// console.log(header.lastElementChild);
// header.lastElementChild.style.color = 'red';
// console.log(h1.parentNode);

// h1.closest('.header').style.background = 'var(--gradient-primary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.closest('.header'));
// console.log(h1.previousElementSibling);
// console.log(h1.previousSibling);
// console.log([...h1.parentElement.children]);
// console.log(h1.closest('.header').children);

// const obsCallBack = function (entries , observer){
//   entries.forEach(entry =>{
//     console.log(entry)
// });
// };
// const obsOption = {
//   root : null,
//   threshold : 0.01,
// };
// const observer = new IntersectionObserver(obsCallBack,obsOption);
// observer.observe(sec1);
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
// reveal Section
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries,observer){
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection , {
  root:null,
  threshold: 0.15,
});

allSection.forEach(section=>{
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy Loading

const imgTargets = document.querySelectorAll('img[data-src]');

const loadingImg = function (entries,observer){
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load',function (){
    entry.target.classList.remove('lazy-img');
  });
  
};
const imgObserver = new IntersectionObserver(loadingImg , {
  root:null,
  threshold : 0,
  rootMargin : '200px',
});
imgTargets.forEach(img=> imgObserver.observe(img) );

// Slider
const slider= function (){
  const slides = document.querySelectorAll('.slide');

  const btnSliderRight = document.querySelector('.slider__btn--right');
  const btnSliderLeft = document.querySelector('.slider__btn--left');
  let curSlide = 0 ;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector('.dots');
  // Functions

  const createDots = function (){
    slides.forEach(function (_,i){
      dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`)
    });
  };


  const activeDot = function (slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove
    ('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  };

  const goToSlide = function (slide){
    slides.forEach(
        (s,i)=> (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };


  const nextSlide = function (){
    if (curSlide === maxSlide - 1){
      curSlide = 0;
    }else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };
  const prevSlide = function (){
    if (curSlide === 0){
      curSlide = maxSlide - 1;
    }else {
      curSlide--;
    }

    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const init = function (){
    goToSlide(0); //instead of line
    createDots();
    activeDot(0);
  };
  init();
  // event Handler
  btnSliderRight.addEventListener('click',nextSlide);
  btnSliderLeft.addEventListener('click',prevSlide);

  document.addEventListener('keydown',function (e){
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click',function (e){
    if (e.target.classList.contains('dots__dot')){
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};
slider();