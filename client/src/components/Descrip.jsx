import React from 'react';

const Descrip = ({ eyeOne, eyeTwo }) => {
  if (eyeOne === false && eyeTwo === true) {
    return (
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
    )
  } else if (eyeTwo === false && eyeOne === true) {
    return (
      <ul className="dashed">
        <li>
        Hosted multiple servers on AWS EC2 instances with a load balancer to improve GET request times by 83% and an error rate of 0%
        </li>
        <li>
        Utilized Node stream functions to write 10 million primary records to a Postgresql database on an AWS t2.micro instance
        </li>
        <li>
        Stress tested service using cloud based loader.io and Artillery while while simultaneously optimizing the system
        </li>
      </ul>
    )
  }
}

export default Descrip