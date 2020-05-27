import React, { useEffect } from 'react';
import InfoContainer from './InfoContainer.jsx'
import Particles from 'react-particles-js';
import ReactGA from "react-ga";

const App = () => {

  useEffect(() => {
    ReactGA.initialize('UA-167464518-1');

    ReactGA.pageview('/')
  }, [])


    return (
      <div>
        <Particles className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 1.5
          },
          "color": {
            "value": ["#ff60c5", "#ff6830", "#ffae51", "#fede64", "#feef45", "#c8dd7a", "#00bd92", "#00cbde", "#59ddfe", "#01baf2", "#025cd1", "#f431be"]
          }
      },
      "line_linked": {
        "enable": true,
        "color": "#c8c8c8",
        "distance": 150,
        "width": 2,
        "opacity": 0.4
      },
	    "interactivity": {
        "detect_on": "canvas",
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        }
      },
      "retina_detect": true,
	}} />
        <div className="main">
          <InfoContainer />
        </div>
      </div>
    )

}

export default App;