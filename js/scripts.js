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
