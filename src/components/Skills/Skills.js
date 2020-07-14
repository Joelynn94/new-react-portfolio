import React from 'react'
import './styles.scss'

function Skills() {
  return (
    <section className="skills" id="techSkills">
      <h1 className='section-heading'>
        <span className='green-border'></span>Skills
      </h1>

      <div className="frontend">
        <h3 className="section-subheading align-left">Front-end Technologies</h3>

        <div className="skills">
          <div className="tech-skill">
            <i className="fab fa-js-square skill-icon"></i>
            <p className="tech-text">JavaScript</p>
          </div>

          <div className="tech-skill">
            <i className="fab fa-react skill-icon"></i>
            <p className="tech-text">React</p>
          </div>

          <div className="tech-skill">
            <i className="fab fa-sass skill-icon"></i>
            <p className="tech-text">Sass</p>
          </div>

          <div className="tech-skill">
            <i className="fab fa-html5 skill-icon"></i>
            <p className="tech-text">HTML</p>
          </div>

          <div className="tech-skill">
            <i className="fab fa-css3-alt skill-icon"></i>
            <p className="tech-text">CSS</p>
          </div>
        </div>
        
      </div>

      <div className="backend">
        <h3 className="section-subheading align-left">Back-end Technologies</h3>

        <div className="skills">
          <div className="tech-skill">
            <i className="fab fa-node-js skill-icon"></i>
            <p className="tech-text">Node.js</p>
          </div>

          <div className="tech-skill">
            <i className="fad fa-database skill-icon"></i>
            <p className="tech-text">MongoDB</p>
          </div>

          <div className="tech-skill">
            <i className="fad fa-database skill-icon"></i>
            <p className="tech-text">MySQL</p>
          </div>

        </div>
        
      </div>

    </section>
  )
}

export default Skills
