import React from "react";
import { GrFormViewHide, GrFormView } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io"
import Typed from 'react-typed';


const ProjectSelect = ({ nav }) => {
  return (
    <div className="grid">
      <button className="back-btn" onClick={() => nav("mobileNav")}>
        <IoMdArrowBack size="3vh"/>
      </button>
      <div className="resume-btn" onClick={() => nav("aWayHome")}>
          <GrFormViewHide size="5vh"/>
        </div>
        <div className="resume-typ" onClick={() => nav("aWayHome")}>
          <Typed strings={["A Way Home"]}　typeSpeed={40} loop={false} style={{fontSize: "4vh", fontFamily: "Quicksand", fontWeight: "bold", color: "#00cbde"}} />
        </div>
        <div className="git-btn" onClick={() => nav("sdc")}>
          <GrFormView size="5vh"/>
        </div>
        <div className="git-typ" onClick={() => nav("sdc")}>
          <Typed strings={["Mock System Design"]}　typeSpeed={40} loop={false} style={{fontSize: "4vh", fontFamily: "Quicksand", fontWeight: "bold", color: "#01baf2"}} />
        </div>
    </div>
  )
}

export default ProjectSelect;