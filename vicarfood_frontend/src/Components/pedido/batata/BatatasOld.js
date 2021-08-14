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
                nome: "",
                descricao: "",
                preco: "",
                produtos: []
        }

        carregarLista = () =>{
                const url = window.servidor + "produto/batata"
                fetch(url)
                        .then(response => response.json())
                        .then(data => this.setState({produtos: data}));
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
                                        <h2>Batata Rosti</h2>
                                </div>
                        
                                <div className="listaBatata">                                                         
                                        {this.state.produtos && this.state.produtos.map(produto =>{
                                                return <div key={produto.id}>
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
                                        })}
                                </div>
                        </Container>
                )
        }

        render() {
                let pagina = this.Batatas()
                return pagina
        }
}