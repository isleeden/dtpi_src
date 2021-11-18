import $ from "jquery";
window.jQuery = $;
window.$ = $;

document.addEventListener("DOMContentLoaded", () => {
  let header = $(".header-fixed");
  let main = $("main");
  let fixedMedia = $(".fixed-media");

  function changeMenu() {
    if (window.pageYOffset + header.height() > main.offset().top) {
      header.addClass("scrolled");
      fixedMedia.addClass("scrolled");
      fixedMedia.removeClass("active");
    } else {
      header.removeClass("scrolled");
      fixedMedia.removeClass("scrolled");
    }
  }

  function showWhenInMiddle(elem) {
    if (
      elem.offset().top - header.offset().top + elem.height() / 2 <
      window.innerHeight / 2 + 68
    ) {
      elem.addClass("scrolled");
    } else {
      elem.removeClass("scrolled");
    }
  }

  function changeAbout() {
    let about = $(".section-about");
    showWhenInMiddle(about);
  }

  function changeSecondAbout() {
    let secondAbout = $(".section-about-second");
    showWhenInMiddle(secondAbout);
  }

  window.addEventListener("scroll", changeMenu);
  window.addEventListener("scroll", changeAbout);
  window.addEventListener("scroll", changeSecondAbout);

  // Smooth Scroll

  $('a[href^="#"').on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - header.height() + 12,
      },
      10
    );
    return false;
  });

  // Change Language

  $(".brand-bar__language").on("click", function (e) {
    $(this).toggleClass("active");
  });

  // media buttons

  $(".fixed-media-button").on("click", function (e) {
    fixedMedia.toggleClass("active");
  });

  $(window).on("click", function (e) {
    if (!document.querySelector(".fixed-media").contains(e.target)) {
      fixedMedia.removeClass("active");
    }
  });

  // hover kafedra link

  let kafedraRefs = document.querySelectorAll(".kafedra-item");
  let cardContainers = document.querySelectorAll(".card-container");

  cardContainers.forEach((item) => {
    item.addEventListener("mouseover", function () {
      kafedraRefs[item.dataset.key].classList.add("hover");
    });
    item.addEventListener("mouseout", function () {
      kafedraRefs[item.dataset.key].classList.remove("hover");
    });
  });

  // adaptive menu

  $(".adaptive-menu-btn").on("click", function (e) {
    $(".brand-bar").toggleClass("active");
  });
});
