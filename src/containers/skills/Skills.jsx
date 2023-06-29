import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { skills } from "../../constants";

import './skills.css';

const SkillCard = ({
  image,
  title,
  features_title,
  experience,
  features_subtitle,
  tools,
}) => {
  return (
    <div className='skills__item'>
      <div className='skills-icon'>
        <img src={image} />
      </div>
        <h2>{title}</h2>
        <h4>{features_title}</h4>
        <p>{experience}</p>
        <h4>{features_subtitle}</h4>
        <div>
        <ul>{tools.map((tool) => (
            <li>{tool.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const Skills = () => {
  
  return (
  <section className="skill" id="skills">
    <Container>
      <Row>
        <Col lg>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <SkillCard key={`index-${index}`} index={index} {...skill} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
};

export default Skills;