import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css';
import Type from '../components/Type';

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
          <div className="skills">
            <h1> Skills</h1>
            <ol className="list">
              <li className="item">
                <h2> Front-End</h2>
                <span>
                   HTML, CSS, JavaScript, React, BootStrap, LESS, JQuery
                </span>
              </li>
              <li className="item">
                <h2>Back-End</h2>
                <span>
                  SQL, MySQL, PHP, Java Spring, DynamoDB, MS SQL, Oracle, phpMyAdmin, Postgress
                </span>
              </li>
              <li className="item">
                <h2>Technologies</h2>
                <span>Git, Visual Studios, Jira, Confluence, Azure Devops, Servoy, Insomnia, Android Studios, Intellij </span>
              </li>
              <li className="item">
                <h2>Languages</h2>
                <span>Java, JavaScript, C#, C, HTML, CSS, PHP</span>
              </li>
            </ol>
          </div>
        </div>
      );
    }

export default Home;