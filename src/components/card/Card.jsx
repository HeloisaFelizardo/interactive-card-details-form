import {Container, Image} from "react-bootstrap";
import logo from '../../assets/images/card-logo.svg'
import './Card.scss'

function Card(props) {
  return (
    <Container className='container-card'>
      <div className="card-front">
        <Image src={logo} className='logo'/>
        <div id='card-number'>9591 6489 6389 101E</div>

        <div className='container-data'>
          <div id='name'>Felicia Leire</div>
          <div id='date'>09/00</div>
        </div>

      </div>
      <div className="card-back">
        <div id='number-sec'>123</div>
      </div>
    </Container>
  )
}

export default Card;