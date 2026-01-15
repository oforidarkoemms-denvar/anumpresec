/* ===== MOBILE NAV ===== */
const showMenu = (toggleID, navID) => {
  const toggle = document.getElementById(toggleID);
  const nav = document.getElementById(navID);

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};
showMenu("navToggle", "navMenu");

/* ===== FADE-UP OBSERVER ===== */
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  animatedElements.forEach(el => observer.observe(el));
});



const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const target = +el.dataset.count;
    let current = 0;
    const step = target / 60;

    const update = () => {
      current += step;
      if (current < target) {
        el.textContent = Math.floor(current) + "+";
        requestAnimationFrame(update);
      } else {
        el.textContent = target + "+";
      }
    };

    update();
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));



// /* ===== HEADTEACHERS SWIPER (APPLE STYLE) ===== */
// new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   centeredSlides: true,
//   loop: true,
//   spaceBetween: 60,
//   speed: 600,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
