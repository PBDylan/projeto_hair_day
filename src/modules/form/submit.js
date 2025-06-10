import dayjs from "dayjs";
// import { cli } from "webpack-dev-server"; // ❌ Desnecessário para este contexto

const form = document.querySelector("form");
const clienteName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Define a data atual no formato YYYY-MM-DD
const inputToday = dayjs().format("YYYY-MM-DD");

// Define a data atual e mínima como sendo hoje
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    const name = clienteName.value.trim();

    if (!name) {
      return alert("Por favor, preencha o nome do cliente.");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Por favor, selecione um horário.");
    }

    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(Number(hour), "hour");

    const id = new Date().getTime();

    // Aqui está a parte que faltava: o que fazer com os dados
    const agendamento = {
      id,
      cliente: name,
      dataHora: when.format("YYYY-MM-DD HH:mm"),
    };

    console.log("Agendamento criado com sucesso:", agendamento);
    alert("Agendamento criado com sucesso!");

    // Limpa o formulário e desmarca horário, se necessário
    form.reset();
    selectedDate.value = inputToday;
    selectedDate.min = inputToday;

    // Remove a seleção do horário (opcional, se tiver lógica visual)
    hourSelected.classList.remove("hour-selected");
  } catch (error) {
    console.error("Erro no agendamento:", error);
  }
};
