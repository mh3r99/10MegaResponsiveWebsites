window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar"),
    navbarOffsetTop = navbar.offsetTop,
    navbarLinks = document.querySelectorAll(".navbar-link"),
    sections = document.querySelectorAll("section"),
    progress = document.querySelector(".progress-bars-wrapper"),
    progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

  window.addEventListener("scroll", () => {
    mainFn();
  });

  const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    sections.forEach((section, i) => {
      if (window.pageYOffset >= section.offsetTop - 10) {
        navbarLinks.forEach((link) => {
          link.classList.remove("change");
        });
        navbarLinks[i].classList.add("change");
      }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
      document.querySelectorAll(".progress-percent").forEach((el, i) => {
        el.style.width = `${progressBarPercents[i]}%`;
        el.previousElementSibling.firstElementChild.textContent =
          progressBarPercents[i];
      });
    }
  };

  mainFn();

  window.addEventListener("resize", () => {
    window.location.reload();
  });
});
