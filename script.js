const footerText = document.getElementById("footer-text");

const year = new Date();
footerText.innerHTML = `Sua casa Sua Selva &reg; ${year.getFullYear()}. Todos os Direitos Reservados`;

const toTop = document.getElementById("to-top");
window.onscroll = function () {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    toTop.classList.remove("d-none");
  } else {
    toTop.classList.add("d-none");
  }
};
