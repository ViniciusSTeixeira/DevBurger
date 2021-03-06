import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx"
import { toast } from "react-toastify";
import axios from 'axios'
import "./Cadastre_se.css"
import 'react-toastify/dist/ReactToastify.css';


function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("") 
  const navigate = useNavigate()
  
  const submitForm = async (event) => {
    event.preventDefault();

    axios.post("https://rest-api-hamburgueria.herokuapp.com/cliente", {
      nomeSobrenome: nome,
      email: email,
      telefone: telefone,
      rua: rua,
      numero: numero,
      complemento: complemento
      }).then((response) => {
        toast.success("Cadastro realizado com sucesso"); 
        navigate(`/conta/${email}`) 
        }).catch((error) => {
          toast.error("Houve um erro ao realizar cadastro, tente novamente e verifique as informações");
          console.log(error)
        });
    }     
      
    

  
    
  return (
      <div id="main">
        <div className="header-heading">
          <div id="cadastro">
            <h2>CADASTRE-SE</h2>
            <p>
              Venha para nossa plataforma e receba ofertas, cupons e novidades!
              Assim agilizamos seu pedido e garantirmos seu
              DevBurguer <strong>SEM BUG</strong> nenhum!
            </p>

            <form className="formCadastro" onSubmit={submitForm}>
              <Input  value={nome} label="Nome completo" onChange={(event) => setNome(event.target.value)}/>

              <Input  value={email} label="Email" type="email" onChange={(event) => setEmail(event.target.value)}/>

              <Input  value={telefone} label="Telefone" type="tel" onChange={(event) => setTelefone(event.target.value)}/>

              <Input  value={rua} label="Rua" onChange={(event) => setRua(event.target.value)}/>

              <Input  value={numero} label="Número" onChange={(event) => setNumero(event.target.value)}/>

              <Input  value={complemento} label="Complemento" onChange={(event) => setComplemento(event.target.value)}/>
              <br>
              
              </br>

              <Button type="submit">Criar Conta</Button>

            </form>
          </div>
        </div>
        
      </div>
    );
  
}

  export default Cadastro;
 
 