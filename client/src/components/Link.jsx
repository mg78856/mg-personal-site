import React from "react"

const Link = ({ eyeOne, eyeTwo }) => {
  if (eyeOne === false && eyeTwo === true) {
    return <a href="https://awayhome-al-proxy-fec.herokuapp.com/" target="_blank">
    Link
  </a>
  } else if (eyeTwo === false && eyeOne === true) {
    return <div></div>
  }
}

export default Link