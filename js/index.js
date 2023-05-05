let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".header__nav-link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");

  document.body.classList.toggle("stop-scroll");
});

// !BURGER
menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});

const container = document.querySelector(".container");
const swiper = new Swiper(".hero__swiper", {
  // Default parameters

  speed: 300,
  pagination: {
    el: ".hero__pagination",
    type: "bullets",
    clickable: true,
  },
});

// !TABS
let tabsBtn = document.querySelectorAll(".tabs__btn-link");
let tabsItem = document.querySelectorAll(".tabs__container");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("tabs__btn-link--active");
    });
    e.currentTarget.classList.add("tabs__btn-link--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("tabs__container--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs__container--active");
  });
});

// !ACCORDION
document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion__list", {
    duration: 700,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
    showMultiple: false,
    openOnInit: [0],
    collapse: true,
  });
});

// !Search
document
  .querySelector(".form-btn__open")
  .addEventListener("click", function () {
    document.querySelector(".form").classList.add("form__active");
    this.classList.add("active");
  });
document.querySelector(".form-close").addEventListener("click", function () {
  let form = document.querySelector(".form");
  form.classList.remove("form__active");
  form.querySelector("input").value = "";
  document.querySelector(".form-btn__open").classList.remove("active");
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active");
  }
});
