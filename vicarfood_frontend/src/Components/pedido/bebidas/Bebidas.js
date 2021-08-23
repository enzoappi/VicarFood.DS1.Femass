import React, { Component } from 'react'
import Container from '../../Container'
import './Bebidas.css'

import { MdArrowBack} from "react-icons/md";
import { Link } from 'react-router-dom';

export default class cadBebidas extends Component{ 

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
                const url = window.servidor + "produto/bebida"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({produtos: data}));
        }

        Bebidas = () => {
                return(
                        <Container>
                                <section>
                                        <div className="imagem--bebida">
                                                <h1>
                                                        Bebidas
                                                </h1>

                                        </div>
                                </section>
                                <section>

                                <div>
                                        <table className="listaBebida">

                                                <thead>
                                                        <tr>
                                                                <th scope="col">Cód.</th>
                                                                <th scope="col">Item</th>
                                                                <th scope="col">Descrição</th>
                                                                <th scope="col">Valor</th>
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
                                </section>

                        </Container>
                )

        }

        render() {
                let pagina = this.Bebidas()
                return pagina
        }

}