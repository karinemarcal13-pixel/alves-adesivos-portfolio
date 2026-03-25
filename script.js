function enviarWhats(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let servico = document.getElementById("servico").value.trim();

  // Validação simples
  if (nome === "" || servico === "") {
    alert("Preencha todos os campos 😅");
    return;
  }

  let numero = "5543984046323";

  let mensagem = `✨ Olá, tudo bem?\n
Meu nome é *${nome}* 😊\n
Gostaria de solicitar um orçamento.\n
🔧 O que desejo transformar:
${servico}\n
Aguardo retorno, obrigado!`;

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");

  // Limpar formulário depois de enviar
  document.getElementById("nome").value = "";
  document.getElementById("servico").value = "";
}