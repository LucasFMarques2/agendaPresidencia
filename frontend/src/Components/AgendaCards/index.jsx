import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Container } from './styles';
import { TfiAgenda } from "react-icons/tfi";

export function AgendaCards({currentstay,title,description, color,start, end,locale, ...rest}) {
    return (
      <Container {...rest}>
        <Card className='card' border={color} >
          <Card.Header id='header'><TfiAgenda />{currentstay}</Card.Header>
          <Card.Body>
            <Card.Title id='title'>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
            <footer>
                <div id='time'>
                   Agendado de {start} até {end}  
                </div>
                <div id='locale'>
                    Local: {locale}
                </div>
                </footer>
        </Card>
      </Container>
    );
  }