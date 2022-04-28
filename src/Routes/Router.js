import React from "react";
import { Routes, Route} from "react-router-dom";
import Cadastro from "../components/Cadastre_se/Cadastre_se.jsx";
import Conta from "../components/conta/conta.jsx";
import Home from "../components/Home/Home";


const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="conta" element={<Conta />} />
        </Routes>
    )
 }
 
 export default Rotas;