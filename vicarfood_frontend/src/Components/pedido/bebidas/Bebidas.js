import React, { Component } from 'react'
import Container from '../../Container'
import './Bebidas.css'


import { MdAddCircle, MdRemoveCircle } from "react-icons/md";


import batata_rosti_jpeg from "../../../assets/images/teste2.jpg"

export default class cadBebidas extends Component {

        componentDidMount() {
                this.carregarLista()
        }

        state = {
                nome: "",
                descricao: "",
                preco: "",
                produtos: []
        }

        carregarLista = () => {
                const url = window.servidor + "produto/bebida"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({ produtos: data }));
        }

        Bebidas = () => {
                return (
                        <Container>
                                <section>
                                        <div className="imagem--bebida">
                                                <h1>
                                                        Bebidas
                                                </h1>

                                        </div>
                                </section>


                                <section>
                                        {this.state.produtos && this.state.produtos.map(produto => {
                                                return <div key={produto.id}>
                                                        <div className="listaBebida">
                                                                <div>
                                                                        <img className="imagem--batata2" src={produto.imagem} alt={produto.id} />
                                                                </div>

                                                                <div className="bebida2">
                                                                        <label className="bebida">{produto.nome} {produto.descricao}</label>
                                                                        <label >R$ {produto.preco}</label>
                                                                </div>

                                                                <div>
                                                                        <a className="add"><MdRemoveCircle /></a>
                                                                        <input className="quantidade" type="quantidade" />
                                                                        <a className="add"><MdAddCircle /></a>
                                                                </div>
                                                        </div>
                                                </div>
                                        })}
                                </section>
                        </Container>
                )

        }

        render() {
                let pagina = this.Bebidas()
                return pagina
        }

}