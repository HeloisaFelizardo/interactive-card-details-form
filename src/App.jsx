import { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Card from "./components/card/Card.jsx";
import FormCard from "./components/form-card/FormCard.jsx";

function App() {
  // Define estados locais utilizando o hook useState do React
  const [name, setName] = useState('');         // Estado para o nome
  const [cardNumber, setCardNumber] = useState(''); // Estado para o número do cartão
  const [month, setMonth] = useState('');       // Estado para o mês de expiração
  const [year, setYear] = useState('');         // Estado para o ano de expiração
  const [cvc, setCvc] = useState('');           // Estado para o código CVC

  return (
    <Container className='App'> {/* Container principal da aplicação */}
      <Row> {/* Linha para organizar os componentes */}
        <Col lg={6}>
          {/* Componente Card que exibe os dados do cartão */}
          <Card
            name={name}           // Propriedade: nome do titular do cartão
            cardNumber={cardNumber} // Propriedade: número do cartão
            month={month}         // Propriedade: mês de expiração
            year={year}           // Propriedade: ano de expiração
            cvc={cvc}             // Propriedade: código CVC
          />
        </Col>
        <Col lg={5}>
          {/* Componente FormCard que permite inserir e validar os dados do cartão */}
          <FormCard
            setName={setName}           // Função para atualizar o estado do nome
            setCardNumber={setCardNumber} // Função para atualizar o estado do número do cartão
            setMonth={setMonth}         // Função para atualizar o estado do mês de expiração
            setYear={setYear}           // Função para atualizar o estado do ano de expiração
            setCvc={setCvc}             // Função para atualizar o estado do código CVC
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
