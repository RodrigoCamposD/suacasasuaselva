const e=document.getElementById("footer-text"),t=new Date;e.innerHTML=`Sua casa Sua Selva &reg; ${t.getFullYear()}. Todos os Direitos Reservados`;const n=document.getElementById("to-top");window.onscroll=function(){document.body.scrollTop>120||document.documentElement.scrollTop>120?n.classList.remove("d-none"):n.classList.add("d-none")};document.querySelectorAll(".btn").forEach((e=>{e.addEventListener("mouseover",(t=>{e.classList.remove("animate__pulse","animate__infinite"),e.classList.add("animate__heartBeat")})),e.addEventListener("mouseout",(t=>{e.classList.remove("animate__heartBeat"),e.classList.add("animate__pulse","animate__infinite")}))}));
//# sourceMappingURL=index.975aff80.js.map
