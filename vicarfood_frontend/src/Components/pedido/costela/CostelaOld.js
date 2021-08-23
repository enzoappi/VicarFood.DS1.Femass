import React, { Component } from 'react'
import Container from '../../Container'
import './Costela.css'

export default class cadCostela extends Component {

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
                                        {this.state.produtos && this.state.produtos.map(produto => {
                                                return <div key={produto.id}>
                                                        <div className="listaCostela">
                                                                <label className="costela">{produto.nome}</label>
                                                                <div className="costela2">
                                                                        <p className="descricao">
                                                                                <label>{produto.descricao}</label>
                                                                        </p>
                                                                        <p className="valor">
                                                                                <label>{produto.preco}</label>
                                                                        </p>
                                                                        <p>
                                                                                <input type="quantidade" />
                                                                        </p>
                                                                </div>

                                                        </div>
                                                </div>
                                        })}
                                </section>


                        </Container>
                )

        }

        render() {
                let pagina = this.Costelas()
                return pagina
        }
}