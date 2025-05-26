document.addEventListener('DOMContentLoaded', () => {
  const items = [
    "videos/therapy1.mp4",
    "images/image2.jpeg",
    "videos/therapy2.mp4",
    "images/image1.jpeg",
    "images/image3.jpeg",
    "videos/therapy3.mp4",
    "images/image4.jpeg",
    "images/image5.jpeg"
  ];

  let currentIndex = 0;

  const videoElement = document.getElementById('carousel-video');
  const imageElement = document.getElementById('carousel-image');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');

  function showCurrent() {
    const src = items[currentIndex];
    if (src.endsWith('.mp4')) {
      videoElement.style.display = 'block';
      imageElement.style.display = 'none';
      videoElement.src = src;
      videoElement.load();
      videoElement.play();
    } else {
      videoElement.pause();
      videoElement.style.display = 'none';
      imageElement.style.display = 'block';
      imageElement.src = src;
    }
  }

  if (videoElement && imageElement && leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showCurrent();
    });

    rightBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      showCurrent();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && !videoElement.paused) {
        videoElement.pause();
      }
    });

    // show the first media on load
    showCurrent();
  }
});
