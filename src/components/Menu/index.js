import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/moveflix.png';
import './Menu.css';

function Menu() {
    return (
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Futflix"/>
        </Link>
      </nav>
    );
}

export default Menu;