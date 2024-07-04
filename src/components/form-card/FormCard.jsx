import PropTypes from 'prop-types'; // Importa o PropTypes para validação das props
import { useState } from 'react'; // Importa o useState do React para gerenciar estado local
import { Button, Col, Form, InputGroup, Row, Container, Image, Modal } from 'react-bootstrap'; // Importa componentes do React Bootstrap
import complete from '../../assets/images/icon-complete.svg'; // Importa a imagem do ícone completo
import './FormCard.scss'; // Importa estilos CSS específicos para o FormCard

function FormCard({ setName, setCardNumber, setMonth, setYear, setCvc }) {
  const [validated, setValidated] = useState(false); // Estado para controle de validação do formulário
  const [showModal, setShowModal] = useState(false); // Estado para controle da exibição do modal
  const [cardNumberValid, setCardNumberValid] = useState(true); // Estado para validação do número do cartão

  // Função para lidar com a mudança no número do cartão
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^\d{4} \d{4} \d{4} \d{4}$/; // Regex para validar o formato do número do cartão
    setCardNumberValid(regex.test(value)); // Atualiza o estado de validação do número do cartão
    setCardNumber(value); // Atualiza o estado do número do cartão no componente pai
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault(); // Previne o comportamento padrão de envio se o formulário for inválido
      event.stopPropagation();
    } else {
      event.preventDefault();
      setShowModal(true); // Exibe o modal quando o formulário é enviado com sucesso
    }

    setValidated(true); // Marca o formulário como validado
  };

  return (
    <Container className='container-form'>
      {!showModal ? ( // Renderiza o formulário se showModal for falso, caso contrário, renderiza o modal
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control
                required
                id='name'
                type="text"
                placeholder="e.g Jane Appleseed"
                pattern="^[a-zA-Z]+ [a-zA-Z]+(?: [a-zA-Z]+)*$" // Regex para validar nome completo
                onChange={(e) => setName(e.target.value)} // Atualiza o estado do nome no componente pai
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter a valid full name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md="12">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                required
                id='cardNumber'
                type="text"
                placeholder="1234 5678 9123 0000"
                isInvalid={!cardNumberValid} // Marca o campo como inválido se a validação do número do cartão falhar
                onChange={handleCardNumberChange} // Chama a função de mudança do número do cartão
              />
              <Form.Control.Feedback type="invalid">
                Wrong format, numbers only.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Exp. Date (MM/YY)</Form.Label>
              <InputGroup>
                <Form.Control
                  id="month"
                  type="text"
                  placeholder="MM"
                  required
                  pattern="^(0[1-9]|1[0-2])$" // Regex para validar o mês
                  onChange={(e) => setMonth(e.target.value)} // Atualiza o estado do mês no componente pai
                />
                <Form.Control
                  id="year"
                  type="text"
                  placeholder="YY"
                  required
                  pattern="^\d{2}$" // Regex para validar o ano
                  onChange={(e) => setYear(e.target.value)} // Atualiza o estado do ano no componente pai
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid expiration date.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                id='cvc'
                type="text"
                placeholder="e.g. 123"
                required
                pattern="^\d{3}$" // Regex para validar o CVC
                onChange={(e) => setCvc(e.target.value)} // Atualiza o estado do CVC no componente pai
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid CVC.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Confirm</Button>
        </Form>
      ) : (
        <Modal.Dialog>
          <Modal.Body>
            <Image src={complete} />
            <h2>Thank You!</h2>
            <p>We've added your card details.</p>
            <Button onClick={() => setShowModal(false)}>Continue</Button>
          </Modal.Body>
        </Modal.Dialog>
      )}
    </Container>
  );
}

// Define as PropTypes para garantir que as funções de atualização das props sejam passadas corretamente
FormCard.propTypes = {
  setName: PropTypes.func.isRequired,
  setCardNumber: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  setCvc: PropTypes.func.isRequired,
};

export default FormCard;

/*
useState: Utilizado para gerenciar estados locais (validated, showModal, cardNumberValid) no componente funcional FormCard.

handleCardNumberChange: Função para lidar com mudanças no campo do número do cartão. Usa uma regex para validar o formato e atualiza o estado do número do cartão (cardNumber) e sua validade (cardNumberValid).

handleSubmit: Função chamada ao enviar o formulário. Verifica se o formulário é válido. Se não for, previne o envio padrão e impede a propagação do evento. Se for válido, previne o envio padrão e mostra o modal (showModal).

Formulário e Modal: Renderização condicional baseada no estado showModal. O formulário é exibido se showModal for falso. O modal de confirmação é exibido se showModal for verdadeiro, após o envio bem-sucedido do formulário.

Validações: Utiliza padrões regex nos campos de nome, número do cartão, mês, ano e CVC para garantir que os dados inseridos sejam válidos. Fornece feedback visual ao usuário através do Bootstrap React (Form.Control.Feedback) para indicar campos inválidos.

PropTypes: Define as PropTypes para garantir que as funções (setName, setCardNumber, setMonth, setYear, setCvc) necessárias sejam passadas corretamente como props para FormCard.*/