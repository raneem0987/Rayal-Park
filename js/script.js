const menu = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const menuicons = menu.querySelector("i");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const Open = navLinks.classList.contains("open");
  menuicons.setAttribute("class", Open ? "close-line" : "menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuicons.setAttribute("class", "menu-line");
});

const scrolloption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal("header", {
  ...scrolloption,
});

ScrollReveal().reveal(".header-container p", {
  ...scrolloption,
});

ScrollReveal().reveal(".header-container h1", {
  ...scrolloption,
  delay: 500,
});

ScrollReveal().reveal(".contain-image img", {
  ...scrolloption,
  origin: "left",
});

ScrollReveal().reveal(".about-content .section-subheader", {
  ...scrolloption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .section-header", {
  ...scrolloption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content .section-description", {
  ...scrolloption,
  delay: 1500,
});

ScrollReveal().reveal(".about-button", {
  ...scrolloption,
  delay: 2000,
});

ScrollReveal().reveal(".room-card", {
  ...scrolloption,
  interval: 500,
});

ScrollReveal().reveal(".service-list li", {
  ...scrolloption,
  interval: 500,
  origin: "right",
});
