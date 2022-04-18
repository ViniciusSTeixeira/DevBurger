import React, { useState, useEffect } from "react";
import scrollElement from "react-scroll/modules/mixins/scroll-element";
import "./App.css";
import "./components/loading/Loading.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Loading from "./components/loading/Loading";
import Home from "./components/Home/Home.jsx";
import Produtos from "./components/produtos/Produtos.jsx";
import Footer from "./components/footer/Footer.jsx";

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
        <Loading />
      ) : (
        <>
          <Navbar />
          <Home />
          <Produtos />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
