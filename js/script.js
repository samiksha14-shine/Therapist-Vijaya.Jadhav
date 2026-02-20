document.addEventListener("DOMContentLoaded", function () {

  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Scroll Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeUp 1s ease forwards";
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".card, .about-wrapper img, .contact-info, .contact-form")
    .forEach(el => observer.observe(el));

  // Contact Form
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      const message = document.getElementById("formMessage");

      if (result.success) {
        message.innerText = "Message sent successfully!";
        form.reset();
      } else {
        message.innerText = "Something went wrong.";
      }
    });
  }

});