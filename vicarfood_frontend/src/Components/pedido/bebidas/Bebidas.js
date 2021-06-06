import React from 'react'
import Container from '../../Container'
import './Bebidas.css'

import { MdArrowBack, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from 'react-router-dom';

const Bebidas = () => (


        <Container>
                <div className="title">
                        <span>
                                <Link className="arrow" to="/pedido">
                                        <MdArrowBack />
                                </Link>
                        </span>
                        <h2>Bebida</h2>

                </div>
                <div className="listaBebida">
                        <label className="refri">Coca-Cola 2L</label>
                        <label className="valor">R$ 12,00</label>
                        <input className="form-check-input" type="checkbox" ></input>
                </div>
                <div className="listaBebida">
                        <label className="refri">Coca-Cola 2L</label>
                        <label className="valor">R$ 12,00</label>
                        <MdCheckBoxOutlineBlank />
                </div>

        </Container>


)


export default Bebidas;