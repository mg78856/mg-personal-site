import React from 'react';
import Typed from 'react-typed';

var colors = ["#ff60c5", "#ff6830", "#ffae51", "#fede64", "#feef45", "#c8dd7a", "#00bd92", "#00cbde", "#59ddfe", "#01baf2", "#025cd1", "#f431be"]

const Greeting = ({ switchType, selection, color, width }) => {

  if (switchType) {
    return (
      <div>
        <Typed strings={selection}　typeSpeed={40} loop={false} style={{fontSize: "3.3.5vw", fontFamily: "Quicksand", fontWeight: "bold", color:`${colors[color]}`}}/>
      </div>

    )
  } else if (!switchType){
      return (
        <div>
          <Typed strings={["Hello", "こんにちは", "안녕", "Привет", "Ciao", "سلام", "Olá", "مرحبا", "Hallo", "Bonjour", "שלום", "नमस्ते", "你好", "Hei", "Hola", "สวัสดี", "Kamusta"]}　typeSpeed={40} backSpeed={50} loop={true} style={{fontSize: width < 400 ? "3.5vh" : "3.5vw", fontFamily: "Quicksand", fontWeight: "bold"}}/>
        </div>
      )

  }
}

export default Greeting;