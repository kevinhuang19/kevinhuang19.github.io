import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css';
import Type from '../components/Type';
import { frontEnd } from '../helpers/SkillsList';
import { backEnd } from '../helpers/SkillsList';
import { Technologies } from '../helpers/SkillsList';
import { Languages } from '../helpers/SkillsList';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Kevin Huang</h2>
        <div className="prompt">
          <Type />
          <a href="https://www.linkedin.com/in/kevin-huang-kh19/" >
          <LinkedInIcon className='button'/>
          </a>
          <a href="mailto:kevinhuang451@gmail.com">
            <EmailIcon className='button'/>
          </a>
          <a href="https://github.com/kevinhuang19">
            <GitHubIcon className='button'/>
          </a>
        </div>
      </div>
      <div className="skills d-grid text-center gap-3">
        <h1> Skills</h1>
        <h2><b> Front-End </b></h2>
        <span className='container d-flex d-grid gap-3 justify-content-center col-lg-12 col-md-12 col-sm-12 col-xs-3'>
        {frontEnd.map((skill) => {
          return (
            <div className='card button'>
              <div className='card-body'>
                <p className='card-text'>
                  {skill.skill}
                </p>
              </div>
            </div>
            );
          })}
        </span>
        <h2><b> Back-End</b></h2>
        <span className='container d-flex d-grid gap-3 justify-content-center col-lg-12 col-md-12 col-sm-12 col-xs-3'>
        {backEnd.map((skill) => {
          return (
            <div className='card button'>
              <div className='card-body'>
                <p className='card-text'>
                  {skill.skill}
                </p>
              </div>
            </div>
            );
          })}
        </span>
        <h2><b> Technologies </b></h2>
        <span className='container d-flex d-grid gap-3 justify-content-center col-lg-12 col-md-12 col-sm-12 col-xs-3'>
        {Technologies.map((skill) => {
          return (
            <div className='card button'>
              <div className='card-body'>
                <p className='card-text'>
                  {skill.skill}
                </p>
              </div>
            </div>
            );
          })}
        </span>
        <h2><b> Languages </b></h2>
        <span className='container d-flex d-grid gap-3 justify-content-center col-lg-12 col-md-12 col-sm-12 col-xs-3'>
        {Languages.map((skill) => {
          return (
            <div className='card button'>
              <div className='card-body'>
                <p className='card-text'>
                  {skill.skill}
                </p>
              </div>
            </div>
            );
          })}
        </span>
      </div>
    </div>
  );
}

export default Home;