"use strict";

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
  const book = document
    .querySelector(`.bookmark__content--${clicked.dataset.tab}`)
    .classList.add("bookmark__content-active");
});
