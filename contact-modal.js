document.addEventListener("DOMContentLoaded", () => {
  const hireBtn = document.getElementById("hireMeBtn");
  const modal = document.getElementById("contactModal");
  const popup = modal.querySelector(".position-popup");
  const closeBtn = modal.querySelector(".contact-close");

  hireBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const rect = hireBtn.getBoundingClientRect();

    modal.style.display = "block";

    popup.style.top = rect.bottom + 10 + "px";

    popup.style.left = rect.left + "px";
    popup.style.visibility = "visible";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
