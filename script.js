/* =========================
   REMOTERISEHQ SCRIPT ENGINE
   Lightweight UX Enhancer
========================= */

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
});
});
});

/* Navbar background effect on scroll */
window.addEventListener("scroll", function(){
const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "#0b0f1a";
navbar.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
} else {
navbar.style.background = "#0f172a";
navbar.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
}
});

/* Simple animation reveal on scroll */
const cards = document.querySelectorAll(".card, .job-card, .project-card, .blog-post");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}
});
}, { threshold: 0.1 });

cards.forEach(card => {
card.style.opacity = "0";
card.style.transform = "translateY(20px)";
card.style.transition = "0.5s ease-out";
observer.observe(card);
});
