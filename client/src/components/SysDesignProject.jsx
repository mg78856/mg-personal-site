import React from "react";
import { IoMdArrowBack } from 'react-icons/io';
import ScreenCapTwo from "../assets/loadbalancer-1323727745.us-west-1.elb.amazonaws.com G.png";
import Typed from 'react-typed';

const SysDesignProject = ({ nav }) => {
  return (
    <div className="grid">
      <button className="back-btn" onClick={() => nav("mobileProjects")}>
        <IoMdArrowBack size="3vh"/>
      </button>
      <div className="title">
        <Typed strings={["Mock System Design"]}　typeSpeed={40} loop={false} style={{fontSize: "2vh", fontFamily: "Quicksand", fontWeight: "bold", color: "black"}} />
      </div>
      <div className="photo">
        <img src={ScreenCapTwo} />
      </div>
      <div className="projectSummary">
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
      </div>

    </div>
  )
}

export default SysDesignProject;