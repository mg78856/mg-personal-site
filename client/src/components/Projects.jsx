import React from 'react';
import Typed from 'react-typed';
import Eye from './Eye.jsx';
import Descrip from './Descrip.jsx';
import ScreenCap from './ScreenCap.jsx';
import Link from './Link.jsx';
import Pointer from './Pointer.jsx';
import { MdClose } from 'react-icons/md';

const Projects = ({eyeOne, eyeTwo, handleEyeOne, handleEyeTwo, handleProjects}) => {
  return (
    <div className="grid">
        <div className="reviews">
        <Typed strings={["A Way Home"]}　typeSpeed={40} loop={false} style={{fontSize: "3.3.5vw", fontFamily: "Quicksand", fontWeight: "bold"}}/>
      </div>
      <button className="reviewButton" onMouseEnter={handleEyeOne} >
        <Eye closed={eyeOne}/>
      </button>
      <div className="sdc">
        <Typed strings={["Mock System Design"]}　typeSpeed={40} loop={false} style={{fontSize: "3.3.5vw", fontFamily: "Quicksand", fontWeight: "bold"}}/>
      </div>
      <button className="sdcButton" onMouseEnter={handleEyeTwo} >
        <Eye closed={eyeTwo}/>
      </button>
      <button className="exit" onClick={() => handleProjects("home")}>
        <MdClose size="2vw" />
      </button>
      <div className="description">
        <Descrip eyeOne={eyeOne} eyeTwo={eyeTwo} />
      </div>
      <div className="photo">
        <ScreenCap eyeOne={eyeOne} eyeTwo={eyeTwo} />
      </div>
      <div className="link">
        <Link eyeOne={eyeOne} eyeTwo={eyeTwo} />
      </div>
      <div className="pointer">
        <Pointer eyeOne={eyeOne} eyeTwo={eyeTwo} />
      </div>
      </div>
  )
}

export default Projects;