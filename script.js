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
const navLinks = document.querySelectorAll('#nav a');
const overlay = document.getElementById('overlay');

if (menuToggle && nav && overlay) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
  });
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');
});

/* ===============================
   SMOOTH SCROLL
=============================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===============================
   SCROLL INDICATOR
=============================== */
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
  if (!scrollIndicator) return;
  scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
});

/* ===============================
   HERO PARALLAX
=============================== */
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (!hero) return;
  hero.style.backgroundPositionY = window.scrollY * 0.3 + 'px';
});

/* ===============================
   TYPING ANIMATION
=============================== */
const typingEl = document.getElementById("typing");
const roles = ["Full-Stack Engineer", "Frontend Developer", "Backend Developer"];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  if (!typingEl) return;

  const currentRole = roles[roleIndex];

  typingEl.textContent = currentRole.substring(0, charIndex);

  if (!isDeleting) {
    charIndex++;
  } else {
    charIndex--;
  }

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
   SKILLS ANIMATION
=============================== */
const skillBlocks = document.querySelectorAll('.skill-block');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

skillBlocks.forEach(block => skillObserver.observe(block));

/* ===============================
   SIDEBAR ACTIVE LINK
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
   BUTTON GLOW
=============================== */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 18px rgba(0,198,255,0.4)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});

/* ===============================
   SCROLL PROGRESS BAR
=============================== */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.body.style.setProperty("--scroll", (scrollTop / docHeight) * 100 + "%");
});

/* ===============================
   CV MODAL
=============================== */
document.addEventListener('DOMContentLoaded', () => {
  const cvBtn = document.getElementById('cvBtn');
  const cvModal = document.getElementById('cvModal');
  const closeBtn = document.querySelector('.modal .close');

  if (!cvBtn || !cvModal) return;

  cvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cvModal.style.display = 'flex';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      cvModal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === cvModal) {
      cvModal.style.display = 'none';
    }
  });
});

/* ===============================
   BOOK CALL (IMPROVED UX)
=============================== */
const bookBtn = document.getElementById("bookCallBtn");
const form = document.getElementById("bookCallForm");

if (bookBtn && form) {
  bookBtn.addEventListener("click", () => {
    if (form.style.display === "block") {
      form.style.opacity = "0";
      setTimeout(() => {
        form.style.display = "none";
      }, 200);
    } else {
      form.style.display = "block";
      setTimeout(() => {
        form.style.opacity = "1";
      }, 50);
    }
  });
}

/* ===============================
   FORM → EMAIL (PROFESSIONAL)
=============================== */
const callForm = document.getElementById("callForm");

if (callForm) {
  callForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("callName").value;
    const email = document.getElementById("callEmail").value;
    const date = document.getElementById("callDate").value;
    const time = document.getElementById("callTime").value;

    if (!name || !email || !date || !time) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = `Call Booking Request from ${name}`;
    const body = `
Hi David,

My name is ${name}
Email: ${email}

I would like to schedule a call on ${date} at ${time}.

Looking forward to your response.
    `;

    window.location.href =
      `mailto:kgothatsodavisegwapa2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // reset form
    callForm.reset();

    // UX feedback
    alert("Your request has been prepared in your email app.");
  });
}