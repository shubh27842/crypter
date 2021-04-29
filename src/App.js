import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Art from "./components/Pages/Art";
import Item2 from "./components/Pages/Item2"
import Item3 from "./components/Pages/Item3"
import EditProfile from "./components/Pages/Profile/EditProfile";
import Profile from './components/Pages/Profile/Profile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Art} />
        <Route path="/2" exact component={Item2} />
        <Route path="/3" exact component={Item3} />
        <Route path="/editprofile" exact component={EditProfile} />
        <Profile path="/profile" exact component={Profile} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
