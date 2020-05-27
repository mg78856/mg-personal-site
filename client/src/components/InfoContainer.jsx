import React, { Component } from 'react';
import Typed from 'react-typed';
import Nav from './Nav.jsx';
import Greeting from "./Greeting.jsx";
import Portrait from "../assets/IMG_8350.png";
import Eye from "./Eye.jsx";
import Descrip from "./Descrip.jsx";
import ScreenCap from "./ScreenCap.jsx";
import Link from "./Link.jsx";
import Pointer from "./Pointer.jsx"
import { MdClose } from "react-icons/md";
import ReactGA from "react-ga";

class InfoContainer extends Component {
constructor(props){
  super(props);
  this.state = {
    menu: [],
    switchType: false,
    description: true,
    eyeOne: false,
    eyeTwo: true,
    color: null
  }
  this.handleHover = this.handleHover.bind(this);
  this.handleHoverExit = this.handleHoverExit.bind(this);
  this.handleProjects = this.handleProjects.bind(this);
  this.handleEyeOne = this.handleEyeOne.bind(this);
  this.handleEyeTwo = this.handleEyeTwo.bind(this);
  this.handleTrack = this.handleTrack.bind(this);
}

handleHover (article) {
this.setState({
  menu: [article],
  switchType: true,
  color: Math.floor(Math.random() * Math.floor(11))
})
}

handleHoverExit () {
  this.setState({
    switchType: false,
  })
}

handleProjects () {
this.setState(state => ({
  description: !state.description,
  switchType: false
}));
}

handleEyeOne (){
  this.setState({
    eyeOne: false,
    eyeTwo: true
  })
}

handleEyeTwo () {
  this.setState({
    eyeOne: true,
    eyeTwo: false

  })
}

handleTrack (action) {
  ReactGA.event({
    category: 'Nav',
    action: action
  })
}


render() {
  if (this.state.description === true) {
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
        <Nav hover={this.handleHover} exit={this.handleHoverExit} showProjects={this.handleProjects} tracker={this.handleTrack}/>
      </div>
      <div className="greeting">
              <Greeting selection={this.state.menu} switchType={this.state.switchType}color={this.state.color}/>
       </div>
      </div>
    )
  } else if (this.state.description === false) {
    return (
      <div className="grid">
        <div className="reviews">
        <Typed strings={["A Way Home"]}　typeSpeed={40} loop={false} style={{fontSize: "3.3.5vw", fontFamily: "Quicksand", fontWeight: "bold"}}/>
      </div>
      <button className="reviewButton" onMouseEnter={this.handleEyeOne} >
        <Eye closed={this.state.eyeOne}/>
      </button>
      <div className="sdc">
        <Typed strings={["Mock System Design"]}　typeSpeed={40} loop={false} style={{fontSize: "3.3.5vw", fontFamily: "Quicksand", fontWeight: "bold"}}/>
      </div>
      <button className="sdcButton" onMouseEnter={this.handleEyeTwo} >
        <Eye closed={this.state.eyeTwo}/>
      </button>
      <button className="exit" onClick={this.handleProjects}>
        <MdClose size="2vw" />
      </button>
      <div className="description">
        <Descrip eyeOne={this.state.eyeOne} eyeTwo={this.state.eyeTwo} />
      </div>
      <div className="photo">
        <ScreenCap eyeOne={this.state.eyeOne} eyeTwo={this.state.eyeTwo} />
      </div>
      <div className="link">
        <Link eyeOne={this.state.eyeOne} eyeTwo={this.state.eyeTwo} />
      </div>
      <div className="pointer">
        <Pointer eyeOne={this.state.eyeOne} eyeTwo={this.state.eyeTwo} />
      </div>
      </div>
    )
  }
}
};

export default InfoContainer;