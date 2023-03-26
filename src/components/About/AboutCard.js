import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am{' '}
            <span className="purple">Vanka Jola Muthya Sai </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />I have pursued BTech in Computer Science and Engineer in
            Vignan's Institute of Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <br />
          <footer className="blockquote-footer">Vanka Jola Muthya Sai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
