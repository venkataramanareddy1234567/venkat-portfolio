// Fade-in on scroll
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

fades.forEach(fade => observer.observe(fade));

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 10);
});

