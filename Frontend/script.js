
/* ===============================
   HERO FADE-IN SEQUENCE
=============================== */
window.addEventListener('DOMContentLoaded', () => {
  const elements = [
    document.querySelector('.hero-name'),
    document.querySelector('.hero-role'),
    document.querySelector('.scroll-text'),
    document.querySelector('.cta')
  ];

  elements.forEach((el, index) => {
    if (!el) return;

    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';

    setTimeout(() => {
      el.style.transition = 'all 0.9s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * 200);
  });
});


/* ===============================
   MOBILE MENU TOGGLE
=============================== */
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}


/* ===============================
   SMOOTH SCROLL FIX
=============================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


/* ===============================
   SCROLL INDICATOR FADE
=============================== */
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
  if (!scrollIndicator) return;
  scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
});


/* ===============================
   HERO PARALLAX EFFECT
=============================== */
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (!hero) return;
  hero.style.backgroundPositionY = window.scrollY * 0.3 + 'px';
});


/* ===============================
   TYPING ANIMATION (FIXED + LOOP)
=============================== */
const typingEl = document.getElementById("typing");

const roles = [
  "Full-Stack Engineer",
  "Frontend Developer",
  "Backend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  if (!typingEl) return;

  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    charIndex++;
  } else {
    charIndex--;
  }

  typingEl.textContent = currentRole.substring(0, charIndex);

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    speed = 1200;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();


/* ===============================
   SKILLS FADE-IN ON SCROLL
=============================== */
const skillBlocks = document.querySelectorAll('.skill-block');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

skillBlocks.forEach(block => skillObserver.observe(block));


/* ===============================
   SIDEBAR ACTIVE LINK TRACKING
=============================== */
const sidebarLinks = document.querySelectorAll('.skills-sidebar a');

window.addEventListener('scroll', () => {
  let current = "";

  skillBlocks.forEach(block => {
    const rect = block.getBoundingClientRect();

    if (rect.top <= 200 && rect.bottom >= 200) {
      current = block.id;
    }
  });

  sidebarLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


/* ===============================
   BUTTON HOVER GLOW EFFECT
=============================== */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 18px rgba(0, 198, 255, 0.4)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});


/* ===============================
   SCROLL PROGRESS BAR (FIXED)
=============================== */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / docHeight) * 100;

  document.body.style.setProperty("--scroll", progress + "%");
});
