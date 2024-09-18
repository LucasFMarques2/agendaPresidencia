import React from "react";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import {FormContainer} from './styles'

export function AgendaForm({
  handleSubmit,
  titulo,
  descricao,
  dataInicio,
  dataFim,
  local,
  setTitulo,
  setDescricao,
  setDataInicio,
  setDataFim,
  setLocal,
  isEditing,
  handleEditSubmit,
}) {
  return (
    <FormContainer onSubmit={isEditing ? handleEditSubmit : handleSubmit}>
      <h2>{isEditing ? "Editar Evento" : "Adicionar Novo Evento"}</h2>
      <Input
        className="Input"
        placeholder="Título do Evento"
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <Input
        className="Input"
        placeholder="Data e Hora de Início"
        type="datetime-local"
        value={dataInicio}
        onChange={(e) => setDataInicio(e.target.value)}
        required
      />
      <Input
        className="Input"
        placeholder="Data e Hora de Fim"
        type="datetime-local"
        value={dataFim}
        onChange={(e) => setDataFim(e.target.value)}
        required
      />
      <Input
        className="Input"
        placeholder="Local"
        type="text"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        required
      />
      <Button title={isEditing ? "Salvar" : "Enviar"} type="submit" />
    </FormContainer >
  );
}
