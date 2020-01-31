import React, { Component } from 'react';
import '../../Styles/Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='' className='brand-logo' id='title'>
            RunLog
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
