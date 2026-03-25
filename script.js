function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico").value.trim();

  if (!nome || !servico) {
    alert("Preencha os campos");
    return;
  }

  const mensagem = `Olá, meu nome é ${nome}.
Gostaria de um orçamento.

📍 Londrina e região
Serviço: ${servico}`;

  window.open(`https://wa.me/5543984046323?text=${encodeURIComponent(mensagem)}`);
}