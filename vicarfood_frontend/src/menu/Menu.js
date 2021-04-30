import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../imagens/vicar_sgv.svg'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top pl-5">
                <div className="col-11 bg-dark text-white p-2">
                    <Link className="navbar-brand" to="/"><img src={img1} alt="logo" width="5%" /></Link>
                    <Link className="navbar-brand" to="/pedido">Pedido</Link>
                    <Link className="navbar-brand" to="/cardapio">Cardápio</Link>
                </div>
                <div className="col-1 bg-dark text-white p-3" Style="font-size: 20px;">
                <Link className="col-1" to="/adicionar"><i class="bi bi-cart-plus text-white "></i></Link>
                </div>
                
            </nav>
        )
    }
}
