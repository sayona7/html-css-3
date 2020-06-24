import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    state = {  }

    render() { 
        return (
            <header className="header">
                <div className="header-div">
                    <h1>GRAYSCALE</h1>
                    <p>A free, responsive, one page Bootstrap theme created by Start Bootstrap.</p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </header>
         );
    }
}
 
export default Header;