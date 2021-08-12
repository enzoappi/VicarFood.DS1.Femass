import React from 'react'
import Container from '../Container'
import './PedidoFinalizado.css'
import vicar_sgv from "../../assets/images/vicar_sgv.svg"
import styled from 'styled-components';

const Logo = styled.img`
  height: 300px;
  width: 300px; 
  display: initial;
`;

const PedidoFinalizado = () => (
    <Container>
        <h1>Pedido Finalizado</h1>
        <div className="textarea"> 
        <ul className="logo"><Logo src={vicar_sgv} alt="Logo Vicar"/> </ul>  
            <ul>
                <p>Seu pedido foi finalizado com sucesso!</p>
                <p>Esta sendo preparado com toda atenção e cuidado devido.</p>
                <p>Agradeçemos à preferência.</p>
                <p>Não esqueça de compartilhar no Instagram sua experiência Vicar e nos marque @vicarfood.</p>
            </ul>
        </div>

    </Container>
)

export default PedidoFinalizado