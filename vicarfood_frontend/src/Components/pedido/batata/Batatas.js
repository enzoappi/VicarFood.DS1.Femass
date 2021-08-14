import React, { Component } from 'react'
import Container from '../../Container'
import './Batatas.css'

import { MdArrowBack, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from 'react-router-dom';

export default class cadBatatas extends Component{ 

        componentDidMount (){
                this.carregarLista()
        }

        state = {
                nome: "",
                descricao: "",
                preco: "",
                produtos: []
        }

        carregarLista = () =>{
                const url = window.servidor + "produto/batata"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({produtos: data}));
        }

        Batatas = () => {
                return(
                        <Container>
                                <div className="title">
                                        <span>
                                                <Link className="arrow" to="/pedido">
                                                        <MdArrowBack />
                                                </Link>
                                        </span>
                                        <h2>Batatas</h2>
                                </div>

                                <div>
                                        <table className="table table-dark table-striped text-white col8">
                                                <thead>
                                                        <tr>
                                                                <th scope="col">Cód.</th>
                                                                <th scope="col">Nome</th>
                                                                <th scope="col">Descrição</th>
                                                                <th scope="col">Preço</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {this.state.produtos && this.state.produtos.map(produto =>{
                                                                return <tr key={produto.id}>
                                                                        <th scope="row">{produto.id}</th>
                                                                        <td>{produto.nome}</td>
                                                                        <td>{produto.descricao}</td>
                                                                        <td>{produto.preco}</td>
                                                                </tr>
                                                        })}
                                                </tbody>
                                        </table>
                                </div>
                        </Container>
                )

        }

        render() {
                let pagina = this.Batatas()
                return pagina
        }
}

