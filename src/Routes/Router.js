import React from "react";
import { Routes, Route} from "react-router-dom";
import Cadastro from "../components/Cadastre_se/Cadastre_se.jsx";
import Home from "../components/Home/Home";


const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cadastro" element={<Cadastro />} />
        </Routes>
    )
 }
 
 export default Rotas;