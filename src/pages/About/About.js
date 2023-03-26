import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import laptopImg from '../../assets/about.png';
import AboutCard from '../../components/About/AboutCard';
import TechStack from '../../components/About/TechStack';
import ToolStack from '../../components/About/ToolStack';

const AboutPage = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <TechStack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolStack />
      </Container>
    </Container>
  );
};

export default AboutPage;
