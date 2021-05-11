import React, { Component } from 'react'

import Container from '../Container'
import './Cliente.css'
import { MdSave, MdModeEdit } from "react-icons/md";


export default class Cliente extends Component {
    state = {
        nome: "",
        cpf: "",
        telefone: "",
        cliente: [],
        idEndereco: "",
        logradouro: "",
        numero: "",
        nomeBairro: "",
        endereco: [],
        incluindo: false,
        alterando: false
    }
    
    txtNome_change = (event) => {
        this.setState({nome: event.target.value})
    }

    txtCpf_change = (event) => {
        this.setState({cpf: event.target.value})
    }

    txtTelefone_change = (event) => {
        this.setState({telefone: event.target.value})
    }
    
    preencherCliente = () => {
        console.log('preenchendo a lista')
        const url = window.servidor + '/cliente/listar'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({cliente: data}));
    }

    txtLogradouro_change = (event) => {
        this.setState({logradouro: event.target.value})
    }

    txtNumero_change = (event) => {
        this.setState({numero: event.target.value})
    }

    txtNomeBairro_change = (event) => {
        this.setState({nomeBairro: event.target.value})
    }

    preencherEndereco = () => {
        console.log('preenchendo a lista')
        const url = window.servidor + '/endereco/listar'
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({endereco: data}));
    }

    componentDidMount() {
        this.preencherCliente()
        this.preencherEndereco()
    }

    iniciarNovo = () => {
        //this.setState({incluindo: true, nome: '', cpf: '', telefone: ''})
        this.setState({incluindo: true, nome: '', cpf: '', telefone: '', logradouro: '', numero: '', nomeBairro: ''})
    }

    /*iniciarAlterar = (cliente) => {
        this.setState({alterando: true, nome: cliente.nome, cpf: cliente.cpf, telefone: cliente.telefone})
    }*/

    iniciarAlterar = (cliente, endereco) => {
        this.setState({alterando: true, nome: cliente.nome, cpf: cliente.cpf, telefone: cliente.telefone, logradouro: endereco.logradouro, numero: endereco.numero, nomeBairro: endereco.nomeBairro})
    }
    
    gravarNovoCliente = () => {
        
        const dadosEndereco = {
            "logradouro": this.state.logradouro,
            "numero": this.state.numero,
            "nomeBairro": this.state.nomeBairro
        }
        
        const dadosCliente = {
            "nome": this.state.nome,
            "cpf": this.state.cpf,
            "telefone": this.state.telefone,
            "logradouro": this.state.logradouro,
            "numero": this.state.numero,
            "nomeBairro": this.state.nomeBairro
        }

        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosEndereco)
        };

        let url = window.servidor + '/endereco/incluir'

        fetch(url, requestOptions)

        requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosCliente)
        };

        url = window.servidor + '/cliente/incluir'

        fetch(url, requestOptions)
            .then(fim => {
                this.setState({incluindo: false})
                this.preencherEndereco()
                this.preencherCliente()
            })
        .catch(erro => console.log(erro));
    }

    gravarAlterar = () => {
        const dados = {
            "nome": this.state.nome,
            "cpf": this.state.cpf,
            "telefone": this.state.telefone,
            "logradouro":"Rua M",
            "numero": "1",
            "nomeBairro": "Mirante"
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(dados)
        };

        const url = window.servidor + '/cliente/alterar'

        fetch(url, requestOptions)
            .then(fim => {
                this.setState({alterando: false})
                this.preencherCliente()
            })
            .catch(erro => console.log(erro));
    }

    excluir = (cliente) => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const url = window.servidor + '/cliente/excluir/' + cliente.cpf

        fetch(url, requestOptions)
            .then(fim => {
                this.preencherCliente()
            })
            .catch(erro => console.log(erro));
    }

    voltar = () => {
        this.setState({incluindo: false, alterando: false})
    }
    
    renderIncluirNovoCliente = () => {
        return (            
            <Container>
                <h1>Identificação</h1>
                <div>
                    <h3>Dados Pessoais</h3>
                    <form className="box">
                        <div> <label>Nome:  </label>
                            <input placeholder="Seu Nome" value={this.state.nome} onChange={this.txtNome_change} type="text"></input>
                        </div>
                        <div>
                            <label>CPF:  </label>
                            <input placeholder="Seu CPF" classeName="text" value={this.state.cpf} onChange={this.txtCpf_change}  type="text"></input>
                        </div>
                        <div>
                            <label>Telefone:  </label>
                            <input placeholder="Telefone" value={this.state.telefone} onChange={this.txtTelefone_change} type="text"></input>
                        </div>
                        <div className="button">
                        <button className="button" onClick = {() => this.gravarNovo()}> <MdSave className="save"/> </button>
                        <button className="button" onClick = {() => this.editarNovo()}> <MdModeEdit className="edit"/> </button>
                        </div>
                    </form>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <form className="box">
                        <div> <label>Bairro:  </label>
                            <select placeholder="Selecione" id="bairro" value={this.state.selectedOption} onChange={this.txtNome_change} type="text"></select>
                        </div>
                        <div>
                            <label>Número:  </label>
                            <input placeholder="Número" classeName="text" value={this.state.numero} onChange={this.txtNumero_change}  type="text"></input>
                        </div>
                        <div>
                            <label>Complemento:  </label>
                            <input placeholder="Complemento" value={this.state.complemento} onChange={this.txtComplemento_change} type="text"></input>
                        </div>
                        <div>
                            <label>Ponto de Referencia:  </label>
                            <input placeholder="Referencia" value={this.state.referencia} onChange={this.txtReferencia_change} type="text"></input>
                        </div>
                        <div className="button">
                        <button className="button" onClick = {() => this.gravarNovo()}> <MdSave className="save"/> </button>
                        <button className="button" onClick = {() => this.editarNovo()}> <MdModeEdit className="edit"/> </button>
                        </div>
                        
                    </form>
                </div>
            </Container>
        )
    }
/*renderAlterarCliente = () => {
        return (
            <div>
                <div className="row mt-5 pt-2">
                    <div className="col-2"></div>
                    <div className="col-8 text-white bg-danger text-center mt-5 pt-2"><h3>Identificação</h3></div>
                    <div className="col-2"></div>
                </div>
                <div className="row mt-4 pt-2">
                    <div className="col-2"></div>
                    <div className="col-8 text-warning bg-dark mt-1 pt-1"><text>Dados Pessoais</text></div>
                    <div className="col-2"></div>
                    <form>
                        <div className="form-group row">
                            <div className="col-2"></div>
                            <label className="col-1 text-center text-white bg-dark">Nome</label>
                            <div className="col-6">
                                <input value={this.state.nome} onChange={this.txtNome_change} className="form-control name-pull-image text-white bg-dark" type="text"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-2"></div>
                            <label className="col-1 text-center text-white bg-dark">CPF</label>
                            <div className="col-6">
                                <input value={this.state.cpf} readOnly className="form-control name-pull-image text-white bg-dark" type="text"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-2"></div>
                            <label className="col-1 text-center text-white bg-dark">Telefone</label>
                            <div className="col-6">
                                <input value={this.state.telefone} onChange={this.txtTelefone_change} className="form-control name-pull-image text-white bg-dark" type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row mt-2">
                    <div className="col-2"></div>
                    <div className="col-1">
                        <button className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Gravar Alteração" onClick = {() => this.gravarAlterar()}><i className="bi bi-cloud-check-fill"></i></button>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Voltar" onClick = {() => this.voltar()}><i className="bi bi-arrow-return-left"></i></button>
                    </div>
                </div>
            </div>
        )
    }


    renderExibirCliente = () => {
        return(
            <div className="mt-5 pt-4">
                <button type="button" className="btn btn-secondary mt-3" onClick={() => this.iniciarNovo()}>Novo</button>
                <table className="table table-dark table-striped mt-2">
                    <thead>
                        <tr>
                            <th scope="col">CPF</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Logrodouro</th>
                            <th scope="col">Numero</th>
                            <th scope="col">Bairro</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cliente && this.state.cliente.map(cliente => {
                            if (cliente.cpf === "132589897-55") { //cpf de comparacao setado hardcoded no lado direito
                                return <tr key={cliente.cpf}>
                                    <th scope="row">{cliente.cpf}</th>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.logradouro}</td>
                                    <td>{cliente.numero}</td>
                                    <td>{cliente.nomeBairro}</td>
                                    <td><button onClick={() => this.iniciarAlterar(cliente)} type="button" className="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar cliente"><i className="bi bi-pencil-fill"></i></button></td>
                                    <td><button onClick={() => this.excluir(cliente)} type="button" className="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Excluir cliente"><i className="bi bi-trash-fill"></i></button></td>
                                </tr>
                            }
                            return<tr></tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        let pagina = ''
        if(this.state.incluindo) {
            pagina = this.renderIncluirNovoCliente()
        } else {
            if(this.state.alterando) {
                pagina = this.renderAlterarCliente()
            } else {
                pagina = this.renderExibirCliente()
            }
        }
        return pagina
    } */

} 