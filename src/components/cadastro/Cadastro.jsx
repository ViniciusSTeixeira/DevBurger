import React from "react";
import "./Cadastro.css"

function Cadastro() {
  return (
    <div id="contact">
      <h2>Cadastre-se em nossa plataforma e receba ofertas, cupons e novidades! Assim você também agiliza seu pedido conosco.</h2>
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