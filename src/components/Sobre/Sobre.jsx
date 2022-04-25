import React from "react";
import SobreBox from "./SobreBox.jsx";
import sobreimage1 from "../../images/sobre-image-1.jpeg"
import sobreimage2 from "../../images/sobre-image-2.jpeg"
import sobreimage3 from "../../images/sobre-image-3.jpeg"
import sobreimage4 from "../../images/sobre-image-4.jpeg"
import "./Sobre.css"

function Sobre() {
  return (
    <div id="about">
      <h2>SOBRE A EQUIPE:</h2>
      <div className="sobre-container">
        <SobreBox image={sobreimage1} title="JAIANE GUIMARÃES" linkedin=""/>
        <SobreBox image={sobreimage2} title="JONATAS ALVES"/>
        <SobreBox image={sobreimage3} title="MAYSA PEREIRA"/>
        <SobreBox image={sobreimage4} title="VINICIUS TEIXEIRA"/>
      </div>
    </div>
  );
}

export default Sobre;