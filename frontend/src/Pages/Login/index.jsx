import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from '../../Components/Input';
import { Button } from "../../Components/Button";
import { useAuth } from '../../hooks/auth'; 

import logo from '../../assets/logoPresidencia.png';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth(); 

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signIn({ email, password }); 
        } catch (error) {
            console.error("Erro ao fazer login", error);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <img src={logo} alt="Logo" />
                <h1>Agenda da Presidência</h1>
                <p>Aplicação para gerenciamento de agenda</p>

                <h2>Faça seu login</h2>
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
                <Button title="Entrar" type="submit" />
                <Link to="/cadastro">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    );
}
