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
                item: "",
                descricao: "",
                valor: "",
                produtos: [],
                imagem: ""
        }

        carregarLista = () =>{
                const url = window.servidor + "produto/batata"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({produtos: data}));
        }

        uploadImagem = (event) =>{

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
                                                                <th scope="col">Imagem</th>
                                                                <th scope="col">Item</th>
                                                                <th scope="col">Descrição</th>
                                                                <th scope="col">Valor</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {this.state.produtos && this.state.produtos.map(produto =>{
                                                                return <tr key={produto.id}>
                                                                        <th scope="row"><img src={produto.imagem} alt={produto.id} width='10%'/></th>
                                                                        <td>{produto.item}</td>
                                                                        <td>{produto.descricao}</td>
                                                                        <td>{produto.valor}</td>
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

