import React from 'react'
import { Link } from 'react-router-dom'
import vicar_sgv from "../../assets/images/vicar_sgv.svg"

import styled from 'styled-components';

import './Menu.css'


const Logo = styled.img`
  height: 90px;
  width: 90px; 
  display: initial;
`;


const Menu = () => (
    <nav className="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__logo" to="/">
                  <Logo src={vicar_sgv} alt="Logo Vicar"/>  
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/pedido">
                    Pedido
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/cardapio">
                    Cardapio
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/cliente">
                    Cliente
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/carrinho">
                    <i className="bi-cart-plus"/>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu