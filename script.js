/* ----- MOBILE MENU ----- */
const navMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.querySelector("i").className = navMenu.classList.contains("open") ? "uil uil-times" : "uil uil-bars";
});

navMenu.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.querySelector("i").className = "uil uil-bars";
  })
);


/* ----- HEADER SHADOW + ACTIVE LINK ON SCROLL ----- */
const header = document.getElementById("header");
const sections = document.querySelectorAll("section[id]");

function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 50);

  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const link = document.querySelector(`.nav-menu a[href="#${section.id}"]`);
    const inView = scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight;
    link.classList.toggle("active-link", inView);
  });
}

window.addEventListener("scroll", onScroll);
onScroll();


/* ----- TYPING EFFECT ----- */
new Typed(".typedText", {
  strings: ["Data Analyst", "SQL & Power BI Developer", "Python Data Explorer"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1800
});


/* ----- CONTACT FORM (opens the visitor's email app) ----- */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const { name, email, message } = e.target.elements;
  const subject = `Portfolio enquiry from ${name.value}`;
  const body = `${message.value}\n\n${name.value}\n${email.value}`;
  window.location.href = `mailto:sunnykarnam98@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


/* ----- FOOTER YEAR ----- */
document.getElementById("year").textContent = new Date().getFullYear();


/* ----- SCROLL REVEAL ANIMATIONS ----- */
const sr = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 1200,
  easing: "cubic-bezier(.2, .8, .2, 1)",
  reset: false
});

sr.reveal(".hero-text > *", { interval: 100 });
sr.reveal(".hero-visual", { delay: 300, origin: "right" });
sr.reveal(".section-header");
sr.reveal(".about-info", { origin: "left" });
sr.reveal(".skills-box", { interval: 120, origin: "right" });
sr.reveal(".project-card", { interval: 150 });
sr.reveal(".contact-card");
