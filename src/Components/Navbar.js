import React, { Component } from 'react';
import '../App.css';


class Navbar extends Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }

      toggleHidden() {
          this.setState({
              isHidden: !this.state.isHidden
          })
      }

    render() { 
        return (
            <nav className="nav-bar">
                <div className="d-flex justify-content-around align-items-center align-content-center flex-wrap">
                    <div className="m-2">Navbar</div>
                    <div id="nav-menu" className="m-2 d-flex justify-content-between align-items-center align-content-center">
                        <span className="nav-span">About</span>
                        <span className="nav-span">Projects</span>
                        <span className="nav-span">Contact</span>
                    </div>
                    <button id="nav-btn" 
                    className="btn btn-info m-3 collapsed navbar-toggler-right" data-toggle="collapse" data-target="#collapseMobile" aria-expanded="false" aria-controls="collapseMobile" type="button"
                    onClick={this.toggleHidden.bind(this)}>Click</button>
                    {!this.state.isHidden && <MobileNav />}
                </div>
                
            </nav>
          );
    }
}

const MobileNav = () => (
    <div className="mobile-nav d-flex flex-column collapse navbar-collapse" id="collapseMobile">
        <ul className="mobile-nav">About</ul>
        <ul className="mobile-nav">Projects</ul>
        <ul className="mobile-nav">Contact</ul>
    </div>
)
 
export default Navbar;