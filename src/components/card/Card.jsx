import { Container, Image } from "react-bootstrap";
import PropTypes from 'prop-types';
import logo from '../../assets/images/card-logo.svg';
import './Card.scss';

function Card({ name, cardNumber, month, year, cvc }) {
  return (
    <Container className='container-card'>
      <div className="card-front">
        <Image src={logo} className='logo' />
        <div id='card-number'>{cardNumber || '0000 0000 0000 0000'}</div>

        <div className='container-data'>
          <div id='name'>{name || 'CardHolder Name'}</div>
          <div id='date'>{`${month || '00'}/${year || '00'}`}</div>
        </div>
      </div>
      <div className="card-back">
        <div id='number-sec'>{cvc || '000'}</div>
      </div>
    </Container>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  cardNumber: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
  cvc: PropTypes.string,
};

export default Card;
