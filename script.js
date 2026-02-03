// /* ================= MOBILE MENU ================= */
// const navToggle = document.getElementById("navToggle");
// const navClose  = document.getElementById("navClose");
// const navMenu   = document.getElementById("navMenu");

// navToggle.addEventListener("click", () => {
//   navMenu.classList.add("open");
// });

// navClose.addEventListener("click", () => {
//   navMenu.classList.remove("open");
// });

// /* ================= MOBILE DROPDOWNS ================= */
// document.querySelectorAll(".dropdown-trigger").forEach(btn => {
//   btn.addEventListener("click", e => {
//     if (window.innerWidth <= 900) {
//       e.preventDefault();
//       btn.parentElement.classList.toggle("open");
//     }
//   });
// });

// document.querySelectorAll(".dropdown-sub-trigger").forEach(btn => {
//   btn.addEventListener("click", e => {
//     if (window.innerWidth <= 900) {
//       e.preventDefault();
//       btn.parentElement.classList.toggle("open");
//     }
//   });
// });

// /* ================= TOP NAV SCROLL BEHAVIOR ================= */
// let lastScroll = 0;
// const topNav = document.getElementById("topNav");

// window.addEventListener("scroll", () => {
//   const current = window.scrollY;

//   if (current > lastScroll && current > 120) {
//     topNav.classList.add("hide");
//   } else {
//     topNav.classList.remove("hide");
//   }

//   lastScroll = current;
// });
/* ===== MOBILE NAV ===== */
/* ========== TOPBAR AUTO HIDE + SHIFT NAVBAR ========== */

/* Mobile Menu Toggle */
/* ELEMENTS */
const topbar = document.getElementById("topbar");
const header = document.querySelector(".header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

/* Set navbar position based on REAL topbar height */
function adjustNavbarPosition() {
  const topbarHeight = topbar.offsetHeight;
  header.style.top = topbarHeight + "px";
}

adjustNavbarPosition();
window.addEventListener("resize", adjustNavbarPosition);

/* Mobile toggle */
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("show-icon");

  // Freeze topbar & header when menu is open
  if (navMenu.classList.contains("show-menu")) {
    topbar.classList.remove("topbar-hidden");
    header.style.top = topbar.offsetHeight + "px";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

/* Scroll hide topbar */
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let current = scrollY;

  if (current > lastScroll && current > 50) {
    topbar.classList.add("topbar-hidden");
    header.classList.add("nav-shift-up");
  } else {
    topbar.classList.remove("topbar-hidden");
    header.classList.remove("nav-shift-up");
  }

  lastScroll = current;
});
/* ===== Mobile dropdown toggle (NO hover) ===== */
const dropdownItems = document.querySelectorAll(".dropdown-item > .nav-link");
const subDropdownItems = document.querySelectorAll(".dropdown-subitem > .dropdown-link");

dropdownItems.forEach(item => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 1118) {
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle("dropdown-open");
    }
  });
});

subDropdownItems.forEach(item => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 1118) {
      e.preventDefault();
      item.parentElement.classList.toggle("sub-open");
    }
  });
});


/* ===== FADE-UP OBSERVER ===== */

  const animatedElements = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');

          // 🔒 Stop observing after first animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  animatedElements.forEach(el => observer.observe(el));





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



const openBtn = document.querySelector(".open-modal");
const modal = document.getElementById("headteacherModal");
const closeBtn = modal.querySelector(".modal-close");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

const videos = document.querySelectorAll(".video-card video");

const videoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.paused = !entry.isIntersecting;
  });
}, { threshold: 0.5 });

videos.forEach(video => videoObserver.observe(video));




/* AUTO-STAGGER DELAYS FOR ACADEMIC CARDS */
document.querySelectorAll(".academics-grid .academic-card").forEach((card, i) => {
  card.style.setProperty("--delay", `${i * 0.15}s`);
});



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


