function enviarWhats(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let servico = document.getElementById("servico").value;

  let mensagem = `Olá! Meu nome é ${nome} e quero transformar: ${servico}`;

  let numero = "5543984046323";

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}