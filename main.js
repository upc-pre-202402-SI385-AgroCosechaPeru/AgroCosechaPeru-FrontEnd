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


document.querySelector(".more-info-toggle").addEventListener("click", (event) => {
  event.preventDefault(); 

  const extraInfo = document.querySelector(".extra-info");
  extraInfo.classList.toggle("hidden");

  
  event.target.textContent = extraInfo.classList.contains("hidden") ? "Ver más..." : "Ver menos...";
});
document.addEventListener('DOMContentLoaded', function() {
  const buttonContainer = document.getElementById('button-container');
  const chatContainer = document.getElementById('chat-container');
  const closeButton = document.querySelector('.close-button');

  buttonContainer.addEventListener('click', () => {
      buttonContainer.style.display = 'none';
      chatContainer.classList.add('show');
  });

  closeButton.addEventListener('click', () => {
      chatContainer.classList.remove('show');
      setTimeout(() => {
          buttonContainer.style.display = 'block';
      }, 300);
  });
});
