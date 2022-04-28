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
        <SobreBox image={sobreimage1} title="JAIANE GUIMARÃES" linkedin="https://www.linkedin.com/in/jaiane-guimaraes/" github="https://github.com/jaiaani"/>
        <SobreBox image={sobreimage2} title="JONATAS ALVES" linkedin="https://www.linkedin.com/in/jonatastalves/" github="https://github.com/jonatastalves"/>
        <SobreBox image={sobreimage3} title="MAYSA PEREIRA" linkedin="https://www.linkedin.com/in/maysa-pereira/" github="https://github.com/maysapereira"/>
        <SobreBox image={sobreimage4} title="VINICIUS TEIXEIRA" linkedin="https://www.linkedin.com/in/vinicius-teixeira-005b3a1b7" github="https://github.com/ViniciusSTeixeira/"/>
      </div>
    </div>
  );
}

export default Sobre;