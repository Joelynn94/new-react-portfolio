import React from 'react';
import './styles.scss';

function Skills() {
  return (
    <section className='skills' id='techSkills'>
      <div className='container'>
        <h1 className='section-heading'>
          <span className='green-border'></span>Skills
        </h1>

        <div className='frontend'>
          <h3 className='section-subheading align-left'>
            Front-end Technologies
          </h3>

          <div className='skills'>
            <div className='tech-skill'>
              <i className='fab fa-js-square skill-icon js-icon'></i>
              <p className='tech-text'>JavaScript</p>
            </div>

            <div className='tech-skill'>
              <i className='fab fa-react skill-icon react-icon'></i>
              <p className='tech-text'>React</p>
            </div>

            <div className='tech-skill'>
              <i className='fab fa-sass skill-icon sass-icon'></i>
              <p className='tech-text'>Sass</p>
            </div>

            <div className='tech-skill'>
              <i className='fab fa-html5 skill-icon html-icon'></i>
              <p className='tech-text'>HTML</p>
            </div>

            <div className='tech-skill'>
              <i className='fab fa-css3-alt skill-icon css-icon'></i>
              <p className='tech-text'>CSS</p>
            </div>
          </div>
        </div>

        <div className='backend'>
          <h3 className='section-subheading align-left'>
            Back-end Technologies
          </h3>

          <div className='skills'>
            <div className='tech-skill'>
              <i className='fab fa-node-js skill-icon node-icon'></i>
              <p className='tech-text'>Node.js</p>
            </div>

            <div className='tech-skill'>
              <i className='fad fa-database skill-icon mongodb-icon'></i>
              <p className='tech-text'>MongoDB</p>
            </div>

            <div className='tech-skill'>
              <i className='fad fa-database skill-icon mysql-icon'></i>
              <p className='tech-text'>MySQL</p>
            </div>
          </div>
        </div>

        <div className='misc'>
          <h3 className='section-subheading align-left'>Misc Technologies</h3>

          <div className='skills'>
            <div className='tech-skill'>
              <i className='fab fa-npm skill-icon npm-icon'></i>
              <p className='tech-text'>NPM</p>
            </div>

            <div className='tech-skill'>
              <i className='fab fa-git-alt skill-icon git-icon'></i>
              <p className='tech-text'>Git</p>
            </div>

            <div className='tech-skill'>
              <i className='fab fa-gulp skill-icon gulp-icon'></i>
              <p className='tech-text'>Gulp</p>
            </div>

            <div className='tech-skill'>
              <img
                className='webpack-img skill-icon'
                src='../images/icon-square-big.svg'
                alt='webpack svg'
              ></img>
              <p className='tech-text'>Webpack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
