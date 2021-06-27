import React from 'react'
import Container from '../../Container'
import './Batatas.css'

import { MdArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';


const Batatas = () => (
    
       
        <Container>
        <div className="title">
                        <span>
                                <Link className="arrow" to="/pedido">
                                        <MdArrowBack />
                                </Link>
                        </span>
                        <h2>Batata Rosti</h2>
                </div>
                <div className="listaBatata">
                        <label className="batata">Batata Rosti Calabresa</label>
                        <div className="batata2">
                                <p className="descricaoBatata">
                                        <label>(Mussarela, calabresa e cebola)</label>
                                </p>
                                <p className="valor">
                                        <label>Media (800g) R$ 33,00</label>
                                        <label>Pequena (450g) R$ 18,90</label>
                                </p>
                                <p className="quantidade">
                                        <input type="quantidade" />
                                        <input type="quantidade" />
                                </p>
                                
                        </div>
                </div>
                <div className="listaBatata">
                        <label className="batata">Batata Rosti Frango com Catupiry</label>
                        <div className="batata2">
                                <p className="descricaoBatata">
                                        <label>(Mussarela, frango desfiado e catupiry)</label>
                                </p>
                                <p className="valor">
                                        <label>Media (800g) R$ 33,00</label>
                                        <label>Pequena (450g) R$ 18,90</label>
                                </p>
                                <p className="quantidade">
                                        <input type="quantidade" />
                                        <input type="quantidade" />
                                </p>
                                
                        </div>
                </div>
                <div className="listaBatata">
                        <label className="batata">Batata Rosti Vicar</label>
                        <div className="batata2">
                                <p className="descricaoBatata">
                                        <label>(Mussarela, frango desfiado, bacon e cheddar)</label>
                                </p>
                                <p className="valor">
                                        <label>Media (800g) R$ 33,00</label>
                                        <label>Pequena (450g) R$ 18,90</label>
                                </p>
                                <p className="quantidade">
                                        <input type="quantidade" />
                                        <input type="quantidade" />
                                </p>
                                
                        </div>
                </div>
                <div className="listaBatata">
                        <label className="batata">Batata Rosti Agreste</label>
                        <div className="batata2">
                                <p className="descricaoBatata">
                                        <label>(Mussarela, carne seca desfiada, catupiry e cebola)</label>
                                </p>
                                <p className="valor">
                                        <label>Media (800g) R$ 33,00</label>
                                        <label>Pequena (450g) R$ 18,90</label>
                                </p>
                                <p className="quantidade">
                                        <input type="quantidade" />
                                        <input type="quantidade" />
                                </p>
                                
                        </div>
                </div>
        
        
        </Container>
       
    
)


export default Batatas