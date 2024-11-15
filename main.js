const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

ScrollReveal().reveal(".header__container .btn", {
 
  delay: 1000,  
  distance: '0px', 
  duration: 500, 
  easing: 'ease-in-out'  // Estilo de animación
 
});

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".btn", {
  ...scrollRevealOption,
  delay: 1000,
});


// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Mostrar u ocultar los detalles adicionales al hacer clic en "Ver más..."
document.querySelector(".more-info-toggle").addEventListener("click", (event) => {
  event.preventDefault();  // Prevenir el comportamiento predeterminado del enlace

  const extraInfo = document.querySelector(".extra-info");
  extraInfo.classList.toggle("hidden");

  // Cambiar el texto del enlace entre "Ver más..." y "Ver menos..."
  event.target.textContent = extraInfo.classList.contains("hidden") ? "Ver más..." : "Ver menos...";
});

document.querySelector('.toggle-button').addEventListener('click', function() {
  const weatherSection = document.querySelector('.weather-section');
  weatherSection.classList.toggle('expanded');
});
