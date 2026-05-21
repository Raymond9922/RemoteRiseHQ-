// =========================
// PREMIUM INTERACTIONS
// RemoteRiseHQ Script
// =========================

// Smooth hover lift enhancement (extra polish on cards)
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-12px) scale(1.02)';
    card.style.transition = '0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px) scale(1)';
  });
});


// =========================
// SMOOTH SCROLL BEHAVIOR
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 15, 30, 0.85)";
    navbar.style.backdropFilter = "blur(18px)";
  } else {
    navbar.style.background = "rgba(10, 15, 30, 0.6)";
    navbar.style.backdropFilter = "blur(15px)";
  }
});


// =========================
// BUTTON CLICK FEEDBACK
// =========================

const buttons = document.querySelectorAll("a");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.96)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 120);
  });
});


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});