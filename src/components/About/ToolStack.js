import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiJirasoftware,
  SiJupyter,
  SiLinux,
  SiPostman,
  SiReact,
  SiUdemy,
  SiVisualstudiocode,
} from 'react-icons/si';

const ToolStack = () => {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUdemy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
    </Row>
  );
};

export default ToolStack;
