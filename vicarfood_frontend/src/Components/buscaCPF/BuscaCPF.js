import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';
import './BuscaCPF.css';
import {  MdSearch} from "react-icons/md";
import AppContext from '../../AppContext/Context';

const BuscaCPF  = () => (

        //const { cpf } = useContext(AppContext);
            <Container>
            <div className="boxCPF">
                <h4>Digite seu CPF para validação </h4>
                <input name="CPF" placeholder="CPF" type="text"></input>
                <Link to="/cliente">
                    <button className="search" /*onClick*/ > <MdSearch/> </button>
                </Link>
            </div>
            </Container>
)

export default BuscaCPF;