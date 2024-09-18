import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel, FormSelect } from 'react-bootstrap';

export function AddAgendaForm({ onAdd }) {
    const [form, setForm] = useState({
        titulo: '',
        desc: '',
        dataInicio: '',
        dataFim: '',
        local: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (new Date(form.dataInicio) > new Date(form.dataFim)) {
            setError('A data de início não pode ser maior que a data de fim.');
            return;
        }

        setError('');
        onAdd({
            ...form,
            estadoAtual: 'agendado' 
        });

        setForm({
            titulo: '',
            desc: '',
            dataInicio: '',
            dataFim: '',
            local: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel>Título</FormLabel>
                <FormControl
                    type="text"
                    name="titulo"
                    value={form.titulo}
                    onChange={handleInputChange}
                    placeholder="Título"
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Descrição</FormLabel>
                <FormControl
                    as="textarea"
                    name="desc"
                    value={form.desc}
                    onChange={handleInputChange}
                    placeholder="Descrição"
                    rows={3}
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Data de Início</FormLabel>
                <FormControl
                    type="datetime-local"
                    name="dataInicio"
                    value={form.dataInicio}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Data de Fim</FormLabel>
                <FormControl
                    type="datetime-local"
                    name="dataFim"
                    value={form.dataFim}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <FormGroup>
                <FormLabel>Local</FormLabel>
                <FormControl
                    type="text"
                    name="local"
                    value={form.local}
                    onChange={handleInputChange}
                    placeholder="Local"
                    required
                />
            </FormGroup>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="submit" variant="primary">Adicionar</Button>
        </form>
    );
}
