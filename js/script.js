const menu = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const menuIcon = menu.querySelector("i");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuIcon.setAttribute("class", isOpen ? "close-line" : "menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuIcon.setAttribute("class", "menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".contain-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-content .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content .section-description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about-button", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".room-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service-list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
