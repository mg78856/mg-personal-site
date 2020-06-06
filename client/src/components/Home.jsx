import React from 'react';
import Nav from './Nav.jsx';
import Greeting from "./Greeting.jsx";
import Portrait from "../assets/IMG_8350.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Home = ({handleHover, handleHoverExit, handleTrack, menu, color, switchType, width, nav}) => {
return (
  <div className="grid">
    <div className="portrait">
       <img src={Portrait} />
    </div>
  <div className="intro">
    <p> I’m Matthew Ginther, a Software Engineer based in Los Angeles, I’m adept in Javascript and its frameworks (React, Node.js).
    </p>
  </div>
  <div className="nav">
    <Nav hover={handleHover} exit={handleHoverExit} tracker={handleTrack} nav={nav}/>
  </div>
  <div className="greeting">
          <Greeting selection={menu} switchType={switchType}color={color} width={width}/>
   </div>
   <button className="mobileNav" onClick={() => nav("mobileNav")}>
     <GiHamburgerMenu size="3vh"/>
   </button>
  </div>
);
}

export default Home;