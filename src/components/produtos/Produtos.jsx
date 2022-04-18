import React from "react";
import "../produtos/Produtos.jsx";
import ProdutosBox from "./ProdutosBox";
import burger1 from "../../images/burger1.png";
import burger2 from "../../images/burger2.png";
import burger3 from "../../images/burger3.png";
import burger4 from "../../images/burger4.png";

function Produtos() {
  return (
    <div id="products">
      <h2>ESCOLHA E APROVEITE</h2>
      <div className="a-container">
        <ProdutosBox image={burger1} title="REACT BURGER" />
        <ProdutosBox image={burger2} title="ARQUITETURA MATRIX" />
        <ProdutosBox image={burger3} title="BURGER JS " />
        <ProdutosBox image={burger4} title="CODE MASTER" />
      </div>
    </div>
  );
}

export default Produtos;
