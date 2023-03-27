import React from 'react';
const Resume = () => {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend Developer Intern [Flash Tech]"
              date="July 2021 - September 2021"
              content={[
                'Worked on the development of an E-commerce website',
                'Redesigned Wigme.com and created features to enhance the user experience and optimized designs for smartphones.',
                ' Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.',
                'Used Back-End APIs to display data using the Custom Components, library Components, and Redux.',
                'Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on an everyday basis.',
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                'Worked on building front-end UI design using HTML5, CSS3, JavaScript jQuery, and building API routes using Node and express.js.',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="IMSC MATHS AND COMPUTING [BIT Mesra, Ranchi] "
              date="2018 - Present"
              content={[`CGPA: 8.2`]}
            />

            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                'Article entitled An Overlapping Sliding Window and Combined Feature based Emotion Recognition System for EEG Signals publised in Emerald Publication;10.1108/ACI-05-2021-0130',
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj 10000`,
                `Current rank in HackerRank  15000`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
