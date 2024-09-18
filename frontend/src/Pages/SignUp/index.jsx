import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import api from '../../services/api'; 
import logo from '../../assets/logoPresidencia.png';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    try {
      await api.post('/register', { name, email, password });
      alert("Conta criada com sucesso!");
      navigate('/'); 
    } catch (error) {
     
      if (error.response && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao criar conta. Tente novamente.");
      }
    }
  };

  return (
    <Container>
      <Background />
      <Form onSubmit={handleSignUp}>
        <img src={logo} alt="Logo" />
        <h1>Agenda da Presidência</h1>
        <p>Aplicação para gerenciamento de agenda</p>

        <h2>Crie sua conta</h2>
        <Input 
          placeholder="Nome" 
          type="text" 
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha" 
          type="password" 
          icon={FiLock}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" type="submit" />
        <Link to="/">Voltar para login</Link>
      </Form>
    </Container>
  );
}
