// carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const carousel = {
        currentSlide: 0,
        items: document.querySelectorAll('.carousel-item'),
        indicators: document.querySelectorAll('.indicator'),
        totalSlides: document.querySelectorAll('.carousel-item').length,
        
        init() {
            // Add event listeners
            document.querySelector('.prev-button').addEventListener('click', () => this.prevSlide());
            document.querySelector('.next-button').addEventListener('click', () => this.nextSlide());
            
            // Add indicator click events
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });

            // Start autoplay
            this.startAutoplay();
        },

        updateSlide() {
            // Remove active class from all slides and indicators
            this.items.forEach(item => item.classList.remove('active'));
            this.indicators.forEach(indicator => indicator.classList.remove('active'));

            // Add active class to current slide and indicator
            this.items[this.currentSlide].classList.add('active');
            this.indicators[this.currentSlide].classList.add('active');
        },

        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
            this.updateSlide();
        },

        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            this.updateSlide();
        },

        goToSlide(index) {
            this.currentSlide = index;
            this.updateSlide();
        },

        startAutoplay() {
            setInterval(() => this.nextSlide(), 5000); // Change slide every 5 seconds
        }
    };

    // Initialize carousel
    carousel.init();
});

// Selecciona el botón de cambio de idioma
const botonCambioIdioma = document.getElementById("boton-cambio-idioma");

// Variable para controlar el idioma actual (puede ser "es" para español o "en" para inglés)
let idiomaActual = "es";

// Función para cambiar el idioma
function cambiarIdioma() {
    // Cambia el idioma de los textos según el idioma actual
    if (idiomaActual === "es") {
        document.querySelector("h2.title").textContent = "Air Quality";
        document.querySelector("p").textContent = "Air quality refers to the amount of pollutants in the atmosphere. High levels of pollution can affect respiratory and cardiovascular health.";
        idiomaActual = "en";
    } else {
        document.querySelector("h2.title").textContent = "¿Calidad del Aire?";
        document.querySelector("p").textContent = "La calidad del aire se refiere a la cantidad de contaminantes presentes en la atmósfera. Los altos niveles de contaminación pueden afectar la salud respiratoria y cardiovascular.";
        idiomaActual = "es";
    }
}

// Agrega el evento de clic al botón
botonCambioIdioma.addEventListener("click", cambiarIdioma);
