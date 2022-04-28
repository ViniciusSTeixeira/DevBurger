import React from "react";
import { Routes, Route} from "react-router-dom";
import Account from "../components/Account/Account.jsx";
import Cadastro from "../components/Cadastre_se/Cadastre_se.jsx";
import Home from "../components/Home/Home";


const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route patch="account" element={<Account />} />
        </Routes>
    )
 }
 
 export default Rotas;