import React, { Component } from 'react'
import Container from '../../Container'
import './Batatas.css'
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

export default class cadBatatas extends Component {

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
 
                                                        <div>
                                                                        <img className="imagem--batata2" src={produto.imagem} alt={produto.id} />
                                                                </div>
                                                                <div className="batata2">
                                                                        <label className="batata">{produto.nome}</label>
                                                                        <label className="descricao">{produto.descricao}</label>
                                                                        <label>R$ {produto.preco}</label>
                                                                </div>
                                                                <div>
                                                                        <a className="add">< MdRemoveCircle/></a>
                                                                        <input className="quantidade" type="quantidade" />
                                                                        <a className="add"><MdAddCircle  /></a>
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