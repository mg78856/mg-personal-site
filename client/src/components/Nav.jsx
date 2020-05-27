import React from 'react';
import Pdf from '../assets/Matthew Ginther Résumé.pdf'
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { GrDocumentUser, GrApps } from 'react-icons/gr';

const Nav = ({ hover, exit, showProjects, tracker }) => {
  return (
    <div>
      <div className="icons">
        <span onMouseOver={() => hover('Résumé')} onMouseLeave={() => exit()} onClick={() => tracker('Open Resume')}>
          <a href={Pdf} target="_blank">
            <GrDocumentUser size="2vw" className="navBtn" />
          </a>
        </span>
        <span onMouseOver={() => hover('Github')} onMouseLeave={() => exit()} onClick={() => tracker('Open Github')}>
          <a href="https://github.com/mg78856" target="_blank">
            <FiGithub size="2vw" className="navBtn" />
          </a>
        </span>
        <span onMouseOver={() => hover('LinkedIn')} onMouseLeave={() => exit()} onClick={() => tracker('Open Linkedin')}>
          <a href="https://www.linkedin.com/in/matthew-ginther/" target="_blank">
            <RiLinkedinBoxLine size="2vw" className="navBtn" />
          </a>
        </span>
        <span onMouseOver={() => hover('Projects')} onMouseLeave={() => exit()} onClick={()=> {showProjects(); tracker('Open Projects')}}>
          <GrApps size="2vw" className="navBtn" />
        </span>
      </div>
    </div>
  )
}

export default Nav;