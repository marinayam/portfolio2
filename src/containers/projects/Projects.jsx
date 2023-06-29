import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {Container, Row, Col} from 'react-bootstrap';
import { github } from "../../assets";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import './projects.css';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='projects__projectCard-container'
      >
      <div 
          onClick={() => window.open(demo_link, "_blank")}
          className='projects__projectCard-imgBox'>
        <img
          src={image}
          alt='project_image'
          className='projects__projectCard-img'
        />

        <div className='projects__projectCard-icon card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='projects__projectCard-icon_bg black-gradient'
          >
            <img
              src={github}
              alt='source code'
              className='projects__projectCard-icon_img'
            />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='projects__projectCard-title'>{name}</h3>
        <p className='projects__projectCard-descr'>{description}</p>
      </div>
      <div className='projects__projectCard-tag'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`projects__projectCard-tag ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
    <section className="projects" id="projects">
    <Container>
      <Row>
          <motion.div variants={textVariant()}>
            <h2 className='projects__title'>Projects</h2>
          </motion.div>

          <div className='projects__container'>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='projects__descr'
            >
              私のスキルを仮想プロジェクトを通して紹介しております<br></br>
              各プロジェクトには簡単な説明とコードやライブデモへのリンクがあります。
            </motion.p>
          </div>
          <Col md>
          <div className='projects__item'>
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    </>
    
  );
};

export default Projects;