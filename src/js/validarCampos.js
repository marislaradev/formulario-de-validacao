const camposDeEntrada = document.querySelectorAll(".campo, .campo-mensagem");

camposDeEntrada.forEach((campo) => {
  campo.addEventListener("focus", () => {
    campo.classList.remove("campo-preenchido"); 
    campo.classList.add("campo-vazio"); 
    const mensagemErro = campo.nextElementSibling; 
    mensagemErro.style.display = "none";
  });

  campo.addEventListener("blur", () => {
    if (campo.value.trim() === "") {
      campo.classList.add("campo-vazio");
    } else {
      campo.classList.add("campo-preenchido");
    }
  });
});

const botaoEnviar = document.querySelector(".botao-enviar");

botaoEnviar.addEventListener("click", (evento) => {
  let temCampoVazio = false;

  camposDeEntrada.forEach((campo) => {
    if (campo.value.trim() === "") {
      campo.classList.add("campo-vazio");

      const mensagemErro = campo.nextElementSibling;
      mensagemErro.style.display = "block";

      temCampoVazio = true;
    } else { 
      campo.classList.remove("campo-vazio");
    }
  });

  if (!temCampoVazio) {
    const formulario = document.querySelector("#formulario");
    formulario.submit();
  } else {
    evento.preventDefault();
  }
});
