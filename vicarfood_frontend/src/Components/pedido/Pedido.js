import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import './Pedido.css'

const Pedido = () => (
    
        <Container>
        <h1>Cardápio</h1>
        <ul className="app-menu_list">
            <li className="app-menu_item">
                <Link className="app-menu_link" to="/batatas">Batata Rosti</Link>
            </li>            
            <li className="app-menu_item">
                <Link className="app-menu_link" to="/costela">Costela</Link>
            </li>
            <li className="app-menu_item" >
                <Link className="app-menu_link" to="/bebidas">Bebidas</Link>
            </li>
        </ul>
        </Container>
)


export default Pedido

