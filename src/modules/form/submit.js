const form = document.querySelector("form");

form.onsubmit = (event) => {
  // Previne o comportamento padrão do formulário de carregar a página.
  event.preventDefault();

  console.log("Formulário enviado!");
};
