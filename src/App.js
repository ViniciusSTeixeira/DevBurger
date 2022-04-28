import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/loading/Loading.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Loading from "./components/loading/Loading";
import Footer from "./components/footer/Footer.jsx";
import Rotas from "./Routes/Router.js"


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
            <Rotas />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;