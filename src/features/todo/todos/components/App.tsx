import * as React from 'react';
import MainSection from './MainSection';
import Header from './Header';
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container fluid>
      <Row className="mt-5 justify-content-md-center" >
        <Col className="col-md-4">
          <Header />
          <MainSection />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
