import React, { Component } from 'react';
import './estilo.css';

class Header extends Component {
  render() {
    return (
      <>
        <header className="menu-bg">
          <div className="menu">
            <div className="menu-logo">
              <a href="/">Notes</a>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
