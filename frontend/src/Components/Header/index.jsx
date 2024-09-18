import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import avatarLogo from '../../assets/logoPresidencia.png'
import { useAuth } from '../../hooks/auth'

export function Header() {
    const { signOut, user } = useAuth();

    return (
        <Container>
            <Profile>
                <img src={avatarLogo} alt="Foto do usuário" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}