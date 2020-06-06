import React from "react";
import { IoMdArrowBack } from 'react-icons/io';
import ScreenCapOne from "../assets/Screen Shot 2020-03-03 at 7.48.05 PM.png";
import Typed from 'react-typed';


const AWayHome = ({ nav }) => {
  return (
    <div className="grid">
      <button className="back-btn" onClick={() => nav("mobileProjects")}>
        <IoMdArrowBack size="3vh"/>
      </button>
      <div className="title">
        <Typed strings={["A Way Home"]}　typeSpeed={40} loop={false} style={{fontSize: "2vh", fontFamily: "Quicksand", fontWeight: "bold", color: "black"}} />
      </div>
      <div className="photo">
        <img src={ScreenCapOne} />
      </div>
      <div className="projectSummary">
        <ul className="dashed">
          <li>
            Built a front-end clone of Home Away’s Review and Map section using React
          </li>
          <li>
            Utilized Google Maps Javascript API to dynamically render custom markers based on a listing’s location
          </li>
          <li>
            Implemented SOA to collectively build a product display page for Home Away by merging multiple micro-services into one proxy server
          </li>
        </ul>
      </div>
      <div className="link">
        <a href="https://awayhome-al-proxy-fec.herokuapp.com/" target="_blank" style={{fontSize: "4vh"}}>
          Link
        </a>
      </div>


    </div>
  )
}

export default AWayHome;