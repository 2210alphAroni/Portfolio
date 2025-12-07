/* =======================
   1. Fade-in on Scroll
======================= */
const revealElements = document.querySelectorAll(
  ".hero-left, .hero-right, .about-section, .skills-section, .projects-section, .contact-section, .resume-section"
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Apply base style (JS only, no CSS edit needed) */
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.8s ease";
});


/* =======================
   2. Hero Title Typing Animation
======================= */
const heroName = document.querySelector(".hero-name");
if (heroName) {
  const text = heroName.textContent;
  heroName.textContent = "";
  let i = 0;

  const typeEffect = () => {
    if (i < text.length) {
      heroName.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 80);
    }
  };
  typeEffect();
}


/* =======================
   3. Floating Animation for Shapes
======================= */
const shapes = document.querySelectorAll(".shape");

shapes.forEach((shape, index) => {
  let direction = 1;
  let position = 0;

  setInterval(() => {
    position += 0.3 * direction;
    if (position > 12 || position < -12) direction *= -1;

    shape.style.transform = `translateY(${position}px)`;
  }, 25);
});


/* =======================
   4. Scroll-To-Top Button Reveal
======================= */
const topButton = document.querySelector("#top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.style.opacity = "1";
  } else {
    topButton.style.opacity = "0";
  }
});


/* =======================
   5. Smooth Mobile Menu Animation
======================= */
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      navLinks.style.opacity = "0";
      navLinks.style.transform = "translateY(-15px)";
      navLinks.style.transition = "all .35s ease";

      setTimeout(() => {
        navLinks.style.opacity = "1";
        navLinks.style.transform = "translateY(0)";
      }, 50);
    }
  });
}


/* =======================
   6. Smooth Theme Transition
======================= */
const themeSwitch = document.querySelector("#theme-switch");

if (themeSwitch) {
  themeSwitch.addEventListener("change", () => {
    document.body.style.transition = "all 0.5s ease";
  });
}



/* =======================
   7. Click Reflection Effect
======================= */
document.addEventListener("click", (e) => {
  const reflect = document.createElement("span");
  reflect.classList.add("click-reflect");

  reflect.style.left = `${e.pageX}px`;
  reflect.style.top = `${e.pageY}px`;

  document.body.appendChild(reflect);

  setTimeout(() => {
    reflect.remove();
  }, 600);
});
