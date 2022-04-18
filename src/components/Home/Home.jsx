import React from "react";
import Footer from "../footer/Footer";

import "./Home.css";


function Home() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>A melhor hora do seu dia chegou, peça já o seu BURGÃO</h3>
        <h2>
          <span>HAMBURGUER </span>DA
          <br />
          SEMANA
        </h2>
        <p className="details">DETALHES SOBRE O HAMBURGUER DA SEMANA</p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            ESCOLHA
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
export default Home;
