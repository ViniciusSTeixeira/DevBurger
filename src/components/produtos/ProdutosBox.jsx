import React from "react";
import "./Produtos.css";

function ProdutosBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>

      <div className="a-b-text">
        <h3> {props.title} </h3>
        <button className="productbox-button">Peça agora!</button>
      </div>
    </div>
  );
}

export default ProdutosBox;
