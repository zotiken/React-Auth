import React, {useEffect} from "react";

import "./App.scss";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Context from "./Context/Context";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Main from "./components/Main/Main.jsx";

function App() {

  return (
    <Context>
      <Router>
        <Header />
        <Main/>
        <Footer />
      </Router>
    </Context>
  );
}

export default App;
