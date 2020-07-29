import React from 'react';
import Logo from '../../assets/img/futflix-logo.png';
import './Menu.css';
import Button from '../Button/index';
// import ButtonLink from './components/ButtonLink/index';

function Menu() {
    return (
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="Futflix"/>
        </a>
        <Button as="a" className="ButtonLink" href="/">
          Novo Vídeo 8
        </Button>
      </nav>
    );
}

export default Menu;