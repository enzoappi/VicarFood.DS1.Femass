import React, { Component } from 'react'
import Container from '../../Container'
import './Bebidas.css'


import { MdAddCircle, MdRemoveCircle, MdAddShoppingCart } from "react-icons/md";

export default class cadBebidas extends Component {

        componentDidMount() {
                this.carregarLista()
        }

        state = {
                idProduto: "",
                nome: "",
                descricao: "",
                preco: "",
                produtos: [],
                imagem: "",
                quantidadeProduto: 0
        }

        addQuantidadeProduto_change = (event) => {
                this.setState({ quantidadeProduto: this.state.quantidadeProduto + 1 })
        }

        removeQuantidadeProduto_change = (event) => {
                if (this.state.quantidadeProduto > 0) {
                        this.setState({ quantidadeProduto: this.state.quantidadeProduto - 1 })
                }
        }

        carregarLista = () => {
                const url = window.servidor + "produto/bebida"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({ produtos: data }));
        }

        addItem = (id) => {
                const dadosProduto = {
                        "idProduto": id,
                        "quantidadeProduto": this.state.quantidadeProduto
                }

                console.log(dadosProduto)

                let requestOptions = {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },

                        body: JSON.stringify(dadosProduto)
                };

                let url = window.servidor + 'carrinhoCompra/incluir'

                fetch(url, requestOptions);
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
                                                return <div key={produto.idProduto}>
                                                        <div className="listaBebida">
                                                                <div>
                                                                        <img className="imagem--batata2" src={produto.imagem} />
                                                                </div>
                                                                <div className="bebida2">
                                                                        <label className="bebida">{produto.nome} {produto.descricao}</label>
                                                                        <label >R$ {produto.preco}</label>
                                                                </div>
                                                                <div>
                                                                        <button className="add" onClick={this.remQuantidadeProduto_change} ><MdRemoveCircle /></button>
                                                                        <input className="quantidade" value={this.state.quantidadeProduto} disabled type="quantidade" />
                                                                        <button className="add" onClick={this.addQuantidadeProduto_change} ><MdAddCircle /></button>
                                                                        <button className="addCart" onClick={() => this.addItem(produto.idProduto)} ><MdAddShoppingCart /></button>
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