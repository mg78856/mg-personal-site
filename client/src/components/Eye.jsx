import React from 'react';
import { GrFormViewHide, GrFormView } from "react-icons/gr"

const Eye = ({ closed }) => {
    if (closed === true) {
      return <GrFormViewHide size="2vw" />
    } else if (closed === false) {
      return <GrFormView size="2vw"/>
    }
}

export default Eye;