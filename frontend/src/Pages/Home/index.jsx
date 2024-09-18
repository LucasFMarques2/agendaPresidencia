import { Container, Agenda, Menu, Formulario, HamburgerMenu, Modal, ModalContent, InfoBar, ColorLabel } from "./styled";
import { useState, useEffect } from "react";
import { AgendaCards } from "../../Components/AgendaCards";
import { AgendaForm } from "../../Components/AgendaForm";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Input } from '../../Components/Input';
import api from '../../services/api'; 
import moment from "moment";

export function Home() {
  const [agendas, setAgendas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [local, setLocal] = useState("");
  const [showForm, setShowForm] = useState(true); 
  const [selectedAgenda, setSelectedAgenda] = useState(null);


  useEffect(() => {
    async function fetchAgendas() {
      try {
        const response = await api.get("/agendas");
        setAgendas(response.data); 
      } catch (err) {
        console.error("Erro ao carregar agendas", err);
      }
    }

    fetchAgendas();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (moment(dataInicio).isAfter(dataFim)) {
      alert("A data de início não pode ser maior que a data final");
      return;
    }

    const novaAgenda = {
      titulo,
      descricao,
      dataInicio,
      dataFim,
      local,
      estadoAtual: "agendado",
    };

    try {
      const response = await api.post("/agendas", novaAgenda);
      setAgendas([...agendas, response.data]); 
      setTitulo("");
      setDescricao("");
      setDataInicio("");
      setDataFim("");
      setLocal("");
    } catch (err) {
      console.error("Erro ao criar agenda", err);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (moment(selectedAgenda.dataInicio).isAfter(selectedAgenda.dataFim)) {
      alert("A data de início não pode ser maior que a data final");
      return;
    }

    try {
      const response = await api.put(`/agendas/${selectedAgenda.id}`, selectedAgenda);
      const updatedAgendas = agendas.map((agenda) =>
        agenda.id === selectedAgenda.id ? response.data : agenda
      );
      setAgendas(updatedAgendas);
      setSelectedAgenda(null); 
    } catch (err) {
      console.error("Erro ao editar agenda", err);
    }
  };


  const handleDelete = async (id) => {
    try {
      await api.delete(`/agendas/${id}`);
      setAgendas(agendas.filter((agenda) => agenda.id !== id));
      setSelectedAgenda(null);
    } catch (err) {
      console.error("Erro ao deletar agenda", err);
    }
  };

 
  const estadoAtual = (agenda) => {
    const agora = moment();
    const inicio = moment(agenda.dataInicio, "YYYY-MM-DD HH:mm");
    const fim = moment(agenda.dataFim, "YYYY-MM-DD HH:mm");

    if (agora.isBefore(inicio)) {
      return {
        color: 'primary',
        stay: 'Agendado'
      };
    } else if (agora.isBetween(inicio, fim)) {
      return {
        color: 'danger',
        stay: 'Em andamento'
      };
    } else {
      return {
        color: 'success',
        stay: 'Finalizado'
      };
    }
  };

  const ordenarAgendas = () => {
    const agendasOrdenadas = [...agendas].sort((a, b) => {
      const estadoA = estadoAtual(a).stay;
      const estadoB = estadoAtual(b).stay;

      const order = ["Agendado", "Em andamento", "Finalizado"];

      return order.indexOf(estadoA) - order.indexOf(estadoB);
    });

    return agendasOrdenadas;
  };

  return (
    <Container>
      <Header />
      <Agenda>
        <HamburgerMenu onClick={() => setShowForm(!showForm)}>
          {showForm ? "Fechar" : "Novo Evento"}
        </HamburgerMenu>
        
        {showForm && (
          <Menu>
            <AgendaForm
              handleSubmit={handleSubmit}
              titulo={titulo}
              descricao={descricao}
              dataInicio={dataInicio}
              dataFim={dataFim}
              local={local}
              setTitulo={setTitulo}
              setDescricao={setDescricao}
              setDataInicio={setDataInicio}
              setDataFim={setDataFim}
              setLocal={setLocal}
              isEditing={false}
            />
          </Menu>
        )}

        <div id="cards">
          <InfoBar>
            <ColorLabel color={({theme}) => theme.COLORS.AGENDADO}>
              <span></span> Agendado
            </ColorLabel>
            <ColorLabel color={({theme}) => theme.COLORS.ANDAMENTO}>
              <span></span> Em andamento
            </ColorLabel>
            <ColorLabel color={({theme}) => theme.COLORS.FINALIZADO}>
              <span></span> Finalizado
            </ColorLabel>
          </InfoBar>

          <h2>Agenda</h2>
          {agendas.length > 0 ? (
            ordenarAgendas().map((agenda) => {
              const { color, stay } = estadoAtual(agenda);
              return (
                <AgendaCards
                  key={agenda.id}
                  currentstay={stay}
                  title={agenda.titulo}
                  description={agenda.descricao}
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
          )}
        </div>
      </Agenda>

      {selectedAgenda && (
        <Modal>
          <ModalContent>
            <h2>Editar Evento</h2>
            <Formulario onSubmit={handleEditSubmit}>
              <Input
                className="Input"
                placeholder="Título do Evento"
                type="text"
                value={selectedAgenda.titulo}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, titulo: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Descrição"
                value={selectedAgenda.descricao}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, descricao: e.target.value })
                }
                required
              />
              <Input
                className="Input"
                placeholder="Data e Hora de Início"
                type="datetime-local"
                value={selectedAgenda.dataInicio}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, dataInicio: e.target.value })
                }
                required
              />
              <Input
                className="Input"
                placeholder="Data e Hora de Fim"
                type="datetime-local"
                value={selectedAgenda.dataFim}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, dataFim: e.target.value })
                }
                required
              />
              <Input
                className="Input"
                placeholder="Local"
                type="text"
                value={selectedAgenda.local}
                onChange={(e) =>
                  setSelectedAgenda({ ...selectedAgenda, local: e.target.value })
                }
                required
              />
              <Button title="Salvar" type="submit" />
              <Button title="Deletar" type="button" onClick={() => handleDelete(selectedAgenda.id)} />
            </Formulario>
            <Button title="Fechar" onClick={() => setSelectedAgenda(null)} />
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}
