import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Loading from "./components/loading/Loading";
import "./components/loading/Loading.css"
import Header from "./components/Home"


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
        <Header />
        </>
      )}
    </div>
  );
}

export default App;
