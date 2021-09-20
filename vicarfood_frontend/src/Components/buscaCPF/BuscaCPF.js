import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';

import Header from '../header/Header'
import './BuscaCPF.css';
import { MdSearch, MdAddShoppingCart } from "react-icons/md";
import AppContext from '../../AppContext/Context';

const BuscaCPF = () => (

    //const { cpf } = useContext(AppContext);
    <Container>
        <Header />
        <section>
            <div className="imagem--cliente">
                <h1>
                    Aréa do Cliente
                </h1>

            </div>
        </section>
        <section>
            <div className="boxCPF">
                <h4>Digite seu CPF para validação </h4>
                
                    <input name="CPF" placeholder="CPF" type="text"></input>
                    <a href="/cliente">
                        <p className="search" /*onClick*/ >
                            <MdSearch />
                        </p>
                    </a>
                
            </div>
        </section>
    </Container>
)

export default BuscaCPF;