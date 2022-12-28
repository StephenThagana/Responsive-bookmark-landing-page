"use strict";
////////////////////////////////
//BOOKMARK TABBED COMPONENT

const tabs = document.querySelectorAll(".bookmark__tab");
// bookmark container
const tabsContainer = document.querySelector(".features__menu-list");
const tabsContent = document.querySelectorAll(".menu__content-desc");

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".bookmark__tab");
  // Guard clause
  if (!clicked) return;
  // remove tab
  tabs.forEach(function (t) {
    t.classList.remove("bookmark__tab--active");
  });
  // remove bookmark area
  tabsContent.forEach(function (c) {
    c.classList.remove("bookmark__content-active");
  });
  // activete tab
  clicked.classList.add("bookmark__tab--active");

  // activate content area
  document
    .querySelector(`.bookmark__content--${clicked.dataset.tab}`)
    .classList.add("bookmark__content-active");
});

////////////////////////////////
// TABBED COMPONENT FOR THE FAQ SECTION

const tabLink = document.querySelectorAll(".faq-item");
const linkContent = document.querySelectorAll(".answer__content");
const header = document.querySelector(".header");
const btnNav = document.querySelector(".btn__mobile-nav");

tabLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".faq-item");

    const answContent = clicked
      .closest(".faq-box")
      .querySelector(".answer__content");
    answContent.classList.toggle("answer__content--active");

    linkContent.forEach(function (content) {
      if (content !== answContent)
        content.classList.remove("answer__content--active");
    });
  });
});

//////////////////////////////////////////////////
//MENU NAVIGATION
btnNav.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});

///////////////////////////////////////////////
//STICKY NAVIGATION: intersecrion observer api

const sectionHome = document.querySelector(".section__home");
const bodyEl = document.querySelector("body");

const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    bodyEl.classList.add("sticky");
  } else {
    bodyEl.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

observer.observe(sectionHome);
