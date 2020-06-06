import React, { Component } from 'react';
import Projects from "./Projects.jsx";
import Home from './Home.jsx';
import ReactGA from "react-ga";
import MobileNav from "./MobileNav.jsx";
import ProjectSelect from "./ProjectSelect.jsx";
import AWayHome from "./AWayHome.jsx";
import SysDesignProject from "./SysDesignProject.jsx";


class InfoContainer extends Component {
constructor(props){
  super(props);
  this.state = {
    menu: [],
    switchType: false,
    description: true,
    eyeOne: false,
    eyeTwo: true,
    color: null,
    width: null,
    height: null,
    view: "home"
  }
  this.handleHover = this.handleHover.bind(this);
  this.handleHoverExit = this.handleHoverExit.bind(this);
  this.handleEyeOne = this.handleEyeOne.bind(this);
  this.handleEyeTwo = this.handleEyeTwo.bind(this);
  this.handleTrack = this.handleTrack.bind(this);
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  this.handleView = this.handleView.bind(this);
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

handleView (page) {
  this.setState({
    view: page,
    switchType: false
  })
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}


componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

render() {
  if (this.state.view === "home") {
    return <Home handleHover={this.handleHover} handleHoverExit={this.handleHoverExit} handleTrack={this.handleTrack} menu={this.state.menu} color={this.state.color} switchType={this.state.switchType} width={this.state.width} nav={this.handleView}/>
  } else if (this.state.view === "projects") {
    return <Projects eyeOne={this.state.eyeOne} eyeTwo={this.state.eyeTwo}      handleEyeOne={this.handleEyeOne} handleEyeTwo={this.handleEyeTwo} handleProjects={this.handleView}/>
  } else if (this.state.view === "mobileNav") {
    return <MobileNav back={this.handleView}/>
  } else if (this.state.view === "mobileProjects"){
    return <ProjectSelect nav={this.handleView}/>
  } else if (this.state.view === "aWayHome"){
    return <AWayHome nav={this.handleView}/>
  } else if ( this.state.view === "sdc"){
    return <SysDesignProject nav={this.handleView}/>
  }


}
};

export default InfoContainer;