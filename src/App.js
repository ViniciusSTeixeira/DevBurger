import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import Loading from "./components/loading/Loading";
import "./components/loading/Loading.css"
import Home from "./components/Home/Home.jsx"



function App() {
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading/>
      ) : (
        <>
        <Navbar/>
        <Home />
       
        </>
      )}
    </div>
  );
}

export default App;
