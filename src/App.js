import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() { 
    return (  
      <div>
        < Header />
        < Navbar />
      </div>
    );
  }
}
 
export default App;
