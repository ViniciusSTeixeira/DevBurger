import React from "react";
import SobreBox from "./SobreBox.jsx";
import sobreimage from "../../images/sobre-image-1.jpeg"
import sobreimage2 from "../../images/sobre-image-2.jpeg"
import sobreimage3 from "../../images/sobre-image-3.jpeg"
import sobreimage4 from "../../images/sobre-image-4.jpeg"

import "./Sobre.css"

function Sobre() {
  return (
    <div id="about">
      <div className="sobre-container">
        <SobreBox image={sobreimage} title="Jaiane Guimarães"/>
        <SobreBox image={sobreimage2} title="Jonatas Alves"/>
        <SobreBox image={sobreimage3} title="Maysa Pereira"/>
        <SobreBox image={sobreimage4} title="Vinicius Teixeira"/>

      </div>
      

    </div>
  );
}

export default Sobre;