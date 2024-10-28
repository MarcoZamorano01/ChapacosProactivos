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

            // Add click event for each carousel item to redirect
            this.items.forEach((item, index) => {
                item.querySelector('a').addEventListener('click', (event) => {
                    // Permitir el comportamiento predeterminado del enlace
                    event.stopPropagation();
                });
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
