import React from 'react'
import './Header.css'

import vicar_sgv from "../../assets/images/vicar_sgv.svg"

import styled from 'styled-components';
import { MdShoppingCart } from "react-icons/md";

const Logo = styled.img`
  height: 46px;
  width: 46xp; 
`;

const Header = () => (
    <header >
            <div className="header--logo">
                <a href="/">                    
                    <Logo src={vicar_sgv} alt="Logo Vicar"/>                 
                </a>         
            </div>
            <div className="header--menu">
                <a href="/pedido">
                    <p>
                        Cardápio 
                    </p>
                </a> 
                <a href="/cliente">
                    <p>
                        Cliente 
                    </p>
                </a> 
                <a href="/contato">
                    <p>
                        Contato 
                    </p>
                </a>  
                <a href="/carrinho">
                    <p className="carrinho">
                    <MdShoppingCart />
                    </p>
                </a>        
            </div>
        </header>
)

export default Header