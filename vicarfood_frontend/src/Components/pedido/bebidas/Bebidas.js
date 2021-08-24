import React, { Component } from 'react'
import Container from '../../Container'
import './Bebidas.css'

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
                                                                <label className="bebida">{produto.nome} {produto.descricao}</label>
                                                                <p className="valor">
                                                                <label className="bebida2">R$ {produto.preco}</label>
                                                                <input className="quantidade" type="quantidade" />
                                                                </p>
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