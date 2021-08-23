import React, { Component } from 'react'
import Container from '../../Container'
import './Batatas.css'

export default class cadBatatas extends Component {

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
                const url = window.servidor + "produto/batata"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({ produtos: data }));
        }

        Batatas = () => {
                return (
                        <Container>
                                <section>
                                        <div className="imagem--batata">
                                                <h1>
                                                        Batatas Rosti
                                                </h1>

                                        </div>
                                </section>
                                <section>

                                        {this.state.produtos && this.state.produtos.map(produto => {
                                                return <div key={produto.id}>
                                                        <div className="listaBatata">
                                                                <label className="batata">{produto.nome}</label>
                                                                <div className="batata2">
                                                                        <p className="descricaoBatata">
                                                                                <label>{produto.descricao}</label>
                                                                        </p>
                                                                        <p className="valor">
                                                                                <label>{produto.preco}</label>
                                                                        </p>
                                                                        <p className="quantidade">
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
                let pagina = this.Batatas()
                return pagina
        }
}