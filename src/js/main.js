import "animate.css";
import { Accordion } from "bootstrap";

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
    if (entry.target.classList.contains("rubberBand")) {
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
    } else if (entry.target.classList.contains("fadeInLeft")) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInLeft");
        observer.unobserve(entry.target);
      }
    } else if (entry.target.classList.contains("fadeInUp")) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        observer.unobserve(entry.target);
      }
    }
  });
});

const rubberBand = document.querySelectorAll(".rubberBand");
const fadeInLeft = document.querySelectorAll(".fadeInLeft");
const fadeInUp = document.querySelectorAll(".fadeInUp");
rubberBand.forEach((el) => observer.observe(el));
fadeInLeft.forEach((el) => observer.observe(el));
fadeInUp.forEach((el) => observer.observe(el));

const COUNTDOWN_TIME = 4 * 60 * 60 + 17 * 60; // tempo em segundos
const COUNTDOWN_STORAGE_KEY = "countdown_expiry";

function startCountdown() {
  let expiryTimestamp = parseInt(localStorage.getItem(COUNTDOWN_STORAGE_KEY));
  if (!expiryTimestamp || expiryTimestamp < Date.now()) {
    // se o valor não existe ou já expirou, cria um novo
    expiryTimestamp = Date.now() + COUNTDOWN_TIME * 1000;
    localStorage.setItem(COUNTDOWN_STORAGE_KEY, expiryTimestamp);
  }

  const hoursEl = document.getElementById("horas");
  const minutesEl = document.getElementById("minutos");
  const secondsEl = document.getElementById("segundos");

  function updateCountdown() {
    const remainingSeconds = Math.max(
      0,
      Math.floor((expiryTimestamp - Date.now()) / 1000)
    );
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

    if (remainingSeconds <= 0) {
      // tempo expirado, reinicia a contagem
      localStorage.removeItem(COUNTDOWN_STORAGE_KEY);
      startCountdown();
    }
  }

  updateCountdown(); // atualiza uma vez ao carregar a página
  setInterval(updateCountdown, 1000); // atualiza a cada segundo
}

startCountdown();

const dataAtual = new Date();
const nomeMes = dataAtual.toLocaleDateString("pt-BR", { month: "long" });
const promoString = `${dataAtual.getDate() - 2}, ${
  dataAtual.getDate() - 1
} e ${dataAtual.getDate()} de ${nomeMes}`;
const promoStringEl = document.getElementById("days-month");
promoStringEl.innerText = promoString;
