// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    const hiddenSections = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else {
                entry.target.classList.remove('revealed'); // Reset when not in viewport
            }
        });
    }, { threshold: 0.1 });

    hiddenSections.forEach(section => observer.observe(section));
});

// Typewriter Effect
function typewriterEffect(elementId, text, speed = 100) {
    const element = document.getElementById(elementId);
    let charIndex = 0;

    // Reset the content to prevent duplication
    element.textContent = '';

    function type() {
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Trigger Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
    typewriterEffect('about-heading', 'Portofolio', 150);
    typewriterEffect('project-heading', 'Projects', 150);
});
