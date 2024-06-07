import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Type from "../components/Type";
import { frontEnd } from "../helpers/SkillsList";
import { backEnd } from "../helpers/SkillsList";
import { Technologies } from "../helpers/SkillsList";
import { Languages } from "../helpers/SkillsList";
import profile from "../assets/profile.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <section id="profile">
          <div className="section-profile-picture">
            <img src={profile} alt="me" className="profile-image"></img>
          </div>
          <div className="section-text">
            <h5> hello, my name is</h5>
            <h2>Kevin Huang</h2>
            <h3>
              <Type />
            </h3>
            <center>
              <div className="prompt">
                <div>
                  <a href="https://www.linkedin.com/in/kevin-huang-kh19/">
                    <LinkedInIcon className="social button" />
                  </a>
                </div>
                <div>
                  <a href="mailto:kevinhuang451@gmail.com">
                    <EmailIcon className="social button" />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/kevinhuang19">
                    <GitHubIcon className="social button" />
                  </a>
                </div>
              </div>
            </center>
          </div>
        </section>
      </div>
      <div className="skills d-grid text-center gap-3">
        <h1> Skills</h1>
      </div>
      <div className="container skill-container">
        <div className="skill-sub-container">
          <h2 className="skillHeader">
            <b> Front-End </b>
          </h2>
          <span className="skills-in-box">
            {frontEnd.map((skill) => {
              return (
                <div className="card button">
                  <div className="card-body">
                    <p className="card-text">{skill.skill}</p>
                  </div>
                </div>
              );
            })}
          </span>
        </div>
        <div className="skill-sub-container">
          <h2 className="skillHeader">
            <b> Back-End</b>
          </h2>
          <span className="skills-in-box">
            {backEnd.map((skill) => {
              return (
                <div className="card button">
                  <div className="card-body">
                    <p className="card-text">{skill.skill}</p>
                  </div>
                </div>
              );
            })}
          </span>
        </div>
        <div className="skill-sub-container">
          <h2 className="skillHeader">
            <b> Technologies </b>
          </h2>
          <span className="skills-in-box">
            {Technologies.map((skill) => {
              return (
                <div className="card button">
                  <div className="card-body">
                    <p className="card-text">{skill.skill}</p>
                  </div>
                </div>
              );
            })}
          </span>
        </div>
        <div className="skill-sub-container">
          <h2 className="skillHeader">
            <b> Languages </b>
          </h2>
          <span className="skills-in-box">
            {Languages.map((skill) => {
              return (
                <div className="card button">
                  <div className="card-body">
                    <p className="card-text">{skill.skill}</p>
                  </div>
                </div>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
