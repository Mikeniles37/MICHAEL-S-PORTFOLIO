const slide = document.querySelector(".img-slide");
const items = document.querySelectorAll(".img-item");
const next = document.querySelector(".arrow-right");
const prev = document.querySelector(".arrow-left");

const titles = [
  "Personal Portfolio Website",
  "Live Football Score App",
  "E-Commerce Platform",
  "School Management Website"
];

const descriptions = [
  "Modern responsive portfolio showcasing projects, skills and contact integration.",
  "Real-time football score application with live match updates using API integration.",
  "Full-featured online shopping platform with cart system and secure checkout process.",
  "Responsive school website with admission system and administrative dashboard."
];

const tech = [
  "Frontend: HTML5 | CSS3 | JavaScript",
  "JavaScript | REST API | CSS3",
  "React | Node.js | MongoDB",
  "HTML | CSS | JavaScript | PHP"
];

let index = 0;

function updateCarousel() {
  slide.style.transform = `translateX(-${index * 100}%)`;

  items.forEach(item => item.classList.remove("active"));
  items[index].classList.add("active");

  document.querySelector(".numb").textContent =
    (index + 1).toString().padStart(2, '0');

  document.getElementById("project-title").textContent = titles[index];
  document.getElementById("project-desc").textContent = descriptions[index];
  document.getElementById("project-tech").textContent = tech[index];
}

next.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prev.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});


