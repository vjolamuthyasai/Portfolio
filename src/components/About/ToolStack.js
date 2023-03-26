import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiHeroku,
  SiJupyter,
  SiLinux,
  SiPostman,
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
        <SiHeroku />
      </Col>
    </Row>
  );
};

export default ToolStack;
