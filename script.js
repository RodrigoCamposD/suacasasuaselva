const footerText = document.getElementById("footer-text");

const year = new Date();
footerText.innerHTML = `Sua casa Sua Selva &reg; ${year.getFullYear()}. Todos os Direitos Reservados`;
