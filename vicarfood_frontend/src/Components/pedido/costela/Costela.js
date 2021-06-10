import React from 'react'
import Container from '../../Container'
import './Costela.css'

import { MdArrowBack, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from 'react-router-dom';

const Costela = () => (


        <Container>
                <div className="title">
                        <span>
                                <Link className="arrow" to="/pedido">
                                        <MdArrowBack />
                                </Link>
                        </span>
                        <h2>Costela</h2>
                </div>
                <div className="listaCostela">
                        <label className="costela">Coca-Cola 2L</label>
                        <div>
                        <label className="descricao">Coca-Cola 2L</label>
                        <label className="valor">R$ 12,00</label>
                        <MdCheckBoxOutlineBlank />
                        </div>
                </div>
                <div className="listaCostela">
                        <label className="costela">Coca-Cola 2L</label>
                        <div>
                        <label className="descricao">Coca-Cola 2L</label>
                        <label className="valor">R$ 12,00</label>
                        <MdCheckBoxOutlineBlank />
                        </div>
                </div>

        </Container>


)


export default Costela