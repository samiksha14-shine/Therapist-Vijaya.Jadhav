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
  const fullInfo = document.getElementById("full-info");

  if (headerEl && textEl && fullInfo) {

    const headerText = "Get in Touch";
    const bodyLines = [
      "We’d love to hear from you! Reach out for appointments, questions, or just to say hello.",
      "📧 Vijaya.Jadhav.151075@gmail.com",
      "📞 (+91) 86928 28066 / 86524 28280",
      "📍 Sant Rajinder Singh Ashram, Prabhakar Krishanati Patil Marg, Sector 5, Ghansoli, Navi Mumbai, Maharashtra 400701"
    ];

    function typeLine(element, text, speed = 20) {
      return new Promise(resolve => {
        let i = 0;
        function typing() {
          if (i < text.length) {
            element.textContent += text.charAt(i);
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
      headerEl.textContent = "";
      textEl.textContent = "";

      await typeLine(headerEl, headerText);
      await new Promise(r => setTimeout(r, 500));

      for (let line of bodyLines) {
        await typeLine(textEl, line);
        textEl.textContent += "\n\n";
        await new Promise(r => setTimeout(r, 400));
      }

      headerEl.style.display = "none";
      textEl.style.display = "none";
      fullInfo.style.display = "block";
    }

    startTyping();
  }

});