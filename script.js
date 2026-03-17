// ================================
// MOHAN PAWAR - Portfolio Scripts
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

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  }

  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeRole, speed);
}

setTimeout(typeRole, 1200);


// NAV HAMBURGER TOGGLE
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

  nav.style.padding = window.scrollY > 60 ? '0.8rem 4rem' : '';

});


// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry, i) => {

    if (entry.isIntersecting) {

      setTimeout(() => entry.target.classList.add('visible'), i * 80);

      observer.unobserve(entry.target);

    }

  });

}, { threshold: 0.12 });


document.querySelectorAll('.reveal').forEach(el => observer.observe(el));



// ================================
// CONTACT FORM WITH EMAILJS
// ================================

function handleSubmit() {

const botField = document.getElementById("website").value;

if(botField){
console.log("Bot detected");
return;
}

const btn = document.getElementById("sendBtn");

const name = document.getElementById("fname").value.trim();
const email = document.getElementById("femail").value.trim();
const subject = document.getElementById("fsubject").value.trim();
const message = document.getElementById("fmessage").value.trim();

if (!name || !email || !message) {
alert("Please fill all required fields");
return;
}

btn.innerText = "Sending...";
btn.disabled = true;

const templateParams = {
from_name: name,
from_email: email,
subject: subject,
message: message
};

emailjs.send(
"service_408uznv",
"template_rndu5oi",
templateParams
)

.then(function(){

btn.innerText = "Send Message";
btn.disabled = false;

document.getElementById('formSuccess').style.display = 'block';

['fname','femail','fsubject','fmessage'].forEach(id=>{
document.getElementById(id).value='';
});

setTimeout(()=>{
document.getElementById('formSuccess').style.display='none';
},5000);

})

.catch(function(error){

btn.innerText="Send Message";
btn.disabled=false;

alert("Failed to send message");
console.log(error);

});

}



// RESUME DOWNLOAD
function downloadResume() {

  const link = document.createElement('a');

  link.href = 'Mohan_Pawar_Resume.pdf';   
  link.download = 'Mohan_Pawar_Resume.pdf';

  link.click();

}



// ACTIVE NAV LINK HIGHLIGHT
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(s => {

    if (window.scrollY >= s.offsetTop - 120)
      current = s.id;

  });

  navLinks.forEach(a => {

    a.style.color =
      a.getAttribute('href') === `#${current}`
      ? 'var(--text)'
      : '';

  });

});
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  fadeObserver.observe(el);
});
