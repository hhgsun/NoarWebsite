window.onscroll = scrollCtrl;

// sticky header
var header = document.getElementById("header");
var headerContent = document.getElementById("header-content");
var sticky = headerContent.offsetTop;

// active nav menu
let mainNavLinks = document.querySelectorAll("nav.main-menu ul li a");

function scrollCtrl() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }

  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
