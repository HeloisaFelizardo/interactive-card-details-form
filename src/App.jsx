
import {Col, Container, Row} from "react-bootstrap";
import Card from "./components/card/Card.jsx";

function App() {

  return (
    <Container className='App'>
      <Row>
        <Col lg={6} ><Card/></Col>
        <Col lg={5}>sm=4</Col>
      </Row>
    </Container>
  )
}

export default App
