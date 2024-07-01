let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    
    const transformValue = -currentIndex * 100;
    slides.style.transform = `translateX(${transformValue}%)`;
}

setInterval(showNextSlide, 3000);
