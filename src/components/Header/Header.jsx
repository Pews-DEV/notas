import React, { Component } from 'react';
import './estilo.css';

class Header extends Component {
  render() {
    return (
      <>
        <header class="menu-bg">
          <div class="menu">
            <div class="menu-logo">
              <a href="/">Notes</a>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
