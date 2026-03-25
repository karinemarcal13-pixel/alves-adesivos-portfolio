// 🔥 CONFIGURA AQUI
const numeroWhats = "5543984046323"; 

// 🚀 FUNÇÃO WHATS
function enviarWhats(tipo = "") {
  let mensagem = "Olá, vim pelo site e quero um orçamento de adesivos";

  if (tipo === "moveis") {
    mensagem = "Olá, quero renovar meus móveis com adesivo";
  } 
  else if (tipo === "geladeira") {
    mensagem = "Olá, quero envelopar minha geladeira";
  } 
  else if (tipo === "cozinha") {
    mensagem = "Olá, quero renovar minha cozinha";
  } 
  else if (tipo === "portas") {
    mensagem = "Olá, quero adesivar portas/paredes";
  }

  const link = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

// 🎯 BOTÕES PRINCIPAIS
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    enviarWhats();
  });
});

// 💬 BOTÃO FLUTUANTE
const botaoWhats = document.querySelector(".whatsapp");

if (botaoWhats) {
  botaoWhats.addEventListener("click", function(e) {
    e.preventDefault();
    enviarWhats();
  });
}

// 🧠 CARDS COM DETECÇÃO INTELIGENTE
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const texto = card.innerText.toLowerCase();

    if (texto.includes("móveis")) enviarWhats("moveis");
    else if (texto.includes("geladeira")) enviarWhats("geladeira");
    else if (texto.includes("cozinha")) enviarWhats("cozinha");
    else if (texto.includes("porta")) enviarWhats("portas");
    else enviarWhats();
  });
});

// ✨ ANIMAÇÃO SUAVE AO ROLAR
const elementos = document.querySelectorAll("section, .card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

elementos.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.5s ease";
  observer.observe(el);
});

// 🔥 EFEITO DE DESTAQUE NOS CARDS (hover com JS)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});