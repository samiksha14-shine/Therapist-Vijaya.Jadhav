document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     MOBILE NAVIGATION TOGGLE
  =============================== */
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  /* ===============================
     NAVBAR SCROLL EFFECT
  =============================== */
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  /* ===============================
     VIDEO SLIDER (ABOUT PAGE)
  =============================== */
  const sliderVideo = document.getElementById("sliderVideo");

  if (sliderVideo) {
    const videos = [
      "videos/therapy1.mp4",
      "videos/therapy2.mp4",
      "videos/therapy3.mp4"
    ];

    let currentVideo = 0;
    sliderVideo.src = videos[currentVideo];

    window.nextVideo = function () {
      currentVideo = (currentVideo + 1) % videos.length;
      sliderVideo.src = videos[currentVideo];
    };

    window.prevVideo = function () {
      currentVideo = (currentVideo - 1 + videos.length) % videos.length;
      sliderVideo.src = videos[currentVideo];
    };
  }

  /* ===============================
     CONTACT FORM SUBMISSION
  =============================== */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const message = document.getElementById("formMessage");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          message.textContent = "Message sent successfully!";
          message.style.color = "green";
          form.reset();
        } else {
          message.textContent = "Something went wrong. Please try again.";
          message.style.color = "red";
        }
      } catch (error) {
        message.textContent = "Error submitting form.";
        message.style.color = "red";
      }
    });
  }

  /* ===============================
     TYPEWRITER EFFECT (CONTACT PAGE)
  =============================== */
 const headerEl = document.getElementById("typing-header");
const textEl = document.getElementById("typing-text");

if (headerEl && textEl) {

  const bodyLines = [
    "We’d love to hear from you! Reach out for appointments, questions, or just to say hello.",
    "📧 Vijaya.Jadhav.151075@gmail.com",
    "📞 (+91) 86928 28066 / 86524 28280",
    "📍 Sant Rajinder Singh Ashram, Prabhakar Krishanati Patil Marg, Sector 5, Ghansoli, Navi Mumbai, Maharashtra 400701"
  ];

  function typeLine(text, speed = 20) {
    return new Promise(resolve => {
      let i = 0;
      const p = document.createElement("p");
      textEl.appendChild(p);

      function typing() {
        if (i < text.length) {
          p.textContent += text.charAt(i);
          i++;
          setTimeout(typing, speed);
        } else {
          resolve();
        }
      }

      typing();
    });
  }

  async function startTyping() {
    textEl.innerHTML = "";

    for (let line of bodyLines) {
      await typeLine(line);
      await new Promise(r => setTimeout(r, 300));
    }

    // Add map button after typing
    const mapBtn = document.createElement("a");
    mapBtn.href = "https://www.google.com/maps/place/Sant+Rajinder+Singh+Ashram/";
    mapBtn.target = "_blank";
    mapBtn.className = "btn";
    mapBtn.textContent = "See on Map";
    textEl.appendChild(mapBtn);
  }

  startTyping();
}