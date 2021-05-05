import React, { Component } from 'react'

export default class Cliente extends Component {
    state = {
        nome: "",
        cpf: "",
        telefone: "",
        cliente: [],
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

    componentDidMount() {
        this.preencherCliente()
    }

    iniciarNovo = () => {
        this.setState({incluindo: true, nome: '', cpf: '', telefone: ''})
    }

    iniciarAlterar = (cliente) => {
        this.setState({alterando: true, nome: cliente.nome, cpf: cliente.cpf, telefone: cliente.telefone})
    }

    gravarNovoCliente = () => {
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

        const url = window.servidor + '/cliente/incluir'

        fetch(url, requestOptions)
            .then(fim => {
                this.setState({incluindo: false})
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
                                <input value={this.state.cpf} onChange={this.txtCpf_change} className="form-control name-pull-image text-white bg-dark" type="text"></input>
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
                        <button className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Gravar" onClick = {() => this.gravarNovoCliente()}><i className="bi bi-cloud-check-fill"></i></button>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Voltar" onClick = {() => this.voltar()}><i className="bi bi-arrow-return-left"></i></button>
                    </div>
                </div>
            </div>
        )
    }

    renderAlterarCliente = () => {
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
    }
}