import React from "react";
import Hand from "../assets/pointing_hand.svg"

const Pointer = ({ eyeOne, eyeTwo }) => {
  if (eyeOne === false && eyeTwo === true) {
    return <img src={Hand} />
  } else if (eyeTwo === false && eyeOne === true) {
    return <div></div>
  }
}

export default Pointer