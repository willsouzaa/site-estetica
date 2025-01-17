// Alterar estilo da barra de navegação ao rolar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".wow");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".procedimentos .card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );
  
    cards.forEach((card, index) => {
      card.style.setProperty("--delay", index);
      observer.observe(card);
    });
  });
  