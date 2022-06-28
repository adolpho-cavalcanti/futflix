import React from 'react';
import { FooterBase } from './styles';
import IBEV from '../../assets/img/ibev.jpg';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.instagram.com/ibevonline">
        <img src={IBEV} alt="IBEV" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="docavalcanti.vercel.app">
          IBEV TECH
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
