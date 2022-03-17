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
            <nav class="menu-nav">
              <ul>
                <li>
                  <a href="#sobre">notas</a>
                </li>
                <li>
                  <a href="#produtos">criar notas</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
