import React from 'react';
import ScreenCapOne from "../assets/Screen Shot 2020-03-03 at 7.48.05 PM.png"
import ScreenCapTwo from "../assets/loadbalancer-1323727745.us-west-1.elb.amazonaws.com G.png";

const ScreenCap = ({ eyeOne, eyeTwo }) => {
  if (eyeOne === false && eyeTwo === true) {
    return <img src={ScreenCapOne} style={{border:"black 2px solid"}}/>
  } else if (eyeTwo === false && eyeOne === true) {
    return <img src={ScreenCapTwo} style={{border:"black 2px solid"}}/>
  }
}

export default ScreenCap