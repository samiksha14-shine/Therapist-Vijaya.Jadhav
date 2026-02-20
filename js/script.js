// Mobile Nav
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");

if(mobileMenu){
mobileMenu.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
}

// Video Slider
const videos = [
"videos/therapy1.mp4",
"videos/therapy2.mp4",
"videos/therapy3.mp4"
];

let currentVideo = 0;
const sliderVideo = document.getElementById("sliderVideo");

if(sliderVideo){
sliderVideo.src = videos[currentVideo];
}

function nextVideo(){
currentVideo = (currentVideo + 1) % videos.length;
sliderVideo.src = videos[currentVideo];
}

function prevVideo(){
currentVideo = (currentVideo - 1 + videos.length) % videos.length;
sliderVideo.src = videos[currentVideo];
}

// Contact Form
const form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", async function(e){
e.preventDefault();
const formData = new FormData(form);

const response = await fetch("https://api.web3forms.com/submit",{
method:"POST",
body: formData
});

const result = await response.json();
const message = document.getElementById("formMessage");

if(result.success){
message.innerText="Message sent successfully!";
form.reset();
}else{
message.innerText="Something went wrong.";
}
});
}