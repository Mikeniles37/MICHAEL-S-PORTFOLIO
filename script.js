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



function translatePage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {

    // INPUT placeholders
    if (el.placeholder !== undefined && el.tagName === "INPUT") {
      el.placeholder = el.getAttribute(`data-${lang}`);
      return;
    }

    // SUBMIT buttons
    if (el.tagName === "INPUT" && el.type === "submit") {
      el.value = el.getAttribute(`data-${lang}`);
      return;
    }

    // NORMAL TEXT (buttons included safely)
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}function translatePage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {

    // INPUT placeholders
    if (el.placeholder !== undefined && el.tagName === "INPUT") {
      el.placeholder = el.getAttribute(`data-${lang}`);
      return;
    }

    // SUBMIT buttons
    if (el.tagName === "INPUT" && el.type === "submit") {
      el.value = el.getAttribute(`data-${lang}`);
      return;
    }

    // NORMAL TEXT (buttons included safely)
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}



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

window.addEventListener("load",() => {

  document.querySelectorAll(".skill-progress"
).forEach(bar => {
  const target =
  bar.getAttribute("data-level");
  bar.style.width = target + "%";
});
});

// NAVBAR LANGUAGE SWITCH (SAFE)
const languageSelect = document.getElementById("languageSelect");

function switchLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

languageSelect.addEventListener("change", e => {
  switchLanguage(e.target.value);
});

// Default language
switchLanguage(languageSelect.value);


function translateText() {
  const lang = document.getElementById("languageSelect").value;
  document.querySelectorAll("[data-en]").forEach(el => {
    let text = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-sw");
    el.innerHTML = text.replace(/\n/g, "<br>"); // replace \n with <br>
  });
}

document.getElementById("languageSelect").addEventListener("change", translateText);
translateText(); // initial call
