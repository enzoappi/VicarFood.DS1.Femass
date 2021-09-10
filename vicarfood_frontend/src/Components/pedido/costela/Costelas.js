import React, { Component } from 'react'
import Container from '../../Container'
import './Costela.css'

import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

export default class cadCostela extends Component {

        componentDidMount() {
                this.carregarLista()
        }
        state = {
                nome: "",
                descricao: "",
                preco: "",
                produtos: [],
                imagem: ""
        }
        carregarLista = () => {
                const url = window.servidor + "produto/costela"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({ produtos: data }));
        }
        Costelas = () => {
                return (
                        <Container>
                                <section>
                                        <div className="imagem--costela">
                                                <h1>
                                                        Costela
                                                </h1>
                                        </div>
                                </section>
                                <section>
                                        <div className="main--costela">
                                                {this.state.produtos && this.state.produtos.map(produto => {
                                                        return <div key={produto.id}>
                                                                <div className="listaCostela">
                                                                        <div>
                                                                                <img className="imagem--costela2" src={produto.imagem} />
                                                                        </div>
                                                                        <div className="costela2">
                                                                                <label className="costela">{produto.nome}</label>
                                                                                <label className="descricao">{produto.descricao}</label>
                                                                                <label>R$ {produto.preco}</label>
                                                                        </div>
                                                                        <div>
                                                                                <a className="add"><MdRemoveCircle /></a>
                                                                                <input className="quantidade" type="quantidade" />
                                                                                <a className="add">< MdAddCircle/></a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                })}
                                        </div>
                                </section>
                        </Container >
                )
        }
        render() {
                let pagina = this.Costelas()
                return pagina
        }
}