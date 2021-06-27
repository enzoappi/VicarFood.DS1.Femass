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
                        <label className="costela">Combo da Costela Bovina</label>
                        <div className="costela2">
                                <p className="descricao">
                                        <label>Costela Bovina no bafo, acompanhada com 
                                        molho de mostarda, feijão tropeiro, batatinha calabresa e arroz.</label>
                                        <label>(porção serve de 3 a 4 pessoas)</label>
                                </p>
                                <p className="valor">
                                        <label>R$ 99,00</label>
                                </p>
                                <p>
                                        <MdCheckBoxOutlineBlank />
                                </p>
                        </div>
                </div>
                <div className="listaCostela">
                        <label className="costela">Combo da Costela Suina</label>
                        <div className="costela2">
                                <p className="descricao">
                                        <label>Costela suína no bafo com tempero 
                                        Dry Rub (levemente picante) e barbecue, acompanhada de maça em caldas, 
                                        batata rosti de requeijão com bacon e arroz.</label>
                                        <label>(porção serve até 2 pessoas)</label>
                                </p>
                                <p className="valor">
                                        <label>R$ 59,00</label>
                                </p>
                                <p>
                                        <MdCheckBoxOutlineBlank />
                                </p>
                        </div>
                </div>


        </Container>


)


export default Costela