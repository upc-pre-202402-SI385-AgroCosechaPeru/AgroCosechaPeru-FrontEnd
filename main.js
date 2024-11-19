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

// Botón para limpiar parámetros
document.getElementById('limpiar-tarjetas').addEventListener('click', () => {
  const form = document.getElementById('soil-analysis-form');
  
  // Limpiar todos los campos del formulario
  form.reset();
  alert("Parámetros limpiados correctamente.");
});

// Manejo del envío del formulario
document.getElementById('soil-analysis-form').addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
  
  // Recopilar los datos del formulario
  const data = {
    ph: document.getElementById('ph').value,
    nitrogen: document.getElementById('nitrogen').value,
    phosphorus: document.getElementById('phosphorus').value,
    potassium: document.getElementById('potassium').value,
    cultivo: document.getElementById('cultivo').value,
    notas: document.getElementById('notas').value
  };
  
  console.log("Datos enviados:", data);
  alert("Formulario enviado correctamente.");
});

// Funcionalidad para expandir/colapsar el formulario completo
const toggleFormButton = document.getElementById('toggle-form');
const formContainer = document.getElementById('form-container');

// El formulario comienza oculto y se muestra al hacer clic
toggleFormButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que la página se desplace al menú inicial.

  if (formContainer.classList.contains('hidden')) {
    formContainer.classList.remove('hidden');
    toggleFormButton.textContent = 'Ver menos...';
  } else {
    formContainer.classList.add('hidden');
    toggleFormButton.textContent = 'Ver más...';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('login-btn');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', function() {
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.add('hidden');
    }
  });
});

const toggleCropRecommendations = document.getElementById('toggle-crop-recommendations');
const cropRecommendationsContainer = document.getElementById('crop-recommendations-container');

toggleCropRecommendations.addEventListener('click', (event) => {
  event.preventDefault();

  const isHidden = cropRecommendationsContainer.classList.contains('hidden');
  cropRecommendationsContainer.classList.toggle('hidden');
  toggleCropRecommendations.textContent = isHidden ? 'Ver menos...' : 'Ver más...';
});

document.getElementById('clear-recommendation-notes').addEventListener('click', () => {
  document.getElementById('crop-notes').value = '';
  alert('Notas limpiadas correctamente.');
});

document.getElementById('save-recommendation-notes').addEventListener('click', () => {
  const notes = document.getElementById('crop-notes').value;
  alert(`Notas guardadas: ${notes}`);
});

