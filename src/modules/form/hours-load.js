import dayjs from "dayjs";

import { hoursClick } from "./hours-click.js";

import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("hours");
// Seleciona o elemento de horas

// Função para carregar os horários disponíveis
export function hoursLoad({ date }) {
  // Limpa a lista de horários
  hours.innerHTML = "";
  // Limpa a lista de horários antes de adicionar novos

  const opening = openingHours.map((hour) => {
    //Recupera somente a hora.
    const [scheduleHour] = hour.split(":");

    // Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
    console.log(scheduleHour, isHourPast);

    // Define se o horário está disponível ou não
    return {
      hour,
      available: !isHourPast,
    };
  });

  // Renderiza os horários.
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });

  // Verifica se não há horários disponíveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
