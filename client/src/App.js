import React from 'react';
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
import "../src/App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path="/"><Home /></Route>
      <Route path="/contact"><Contact /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/signin"><Signin /></Route>
      <Route path="/signup"><Signup /></Route>
    </>
  )
}

export default App;
