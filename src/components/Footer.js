import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/kevin-huang-kh19/" >
        <LinkedInIcon />
      </a>
      <a href="mailto:kevinhuang451@gmail.com">
        <EmailIcon />
      </a>
      <a href="https://github.com/kevinhuang19">
        <GitHubIcon />
      </a>
      </div>
      <p> &copy; 2023 </p>
    </div>
  );
}
export default Footer;