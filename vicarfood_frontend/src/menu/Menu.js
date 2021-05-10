import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../imagens/vicar_sgv.svg'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top pl-5">
                <div className="col-12 bg-dark text-white p-1">
                    <Link className="navbar-brand" to="/"><img src={img1} alt="logo" width="3%" /></Link>
                    <Link className="navbar-brand" to="/pedido">Pedido</Link>
                    <Link className="navbar-brand" to="/cardapio">Cardápio</Link>
                    <Link className="navbar-brand" to="/cliente">Cadastro de Cliente</Link>
                    <Link className="navbar-brand " to="/adicionar"><i className="bi bi-cart-plus text-white "></i></Link>
                </div>
            </nav>
        )
    }
}
