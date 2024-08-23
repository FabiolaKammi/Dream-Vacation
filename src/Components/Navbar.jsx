import React from 'react';
import Logo from '../utils/Images/Logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='logo-div'>
      <img src={Logo} alt='personnal-logo' style={{width:'40px', height:'40px'}}/>
      <h4>Your Futur SWE</h4>
      </div>
        <ul>
            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
            <Link to="/LocationForm">Locations</Link>
            </li>

            <li>
            <Link to="/Footer">Contacts</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header;