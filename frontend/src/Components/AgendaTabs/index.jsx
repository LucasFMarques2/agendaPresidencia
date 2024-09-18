import React from "react";
import { Tabs, Tab } from "react-bootstrap";

export function AgendaTabs({ activeTab, setActiveTab }) {
  return (
    <Tabs
      activeKey={activeTab}
      onSelect={(k) => setActiveTab(k)}
      className="mb-3"
    >
      <Tab eventKey="todos" title="Todos" />
      <Tab eventKey="agendados" title="Agendados" />
      <Tab eventKey="andamento" title="Em Andamento" />
      <Tab eventKey="finalizado" title="Finalizado" />
    </Tabs>
  );
}