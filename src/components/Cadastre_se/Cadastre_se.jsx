import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx"
import "./Cadastre_se.css"

function Cadastro() {

  const navigate = useNavigate()

  function funcaoBtn() {
    navigate('/conta') 
  }
    
  return (
      <div id="main">
        <div className="header-heading">
          <div id="cadastro">
            <h2>CADASTRE-SE</h2>
            <p>
              venha para nossa plataforma e receba ofertas, cupons e novidades!
              Assim agilizamos seu pedido conosco para garantirmos seu
              Devburguer <strong>SEM BUG</strong> nenhum!
            </p>

            <form>
              <Input label="Nome completo" />

              <Input label="Telefone" type="tel" />

              <Input label="Logradouro" />

              <Input label="Número" />

              <Input label="Complemento" />
            </form>

            <Button onClick={funcaoBtn}>Enviar</Button>
          </div>
        </div>
      </div>
    );
  }
  export default Cadastro;