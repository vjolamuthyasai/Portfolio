import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from '../../components/Projects/ProjectsCard';

import game from '../../assets/projects/2048.jpg';
import portfolio from '../../assets/projects/portfolio.jpg';
const ProjectContainer = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal portfolio vjmsai-tech which features some of my github projects as well as my resume and technical skills."
              link="https://github.com/vjolamuthyasai/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Portfolio"
              description="A fancy 2048 game build with react, redux best practices. Uses many awesome open source tools to improve code styles, includes eslint, stylelint, prettier, and Travis, codecov continuous integration services to be guaranteed for code quality and deploy application automatically"
              link="https://github.com/vjolamuthyasai/2048_clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProjectContainer;
