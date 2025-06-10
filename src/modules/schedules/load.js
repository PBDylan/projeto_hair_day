import { hoursLoad } from "../form/hours-load.js";
// Importa a função para carregar os horários disponíveis

// Seleciona o input de data
const selectedDate = document.getElementById("date");

// Renderiza as horas disponíveis para agendamento
export function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value;

  hoursLoad({ date }); // Chama a função para carregar os horários disponíveis
}
