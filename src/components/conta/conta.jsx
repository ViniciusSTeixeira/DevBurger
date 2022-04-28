import React from "react";
import Button from "../Button/Button";
import "./conta.css";

function Conta() {
  return (
    <div id="main">
      <div className="header-conta">
        <h2>Minha Conta</h2>
        <div id="card">
          <div className="perfil">
            <h3>Nome Completo:</h3>
            <input />
          </div>
          <div className="perfil">
            <h3>E-mail:</h3>
            <input />
          </div>
          <div className="perfil">
            <h3>Telefone:</h3>
            <input />
          </div>
        </div>
        <div id="card">
          <div id="perfil-rua" className="perfil">
            <h3>Rua:</h3>
            <input />
          </div>
          <div className="perfil">
            <h3>Número:</h3>
            <input />
          </div>
        </div>
        <Button>Alterar</Button><br></br>
        <p>Excluir conta</p>
      </div>
    </div>
  );
}
export default Conta;
