// ================================
// MOHAN PAWAR - Portfolio Scripts v2
// ================================

// EMAILJS INIT
(function(){
  emailjs.init("DssVVxBiUp-i1O6XN");
})();

// TYPING ANIMATION
const roles = [
  'Java Backend Developer',
  'CS Student @ SPPU',
  'Problem Solver',
  'Open Source Enthusiast',
  'Building Real Systems'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-role');

function typeRole() {
  if (!typedEl) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }
  let speed = isDeleting ? 55 : 95;
  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }
  setTimeout(typeRole, speed);
}
setTimeout(typeRole, 1000);


// NAV HAMBURGER
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}


// NAV SHRINK ON SCROLL
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) {
    nav.style.padding = '0.7rem 4rem';
    nav.style.background = 'rgba(7,7,13,0.95)';
  } else {
    nav.style.padding = '';
    nav.style.background = '';
  }
});


// SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// COUNTER ANIMATION for stats
function animateCounter(el, target) {
  let current = 0;
  const duration = 1500;
  const step = Math.ceil(target / (duration / 30));
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + '+';
    if (current >= target) clearInterval(timer);
  }, 30);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      if (!isNaN(target)) animateCounter(el, target);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-n[data-target]').forEach(el => statObserver.observe(el));


// ACTIVE NAV LINK
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});


// ================================
// CONTACT FORM WITH EMAILJS
// ================================
function handleSubmit() {
  const botField = document.getElementById("website").value;
  if (botField) { console.log("Bot detected"); return; }

  const btn = document.getElementById("sendBtn");
  const name    = document.getElementById("fname").value.trim();
  const email   = document.getElementById("femail").value.trim();
  const subject = document.getElementById("fsubject").value.trim();
  const message = document.getElementById("fmessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all required fields.");
    return;
  }

  btn.innerText = "Sending...";
  btn.disabled = true;

  emailjs.send("service_408uznv", "template_rndu5oi", {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
  })
  .then(() => {
    btn.innerText = "Send Message";
    btn.disabled = false;
    document.getElementById('formSuccess').style.display = 'block';
    ['fname','femail','fsubject','fmessage'].forEach(id => {
      document.getElementById(id).value = '';
    });
    setTimeout(() => {
      document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
  })
  .catch((error) => {
    btn.innerText = "Send Message";
    btn.disabled = false;
    alert("Failed to send message. Please try again.");
    console.error(error);
  });
}


// RESUME DOWNLOAD
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'Mohan_Pawar_Resume.pdf';
  link.download = 'Mohan_Pawar_Resume.pdf';
  link.click();
}
