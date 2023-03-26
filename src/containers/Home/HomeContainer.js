import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import homeLogo from '../../assets/home-main.svg';
import Home from '../../components/Home/Home';
import Particle from '../../components/Home/Particle';
import Type from '../../components/Home/Type';

const HomeContainer = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vanka Jola Muthya Sai</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home />
    </section>
  );
};

export default HomeContainer;
