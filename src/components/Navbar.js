import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../newlogo.png'

class Navbar extends Component {

  render() {
    return (
      <nav style={{backgroundColor:"#1D283C"}} className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://github.com/TheHarshKadam/Decentragram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={photo}  height="30" style={{margin:"10px"}} className="d-inline-block align-top" alt="" />
        </a>
        
      </nav>
    );
  }
}

export default Navbar;
