import React, { Component } from 'react'
import Container from '../../Container'
import './Bebidas.css'


import { MdAddCircle, MdRemoveCircle } from "react-icons/md";


import batata_rosti_jpeg from "../../../assets/images/teste2.jpg"

export default class cadBebidas extends Component {

        componentDidMount() {
                this.carregarLista()
        };

        state = {
                nome: "",
                descricao: "",
                preco: "",
                produtos: [],
                imagem: ""
        }

        carregarLista = () => {
                const url = window.servidor + "produto/bebida"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({ produtos: data }));
        };

        Bebidas = () => {
                return (
                        <Container>
<<<<<<< HEAD
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
                                                                        <a className="add"><MdRemoveCircle /></a>
                                                                        <input className="quantidade" type="quantidade" />
                                                                        <a className="add"><MdAddCircle /></a>
                                                                </div>
                                                        </div>
                                                </div>
                                        })}
                                </section>
=======
                                <div className="title">
                                        <span>
                                                <Link className="arrow" to="/pedido">
                                                        <MdArrowBack />
                                                </Link>
                                        </span>
                                        <h2>Bebidas</h2>
                                </div>

                                <div>
                                        <table className="listaBebida">
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
                                                                        <th scope="row"><img src={produto.imagem} alt={produto.id} width='20%'/></th>
                                                                        <td>{produto.item}</td>
                                                                        <td>{produto.descricao}</td>
                                                                        <td>{produto.valor}</td>
                                                                </tr>
                                                        })}
                                                </tbody>
                                        </table>
                                </div>

>>>>>>> c5a63a8488904930f48f6046c48608db827fa023
                        </Container>
                )
        };

        render() {
                let pagina = this.Bebidas()
                return pagina
        };

}