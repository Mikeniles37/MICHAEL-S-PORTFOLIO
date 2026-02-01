const slide = document.querySelector(".img-slide");
const items = document.querySelectorAll(".img-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const itemWidth = items[0].offsetWidth + 20; // item width + gap

nextBtn.addEventListener("click", () => {
  if (index < items.length - 1) {
    index++;
  } else {
    index = 0;
  }
  slide.style.transform = `translateX(-${index * itemWidth}px)`;
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = items.length - 1;
  }
  slide.style.transform = `translateX(-${index * itemWidth}px)`;
});
