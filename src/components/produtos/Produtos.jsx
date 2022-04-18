import React from "react";
import'../produtos/Produtos.jsx'
import ProdutosBox from "./ProdutosBox";
import burger1 from "../../images/burger1.png";
import burger2 from "../../images/burger2.png";
import burger3 from "../../images/burger3.png";

function Produtos() {
  return (
    <div id="products">
      <h2>ESCOLHA E APROVEITE</h2>
      <div className="a-container">
        <ProdutosBox image={burger1} title="HAMBURGUER 1" />
        <ProdutosBox image={burger2} title="HAMBURGUER 1" />
        <ProdutosBox image={burger3} title="HAMBURGUER 1" />
      </div>
    </div>
  );
}

export default Produtos;