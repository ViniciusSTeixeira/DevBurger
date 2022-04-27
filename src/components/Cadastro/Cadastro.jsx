import axios from "axios";
import React, { useState }from "react";
import { toast } from "react-toastify";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx"
import "./Cadastro.css"


function Cadastro() {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");


  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://vila-api.herokuapp.com/contacts",
        
        {
          nome: nome,
          telefone: telefone,
          rua: rua,
          numero: numero,
          complemento: complemento,
        }
      );

      toast.success('Formulário envaido com sucesso!')

    } catch (error) {
    toast.error('Nao foi possível comunicar com o servidor')
    }

  };

  return (

    <div id="cadastro">  
        
      <h2>FAÇA SEU CADASTRO CONOSCO</h2>
      <p>venha para nossa plataforma e receba ofertas, cupons e novidades! Assim você também agiliza seu pedido conosco e garante seu Devburguer sem bug nenhum!.</p>
      
      <form
          onSubmit={submitForm}          
        >
          <Input
            value={nome}
            label="Nome completo"
            onChange={(event) => setNome(event.target.value)}
          />

          <Input
            value={telefone}
            label="Telefone"
            type="tel"
            onChange={(event) => setTelefone(event.target.value)}
          />

          <Input
            value={rua}
            label="Logradouro"
            onChange={(event) => setRua(event.target.value)}
          />

          <Input
            value={numero}
            label="Número"
            onChange={(event) => setNumero(event.target.value)}
          />

          <Input
            value={complemento}
            label="Complemento"
            onChange={(event) => setComplemento(event.target.value)}
          />
                    
        </form>

          <Button>Enviar</Button>

      </div>
  );
}

export default Cadastro;

