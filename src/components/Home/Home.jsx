import React from "react";
import Link from "react-scroll/modules/components/Link";
import "./Home.css";

function Home() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>A melhor hora do seu dia chegou, peça já o seu HAMBURGUER!!</h3>
        <h2>
          <span>HAMBURGUER </span>DA
          <br />
          SEMANA
        </h2>
        <p className="details">
          REACT BURGUER! UM DELICIOSO BLEND
          <br />
          DE 200G COM CEBOLA CARAMELIZADA,
          <br />
          BARBECUE DE BACON E MOLHO ESPECIAL DA CASA.
        </p>
        <div className="header-btns">
          <Link to="products">
            <a href="#" className="header-btn">
              ESCOLHA
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
