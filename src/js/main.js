import "animate.css";
import { Carousel } from "bootstrap";

const footerText = document.getElementById("footer-text");
const year = new Date();
footerText.innerHTML = `Sua Casa Sua Selva &reg; ${year.getFullYear()}. Todos os Direitos Reservados.`;

const toTop = document.getElementById("to-top");
window.onscroll = function () {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    toTop.classList.remove("d-none");
    toTop.classList.add("animate__fadeIn");
  } else {
    toTop.classList.add("d-none");
    toTop.classList.remove("animate__fadeIn");
  }
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    // button.style.animationPlayState = "paused";
    button.classList.remove("animate__pulse", "animate__infinite");
    button.classList.add("animate__heartBeat");
  });
  button.addEventListener("mouseout", (e) => {
    // button.style.animationPlayState = "running";
    button.classList.remove("animate__heartBeat");
    button.classList.add("animate__pulse", "animate__infinite");
  });
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(
        "animate__animated",
        "animate__rubberBand",
        "animate__slow"
      );
    } else {
      entry.target.classList.remove(
        "animate__animated",
        "animate__rubberBand",
        "animate__slow"
      );
    }
  });
});

const targetElement = document.querySelector("#target");
observer.observe(targetElement);
