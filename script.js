document.addEventListener("DOMContentLoaded", function () {
  const resumeBtns = document.querySelectorAll(".resume-btn");
  const resumeDetails = document.querySelectorAll(".resume-detail");

  //force first section to show
  if (resumeDetails.length > 0) {
    resumeDetails[0].classList.add("active");
    resumeBtns[0].classList.add("active");
  }

  resumeBtns.forEach((btn, idx) =>
    btn.addEventListener("click", function () {
      resumeBtns.forEach((b) => b.classList.remove("active"));
      resumeDetails.forEach((d) => d.classList.remove("active"));

      btn.classList.add("active");

      resumeDetails[idx].classList.add("active");
    }),
  );
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".circle").forEach((circle) => {
    const percent = circle.getAttribute("data-percent");
    const progress = circle.querySelector(".progress");

    const radius = 54;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;
    progress.style.strokeDashoffset = circumference;

    // force reflow (important for animation)
    progress.getBoundingClientRect();

    const offset = circumference - (percent / 100) * circumference;
    progress.style.strokeDashoffset = offset;
  });
});
