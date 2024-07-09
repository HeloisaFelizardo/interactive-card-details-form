import PropTypes from 'prop-types';
import {useState} from 'react';
import {Button, Col, Form, InputGroup, Row, Container, Image, Modal} from 'react-bootstrap';
import complete from '../../assets/images/icon-complete.svg';
import './FormCard.scss';

function FormCard({setName, setCardNumber, setMonth, setYear, setCvc}) {
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShowModal(true);
    }
    setValidated(true);
  };

  const handleContinue = () => {
    setValidated(false);
    setName('');
    setCardNumber('');
    setMonth('');
    setYear('');
    setCvc('');
    setShowModal(false);
  };

  return (
    <Container className='container-form'>
      {!showModal ? (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className='mb-3'>
            <Form.Group as={Col} md='12'>
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control
                required
                id='name'
                type='text'
                maxLength='100'
                placeholder='e.g Jane Appleseed'
                pattern='^[a-zA-Z]+ [a-zA-Z]+(?: [a-zA-Z]+)*$'
                onChange={(e) => {
                  let value = e.target.value.replace(/[^a-zA-Z]/g, '');
                  setName(value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>
                Please enter a valid full name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='12'>
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                required
                id='cardNumber'
                type='text'
                maxLength='16'
                placeholder='1234 5678 9123 0000'
                pattern='^\d{16}$'
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
                  if (value.length > 16) value = value.slice(0, 16); // Limita a 16 caracteres
                  value = value.replace(/(.{4})/g, '$1 ').trim(); // Adiciona espaço a cada 4 caracteres
                  setCardNumber(value);
                }}
              />
              <Form.Control.Feedback type='invalid'>
                Wrong format, numbers only.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} xs='6'>
              <Form.Label>Exp. Date (MM/YY)</Form.Label>
              <InputGroup>
                <Form.Control
                  id='month'
                  type='text'
                  placeholder='MM'
                  required
                  maxLength='2'
                  pattern='^(0[1-9]|1[0-2])$'
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
                    setMonth(value);
                  }}
                />
                <Form.Control
                  id='year'
                  type='text'
                  placeholder='YY'
                  required
                  maxLength='2'
                  pattern='^(2[4-9]|3[0-9]|4[0-9]|50)$'
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
                    setYear(value);
                  }}
                />

                <Form.Control.Feedback type='invalid'>
                  Please enter a valid expiration date.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} xs='6'>
              <Form.Label>CVC</Form.Label>
              <Form.Control
                id='cvc'
                type='text'
                placeholder='e.g. 123'
                required
                maxLength='3'
                pattern='^\d{3}$'
                onChange={(e) => setCvc(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid CVC.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type='submit'>Confirm</Button>
        </Form>
      ) : (
        <Modal.Dialog>
          <Modal.Body>
            <Image src={complete}/>
            <h2>Thank You!</h2>
            <p>We've added your card details.</p>
            <Button onClick={handleContinue}>Continue</Button>
          </Modal.Body>
        </Modal.Dialog>
      )}
    </Container>
  );
}

FormCard.propTypes = {
  setName: PropTypes.func.isRequired,
  setCardNumber: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  setCvc: PropTypes.func.isRequired,
};

export default FormCard;
