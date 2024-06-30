function changeImage(event) {
    const img = event.target;
    img.style.opacity = 0.5; // Start fade-out
    setTimeout(() => {
        const tempSrc = img.src;
        img.src = img.getAttribute('data-alt-src');
        img.setAttribute('data-alt-src', tempSrc);
        img.style.opacity = 1; // Start fade-in
    }, 500); // Duration matches the CSS transition duration
}

document.querySelectorAll('img[data-alt-src]').forEach(img => {
    img.addEventListener('touchstart', changeImage);
    img.addEventListener('mouseenter', changeImage);
    img.addEventListener('touchend', changeImage);
    img.addEventListener('mouseleave', changeImage);
});


const container = document.getElementById('content-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
    container.scrollLeft -= 300;
});

rightArrow.addEventListener('click', () => {
    container.scrollLeft += 300;
});
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('#software section img');

    function checkVisibility() {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                img.classList.add('visible');
            } else {
                img.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

