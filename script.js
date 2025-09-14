// ================== DARK MODE ==================
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ================== MENU TOGGLE ==================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ================== CONTACT FORM ==================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "✅ Message sent! We'll get back to you soon.";
  contactForm.reset();
});

// ================== INFINITE TESTIMONIALS CAROUSEL ==================
const carousel = document.querySelector(".carousel");
const cards = Array.from(carousel.children);
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const cardWidth = carousel.querySelector(".card").offsetWidth + 16;

// Clone first 3 and last 3
const cloneFirst = cards.slice(0, 3).map(card => card.cloneNode(true));
const cloneLast = cards.slice(-3).map(card => card.cloneNode(true));

cloneFirst.forEach(card => carousel.appendChild(card));
cloneLast.forEach(card => carousel.insertBefore(card, carousel.firstChild));

// Start position
carousel.scrollLeft = cardWidth * 3;

function scrollNext() {
  carousel.scrollBy({ left: cardWidth, behavior: "smooth" });

  setTimeout(() => {
    if (carousel.scrollLeft >= (cards.length + 3) * cardWidth) {
      carousel.scrollLeft = cardWidth * 3;
    }
  }, 400);
}

function scrollPrev() {
  carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });

  setTimeout(() => {
    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft = cards.length * cardWidth;
    }
  }, 400);
}

nextBtn.addEventListener("click", scrollNext);
prevBtn.addEventListener("click", scrollPrev);
