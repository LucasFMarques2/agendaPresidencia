import React from "react";
import { AgendaCards } from "../AgendaCards";
import moment from "moment";

export function AgendaList({ agendas, filter, estadoAtual, setSelectedAgenda }) {
  const filteredAgendas = agendas.filter((agenda) => {
    if (filter === "todos") return true;
    const { stay } = estadoAtual(agenda);
    return stay.toLowerCase() === filter;
  });

  return filteredAgendas.length > 0 ? (
    filteredAgendas.map((agenda) => {
      const { color, stay } = estadoAtual(agenda);
      return (
        <AgendaCards
          key={agenda.id}
          currentstay={stay}
          title={agenda.titulo}
          description={agenda.desc}
          start={moment(agenda.dataInicio).format("DD/MM/YYYY HH:mm")}
          end={moment(agenda.dataFim).format("DD/MM/YYYY HH:mm")}
          locale={agenda.local}
          color={color}
          onClick={() => setSelectedAgenda(agenda)}
        />
      );
    })
  ) : (
    <h2>Nenhuma agenda encontrada</h2>
  );
}
