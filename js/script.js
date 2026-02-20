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
const popup = document.getElementById("popupModal");
const popupMessage = document.getElementById("popupMessage");
const popupBox = document.querySelector(".popup-box");

function showPopup(message, type) {
  popupMessage.textContent = message;
  popupBox.classList.remove("success", "error");
  popupBox.classList.add(type);
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

if (form) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        showPopup("Your appointment request has been sent successfully!", "success");
        form.reset();
      } else {
        showPopup("Something went wrong. Please try again.", "error");
      }

    } catch (error) {
      showPopup("Network error. Please try again later.", "error");
    }
  });
}

  /* ===============================
     TYPEWRITER EFFECT (CONTACT PAGE)
  =============================== */
const typingContainer = document.getElementById("typing-content");

if (typingContainer) {

  const elements = typingContainer.querySelectorAll("p");

  async function typeElement(el, speed = 18) {
    const text = el.textContent;
    el.textContent = "";

    for (let i = 0; i < text.length; i++) {
      el.textContent += text.charAt(i);
      await new Promise(r => setTimeout(r, speed));
    }
  }

  async function startTyping() {
    for (let el of elements) {
      await typeElement(el);
      await new Promise(r => setTimeout(r, 300));
    }
  }

  startTyping();
}

});