window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".story-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      btn.nextElementSibling.classList.toggle("active");
    });
  });

  const scrollUpBtn = document.querySelector(".scroll-up-btn");

  window.addEventListener("scroll", () => {
    if (this.scrollY > 200) {
      scrollUpBtn.classList.add("active");
    } else {
      scrollUpBtn.classList.remove("active");
    }
  });
});
