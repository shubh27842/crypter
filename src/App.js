import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Art from "./components/Pages/Art"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Art} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
