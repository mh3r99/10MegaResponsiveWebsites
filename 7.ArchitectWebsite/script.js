window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);

  document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });

  document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";

    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= document.querySelector(".header").clientHeight) {
      document.querySelector(".scroll-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-btn").classList.remove("show");
    }
  });
});
