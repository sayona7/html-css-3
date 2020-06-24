import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="nav-bar">
                <div className="d-flex justify-content-around align-items-center">
                    <div className="">Navbar</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse">
                    <span className="navbar-toggler-icon span"></span>
                   </button>
                </div>
            </nav>
          );
    }
}
 
export default Navbar;