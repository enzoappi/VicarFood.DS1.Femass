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
<<<<<<< HEAD
                preco: "",
=======
                valor: "",
>>>>>>> c5a63a8488904930f48f6046c48608db827fa023
                produtos: [],
                imagem: ""
        }

        carregarLista = () => {
                const url = window.servidor + "produto/batata"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({ produtos: data }));
        }

        uploadImagem = (event) =>{

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


<<<<<<< HEAD
=======
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
>>>>>>> c5a63a8488904930f48f6046c48608db827fa023
                        </Container>
                )
        }

        render() {
                let pagina = this.Batatas()
                return pagina
        }
}