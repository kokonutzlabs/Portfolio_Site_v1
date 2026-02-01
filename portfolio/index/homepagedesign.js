document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = [1, 1];
    let slideId = ["ArtSlides", "NailSlides"];

    function showSlides(n, no) {
        const slides = document.getElementsByClassName(slideId[no]);
        if (slides.length === 0) return;

        if (n > slides.length) { slideIndex[no] = 1; }
        if (n < 1) { slideIndex[no] = slides.length; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex[no] - 1].style.display = "block";
    }

    window.plusSlides = function(n, no) {
        showSlides(slideIndex[no] += n, no);
    };

    window.currentSlide = function(n, no) {
        slideIndex[no] = n;
        showSlides(n, no);
    };

    // Initial display
    showSlides(slideIndex[0], 0);
    showSlides(slideIndex[1], 1);
});
