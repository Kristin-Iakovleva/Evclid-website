//бургер
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
  if (!burger.classList.contains('burger--close')) {
    document.body.style.overflow = 'hidden';
    burger.classList.add('burger--close');
    burger.setAttribute('aria-label', 'Закрыть меню');
    menu.classList.add('nav--active');
  } else {
    document.body.style.overflow = 'initial';
    burger.classList.remove('burger--close');
    burger.setAttribute('aria-label', 'Открыть меню');
    menu.classList.remove('nav--active');
  }
});

//лупа с поиском
const searchOpen = document.querySelector('.search__btn');
const search = document.querySelector('.search__form');
const searchClose = document.querySelector('.search__close');


searchOpen.addEventListener('click', function () {
  search.classList.add('search__show')
})

searchClose.addEventListener('click', function () {
  search.classList.remove('search__show')
})

//слайдер
const slider = document.querySelector('.container');
const swiper = new Swiper(".hero__swiper", {

  pagination: {
    el: ".hero__pagination",
    clickable: true
  },

  loop: true,
  autoplay: {
    delay: 5000,
  },

  // area-label
  a11y: {
    paginationBulletMessage: 'Перейти к следующему слайду {{index}}',
  }
});

//табы
let tabsBtn = document.querySelectorAll('.how__tabs__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs__btn--active')});
    e.currentTarget.classList.add('tabs__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

//аккордеон
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.faq__item');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.faq__btn');
      const content = self.querySelector('.faq__btn__descr');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    });
  });

});
