import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Define a data atual e minima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  // Previne o comportamento padrão do formulário de carregar a página.
  event.preventDefault();

  console.log("Formulário enviado!");
};
