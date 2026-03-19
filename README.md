<div align="center">

# 🚀 Mohan Pawar — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-mohanx--0001.github.io-6366f1?style=for-the-badge)](https://mohanx-0001.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-MOHANX--0001-181717?style=for-the-badge&logo=github)](https://github.com/MOHANX-0001)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohan--pawar-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mohan-pawar-7ba025348/)
[![Email](https://img.shields.io/badge/Email-mohanpawarx1010@gmail.com-EA4335?style=for-the-badge&logo=gmail)](mailto:mohanpawarx1010@gmail.com)

<br/>

> **Personal portfolio website** — built from scratch using pure HTML, CSS & JavaScript.  
> Clean design · Smooth animations · Fully responsive · EmailJS contact form.

<br/>

![Portfolio Preview](mohan-photo.png)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Sections](#-sections)
- [Projects Showcased](#-projects-showcased)
- [Contact Form Setup](#-contact-form-setup-emailjs)
- [Local Setup](#-local-setup)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 🧠 Overview

This is my **personal developer portfolio** — a fully hand-coded website with zero frameworks or build tools. Every pixel was deliberately crafted to reflect my approach to software: clean, purposeful, and built to last.

The site is designed to:
- Present my skills and background to recruiters and collaborators
- Showcase my key projects with real GitHub links
- Allow visitors to reach me directly via a working contact form
- Work beautifully on any device, from mobile to desktop

---

## 🌐 Live Demo

> 🔗 **https://mohanx-0001.github.io/portfolio/**

---

## ✨ Features

| Feature | Details |
|---|---|
| **Typing Animation** | Auto-cycling role titles in the hero section |
| **Scroll Reveal** | Elements animate in as you scroll using `IntersectionObserver` |
| **Responsive Navigation** | Hamburger menu for mobile, shrinks on scroll |
| **Active Nav Highlighting** | Nav link highlights based on current scroll position |
| **EmailJS Contact Form** | Fully functional — messages land directly in inbox |
| **Honeypot Bot Protection** | Hidden field catches spam bots before submission |
| **Resume Download** | One-click PDF download of latest resume |
| **SEO Optimized** | Meta tags, Open Graph (LinkedIn/WhatsApp), Twitter Card |
| **Favicon** | Custom SVG favicon with brand initial |
| **Fully Responsive** | Mobile-first layout, tested across screen sizes |
| **Performance** | No frameworks, no bloat — pure vanilla stack |

---

## 🛠️ Tech Stack

```
Frontend    →  HTML5 · CSS3 · Vanilla JavaScript (ES6+)
Fonts       →  Google Fonts — Syne + DM Mono
Email       →  EmailJS (client-side email SDK)
Animations  →  CSS transitions + IntersectionObserver API
Hosting     →  GitHub Pages
```

**No frameworks. No build tools. No dependencies.**  
Just clean, handwritten code.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML — all sections
├── style.css               # All styles — layout, animations, themes
├── script.js               # All JS — typing, scroll, nav, form logic
├── mohan-photo.png         # Profile photo (About section)
└── Mohan_Pawar_Resume.pdf  # Resume (triggered on download button)
```

---

## 📄 Sections

### 🏠 Hero
Full-screen landing section with name, animated role titles (Java Backend Developer · CS Student · Problem Solver · Open Source Enthusiast · Building Real Systems), CTA buttons, and social links.

### 👤 About
Personal intro, education timeline (BSc CS @ SPPU · Class XII @ Shree Ganesh Vidya Mandir), and a quick-stats strip (Projects · Technologies · Problems Solved · Availability status).

### ⚡ Skills
Visual skill grid covering:
- **Languages** — Java, Python, JavaScript, C, SQL
- **Web** — HTML, CSS, DOM, Responsive Design
- **Database** — MySQL, JDBC
- **Concepts** — OOP, Data Structures, File Handling, Collections
- **Learning** — React.js, Node.js, REST APIs, DSA, System Design

### 🗂️ Projects
Six highlighted projects, each with tech badges, description, and GitHub links (see below).

### 📬 Contact
Two-column layout — contact info on the left, working EmailJS form on the right. Responds within 24 hours.

### 🦶 Footer
Minimal footer with GitHub and LinkedIn links.

---

## 🗂️ Projects Showcased

| # | Project | Tech | Highlights |
|---|---|---|---|
| 1 | **Library Management System** | Java · OOP · File Handling | Role-based login, book issue/return, auto fine calculation |
| 2 | **Student Management System** | Java · MySQL · JDBC | Full CRUD, auto ID generation, grade & attendance tracking |
| 3 | **Java To-Do List App** | Java · OOP · File Handling | Priority tasks, categories, stats dashboard, file persistence |
| 4 | **Bank Management System** | Java · OOP | Account creation, deposits, withdrawals, balance inquiry |
| 5 | **Scientific Calculator** | HTML · CSS · JS · DOM | Arithmetic + trig + logarithms, keyboard input, clean UI |
| 6 | **Weather Dashboard** | JS · REST API · Fetch · CSS Grid | OpenWeatherMap integration, 5-day forecast, geolocation |

> 🔗 All projects live at: [github.com/MOHANX-0001](https://github.com/MOHANX-0001)

---

## 📬 Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) — no backend required.

To configure it for your own use:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Set up an **Email Service** (Gmail recommended)
3. Create an **Email Template** with variables: `from_name`, `from_email`, `subject`, `message`
4. Replace these values in `script.js`:

```js
// Line 3 — your public key
emailjs.init("YOUR_PUBLIC_KEY");

// Inside handleSubmit()
emailjs.send(
  "YOUR_SERVICE_ID",      // e.g. "service_abc123"
  "YOUR_TEMPLATE_ID",     // e.g. "template_xyz789"
  templateParams
);
```

---

## ⚙️ Local Setup

No build step required. Just clone and open.

```bash
# 1. Clone the repository
git clone https://github.com/MOHANX-0001/MOHANX-0001.github.io.git

# 2. Navigate into the project
cd MOHANX-0001.github.io

# 3. Open in browser
open index.html
# or just drag index.html into your browser
```

> 💡 For the contact form to work locally, use a local server (e.g. VS Code **Live Server** extension) — EmailJS requires a non-`file://` origin.

---

## 🚀 Deployment

This site is deployed via **GitHub Pages** — free, fast, and zero-config.

```bash
# Push to main branch → site auto-deploys to:
# https://<your-username>.github.io
```

**Steps to deploy your fork:**
1. Fork this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Visit `https://<your-username>.github.io`

---

## 👤 Author

**Pawar Mohan Suresh**  
BSc Computer Science · Savitribai Phule Pune University (SPPU) · 2023–2026  
Loni Bk, Maharashtra, India

| | |
|---|---|
| 📞 Phone | +91 93568 73688 |
| ✉️ Email | mohanpawarx1010@gmail.com |
| 🐙 GitHub | [github.com/MOHANX-0001](https://github.com/MOHANX-0001) |
| 💼 LinkedIn | [linkedin.com/in/mohan-pawar-dev](www.linkedin.com/in/mohan-pawar-dev) |

---

<img width="1919" height="1026" alt="image" src="https://github.com/user-attachments/assets/851dfd25-9f38-414f-8444-e9f46106338d" />

---

<div align="center">

**Designed & built by Mohan Pawar · 2026**

*If you found this helpful, drop a ⭐ on the repo — it means a lot!*

</div>
