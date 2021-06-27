import React from 'react'
import Container from '../Container'
import './Carrinho.css'

const Carrinho = () => (
    
       
        <Container>
            <div className="titleCarrinho">
                Carrinho
            </div>
            <div className="ContinuarCompra">
                <a>Continuar Comprando</a>
            </div>
                <div className="listaBebida">
                        <label className="refri">Coca-Cola 2L</label>
                        <label className="valor">R$ 12,00</label>
                        <MdCheckBoxOutlineBlank />
                </div>
                <div className="listaBebida">
                        <label className="refri">Coca-Cola 2L</label>
                        <label className="valor">R$ 12,00</label>
                        <MdCheckBoxOutlineBlank />
                </div>
                        

        
        </Container>
       
    
)


export default Carrinho