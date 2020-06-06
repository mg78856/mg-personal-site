import React from 'react';
import Typed from 'react-typed';
import Pdf from '../assets/Matthew_Ginther_Resume.pdf'
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { GrDocumentUser, GrApps } from 'react-icons/gr';
import { IoMdArrowBack } from 'react-icons/io'

const MobileNav = ({ back }) => {
  return(
    <div className="grid">
      <button className="back-btn" onClick={() => back("home")}>
        <IoMdArrowBack size="3vh"/>
      </button>
        <div className="resume-btn">
          <a href={Pdf} target="_blank">
            <GrDocumentUser size="5vh"/>
          </a>
        </div>
        <div className="resume-typ">
          <a href={Pdf} target="_blank">
            <Typed strings={["Résumé"]}　typeSpeed={40} loop={false} style={{fontSize: "5vh", fontFamily: "Quicksand", fontWeight: "bold", color: "#ff60c5"}} />
          </a>
        </div>
        <div className="git-btn">
          <a href="https://github.com/mg78856" target="_blank">
            <FiGithub size="5vh"/>
          </a>
        </div>
        <div className="git-typ">
          <a href="https://github.com/mg78856" target="_blank">
            <Typed strings={["Github"]}　typeSpeed={40} loop={false} style={{fontSize: "5vh", fontFamily: "Quicksand", fontWeight: "bold", color: "#ff6830"}} />
          </a>
        </div>
        <div className="link-btn">
          <a href="https://www.linkedin.com/in/matthew-ginther/" target="_blank">
            <RiLinkedinBoxLine size="5vh"/>
          </a>
        </div>
        <div className="link-typ">
          <a href="https://www.linkedin.com/in/matthew-ginther/" target="_blank">
            <Typed strings={["LinkedIn"]}　typeSpeed={40} loop={false} style={{fontSize: "5vh", fontFamily: "Quicksand", fontWeight: "bold", color: "#fede64"}} />
          </a>
        </div>
        <div className="project-btn" onClick={() => back("mobileProjects")}>
          <GrApps size="5vh"/>
        </div>
        <div className="project-typ" onClick={() => back("mobileProjects")}>
          <Typed strings={["Projects"]}　typeSpeed={40} loop={false} style={{fontSize: "5vh", fontFamily: "Quicksand", fontWeight: "bold", color: "#c8dd7a"}} />
        </div>
    </div>
  )
}

export default MobileNav;