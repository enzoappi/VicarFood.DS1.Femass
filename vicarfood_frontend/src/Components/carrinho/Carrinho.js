import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import './Carrinho.css'

import { MdDelete,MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";

const Carrinho = () => (
    
       
        <Container>
            <div className="titleCarrinho">
                Carrinho
            </div>
            <div className="titleDescription">
                    <p className="coluna1">Produto</p>
                    <p className="coluna2">Valor</p>
                    <p className="coluna3">Quantidade</p>
                    <p className="coluna4">Subtotal</p>
            </div>
                <div className="listaitens">
                        <label className="coluna1">Coca-Cola 2L</label>
                        <label className="coluna2">R$ 12,00</label>
                        <input type="quantidade" />
                        <label className="coluna4">R$ 12,00</label>
                        <button className="btnDelete" onClick> <MdDelete className="delete"/> </button>
                </div>
                <div className="listaitens">
                        <label className="coluna1">Batata Rosti Calabresa</label>
                        <label className="coluna2">R$ 33,00</label>
                        <input type="quantidade" />
                        <label className="coluna4">R$ 33,00</label>
                        <button className="btnDelete" onClick> <MdDelete className="delete"/> </button>
                </div>
                <div className="listaitens">
                        <label className="coluna1">Combo da Costela Suina</label>
                        <label className="coluna2">R$ 59,00</label>
                        <input type="quantidade" />
                        <label className="coluna4">R$ 59,00</label>
                        <button className="btnDelete" onClick> <MdDelete className="delete"/> </button>
                </div>
                <div className="total">
                <label >Total R$ 104,00</label>
                </div>
                <div className="btnCompra">
                <Link to="/pedido">
                        <button className="ContinuarCompra" onClick> <MdKeyboardArrowLeft/> Continuar Comprando </button>
                </Link>
                <Link to="/buscaCpf">
                        <button className="finalizarCompra" onClick > Finalizar Compra <MdKeyboardArrowRight/> </button>
                </Link>
                </div>    

        
        </Container>
       
    
)


export default Carrinho