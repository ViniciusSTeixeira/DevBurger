import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate  } from "react-router-dom";
import Button from "../Button/Button";
import axios from 'axios'
import "./conta.css";
import Input from "../Input/Input";
import InputGET from "../Input/InputGET";

function Conta() {
  const {emailParams} = useParams()

  const [data, setData] = useState([])
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("") 
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://rest-api-hamburgueria.herokuapp.com/cliente/${emailParams}`)
      .then((response) => {
        setData(response.data.Resultado[0])
        console.log(response.data)
      })
      .catch((error) => {
        console.log({GET: error})
      });
  }, []);


  const deletarConta = async (event)=>{  
    event.preventDefault()
    try {
      const response = await axios.delete(`https://rest-api-hamburgueria.herokuapp.com/cliente/${data.email}`);
      const newData = data.filter((conta) => conta.email !== email)
      setData(newData);

      
  

    } catch (error) {
      toast.success("Conta deletada com sucesso, volte a página principal");
      
    }
    navigate("/")
  };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`https://rest-api-hamburgueria.herokuapp.com/cliente/${emailParams}`, {
        nomeSobrenome: nome.length > 0? nome : data.nomeSobrenome,
        telefone: telefone.length > 0? telefone : data.telefone,
        rua: rua.length > 0?data :  data.rua,
        numero: numero.length > 0? numero : data.numero,
        complemento: complemento.length > 0? complemento : data.complemento,
      });
   
      toast.success("Conta editada com sucesso");
      console.log(response)
    } catch (error) {
       toast.error("Nao foi possível comunicar com o servidor");
      console.log(error)
    }
  };
  return (
   
    
    <div id="main"> 
    <div className="container">
      <h2>Editar conta</h2>
        <form className="formConta">
          <InputGET label={data.nomeSobrenome}/>
          <Input label="Editar nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
          <InputGET label={data.telefone}/>
          <Input label="Editar telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)}/>
          <InputGET label={data.rua}/>
          <Input label="Editar rua" value={rua} onChange={(event) => setRua(event.target.value)}/>
          <InputGET label={data.numero}/>
          <Input label="Editar número" value={numero} onChange={(event) => setNumero(event.target.value)} />
          <InputGET label={data.complemento}/>
          <Input label="Editar complemento" value={complemento} onChange={(event) => setComplemento(event.target.value)}/>
          <div className="botaoForm1">
           <Button onClick={submitForm} type="submit" >Atualizar cadastro</Button>
          </div>
          <div className="botaoForm2">
           <button className="botaoConta" onClick={deletarConta} type="submit">Deletar Conta</button>
           </div>
        </form>
      </div>
    </div>
  );
}
export default Conta;
